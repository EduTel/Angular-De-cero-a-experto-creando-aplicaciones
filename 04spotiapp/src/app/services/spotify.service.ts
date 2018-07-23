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
        Authorization: 'Bearer BQCXE3WqYQFhopXpIeO6j_fyrwJQ1WQS7MISlWThsyna5K2Yp3OiJdZg32hty7Dehj99sTk2iPVglleXLy8'
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



