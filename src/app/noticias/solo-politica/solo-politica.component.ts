import { Component, OnInit } from '@angular/core';
import { IPolitica, Result } from 'src/app/interfaces/politica.interface';
import { SoloPoliticasService } from './soloPolitica.service';


@Component({
  selector: 'app-solo-politica',
  templateUrl: './solo-politica.component.html',
  styleUrls: ['./solo-politica.component.css'],
})
export class SoloPoliticaComponent implements OnInit {
  constructor(private soloPoliticasService: SoloPoliticasService) {}

  mostrarError = false;
  solopoliticas: IPolitica = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloPoliticas();
  }

  getSoloPoliticas() {
    this.soloPoliticasService.getSoloPoliticas().subscribe({
      next: (data) => {
        this.solopoliticas = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.solopoliticas.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
      },
      error: (err) => (this.mostrarError = true),
    });
  }

  toggleExpand(index: number) {
    this.solopoliticas.results[index].expanded = !this.solopoliticas.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
  
}
