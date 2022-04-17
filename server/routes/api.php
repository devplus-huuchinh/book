<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\RateController;
use App\Http\Controllers\BookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

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
            Route::patch('/lock', 'lock');
            Route::get('/users', 'getUsers');
            Route::get('', 'getUserInfo');
        });
    });
});

Route::prefix('/rate')->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(RateController::class)->group(function () {
            Route::post('/new', 'newRate');
            Route::delete('/cancel', 'unRate');
        });
    });
    Route::get('', [RateController::class, 'rate']);
});

Route::prefix('/comment')->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(CommentController::class)->group(function () {
            Route::post('', 'comment');
            Route::delete('', 'executed');
            Route::patch('', 'editComment');
            Route::get('', 'allComment');
        });
    });
});

Route::prefix('/books')->group(function () {
    Route::controller(BookController::class)->group(function () {
        Route::get('/new-book', 'newBook');
        Route::get('/{name}', 'search');
        Route::get('/', 'index');
    });
});

Route::prefix('/book')->group(function () {
    Route::middleware(['auth:sanctum'])->group(function () {
        Route::controller(BookController::class)->group(function () {
            Route::post('/', 'store');
            Route::put('/{id}', 'update');
            Route::get('/{id}', 'show');
            Route::delete('/{id}', 'destroy');
        });
    });
});
