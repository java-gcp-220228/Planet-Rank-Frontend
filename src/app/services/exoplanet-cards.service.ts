import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetCardsService {

  constructor(private client: HttpClient) { }

  getExoplanetCards(): Observable<HttpResponse<User>> {
    return this.client.get<User>(`${environment.BACKEND_URL}/test`, {
      'observe': 'response',
      'headers': {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      }
    });
  }
}
