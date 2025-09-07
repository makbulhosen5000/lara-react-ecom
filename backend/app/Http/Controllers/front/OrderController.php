<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Stripe\PaymentIntent;
use Stripe\Stripe;

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
    // create payment intent function for stripe payment gateway
    public function createPaymentIntent(Request $request)
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET_KEY'));

            $amount = $request->input('amount');
            if (!$amount || $amount <= 0) {
                return response()->json(['status' => 400, 'message' => 'Invalid amount'], 400);
            }

            // Stripe expects amount in cents
            $amountInCents = $amount * 100;

            $paymentIntent = PaymentIntent::create([
                'amount' => $amountInCents,
                'currency' => 'usd', // change if needed
                'payment_method_types' => ['card'],
            ]);

            return response()->json([
                'status' => 200,
                'client_secret' => $paymentIntent->client_secret,
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => $e->getMessage(),
            ]);
        }
    }


}
