import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phim } from '../models/phim'

@Injectable({
  providedIn: 'root'
})
export class PhimApiService {
  LayDanhSachPhim() :Observable<any> {
    let urlApi = 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03';
    let obServe =  this._httpClient.get(urlApi);
    return obServe
  }
  LayChiTietPhim(maphim:any) :Observable<any> {
    let urlApi = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`;
    let obServe = this._httpClient.get(urlApi);
    return obServe
  }
  ThemPhim(form:Phim) :Observable<any> {
    let urlApi = 'http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi';
    let obServe = this._httpClient.post(urlApi, form,{
        headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }}
    )
    return obServe
  }
  CapNhatPhim(form:Phim) :Observable<any> {
    let urlApi = 'http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim';
    let obServe = this._httpClient.post(urlApi,form,{
        headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }}
    )
    return obServe
  }
  XoaPhim(maphim:any) :Observable<any> {
    let urlApi = `http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`;
    let obServe = this._httpClient.delete( urlApi );
    return obServe

  }

  constructor(private _httpClient:HttpClient ) { }
}
