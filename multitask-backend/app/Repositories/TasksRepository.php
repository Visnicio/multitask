<?php

namespace App\Repositories;

use App\Models\Task;

class TasksRepository {
    public function getAllTasks() {
        return Task::all();
    }

    public function findById(int $id) {
        return Task::find($id);
    }

    public function getAllTasksForUser(int $userId) {
        return Task::where('user_id', $userId)->get();
    }

    public function createTask(array $data) {
        return Task::create($data);
    }

    public function deleteTask(int $taskId) {
        return Task::destroy($taskId);
    }

    public function updateTask(int $taskId, string $title, string $description, string $dueDate) {
        $task = Task::find($taskId);
        $task->title = $title;
        $task->description = $description;
        $task->due_date = $dueDate;
        $task->save();
        return $task;
    }
}