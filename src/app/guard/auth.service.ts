import { Injectable, Output, EventEmitter } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  isAdminLogin = false;
  arrNguoiDung: NguoiDung[] = [];
  @Output() login = new EventEmitter();
  constructor() { }
  checkLogin() {
    if (localStorage.getItem('nguoiDungDangNhap')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.login.emit(this.isLogin);
  }

  CheckAdminLogin() {
    if (localStorage.getItem('admin_login')) {
      this.isAdminLogin = true;
    } else {
      this.isAdminLogin = false;
    }
  }
}
