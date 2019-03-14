import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachgheComponent } from '../danh-sachghe/danh-sachghe.component';

@Component({
  selector: 'app-edit-danhsach-ghe',
  templateUrl: './edit-danhsach-ghe.component.html',
  styleUrls: ['./edit-danhsach-ghe.component.css']
})
export class EditDanhsachGheComponent implements OnInit {
  @ViewChild(DanhSachgheComponent) dsGheCom;
  constructor() { }

  themGheparent(...thamso:any[]) {

    let gheDuocThem = {
      TenGhe:thamso[0],
      SoGhe: thamso[1],
      Gia: thamso[2],
      TrangThai:null,
    }
    if(thamso[3] === "false" ) {
      gheDuocThem.TrangThai = false;
    } else if(thamso[3] === "true"){
      gheDuocThem.TrangThai = true;
    }
    this.dsGheCom.ThemGhe(gheDuocThem);
  }
  ngOnInit() {
  }

}
