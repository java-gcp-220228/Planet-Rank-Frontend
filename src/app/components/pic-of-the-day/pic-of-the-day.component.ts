import { Component, Input, OnInit } from '@angular/core';
import { PodImage } from '../../PodImage';
import { PictureOfTheDayService } from '../../services/picture-of-the-day.service';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.css']
})
export class PicOfTheDayComponent implements OnInit {

  pictureOfTheDayService: PictureOfTheDayService;
  
  // declare a PodImage type variable to hold the image object
  pod!: PodImage;
  

  explanation:string = "This is a really cool Photo!"
  // pictureOfTheDay: string = "https://apod.nasa.gov/apod/image/2204/Calif2Pleiades_Krcmarek_10000.jpg";
  // declare a variable for the picture url
  pictureOfTheDay: string="";


  // Dependency injection (Constructor injection)
  constructor(pictureOfTheDayService: PictureOfTheDayService) { 
    this.pictureOfTheDayService = pictureOfTheDayService;
  }
  
  ngOnInit(): void {
    // call the getPicture function during component intitaion.
    this.getPictureOfTheDay();
  }

  async getPictureOfTheDay(){
    // fecth image object from service
    this.pod = await this.pictureOfTheDayService.getImage();
    // Assign image url from the image object to the picture variable
    this.pictureOfTheDay = this.pod.url;
  }
  
}
