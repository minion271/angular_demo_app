import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from './services/checklogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private checkLoginService:CheckLoginService){}
  ngOnInit(){
    if(sessionStorage.getItem('username'))this.checkLoginService.updateLoginStatus(sessionStorage.getItem('username'));
    else this.checkLoginService.updateLoginStatus(" ");
  }

}
