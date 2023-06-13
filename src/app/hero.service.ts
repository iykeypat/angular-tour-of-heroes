import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, asyncScheduler, of, scheduled } from 'rxjs';
import { MessageService } from './message.service';

//register a provider for the service
@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(public messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  //use an 'observable' for asynchronous calls
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  //returns a single hero, given the id
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
