import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donacion1',
  templateUrl: './donacion1.page.html',
  styleUrls: ['./donacion1.page.scss'],
  standalone: false
})
export class Donacion1Page {
  opcionSeleccionada: 'unica' | 'mensual' | null = null;

  constructor(private router: Router) {}

  seleccionarOpcion(opcion: 'unica' | 'mensual') {
    this.opcionSeleccionada = this.opcionSeleccionada === opcion ? null : opcion;
  }

  irASiguiente() {
    if (this.opcionSeleccionada === 'unica') {
      this.router.navigate(['/donacion2']);
    } else if (this.opcionSeleccionada === 'mensual') {
      this.router.navigate(['/donacion3']);
    }
  }
}
