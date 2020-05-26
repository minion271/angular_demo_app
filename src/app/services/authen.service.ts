import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private httpClient:HttpClient) { }
  authenticate(username,password){
    return this.httpClient.post<any>('http://localhost:8080/login',{username,password});
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
