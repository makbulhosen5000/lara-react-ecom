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
        Schema::create('orders', function (Blueprint $table) {
            $table->id(); // BIGINT UNSIGNED
            // Relation to users
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // Customer info
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();

            // Order price details
            $table->double('subsub_total', 10, 2)->default(0);
            $table->double('grand_total', 10, 2)->default(0);
            $table->double('shipping', 10, 2)->default(0);
            $table->double('discount', 10, 2)->default(0);

            // Status
            $table->enum('payment_status', ['pending', 'paid','not paid','failed'])->default('pending');
            $table->enum('status', ['pending', 'shipped', 'delivered', 'cancelled'])->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
