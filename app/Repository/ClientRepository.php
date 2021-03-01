<?php

namespace App\Repository;



use App\Models\Client;
use Illuminate\Http\Request;


class ClientRepository {

    public function getClients() {
    }

    public function getClient($id) {
        return Client::find($id);
    }

    public function updateClient($request, $id) {
        return Client::where('id', $id)->update($request->except(['_token', '_method']));
    }

    public function deleteClient($id) {
        return Client::where('id', $id)->delete();
    }

    public function createClient($request) {
        Session::flash('success', "Success!");
        return Client::create($request->except(['_token', '_method']));
    }






}
