import { Component, OnInit } from '@angular/core';
import { IDeporte, Result } from 'src/app/interfaces/deporte.interface';
import { deporteInternacionalService } from './deporteInternacional.service';

@Component({
  selector: 'app-deporte-internacional',
  templateUrl: './deporte-internacional.component.html',
  styleUrls: ['./deporte-internacional.component.css']
})
export class DeporteInternacionalComponent implements OnInit {
  constructor(private DeporteInternacionalService: deporteInternacionalService) {}

  mostrarError = false;
  deporteinternacional: IDeporte = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getdeporteInternacional();
  }

  getdeporteInternacional() {
    this.DeporteInternacionalService.getdeporteInternacional().subscribe({
      next: (data) => {
        this.deporteinternacional = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.deporteinternacional.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.deporteinternacional.results[index].expanded = !this.deporteinternacional.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}