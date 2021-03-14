<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\User;
use App\Models\ClientsRaports;
use App\Models\OptymizationsQuarters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
    }
    public function getActiveClient()
    {
        return Client::where('active', true)->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $addClient = Client::create([
            'domain' => $request['domain'],
            'ssl' => $request['ssl'],
            'www' => $request['www'],
            'active' => $request['active']
        ]);



        if ($addClient) {
            OptymizationsQuarters::create([
                'client_id' => $addClient->id,
                'quarter' => 1,
                'start_Quarter' => '2021-04-01',
                'end_Quarter' => '2021-06-30'
            ]);
            return response()->json(['message' => 'Klient ' . $request['name'] . ' został dodany']);
        } else {
            return error()->json(['message' => 'Klient nie został dodany']);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Client::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client = Client::find($id);

        $client->domain = $request['domain'];
        if($request['ssl']) {
            $client->ssl = true;
        } else {
            $client->ssl = false;
        }
        if($request['www']) {
            $client->www = true;
        } else {
            $client->www = false;
        }
        if($request['active']) {
            $client->active = true;
        } else {
            $client->active = false;
        }

        $update = $client->save();
        if ($update) {
            return response()->json(['message' => 'Klient ' . $request['name'] . ' został zaktualizowany']);
        } else {
            return error()->json(['message' => 'Klient nie został zmieniony']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $client = Client::find($id);
        $delete = $client->delete();
        if ($delete) {
            return response()->json(['message' => 'Klient ' . $client['domain'] . ' został usunięty']);
        } else {
            return error()->json(['message' => 'wystąpił błąd, spróbój później']);
        }
    }

    public function hiddenUser($id)
    {
        $client = Client::find($id);
        $client->active = false;
        $update = $client->save();

        if ($update) {
            return response()->json(['message' => 'Klient ' . $client['domain'] . ' został wyłączony']);
        } else {
            return error()->json(['message' => 'wystąpił błąd, spróbój później']);
        }
    }

    public function getClientWithQuarter()
    {
        return Client::with('optymizationsQuarters')->get();
    }

    public function getClientWithRaport()
    {
        $return = Client::with('optymizationAttribute')->get();
        return $return;
    }

    public function getQuarters(Request $request)
    {
        return OptymizationsQuarters::where('client_id', $request['client'])->get();
    }
}
