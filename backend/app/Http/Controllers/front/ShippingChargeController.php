<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\ShippingCharge;
use Illuminate\Http\Request;

class ShippingChargeController extends Controller
{
    // Get shipping charge function
    public function getShipping(){
        $shipping = ShippingCharge::first();
        return response()->json([
            'status' => 200,
            'data' => $shipping,
        ],200);
    }
}
