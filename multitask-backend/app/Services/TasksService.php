<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Repositories\TasksRepository;

class TasksService {

    private TasksRepository $tasksRepository;

    public function __construct(TasksRepository $tasksRepository) {
        $this->tasksRepository = $tasksRepository;
    }

    public function getAllUserTasks($userId) {
        return $this->tasksRepository->getAllTasksForUser(Auth::user()->id);
    }
}