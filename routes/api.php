<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\OptymizationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::apiResource('client', ClientController::class);
Route::apiResource('optymization', OptymizationController::class);
Route::post('getquarters', [ClientController::class, 'getQuarters'])->name('getQuarters');
Route::get('getclientwithquarter', [ClientController::class, 'getClientWithQuarter'])->name('getClientWithQuarter');
Route::get('getoptymizations', [OptymizationController::class, 'getOptymizations'])->name('getOptymizations');
Route::post('add-optymization-to-order', [App\Http\Controllers\CheckOptymizationController::class, 'addOptymizationToOrder'])->name('addOptymizationToOrder');
Route::get('getclientwithraport', [ClientController::class, 'getClientWithRaport'])->name('getClientWithRaport');

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
