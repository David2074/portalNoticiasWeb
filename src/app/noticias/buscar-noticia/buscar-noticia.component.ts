import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/buscar.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-buscar-noticia',
  templateUrl: './buscar-noticia.component.html',
  styleUrls: ['./buscar-noticia.component.css']
})
export class BuscarNoticiaComponent implements OnInit {
  searchTerm: string = '';
  newsData: any[] = [];
  noNewsFound: boolean = false; // Variable para controlar si no se encontraron noticias

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    this.searchService.getSearchTermObservable().subscribe(term => {
      this.searchTerm = term;
      this.searchNews();
    });
  }

  searchNews() {
    const apiKey = 'pub_271522090c7f10dce7ec8c5fee757c972ab68';
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=es&q=${this.searchTerm}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      // Filtrar las noticias por el campo 'description' utilizando el término de búsqueda
      this.newsData = data.results.filter((news: any) => news.description.includes(this.searchTerm));

      if (this.newsData.length === 0) {
        // No se encontraron noticias, redirigir a la portada
        this.router.navigate(['/portada']);
        this.noNewsFound = true; // Activar el indicador de no se encontraron noticias
      } else {
        this.noNewsFound = false; // Desactivar el indicador si se encontraron noticias
      }
    });
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}
