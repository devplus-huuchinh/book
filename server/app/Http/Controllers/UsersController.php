<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Throwable;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        // dd($request);
        try {
            $request->validate([
                'email' => 'required|unique:users|max:255',
                'name' => 'required|max:255',
                'password' => 'required',
            ]);
            $registerFormData = $request->all();
            $createNewUser = User::create([
                'name' => $registerFormData['name'],
                'email' => $registerFormData['email'],
                'password' => Hash::make($registerFormData['password']),
            ]);
            return response()->json($createNewUser);
        } catch (\Throwable $error) {
            return response()->json([
                'message' => 'register_fail',
                'error' => $error,
            ]);
        }
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'email|required',
                'password' => 'required'
            ]);

            $loginFormData = $request->all();

            if (!Auth::attempt($loginFormData)) {
                return response()->json([
                    'message' => 'incorrect_username_password'
                ]);
            }

            $user = User::where('email', $request->email)->first();

            if (!Hash::check($loginFormData['password'], $user->password, [])) {
                throw new \Exception('incorrect_username_password');
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'login_error',
                'error' => $th,
            ]);
        }
    }

    public function logout(Request $request)
    {
        try {
            Auth::logout();
            return response()->json([
                'message' => 'logout_successful'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'logout_error',
                'error' => $th,
            ]);
        }
    }

    public function testAuth()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function getUserInfo(Request $request)
    {
        try {
            $user = $request->user();
            $getAll = User::where('id', $user->id)->with('role')->first();
            return response()->json($getAll);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'get_profile_error',
                'error' => $th,
            ], 403);
        }
    }

    public function lock(Request $request)
    {
        try {
            $userId = $request->id;
            $isBlocked = $request->isBlocked;
            User::findOrFail($userId);
            User::where('id', $userId)->update(['isBlocked' => $isBlocked]);
            return response()->json(['message' => 'lock_success']);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'lock_error',
                'error' => $th,
            ], 500);
        }
    }
}
