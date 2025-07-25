<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->string('photo');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
