import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponentComponent } from './components/cocktail-list-component/cocktail-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailServiceService } from './cocktail-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CocktailServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
