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
  title: any;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies()
    .subscribe((data: MoviesResponse) => this.movies = data.result.movies);
  }

  Search() {
    if(this.title == ""){
      this.ngOnInit();
    }
    else{
        this.movies = this.movies.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }

  key: string = 'title';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
