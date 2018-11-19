import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { MessageService }  from '../message.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  cards: Card[];
  displayCards: Card[];
  allTags: string[];
  activeTags: string[];

  constructor(
    private cardService: CardService,
    private messageService: MessageService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.getCards();
    this.allTags = [];
    this.activeTags = [];
  }

  /**
   * retrieve cards from the card service
   */
  getCards(): void {
    this.cardService.getCards()
      .subscribe(
        data => this.cards = data,
        error => this.log(`Grid component error: ${error}`),
        () => this.processCards()
      );
  }

  /**
   * Loop through the cards and populate allTags with unique tags
   * Then set the cards array to displayCards so they can be filtered non-destructively
   */
  processCards(): void {
    for(var card of this.cards) {
      for(var tag of card.tags) {
        //make sure we're not adding duplicate tags
        if(this.allTags.indexOf(tag) == -1) {
          this.allTags.push(tag);
        }
      }
    }
    this.displayCards = this.cards;
  }

  /**
   * update the card grid upon user interaction with mobile selector
   * TODO: sync mobile and desktop tag selection
   */
  onTagChange() {
    this.displayCards = this.cards.filter(this.filterByActive, this);
  }

  /**
   * Actived by user when clicking on a tagButton
   * Toggle the button's class and update the card grid
   * @param event 
   */
  filterbyTag(event:any) {
    var clickedTag = event.target.textContent;

    if(event.target.classList.contains('activeTag')) {
      //deactivate tag
      this.renderer.removeClass(event.target,"activeTag");
      this.activeTags = this.activeTags.filter(n => n != clickedTag);
    } else {
      //activate tag
      this.renderer.addClass(event.target,"activeTag");
      this.activeTags.push(clickedTag);
    }
    this.displayCards = this.cards.filter(this.filterByActive, this);
  }

  /**
   * A filter callback for filterbyTag() (allows me to pass in a reference to GridComponent as "this")
   * @param currentElement - the array element to test against
   */
  filterByActive(currentElement): boolean {
    if(this.activeTags.length == 0) {
      //if there are no active tags, all cards pass filter
      return true;
    } else {
      for (let tag of this.activeTags) {
        tag = tag.trim();
        if(currentElement.tags.indexOf(tag) < 0) {
          return false;
        }
      }
      return true; 
    }
  }

  /**
   * log errors to front end display
   * @param message - the error to display
   */
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

}
