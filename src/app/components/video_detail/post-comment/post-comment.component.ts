import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from 'src/app/services/checklogin.service';
import { CommentService } from 'src/app/services/comment.service';
import { VideoService } from 'src/app/services/video.service';
import { Comment } from 'src/app/model/comment.model';
import { BehaviorSubject } from 'rxjs';
import { ControlLoginModalService } from 'src/app/services/control.login.modal.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  feedback_text:string;
  comments:Comment[];
  isLogined:boolean;

  constructor(private checkLoginService:CheckLoginService,
    private commentService:CommentService, private videoService:VideoService,
    private controlLoginModalService:ControlLoginModalService) { }

  ngOnInit(): void {
    this.checkLoginService.loginStream$.subscribe(isLogin=>{
      if(isLogin===" ")this.isLogined=false;
      else this.isLogined=true;
    });
  }
  postComment(){
    let user="";
    let time_gen=new Date;
    let message=this.feedback_text;
    this.checkLoginService.loginStream$.subscribe(username=>user=username);
    // from current href to determine id video
    let id=window.location.href.split('/')[4];
    // post comment
    this.commentService.postComment(user,message,time_gen,id);

    this.videoService.getVideoById(window.location.href.split('/')[4]).subscribe(
      video=>{
        let comment:Comment[]=video.commentDTOS;
        comment.push(new Comment(user,message,time_gen));
        this.videoService.commentsSubject.next(comment);
        this.videoService.videoSubject.next(video);
      }
    );

    this.videoService.commentsSubject.subscribe(cs=>this.comments=cs);

    this.feedback_text="";
  }
  openLoginModal(){
    this.controlLoginModalService.setLoginModalStatus(true);
  }

  closePostComment(){
    this.feedback_text="";
    let time_gen=new Date;
    console.log(time_gen.getDay()+'/'+time_gen.getMonth()+'/'+time_gen.getFullYear());
  }
  openPostCommentModal(){
    console.log('open');
  }
}
