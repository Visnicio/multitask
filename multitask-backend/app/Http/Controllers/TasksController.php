<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TasksService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    private $tasksService;


    public function __construct(TasksService $tasksService) {
        $this->tasksService = $tasksService;
    }

    public function index() {
        return $this->tasksService->getAllUserTasks(Auth::user()->id);
    }

    public function create(Request $request) {
        $validated_arr = $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'due_date' => 'required|date'
        ]);

        $due_date = Carbon::parse($validated_arr['due_date'])->format('Y-m-d');

        $response = $this->tasksService->createNewTask($validated_arr['title'], $validated_arr['description'], $due_date);
        return response()->json($response);
    }

    public function switchTaskStatus(Request $request) {
        return $this->tasksService->switchTaskStatus($request->input("id"));
    }

    public function deleteTask(Request $request) {
        return $this->tasksService->deleteTask($request->input("id"));
    }
}
