import { SafeResourceUrl } from '@angular/platform-browser';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Video } from '../model/video.model';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn:'root'
})

export class VideoService{
  // in video detail page
  commentsSubject:BehaviorSubject<Comment[]>=new BehaviorSubject<Comment[]>(null);
  videoUrlSubject:BehaviorSubject<string>=new BehaviorSubject<string>('');
  videoSubject:BehaviorSubject<Video>=new BehaviorSubject<Video>(null);
  // in home page
  videoInMainPage:BehaviorSubject<Video>=new BehaviorSubject<Video>(null);
  constructor(private httpClient:HttpClient){}

  getAllVideo(){
    return this.httpClient.get<any>('http://localhost:8080/api/videos');
  }
  getVideoById(id:string){
    return this.httpClient.get<any>('http://localhost:8080/api/videos/'+id);
  }
  complete(){
    this.commentsSubject.complete;
    this.videoUrlSubject.complete;
  }
}
