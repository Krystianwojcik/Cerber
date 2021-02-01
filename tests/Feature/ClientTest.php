<?php

namespace Tests\Feature;

use App\Models\Client;
use Tests\TestCase;
use Illuminate\Support\Facades\Artisan;

class ClientTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testAddClient()
    {
        Artisan::call('migrate:refresh');

        $client = Client::create([
            'domain' => 'example.com',
            'ssl' => true,
            'www' => true,
            'active' => true,
        ]);

        $response = $this->get('/api/client/' . $client->id);

        $response->assertStatus(200)->assertSeeText('example.com');
    }
}
