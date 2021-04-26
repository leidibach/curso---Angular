import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaDoisComponent } from './pagina-dois/pagina-dois.component';
import { PaginaTresComponent } from './pagina-tres/pagina-tres.component';
import { PaginaOneComponent } from './pagina-one/pagina-one.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'paginaum', component: PaginaOneComponent },
      { path: 'paginadois', component: PaginaDoisComponent },
      { path: 'paginatres', component: PaginaTresComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
