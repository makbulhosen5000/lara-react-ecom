<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\ShippingCharge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShippingChargeController extends Controller
{
    public function getShipping(){
        $shipping = shippingCharge::first();
        return response()->json([
            'status' => 200,
            'data' => $shipping,
        ],200);
    }
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

        // $shipping = ShippingCharge::find(1);
        // if(!$shipping){
        //     $updateShipping = new shippingCharge();
        //     $updateShipping->shipping_charge = $request->shipping_charge;
        //     $updateShipping->save();
        // }else{
        //     $shipping->shipping_charge = $request->shipping_charge;
        //     $shipping->save();
        // }
        return response()->json([
            'status' => 200,
            'message' => 'Shipping saved successfully',
        ],200);
    }
}
