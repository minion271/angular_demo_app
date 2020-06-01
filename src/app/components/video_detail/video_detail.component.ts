import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,ParamMap } from "@angular/router";

import { VideoService } from 'src/app/services/video.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-video-detail',
  templateUrl: './video_detail.component.html',
  styleUrls: ['./video_detail.component.css']
})
export class VideoDetailComponent implements OnInit,OnDestroy {

  constructor(private videoService:VideoService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.videoService.getVideoById(params.get('id')).subscribe(
        video=>{
          this.videoService.videoUrlSubject.next(video.url);
          this.videoService.commentsSubject.next(video.commentDTOS);
        }
      );
    });
    this.videoService.getVideoById(window.location.href.split('/')[4]).subscribe(
      video=>{
        this.videoService.videoSubject.next(video);

      }
    );
  }
  ngOnDestroy(){
    this.videoService.complete;
    // console.log('complete');
  }
}
