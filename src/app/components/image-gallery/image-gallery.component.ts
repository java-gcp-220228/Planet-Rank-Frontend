import { Component, OnInit } from '@angular/core';
import { NasaImageApiService } from '../../services/nasa-image-api.service';
import { Image } from '../../models/app.model.image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnInit {


   public images: Image[] = [];
  
  constructor(
    private nasaImageApiService: NasaImageApiService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.nasaImageApiService.getImages().subscribe(data => this.images = data);

  }
getOrigUrl(url: string) {
  window.open(url, "_blank");
}
setImageInfo(image: Image) {
  this.imageService.setImageInfo(image)
}


}
