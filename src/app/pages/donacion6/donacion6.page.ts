import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-donacion6',
  templateUrl: './donacion6.page.html',
  styleUrls: ['./donacion6.page.scss'],
  standalone: false
})
export class Donacion6Page implements OnInit {
  cardForm!: FormGroup;
  albergueId: string | null = null;
  albergueNombre: string | null = null;


  constructor(
    public formBuilder: FormBuilder,
    public db: DatabaseService,
    private route: ActivatedRoute
  ) {
    this.cardForm = this.formBuilder.group({
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16)]],
      fechaExpiracion: ['', Validators.required],
      titularTarjeta: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
      monto: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.albergueId = params['albergueId'] || null;
    this.albergueNombre = params['albergueNombre'] || null;
    console.log('Recibido desde ruta:', this.albergueId, this.albergueNombre);
  });
  }

  guardarTarjeta() {
    if (this.cardForm.valid) {
      const datos = {
        ...this.cardForm.value,
        tipo: 'donacion',
        fecha: new Date(),
        albergueId: this.albergueId,
        albergueNombre: this.albergueNombre
      };

      console.log('Guardando datos del formulario:', datos);

      this.db.addFirestoreDocument('tarjetas', datos)
        .then(() => {
          alert('Tarjeta guardada correctamente');
          this.cardForm.reset();
        })
        .catch(err => {
          console.error('Error al guardar tarjeta:', err);
          alert('Error al guardar tarjeta: ' + err.message);
        });
    } else {
      this.cardForm.markAllAsTouched();
      alert('Formulario no válido. Por favor revisa los campos.');
    }
  }
}