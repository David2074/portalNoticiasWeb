import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeporte } from 'src/app/interfaces/deporte.interface';

@Injectable({
  providedIn: 'root'
})
export class deporteInternacionalService {
  constructor(private http: HttpClient) {}

  getdeporteInternacional(): Observable<IDeporte> {
    return this.http.get<IDeporte>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&language=es&category=sports ');
  }
}