import { Injectable } from '@angular/core';
import {CanActivate , CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {AuthService} from  './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanActivateChild {

  constructor(public authService:AuthService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return (this.authService.isLoggedIn());
  }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return (this.authService.isLoggedIn());
  }
}
