<?php

namespace App\Http\Controllers;

use App\Models\Client;
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
}
