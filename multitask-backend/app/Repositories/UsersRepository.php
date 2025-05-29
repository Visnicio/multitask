<?php

namespace App\Repositories;

use App\Models\User;

class UsersRepository
{
    public function findByEmailAndPassword(string $email, string $password): User {
        return User::where('email', $email)->where('password', $password)->first();
    }
}