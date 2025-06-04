import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false
})
export class PerfilPage implements OnInit {

  perrosAdoptados = [
    { nombre: 'Duke', imagen: 'assets/imgs/duke.jpg' },
  ];

  perrosApadrinados = [
    { nombre: 'Lobo', imagen: 'assets/imgs/lobo.jpg' },
    { nombre: 'Rocky', imagen: 'assets/imgs/rocky.jpg' },
  ];

  constructor() { }

  ngOnInit() {}
}
