import { Component, inject, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../servicios/api-peliculas.service';
import { Pelicula } from '../interfaces/interfaz-apiPeliculas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  apiPeliculas = inject(ApiPeliculasService);
  listaPeliculas: Pelicula[] = []
  constructor() {}

  ngOnInit(): void {
    
    const peliculasLocalStorage = localStorage.getItem('peliculas');

    if(peliculasLocalStorage !== null){

      localStorage = JSON.parse(peliculasLocalStorage)
      
    }

    this.apiPeliculas.obtenerPeliculas().subscribe((
      (peliculas)=>{
        this.listaPeliculas = peliculas;
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
      }
    ))
  }
  

}
