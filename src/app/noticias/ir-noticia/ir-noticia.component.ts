import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from './irnoticia.Service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ir-noticia',
  templateUrl: './ir-noticia.component.html',
  styleUrls: ['./ir-noticia.component.css']
})
export class IrNoticiaComponent implements OnInit {
  noticiaDetails: any; // Crea una variable para almacenar los detalles de la noticia

  constructor(
    private route: ActivatedRoute,
    private noticiasService: NoticiasService,
    private router: Router // Agrega esta línea
  ) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const noticiaLink = params.get('id') ?? '';
      console.log('Link de la noticia:', noticiaLink);
  
      this.noticiasService.getNoticiaByLink(noticiaLink).subscribe({
        next: noticia => {
          if (noticia) {
            this.noticiaDetails = noticia;
            console.log('Detalles de la noticia:', this.noticiaDetails);
          } else {
            console.error('No se encontró la noticia con el link proporcionado.');
            // Abre la URL especificada en noticiaLink en una nueva pestaña
            window.open(noticiaLink, '_blank');
      
            // Redirige la pestaña actual de nuevo a index.html
            window.location.href = '/index.html'; // Ajusta la ruta según tu estructura
          }
        },
        error: error => {
          console.error('Error al obtener los detalles de la noticia:', error);
        }
      });
      
      
      
      
    });
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}


