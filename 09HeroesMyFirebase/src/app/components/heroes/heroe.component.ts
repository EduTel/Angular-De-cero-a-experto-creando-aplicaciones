import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../Interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  _heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };
  new = false;
  id: string;
  constructor(private _heroesService: HeroesService, private _router: Router, private _ActivatedRoute: ActivatedRoute) {
    this._ActivatedRoute.params.subscribe(data => {
      console.log('==============================Parametros');
      console.log(data);
      this.id = data['id'];
    });
  }

  ngOnInit() {

  }

  guardar() {
    console.log(this._heroe);
    if ( this.id === 'nuevo' ) {
      // Insertando
      this._heroesService.nuevoHeroe( this._heroe ).subscribe(
        data => {
          data = data.json();
          console.log(data);
          // this._router.navigate(['/heroe', (<any>data).name ]);
          this._router.navigate(['/heroe', data['name'] ]);
        }, error => console.log(error)
      );
    } else {
      // Actualizando
      this._heroesService.actualizarHeroe( this._heroe, this.id ).subscribe(
        data => {
          data = data.json();
          console.log(data);
        }, error => console.log(error)
      );
    }


  }
  agregarNuevo(_NgForm: NgForm) {
    console.log('==============================agregarNuevo');
    this._router.navigate(['/heroe', 'nuevo']);
    _NgForm.reset({
      casa: 'Marvel'
    });
  }

}
