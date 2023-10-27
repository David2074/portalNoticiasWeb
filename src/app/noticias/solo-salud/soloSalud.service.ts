import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISalud } from 'src/app/interfaces/salud.interface';

@Injectable({
  providedIn: 'root'
})
export class SoloSaludService {
  constructor(private http: HttpClient) {}

  getSoloSalud(): Observable<ISalud> {
    return this.http.get<ISalud>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=health');
  }
}