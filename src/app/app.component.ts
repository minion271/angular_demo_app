import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from './services/loginstatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  constructor(private loginStatusService:CheckLoginService){}
  ngOnInit(){
    if(sessionStorage.getItem('username'))this.loginStatusService.updateLoginStatus(true);
    else this.loginStatusService.updateLoginStatus(false);
  }

}
