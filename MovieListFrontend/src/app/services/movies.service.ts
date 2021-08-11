import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoviesResponse } from '../models/moviesList/Response';
import { MovieDetailsResponse } from '../models/movieDetails/MovieDetailsResponse';

const _url = "https://localhost:44364/api/MovieInformation";
const _urlDetails = "https://localhost:44364/api/MovieInformation/GetMovieInformation";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(_url).pipe(catchError((error: HttpErrorResponse) =>{
                                                    return throwError(error.message || 'server error');
                                                  }));
  }

  getMovieDetails(title: string): Observable<MovieDetailsResponse>{
    const _urlDetailsUpdated = `${_urlDetails}/${title}`;
    return this.http.get<MovieDetailsResponse>(_urlDetailsUpdated).pipe(catchError((error: HttpErrorResponse) =>{
                                                    return throwError(error.message || 'server error');
                                                  }));
  }
}
