import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from '../models/movieDetails/MovieDetailsResponse';
import { MoviesService } from '../services/movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public response : MovieDetailsResponse;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private _moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    this._moviesService.getMovieDetails(this.route.snapshot.paramMap.get('title'))
    .subscribe((data: MovieDetailsResponse) => this.response = data);
  }

  goBack(): void {
    this.location.back();
  }
}
