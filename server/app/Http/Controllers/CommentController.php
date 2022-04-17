<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function allComment(Request $request)
    {
        try {
            $bookId = $request->bookId;
            //check bookID
            // Comment::findOrFail($bookId);
            // $allComment = Comment::all()->sortByDesc('created_at')->where('bookId', $bookId)->values();

            $allComment = Comment::with('user')->get()->where('bookId', $bookId)->sortByDesc('created_at')->values();

            return response()->json($allComment);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'comment_error',
                'error' => $th,
            ], 500);
        }
    }

    public function comment(Request $request)
    {
        try {
            $user = $request->user();
            //book validate
            Book::findOrFail($request->bookId);
            $data = [
                "content" => $request->content,
                'bookId' => $request->bookId,
                'userId' => $user->id,
            ];
            $newComment = Comment::create($data);
            return response()->json($newComment);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'executed_error',
                'error' => $th,
            ], 500);
        }
    }

    public function executed(Request $request)
    {
        try {
            $user = $request->user();
            $commentId = $request->id;
            //book validate           
            $comment = Comment::findOrFail($commentId);
            if ($user->id == $comment->userId) {
                $comment->delete();
                return response()->json(['message' => 'delete_success']);
            }
            return response()->json([
                'message' => 'executed_error',
                'error' => "This user not alow to delete this comment",
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'executed_error',
                'error' => $th,
            ], 500);
        }
    }

    public function editComment(Request $request)
    {
        try {
            $user = $request->user();
            $commentId = $request->id;
            //book validate           
            $comment = Comment::findOrFail($commentId);
            if ($user->id == $comment->userId) {
                $comment->update([
                    'content' => $request->content
                ]);
                return response()->json($comment);
            }
            return response()->json([
                'message' => 'edit_error',
                'error' => "This user not alow to edit this comment",
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'edit_error',
                'error' => $th,
            ], 500);
        }
    }
}
