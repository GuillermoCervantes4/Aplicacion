import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apadrinar2',
  templateUrl: './apadrinar2.page.html',
  styleUrls: ['./apadrinar2.page.scss'],
  standalone: false
})
export class Apadrinar2Page implements OnInit {
albergueId: string | null = null;
albergueNombre: string | null = null;
perroNombre: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.albergueId = params['albergueId'];
    this.albergueNombre = params['albergueNombre'];
    this.perroNombre = params['perroNombre'];
  });
}
  irASiguiente() {
    this.router.navigate(['/apadrinar3'], {
      queryParams: {
        albergueId: this.albergueId,
        albergueNombre: this.albergueNombre,
        perroNombre: this.perroNombre
      }
    });
  }
}
