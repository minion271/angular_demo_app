import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Video } from '../model/video.model';

@Injectable({
  providedIn:'root'
})

export class VideoService{

  constructor(private httpClient:HttpClient){}
  getVideoById(id:string){
    return this.httpClient.get<any>('http://localhost:8080/api/videos/'+id);
  }
}
