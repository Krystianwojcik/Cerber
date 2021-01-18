<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('clients')->insert([
            'domain' => 'aferweb.pl',
            'ssl' => true,
            'www' => false,
            'active' => true,
        ]);
        DB::table('clients')->insert([
            'domain' => 'rosenes.pl',
            'ssl' => true,
            'www' => true,
            'active' => true,
        ]);
    }
}
