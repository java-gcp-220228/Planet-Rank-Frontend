import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.css']
})
export class PicOfTheDayComponent implements OnInit {

  explanation:string = "The vast Cosmos is beautiful and neverending\n\t - SpaceScripterJ"
  pictureOfTheDay: string = "https://apod.nasa.gov/apod/image/2204/Calif2Pleiades_Krcmarek_10000.jpg";

  constructor() { }

  ngOnInit(): void {
  }
}
