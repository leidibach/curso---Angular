import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaDoisComponent } from './pagina-dois/pagina-dois.component';
import { PaginaTresComponent } from './pagina-tres/pagina-tres.component';
import { HomeComponent } from './home/home.component';
import { NavegationComponent } from './navegation/navegation.component';
import { PaginaOneComponent } from './pagina-one/pagina-one.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaOneComponent,
    PaginaDoisComponent,
    PaginaTresComponent,
    HomeComponent,
    NavegationComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
