<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            $request->session()->regenerate();

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
            $request->session()->invalidate();
            $request->session()->regenerateToken();
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
}
