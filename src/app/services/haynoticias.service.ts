import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HaynoticiasService {

  private haynoticiascienciaSubject: Subject<boolean> = new Subject<boolean>();
  haynoticiasciencia: boolean = true;

  constructor() { }

  actualizarHayNoticiasCiencia(valor: boolean) {
    this.haynoticiasciencia = valor;
    this.haynoticiascienciaSubject.next(valor);
  }

  getHayNoticiasCienciaObservable() {
    return this.haynoticiascienciaSubject.asObservable();
  }
}

