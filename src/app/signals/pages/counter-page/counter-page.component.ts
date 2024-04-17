import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  public counter = signal(5);
  public squareCounter = computed( () => this.counter() * this.counter() )

  increseby(value : number){
    this.counter.update(current => current + value)
  }

}
