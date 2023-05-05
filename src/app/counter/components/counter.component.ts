import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Contador: {{counter}}</p>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset(10)">Reset</button>
  <button (click)="increaseBy(1)">+1</button>
  `
})

export class CounterComponet {

  public counter:number = 10;
  constructor() { }

  increaseBy(value:number):void{
   this.counter += value;
  }

  reset(value:number):void{
   this.counter = value
  }

}
