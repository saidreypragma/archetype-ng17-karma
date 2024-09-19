import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApiResponse, Character } from '../../models/api.interface';
import { CardCharacterComponent } from '../card-character/card-character.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterCharacterPipe } from '../../pipes/filter-character.pipe';
import { OnlyLettersDirective } from '../../directives/only-letters.directive';

@Component({
  selector: 'app-list-character',
  standalone: true,
  imports: [CommonModule, FormsModule, CardCharacterComponent, FilterCharacterPipe, OnlyLettersDirective],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.css'
})
export class ListCharacterComponent implements OnInit {

  public listCharacters?: Character[];
  public filterCharacter = '';

  constructor(private apiService: ApiService) {

  }
  async ngOnInit(): Promise<void> {
    await this.apiService.getAll().subscribe({
      next: (response: ApiResponse | undefined) => {
        console.log('response: ', response);
        this.listCharacters = response?.items || undefined;
        console.log('List: ', this.listCharacters);
      },
      error: (e) => {
        console.error('Error: ', e);
      }
    }
    );
  }

}

