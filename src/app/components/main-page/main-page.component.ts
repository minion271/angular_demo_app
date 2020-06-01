import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Video } from 'src/app/model/video.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  videos:Video[];
  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideo().subscribe(all_video=>{
        this.videos=all_video
        this.videoService.videoInMainPage.next(this.videos[0]);
      }
    );
  }

}
