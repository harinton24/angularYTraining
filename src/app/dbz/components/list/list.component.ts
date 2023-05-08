import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList :Character[] =[
    {name:'Goku',power:15000}
  ]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  emiteIdCharacter(id:string | undefined):void{
    this.onDeleteCharacter.emit(id);
  }

}
