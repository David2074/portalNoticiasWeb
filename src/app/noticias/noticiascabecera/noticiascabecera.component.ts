import { Component, OnInit } from '@angular/core';
import { ICabecera, Result } from 'src/app/interfaces/cabecera.interface';
import { CabecerasService } from './cabecera.service';
import { IEconomia } from 'src/app/interfaces/economia.interface';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-noticiascabecera',
  templateUrl: './noticiascabecera.component.html',
  styleUrls: ['./noticiascabecera.component.css']
})
export class NoticiascabeceraComponent implements OnInit {
  constructor(private cabecerasService: CabecerasService,
  private router: Router,
  private route: ActivatedRoute
  ) {}
  mostrarError = false;
  cabeceras: ICabecera = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getCabeceras();
  }

  getCabeceras() {
    this.cabecerasService.getCabeceras().subscribe({
      next: (data) => {
        console.log(data);
        this.cabeceras = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true)
    });
  }

  toggleFullContent(noticia: IEconomia) {
    noticia.showFullContent = !noticia.showFullContent;
  }

isVideo(url: string): boolean {
  return url.endsWith('.mp4');
}

sanitizeContent(content: string): string {
  // Reemplaza el fragmento no deseado con una cadena vacía
  return content.replace('.wf_cms.rss.read_more]]>', '');
}





navigateToNoticia(noticia: Result) {
  // Obtener el identificador de la noticia (usando el campo 'link' como identificador único)
  const noticiaId = noticia.link;

  // Navegar al componente "ir-noticia" junto con el identificador de la noticia
  this.router.navigate(['/ir-noticia', { id: noticiaId }]);
}




}

