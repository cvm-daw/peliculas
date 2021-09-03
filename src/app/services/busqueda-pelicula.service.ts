import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas } from '../interfaces/peliculas';
@Injectable({
  providedIn: 'root'
})
export class BusquedaPeliculaService {

  constructor(private http: HttpClient) { }

  url: string = "http://www.omdbapi.com/?apikey=d3530b33&t=";

  getPelicula(titulo: string): Observable<Peliculas>{
    return this.http.get<Peliculas>(this.url+titulo);
  }
}
