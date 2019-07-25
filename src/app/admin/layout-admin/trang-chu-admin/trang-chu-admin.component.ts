import { Component, OnInit } from '@angular/core';
import { NguoidungApiService } from '../../../services/nguoidung-api.service';
import { Phim } from 'src/app/models/phim';
import { PhimService } from '../../../services/phim.service';
import { NguoiDung } from 'src/app/models/nguoidung';
@Component({
  selector: 'app-trang-chu-admin',
  templateUrl: './trang-chu-admin.component.html',
  styleUrls: ['./trang-chu-admin.component.css']
})
export class TrangChuAdminComponent implements OnInit {
  countNguoiDung: number;
  countPhim: number;
  countVe: number;
  arrDanhSachPhim: Phim[] = [];
  arrNguoiDung: NguoiDung;
  countSum = 0;
  constructor(private nguoiDungApiService: NguoidungApiService, private phimService: PhimService) { }

  ngOnInit() {
    this.LayDanhSachPhim();
    this.LayDanhSachNguoiDung();
    this.LayDanhSachVe();
  }

  LayDanhSachPhim() {
    this.phimService.getDanhSachPhim().subscribe(
      (res: any) => {
        console.log(res);
        this.countPhim = res.length;
        this.arrDanhSachPhim = res;
      }, (err: any) =>  {
        console.log(err);
      }
    );
  }

  LayDanhSachNguoiDung() {
    this.nguoiDungApiService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
        console.log(res);
        this.countNguoiDung = res.length;
      }, (err: any) => {
        console.log(err);
      }
    );
  }
  LayDanhSachVe() {
    this.nguoiDungApiService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
        this.arrNguoiDung = res;
        this.arrNguoiDung.filter( (nguoidung) => {
          this.phimService.LayLichSuDatVe(nguoidung.TaiKhoan).subscribe(
            (resVe: any) => {
              this.countVe = resVe.DanhSachVeDaDat.length;
              this.countSum = this.countVe + this.countSum;
            }
          );
        });
      }
    );
  }
}
