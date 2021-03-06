<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserClient;
use App\Models\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $adduser = User::create([
            'name' => $request['name'],
            'surname' => $request['surname'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
            'role_id' => $request['role_id']
        ]);
        if($adduser) {
            return response()->json(['message' => 'Użytkownik '.$adduser->name.' '.$adduser->surname.' został dodany']);
        } else {
            return error()->json(['message' => 'Użytkownik nie został dodany']);
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
        $client = User::where('id', $id)->with('UserRole')->first();
        return $client;
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
        $User = User::find($id);
        if($request['name']) {
            $User->name = $request['name'];
        }
        if($request['surname']) {
            $User->surname = $request['surname'];
        }
        if($request['email']) {
            $User->email = $request['email'];
        }
        if($request['password']) {
            $User->password = Hash::make($request['password']);
        }
        if($request['role_id']) {
            $User->role_id = $request['role_id'];
        }

        $update = $User->save();

        if ($update) {
            return response()->json(['message' => 'Użtykownik został zaktualizowana']);
        } else {
            return error()->json(['message' => 'Użytkownik nie został zmieniona']);
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
        $User = User::find($id);
        $UserDelete = false;
        if($User) {
            $UserDelete = $User->delete();
        }

        if ($UserDelete) {
            return response()->json(['message' => 'Użytkownik został usunięty']);
        } else {
            return response()->json(['message' => 'Wystąpił błąd, spróbój później']);
        }
    }
    public function addToClient(Request $request) {

        $adduserclient = UserClient::create([
            'user_id' => $request['user_id'],
            'client_id' => $request['client_id']
        ]);
        if ($adduserclient) {
            return response()->json(['message' => 'Klient przydzielony']);
        } else {
            return response()->json(['message' => false]);
        }
    }
    public function removeToClient(Request $request) {

        $removeuserclient = false;
        $removeuserclient = UserClient::where('client_id', $request['client_id'])->where('user_id', $request['user_id'])->first();
        if($removeuserclient) {
            $removeuserclient = $removeuserclient->delete();
        }
        if ($removeuserclient) {
            return response()->json(['message' => 'Dostęp odebrany']);
        } else {
            return response()->json(['message' => false]);
        }
    }
}
