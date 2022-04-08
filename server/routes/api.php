<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\RateController;
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

Route::prefix('/user')->group(function () {
    Route::controller(UsersController::class)->group(function () {
        Route::post('/register', 'register');
        Route::post('/login', 'login');
        Route::post('/logout', 'logout');
    });

    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(UsersController::class)->group(function () {
            Route::get('/test', 'testAuth');
            Route::get('', 'getUserInfo');
        });
    });
});
Route::prefix('/book/rating')->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(RateController::class)->group(function () {
            Route::get('/','index');
            Route::post('/add','store');
        });
    });
});
