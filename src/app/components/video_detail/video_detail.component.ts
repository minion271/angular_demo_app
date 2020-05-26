
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from "@angular/router";

import { VideoService } from 'src/app/services/video.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { CheckLoginService } from 'src/app/services/loginstatus.service';


@Component({
  selector: 'app-video-detail',
  templateUrl: './video_detail.component.html',
  styleUrls: ['./video_detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  videoUrl:SafeResourceUrl;
  comments:Comment[];
  isLogined:boolean;
  openLogin:boolean=false;


  constructor(private videoService:VideoService,
    private route:ActivatedRoute,private sanitizer: DomSanitizer,
    private loginStatusService:CheckLoginService) { }

  ngOnInit(): void {
    // check login to control feature: user post comment
    this.loginStatusService.loginStream$.subscribe(isLogin=>this.isLogined=isLogin);
    // fetch comment for video currently
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.videoService.getVideoById(params.get('id')).subscribe(
        video=>{
          this.videoUrl =this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
          this.comments=video.commentDTOS;
        }
      );
    });
  }
  openLoginModal(){
    console.log("go here");
    this.openLogin=true;
  }

}
