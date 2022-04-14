<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rate;
use App\Models\User;
class RateController extends Controller
{
    public function index()
    {
       return Rate::all();
    //    $rate = Rate::join('rates','rate.userId','=','user.id')->get();
    //    return dd($rate);
    }
    public function store(Request $request)
    {
        
        // $rate = Rate::join('rate','rate.userId','=','user.id')->get();
        // return dd($rate);
    }
    public function destroy($id)
    {
        //
    }
}
