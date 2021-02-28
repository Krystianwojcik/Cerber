<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsOptymizationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients_optymizations')->insert([
            'client_id' => 2,
            'optymization_id' => 1
        ]);
        DB::table('clients_optymizations')->insert([
            'client_id' => 2,
            'optymization_id' => 2
        ]);
        DB::table('clients_optymizations')->insert([
            'client_id' => 2,
            'optymization_id' => 3
        ]);
        DB::table('clients_optymizations')->insert([
            'client_id' => 2,
            'optymization_id' => 4
        ]);
    }
}
