import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute) {
    this._ActivatedRoute.parent.params.subscribe(parameters => {
      console.log('rutas hijas');
      console.log(parameters);
    });
  }

  ngOnInit() {
  }

}
