<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReactController extends Controller {
    public function show () {
        return view('welcome');
    }
	
	public function authenticated()
	{
		if(Auth::user()) {
			return response()->json(true);
		} else return response()->json(false);
	}
}