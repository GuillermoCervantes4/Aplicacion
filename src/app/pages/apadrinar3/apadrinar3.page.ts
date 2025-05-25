import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-apadrinar3',
  templateUrl: './apadrinar3.page.html',
  styleUrls: ['./apadrinar3.page.scss'],
  standalone: false
})
export class Apadrinar3Page implements OnInit {
  cardForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public db: DatabaseService
  ) {
    this.cardForm = this.formBuilder.group({
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16)]],
      fechaExpiracion: ['', Validators.required],
      titularTarjeta: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {}

  guardarTarjeta() {
    if (this.cardForm.valid) {
      const datos = {
        ...this.cardForm.value,
        tipo: 'apadrinamiento',
        fecha: new Date()
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