<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'data' => $product,
        ],200);
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
            'sku' => 'required|unique:products,sku|max:255',
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
        $product->discount_price = $request->input(key: 'discount_price');
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

        //save the product image
        if(!empty($request->gallery)) {
            foreach($request->gallery as $key => $tempImageId) {
                $tempImage = TempImage::find($tempImageId);
                
                //large thumbnail
                $extArray = explode('.',$tempImage->name);
                $ext = end($extArray);

                $imageName = $product->id.'-'.time().'.'.$ext; // making image name
                $manager = new ImageManager(Driver::class);
                $img = $manager->read(public_path(path:'uploads/temp/'.$tempImage->name));
                $img->scaleDown(1200);//width 1200px for image resize.
                $img->save(public_path('uploads/products/large/'.$imageName));
                
                //small thumbnail
                $manager = new ImageManager(Driver::class);
                $img = $manager->read(public_path(path:'uploads/temp/'.$tempImage->name));
                $img->coverDown(400, 460); 
                $img->save(public_path(path: 'uploads/products/small/'.$imageName));
                if($key == 0){
                    $product->image = $imageName;
                    $product->save();
                }
            }
        };

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
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'status' => 404,
                'message' => 'Product not found',
            ], 404);
        }
        return response()->json([
            'status'=> 200,
            'data' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'category_id' => 'required|integer|max:255',
            'qty' => 'required|numeric|max:255',
            'sku' => 'required|unique:products,sku,'.$id.',id|max:255',
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

        //update product
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'status' => 404,
                'message' => 'Product not found',
            ], 404);
        }
        $product->title = $request->input('title');
        $product->price = $request->input(key: 'price');
        $product->discount_price = $request->input(key: 'discount_price');
        $product->category_id = $request->input(key: 'category_id');
        $product->brand_id = $request->input(key: 'brand_id');
        $product->sku = $request->input(key: 'sku');
        $product->qty = $request->input(key: 'qty');
        $product->barcode = $request->input(key: 'barcode');
        $product->description = $request->input(key: 'description');
        $product->short_description = $request->input(key: 'short_description');
        $product->status = $request->input(key: 'status');
        $product->is_featured = $request->input(key: 'is_featured');
        $product->update();
        return response()->json([
            'status' => 200,
            'message' => 'Product update successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
          //delete product
          $product = Product::find($id);
          if (!$product) {
              return response()->json([
                  'status' => 404,
                  'message' => 'Product not found',
              ], 404);
          }
          $product->delete();
         //return response
          return response()->json([
            'status' => 200,
            'message' => 'Product deleted successfully'
          ]);
    }
}
