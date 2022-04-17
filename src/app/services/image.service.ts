import { Injectable } from '@angular/core';
import { Image } from '../models/app.model.image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image!: Image;

  constructor() { }

  setImageInfo(image: Image){
    this.image = image;
  }

  getImageInfo(){
    return this.image
  }

  

}
