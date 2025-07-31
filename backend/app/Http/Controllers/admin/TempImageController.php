<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
class TempImageController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ], 400);
        }
        // Create a new TempImage instance(a dummy name)
        $tempImage = new TempImage();
        $tempImage->name = "dummy temp image name";
        $tempImage->save();

        // Save the image in temp folder
        $image = $request->file('image');
        $imageName = time().'.'.$image->extension(); //extension will create name, like this 25255.jpg
        $image->move(public_path('uploads/temp/'), $imageName);
        $tempImage->name = $imageName;
        $tempImage->save();

        // save image thumbnail by using Intervention Image
        // Create a new ImageManager instance with the GD driver
        // This will create a thumbnail of the image with dimensions 400x450
        // and save it in the temp/thumb folder
        $manager = new ImageManager(Driver::class);
        $img = $manager->read(public_path(path:'uploads/temp/'.$imageName));
        $img->coverDown(400, 450); // Resize the image to fit within 400x450 pixels
        $img->save(public_path('uploads/temp/thumb/'.$imageName));
       
        return response()->json([
            'status' => 200,
            'message' => "Image uploaded successfully",
            'data' => $tempImage,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
