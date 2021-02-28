<?php

namespace App\Http\Controllers;

use App\Jobs\GetWebsite;

class CheckOptymization extends Controller
{
    public function index()
    {


        $url = "https://roseness.pl/exploding-box/";

        echo 'Title: ' . getTitle($url);


    }
    public function getTitle($url = "https://roseness.pl/exploding-box/") {
        $page = file_get_contents($url);
        $title = preg_match('/<title[^>]*>(.*?)<\/title>/ims', $page, $match) ? $match[1] : null;
        return $title;
    }
    function getDescription($url = "https://roseness.pl/exploding-box/") {
        $tags = get_meta_tags($url);
        return @($tags['description'] ? $tags['description'] : "NULL");
    }


    public function getWebsite()
    {
        $emailJob = new GetWebsite();
        dispatch($emailJob);
    }
}
