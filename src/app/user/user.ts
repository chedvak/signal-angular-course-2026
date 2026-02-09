import { Component, computed, input, output, signal } from '@angular/core';
import { USERS } from '../fake_users';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  name = input.required<string>();
  avatar = input.required<string>();
  id = input.required<string>();
  userClicked = output<string>();

  imgAvatar = computed(() => {
    return `assets/users/${this.avatar()}`;
  });

  onUserClicked(){
    this.userClicked.emit(this.id());
  }
}
