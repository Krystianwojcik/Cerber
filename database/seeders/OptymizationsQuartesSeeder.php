<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptymizationsQuartesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('optymizations_quarters')->insert([
            'clients_ID' => 1,
            'quarter' => 1,
            'start_Quarter' => date("Y-m-d H:i:s"),
            'end_Quarter' => date("Y-m-d H:i:s"),
        ]);
    }
}
