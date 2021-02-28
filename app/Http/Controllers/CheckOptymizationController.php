<?php

namespace App\Http\Controllers;

use App\Jobs\GetTitle;
use App\Models\Optymization;


class CheckOptymizationController extends Controller
{
    public function index()
    {


        $url = "https://roseness.pl/exploding-box/";

        echo 'Title: ' . getTitle($url);


    }

    function getDescription($url = "https://roseness.pl/exploding-box/") {
        $tags = get_meta_tags($url);
        return @($tags['description'] ? $tags['description'] : "NULL");
    }


    public function getTitleJob()
    {
        $client = Optymization::where('id', 3)->first()->client()->first();

        $GetTitleJob = new GetTitle($client->id, 3);
        dispatch($GetTitleJob);
    }
}
