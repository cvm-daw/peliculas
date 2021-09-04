import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedaPeliculaService } from '../services/busqueda-pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {
titulo: string;
pelicula: any;

  constructor(private route: ActivatedRoute, private router: Router, private busServ: BusquedaPeliculaService) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.titulo = params.special;
      }
    });
  }

  ngOnInit() {

    this.busServ.getPelicula(this.titulo).subscribe(
      respuesta=>this.pelicula=respuesta,
      error =>alert("Error en obtener la pelicula"),

    );

 }
volver(){
  this.router.navigate(['home']);
}
}
