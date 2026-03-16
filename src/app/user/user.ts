import { Component, computed, input, output } from '@angular/core';




@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  user = input.required<UserObj>()
  userClicked = output<string>();

  imgAvatar = computed(() => {
    return `assets/users/${this.user().avatar}`;
  });

  onUserClicked(){
    this.userClicked.emit(this.user().id);
  }
}


export type UserObj = {
  id: string;
  name: string;
  avatar: string;
}
