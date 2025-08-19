<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AccountController extends Controller
{
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

        // Optional: check if user is admin
        // if ($user->role !== 'admin') {
        //     return response()->json([
        //         'status' => '403',
        //         'message' => 'Unauthorized',
        //     ], 403);
        // }

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
}
