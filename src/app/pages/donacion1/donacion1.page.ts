import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donacion1',
  templateUrl: './donacion1.page.html',
  styleUrls: ['./donacion1.page.scss'],
  standalone: false
})

export class Donacion1Page {
  opcionSeleccionada: 'unica' | 'mensual' | null = null;
  albergueId: string | null = null;
  albergueNombre: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  seleccionarOpcion(opcion: 'unica' | 'mensual') {
    this.opcionSeleccionada = this.opcionSeleccionada === opcion ? null : opcion;
  }
  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.albergueId = params['albergueId'];
    this.albergueNombre = params['albergueNombre'];
    console.log('Recibido desde ruta:', this.albergueId, this.albergueNombre);
  });
}

irASiguiente() {
  if (this.opcionSeleccionada === 'unica') {
    this.router.navigate(['/donacion2'], {
      queryParams: {
        albergueId: this.albergueId,
        albergueNombre: this.albergueNombre
      }
    });
  } else if (this.opcionSeleccionada === 'mensual') {
    this.router.navigate(['/donacion3'], {
      queryParams: {
        albergueId: this.albergueId,
        albergueNombre: this.albergueNombre
      }
    });
  }
}
}