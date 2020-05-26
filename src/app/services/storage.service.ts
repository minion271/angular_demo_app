import { Injectable } from "@angular/core";
import { User } from '../model/user.model';

@Injectable({
  providedIn:'root'
})

export class StorageService{
  user:User;
  constructor(){}
  // get user in storage
  getUserInfoInStorage():User{
    this.user=new User(sessionStorage.getItem('username'),'');
    return this.user;
  }
}
