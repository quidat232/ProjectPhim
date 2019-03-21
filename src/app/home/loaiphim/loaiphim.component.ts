import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaiphim',
  templateUrl: './loaiphim.component.html',
  styleUrls: ['./loaiphim.component.css']
})
export class LoaiphimComponent implements OnInit {
  dangChieuStatus:boolean = true;
  constructor() { }
  HienThiPhimDangChieu(){
    this.dangChieuStatus = true;
  }
  HienThiPhimSapChieu(){
    this.dangChieuStatus =false;
  }
  ngOnInit() {
  }
  
}
