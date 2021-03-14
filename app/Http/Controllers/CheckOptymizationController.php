<?php

namespace App\Http\Controllers;

use App\Jobs\GetTitle;
use App\Jobs\GetDescription;
use App\Jobs\GetH1;
use App\Models\Optymization;
use Illuminate\Http\Request;


class CheckOptymizationController extends Controller
{
    public function index()
    {


        $url = "https://roseness.pl/exploding-box/";

        echo 'Title: ' . getTitle($url);

    public function addOptymizationToOrder(Request $request)
    {
        $optymizations = Optymization::where("quarte_id", $request['quarter'])->get();

        foreach ($optymizations as $optymization) {
            if ($optymization->attribute_id == 1) {
                $this->getTitleJob($optymization->id);
            } elseif ($optymization->attribute_id == 2) {
                $this->getDescJob($optymization->id);
            } elseif ($optymization->attribute_id == 3) {
                $this->GetH1Job($optymization->id);
            } elseif ($optymization->attribute_id == 4) {

            }
        }

        return response()->json(['message' => 'Optymalizacja został dodana do sprawdzenia']);

    }

    public function getTitleJob($id)
    {
        $client = Optymization::where('id', $id)->first()->client()->first();

        $GetTitleJob = new GetTitle($client->id, $id);
        dispatch($GetTitleJob);
    }

    public function getDescJob($id)
    {
        $client = Optymization::where('id', $id)->first()->client()->first();

        $GetDescJob = new GetDescription($client->id, $id);
        dispatch($GetDescJob);
    }

    public function GetH1Job($id)
    {
        $client = Optymization::where('id', $id)->first()->client()->first();

        $GetH1 = new GetH1($client->id, $id);
        dispatch($GetH1);
    }
}
