import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guard/auth.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth:AuthService,private _router:Router) { }
  isLogin:boolean = false;
 nguoiDungDangNhap: NguoiDung;
  ngOnInit() {
  this._auth.login.subscribe(
    (res:any) => {
      this.isLogin = res;
      console.log(localStorage.getItem('nguoiDungDangNhap'));
      if(this.isLogin === true) {
        this.nguoiDungDangNhap = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
      }
      console.log(this.nguoiDungDangNhap);
      // console.log(res);
      // console.log(this.isLogin);
      // console.log(123)
    },
    (err:any) => {
      console.log(err);
    }  
      
    );

  }
  DangXuat() {
    localStorage.removeItem('nguoiDungDangNhap');
    this._auth.checkLogin();
    this._router.navigate(['/']);
  }
}
