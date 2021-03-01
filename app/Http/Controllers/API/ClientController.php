<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Repository\ClientRepository;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function __construct(ClientRepository $clientRepository)
    {
        $this->cR = $clientRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
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
            'domain' => $request['name'],
            'ssl' => $request['ssl'],
            'www' => $request['www'],
            'active' => $request['active']
        ]);

        console.log($addClient);
        if ($addClient) {
            return response()->json(['message' => 'Klient ' . $addClient['domain'] . ' został dodany']);
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
        $this->cR->updateClient($request, $id);
        return response()->json(['message' => 'Klient ' . $addClient['domain'] . ' został edytowany']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getClientWithQuarter()
    {
        return Client::with('optymizationsQuarters')->get();
    }


}
