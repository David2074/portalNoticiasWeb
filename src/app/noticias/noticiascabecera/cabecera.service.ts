import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICabecera } from 'src/app/interfaces/cabecera.interface';

@Injectable({
  providedIn: 'root'
})
export class CabecerasService {
  constructor(private http: HttpClient) {}

  getCabeceras(): Observable<ICabecera> {
    return this.http.get<ICabecera>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=top');
  }
}