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
        Authorization: 'Bearer BQDZydAd8qHHJHltjgSB1qnbOKaZwxLdNgbudW0CDFDLApUf-NivLjUumIlAflYSifj0DTUK51j8QY_awv8'
      })
    };
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20&offset=0', httpOptions);
  }
}
