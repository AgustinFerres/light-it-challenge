<?php

use App\Models\Patient;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('/dashboard')->assertRedirect('/login');
});

test('authenticated users can visit the dashboard', function () {
    $this->actingAs($user = Patient::factory()->create());

    $this->get('/dashboard')->assertOk();
});
