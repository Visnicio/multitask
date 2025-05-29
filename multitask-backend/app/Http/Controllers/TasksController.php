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
}
