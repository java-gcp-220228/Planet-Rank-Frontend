import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';
import { ExoplanetCardsComponent } from './components/exoplanet-cards/exoplanet-cards.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ImageCommentsComponent } from './components/image-comments/image-comments.component'
const routes: Routes = [
  {path: 'image-gallery', component: ImageGalleryComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'logout', component: LogoutComponent}, 
  {path: '', component: PicOfTheDayComponent}, 
  {path: 'exoplanets', component: ExoplanetCardsComponent},
  { path: 'image-comments', component: ImageCommentsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
