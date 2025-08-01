<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = [
        'product_id',
        'image',
    ];
    protected $appends = ['image_url'];
    public function getImageUrlAttribute()
    {
        // If the image name is empty or null, return null
       if($this->image == "") {
           return ;
       }
       // Or not empty, return the full URL to the image
       return asset('/uploads/products/small/'.$this->image);
    }
}
