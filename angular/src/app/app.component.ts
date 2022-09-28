
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'AngularApp';
  ImagePath:string;

  constructor() {
    //Image location
    this.ImagePath ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8rwMemLX-BN5K3qAhyAN7Q_Fa_Z4sAI9spxv7uSBxBMoT4Q0dImfrSp-MSz7PdZNu4Ks&usqp=CAU'

  }
ngOnInit() {
}
}