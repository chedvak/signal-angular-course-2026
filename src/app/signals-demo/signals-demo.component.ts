import { Component, effect, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.css']
})
export class SignalsDemoComponent {
  count = signal<number>(0);
  name = signal('Chedva');

  double = computed(() => this.count() * 2)

  increment() {
    this.count.update((c) => c + 1);
  }

  setName(n: string) {
    this.name.set(n);
  }

  logCount = effect(() => {
    console.log("count is: " + this.count() + " and double is: " + this.double() + " and name is: " + this.name());
  });

}