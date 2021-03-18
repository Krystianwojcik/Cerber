<?php

namespace App\Http\Controllers;

use App\Models\UserClient;
use App\Models\User;
use App\Models\Client;
use App\Models\ClientsRaports;
use App\Models\Optymization;
use App\Models\OptymizationsQuarters;
use App\Models\CheckOptymization;
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
        return view('home');
    }

    public function optimization($client, $quarter)
    {
        $clientID = Client::where('domain', $client)->first();
        $return = OptymizationsQuarters::where('client_id', $clientID->id)->where('quarter', $quarter)->first();
        return view('optimizationKlient', ['quarter' => $return->id], ['client' => $clientID]);
    }

    public function editOptimization($id)
    {
        $optymization = Optymization::where('id', $id)->first();
        return view('optimizationKlientAdd', ['optymization' => $optymization]);
    }
    public function raporty()
    {
        $clients = Client::with('clientHasRaport')->get();
        return view('raports', ['clients' => $clients]);
    }

    public function raport($client)
    {
        $clientID = Client::where('domain', $client)->first();
        $raport = ClientsRaports::where('client_id', $clientID->id)->first()->with('raport')->with('raportInfo')->where('client_id', $clientID->id)->get();
        return view('raport', ['raport' => $raport]);
    }

    public function addClient()
    {
        return view('klienciAdd');
    }

    public function editClient($id)
    {
        $client = Client::where('id', $id)->first();
        return view('klienciAdd', ['client' => $client]);
    }

    public function addOptimization()
    {
        return view('optimizationKlientAdd');
    }
    public function addUser()
    {
        return view('serAdd');
    }
    public function editUser($id)
    {
        $user = User::find($id);
        return view('serAdd', ['user' => $user]);
    }

    public function userClient($id)
    {
        $client = Client::with('staff')->get();
        return view('userClient', ['client' => $client, 'userid' => $id]);
    }


    public function klienci()
    {
        return view('klienci');
    }

    public function optymalizacje()
    {
        return view('optimizations');
    }


    public function uzytkownicy()
    {
        return view('users');
    }



}
