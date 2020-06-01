import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoDetailComponent } from './components/video_detail/video_detail.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PostCommentComponent } from './components/video_detail/post-comment/post-comment.component';
import { VideoDescriptionComponent } from './components/video_detail/video-description/video-description.component';
import { CommentAreaComponent } from './components/video_detail/comment_area/comment-area/comment-area.component';

@NgModule({
  declarations: [
    AppComponent,
    // CommentAreaComponent,
    // VideoDescriptionComponent,
    // PostCommentComponent,
    // MainViewComponent,
    // MainPageComponent,
    // HeaderComponent,
    // FooterComponent,
    // VideoDetailComponent,
    // LoginComponent,
    // LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
