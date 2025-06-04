import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet1',
  templateUrl: './pet1.page.html',
  styleUrls: ['./pet1.page.scss'],
  standalone: false
})
export class Pet1Page implements OnInit {

  cantidad: number = 1;

  constructor() {}

  ngOnInit(): void {}

  aumentarCantidad(): void {
    this.cantidad++;
  }

  disminuirCantidad(): void {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}
