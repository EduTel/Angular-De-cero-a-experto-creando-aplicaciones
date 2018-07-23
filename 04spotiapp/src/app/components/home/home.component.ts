import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases: any[];
  constructor(private SSpotify: SpotifyService ) {
    this.SSpotify.get_new_releases().subscribe((data: any) => {
      this.releases = data;
      console.log(this.releases);
    });
  }
  ngOnInit() {
  }

}
