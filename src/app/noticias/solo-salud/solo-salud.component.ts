import { Component, OnInit } from '@angular/core';
import { SoloSaludService } from './soloSalud.service';
import { ISalud, Result } from 'src/app/interfaces/salud.interface';

@Component({
  selector: 'app-solo-salud',
  templateUrl: './solo-salud.component.html',
  styleUrls: ['./solo-salud.component.css'],
})
export class SoloSaludComponent implements OnInit {
  constructor(private soloSaludService: SoloSaludService) {}

  mostrarError = false;
  solosalud: ISalud = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloSalud();
  }

  getSoloSalud() {
    this.soloSaludService.getSoloSalud().subscribe({
      next: (data) => {
        this.solosalud = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.solosalud.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.solosalud.results[index].expanded = !this.solosalud.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}
