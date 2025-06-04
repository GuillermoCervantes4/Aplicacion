import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet3',
  templateUrl: './pet3.page.html',
  styleUrls: ['./pet3.page.scss'],
  standalone: false
})
export class Pet3Page implements OnInit {

  opcionSeleccionada: 'unica' | 'mensual' | null = null;

  constructor(private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  seleccionarOpcion(opcion: 'unica' | 'mensual') {
    this.opcionSeleccionada = this.opcionSeleccionada === opcion ? null : opcion;
  }

  irASiguiente() {
    if (this.opcionSeleccionada === 'unica') {
      this.router.navigate(['/pet4']);
    } else if (this.opcionSeleccionada === 'mensual') {
      this.router.navigate(['/pet5']);
    }
  }
}
