<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'price',
        'compare_price',
        'description',
        'short_description',
        'image',
        'category_id',
        'brand_id',
        'qty',
        'sku',
        'barcode',
        'status',
        'is_featured'
    ];
    
    // get image URL
    // This will append the image_url attribute to the model's array and JSON form
    protected $appends = ['image_url'];
    public function getImageUrlAttribute()
    {
       if($this->image == "") {
           return ;
       }
       return asset('/uploads/products/small/'.$this->image);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
}
