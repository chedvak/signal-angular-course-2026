import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  title = 'Task Management';
  description = 'Organize, prioritize and complete your tasks efficiently.';
}
