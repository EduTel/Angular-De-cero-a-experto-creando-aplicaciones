import { SpotifyService } from './../../../services/spotify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  // styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;
  // private SSpotify: SpotifyService,
  constructor(private _router: Router) {

  }
  ngOnInit() {
  }
  ver_data(_item: string) {
    console.warn(_item['type']);
    console.warn(_item['id']);
    if (_item['type'] === 'album') {
      console.warn('***************album***************');
      this.navigate(['album', _item['id']]);
    } else if (_item['type'] === 'artist') {
      console.warn('***************artist 0***************');
      this.navigate(['artist', _item['id']]);
    }
  }
  ver_artista(_id: string) {
    console.warn('***************artist 1***************');
    console.warn(_id);
    this.navigate(['artist', _id]);
  }
  navigate(_data: any[]) {
    this._router.navigate(_data);
  }
}
