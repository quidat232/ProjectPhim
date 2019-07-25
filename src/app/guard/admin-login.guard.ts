import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {
  // tslint:disable-next-line:variable-name
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._auth.CheckAdminLogin();
    if (this._auth.isAdminLogin) {
      return true;
    }
    this._router.navigate(['/loginAdmin']);

  }
}
