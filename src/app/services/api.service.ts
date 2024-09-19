import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { ApiResponse, Character, CharacterDetail } from '../models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://dragonball-api.com/api/characters?page=1&limit=20'

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ApiResponse | undefined>{
    return this.http.get<ApiResponse>(this.url).pipe(
      catchError( () => {
        return of(undefined)
      })
    );
  }
}
