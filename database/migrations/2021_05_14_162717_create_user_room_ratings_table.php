<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRoomRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_room_ratings', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('room_id');
            $table->primary(['user_id', 'room_id']);
            $table->float('rating');
            $table->string('comment');
            $table->boolean('like');
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
        Schema::dropIfExists('user_room_ratings');
    }
}
