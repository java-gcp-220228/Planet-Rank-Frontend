import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { User } from 'app/models/user';
import { HttpClient } from '@angular/common/http';
import { ExoplanetCards } from 'app/models/exoplanetCard';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as $ from 'jquery';
@Component({
  selector: 'app-exoplanet-cards',
  templateUrl: './exoplanet-cards.component.html',
  styleUrls: ['./exoplanet-cards.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class ExoplanetCardsComponent implements OnInit {
  readonly BACKEND_URL = 'http://localhost:8080';
  exoCards!: Observable<ExoplanetCards[]>;
  exoCardComment: any;
  username: any;

  constructor(private loginService: LoginService, private router: Router, private http: HttpClient) {
   }

  getPosts(){
    this.exoCards = this.http.get<ExoplanetCards[]>(this.BACKEND_URL + '/exoplanets');

  }
  

  // rotate(){
  //   document.getElementById("#flip-btn")?.style.transform ?? == "rotateY(180deg)"
  // }

  ngOnInit(): void {
    this.getPosts();
    this.loginService.getUserInfoFromJwt().subscribe((res) => {

    this.username = res.body?.username;

    }, err => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
      }
    })

  }

  flipped() {
    console.log('weewe')
    $('.card').toggleClass('flipped');
}


  

}
