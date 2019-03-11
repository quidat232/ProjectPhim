import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
