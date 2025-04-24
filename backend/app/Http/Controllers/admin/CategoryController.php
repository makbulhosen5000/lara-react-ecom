<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    // this method will return  category page
    public function index(){
        $categories = Category::orderBy('created_at', 'desc')->get();
        return response()->json([
            'status' => 200,
            'categories' => $categories,
        ]);
    }
    // this method will  store all categories
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|name',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => '400',
                'errors' => $validator->errors(),
            ], status: 400);
        }
    }
    // this method will  return single value of category
    public function show(){
        return view('admin.category.index');
    }
    // this method will  update all categories
    public function update(){
        return view('admin.category.index');
    }
    // this method will destroy categories
    public function destroy(){
        return view('admin.category.index');
    }
}
