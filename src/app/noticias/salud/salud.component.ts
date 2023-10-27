import { Component, OnInit } from '@angular/core';
import { SaludsService } from './salud.service';
import { ISalud, Result } from 'src/app/interfaces/salud.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {
  constructor(private saludsService: SaludsService,
    private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  saluds: ISalud = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getSaluds();
  }

  getSaluds() {
    this.saludsService.getSaluds().subscribe({
      next: (data) => {
        console.log(data);
        this.saluds = data;
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