import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-perrito',
  templateUrl: './perrito.page.html',
  styleUrls: ['./perrito.page.scss'],
})
export class PerritoPage implements OnInit {

  id: any;
  data: any;
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.db.getDocumentById('Perros', this.id)
      .subscribe((res: any) => {
        console.log('Perro recuperado', res);
        this.data = res;
      })
  }

}
