import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  standalone: false,
  selector: 'app-reportar',
  templateUrl: './reportar.page.html',
  styleUrls: ['./reportar.page.scss'],
})
export class ReportarPage implements OnInit {

  reportForm!: FormGroup;

  constructor(
    public db: DatabaseService,
    public formBuilder: FormBuilder,
    public auth: AuthService,
  ) {
    this.db.fetchFirestoreCollection('book').subscribe((res: any) => {
   })
   this.reportForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      razaDescripcion: ['', Validators.required],
      fechaHora: ['', Validators.required],
      contacto: ['', Validators.required],
      foto: ['']
    });
  }

  ngOnInit() {

  }
  report(){
    if (this.reportForm.valid) {
      this.auth.reportLostDog(this.reportForm.value)
        .then(() => console.log('Reporte enviado correctamente'));
    } else {
      this.reportForm.markAllAsTouched();
    }
  }
}