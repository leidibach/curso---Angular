import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-dois',
  templateUrl: './pagina-dois.component.html',
  styleUrls: ['./pagina-dois.component.scss']
})
export class PaginaDoisComponent implements OnInit {

  lista: any[]=[]

  constructor() { }

  ngOnInit() {


  }

  adicionar(name:string,descricao:string,){this.lista.push({name:name,descricao:descricao})}

}


