import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from "../services/login/auth-login.service"
@Injectable({
  providedIn: 'root'
})
export class BreazeAuthGuard implements CanActivate {

  constructor(private auth: AuthLoginService) {

  }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.is_authendicated(state.url);
    // return true;
  }
  
}
