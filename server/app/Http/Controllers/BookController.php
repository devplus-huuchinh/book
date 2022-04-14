<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        return Book::all();
    }
    public function store(Request $request)
    {
        $user = new User;
        if(Book::where('name', $request->name)->doesntExist() || $user->id == $request->shareByUserId ){
           $bookData = Book::create($request->all()); 
           $bookData->save();
           return response()->json($bookData);
        }
    }
    public function show($id)
    {
        return Book::where('id',$id)->first();
    }
    public function update(Request $request, $id)
    {
        $user = new User;
        $book = new Book;
        if($user->id == $book->shareByUserId){
            $book = Book::find($id)->get();
            $book->update($request->all());
        }
    }
    public function destroy($id)
    {
        $user = new User;
        $book = new Book;
        if($user->id == $book->shareByUserId){
            $book = Book::find($id)->delete();
        }
    }
}
