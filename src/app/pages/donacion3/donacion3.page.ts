import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donacion3',
  templateUrl: './donacion3.page.html',
  styleUrls: ['./donacion3.page.scss'],
  standalone: false
})
export class Donacion3Page {

  opcionSeleccionada: 'unica' | 'mensual' | null = null;

  constructor(private router: Router) {}
 

  seleccionarOpcion(opcion: 'unica' | 'mensual') {
    this.opcionSeleccionada = this.opcionSeleccionada === opcion ? null : opcion;
  }

  irASiguiente() {
    if (this.opcionSeleccionada === 'unica') {
      this.router.navigate(['/donacion4']);
    } else if (this.opcionSeleccionada === 'mensual') {
      this.router.navigate(['/donacion6']);
    }
  }

}
