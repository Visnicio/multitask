<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UsersRepository;

class AuthenticationService
{
    private $usersRepositorie;

    public function __construct(UsersRepository $usersRepository) {
        $this->usersRepositorie = $usersRepository;
    }

    public function registerNewUser(string $name, string $email, string $password): bool {
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password)
        ]);

        return $user ? true : false;
    }
}