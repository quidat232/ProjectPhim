import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  LoaiTinTuc:string = "DienAnh";
  constructor() { }
  ChonLoaiTin(val) {
    this.LoaiTinTuc = val;
  }
  ngOnInit() {
  }

}
