import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaComponent } from './politica/politica.component';
import { EconomiaComponent } from './economia/economia.component';
import { DeportesComponent } from './deportes/deportes.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { SaludComponent } from './salud/salud.component';
import { CienciaComponent } from './ciencia/ciencia.component';
import { PortadaComponent } from './portada/portada.component';
import { NoticiascabeceraComponent } from './noticiascabecera/noticiascabecera.component';
import { SoloEconomiaComponent } from './solo-economia/solo-economia.component';
import { SoloPoliticaComponent } from './solo-politica/solo-politica.component';
import { SoloDeportesComponent } from './solo-deportes/solo-deportes.component';
import { SoloTecnologiaComponent } from './solo-tecnologia/solo-tecnologia.component';
import { SoloSaludComponent } from './solo-salud/solo-salud.component';
import { SoloCienciaComponent } from './solo-ciencia/solo-ciencia.component';
import { EconomiaInternacionalComponent } from './economia-internacional/economia-internacional.component';
import { DeporteInternacionalComponent } from './deporte-internacional/deporte-internacional.component';
import { PoliticaInternacionalComponent } from './politica-internacional/politica-internacional.component';
import { TodasLasNoticiasComponent } from './todas-las-noticias/todas-las-noticias.component';
import { IrNoticiaComponent } from './ir-noticia/ir-noticia.component';
import { BuscarNoticiaComponent } from './buscar-noticia/buscar-noticia.component';



@NgModule({
  declarations: [
    PoliticaComponent,
    EconomiaComponent,
    DeportesComponent,
    TecnologiaComponent,
    SaludComponent,
    CienciaComponent,
    PortadaComponent,
    NoticiascabeceraComponent,
    SoloEconomiaComponent,
    SoloPoliticaComponent,
    SoloDeportesComponent,
    SoloTecnologiaComponent,
    SoloSaludComponent,
    SoloCienciaComponent,
    EconomiaInternacionalComponent,
    DeporteInternacionalComponent,
    PoliticaInternacionalComponent,
    TodasLasNoticiasComponent,
    IrNoticiaComponent,
    BuscarNoticiaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PortadaComponent, NoticiascabeceraComponent, SoloCienciaComponent]
})
export class NoticiasModule { }
