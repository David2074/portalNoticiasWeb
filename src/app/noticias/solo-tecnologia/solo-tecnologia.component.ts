import { Component, OnInit } from '@angular/core';
import { ITecnologia, Result } from 'src/app/interfaces/tecnologia.interface';
import { SoloTecnologiaService } from './soloTecnologia.service';

@Component({
  selector: 'app-solo-tecnologia',
  templateUrl: './solo-tecnologia.component.html',
  styleUrls: ['./solo-tecnologia.component.css'],
})
export class SoloTecnologiaComponent implements OnInit {
  constructor(private soloTecnologiasService: SoloTecnologiaService) {}

  mostrarError = false;
  solotecnologias: ITecnologia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloTecnologias();
  }

  getSoloTecnologias() {
    this.soloTecnologiasService.getSoloTecnologias().subscribe({
      next: (data) => {
        this.solotecnologias = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.solotecnologias.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.solotecnologias.results[index].expanded = !this.solotecnologias.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}
