import { Component, OnInit } from '@angular/core';
import { politicaInternacionalService } from './politicaInternacional.service';
import { IPolitica, Result } from 'src/app/interfaces/politica.interface';

@Component({
  selector: 'app-politica-internacional',
  templateUrl: './politica-internacional.component.html',
  styleUrls: ['./politica-internacional.component.css']
})
export class PoliticaInternacionalComponent implements OnInit {
  constructor(private PoliticaInternacionalService: politicaInternacionalService) {}

  mostrarError = false;
  politicainternacional: IPolitica = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getpoliticaInternacional();
  }

  getpoliticaInternacional() {
    this.PoliticaInternacionalService.getpoliticaInternacional().subscribe({
      next: (data) => {
        this.politicainternacional = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.politicainternacional.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.politicainternacional.results[index].expanded = !this.politicainternacional.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}