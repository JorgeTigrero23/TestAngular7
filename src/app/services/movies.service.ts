import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movies';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_URL = "https://api-rest-with-laravel-movies.herokuapp.com/api"

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get(this.API_URL + '/movies')
  }

  save(movie : Movie) {
    const headers = new HttpHeaders(
      { 'Content-Type' : 'application/json' }
    )

    return this.httpClient.post(this.API_URL + '/movies', movie, {headers : headers})
  }

  put(movie : Movie) {
    const headers = new HttpHeaders(
      { 'Content-Type' : 'application/json' }
    )

    return this.httpClient.put(this.API_URL + '/movies/' + movie.id, movie, {headers : headers})
  }

  delete(id) {
    return this.httpClient.delete(this.API_URL + '/movies/' + id)
  }
  
}
