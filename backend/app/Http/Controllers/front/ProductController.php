<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // get products function for filtering products by category and brand
    public function getProducts(Request $request){
        $products = Product::orderBy('created_at','DESC')
                    ->where('status', 1);

        //filter product by category
        if(!empty($request->category)){
            $catArray = explode(',', $request->category);
            $products = $products->whereIn('category_id', $catArray);
        }
        //filter product by brand
        if(!empty($request->brand)){
            $brandArray = explode(',', $request->brand);
            $products = $products->whereIn('brand_id', $brandArray);
        }
        $products = $products->get();
        
        return response()->json([
            'status' => 200,
            'data' => $products,
        ], 200);
    }
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
    // get single product function   
    public function getProduct($id){
        $product = Product::with('product_images','product_sizes.size')->find($id);
        if(!$product){
            return response()->json([
                'status' => 404,
                'message' => 'Product not found',
            ], status: 404);
        } 
        return response()->json([
            'status' => 200,
            'data' => $product,
        ], 200);
    }
}
