import { Component, OnInit } from '@angular/core';
import { CienciasService } from './ciencia.service';
import { ICiencia, Result } from 'src/app/interfaces/ciencia.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.component.html',
  styleUrls: ['./ciencia.component.css']
})
export class CienciaComponent implements OnInit {
  constructor(private cienciasService: CienciasService,
    private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  ciencias: ICiencia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getCiencias();
  }

  getCiencias() {
    this.cienciasService.getCiencias().subscribe({
      next: (data) => {
        console.log(data);
        this.ciencias = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true)
    });
  }

  navigateToNoticia(noticia: Result) {
    // Obtener el identificador de la noticia (usando el campo 'link' como identificador único)
    const noticiaId = noticia.link;
  
    // Navegar al componente "ir-noticia" junto con el identificador de la noticia
    this.router.navigate(['/ir-noticia', { id: noticiaId }]);
  }
}