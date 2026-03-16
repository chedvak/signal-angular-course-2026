import { Component, input, output } from '@angular/core';
import { Task as TaskModel } from '../tasks.model';

export type TaskObj = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  task = input.required<TaskObj>();

}
