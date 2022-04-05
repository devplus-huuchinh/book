<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function register(Request $request)
    {
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
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
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
                    'status_code' => 500,
                    'message' => 'incorrect_username_password'
                ]);
            }

            $user = User::where('email', $request->email)->first();

            if (!Hash::check($loginFormData['password'], $user->password, [])) {
                throw new \Exception('incorrect_username_password');
            }

            $tokenResult = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'status_code' => 200,
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ]);
        } catch (\Exception $error) {
            return response()->json([
                'status_code' => 500,
                'message' => 'Error in Login',
                'error' => $error,
            ]);
        }
    }

    public function testAuth()
    {
        $users = User::all();
        return response()->json($users);
    }
}
