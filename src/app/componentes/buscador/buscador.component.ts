import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  titulo:string;

  busquedaApi(){
    console.log("noimames");
    console.log(this.titulo);
  }
}
