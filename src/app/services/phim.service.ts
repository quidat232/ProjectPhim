import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Phim } from '../models/phim';
import { DatVe } from '../models/DatVe';
import { Ve } from '../models/Ve';


@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _Http:Http) { }
  getDanhSachPhim():Observable<any>{
    let urlDanhSachphim = `http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05`;
    let obServe = this._Http.get(urlDanhSachphim).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  getChiTietPhim(maphim):Observable<any>{
    let urlChiTietPhim = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`;
    let obServe = this._Http.get(urlChiTietPhim).pipe(map((result:Response)=>result.json()));
    return obServe;
  }
  getChiTietPhongVe(malichChieu):Observable<any>{
    let urlChiTietPhongVe = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichChieu}`;
    let obServe = this._Http.get(urlChiTietPhongVe).pipe(map((result:Response)=>result.json()));
    return obServe;
  }
  postDatVe(ve:Ve):Observable<any>{
    let urlDatVe = 'http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe';
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(urlDatVe,ve,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  LayLichSuDatVe(taiKhoan):Observable<any>{
    let urlLichSuDatVe = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`;
    let header = new Headers();
    header.append('Content-type','application/json;charset=UTF-8');
    let obServe = this._Http.post(urlLichSuDatVe,{headers:header}).pipe(map((result:Response) => result.json()));
    return obServe;
  }
}
