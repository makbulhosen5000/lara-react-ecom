<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //get latest Product products function
    public function getLatestProduct(){
        $latestProduct = Product::orderBy('created_at', 'desc')
            ->where('status', 1)
            ->limit(6)
            ->get();
        return response()->json([
            'status' => true,
            'message' => 'Latest products fetched successfully',
            'data' => $latestProduct
        ]);
    }
    //featured products function
    public function getFeaturedProduct(){
        $featured_product = Product::orderBy('created_at', 'desc')
            ->where('status', 1)
            ->where('is_featured', 'yes')
            ->limit(6)
            ->get();
        return response()->json([
            'status' => true,
            'message' => ' Featured products successfully',
            'data' => $featured_product
        ]);
    }
    // get categories function
    public function getCategories(){
        $categories = Category::orderBy('name', 'asc')
        ->where('status',1)->get(); // status 1 means active categories
        return response()->json([
            'status' => 200,
            'data' => $categories,
        ], 200);
    } 
    // get categories function
    public function getBrands(){
        $brands = Brand::orderBy('name', 'asc')
        ->where('status',1)->get(); // status 1 means active categories
        return response()->json([
            'status' => 200,
            'data' => $brands,
        ], 200);
    }    
}
