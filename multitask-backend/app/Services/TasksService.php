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
            'user_id' => auth("api")->user()->id,
            'is_done' => false
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

    public function switchTaskStatus($taskId) {
        $task = $this->tasksRepository->findById($taskId);
        $task->is_done = !$task->is_done;
        $task->save();
        return $task;
    }

    public function deleteTask($taskId) {
        return $this->tasksRepository->deleteTask($taskId);
    }

    public function updateTask($taskId, string $title, string $description, string $dueDate) {
        return $this->tasksRepository->updateTask($taskId, $title, $description, $dueDate);
    }
}