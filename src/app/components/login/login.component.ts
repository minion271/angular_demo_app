import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { Subscription } from 'rxjs';
import { ControlLoginModalService } from 'src/app/services/control.login.modal.service';
import { CheckLoginService } from 'src/app/services/checklogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  username:string;
  password:string;
  openLoginModal:boolean;


  constructor(private authenService:AuthenService,
    private controlLoginModalService:ControlLoginModalService,
    private checkLoginService:CheckLoginService) { }
  ngOnInit(): void {
    this.controlLoginModalService.loginModalStatus$.subscribe(status=>this.openLoginModal=status);
  }
  login(){
    this.authenService.authenticate(this.username,this.password).subscribe(userData=>{
      sessionStorage.setItem('username',this.username);
      let tokenS='Bearer '+userData.token;
      sessionStorage.setItem('token',tokenS);
    },error=>{
      console.log(error)
    });
    this.controlLoginModalService.setLoginModalStatus(false);
    this.checkLoginService.updateLoginStatus(this.username);
  }
  cancelLoginProcess(){
    this.controlLoginModalService.setLoginModalStatus(false);
  }
  ngOnDestroy():void{
    // console.log('destroy login component');
    // this.controlLoginModalService.completeSubject;
    // this.checkLoginService.isLogin.complete;
  }
}
