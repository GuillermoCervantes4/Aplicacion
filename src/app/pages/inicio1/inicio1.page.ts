import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio1',
  templateUrl: './inicio1.page.html',
  styleUrls: ['./inicio1.page.scss'],
  standalone: false
})
export class Inicio1Page implements OnInit {

  mostrarSplash: boolean = true; // <- Esta propiedad es necesaria

  constructor() {}

  ngOnInit() {
    // Ocultar el splash después de 3 segundos
    setTimeout(() => {
      this.mostrarSplash = false;
    }, 3000);
  }
}
