import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExoplanetCardsComponent } from './components/exoplanet-cards/exoplanet-cards.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { NgParticlesModule } from 'ng-particles';
import { ParticleBackgroundComponent } from './components/particle-background/particle-background.component';
import { NasaImageApiService } from './services/nasa-image-api.service'
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCommentsComponent } from './components/image-comments/image-comments.component';
import { ImageService } from './services/image.service';


@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    PicOfTheDayComponent,
    NavBarComponent,
    ExoplanetCardsComponent,
    LoginComponent,
    LogoutComponent,
    ParticleBackgroundComponent,
    ImageCommentsComponent
  ],
  imports: [
    NgParticlesModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  schemas:[NO_ERRORS_SCHEMA
  
  ],


  providers: [ NasaImageApiService, NgbActiveModal, ImageService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
