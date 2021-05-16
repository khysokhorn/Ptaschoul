<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRoomDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_room_details', function (Blueprint $table) {
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('room_id');
            $table->primary(['user_id', 'room_id']);
            $table->date('startDate');
            $table->date('endDate');
            $table->string('status');
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
        Schema::dropIfExists('user_room_details');
    }
}
