<?php

use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\SizeController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware(middleware: 'auth:sanctum');

//login route for admin
Route::post('/admin/login',[AuthController::class, 'authenticate']);

// middleware for all routes
Route::group(['middleware' => 'auth:sanctum'],function(){
// categories routes
Route::get('/categories',[CategoryController::class, 'index']);
Route::post('/categories',[CategoryController::class, 'store']);
Route::get('/categories/{id}',[CategoryController::class, 'show']);
Route::put('/categories/{id}',[CategoryController::class, 'update']);
Route::delete('/categories/{id}',[CategoryController::class, 'destroy']);
    
// resource routes for brands
Route::resource('/brands', BrandController::class);
// resource routes for sizes
Route::resource('/sizes', SizeController::class);
});