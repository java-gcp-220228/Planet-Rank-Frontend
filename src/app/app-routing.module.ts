import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ExoplanetCardsComponent } from './exoplanet-cards/exoplanet-cards.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';

const routes: Routes = [
  {path: 'image-gallery', component: ImageGalleryComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'logout', component: LogoutComponent}, 
  {path: '', component: PicOfTheDayComponent}, 
  {path: 'exoplanets', component: ExoplanetCardsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
