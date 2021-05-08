<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Khan;

class KhanController extends Controller
{
    function index() {

    }

    function khans() {
        $khans = Khan::all();
        return response()->json($khans);
    }
}
