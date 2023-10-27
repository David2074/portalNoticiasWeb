import { Component, OnInit } from '@angular/core';
import { EconomiaInternacionalService } from './economiaInternacional.service';
import { IEconomia } from 'src/app/interfaces/economia.interface';

@Component({
  selector: 'app-economia-internacional',
  templateUrl: './economia-internacional.component.html',
  styleUrls: ['./economia-internacional.component.css']
})
export class EconomiaInternacionalComponent implements OnInit {
  constructor(private economiaInternacionalService: EconomiaInternacionalService) {}
  mostrarError = false;
  economiainternacional: IEconomia = {
    results: [],
    status: '',
    totalResults: 0,
    nextPage: ''

  };

  ngOnInit() {
    this.getEconomiaInternacional();
  }

  getEconomiaInternacional() {
    this.economiaInternacionalService.getEconomiaInternacional().subscribe({
      next: (data) => {
        console.log(data);
        this.economiainternacional = data;
        this.mostrarError = false;
      },
      error: (err) => (this.mostrarError = true)
    });
  }

  toggleExpand(index: number) {
    this.economiainternacional.results[index].expanded = !this.economiainternacional.results[index].expanded;
  }

  isVideo(url: string): boolean {
    return url.endsWith('.mp4');
  }
}