import { Component, computed, input, Input, signal } from '@angular/core';
import { Task } from "./task/task";
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
taskList = signal(fakeTasks);

usersTask = computed(() => {
  return this.taskList().filter(t => t.userId === this.userId());
});

  addTask() {
    console.log('Add task clicked');
  }

  onTaskCompleted(taskId: string) {
    this.taskList.update(tasks => {
      return tasks.filter(t => t.id !== taskId);
    });
  }
}
