import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICabecera, Result } from 'src/app/interfaces/cabecera.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private baseUrl = 'https://newsdata.io/api/1/news?apikey=pub_271522090c7f10dce7ec8c5fee757c972ab68&country=es'; // Ajusta la URL base de tu backend

  constructor(private http: HttpClient) { }

  getNoticiaByLink(noticiaLink: string): Observable<Result | undefined> {
    return this.http.get<ICabecera>(this.baseUrl).pipe(
      map(cabeceras => cabeceras.results.find(noticia => noticia.link === noticiaLink))
    );
  }
  
  
}
