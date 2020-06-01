import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Comment } from '../model/comment.model';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn:'root'
})


export class CommentService{
  constructor(private httpClient:HttpClient){}
  postComment(user_username:string,message:string,gen_time:Date,id:string){
    console.log(message);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': sessionStorage.getItem('token')
      })
    };
    return this.httpClient.post<any>('http://localhost:8080/api/videos/'+id+'/comment',
      {user_username,message,gen_time},httpOptions).
        subscribe(data=>console.log(data),error=>console.log(error));
  }
}
