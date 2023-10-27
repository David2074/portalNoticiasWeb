import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HaynoticiasService } from 'src/app/services/haynoticias.service';
import { SearchService } from '../../services/buscar.service'; // Importa el servicio SearchService
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  searchTerm: string = '';
  hayNoticiasCiencia: boolean = true;
  private hayNoticiasSubscription: Subscription;

  constructor(
    private haynoticiasService: HaynoticiasService,
    private searchService: SearchService,
    private router: Router // Inyecta el servicio Router
  ) {
    this.hayNoticiasSubscription = this.haynoticiasService.getHayNoticiasCienciaObservable()
      .subscribe((valor: boolean) => {
        this.hayNoticiasCiencia = valor;
        console.log('El valor actualizado de hayNoticiasCiencia es:', this.hayNoticiasCiencia);
      });
  }

  ngOnDestroy() {
    this.hayNoticiasSubscription.unsubscribe();
  }

  buscarNoticias() {
    // Establecer el término de búsqueda en el servicio SearchService
    this.searchService.setSearchTerm(this.searchTerm);
    // Navegar al componente BuscarNoticiaComponent utilizando el servicio Router
    this.router.navigateByUrl('/buscar-noticia');
  }
}
