<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
class AdminOrderController extends Controller
{
    public function orders(){
        $orders  = Order::orderBy('created_at', 'desc')->get();
        return response()->json([
            'data' => $orders,
            'status' => 200
        ],200); 
    }
    public function orderDetails($id){
        $orders  = Order::with( 'items')->find($id);
        if(!$orders){
            return response()->json([
                'message' => 'Order not found',
                'status' => 404
            ],404); 
        }
        return response()->json([
            'data' => $orders,
            'status' => 200
        ],200); 
    }
}
