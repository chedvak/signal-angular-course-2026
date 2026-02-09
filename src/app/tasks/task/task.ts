import { Component, input, output } from '@angular/core';
import { Task as TaskModel } from '../tasks.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<TaskModel>();
  taskCompleted = output<string>();

  onClickCompleteTask(){
    this.taskCompleted.emit(this.task().id);
  }


}
