import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero? : SuperHero;
  @Output() heroHasChangedEvent = new EventEmitter<SuperHero[]>();

  constructor(private service: SuperHeroService) { }

  ngOnInit(): void {
  }


  deleteHero(hero: SuperHero) {
    this.service.deleteSuperHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroHasChangedEvent.emit(heroes));
  }
  addNewHero(hero: SuperHero) {
    this.service.addSuperHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroHasChangedEvent.emit(heroes));
  }
  updateHero(hero: SuperHero) {
    this.service.updateSuperHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroHasChangedEvent.emit(heroes));
  } 
}
