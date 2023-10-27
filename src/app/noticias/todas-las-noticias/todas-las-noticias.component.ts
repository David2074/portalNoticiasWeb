import { Component, OnInit } from '@angular/core';
import { todasLasNoticiasService } from './todasLasNoticias.service';
import { ICabecera, Result } from 'src/app/interfaces/cabecera.interface';

@Component({
  selector: 'app-todas-las-noticias',
  templateUrl: './todas-las-noticias.component.html',
  styleUrls: ['./todas-las-noticias.component.css']
})
export class TodasLasNoticiasComponent implements OnInit {
  constructor(private TodasLasNoticiasService: todasLasNoticiasService) {}

  mostrarError = false;
  todaslasnoticias: ICabecera = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.gettodasLasNoticias();
  }

  gettodasLasNoticias() {
    this.TodasLasNoticiasService.gettodasLasNoticias().subscribe({
      next: (data) => {
        this.todaslasnoticias = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.todaslasnoticias.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.todaslasnoticias.results[index].expanded = !this.todaslasnoticias.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}