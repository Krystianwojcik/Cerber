<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('/klienci/', function () {
    return view('klienci');
});
Route::get('/klienci/nowy/', function () {
    return view('klienciAdd');
});
Route::get('/optymalizacje/', function () {
    return view('optimizations');
});
/*Route::get('/optymalizacje/klient/', function () {
    return view('optimizationKlient');
});*/

Route::get('/optymalizacje/{client}/kwartal-{quarter}', [App\Http\Controllers\HomeController::class, 'optimization'])->name('optimization');

Route::get('/optymalizacje/klient/nowy/', [App\Http\Controllers\HomeController::class, 'addOptimization'])->name('addOptimization');

Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    return "Cache is cleared";
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'getClientWithQuarter'])->name('home');
