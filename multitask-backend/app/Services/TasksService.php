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

    public function createNewTask(string $title, string $description, string $dueDate): array {
        $response = [];

        // Consome o repositório para criar a task
        $task = $this->tasksRepository->createTask([
            'title' => $title,
            'description' => $description,
            'due_date' => $dueDate,
            'user_id' => auth("api")->user()->id
        ]);

        if ($task) {
            $response['message'] = "Task created successfully";
            $response['status'] = "success";
        } else {
            $response['message'] = "Error creating task";
            $response['status'] = "error";
        }
        return $response;
    }
}