<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CheckOptymizationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('check_optymization')->insert([
            'optymization_id' => 1,
            'correct' => true,
            'value' => '',
        ]);
        DB::table('check_optymization')->insert([
            'optymization_id' => 2,
            'correct' => true,
            'value' => '',
        ]);
        DB::table('check_optymization')->insert([
            'optymization_id' => 3,
            'correct' => false,
            'value' => 'Sklepqwe',
        ]);
        DB::table('check_optymization')->insert([
            'optymization_id' => 4,
            'correct' => false,
            'value' => 'http://roseness.pl/exploding-box/qwe/',
        ]);
    }
}

