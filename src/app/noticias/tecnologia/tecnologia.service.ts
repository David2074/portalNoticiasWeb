import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITecnologia } from 'src/app/interfaces/tecnologia.interface';


@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {
  constructor(private http: HttpClient) {}

  getTecnologias(): Observable<ITecnologia> {
    return this.http.get<ITecnologia>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=technology');
  }
}