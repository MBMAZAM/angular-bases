import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
     <h3>Counter: {{ counter }}</h3>

    <button class="ml-5 mt-5 p-2 bg-blue-700	text-white rounded-md" (click)="variacion(+1)">+1</button>
    <button class="ml-5 mt-5 px-3 bg-blue-700	text-white rounded-md" (click)="resetear()">Reset</button>
    <button class="ml-5 mt-5 p-2 bg-blue-700	text-white rounded-md" (click)="variacion(-1)">-1</button>


  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  variacion(value: number): void {
    this.counter += value;
  }



  resetear(): void {
    this.counter = 10;
  }

}



