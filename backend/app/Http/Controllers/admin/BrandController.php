<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    // this method will return  all brands
    public function index(){
        $brands = brand::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'data' => $brands,
        ]);
    }
    // this method will  store all brands in DB
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ], status: 400);
        }
        $brand = new Brand();
        $brand->name = $request->input('name');
        $brand->status = $request->input('status');
        $brand->save();
        return response()->json([
            'status' => 200,
            'message' => 'Brand Added Successfully',
            'data' => $brand,
        ]);
    }
    // this method will  return single value of brand
    public function show($id){
        $brand = Brand::find($id);
        if($brand == null){
            return response()->json([
                'status' => 404,
                'message' => 'Brand Not Found',
            ],404);
        }
        return response()->json([
            'status' => 200,
            'data' => $brand,
        ]);
        
    }
    // this method will  update all brands
    public function update(Request $request, $id){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ], status: 400);
        }
        $brand = Brand::find($id);
        $brand->name = $request->input('name');
        $brand->status = $request->input('status');
        $brand->update();
        return response()->json([
            'status' => 200,
            'message' => 'Brand Update Successfully',
            'data' => $brand,
        ]);
    }
    // this method will destroy brands
    public function destroy($id){
        $brand = Brand::find($id);
        if($brand == null){
            return response()->json([
                'status' => 404,
                'message' => 'Brand Not Found',
            ],404);
        }
        $brand->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Brand Deleted Successfully',
        ]);
    }
}
