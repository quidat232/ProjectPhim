import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NguoiDung } from '../models/nguoidung';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NguoidungApiService {
  maNhom: string;
  constructor(private _Http: Http, private _HttpClient: HttpClient) {
    this.maNhom = 'GP03';
   }

  LayDanhSachNguoiDung(): Observable<any> {
    return this._HttpClient.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${this.maNhom}`);
  }
  DangKy(nguoiDung: NguoiDung): Observable<any> {
    let url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung';
    let header = new Headers();
    header.append('Content-type', 'application/json;charset=UTF-8');
    return this._Http.post(url, nguoiDung.value,{headers: header}).pipe(map((result: Response) => result.json()));
  }
  DangNhap(taiKhoan, matKhau) {
    let apiDangNhap = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let header = new Headers();
    header.append('Content-type', 'application/json;charset=UTF-8');
    return this._Http.post(apiDangNhap, {headers: header}).pipe(map((result: Response) => result.json()));
  }
  CapNhatNguoiDung( nguoidung: NguoiDung ): Observable<any> {
    return this._HttpClient.post( 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin', nguoidung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  XoaNguoiDung( taiKhoan: string): Observable<any>{
    let apiXoa = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this._HttpClient.delete(apiXoa);
  }
  ThemNguoiDung( nguoiDung: NguoiDung) {
    nguoiDung.MaNhom = this.maNhom;
    if (nguoiDung.MaLoaiNguoiDung === 'KhachHang') {
      nguoiDung.TenLoaiNguoiDung = 'Khách Hàng';
    } else if (nguoiDung.MaLoaiNguoiDung === 'QuanTri') {
      nguoiDung.TenLoaiNguoiDung = 'Quản Trị';
    }
    return this._HttpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung', nguoiDung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
}
