import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this._heroe);
    this._heroesService.nuevoHeroe( this._heroe ).subscribe(
      data => {
        data = data.json();
        console.log(data);
        this._router.navigate(['/heroe', data.name]);
      }, error => console.log(error)
    );
  }

}
