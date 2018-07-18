import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }
  ngOnInit() {
  }
  buscar(_termino: string) {
    // console.log(_termino);
    this._router.navigate(['/ShowSearchWriterComponent', _termino]);
  }

}
