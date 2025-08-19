<?php

use App\Http\Controllers\front\ProductController as FrontProductController;
use App\Http\Controllers\admin\AuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\SizeController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\front\AccountController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware(middleware: 'auth:sanctum');

//login route for admin
Route::post('/admin/login',[AuthController::class, 'authenticate']);
Route::get('/get-latest-product',[FrontProductController::class, 'getLatestProduct']);
Route::get('/get-featured-product',[FrontProductController::class, 'getFeaturedProduct']);
Route::get('/get-categories',[FrontProductController::class, 'getCategories']);
Route::get('/get-brands',[FrontProductController::class, 'getBrands']);
Route::get('/get-products',[FrontProductController::class, 'getProducts']);
Route::get('/get-product/{id}',[FrontProductController::class, 'getProduct']);

// middleware for all routes
Route::group(['middleware' => 'auth:sanctum'],function(){
// categories routes
Route::get('/categories',[CategoryController::class, 'index']);
Route::post('/categories',[CategoryController::class, 'store']);
Route::get('/categories/{id}',[CategoryController::class, 'show']);
Route::put('/categories/{id}',[CategoryController::class, 'update']);
Route::delete('/categories/{id}',[CategoryController::class, 'destroy']);
    
//routes for brands
Route::resource('/brands', BrandController::class);
//routes for sizes
Route::resource('/sizes', SizeController::class);
//routes for products
Route::resource('/products', ProductController::class);
// this route is for uploading temp images
Route::post('/temp-images',[TempImageController::class, 'store']);
// this route is for saving product images
Route::post('/save-product-images',[ProductController::class, 'saveProductImage']);
Route::get('/set-product-default-images', [ProductController::class, 'setProductDefaultImage']);   
Route::delete('/delete-product-image/{id}', [ProductController::class, 'deleteProductImage']);   
// user registration
Route::post('/register', [AccountController::class, 'register']);
Route::post('/login', [AccountController::class, 'authenticate']);
});