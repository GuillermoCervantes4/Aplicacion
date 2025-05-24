import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-perros',
  templateUrl: './card-perros.component.html',
  styleUrls: ['./card-perros.component.scss'],
  standalone: false
})
export class CardPerrosComponent  implements OnInit {

  @Input() perro: any
  @Input() perdido: any
  constructor() { }

  ngOnInit() {}

}
