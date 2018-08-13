import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  c_usuario: Object = {
    nombre: 'Mi nombre',
    apellido: 'Mi apellido',
    mail: 'mimail@outlook.com'
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log('my form');
    console.log(f);
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log('c_usuario:');
    console.log(this.c_usuario);
  }

}
