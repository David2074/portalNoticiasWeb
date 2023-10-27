import { Component, OnInit } from '@angular/core';
import { IDeporte, Result } from 'src/app/interfaces/deporte.interface';
import { DeportesService } from './deporte.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css']
})
export class DeportesComponent implements OnInit {
  constructor(private deportesService: DeportesService,
  private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  deportes: IDeporte = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getDeportes();
  }

  getDeportes() {
    this.deportesService.getDeportes().subscribe({
      next: (data) => {
        console.log(data);
        this.deportes = data;
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
