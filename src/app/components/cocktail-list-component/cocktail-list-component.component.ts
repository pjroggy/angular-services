import { Component } from '@angular/core';
import { CocktailServiceService } from 'src/app/cocktail-service.service';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent {

  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailServiceService){

  }

  ngOnInit(){

    this.cocktails = this.cocktailService.getCocktails()
  }
}
