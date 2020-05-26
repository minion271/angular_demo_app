import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class ControlLoginModalService{
  private loginStatusSubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true);
  loginModalStatus$:Observable<boolean>=this.loginStatusSubject.asObservable();
  setLoginModalStatus(status:boolean){
    this.loginStatusSubject.next(status);
  }

}
