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
  constructor(private http: Http) {}
  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify( heroe );
    const headers = new Headers({
      'content-type' : 'application/json'
    });
    return this.http.post( this.fireUrl, body, { headers: headers } ).pipe(
      map(
        res => {
          console.log(res.json());
          return res.json();
        }
      )
    );
  }
}
