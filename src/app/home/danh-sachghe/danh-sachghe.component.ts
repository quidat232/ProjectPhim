import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sachghe',
  templateUrl: './danh-sachghe.component.html',
  styleUrls: ['./danh-sachghe.component.css']
})
export class DanhSachgheComponent implements OnInit {
  
  DanhSachGhe =[
    { SoGhe: 1, TenGhe: "1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "8", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "35", Gia: 100, TrangThai: false },
    { SoGhe: 36, TenGhe: "36", Gia: 100, TrangThai: true }
  ]
  soGheDaDat:number = 0;
  soGheConLai:number = 0;
  danhSachGheDangDat = [];
  constructor() { }

  ngOnInit() {
    for(let ghe of this.DanhSachGhe){
      if(!ghe.TrangThai) {
        this.soGheConLai++;
      }
    }
  }
  DatGheParent(status,ghe) {
    if(status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.danhSachGheDangDat.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for(let index in this.danhSachGheDangDat) {
        //tìm ghế đang được huỷ
        if(this.danhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.danhSachGheDangDat.splice(parseInt(index),1);
        }
      }
    }
    console.log(this.danhSachGheDangDat);
  }
  ThemGhe(gheduocThem) {
    this.DanhSachGhe.push(gheduocThem);
  }
}
