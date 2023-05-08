import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html',
  styleUrls: ['./main-page-component.css']
})

export class MainPageComponent {

  constructor(private dnzService: DbzService) {}

  get characters(): Character[] {
    return this.dnzService.characters;
  }

  onDeleteCaharacter(id: string): void {
    this.dnzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dnzService.onNewCharacter(character);
  }


}
