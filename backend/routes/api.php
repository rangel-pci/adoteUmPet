<?php

use App\Http\Controllers\AdoptionController;
use App\Http\Controllers\PetController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pet', [PetController::class, 'index']);
Route::post('/pet', [PetController::class, 'store']);

Route::get('/adoption', [AdoptionController::class, 'index']);
Route::post('/adoption', [AdoptionController::class, 'store']);