import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-apadrinar3',
  templateUrl: './apadrinar3.page.html',
  styleUrls: ['./apadrinar3.page.scss'],
  standalone: false
})
export class Apadrinar3Page implements OnInit {
  albergueId: string | null = null;
  albergueNombre: string | null = null;
  perroNombre: string | null = null;
  cardForm!: FormGroup;

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
    });
  }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
    this.albergueId = params['albergueId'];
    this.albergueNombre = params['albergueNombre'];
    this.perroNombre = params['perroNombre'];
    console.log('Recibido en Apadrinar3:', this.albergueId, this.albergueNombre, this.perroNombre);
  });
  }

  guardarTarjeta() {
    if (this.cardForm.valid) {
      const datos = {
        ...this.cardForm.value,
        tipo: 'apadrinamiento',
        fecha: new Date(),
        albergueId: this.albergueId,
        albergueNombre: this.albergueNombre,
        perroNombre: this.perroNombre
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