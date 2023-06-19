import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private uri = "SuperHero";

  constructor(private httpClient: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>
  {
    return this.httpClient.get<SuperHero[]>(environment.apiUrl + '/' + this.uri);
  }

  public updateSuperHero(hero: SuperHero) : Observable<SuperHero[]>
  {
    return this.httpClient.patch<SuperHero[]>(environment.apiUrl + '/' + this.uri, hero);
  }

  public addSuperHero(hero: SuperHero) : Observable<SuperHero[]>
  {
    return this.httpClient.post<SuperHero[]>(environment.apiUrl + '/' + this.uri, hero);
  }

  public deleteSuperHero(hero: SuperHero) : Observable<SuperHero[]>
  {
    this.httpClient.delete(environment.apiUrl + '/' + this.uri + '/' + hero.id);

    return this.getSuperHeroes();
  }
}
