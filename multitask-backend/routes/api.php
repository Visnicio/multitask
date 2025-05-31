<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\TasksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get("/hello-world", function(Request $request){
    return "Hello World";
});


// Auth Routes
Route::group([
    'middleware' => ['api', 'TrimStrings'],
    'prefix' => '/auth'
], function ($router) {
    Route::post('/login', [AuthenticationController::class, 'login']);
    Route::post('logout', 'AuthenticationController@logout');
    Route::post('refresh', 'AuthenticationController@refresh');
    Route::post('/register', [Authenticationcontroller::class, 'register']);
});

// Tasks Routes
Route::group([
    'middleware' => ['api', 'auth:api'],
    'prefix' => '/tasks'
], function ($router) {
    Route::post('/me',  [AuthenticationController::class, 'me']);
    Route::get('/', [TasksController::class, 'index']);
    Route::post('/create', 'AuthenticationController@refresh');
});