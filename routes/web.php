<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use app\Http\Middleware\Authenticate;
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

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');

Route::get('/klienci/', [App\Http\Controllers\HomeController::class, 'klienci'])->name('klienci');


Route::get('/klienci/nowy/', [App\Http\Controllers\HomeController::class, 'addClient'])->name('addClient');
Route::get('/klienci/edytuj/{id}', [App\Http\Controllers\HomeController::class, 'editClient'])->name('editClient');


Route::get('/optymalizacje/', [App\Http\Controllers\HomeController::class, 'optymalizacje'])->name('optymalizacje');


Route::get('/raporty/', [App\Http\Controllers\HomeController::class, 'raporty'])->name('raporty');
Route::get('/raporty/{client}/', [App\Http\Controllers\HomeController::class, 'raport'])->name('raport');



Route::get('/optymalizacje/get-title/', [App\Http\Controllers\CheckOptymizationController::class, 'getTitle']);
Route::get('/optymalizacje/get-description/', [App\Http\Controllers\CheckOptymizationController::class, 'getDescription']);

Route::get('/get-title/', [App\Http\Controllers\CheckOptymizationController::class, 'getTitleJob']);
Route::get('/get-desc/', [App\Http\Controllers\CheckOptymizationController::class, 'getDescJob']);
Route::get('/get-h1/', [App\Http\Controllers\CheckOptymizationController::class, 'GetH1Job']);


Route::get('/optymalizacje/{client}/kwartal-{quarter}', [App\Http\Controllers\HomeController::class, 'optimization'])->name('optimization');

Route::get('/optymalizacje/klient/nowy/', [App\Http\Controllers\HomeController::class, 'addOptimization'])->name('addOptimization');
Route::get('/optymalizacje/edytuj/{id}', [App\Http\Controllers\HomeController::class, 'editOptimization'])->name('editOptimization');

Route::get('/uzytkownicy/', [App\Http\Controllers\HomeController::class, 'uzytkownicy'])->name('uzytkownicy');


Route::get('/uzytkownicy/nowy/', [App\Http\Controllers\HomeController::class, 'addUser'])->name('addUser');
Route::get('/uzytkownicy/edytuj/{id}', [App\Http\Controllers\HomeController::class, 'editUser'])->name('editUser');
Route::get('/uzytkownicy/klienci/{id}', [App\Http\Controllers\HomeController::class, 'userClient'])->name('userClient');

Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    return "Cache is cleared";
});

