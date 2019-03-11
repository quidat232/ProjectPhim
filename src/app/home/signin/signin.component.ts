import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { AuthService } from 'src/app/guard/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('formDN') fromDangNhap: NgForm;
  formDangNhap:FormGroup;
  DangNhap() {
    console.log(this.formDangNhap.value);
  }
  constructor() { }

  ngOnInit() {
    this.formDangNhap = new FormGroup({
      'TaiKhoan': new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]),
      'MatKhau': new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

  // DangNhap(nguoiDung) {
  //   this._nguoiDungApi.DangNhap(nguoiDung).subscribe(
  //     (res:any) =>{
  //       if(typeof res !==  "string") {
  //         localStorage.setItem("Đăng nhập thành công",JSON.stringify(res))
  //         this._auth.isLogin = true;
  //         this._Router.navigate(['/']);
  //       } else {
  //         alert('Mật khẩu hoặc tài khoản không đúng');
  //       }
  //     }, (err:any) => {
  //       console.log(err);
  //     }
  //   )
  // }
}
