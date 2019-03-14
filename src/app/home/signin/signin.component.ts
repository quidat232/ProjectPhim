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
  
  constructor(private _nguoiDungSV:NguoidungApiService,private _router:Router,private _auth:AuthService  ) { }

  DangNhap() {
    let nguoiDungDN = this.formDangNhap.value;
    this._nguoiDungSV.DangNhap(nguoiDungDN.TaiKhoan, nguoiDungDN.MatKhau).subscribe(
      (kq:any) =>{
        console.log(kq);
        if(typeof(kq) == "object") {
          localStorage.setItem('nguoiDungDangNhap', JSON.stringify(kq));
          // this._auth.isLogin = true;
          this._auth.checkLogin();
          this._router.navigate(['/']);
          // console.log(this._auth.isLogin);
          
        } else {
          alert('Vui lòng nhập lại tài khoản và mật khẩu');
        }
      }, 
      (error:any) =>{
        console.log(error);
      }
    )
  }
  ngOnInit() {
    this.formDangNhap = new FormGroup({
      'TaiKhoan': new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]),
      'MatKhau': new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
  }

}
