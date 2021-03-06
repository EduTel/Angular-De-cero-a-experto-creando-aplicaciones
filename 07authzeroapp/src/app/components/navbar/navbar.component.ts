import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService) {
    _AuthService.handleAuthentication();
  }
  ngOnInit() {
  }
  login() {
    this._AuthService.login();
  }
  logout() {
    this._AuthService.logout();
  }
}
