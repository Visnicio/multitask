<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TasksService;
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

        $response = $this->tasksService->createNewTask($validated_arr['title'], $validated_arr['description'], $validated_arr['due_date']);
        return response()->json($response);
    }
}
