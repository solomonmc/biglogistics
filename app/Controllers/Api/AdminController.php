<?php

namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use App\Models\ShipmentModel;
use App\Models\UserModel;
use App\Models\DriverProfileModel;
use App\Models\SupportTicketModel;

class AdminController extends ResourceController
{
    protected $format = 'json';

    public function dashboard()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $shipmentModel = new ShipmentModel();
        $userModel = new UserModel();
        $driverModel = new DriverProfileModel();

        $activeJobs = $shipmentModel->where('status', 'in_transit')->countAllResults();
        $totalCustomers = $userModel->where('role', 'customer')->countAllResults();
        $totalDrivers = $userModel->where('role', 'driver')->countAllResults();
        $availableDrivers = $driverModel->where('is_available', true)->countAllResults();

        return $this->respond([
            'success' => true,
            'data' => [
                'active_jobs' => $activeJobs,
                'total_customers' => $totalCustomers,
                'total_drivers' => $totalDrivers,
                'available_drivers' => $availableDrivers,
            ],
        ], 200);
    }

    public function listShipments()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $shipmentModel = new ShipmentModel();
        $status = $this->request->getVar('status');
        $limit = $this->request->getVar('limit') ?? 50;

        $query = $shipmentModel;
        if ($status) {
            $query = $query->where('status', $status);
        }

        $shipments = $query->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->findAll();

        return $this->respond([
            'success' => true,
            'data' => $shipments,
        ], 200);
    }

    public function listDrivers()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $driverModel = new DriverProfileModel();
        $drivers = $driverModel->findAll();

        return $this->respond([
            'success' => true,
            'data' => $drivers,
        ], 200);
    }

    public function listCustomers()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $userModel = new UserModel();
        $customers = $userModel->where('role', 'customer')->findAll();

        return $this->respond([
            'success' => true,
            'data' => $customers,
        ], 200);
    }

    public function assignShipment()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $shipmentId = $this->request->getVar('shipment_id');
        $driverId = $this->request->getVar('driver_id');

        if (!$shipmentId || !$driverId) {
            return $this->failValidationErrors('shipment_id and driver_id are required');
        }

        $shipmentModel = new ShipmentModel();
        $shipment = $shipmentModel->find($shipmentId);

        if (!$shipment) {
            return $this->failNotFound('Shipment not found');
        }

        // Get driver user ID from driver profile
        $driverModel = new DriverProfileModel();
        $driver = $driverModel->find($driverId);

        if (!$driver) {
            return $this->failNotFound('Driver not found');
        }

        $shipmentModel->update($shipmentId, [
            'driver_id' => $driver['user_id'],
            'status' => 'assigned',
        ]);

        return $this->respond([
            'success' => true,
            'message' => 'Shipment assigned successfully',
        ], 200);
    }

    public function autoAssignJobs()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $shipmentModel = new ShipmentModel();
        $driverModel = new DriverProfileModel();

        // Get pending shipments
        $pendingShipments = $shipmentModel->where('status', 'pending')->findAll();
        $availableDrivers = $driverModel->where('is_available', true)->findAll();

        $assigned = 0;

        foreach ($pendingShipments as $shipment) {
            if (empty($availableDrivers)) {
                break;
            }

            // Simple assignment: round-robin
            $driver = array_shift($availableDrivers);

            $shipmentModel->update($shipment['id'], [
                'driver_id' => $driver['user_id'],
                'status' => 'assigned',
            ]);

            $assigned++;
        }

        return $this->respond([
            'success' => true,
            'message' => $assigned . ' shipments assigned',
            'data' => ['assigned' => $assigned],
        ], 200);
    }

    public function listIssues()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $ticketModel = new SupportTicketModel();
        $issues = $ticketModel->where('status', 'open')
            ->orderBy('priority', 'DESC')
            ->findAll();

        return $this->respond([
            'success' => true,
            'data' => $issues,
        ], 200);
    }

    public function resolveIssue()
    {
        $userRole = $this->request->user->role ?? null;

        if ($userRole !== 'admin') {
            return $this->failForbidden('Only admins can access this');
        }

        $ticketId = $this->request->getVar('ticket_id');

        if (!$ticketId) {
            return $this->failValidationErrors('ticket_id is required');
        }

        $ticketModel = new SupportTicketModel();

        if ($ticketModel->resolveTicket($ticketId)) {
            return $this->respond([
                'success' => true,
                'message' => 'Issue resolved',
            ], 200);
        }

        return $this->fail('Failed to resolve issue', 400);
    }
}
