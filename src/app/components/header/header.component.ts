import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from 'src/app/services/checklogin.service';
import { StorageService } from 'src/app/services/storage.service';
import { ControlLoginModalService } from 'src/app/services/control.login.modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogined:boolean;
  username:string;

  constructor(private checkLoginService:CheckLoginService,
    private storageService:StorageService,
    private controlLoginModalService:ControlLoginModalService) { }

  ngOnInit(): void {
    this.checkLoginService.loginStream$.subscribe(isLogin=>{
      if(isLogin===" ")this.isLogined=false;
      else this.isLogined=true;
    });
    this.checkLoginService.loginStream$.subscribe(user=>this.username=user);
  }
  openLogin(){
    this.controlLoginModalService.setLoginModalStatus(true);
  }
  closeLoginModal(name:string){
    console.log('close modal');
  }
}
