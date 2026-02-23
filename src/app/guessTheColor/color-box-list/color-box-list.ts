import { Component, Input, OnInit } from '@angular/core';
import { getRandomColor } from '../utils';
import { ColorBox } from "../color-box/color-box";

@Component({
  selector: 'app-color-box-list',
  imports: [ColorBox],
  templateUrl: './color-box-list.html',
  styleUrl: './color-box-list.css',
})
export class ColorBoxList implements OnInit {

  @Input() colorToGuess!: string;
  colors: string[] = [];

  ngOnInit() {
    this.colors = this.generateColors(this.colorToGuess);
  }

  generateColors(correct: string): string[] {
    const random1 = getRandomColor();
    const random2 = getRandomColor();
    const arr = [correct, random1, random2];
    return arr.sort(() => Math.random() - 0.5);
  }
}
