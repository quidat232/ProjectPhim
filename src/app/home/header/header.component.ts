import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/guard/auth.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { Router } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';
import { Phim } from 'src/app/models/phim';
import { ChitietphimComponent } from '../chitietphim/chitietphim.component';
import {$} from 'jquery';
declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router, private phimSV: PhimService) { }
  isLogin = false;
  nguoiDungDangNhap = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
  checkLoging() {
    if (this.nguoiDungDangNhap != null) {
       this.isLogin = true;
    }
  }
  ngOnInit() {
  this._auth.login.subscribe(
    (res: any) => {
      this.isLogin = res;
      console.log(this.nguoiDungDangNhap);
      if (this.isLogin === true) {
        this.nguoiDungDangNhap = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
        console.log(this.nguoiDungDangNhap);
      }
      this.checkLoging();
    },
    (err: any) => {
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
