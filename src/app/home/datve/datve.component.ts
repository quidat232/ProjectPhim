import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimService } from 'src/app/services/phim.service';
import { DatVe } from 'src/app/models/DatVe';
import { Ve } from 'src/app/models/Ve';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/guard/auth.service';
import { AppPage } from 'e2e/src/app.po';
import { map } from 'rxjs/operators';
import { NgLocalization } from '@angular/common';
import { DanhSachgheComponent } from '../danh-sachghe/danh-sachghe.component';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css']
})
export class DatveComponent implements OnInit {
  public MaLichChieu: string;
  public DanhSachGheNgoi: any[] = [];
  @ViewChild('dsGhe') dsGhe: DanhSachgheComponent;
  constructor(
    private activatedRoute: ActivatedRoute, private phimSV: PhimService, private router: Router,private _auth:AuthService) { }
  LayTaiKhoanNguoiDung() {
    let nguoiDungHienTai = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    if(nguoiDungHienTai != null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Vui lòng đăng nhập để đặt vé');
      return false;
    }
  }
  layChiTietVe() {
    this.activatedRoute.params.subscribe(
      (kq: any) => {
        this.MaLichChieu = kq.malichchieu;
        this.phimSV.getChiTietPhongVe(this.MaLichChieu).subscribe(
          (kq: any) => {
            console.log(kq);
            this.DanhSachGheNgoi = kq.DanhSachGhe;
            console.log(this.DanhSachGheNgoi);
          },
          (err:any) => {
            console.log(err)
          }
        )
      },
      (err) => {
        console.log(err);
      }
    )
    
  }
  ngOnInit() {
    this.layChiTietVe();
    
  }
  datVePhim(danhSachGheDangDat) {
    if(this.LayTaiKhoanNguoiDung() !== false) {
      let ve = {
        MaLichChieu: this.MaLichChieu,
        TaiKhoanNguoiDung: this.LayTaiKhoanNguoiDung(),
        danhSachVe: danhSachGheDangDat
      };
      console.log(ve);
      this.phimSV.postDatVe(ve).subscribe((kq: any) => {
            console.log(kq);
            this._auth.checkLogin();
            setTimeout(() => {
              this.layChiTietVe();
              this.dsGhe.danhSachGheDangDat = [];
              this.router.navigate(['/datve-thanhcong']);
            }, 1000);
            // Swal.fire({
            //   type: 'success',
            //   title: 'ĐẶT VÉ THÀNH CÔNG'
            // }).then((res) =>{
            //   console.log(res);
            //   if (res) {
            //     this.layChiTietVe();
            //     this.dsGhe.danhSachGheDangDat = [];
            //   }
            // });
            // setTimeout(() => {
            //   this.router.navigate(['/lichsu-giaodich'])
            // }, 2000);
          },(err:any) =>{
            Swal.fire({
              type:'error'
            })
          }
         
        )
    }
    event.preventDefault();
  }
}
