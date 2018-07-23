import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { empty } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artist: any[];
  loading = false;
  constructor(private SSpotify: SpotifyService ) { }

  ngOnInit() {
  }
  search(_data: string) {
    console.warn(_data);
    console.warn(typeof _data);
    _data = _data.trim();
    if (_data !== '' || _data !== null ) {
      console.warn('*************buscar************');
      this.loading = true;
      this.SSpotify.get_artistas(_data).subscribe((data: any) => {
        this.artist = data;
        this.loading = false;
        console.log(this.artist);
      });
    } else {
      this.loading = false;
    }
  }

}
