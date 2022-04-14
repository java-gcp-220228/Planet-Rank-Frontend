import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PodImage } from '../../models/PodImage';
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
  
  // pictureOfTheDay: string = "https://apod.nasa.gov/apod/image/2204/Calif2Pleiades_Krcmarek_10000.jpg";
  // declare a variable for the picture url
  pictureOfTheDay: string="";
  title: string = "";  


  // Dependency injection (Constructor injection)
  constructor(pictureOfTheDayService: PictureOfTheDayService) { 
    this.pictureOfTheDayService = pictureOfTheDayService;
  }
  
  ngOnInit(): void {
    // call the getPicture function during component intitaion.
    // this.getPictureOfTheDay();
    this.pictureOfTheDayService.getImage();
    this.pictureOfTheDayService.data.subscribe((image)=>{
      this.pod = image;
      this.pictureOfTheDay = this.pod.hdurl;
      this.title = this.pod.title;
    })
  }

//  getPictureOfTheDay(){
//     // fecth image object from service
//     // this.pod = await this.pictureOfTheDayService.getImage();
//     this.pod = this.pictureOfTheDayService.data.subscribe(())
//     // Assign image url from the image object to the picture variable
//     console.log(this.pod);
//     console.log("I am the flash");
//     this.pictureOfTheDay = this.pod.url;
//   }
  
}
