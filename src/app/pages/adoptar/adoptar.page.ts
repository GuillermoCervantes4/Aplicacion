import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-adoptar',
  templateUrl: './adoptar.page.html',
  styleUrls: ['./adoptar.page.scss'],
})
export class AdoptarPage implements OnInit {

  perros: any;
  constructor(
    public db: DatabaseService
  ) { 
    this.fetchPerros();
  }

  ngOnInit() {
  }

  fetchPerros() {
    this.db.fetchFirestoreCollection('Perros')
    .subscribe((res: any) => {
      console.log('Perros Collection: ', res);
      this.perros = res;
    })
  }
}
