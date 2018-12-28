import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../Interfaces/heroe.interface';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  fireUrl = 'https://mi-primer-proyecto-ac019.firebaseio.com/heroe.json';
  heroeUrl = 'https://mi-primer-proyecto-ac019.firebaseio.com/heroe/';
  constructor(private http: Http) {}
  nuevoHeroe(_heroe: Heroe) {
    const body = JSON.stringify( _heroe );
    const headers = new Headers({
      'content-type' : 'application/json'
    });
    return this.http.post( this.fireUrl, body, { headers: headers } ).pipe(
      map(
        res => {
          console.log(res);
          return res;
        }
      )
    );
  }
  actualizarHeroe(_heroe: Heroe, key$: string) {
    const body = JSON.stringify( _heroe );
    const headers = new Headers({
      'content-type' : 'application/json'
    });
    const url = `{$this.heroeUrl}/${key$}.json`;
    return this.http.put( url, body, { headers: headers } ).pipe(
      map(
        res => {
          console.log(res);
          return res;
        }
      )
    );
  }
}
