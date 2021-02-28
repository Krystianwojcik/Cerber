<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserRoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(ClientsSeeder::class);
        $this->call(OptymizationsQuartesSeeder::class);
        $this->call(OptymizationsAttributesSeeder::class);
        $this->call(OptymizationsSeeder::class);
        $this->call(CheckOptymizationsSeeder::class);
        $this->call(ClientOptymizationsSeeder::class);
        $this->call(UserProjectSeeder::class);
        $this->call(ClientsOptymizationsSeeder::class);
    }
}
