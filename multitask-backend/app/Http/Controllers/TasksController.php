<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TasksService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    private $tasksService;

    public function __construct(TasksService $tasksService)
    {
        $this->tasksService = $tasksService;
    }

    public function index()
    {
        $userId = Auth::user()->id;
        return response()->json($this->tasksService->getAllUserTasks($userId));
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title'       => 'required|string',
            'description' => 'required|string',
            'due_date'    => 'required|date',
        ]);

        $dueDate = Carbon::parse($validated['due_date'])->format('Y-m-d');

        $task = $this->tasksService->createNewTask(
            $validated['title'],
            $validated['description'],
            $dueDate
        );

        return response()->json($task, 201);
    }

    public function switchTaskStatus(Request $request)
    {
        $id = $request->input('id');
        $updated = $this->tasksService->switchTaskStatus($id);
        return response()->json($updated);
    }

    public function deleteTask($id)
    {
        $deleted = $this->tasksService->deleteTask($id);
        return response()->json([
            'deleted' => $deleted
        ]);
    }

    public function updateTask(Request $request, $id)
    {
        $validated = $request->validate([
            'title'       => 'required|string',
            'description' => 'required|string',
            'due_date'    => 'required|date',
        ]);

        $dueDate = Carbon::parse($validated['due_date'])->format('Y-m-d');

        $task = $this->tasksService->updateTask(
            $id,
            $validated['title'],
            $validated['description'],
            $dueDate
        );

        return response()->json($task);
    }
}
