import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

  getNowPlaying(page : any): Observable<any> {
    return this.http.get(SERVER_API_URL + 'api/tv/on-tv/'+page);
  }

  getMostPopular(tvs: any): any{
    let popularTv:any;
    let index: number =0;

    for(let tv of tvs) {
      if((tv.vote_average >0 && (typeof popularTv === 'undefined')) || (tv.vote_average > popularTv.vote_average)) {
        popularTv=tv;
        popularTv.index=index;
      }
      index++;
      return popularTv;
    }

  }

}
