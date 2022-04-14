import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loginService!: LoginService;
  constructor() {}

  ngOnInit(): void {

  }

  loggedIn() {
    return (localStorage.getItem('jwt') != undefined);
  }

  logoutUser() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_info');
  }
}
