import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
 @Input() hero? : Hero;

 //ctor
 constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}

//angular life cycle hook
ngOnInit(): void {
  this.getHero();
}

//returns a particular hero given the id
getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
}

//go back a step
goBack(): void {
  this.location.back();
}

//save changes to hero name
save(): void {
  if (this.hero) {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}

}
