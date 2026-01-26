import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  readonly name = 'Jane Doe';

  name1 = input('')
}
