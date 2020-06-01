import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/model/video.model';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.css']
})
export class VideoDescriptionComponent implements OnInit {

  video:Video;
  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.videoSubject.subscribe(video=>{
      this.video=video;
      console.log(this.video);
    });

  }
  increaseLike(id:number){

  }
}
