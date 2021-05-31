<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use http\Env\Response;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Cookie;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Validation\ValidationException;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers, HasApiTokens;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $token = $request->user()->createToken(config('app.name'));

            $response = [
                'user' => $user,
                'token' => $token->plainTextToken
            ];

            return response($response, 201);
        }
        else{
            return response([
                    'message' => 'Incorrect credentials']
                , 404);
        }
    }

    public function logout(Request $request) {
        $user = Auth::user();

        //if user is already logged out, return, otherwise vuex will never forget - ever
        if ($user == null) {
            return response('Token error');
        }

        $user->tokens()->delete();

        return response('User logout success');
    }
}