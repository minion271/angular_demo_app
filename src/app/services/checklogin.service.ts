import { Injectable } from "@angular/core";
import { AuthenService } from './authen.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CheckLoginService{
  isLogin:BehaviorSubject<string>=new BehaviorSubject<string>(" ");
  loginStream$:Observable<string>=this.isLogin.asObservable();
  constructor(){}
  updateLoginStatus(username:string){
    this.isLogin.next(username);
  }
}
