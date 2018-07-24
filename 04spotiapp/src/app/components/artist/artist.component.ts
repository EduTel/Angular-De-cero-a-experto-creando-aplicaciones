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
  constructor(private _activatedRoute: ActivatedRoute, private _SpotifyService: SpotifyService ) {
    this._activatedRoute.params.subscribe((datos) => {
      console.log('ArtistComponent constructor');
      console.log(datos);
      this.get_artista(datos['id']);
    });
  }
  get_artista(id: string) {
    this._SpotifyService.get_artista(id).subscribe((data: any) => {
      console.warn(data);
      this.loading = false;
      this.artist = data;
    });
  }

  ngOnInit() {
  }

}
