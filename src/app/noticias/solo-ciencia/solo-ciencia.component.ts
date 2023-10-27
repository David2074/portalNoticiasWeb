import { Component, OnInit } from '@angular/core';
import { SoloCienciaService } from './soloCiencia.service';
import { ICiencia, Result } from 'src/app/interfaces/ciencia.interface';
import { HaynoticiasService } from 'src/app/services/haynoticias.service';

@Component({
  selector: 'app-solo-ciencia',
  templateUrl: './solo-ciencia.component.html',
  styleUrls: ['./solo-ciencia.component.css'],
})
export class SoloCienciaComponent implements OnInit {
  constructor(
    private soloCienciasService: SoloCienciaService,
    private haynoticiasService: HaynoticiasService
  ) {}

  haynoticiasciencia: boolean = false;

  mostrarError = false;
  solociencias: ICiencia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: '',
  };

  ngOnInit() {
    this.getSoloCiencias();
  }

  getSoloCiencias() {
    this.soloCienciasService.getSoloCiencias().subscribe({
      next: (data) => {
        this.solociencias = data;
        this.mostrarError = false;
        // Inicializa el campo expanded para cada noticia
        this.solociencias.results.forEach((noticia: Result) => {
          noticia.expanded = false;
        });
  
        // Actualiza el valor de haynoticiasciencia
        this.haynoticiasciencia = this.solociencias.results.length > 0;
  
        // Llama al método actualizarHayNoticiasCiencia() con el valor actualizado
        this.haynoticiasService.actualizarHayNoticiasCiencia(this.haynoticiasciencia);
      },
      error: (err) => (this.mostrarError = true),
    });
  }
  
  

  toggleExpand(index: number) {
    this.solociencias.results[index].expanded = !this.solociencias.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }


}
