import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoviesResponse } from '../models/moviesList/Response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _url = "/assets/data/movies.json";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(this._url).pipe(catchError((error: HttpErrorResponse) =>{
                                                    return throwError(error.message || 'server error');
                                                  }));
  }
}
