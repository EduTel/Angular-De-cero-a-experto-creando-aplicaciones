import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('servicio spotify funcionando');
  }
  get_new_releases() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer BQCXE3WqYQFhopXpIeO6j_fyrwJQ1WQS7MISlWThsyna5K2Yp3OiJdZg32hty7Dehj99sTk2iPVglleXLy8'
      })
    };
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20&offset=0', httpOptions);
  }
  get_artista(_termino: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer BQCXE3WqYQFhopXpIeO6j_fyrwJQ1WQS7MISlWThsyna5K2Yp3OiJdZg32hty7Dehj99sTk2iPVglleXLy8'
      })
    };
    return this.http.get(`https://api.spotify.com/v1/search?q=${encodeURI(_termino)}&type=artist&limit=15`, httpOptions);
    // return this.http.get(`https://api.spotify.com/v1/search?q=${_termino}&type=artist&limit=15`, httpOptions);
  }
}



