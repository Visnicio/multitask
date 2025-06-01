<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\TasksController;
use Illuminate\Support\Facades\Route;

// Auth Routes
Route::group([
    'middleware' => ['api'],
    'prefix' => '/auth'
], function ($router) {
    Route::post('/login',    [AuthenticationController::class, 'login']);
    Route::post('/logout',   [AuthenticationController::class, 'logout']);
    Route::post('/refresh',  [AuthenticationController::class, 'refresh']);
    Route::post('/register', [Authenticationcontroller::class, 'register']);
    Route::post('/me',       [AuthenticationController::class, 'me']);
});

// Tasks Routes
Route::group([
    'middleware' => ['api', 'auth:api'],
    'prefix' => '/tasks'
], function ($router) {
    Route::get('/',        [TasksController::class, 'index']);
    Route::post('/create', [TasksController::class, 'create']);
});