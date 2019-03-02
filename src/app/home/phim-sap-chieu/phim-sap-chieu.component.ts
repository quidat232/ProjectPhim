import { Component, OnInit } from '@angular/core';
import { $} from 'jquery';
declare var $:any;

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel ({
      loop: true,
      margin: 10,
      nav:true,
      responsive: {
        0: {
          item:1
        },
        600:{
          item:3
        },
        1000: {
          item:5
        }
      }
    })
  }

}
