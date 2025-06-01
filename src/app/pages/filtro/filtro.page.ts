import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroService } from 'src/app/services/filtro.service';

@Component({
  standalone: false,
  selector: 'app-filtro',
  templateUrl: './filtro.page.html',
  styleUrls: ['./filtro.page.scss'],
})
export class FiltroPage implements OnInit {

  tamanos = { grande: false, mediano: false, pequeno: false };
  edades = { cachorro: false, joven: false, adulto: false };
  sexos = { macho: false, hembra: false };
  constructor(
    private filtroService: FiltroService,
    public router: Router
  ) { }


  ngOnInit() {
  }

   aplicarFiltros() {
    const filtros = {
      tamanos: Object.keys(this.tamanos).filter(k => this.tamanos[k as keyof typeof this.tamanos]),
      // edades: Object.keys(this.edades).filter(k => this.edades[k as keyof typeof this.edades]),
      sexos: Object.keys(this.sexos).filter(k => this.sexos[k as keyof typeof this.sexos])
    };

    this.filtroService.setFiltros(filtros);
    this.router.navigate(['/adoptar']);
  }

}
