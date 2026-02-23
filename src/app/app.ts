import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { Game } from './game/game';
import { Tasks } from './tasks/tasks';
import { USERS } from './fake_users';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { GameContainer } from './guessTheColor/game-container/game-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Game, Tasks, SignalsDemoComponent, GameContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signal-tasks-app');

  users = USERS
  selectedUser = signal<{id: string, name: string, avatar: string} | null>(null);

  onUserSelected(userId: string) {
    console.log('Selected user id:', userId);
    const user = this.users.find(u => u.id === userId) || null;
    this.selectedUser.set(user);
  }
}
