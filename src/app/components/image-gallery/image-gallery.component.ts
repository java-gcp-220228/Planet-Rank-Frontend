import { Component, OnInit } from '@angular/core';
import { NasaImageApiService } from '../../service/nasa-image-api.service';
import { DatabaseResponse } from '../../models/app.model.databaseResponse';
import { Image } from '../../models/app.model.image'
@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnInit {


   public images: Image[] = [];
  
  constructor(private nasaImageApiService: NasaImageApiService) { }

  ngOnInit() {
    this.nasaImageApiService.getImages().subscribe(data => this.images = data);

  }
getOrigUrl(url: string) {
  window.open(url, "_blank");
}


}
