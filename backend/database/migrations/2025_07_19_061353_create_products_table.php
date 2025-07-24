<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->double('price',10,2); // maximum 10 digit will be price , 2 digits after decimal
            $table->double('discount_price',10,2)->nullable();
            $table->longText('description')->nullable();
            $table->text('short_description')->nullable();
            $table->string('image')->nullable();
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->foreignId('brand_id')->nullable()->constrained()->onDelete('cascade');
            $table->integer(column: 'qty')->nullable(); // quantity
            $table->string('sku');
            $table->string('barcode')->nullable();
            $table->integer('status')->default('1'); // active, inactive, draft
            $table->enum('is_featured', ['yes', 'no'])->default('no'); // yes, no
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
