<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'surname' => 'Adminski',
            'email' => 'admin@example.com',
            'password' => bcrypt('pass'),
            'role_id' => 1,
        ]);
        DB::table('users')->insert([
            'name' => 'Manager',
            'surname' => 'Managerski',
            'email' => 'manager@example.com',
            'password' => bcrypt('pass'),
            'role_id' => 2,
        ]);
        DB::table('users')->insert([
            'name' => 'Pracownik',
            'surname' => 'Pracownicki',
            'email' => 'pracownik@example.com',
            'password' => bcrypt('pass'),
            'role_id' => 3,
        ]);
    }
}
