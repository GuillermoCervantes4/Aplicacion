import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  form: FormGroup;

  constructor(
    public db: DatabaseService,
    public auth: AuthService,
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.value;

      this.auth.loginUser(email, password)
        .then(userCredential => {
          console.log('✅ Login exitoso:', userCredential);
          // No necesitas hacer más aquí si el servicio ya redirige
        })
        .catch(error => {
          console.error('❌ Error desde login.page.ts:', error);
          // El mensaje de error ya lo muestra el auth.service con un toast
        });

    } else {
      this.form.markAllAsTouched();
    }
  }
}