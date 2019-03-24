import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean = false;
  isAdmin:boolean = false;
  @Output() login = new EventEmitter();
  constructor() { }
  checkLogin(){
    if(localStorage.getItem("nguoiDungDangNhap")){
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    this.login.emit(this.isLogin);
  }
  checkAdmin(){
    let adminCheck = JSON.parse(localStorage.getItem('nguoiDungDangNhap'))
    console.log(localStorage.getItem('nguoiDungDangNhap'))
    if(adminCheck.MaLoaiNguoiDung == "QuanTri"){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
  }
}
