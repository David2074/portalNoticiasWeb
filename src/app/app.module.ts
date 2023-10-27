import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InitModule } from './init/init.module';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselInformativoComponent } from './components/carousel-informativo/carousel-informativo.component';
import { NoticiasModule } from './noticias/noticias.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent,CarouselInformativoComponent, FooterComponent,NavbarComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), BrowserAnimationsModule, AppRoutingModule, HttpClientModule, InitModule, NoticiasModule,FormsModule, RouterModule, AppRoutingModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
