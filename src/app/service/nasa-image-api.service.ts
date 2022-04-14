import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseResponse } from '../models/app.model.databaseResponse'
import { Observable } from 'rxjs';
import { Image } from '../models/app.model.image'



@Injectable()
export class NasaImageApiService {

  db_api = "http://localhost:8080/nasa_images/images";

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.db_api);
  }

}
