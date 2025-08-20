<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin/Dashboard');
    });
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/users', function () {
        return Inertia::render('Users/Dashboard');
    });
});

Route::get('/', function () {
    return redirect()->route('login');
});