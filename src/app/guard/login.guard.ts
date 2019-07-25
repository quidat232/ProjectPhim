import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {

      this.auth.checkLogin();
      if (this.auth.isLogin) {
        return true;
      }
      Swal.fire({
        title: 'Vui lòng đăng nhập',
        type: 'warning',
      });
      // alert('Vui lòng đăng nhập');
  }
}
