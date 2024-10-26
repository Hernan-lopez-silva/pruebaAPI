import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  http = inject(HttpClient);
  private readonly url = "https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100"

  constructor() { }

  obtenerPeliculas(){
    this.http.get<any>(this.url);
  }
}
