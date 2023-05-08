import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character-form',
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css'],
})
export class AddCharacterFormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };
  saveCharacter(): void {
    //console.log(this.character);
    if (this.character.name.length === 0) {
      alert('Name is required');
      return;
    }
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
