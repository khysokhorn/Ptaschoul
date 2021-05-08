<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Khan;

class KhanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $khansData = config('myConfig.khans');
        print_r($khansData);
        foreach($khansData as $_khan) 
        {
            $khan = Khan::where('name', '=', $_khan['name'])->first();
            if(empty($khan))
            {
                $khan = new Khan();
                $khan->name = $_khan['name'];
                $khan->title = $_khan['title'];
                $khan->img = $_khan['img'];
                $khan->save();
            }
        }
    }
}
