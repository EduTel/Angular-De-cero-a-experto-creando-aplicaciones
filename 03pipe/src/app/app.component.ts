
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre = 'mi nombre';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  e = Math.PI;

  object = {
    Libro: 'el hombre en busca de sentido',
    Hojas: '190',
    Autor: {
      Nombre: 'victor E. Frankl',
      Edad: '92',
      Nacimiento: '26 de marzo de 1905',
      Fallecimiento: '2 de septiembre de 1997',
      conocido_por: ['logoterapia', 'psicología', 'existencial']
    }
  };
  cast_JSON = JSON.stringify(this.object, null, 1);
  Promise = new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(function () {
      resolve('¡Éxito!'); // ¡Todo salió bien!
    }, 3000);
  });
  Observable = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 3000);
  });

  today: number = Date.now();

  ngOnInit() {

  }
}
