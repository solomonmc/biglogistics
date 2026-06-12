<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateDriverProfilesTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'user_id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'unique' => true,
            ],
            'vehicle_type' => [
                'type' => 'VARCHAR',
                'constraint' => 100,
                'null' => true,
            ],
            'vehicle_registration' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
                'null' => true,
            ],
            'license_number' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
                'null' => true,
            ],
            'license_expiry' => [
                'type' => 'DATE',
                'null' => true,
            ],
            'is_available' => [
                'type' => 'BOOLEAN',
                'default' => false,
            ],
            'current_latitude' => [
                'type' => 'DECIMAL',
                'constraint' => [10, 8],
                'null' => true,
            ],
            'current_longitude' => [
                'type' => 'DECIMAL',
                'constraint' => [11, 8],
                'null' => true,
            ],
            'rating' => [
                'type' => 'DECIMAL',
                'constraint' => [3, 2],
                'default' => 5.00,
            ],
            'total_deliveries' => [
                'type' => 'INT',
                'unsigned' => true,
                'default' => 0,
            ],
            'wallet_balance' => [
                'type' => 'DECIMAL',
                'constraint' => [10, 2],
                'default' => 0,
            ],
            'created_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
            'updated_at' => [
                'type' => 'DATETIME',
                'null' => true,
            ],
        ]);

        $this->forge->addKey('id', false, false, 'PRIMARY');
        $this->forge->addUniqueKey('user_id');
        $this->forge->addForeignKey('user_id', 'users', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('driver_profiles');
    }

    public function down()
    {
        $this->forge->dropTable('driver_profiles');
    }
}
