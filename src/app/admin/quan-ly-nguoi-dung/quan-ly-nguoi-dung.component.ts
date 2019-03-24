import { Component, OnInit } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoidung';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { TransformDataService } from 'src/app/services/transform-data.service';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {

  danhSachNguoiDung: NguoiDung[] = [];
  p: number = 1;
  collection: any[] = this.danhSachNguoiDung;

  danhSachTimKiem: NguoiDung[]  = [];
  statusND:string = "edit"

  constructor(private _nguoidungApi:NguoidungApiService, private _stransform:TransformDataService) { }
  TimNguoiDung(value){
    this.danhSachTimKiem = this.danhSachNguoiDung.filter( e => e.HoTen && e.HoTen.indexOf(value) !== -1);
  }
  suaNguoiDung(nguoidung:NguoiDung){
    this._stransform.transformData( nguoidung )
  }

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
        this.danhSachTimKiem = result;
        this.danhSachNguoiDung = result;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
