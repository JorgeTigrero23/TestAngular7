import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';

import { Movie } from '../../interfaces/movies';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { 
    this.getAllMovies()
  }

  ngOnInit() {
  }

  getAllMovies() {
      this.movieService.getAll().subscribe(
        (data : Movie[]) => {
          this.movies = data
        },
        (error) => {
          console.log(error);
            alert("Ocurrio un error")
        }
      )
  }

  delete(id: any) {
    if(confirm('Seguro que deseas eliminar esta pelicula?')){
        return this.movieService.delete(id).subscribe(
          (data) => {
              alert("Eliminado con exito")
              this.getAllMovies()
          },
          (error) => {
              alert("Ocurrio un error")
          }
        )
    }
    
  }

}
