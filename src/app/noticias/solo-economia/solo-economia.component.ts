import { Component, OnInit } from '@angular/core';
import { SoloEconomiasService } from '../solo-economia/soloEconomia.service';
import { IEconomia, Result } from 'src/app/interfaces/economia.interface';

@Component({
  selector: 'app-solo-economia',
  templateUrl: './solo-economia.component.html',
  styleUrls: ['./solo-economia.component.css'],
})
export class SoloEconomiaComponent implements OnInit {
  constructor(private soloEconomiasService: SoloEconomiasService) {}

  mostrarError = false;
  soloeconomias: IEconomia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloEconomias();
  }

  getSoloEconomias() {
    this.soloEconomiasService.getSoloEconomias().subscribe({
      next: (data) => {
        this.soloeconomias = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.soloeconomias.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.soloeconomias.results[index].expanded = !this.soloeconomias.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
  
}
