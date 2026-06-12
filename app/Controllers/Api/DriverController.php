<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\DriverProfileModel;
use App\Models\ShipmentModel;
use App\Models\WalletTransactionModel;

class DriverController extends ResourceController
{
    protected $modelName = 'App\Models\DriverProfileModel';
    protected $format = 'json';

    public function getProfile()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $driver = $this->model->getDriverByUserId($userId);

        if (!$driver) {
            return $this->failNotFound('Driver profile not found');
        }

        return $this->respond([
            'success' => true,
            'data' => $driver,
        ], 200);
    }

    public function updateProfile()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $driver = $this->model->getDriverByUserId($userId);

        if (!$driver) {
            return $this->failNotFound('Driver profile not found');
        }

        $data = [
            'vehicle_type' => $this->request->getVar('vehicle_type') ?? $driver['vehicle_type'],
            'vehicle_registration' => $this->request->getVar('vehicle_registration') ?? $driver['vehicle_registration'],
            'license_number' => $this->request->getVar('license_number') ?? $driver['license_number'],
            'license_expiry' => $this->request->getVar('license_expiry') ?? $driver['license_expiry'],
        ];

        if ($this->model->update($driver['id'], $data)) {
            return $this->respond([
                'success' => true,
                'message' => 'Profile updated successfully',
                'data' => $this->model->find($driver['id']),
            ], 200);
        }

        return $this->fail($this->model->errors(), 400);
    }

    public function updateLocation()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $latitude = $this->request->getVar('latitude');
        $longitude = $this->request->getVar('longitude');

        if (!$latitude || !$longitude) {
            return $this->failValidationErrors('Latitude and longitude are required');
        }

        $driver = $this->model->getDriverByUserId($userId);

        if (!$driver) {
            return $this->failNotFound('Driver profile not found');
        }

        if ($this->model->update($driver['id'], [
            'current_latitude' => $latitude,
            'current_longitude' => $longitude,
        ])) {
            return $this->respond([
                'success' => true,
                'message' => 'Location updated successfully',
            ], 200);
        }

        return $this->fail('Failed to update location', 400);
    }

    public function setAvailability()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $isAvailable = $this->request->getVar('is_available');

        if ($isAvailable === null) {
            return $this->failValidationErrors('is_available is required');
        }

        $this->model->updateAvailability($userId, (bool)$isAvailable);

        return $this->respond([
            'success' => true,
            'message' => 'Availability updated',
            'data' => ['is_available' => (bool)$isAvailable],
        ], 200);
    }

    public function getAssignedJobs()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $shipmentModel = new ShipmentModel();
        $jobs = $shipmentModel->getDriverShipments($userId);

        return $this->respond([
            'success' => true,
            'data' => $jobs,
        ], 200);
    }

    public function getWallet()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $driver = $this->model->getDriverByUserId($userId);

        if (!$driver) {
            return $this->failNotFound('Driver profile not found');
        }

        $walletModel = new WalletTransactionModel();
        $transactions = $walletModel->getDriverTransactions($userId);
        $balance = $driver['wallet_balance'];

        return $this->respond([
            'success' => true,
            'data' => [
                'balance' => $balance,
                'transactions' => $transactions,
            ],
        ], 200);
    }

    public function submitProofOfDelivery()
    {
        $userId = $this->request->user->id ?? null;

        if (!$userId) {
            return $this->failUnauthorized('User not authenticated');
        }

        $shipmentId = $this->request->getVar('shipment_id');
        $receiverName = $this->request->getVar('receiver_name');
        $receiverNote = $this->request->getVar('receiver_note');

        if (!$shipmentId || !$receiverName) {
            return $this->failValidationErrors('shipment_id and receiver_name are required');
        }

        $shipmentModel = new ShipmentModel();
        $shipment = $shipmentModel->find($shipmentId);

        if (!$shipment || $shipment['driver_id'] !== $userId) {
            return $this->failForbidden('Cannot complete this shipment');
        }

        // Handle file uploads for photos/signatures
        $photoUrl = null;
        $signatureUrl = null;

        if ($this->request->getFile('pod_photo')) {
            $photo = $this->request->getFile('pod_photo');
            if ($photo->isValid()) {
                $photoUrl = 'uploads/pod/' . $photo->getRandomName();
                $photo->move('uploads/pod', $photo->getRandomName());
            }
        }

        if ($this->request->getFile('pod_signature')) {
            $signature = $this->request->getFile('pod_signature');
            if ($signature->isValid()) {
                $signatureUrl = 'uploads/signatures/' . $signature->getRandomName();
                $signature->move('uploads/signatures', $signature->getRandomName());
            }
        }

        $shipmentModel->update($shipmentId, [
            'status' => 'delivered',
            'receiver_name' => $receiverName,
            'receiver_phone' => $this->request->getVar('receiver_phone'),
            'pod_photo_url' => $photoUrl,
            'pod_signature_url' => $signatureUrl,
            'delivered_at' => date('Y-m-d H:i:s'),
        ]);

        // Record earning
        $amount = $shipment['quote_amount'] * 0.7; // Driver gets 70% of quote
        $walletModel = new WalletTransactionModel();
        $walletModel->recordTransaction($userId, 'earning', $amount, 'Delivery #' . $shipmentId, $shipmentId);

        return $this->respond([
            'success' => true,
            'message' => 'Delivery completed successfully',
            'data' => ['earning' => $amount],
        ], 200);
    }
}
