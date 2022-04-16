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
        try {
            if (Book::where('name', $request->name)->doesntExist()) {
                $bookData = Book::create($request->all());
                // dd($bookData);
                $bookData->save();
                return response()->json($bookData);
            }
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'Addition_fail',
                'error' => $error,
            ]);
        }
    }
    public function show($id)
    {
        try {
            return Book::where('id', $id)->first();
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_book_fail',
                'error' => $th,
            ]);
        }
    }
    public function update(Request $request, $id)
    {
        $user = $request->user();
        $book = Book::where('shareByUserId', $user->id)->first();
        try {
            if ($book->shareByUserId == $user->id) {
                $data = Book::findOrFail($id);
                $data->update($request->all());
                return response()->json($data);
            }
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'upadating_fail',
                'error' => $error,
            ]);
        }
    }
    public function destroy(Request $request, $id)
    {
        try {
            $user = $request->user();
            $book = Book::where('shareByUserId', $user->id)->first();
            if ($book->shareByUserId == $user->id) {
                $book = Book::find($id)->delete();
            }
            return response()->json(Book::all());
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'delete_fail',
                'error' => $error,
            ]);
        }
    }
    public function search($name)
    {
        try {
            $result = Book::where('name', 'LIKE', '%' . $name . '%')->get();
            if (count($result)) {
                return response()->json($result);
            } else {
                return response()->json(['Result' => 'No Data not found'], 404);
            }
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'No_data_found',
                'error' => $error,
            ], 404);
        }
    }
    public function newBook()
    {
        try {
            $newBook = Book::all()->sortByDesc('created_at')->values()->take(5);
            return response()->json($newBook);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'new_book_error',
                'error' => $th,
            ], 500);
        }
    }
    public function index()
    {
        return Book::all();
    }
}
