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
        ],[
            'domain' => 'rosenes.pl',
            'ssl' => true,
            'www' => false,
            'active' => true,
        ]);

/*        for ($i = 1; $i <= 4; $i++) {

        }
        $faker = Faker\Factory::create('pl_PL');*/
    }
}
