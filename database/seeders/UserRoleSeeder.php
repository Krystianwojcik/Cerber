<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role')->insert([
            'name' => 'Administrator'
        ]);
        DB::table('role')->insert([
            'name' => 'Manager'
        ]);
        DB::table('role')->insert([
            'name' => 'Pracownik'
        ]);
    }
}
