import { Component, OnInit } from '@angular/core';
import { IDeporte, Result } from 'src/app/interfaces/deporte.interface';
import { SoloDeportesService } from './soloDeporte.service';

@Component({
  selector: 'app-solo-deportes',
  templateUrl: './solo-deportes.component.html',
  styleUrls: ['./solo-deportes.component.css'],
})
export class SoloDeportesComponent implements OnInit {
  constructor(private soloDeportesService: SoloDeportesService) {}

  mostrarError = false;
  solodeportes: IDeporte = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloDeportes();
  }

  getSoloDeportes() {
    this.soloDeportesService.getSoloDeportes().subscribe({
      next: (data) => {
        this.solodeportes = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.solodeportes.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.solodeportes.results[index].expanded = !this.solodeportes.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
  
}