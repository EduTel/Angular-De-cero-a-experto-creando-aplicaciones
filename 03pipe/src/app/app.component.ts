import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'mi nombre';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  e = Math.PI ;

  object = {
    Libro: 'el hombre en busca de sentido',
    Hojas: '190',
    Autor: {
      Nombre: 'victor E. Frankl',
      Edad: '92',
      Nacimiento: '26 de marzo de 1905',
      Fallecimiento: '2 de septiembre de 1997',
      conocido_por: [ 'logoterapia', 'psicología', 'existencial']
    }
  };
  cast_JSON = JSON.stringify(this.object, null, 1);

}
