import { Component, computed, input, Input, signal } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { AddNewTask } from './add-new-task/add-new-task';
import { Task } from './task/task';
import { NewTaskObj, TaskObj } from './tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, AddNewTask],
})
export class Tasks {
  userName = input.required<string>();
  userId = input.required<string>();

  shoulsShowAddTaskForm = signal(false);

  taskList = signal<TaskObj[]>(fakeTasks);

  usertasks = computed(() => {
    return this.taskList().filter((task: TaskObj) => task.userId === this.userId());
  });

  onTaskCompleted(taskId: string) {
    this.taskList.update((_taskList) => _taskList.filter((task) => task.id !== taskId));
  }

  onClickAddTask() {
    this.shoulsShowAddTaskForm.set(true);
  }

  onClickCancel(){
    this.shoulsShowAddTaskForm.set(false);
  }

  onAddNewTask(newTask:NewTaskObj){
    const _newTask: TaskObj = {
      id: 't' + (this.taskList().length + 1),
      userId: this.userId(),
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    };
    this.taskList.update((_taskList) => _taskList.concat(_newTask));
  }
}
