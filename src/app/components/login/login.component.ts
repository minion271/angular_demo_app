import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  subscription:Subscription;
  constructor(private authenService:AuthenService) { }
  @Input() openModal:boolean;
  @Output() closeModal:EventEmitter<string>=new EventEmitter<string>();
  ngOnInit(): void {
  }
  login(){
    this.subscription=this.authenService.authenticate(this.username,this.password).subscribe(userData=>{
      sessionStorage.setItem('username',this.username);
      let tokenS='Bearer '+userData.token;
      sessionStorage.setItem('token',tokenS);
    },error=>{
      console.log(error)
    });
    this.closeModal.emit(this.username);
  }
  cancelLoginProcess(){
    this.closeModal.emit("");
  }
}
