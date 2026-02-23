import { Component } from '@angular/core';
import { getRandomColor } from '../utils';
import { ColorBoxList } from "../color-box-list/color-box-list";

@Component({
  selector: 'app-game-container',
  imports: [ColorBoxList],
  templateUrl: './game-container.html',
  styleUrl: './game-container.css'
})
export class GameContainer {
  colorToGuess: string = getRandomColor();

}
