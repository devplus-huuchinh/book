<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function store(Request $request)
    {
        try{
            $user = $request->user();
            $getUser = User::where('id', $user->id)->first();
            if(Book::where('name', $request->name)->doesntExist() && $request->shareByUserId == $getUser->id){
                $bookData = Book::create($request->all()); 
                $bookData->save();
                return response()->json($bookData);
            }
        }catch (\Throwable $error) {
            return response()->json([
                'message' => 'Addition_fail',
                'error' => $error,
            ]);
        }
    }
    public function show($id)
    {
        return Book::where('id',$id)->first();
    }
    public function update(Request $request, $id)
    {
        try{
            $user = $request->user();
            $book= Book::where('shareByUserId',$user->id)->get();
            //dd($user->id);
            //dd($book->shareByUserId);
            if($book->shareByUserId == $user->id){
                Book::where('id',$id)->update($request->all());
            }
        }catch(\Throwable $error) {
            return response()->json([
                'message' => 'upadating_fail',
                'error' => $error,
            ]);
        }
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
