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
        Authorization: 'Bearer BQAOYnb3UqG8JkxdgGqh0Rx6Lh_pkPStFxqn3lppgKRHiYXOD0SromxxS77lYKrnAJuyAj9AmcRL1y2mFKw'
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
  get_artistas(_termino: string) {
    return this.get_query(`search?q=${encodeURI(_termino)}&type=artist&limit=15`).pipe(
      map( (data) => data['artists'].items)
    );
  }
  get_album(_id: string) {
    return this.get_query(`albums/${_id}`).pipe(
      map((data) => data)
    );
  }
  get_artista(_id: string) {
    return this.get_query(`artists/${_id}`).pipe(
      map((data) => data)
    );
  }
}



