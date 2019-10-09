import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

import { MovieService } from '../../services/movies.service';
import { ActivatedRoute, Router  } from '@angular/router';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  
  movie: Movie  = {
    name: null,
    description: null,
    genre: null,
    duration: null,
    year: null
  }

  id: any
  editing: boolean = false
  movies: Movie[]

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { 
      this.id = this.activatedRoute.snapshot.params['id']
      if (this.id) {
          this.editing = true
          this.getById(this.id)
      } else {
          this.editing = false
      }
  }

  ngOnInit() {
  }

  saveMovie() {
    if (this.editing == false) {
        this.save()
    } else {
        this.update()
    }
    
  }

  save() {
      this.movieService.save(this.movie).subscribe(
        (data) => {
          alert("Registro guardado exitosamente")
          console.log(data)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  update() {
      this.movieService.put(this.movie).subscribe(
        (data) => {
          alert("Registro modificado exitosamente")
        },
        (error) => {
          console.log(error)
            alert("Ocurrio Un error");
        }
      )
  }

  getById(_id: any) {
    this.movieService.getAll().subscribe(
      (data : Movie[]) => {
          this.movies = data
          this.movie = this.movies.find( (m) => { return m.id == _id} )
          if(this.movie == null)
          {
            this.router.navigate(['/home'])
          }
      },
      (error) => {
          alert("Ocurrio un error");
      }
    )
  }

}
