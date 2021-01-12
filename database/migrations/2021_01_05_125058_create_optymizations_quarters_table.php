<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOptymizationsQuartersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('optymizations_quarters', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('client_id')->unsigned();
            $table->foreign('client_id')->references('id')->on('clients');
            $table->tinyInteger('quarter');
            $table->date('start_Quarter');
            $table->date('end_Quarter');
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
        Schema::dropIfExists('optymizations_quarters');
    }
}
