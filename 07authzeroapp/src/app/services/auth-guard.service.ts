import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _AuthService: AuthService) { }
  canActivate(_ActivatedRouteSnapshot: ActivatedRouteSnapshot, _RouterStateSnapshot: RouterStateSnapshot ) {
    console.log(_ActivatedRouteSnapshot);
    console.log(_RouterStateSnapshot);
    if ( this._AuthService.isAuthenticated() ) {
      return true;
    } else {
      console.error('Block');
      return false;
    }
  }
}
