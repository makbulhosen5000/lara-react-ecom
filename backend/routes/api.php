<?php

use App\Http\Controllers\front\ProductController as FrontProductController;
use App\Http\Controllers\admin\AdminAuthController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\AdminOrderController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\SizeController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\admin\ShippingChargeController;
use App\Http\Controllers\front\OrderController;
use App\Http\Controllers\front\UserAuthController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware(middleware: 'auth:sanctum');

// routes for front product controller
Route::get('/get-latest-product',[FrontProductController::class, 'getLatestProduct']);
Route::get('/get-featured-product',[FrontProductController::class, 'getFeaturedProduct']);
Route::get('/get-categories',[FrontProductController::class, 'getCategories']);
Route::get('/get-brands',[FrontProductController::class, 'getBrands']);
Route::get('/get-products',[FrontProductController::class, 'getProducts']);
Route::get('/get-product/{id}',[FrontProductController::class, 'getProduct']);


//login route for admin
Route::post('/admin/login',[AdminAuthController::class, 'authenticate']);
// login route for user
Route::post('/user/register', [UserAuthController::class, 'register']);
Route::post('/user/login', [UserAuthController::class, 'authenticate']);


Route::group(['middleware' => ['auth:sanctum','checkUserRole']],function(){
    // order route
    Route::post('/order', [OrderController::class, 'order']);
    Route::get('/get-orders', [UserAuthController::class, 'getOrders']);
    Route::get('/get-order-details/{id}', [UserAuthController::class, 'getOrderDetails']);
    Route::post('/user-profile', [UserAuthController::class, 'userProfile']);
    Route::get('/get-user-profile-details', [UserAuthController::class, 'getUserProfileDetails']);
});





// middleware for all routes
Route::group(['middleware' => ['auth:sanctum','checkAdminRole']],function(){
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
//routes for orders
Route::get('/order',[AdminOrderController::class, 'orders']);
Route::get('/order/{id}',action: [AdminOrderController::class, 'orderDetails']);
Route::put('/order-update-status/{id}',[AdminOrderController::class, 'orderUpdateStatus']);
Route::get('/get-shipping',[ShippingChargeController::class, 'getShipping']);
Route::post('/save-shipping',[ShippingChargeController::class, 'saveShipping']);
});