import { Component } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { SuperHeroService } from '../services/super-hero.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperApp.UI';
  heroes: SuperHero[] = [];
  heroesToEdit?: SuperHero

  constructor(private superHeroService: SuperHeroService){}

  ngOnInit(): void{
    this.superHeroService
      .getSuperHeroes()
      .subscribe((result: SuperHero[]) => (this.heroes = result));
      
    console.log(this.heroes);
  }

  editSuperhero(hero: SuperHero)
  {
    this.heroesToEdit = hero;
  }

  initHero()
  {
    this.heroesToEdit = new SuperHero();
  }

  refreshHeroList(heroes: SuperHero[])
  {
    this.heroes = heroes;
  }
}
