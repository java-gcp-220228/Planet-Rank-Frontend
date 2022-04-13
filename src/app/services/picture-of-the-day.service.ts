import { Injectable } from '@angular/core';
import { PodImage } from '../models/PodImage';

@Injectable({
  providedIn: 'root'
})
export class PictureOfTheDayService {

  constructor() { }

  // Assing the image api to a string variable
  api: string = "https://api.nasa.gov/planetary/apod?api_key=Q62rOAJyvNKfpbW8t8D0QWtKhEo89SPNd1gdwNqn";
  

  async getImage(){
    // retrieve a response object from the api
    let res = await fetch(this.api);
    // retrive the json object and assign it to PodImage Type data
    let data: PodImage = await res.json();
    // return the data to the component class
    return data;
  }
}
