import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guard/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  statusND:string = "add";
  statusP:string = "add";
  constructor( private _auth:AuthService) { }

  ngOnInit() {
    this._auth.checkAdmin()
    console.log(this._auth.checkAdmin())

  }

}
