import { Component, signal } from '@angular/core';
import { AddNewUser } from '../user/add-new-user/add-new-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [AddNewUser]
})
export class Header {
  title = 'Task Management';
  description = 'Organize, prioritize and complete your tasks efficiently.';
  showAddUser = signal(false);

  toggleAddUser() {
    this.showAddUser.set(!this.showAddUser());
  }
}
