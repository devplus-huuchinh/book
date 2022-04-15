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
        $user = $request->user();
        $book= Book::where('shareByUserId',$user->id)->first();
        try{
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
    public function destroy(Request $request,$id)
    {
        $user = $request->user();
        $book= Book::where('shareByUserId',$user->id)->where('id',$id)->first();
        if($book->shareByUserId == $user->id){
            $book = Book::find($id)->delete();
        }
    }
    public function search($name){
        $result = Book::where('name', 'LIKE', '%'. $name. '%')->get();
        if(count($result)){
            return Response()->json($result);
        }
        else
        {
            return response()->json(['Result' => 'No Data not found'], 404);
        }
    }
    public function index(){
        return Book::all();
    }
}
