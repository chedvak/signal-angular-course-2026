import { Component, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-color-box',
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.css',
})
export class ColorBox {
  color = input.required<string>();
  isCorrect = input.required<boolean>();

  clicked = signal(false);
  borderColor = signal('black');

  onClick() {
    if (this.clicked()) return;
    this.clicked.set(true);
    this.borderColor.set(this.isCorrect() ? 'green' : 'red');
  }
}
