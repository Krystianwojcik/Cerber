<?php

namespace App\Jobs;

use App\Models\CheckOptymization;
use App\Models\Client;
use App\Models\Optymization;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GetDescription implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $client_id;
    public $optymization_id;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($client_id, $optymization_id)
    {
        $this->client_id = $client_id;
        $this->optymization_id = $optymization_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $client = Client::where('id', $this->client_id)->first();
        $optymization = Optymization::where('id', $this->optymization_id)->first();
        $url = '';
        if($client->ssl) {
            $url .= 'https://';
        } else {
            $url .= 'http://';
        }
        if($client->s) {
            $url .= 'www.';
        }
        $url .= $client->domain;
        $url .= $optymization->short_url;


        $tags = get_meta_tags($url);
        $value = @($tags['description'] ? $tags['description'] : "NULL");

        if($optymization->value == $value) {
            $correct = 1;
        } else {
            $correct = 0;
        }


        CheckOptymization::create([
            'optymization_id' => $this->optymization_id,
            'correct' => $correct,
            'value' => $value
        ]);
    }
}
