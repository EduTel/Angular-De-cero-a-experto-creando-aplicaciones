import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artist: any[];
  constructor(private SSpotify: SpotifyService ) { }

  ngOnInit() {
  }
  search(_data: string) {
    console.warn(_data);
    this.SSpotify.get_artista(_data).subscribe((data: any) => {
      this.artist = data.artists.items;
      // this.releases = data;
      console.log(this.artist);
    });
  }

}
