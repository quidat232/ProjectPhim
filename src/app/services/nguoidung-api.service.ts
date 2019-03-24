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

  constructor(private _Http:Http, private _HttpClient: HttpClient) { }

  LayDanhSachNguoiDung():Observable<any> {
    let url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`
    let obServe = this._HttpClient.get( url )
    return obServe;
  }
  ThemNguoiDung(nguoiDung:NguoiDung):Observable<any> {
    let url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(url,nguoiDung,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  DangNhap(taiKhoan:string, matKhau:string) {
    let apiDangNhap = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(apiDangNhap,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe
  }
  CapNhatNguoiDung( nguoidung:NguoiDung ):Observable<any> {
    let apiCapNhat = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin'
    let obServe = this._HttpClient.post( apiCapNhat, nguoidung,{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    return obServe
  }
  XoaNguoiDung( taiKhoan:string):Observable<any>{
    let apiXoa = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    let obServe = this._HttpClient.delete(apiXoa)
    return obServe
  }

  
}
