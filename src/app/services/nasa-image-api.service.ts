import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/app.model.image'



@Injectable()
export class NasaImageApiService {

  db_api = "http://localhost:8080/images";

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.db_api);
  }

}
