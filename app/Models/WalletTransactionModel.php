<?php

namespace App\Models;

use CodeIgniter\Model;

class WalletTransactionModel extends Model
{
    protected $table = 'wallet_transactions';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $allowedFields = ['driver_id', 'shipment_id', 'transaction_type', 'amount', 'reference', 'status'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';

    public function getDriverTransactions($driverId, $limit = 50)
    {
        return $this->where('driver_id', $driverId)
            ->orderBy('created_at', 'DESC')
            ->limit($limit)
            ->findAll();
    }

    public function getDriverBalance($driverId)
    {
        $result = $this->selectSum('amount')
            ->where('driver_id', $driverId)
            ->where('status', 'completed')
            ->groupStart()
            ->where('transaction_type', 'earning')
            ->orWhere('transaction_type', 'bonus')
            ->groupEnd()
            ->first();

        return $result['amount'] ?? 0;
    }

    public function recordTransaction($driverId, $type, $amount, $reference = null, $shipmentId = null)
    {
        return $this->insert([
            'driver_id' => $driverId,
            'shipment_id' => $shipmentId,
            'transaction_type' => $type,
            'amount' => $amount,
            'reference' => $reference,
            'status' => 'completed',
            'created_at' => date('Y-m-d H:i:s'),
        ]);
    }

    public function getPendingWithdrawals()
    {
        return $this->where('transaction_type', 'withdrawal')
            ->where('status', 'pending')
            ->findAll();
    }
}
