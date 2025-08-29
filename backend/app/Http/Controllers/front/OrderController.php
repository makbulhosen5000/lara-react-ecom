<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // save order function
    public function order(Request $request){
       
        if(!empty($request->cart)){
        $order = new Order();
        $order->name = $request->name;
        $order->email = $request->email;
        $order->address = $request->address;
        $order->phone = $request->phone;
        $order->state = $request->state;
        $order->zip = $request->zip;
        $order->city = $request->city;
        $order->sub_total = $request->sub_total;
        $order->grand_total = $request->grand_total;
        $order->shipping = $request->shipping;
        $order->discount = $request->discount;
        $order->payment_status = $request->payment_status;
        $order->status = $request->status;
        $order->user_id = $request->user()->id;
        $order->save();
        //save order items
        foreach ($request->cart as $item) {
            $orderItem = new OrderItem();
            $orderItem->order_id = $order->id;
            $orderItem->name = $item['title'];
            $orderItem->price = $item['qty'] * $item['price'];
            $orderItem->unit_price = $item['price'];
            $orderItem->qty = $item['qty'];
            $orderItem->product_id = $item['product_id'];
            $orderItem->size = $item['size'];
            $orderItem->save();
        }
        return response()->json([
            'message' => 'Order placed successfully',
            'id' => $order->id,
            'status' => 200,
        ], 200);
        }else{
            return response()->json([
                'message' => 'Your cart is empty',
                'status' => 400,
            ], 400);
        }
    
       
    }
}
