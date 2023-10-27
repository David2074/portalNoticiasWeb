import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPolitica } from 'src/app/interfaces/politica.interface';

@Injectable({
  providedIn: 'root'
})
export class politicaInternacionalService {
  constructor(private http: HttpClient) {}

  getpoliticaInternacional(): Observable<IPolitica> {
    return this.http.get<IPolitica>('https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&language=es&category=politics ');
  }
}