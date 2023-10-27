import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './init/not-found/not-found.component';
import { PortadaComponent } from './noticias/portada/portada.component';
import { SoloEconomiaComponent } from './noticias/solo-economia/solo-economia.component';
import { SoloPoliticaComponent } from './noticias/solo-politica/solo-politica.component';
import { SoloDeportesComponent } from './noticias/solo-deportes/solo-deportes.component';
import { SoloTecnologiaComponent } from './noticias/solo-tecnologia/solo-tecnologia.component';
import { SoloSaludComponent } from './noticias/solo-salud/solo-salud.component';
import { SoloCienciaComponent } from './noticias/solo-ciencia/solo-ciencia.component';
import { EconomiaInternacionalComponent } from './noticias/economia-internacional/economia-internacional.component';
import { DeporteInternacionalComponent } from './noticias/deporte-internacional/deporte-internacional.component';
import { PoliticaInternacionalComponent } from './noticias/politica-internacional/politica-internacional.component';
import { TodasLasNoticiasComponent } from './noticias/todas-las-noticias/todas-las-noticias.component';
import { IrNoticiaComponent } from './noticias/ir-noticia/ir-noticia.component';
import { BuscarNoticiaComponent } from './noticias/buscar-noticia/buscar-noticia.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/portada', pathMatch: 'full' },
  { path: 'portada', component: PortadaComponent },
  { path: 'economia', component: SoloEconomiaComponent},
  { path: 'politica', component: SoloPoliticaComponent},
  { path: 'deportes', component: SoloDeportesComponent},
  { path: 'tecnologia', component: SoloTecnologiaComponent},
  { path: 'salud', component: SoloSaludComponent},
  { path: 'ciencia', component: SoloCienciaComponent},
  { path: 'economiainternacional', component: EconomiaInternacionalComponent},
  { path: 'deporteinternacional', component: DeporteInternacionalComponent},
  { path: 'politicainternacional', component: PoliticaInternacionalComponent},
  { path: 'todaslasnoticias', component: TodasLasNoticiasComponent},
  { path: 'ir-noticia', component: IrNoticiaComponent },
  { path: 'buscar-noticia', component: BuscarNoticiaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
