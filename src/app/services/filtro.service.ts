import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private filtrosSeleccionados: any = {
    tamanos: [],
    // edades: [],
    sexos: []
  };

  constructor() { }
 
  setFiltros(filtros: any) {
    this.filtrosSeleccionados = filtros;
  }

  getFiltros() {
    return this.filtrosSeleccionados;
  }
}
