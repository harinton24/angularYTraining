import { NgModule } from "@angular/core";
import { CounterComponet } from './components/counter.component';

@NgModule({
  declarations:[
    CounterComponet
  ],
  exports:[
    CounterComponet
  ]
})
export class CounterModule{

}
