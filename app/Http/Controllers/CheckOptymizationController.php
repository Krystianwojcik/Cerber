<?php

namespace App\Http\Controllers;

use App\Jobs\GetTitle;
use App\Jobs\GetDescription;
use App\Jobs\GetH1;
use App\Models\Optymization;


class CheckOptymizationController extends Controller
{
    public function index()
    {


        $url = "https://roseness.pl/exploding-box/";

        echo 'Title: ' . getTitle($url);


    }


    public function getTitleJob()
    {
        $client = Optymization::where('id', 5)->first()->client()->first();

        $GetTitleJob = new GetTitle($client->id, 5);
        dispatch($GetTitleJob);
    }

    public function getDescJob()
    {
        $client = Optymization::where('id', 2)->first()->client()->first();

        $GetDescJob = new GetDescription($client->id, 2);
        dispatch($GetDescJob);
    }
    public function GetH1Job()
    {
        $client = Optymization::where('id', 3)->first()->client()->first();

        $GetH1 = new GetH1($client->id, 3);
        dispatch($GetH1);
    }
}
