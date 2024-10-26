import { Component, inject, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../servicios/api-peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  apiPeliculas = inject(ApiPeliculasService);

  constructor() {}

  ngOnInit(): void {
    
    this.apiPeliculas.obtenerPeliculas().subscribe((
      (peliculas)=>{
        console.log(peliculas)
      }
    ))
  }
  

}
