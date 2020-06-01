import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/model/video.model';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {
  videoActive:Video;
  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.videoInMainPage.subscribe(video=>{
      this.videoActive=video;
    });
  }
}
