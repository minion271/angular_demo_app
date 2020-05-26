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


const routes: Routes = [
  {path:'video/:id',component:VideoDetailComponent},
  {path:'',component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  declarations:[
    MainPageComponent,
    VideoDetailComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
