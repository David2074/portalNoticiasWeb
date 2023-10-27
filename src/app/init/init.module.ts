import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ NotFoundComponent],
  imports: [CommonModule, FormsModule, ToastModule],
  exports: [NotFoundComponent]
})
export class InitModule {}
