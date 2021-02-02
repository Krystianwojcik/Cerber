<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users_project')->insert([
            'user_id' => 1,
            'client_id' => 1,
        ]);
        DB::table('users_project')->insert([
            'user_id' => 2,
            'client_id' => 1,
        ]);
        DB::table('users_project')->insert([
            'user_id' => 3,
            'client_id' => 1,
        ]);
        DB::table('users_project')->insert([
            'user_id' => 1,
            'client_id' => 2,
        ]);
    }
}
