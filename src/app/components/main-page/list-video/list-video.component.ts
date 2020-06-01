import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/model/video.model';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.css']
})
export class ListVideoComponent implements OnInit {
  videos:Video[];
  item_active=false;

  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideo().subscribe(all_video=>this.videos=all_video);
  }
  selectItem(video:Video){
    this.item_active=true;
    this.videoService.videoInMainPage.next(video);
  }
}
