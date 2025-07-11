<?php

use App\Models\Patient;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return Inertia::render('Home', [
        'patients' => Patient::all()->map(function ($patient) {
            return [
                'name' => $patient->name,
                'email' => $patient->email,
                'phone' => $patient->phone,
                'photo' => Storage::url($patient->photo),
            ];
        })
    ]);
})->name('home');

require __DIR__.'/patient.php';
