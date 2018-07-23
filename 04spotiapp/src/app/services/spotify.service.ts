import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('servicio spotify funcionando');
  }
  get_query(_query: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer BQA13oh5KUplx0D18shEJV4t2BWunJuns87yQ6V6Pvv1myMIhXoKn3W0WmI_Kd__mSio6sUMgkqz30TRGM4'
      })
    };
    const url = `https://api.spotify.com/v1/${_query}`;
    return this.http.get(url, httpOptions);
  }
  get_new_releases() {
    return this.get_query('browse/new-releases?limit=20&offset=0').pipe(
      map( (data) => data['albums'].items )
    );
  }
  get_artista(_termino: string) {
    return this.get_query(`search?q=${encodeURI(_termino)}&type=artist&limit=15`).pipe(
      map( (data) => data['artists'].items)
    );
  }
}



