<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/hello-world", function(Request $request){
    return "Hello World";
});


// Auth Routes
Route::post('auth/login', [AuthenticationController::class, 'login']);
Route::group([
    'middleware' => 'api',
    'prefix' => '/auth'
], function ($router) {
    Route::post('logout', 'AuthenticationController@logout');
    Route::post('refresh', 'AuthenticationController@refresh');
    Route::post('/me',  [AuthenticationController::class, 'me']);
});

// Tasks Routes
Route::group([
    'middleware' => 'auth:api',
    'prefix' => '/tasks'
], function ($router) {
    Route::get('/', [TasksController::class, 'index']);
    Route::post('/create', 'AuthenticationController@refresh');
});