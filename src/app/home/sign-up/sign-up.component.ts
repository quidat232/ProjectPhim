import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { NguoiDung } from 'src/app/models/nguoidung';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('formDangKy') formDK: NgForm;
  mangNguoiDungDangKy: NguoiDung[] = [];


  DangKy(nguoiDung: NguoiDung) {
    nguoiDung.value.MaNhom = 'GP03';
    this._nguoiDungSV.DangKy(nguoiDung).subscribe(
      (kq: any) => {
        console.log(kq);
        this._router.navigate(['/SignUp-success']);
      },
      (error: any) =>{
        console.log(error);
      }
    );
    // lúc đăng ký xong reset lại form
    this.formDK.reset();
  }


  constructor(private _nguoiDungSV: NguoidungApiService, private _router: Router) { }
  ngOnInit() {
    this._nguoiDungSV.LayDanhSachNguoiDung().subscribe(
      (kq: any) => {
        console.log(kq);
        this.mangNguoiDungDangKy = kq;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

}
