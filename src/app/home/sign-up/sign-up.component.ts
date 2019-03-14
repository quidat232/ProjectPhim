import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { NguoiDung } from 'src/app/models/nguoidung';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('formDangKy') formDK:NgForm;
  mangNhom:string[] = ['GP01','GP02','GP03','GP04','GP05','GP06','GP07','GP08','GP09','GP10'];
  mangNguoiDungDangKy:NguoiDung[] = [];



  DangKy(nguoiDung:NguoiDung){
    console.log(nguoiDung);
    this._nguoiDungSV.ThemNguoiDung(nguoiDung).subscribe(
      (kq:any) => {
        console.log(kq);
      },
      (error:any) =>{
        // console.log(error);
      }
    )



    //lúc đăng ký xong reset lại form
    this.formDK.reset();
  }


  constructor(private _nguoiDungSV: NguoidungApiService) { }



  ngOnInit() {
    this._nguoiDungSV.LayDanhSachNguoiDung().subscribe(
      (kq:any) => {
        console.log(kq);
        this.mangNguoiDungDangKy = kq; 
      }
    )
  }

}
