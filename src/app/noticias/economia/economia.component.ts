import { Component, OnInit } from '@angular/core';
import { EconomiaService } from './economia.service';
import { IEconomia, Result } from 'src/app/interfaces/economia.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-economia',
  templateUrl: './economia.component.html',
  styleUrls: ['./economia.component.css']
})
export class EconomiaComponent implements OnInit {
  constructor(private economiaService: EconomiaService,
  private router: Router,
  private route: ActivatedRoute) {}
  mostrarError = false;
  economia: IEconomia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getEconomia();
  }

  getEconomia() {
    this.economiaService.getEconomia().subscribe({
      next: (data) => {
        console.log(data);
        this.economia = data;
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

