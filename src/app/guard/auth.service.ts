import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean = false;

  constructor() { }
  checkLogin(){
    if(localStorage.getItem("Đăng nhập thành công")){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }

  }
}
