import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro2',
  templateUrl: './filtro2.page.html',
  styleUrls: ['./filtro2.page.scss'],
  standalone: false
})
export class Filtro2Page implements OnInit {

  filtros = {
    casas: { grande: false, mediano: false, pequeno: false },
    camas: { grande: false, mediano: false, pequeno: false },
    otros: { comida: false, juguetes: false }
  };

  constructor() {}

  ngOnInit() {
    // Al cargar la página, intenta cargar filtros guardados en localStorage
    const guardados = localStorage.getItem('filtrosPetshop');
    if (guardados) {
      this.filtros = JSON.parse(guardados);
    }
  }

  aplicarFiltros() {
    // Guarda los filtros actuales en localStorage para que puedan usarse en otra página
    localStorage.setItem('filtrosPetshop', JSON.stringify(this.filtros));
    // Vuelve a la página anterior para que los filtros se apliquen ahí
    history.back();
    // Alternativamente, si usas Angular Router: this.router.navigate(['/ruta-anterior']);
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   standalone: false,
//   selector: 'app-filtro2',
//   templateUrl: './filtro2.page.html',
//   styleUrls: ['./filtro2.page.scss'],
// })
// export class Filtro2Page implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
