<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\Rate;

class RateController extends Controller
{
    public function newRate(Request $request)
    {
        try {
            $user = $request->user();
            //book validate
            Book::findOrFail($request->bookId);
            //rate validate
            $existedRate = Rate::where('bookId', $request->bookId)->where('userId', $user->id)->count();
            if ($existedRate < 1) {
                $data = [
                    "star" => $request->star,
                    'bookId' => $request->bookId,
                    'userId' => $user->id,
                ];
                Rate::create($data);
                return response()->json(['message' => 'rate_success']);
            }
            return response()->json([
                'message' => 'rate_error',
                'error' => 'This user already rate this book',
            ], 500);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'rate_error',
                'error' => $th,
            ], 500);
        }
    }

    public function unRate(Request $request)
    {
        try {
            $user = $request->user();
            //book validate
            Book::findOrFail($request->bookId);
            //rate validate
            $existedRate = Rate::where('bookId', $request->bookId)->where('userId', $user->id)->count();
            if ($existedRate > 0) {
                $Rate = Rate::where('bookId', $request->bookId)->where('userId', $user->id)->first();
                $Rate->delete();
                return response()->json(['message' => 'unRate_success']);
            }
            return response()->json([
                'message' => 'unRate_error',
                'error' => "This book wasn't rated before",
            ], 500);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'unRate_error',
                'error' => $th,
            ], 500);
        }
    }

    public function rate(Request $request)
    {
        // try {
        $bookId = $request->bookId;
        $allRate = Rate::where('bookId', $bookId)->get();
        if (count($allRate) == 0) return response()->json(['star' => 0]);

        //reducer
        $arr = [];
        foreach ($allRate as $item) {
            array_push($arr, $item->star);
        }
        $averageRate = array_sum($arr) / count($allRate);
        return response()->json(['star' => $averageRate]);
        // } catch (\Throwable $th) {
        //     return response()->json([
        //         'message' => 'getRate_error',
        //         'error' => $th,
        //     ], 500);
        // }
    }
}
