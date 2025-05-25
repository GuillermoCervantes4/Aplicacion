import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-perdido',
  templateUrl: './perdido.page.html',
  styleUrls: ['./perdido.page.scss'],
})
export class PerdidoPage implements OnInit {

   id: any;
  data: any;
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('perdidoID', this.route.snapshot.paramMap.get('perdidoId'));
    this.id = this.route.snapshot.paramMap.get('perdidoId');
    this.db.getDocumentById('Perdidos', this.id)
      .subscribe((res: any) => {
        console.log('Perro perdido recuperado', res);
        this.data = res;
      })
  }

}
