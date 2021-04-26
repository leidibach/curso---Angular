import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-one',
  templateUrl: './pagina-one.component.html',
  styleUrls: ['./pagina-one.component.scss']
})
export class PaginaOneComponent {

  flag: number = 0;

  Adicionar() {
    this.flag = this.flag + 1
  }

  Subtracao() {
    this.flag = this.flag - 1

  }

  Subtrair_param(Parametro:number=1) {
    this.flag = this.flag - Parametro
    
  }

}
