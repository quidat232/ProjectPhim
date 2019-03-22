import { Component, OnInit } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoidung';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
  danhSachNguoiDung: NguoiDung[] = []

  constructor(private _nguoidungApi:NguoidungApiService) { }

  xoaNguoiDung(taiKhoan:string){
    this._nguoidungApi.XoaNguoiDung(taiKhoan).subscribe(
      (result: any) =>{
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this._nguoidungApi.LayDanhSachNguoiDung().subscribe(
      (result: any) =>{
        console.log(result);
        this.danhSachNguoiDung = result;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
