import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean = false;
  @Output() login = new EventEmitter();
  constructor() { }
  checkLogin(){
    if(localStorage.getItem("nguoiDungDangNhap")){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.login.emit(this.isLogin);
    // console.log(this.login)
  }
}
