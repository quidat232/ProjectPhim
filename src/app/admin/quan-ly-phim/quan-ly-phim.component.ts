import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { TransformDataService } from 'src/app/services/transform-data.service';
import { Phim } from 'src/app/models/phim';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {

  constructor(private _phimApi:PhimApiService, private _stransform:TransformDataService) { }

  danhSachPhim: Phim[] = [];
  p: number = 1;
  collection: any[] = this.danhSachPhim;

  danhSachPhimTimKiem: Phim[]  = [];
  statusP:string = "edit";

  TimPhim(value:any){
    this.danhSachPhimTimKiem = this.danhSachPhim.filter( e => e.TenPhim && e.TenPhim.indexOf(value) !== -1);
  }
  suaPhim(phim:Phim){
    this._stransform.transformData( phim )
  }
  xoaPhim(maphim:any){
    this._phimApi.XoaPhim(maphim).subscribe(
      (result: any) =>{
        console.log(result);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this._phimApi.LayDanhSachPhim().subscribe(
      (result: any) =>{
        this.danhSachPhimTimKiem = result;
        this.danhSachPhim = result;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
