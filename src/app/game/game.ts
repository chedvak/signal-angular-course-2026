import { Component, computed, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrls: ['./game.css'],
})
export class Game implements OnDestroy {
  readonly gridSize = 9;

  active = signal<number | null>(null);
  score = signal(0);
  timeLeft = signal(30);
  isRunning = signal(false);

  buttonLabel = computed(() => {
    return this.isRunning() ? 'Stop' : 'Start';
  });

  private tickId: any = null;
  private timerId: any = null;

  // used by template to iterate
  get cells() {
    return Array.from({ length: this.gridSize });
  }

  onClickAction() {
    if (this.isRunning()) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    if (this.isRunning()) return;
    this.score.set(0);
    this.timeLeft.set(30);
    this.isRunning.set(true);
    this.setRandomActive();

    this.tickId = setInterval(() => this.setRandomActive(), 1000);
    this.timerId = setInterval(() => {
      const t = this.timeLeft() - 1;
      this.timeLeft.set(t);
      if (t <= 0) this.stop();
    }, 1000);
  }

  stop() {
    this.isRunning.set(false);
    this.active.set(null);
    if (this.tickId) {
      clearInterval(this.tickId);
      this.tickId = null;
    }
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  hit(index: number) {
    if (!this.isRunning()) return;
    if (this.active() === index) {
      this.score.update((s) => s + 1);
      // immediately move target to make it more interactive
      this.setRandomActive();
    }
  }

  private setRandomActive() {
    const next = Math.floor(Math.random() * this.gridSize);
    this.active.set(next);
  }

  ngOnDestroy() {
    this.stop();
  }
}
