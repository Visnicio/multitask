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

    public function authenticateUser(string $email, string $password): bool {
        $authenticated = false;

        $user = $this->usersRepositorie->findByEmailAndPassword($email, $password) ;

        return $authenticated = $user ? true : false;
    }
}