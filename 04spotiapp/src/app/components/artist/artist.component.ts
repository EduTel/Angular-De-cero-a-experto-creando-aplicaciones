import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute ) {
    this._activatedRoute.params.subscribe((datos) => {
      console.log('ArtistComponent constructor');
      console.log(datos);
    });
  }

  ngOnInit() {
  }

}
