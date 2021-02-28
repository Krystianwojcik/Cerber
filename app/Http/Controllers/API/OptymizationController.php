<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Optymization;
use App\Models\OptymizationsQuarters;
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
        $currentQuarte = OptymizationsQuarters::where("client_id", 2)->latest('created_at')->first();


        $addOptymization = Optymization::create([
            'quarte_id' => $currentQuarte->id,
            'short_url' => $request['short_url'],
            'attribute_id' => $request['attribute_id'],
            'value' => $request['value']
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function getOptymizations(Request $request)
    {
        $return = Optymization::where('quarte_id', $request['quarter'])->with('optymizationAttribute')->get();
        return $return;
    }
}
