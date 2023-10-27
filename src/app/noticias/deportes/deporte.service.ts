import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeporte } from 'src/app/interfaces/deporte.interface';

@Injectable({
  providedIn: 'root'
})
export class DeportesService {
  constructor(private http: HttpClient) {}

  getDeportes(): Observable<IDeporte> {
    return this.http.get<IDeporte>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=sports');
  }
}