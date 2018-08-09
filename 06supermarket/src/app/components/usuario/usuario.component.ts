import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  // styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute  ) {
    this._ActivatedRoute.params.subscribe(parameters => {
      console.log('rutas padre');
      console.log(parameters);
    });
  }

  ngOnInit() {
  }

}
