import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth : AuthService,
    private router : Router,
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLogged()) {
        if(route.url.length > 0) {
            const path = route.url[0].path;
            if(path === 'restaurant' && this.auth.isRestaurant()) return true;
            else if (path === 'ordering' && this.auth.isCustomer()) return true;
            else if (path === 'deliver' && this.auth.isDeliver()) return true;
            else if (path === 'admin' && this.auth.isAdmin()) return true;
            else return false;
        }
        return true;
    } else {
      this.router.navigateByUrl("/signin");
      return false;
    }
  }
}
