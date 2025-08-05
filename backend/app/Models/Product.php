<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'price',
        'discount_price',
        'category_id',
        'brand_id',
        'sku',
        'qty',
        'barcode',
        'description',
        'image',
        'status',
        'is_featured'
    ];
    // get image URL
    // This will append the image_url attribute to the model's array and JSON form
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

    public function  product_images()
    {
        return $this->hasMany(ProductImage::class);
    }
    public function  product_sizes()
    {
        return $this->hasMany(ProductSize::class);
    }
}
