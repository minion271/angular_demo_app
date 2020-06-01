import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-comment-area',
  templateUrl: './comment-area.component.html',
  styleUrls: ['./comment-area.component.css']
})
export class CommentAreaComponent implements OnInit,OnDestroy {
  comments:Comment[];
  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.commentsSubject.subscribe(cs=>{
      this.comments=cs;
    });
  }
  ngOnDestroy():void{
    // this.videoService.commentsSubject.complete();
  }
}
