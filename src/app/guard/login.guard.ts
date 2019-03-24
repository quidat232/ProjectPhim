import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
      this._auth.checkLogin();
      if(this._auth.isLogin){
        return true
      }
      Swal.fire('Vui lòng đăng nhập!'),
      this.router.navigate(['/',])
  }
}
