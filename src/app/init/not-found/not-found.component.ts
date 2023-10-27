import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  //templateUrl: './not-found.component.html',
  template: `<div class="row">
    <div class="col d-flex justify-content-center align-items-center" style="height: 100vh;">
      <img
        src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
        class="img-fluid"
        style="width: 500px; height: 300px;"
      />
    </div>
  </div>`
})
// Angular también permite hacer un "todo en uno" en los componentes, como lo hace React
// En vez de templateUrl, utilizaríamos template para poner entre tildes graves (back ticks) el
// código html que habitualmente iría en un archivo html aparte
export class NotFoundComponent {}
