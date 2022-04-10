import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  token!: string;

  constructor() { }

  ngOnInit(): void {
  }

  async loginUser() {
    const postLoginURL = 'http://localhost:8080/login';
    const jsonString = JSON.stringify({
      "username": this.username,
      "password": this.password
    });

    console.log(jsonString);

    let res = await fetch(postLoginURL, {
      method: 'POST',
      body: jsonString,
  });

    this.token = res.headers.get('token')!;
    localStorage.setItem('jwt', this.token);
    
console.log(jsonString);

    if (res.status === 200) {
      let user = await res.json();

      console.log(user);

      localStorage.setItem('user_id', user.id);
      localStorage.setItem('username', user.username);

    } else {
      let error = await res.text();
      console.log(error);
    }
  }


}
