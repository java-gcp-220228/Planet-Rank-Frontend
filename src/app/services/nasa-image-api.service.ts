import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/app.model.image'
import { environment } from 'environments/environment';


@Injectable()
export class NasaImageApiService {

  db_api = `${environment.BACKEND_URL}/images`;
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.db_api);
  }

}
