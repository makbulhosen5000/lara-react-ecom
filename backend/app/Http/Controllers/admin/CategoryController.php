<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    // this method will return  all categories
    public function index(){
        $categories = Category::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'categories' => $categories,
        ]);
    }
    // this method will  store all categories in DB
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'status' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ], status: 400);
        }
        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status ;
        $category->save();
        return response()->json([
            'status' => 200,
            'message' => 'Category Added Successfully',
            'data' => $category,
        ]);
    }
    // this method will  return single value of category
    public function show($id){
        $category = Category::find($id);
        if($category == null){
            return response()->json([
                'status' => 404,
                'message' => 'Category Not Found',
            ],404);
        }
        return response()->json([
            'status' => 200,
            'category' => $category,
        ]);
        
    }
    // this method will  update all categories
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
        $category = Category::find($id);
        $category->name = $request->name;
        $category->status = $request->status ;
        $category->update();
        return response()->json([
            'status' => 200,
            'message' => 'Category Update Successfully',
            'data' => $category,
        ]);
    }
    // this method will destroy categories
    public function destroy($id){
        $category = Category::find($id);
        if($category == null){
            return response()->json([
                'status' => 404,
                'message' => 'Category Not Found',
            ],404);
        }
        $category->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Category Deleted Successfully',
        ]);
    }
}
