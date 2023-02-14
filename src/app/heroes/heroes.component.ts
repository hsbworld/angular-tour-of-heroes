import { Component } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  // hero : Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes : Hero[] = [];

  // constructor(private heroService: HeroService, private messageService: MessageService){
     constructor(private heroService: HeroService){

  }

  // getHeroes(){
  //   this.heroes = this.heroService.getHeroes();
  // }    

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // heroes = HEROES;

  selectedHero ?: Hero;

  // onSelectHero(hero: Hero) {
  //   this.selectedHero = hero;
  //   // this.messageService.add(`Hero ${hero.name} clicked`);
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

}
