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
        for ($i = 1; $i<=5; $i++) {
            DB::table('optymizations_quarters')->insert([
                'client_id' => 1,
                'quarter' => $i,
                'start_quarter' => date("Y-m-d H:i:s"),
                'end_quarter' => date("Y-m-d H:i:s"),
            ]);
        }
        for ($i = 1; $i<=3; $i++) {
            DB::table('optymizations_quarters')->insert([
                'client_id' => 2,
                'quarter' => $i,
                'start_quarter' => date("Y-m-d H:i:s"),
                'end_quarter' => date("Y-m-d H:i:s"),
            ]);
        }
    }
}
