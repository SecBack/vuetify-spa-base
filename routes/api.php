<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/login', 'App\Http\Controllers\Auth\LoginController@index');
Route::post('/register', 'App\Http\Controllers\Auth\RegisterController@create');

// you must be authenticated to access these api routes
Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@index');


});