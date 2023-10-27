import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEconomia } from 'src/app/interfaces/economia.interface';

@Injectable({
  providedIn: 'root'
})
export class SoloEconomiasService {
  constructor(private http: HttpClient) {}

  getSoloEconomias(): Observable<IEconomia> {
    return this.http.get<IEconomia>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=business ');
  }
}