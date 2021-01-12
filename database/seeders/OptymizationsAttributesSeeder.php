<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptymizationsAttributesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('optymization_attributes')->insert([
            'attribute' => 'Title',
            'active' => true,
        ]);
        DB::table('optymization_attributes')->insert([
            'attribute' => 'meta description',
            'active' => true,
        ]);
        DB::table('optymization_attributes')->insert([
            'attribute' => 'H1',
            'active' => true,
        ]);
        DB::table('optymization_attributes')->insert([
            'attribute' => '301',
            'active' => true,
        ]);
    }
}
