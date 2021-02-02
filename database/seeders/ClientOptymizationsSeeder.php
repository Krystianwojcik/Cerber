<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientOptymizationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients_check')->insert([
            'client_id' => 1,
            'check_id' => 1
        ]);
        DB::table('clients_check')->insert([
            'client_id' => 1,
            'check_id' => 2
        ]);
        DB::table('clients_check')->insert([
            'client_id' => 1,
            'check_id' => 3
        ]);
        DB::table('clients_check')->insert([
            'client_id' => 1,
            'check_id' => 4
        ]);
    }
}
