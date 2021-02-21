<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OptymizationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('optymizations')->insert([
            'quarte_id' => 6,
            'short_url' => '/',
            'attribute_id' => 1,
            'value' => 'Roseness Exploding Box, Ręcznie robione pudełka Na Ślub',
        ]);
        DB::table('optymizations')->insert([
            'quarte_id' => 6,
            'short_url' => '/',
            'attribute_id' => 2,
            'value' => 'Wyjątkowe Exploding Box na ślub z autorskich kolekcji firmy Roseness, to wspaniała pamiątka dla Nowożeńców zaprojektowana i wykonana przez najlepszych artystów.',
        ]);
        DB::table('optymizations')->insert([
            'quarte_id' => 7,
            'short_url' => '/exploding-box/	',
            'attribute_id' => 3,
            'value' => 'Sklep',
        ]);
        DB::table('optymizations')->insert([
            'quarte_id' => 7,
            'short_url' => '/exploding-box/',
            'attribute_id' => 4,
            'value' => 'http://roseness.pl/exploding-box/',
        ]);
    }
}
