<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\UserController;

// Auth Routes
Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store']);
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

// Admin Routes
Route::middleware(['auth', 'role:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('dashboard');
        Route::resource('users', UserController::class);
    });

// User Routes
Route::middleware(['auth', 'role:user'])
    ->prefix('users')
    ->name('users.')
    ->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Users/Dashboard');
        })->name('dashboard');
    });

// Default Redirect
Route::get('/', fn() => redirect()->route('login'));
