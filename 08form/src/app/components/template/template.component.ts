import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    input.ng-touched.ng-invalid {
      border: 1px solid red;
    }
    form.ng-touched.ng-valid {
      border: 1px solid green;
    }
    input.ng-touched.ng-valid {
      border: 1px solid green;
    }
    .msg_error{
      color: red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  c_usuario: Object = {
    nombre: 'Mi nombre',
    apellido: 'Mi apellido',
    mail: 'mimail@outlook.com'
  };
  mi_form: NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.mi_form = f;
    console.log('my form');
    console.log(f);
    console.log('*****************controls:');
    console.log(f.controls);  // { first: '', last: '' }
    console.log('*****************value:');
    console.log(f.value);  // { first: '', last: '' }
    console.log('*****************valid:');
    console.log(f.valid);  // false
    console.log('*****************c_usuario:');
    console.log(this.c_usuario);
  }

}
