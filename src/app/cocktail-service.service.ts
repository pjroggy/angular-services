import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  dataCoktails: Cocktail[] = [new Cocktail("mojito", 18, "mojito.png"), new Cocktail("cuba libre", 16, "cuba.png"), new Cocktail("russe Blanc", 17, "russe.png")]

  constructor() { }

  public getCocktails(): Cocktail[] {

    return this.dataCoktails

  }
}
