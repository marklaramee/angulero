import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 
import { Card } from './card';
import { MessageService }  from './message.service';

interface ServerData {
  cards: Card[]
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardsUrl = 'http://streamero.tv/externals/api/cards/get.php';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /**
   * Retrieve cards from remote url
   */
  getCards(): Observable<Card[]> {
    return this.http.get<ServerData>(this.cardsUrl)
      .pipe(
        map(data => data.cards),
        catchError(this.handleError('getCards', []))
      );
  }

  /**
   * 
   * @param operation gracefully handle errors and display to user
   * @param result optional Observable of generic type
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      this.log(`${operation} failed due to: ${error.message}`);
      return of(result as T);
    };
  }

  /**
   * log error to HTML (for user)
   * @param message the error text to display
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
