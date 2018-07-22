import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[];
  constructor(private SSpotify: SpotifyService ) {
    this.SSpotify.get_new_releases().subscribe((data: any) => {
      // this.releases = data.albums.items;
      this.releases = data;
      console.log(this.releases);
    });
  }
  ngOnInit() {
  }

}
