import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';
import { User } from 'app/models/user';


@Component({
  selector: 'app-exoplanet-cards',
  templateUrl: './exoplanet-cards.component.html',
  styleUrls: ['./exoplanet-cards.component.css']
})
export class ExoplanetCardsComponent implements OnInit {

  username: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getUserInfoFromJwt().subscribe((res) => {
      // const user: User = res.body;

      // this.username = user.username;
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['/login']);
      }
    })
  }

}
