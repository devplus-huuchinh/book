<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        $getUser = User::where('id', $user->id)->first();
        if(Book::where('name', $request->name)->doesntExist() && $request->shareByUserId == $getUser->id){
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
        // $user = $request->user();
        // $book= $request->book();
        // if($book->shareByUserId == $user->id){
            Book::where('id',$id)->update($request->all());
        // }
    }
    // public function updating(Request $request, $id){
    //     $book = Book::find($id)->get();
    //     $book->update($request->all());
    // }
    public function destroy($id)
    {
        // $user = new User;
        // $book = new Book;
        // if($user->id == $book->shareByUserId){
            $book = Book::find($id)->delete();
        // }
    }
    public function search($name){
        if($name == null){
            return Book::all();
        }
        else{
            return Book::where('name','like','%'.$name.'%')->get();
        }
    }
    public function index(){
        return Book::all();
    }
}
