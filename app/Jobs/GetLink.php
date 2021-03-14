<?php

namespace App\Jobs;

use App\Models\CheckOptymization;
use App\Models\Client;
use App\Models\ClientsRaports;
use App\Models\Optymization;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GetLink implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
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

        $page = file_get_contents($url);
        $array = preg_match_all('/href="(.*?)">/ims', $page, $match) ? $match[1] : null;
        var_dump($array);
        if($optymization->value == $value) {
            $correct = 1;
        } else {
            $correct = 0;
        }

        $CheckOptymization = CheckOptymization::create([
            'optymization_id' => $this->optymization_id,
            'correct' => $correct,
            'value' => $value
        ]);
        ClientsRaports::create([
            'client_id' => $this->client_id,
            'check_id' => $CheckOptymization->id
        ]);
    }
}
