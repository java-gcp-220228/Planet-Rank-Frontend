import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginErrorSubject: Subject<string> = new Subject<string>();

  constructor(private client: HttpClient, private router: Router,) {}

  getUserInfoFromJwt(): Observable<HttpResponse<User>> {
    return this.client.get<User>(`${environment.BACKEND_URL}/test`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
  }

  authenticateUser(username: string, password: string) {
    this.client.post<User>(`${environment.BACKEND_URL}/login`, {
        'username': username,
        'password': password
    }, {
      'observe': 'response'
    }).subscribe(
        res => {
          const jwt = res.headers.get('token');
          localStorage.setItem('jwt', jwt!);
          localStorage.setItem('user_info', JSON.stringify(res.body));
          this.router.navigate(['exoplanets'])
        }
      , err => {
        const errorMessage = err.error;
        this.loginErrorSubject.next(errorMessage);
      })
  }
}
