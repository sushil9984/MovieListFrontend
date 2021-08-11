import { Component, OnInit } from '@angular/core';
import { MovieInformation } from '../models/moviesList/MovieInformation';
import { MoviesResponse } from '../models/moviesList/Response';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: MovieInformation[] = [];

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies()
    .subscribe((data: MoviesResponse) => this.movies = data.result.movies);
  }

}
