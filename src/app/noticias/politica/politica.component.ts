import { Component, OnInit } from '@angular/core';
import { PoliticasService } from './politica.service';
import { ICabecera, Result } from 'src/app/interfaces/cabecera.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {
  constructor(private politicasService: PoliticasService,
  private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  politicas: ICabecera = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getPoliticas();
  }

  getPoliticas() {
    this.politicasService.getPoliticas().subscribe({
      next: (data) => {
        console.log(data);
        this.politicas = data;
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
