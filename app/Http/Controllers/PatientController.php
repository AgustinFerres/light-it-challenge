<?php

namespace App\Http\Controllers;

use App\Mail\PatientCreated;
use App\Models\Patient;
use Illuminate\Http\Request;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class PatientController
{

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255|regex:/^[A-Za-z\s]+$/',
            'email' => 'required|email|max:255|unique:patients,email|regex:/^[A-Za-z0-9._%+-]+@gmail\.com$/',
            'prefix' => 'required|string|max:4|regex:/^\+\d{1,4}$/',
            'phone' => 'required|string|max:20',
            'photo' => 'required|image|mimes:jpg|max:2048',
        ]);

        $patient = Patient::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'photo' => $request->file('photo')->store('photos', 'public'),
        ]);

        Mail::to($patient->email)->queue(new PatientCreated());

        return Redirect::route('home')->with('success', 'Patient created successfully.');
    }

}
