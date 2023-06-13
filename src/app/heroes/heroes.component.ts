import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  // hero : Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  selectedHero?: Hero;
  // heroes = HEROES;
  heroes: Hero[] = [];

  //inject the HeroService...this is called dependency injection
  constructor(private heroService: HeroService, private messageService:MessageService) {}

  //ngOnInit lifecycle hook which will be called by angular after constructing a HeroesComponent instance
  ngOnInit(): void {
    this.getHeroes();
  }

  //get all the heroes synchronously and without subscribing to an observable
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

    //get all the heroes by subscribing to an observable i.e asynchrously
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //when a particular hero is selected
  // onSelect(hero:Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
}
