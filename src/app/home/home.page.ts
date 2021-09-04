import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
// Variable para guardar el titulo a buscar
  titulo:string;
// Método para guardar el titulo de la pelicula del formulario y cambiar de página para mostrar la película
  busquedaApi(){

    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.titulo
      }
    };

    this.router.navigate(['pelicula'], navigationExtras);
  }
}
