import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PodImage } from '../models/PodImage';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureOfTheDayService {
  podErrorSubject: Subject<string> = new Subject<string>();
  data: Subject<PodImage> = new Subject<PodImage>();
  constructor(private client: HttpClient) { }

  // Assing the image api to a string variable
  api: string = "https://api.nasa.gov/planetary/apod?api_key=Q62rOAJyvNKfpbW8t8D0QWtKhEo89SPNd1gdwNqn";
  

  // async getImage(){
  //   // retrieve a response object from the api
  //   let res = await fetch(this.api);
  //   // retrive the json object and assign it to PodImage Type data
  //   let data: PodImage = await res.json();
  //   console.log(data);
  //   // return the data to the component class
  //   return data;
  // }

  getImage(){
    this.client.get<PodImage>(this.api,{'observe':'response'}).
    subscribe(
      res=>{
        const imageUrl: PodImage = res.body!;
        this.data.next(imageUrl);
        console.log(this.data);
        // return data;
      }
      , err =>{
        const errorMessage = err.error;
        this.podErrorSubject.next(errorMessage);
      }
    )
  }
}
