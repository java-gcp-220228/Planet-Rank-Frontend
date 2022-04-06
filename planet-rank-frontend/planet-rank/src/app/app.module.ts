import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PicOfTheDayComponent } from './pic-of-the-day/pic-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    PicOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
