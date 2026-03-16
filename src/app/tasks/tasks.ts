import { Component, computed, input, Input, signal } from '@angular/core';
import { Task, TaskObj } from "./task/task";
import { fakeTasks } from './fake_tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task]
})
export class Tasks {

  userName = input.required<string>();
  userId = input.required<string>();

  taskList = signal<TaskObj[]>(fakeTasks);

  usertasks = computed(() =>{
    return this.taskList().filter((task: TaskObj) => task.userId === this.userId());
  })


  
}
