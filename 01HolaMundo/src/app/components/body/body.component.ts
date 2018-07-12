import { Component } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar = true;
  frase: { mensaje: string, autor: string } = {
    autor: `Albert camus`,
    mensaje: 'No hay alegria de vivir, sin desesperacion de vivir'
  };
  personajes: string[] = ['Albert camus', 'Hermann Hesse', 'Carlos fuentes'];
}
