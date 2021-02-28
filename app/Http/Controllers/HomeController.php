<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Optymization;
use App\Models\OptymizationsQuarters;
use Illuminate\Http\Request;
use App\Repository\Repository;
use App\Gateway\Gateway;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Repository $Repository, Gateway $Gateway)
    {
        $this->middleware('auth');
        $this->R = $Repository;
        $this->G = $Gateway;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        echo $this->G->test();
        echo $this->R->test();
        //return view('home');
    }
    public function optimization($client, $quarter)
    {
        $clientID = Client::where('domain', $client)->first();
        $return = OptymizationsQuarters::where('client_id', $clientID->id)->where('quarter', $quarter)->first();
        return view('optimizationKlient', ['quarter' => $return->id]);
    }
    public function addOptimization()
    {
//        dd($client);
        return view('optimizationKlientAdd');
    }

}
