import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { User } from 'app/models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exoplanet-cards',
  templateUrl: './exoplanet-cards.component.html',
  styleUrls: ['./exoplanet-cards.component.css']
})
export class ExoplanetCardsComponent implements OnInit {
  posts: any;

  username: any;

  constructor(private loginService: LoginService, private router: Router, private http: HttpClient) { }

  getPosts(){
    //this.posts = this.http.get(this.BACKEND_URL);
    //console.log(this.posts);

  }

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


  

}
