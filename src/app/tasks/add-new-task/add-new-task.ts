import { Component, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTaskObj } from '../tasks.model';

@Component({
  selector: 'app-add-new-task',
  imports: [FormsModule],
  templateUrl: './add-new-task.html',
  styleUrl: './add-new-task.css',
})
export class AddNewTask {
  title = '';
  summary = '';
  dueDate = new Date().toISOString().split('T')[0]; // default to today's date

  addNewTask = output<NewTaskObj>();
  closeDialog = output<void>();

  onSubmit(form:NgForm){
    console.log(form.form.value);
    console.log(form);
    
    console.log("title: ", this.title);
    console.log("summary: ", this.summary);
    console.log("dueDate: ", this.dueDate);
    this.addNewTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
     this.closeDialog.emit();
    
  }

  onClickCancel(){
    this.closeDialog.emit();
  }

}
