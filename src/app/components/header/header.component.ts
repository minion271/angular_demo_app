import { Component, OnInit, AfterViewChecked, Input, AfterContentInit, AfterContentChecked, OnChanges } from '@angular/core';
import { CheckLoginService } from 'src/app/services/loginstatus.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnChanges {
  openLoginModal:boolean;
  isLogined:boolean;
  username:string;
  @Input() openLoginFromVideoDetail:boolean;

  constructor(private loginStatusService:CheckLoginService,
    private storageService:StorageService) { }

  ngOnInit(): void {
    this.loginStatusService.loginStream$.subscribe(isLogin=>this.isLogined=isLogin);
    this.username=this.storageService.getUserInfoInStorage().getUsername;

  }
  openLogin(){
    this.openLoginModal=true;
  }
  closeLoginModal(name:string){
    console.log('close modal');
    this.openLoginModal=false;
    if(name.length!==0){
      this.username=name;
      this.isLogined=true;
    };
  }
  ngOnChanges(){
    this.openLoginModal=this.openLoginFromVideoDetail;
  }
}
