<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\ShippingCharge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShippingChargeController extends Controller
{
    // Get shipping charge function
    public function getShipping(){
        $shipping = shippingCharge::first();
        return response()->json([
            'status' => 200,
            'data' => $shipping,
        ],200);
    }
    // save shipping charge function
    public function saveShipping(Request $request){

        $validator = Validator::make($request->all(), 
        [
            'shipping_charge' => 'required|numeric',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ],400);
        }
        ShippingCharge::updateOrInsert(
            ['id' => 1],
            ['shipping_charge' => $request->shipping_charge]
        );

        return response()->json([
            'status' => 200,
            'message' => 'Shipping saved successfully',
        ],200);
    }
}
