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
  url2: string = "https://api.themoviedb.org/3/movie/550?api_key=c8ad22799cf0a634f077087d1626d7aa";

  getPelicula(titulo: string): Observable<any[]>{
    return this.http.get<any[]>(this.url+titulo);
  }
}
