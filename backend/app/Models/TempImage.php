<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TempImage extends Model
{
    protected $fillable = ['name'];
    protected $appends = ['image_url'];
    public function getImageUrlAttribute()
    {
       // If the image name is empty or null, return null
       if($this->name == "") {
           return ;
       }
       // Or not empty, return the full URL to the image
       return asset('/uploads/temp/thumb/'.$this->name);
    }
}
