<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $useSoftDeletes = true;
    protected $allowedFields = ['email', 'password', 'first_name', 'last_name', 'phone', 'role', 'avatar_url', 'status', 'is_verified'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';

    public function getUserByEmail($email)
    {
        return $this->where('email', $email)->first();
    }

    public function getUsersByRole($role)
    {
        return $this->where('role', $role)->findAll();
    }

    public function getActiveUsers()
    {
        return $this->where('status', 'active')->findAll();
    }

    public function verifyUser($userId)
    {
        return $this->update($userId, ['is_verified' => true]);
    }
}
