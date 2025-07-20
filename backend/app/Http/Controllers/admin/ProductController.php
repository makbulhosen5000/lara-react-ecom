<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'category_id' => 'required|integer|max:255',
            'qty' => 'required|numeric|max:255',
            'sku' => 'required|string|max:255',
            'status' => 'required|numeric|max:255',
            'is_featured' => 'required|string|max:255',
        ]);
        //validate request
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'message' => $validator->errors(),
            ], 400);
        }

        //store products
        $product = new Product();
        $product->title = $request->input('title');
        $product->price = $request->input(key: 'price');
        $product->compare_price = $request->input(key: 'compare_price');
        $product->category_id = $request->input(key: 'category_id');
        $product->brand_id = $request->input(key: 'brand_id');
        $product->sku = $request->input(key: 'sku');
        $product->qty = $request->input(key: 'qty');
        $product->barcode = $request->input(key: 'barcode');
        $product->description = $request->input(key: 'description');
        $product->short_description = $request->input(key: 'short_description');
        $product->status = $request->input(key: 'status');
        $product->is_featured = $request->input(key: 'is_featured');
        $product->save();
        return response()->json([
            'status' => 200,
            'message' => 'Product added successfully',
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
