import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExoplanetCardsComponent } from './exoplanet-cards/exoplanet-cards.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    PicOfTheDayComponent,
    NavBarComponent,
    ExoplanetCardsComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
