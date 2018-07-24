import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any[];
  loading = true;
  top_tranks: any[];
  constructor(private _activatedRoute: ActivatedRoute, private _SpotifyService: SpotifyService ) {
    this._activatedRoute.params.subscribe((datos) => {
      console.log('ArtistComponent constructor');
      console.log(datos);
      this.get_artista(datos['id']);
      this.get_top_tranks(datos['id']);
    });
  }
  get_artista(_id: string) {
    this._SpotifyService.get_artista(_id).subscribe((data: any) => {
      console.warn(data);
      this.loading = false;
      this.artist = data;
    });
  }
  get_top_tranks(_id: string) {
    this._SpotifyService.get_top_tranks(_id).subscribe((data: any) => {
      console.warn(data);
      this.top_tranks = data;
    });
  }

  ngOnInit() {
  }

}
