import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../models/api.interface';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent implements OnInit {

  @Input() character: Character | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('ENTRO. ', this.character);
  }

}
