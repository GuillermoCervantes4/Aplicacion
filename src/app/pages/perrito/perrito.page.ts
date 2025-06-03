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
  albergueId: string | null = null;
  albergueNombre: string | null = null;
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Obtener el ID del perro desde la URL
    console.log('perritoID', this.route.snapshot.paramMap.get('perritoId'));
    this.id = this.route.snapshot.paramMap.get('perritoId');

    // Obtener datos del perro desde Firebase
    this.db.getDocumentById('Perros', this.id)
      .subscribe((res: any) => {
        console.log('Perro recuperado', res);
        this.data = res;
      });

    // Obtener albergueId y albergueNombre desde los queryParams
    this.route.queryParams.subscribe(params => {
      this.albergueId = params['albergueId'];
      this.albergueNombre = params['albergueNombre'];
    });
  }
}
