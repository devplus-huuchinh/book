<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rate;
use App\Models\Book;
use App\Models\User;
class RateController extends Controller
{
    public function index()
    {
       return Rate::all();
    }
    public function store(Request $request)
    {
        $user = new User;
        $book = new Book;
        if( $user->id == $request->userId && $book->id == $request->bookId ){
            $rate = Rate::create($request->all());
            $rate->save();
            return response()->json($rate);
        }
    }
    public function show($id)
    {
        $user = new User;
        $book = new Book;
        $rate = new Rate;
        if( $user->id == $rate->userId && $book->id == $rate->bookId ){
            return Rate::where('id', $id)->first();
        }
    }
    public function update(Request $request, $id)
    {
        $user = new User;
        $book = new Book;
        if( $user->id == $request->userId && $book->id == $request->bookId ){
            $rate = Rate::find($id);
            $rate->update($request->all());
        }
    }
    public function destroy($id)
    {
        $user = new User;
        $book = new Book;
        $rate = new Rate;
        if( $user->id == $rate->userId && $book->id == $rate->bookId ){
            Rate::find($id)->delete();
        }
    }
}
