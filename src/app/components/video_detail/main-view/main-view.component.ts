import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit,OnDestroy {
  videoUrl:SafeResourceUrl;
  constructor(private videoService:VideoService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoService.videoUrlSubject.subscribe(url=>this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
  ngOnDestroy():void{
    // this.videoService.videoUrlSubject.complete();
  }
}
