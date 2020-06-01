import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { VideoDetailComponent } from './components/video_detail/video_detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MainViewComponent } from './components/video_detail/main-view/main-view.component';
import { PostCommentComponent } from './components/video_detail/post-comment/post-comment.component';
import { SocialShareComponent } from './components/video_detail/social_share/social-share/social-share.component';
import { VideoDescriptionComponent } from './components/video_detail/video-description/video-description.component';
import { CommentAreaComponent } from './components/video_detail/comment_area/comment-area/comment-area.component';
import { ListVideoComponent } from './components/main-page/list-video/list-video.component';
import { MainVideoComponent } from './components/main-page/main-video/main-video.component';


const routes: Routes = [
  {path:'video/:id',component:VideoDetailComponent},
  {path:'',component:MainPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  declarations:[
    MainPageComponent,
    VideoDetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    MainViewComponent,
    PostCommentComponent,
    SocialShareComponent,
    VideoDescriptionComponent,
    CommentAreaComponent,
    MainVideoComponent,
    ListVideoComponent

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
