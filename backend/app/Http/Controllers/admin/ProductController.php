<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
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
        $product = Product::orderBy('created_at', 'desc')
                    ->with('product_images') // relationship to get product images from product_images table
                    ->get();
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
            'category' => 'required|integer|max:255',
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
        $product->category_id = $request->input(key: 'category');
        $product->brand_id = $request->input(key: 'brand');
        $product->sku = $request->input(key: 'sku');
        $product->qty = $request->input(key: 'qty');
        $product->barcode = $request->input(key: 'barcode');
        $product->description = $request->input(key: 'description');
        $product->short_description = $request->input(key: 'short_description');
        $product->status = $request->input(key: 'status');
        $product->is_featured = $request->input(key: 'is_featured');
        $product->save();       
        //save the product image

        /*
        *Example of $request->gallery:
        *$request->gallery is an array of tem_images table IDs submitted from the frontend or API request.
        *temp_images table's id will foreach() and adjust with product table.
        {
            "gallery": [1, 2, 3] 
        }
        where 1, 2, 3 are the IDs of the images in the temp_images table.
        */ 
        if(!empty($request->gallery)) {
            foreach($request->gallery as $key => $tempImageId) {
                $tempImage = TempImage::find($tempImageId);
                
                //large thumbnail generate
                $extArray = explode('.',$tempImage->name);
                $ext = end($extArray);

                $imageName = $product->id.'-'.time().'.'.$ext; // making image name
                $manager = new ImageManager(Driver::class);
                $img = $manager->read(public_path(path:'uploads/temp/'.$tempImage->name));
                $img->scaleDown(1200); //large thumbnail size  1200X1200px.
                $img->save(public_path('uploads/products/large/'.$imageName));
                
                //small thumbnail generate
                $manager = new ImageManager(Driver::class);
                $img = $manager->read(public_path(path:'uploads/temp/'.$tempImage->name));
                $img->coverDown(400, 460); //small thumbnail size 400x460px.
                $img->save(public_path(path: 'uploads/products/small/'.$imageName));
                
                //save image in product_image table
                $productImage = new ProductImage();
                $productImage->image = $imageName;
                $productImage->product_id = $product->id;
                $productImage->save(); 

                if($key == 0){
                    $product->image = $imageName; //set the first image as product table main image with image name
                    $product->save(); // 2 times save product model. 1st time save in the up.
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
        $product = Product::with('product_images') // relationship to get product images from product_images table
                    ->find($id);
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
            'category' => 'required|integer|max:255',
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
        $product->category_id = $request->input(key: 'category');
        $product->brand_id = $request->input(key: 'brand');
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
    //  product image function for updating/saving product images
    public function saveProductImage(Request $request){
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ], 400);
        }
  
        $image = $request->file(key: 'image');
        $imageName = $request->product_id.'-'.time().'.'.$image->extension(); //extension will create name, like this 25255.jpg

        //large thumbnail generate
        $manager = new ImageManager(Driver::class);
        $img = $manager->read($image->getPathName());
        $img->scaleDown(1200); //large thumbnail size  1200X1200px.
        $img->save(public_path('uploads/products/large/'.$imageName));
        
        //small thumbnail generate
        $manager = new ImageManager(Driver::class);
        $img = $manager->read($image->getPathName());
        $img->coverDown(400, 460); //small thumbnail size 400x460px.
        $img->save(public_path(path: 'uploads/products/small/'.$imageName));
    
        // insert a record in product_image table
        $productImage = new ProductImage();
        $productImage->image = $imageName;
        $productImage->product_id = $request->product_id;
        $productImage->save();

        return response()->json([
            'status' => 200,
            'message' => "Image updated successfully",
            'data' => $productImage,
        ], 200);
    }
    //set product default images function
    public function setProductDefaultImage(Request $request){
      
      $product = Product::find($request->product_id);
      $product->image = $request->image; // set the new image name
      $product->save(); // save the product model
      return response()->json([
          'status' => 200,
          'message' => "Product default image set successfully",
      ], 200);
   }
}
