<?php

use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\BrandController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware(middleware: 'auth:sanctum');


Route::post('/admin/login',[AuthController::class, 'authenticate']);
Route::group(['middleware' => 'auth:sanctum'],function(){
    Route::get('/categories',[CategoryController::class, 'index']);
});