import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { product } from '../product';
@Component({
  selector: 'app-foreach',
  templateUrl: './foreach.component.html',
  styleUrls: ['./foreach.component.css']
})
export class ForeachComponent implements OnInit {
  hero = ['sudeep','darshan','prk'];
  data = [new hero(123,"sam"),
   new hero(234,'milton')];
   pdata = [new product("iphone1",345,"https://i1.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Midnight_PDP_Image_Position-1A_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1"),
   new product("iphone2",777,"https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-blue-back.png?v=5")];

constructor() { }
  ngOnInit(): void {
  }
}
