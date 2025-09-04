<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserAuthController extends Controller
{  
    // get user register function
    public function register(Request $request)
    {
        $rule = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required',

        ];
        $validator = Validator::make($request->all(), $rule);
        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->errors()->first(),
            ], 404);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->role ="customer";
        $user->save();
        return response()->json([
            'status' => 200,
            'message' => 'User registered successfully',
            'data' => $user,
        ], 200);
    }
    // get user login function
    public function authenticate(Request $request)
    {
        // Validate request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
        // Find user by email
        $user = User::where('email', $request->email)->first();
        // Check credentials
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => '401',
                'message' => 'Either email or password is incorrect',
            ], 401);
        }
        // Block admin users from logging in here
        if ($user->role === 'admin') {
            return response()->json([
                'status' => '403',
                'message' => 'Admin are not allowed to access this login.',
            ], 403);
        }

        // Create Sanctum token
        $token = $user->createToken('token')->plainTextToken;
        
        // Return response
        return response()->json([
            'status' => '200',
            'token' => $token,
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ], 200);

    }

    // Get user order details function
    public function getOrderDetails($id, Request $request)
    {

        $order = Order::where([
                    'user_id' => $request->user()->id, 
                    'id' => $id
                ])
                ->with('items','items.products') 
                ->first();
        if (!$order) {
            return response()->json([
                'status' => 404,
                'message' => 'Order not found',
            ], 404);
        }
    
        return response()->json([
            'status' => 200,
            'data' => $order,
        ], 200);
    }

    //Get logged in user orders function
    public function getOrders(Request $request){
        $orders = Order::where('user_id',$request->user()->id)->get();
        return response()->json([
            'status' => 200,
            'data' => $orders,
        ], 200);
    }
    
    // Get logged in user profile function  
    public function userProfile(Request $request){
        $user = User::find($request->user()->id);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
            'phone' => 'required|max:100',
            'address' => 'required|max:255',
            'city' => 'required|max:100',

        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 404,
                'message' => $validator->errors()->first(),
            ], 404);
        }
       
        if (!$user) {
            return response()->json([
                'status' => 404,
                'message' => 'User not found',
            ], 404);
        }
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->state = $request->state;
        $user->city = $request->city;
        $user->zip = $request->zip;
        // if ($request->password) {
        //     $user->password = Hash::make($request->password);
        // }
        $user->save();
        return response()->json([
            'status' => 200,
            'message' => 'Profile updated successfully',
            'data' => $user,
        ], 200);
    }
    

}
