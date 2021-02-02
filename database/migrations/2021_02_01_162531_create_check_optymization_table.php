<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckOptymizationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_optymization', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('optymization_id')->unsigned();
            $table->foreign('optymization_id')->references('id')->on('optymizations');
            $table->boolean('correct');
            $table->string('value');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('check_optymization');
    }
}
