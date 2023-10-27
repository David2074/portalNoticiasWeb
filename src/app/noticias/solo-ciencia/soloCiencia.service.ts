import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICiencia } from 'src/app/interfaces/ciencia.interface';

@Injectable({
  providedIn: 'root'
})
export class SoloCienciaService {
  constructor(private http: HttpClient) {}

  getSoloCiencias(): Observable<ICiencia> {
    return this.http.get<ICiencia>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es&language=es&category=science');
  }
}