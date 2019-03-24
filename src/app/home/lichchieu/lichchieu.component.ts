import { Component, OnInit } from '@angular/core';
import { Phim } from 'src/app/models/phim';
import { PhimService } from 'src/app/services/phim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.css']
})
export class LichchieuComponent implements OnInit {
  lichChieu:Phim[]= [];
  getLichChieu:any = [];
  public MaPhim:number[];
  constructor(private phimSV:PhimService,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.phimSV.getDanhSachPhim().subscribe(
      (kq:any) => {
        this.lichChieu = kq;
        console.log(this.lichChieu);
      }
    )
   
  }

}
