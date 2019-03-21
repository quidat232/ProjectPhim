import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NguoiDung } from '../models/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class NguoidungApiService {

  constructor(private _Http:Http) { }

  LayDanhSachNguoiDung():Observable<any> {
    let url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`
    let obServe = this._Http.get(url).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  DangKy(nguoiDung:NguoiDung):Observable<any> {
    let url = 'http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung';
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(url,nguoiDung.value,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  DangNhap(taiKhoan, matKhau) {
    let apiDangNhap = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(apiDangNhap,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe
  }
}
