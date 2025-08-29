<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function user()
    {
        return $this->belongsTo( User::class,'user_id');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class,'order_id');
    }
    
    // laravel date casting for date format
    protected function casts(): array
    {
        return [
            'created_at' => 'date:d/M/Y'];
    }
}
