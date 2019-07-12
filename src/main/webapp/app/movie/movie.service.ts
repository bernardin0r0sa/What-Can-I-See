import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getNowPlaying(page : any): Observable<any> {
    return this.http.get(SERVER_API_URL + 'api/movies/now-playing/'+page);
  }

  getMostPopular(movies: any): any{
    let popularMovie:any;
    let index: any =0;

    for(let movie of movies) {
      if((movie.vote_average >0 && (typeof popularMovie === 'undefined')) || (movie.vote_average > popularMovie.vote_average)) {
        popularMovie=movie;
        popularMovie.index=index;
      }
      index++;
      return popularMovie;
    }

  }


}
