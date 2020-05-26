import { Injectable } from "@angular/core";
import { AuthenService } from './authen.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class CheckLoginService{
  isLogin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  loginStream$:Observable<boolean>=this.isLogin.asObservable();
  constructor(){}
  updateLoginStatus(status:boolean){
    this.isLogin.next(status);
  }
}
