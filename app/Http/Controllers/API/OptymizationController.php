<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ClientsOptymization;
use App\Models\ClientsRaports;
use App\Models\Optymization;
use App\Models\OptymizationsQuarters;
use App\Models\CheckOptymization;
use Illuminate\Http\Request;

class OptymizationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $currentQuarte = OptymizationsQuarters::where("client_id", $request['domain'])->latest('created_at')->first();

        $addOptymization = Optymization::create([
            'quarte_id' => $currentQuarte->id,
            'short_url' => $request['short_url'],
            'attribute_id' => $request['attribute_id'],
            'value' => $request['value']
        ]);
        ClientsOptymization::create([
            'client_id' => $request['domain'],
            'optymization_id' => $addOptymization->id
        ]);

        if ($addOptymization) {
            return response()->json(['message' => 'Optymalizacja został dodany']);
        } else {
            return error()->json(['message' => 'Optymalizacja nie został dodany']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $optymization = Optymization::find($id);

        if($request['short_url']) {
            $optymization->short_url = $request['short_url'];
        }
        if($request['attribute_id']) {
            $optymization->attribute_id = $request['attribute_id'];
        }
        if($request['value']) {
            $optymization->value = $request['value'];
        }

        $update = $optymization->save();

        if ($update) {
            return response()->json(['message' => 'Optymalizacja został zaktualizowana']);
        } else {
            return error()->json(['message' => 'Optymalizacja nie został zmieniona']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $checkOptymalization = CheckOptymization::where('optymization_id', $id)->first();
        $ClientsRaports = ClientsRaports::where('check_id', $checkOptymalization->id)->first();
        if($ClientsRaports) {
            $ClientsRaports->delete();
        }
        $ClientsOptymization = ClientsOptymization::where('optymization_id', $id)->first();
        if($ClientsOptymization) {
            $ClientsOptymization->delete();
        }
        $Optymization = Optymization::where('id', $id)->first();
        if($Optymization) {
            $Optymization->delete();
        }

        if ($Optymization) {
            return response()->json(['message' => 'Optymalizacja usunięta']);
        } else {
            return error()->json(['message' => 'wystąpił błąd, spróbój później']);
        }
    }
    public function getOptymizations(Request $request)
    {
        $return = Optymization::where('quarte_id', $request['quarter'])->with('optymizationAttribute')->get();
        return $return;
    }
}
