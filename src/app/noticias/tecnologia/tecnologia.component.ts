import { Component, OnInit } from '@angular/core';
import { TecnologiasService } from './tecnologia.service';
import { ITecnologia, Result } from 'src/app/interfaces/tecnologia.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  constructor(private tecnologiasService: TecnologiasService,
    private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  tecnologias: ITecnologia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getTecnologias();
  }

  getTecnologias() {
    this.tecnologiasService.getTecnologias().subscribe({
      next: (data) => {
        console.log(data);
        this.tecnologias = data;
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