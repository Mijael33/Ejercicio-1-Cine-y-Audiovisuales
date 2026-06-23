// src/app/contact/contact.page.ts
// ==============================================================
// LÓGICA DE CONTACTO - ENVÍO DE CORREO REAL
// Formato profesional limpio con emoji cinematográfico
// ==============================================================
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class ContactPage {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get nameInvalid(): boolean {
    const control = this.contactForm.get('name');
    return control ? control.invalid && control.touched : false;
  }

  get emailInvalid(): boolean {
    const control = this.contactForm.get('email');
    return control ? control.invalid && control.touched : false;
  }

  get subjectInvalid(): boolean {
    const control = this.contactForm.get('subject');
    return control ? control.invalid && control.touched : false;
  }

  get messageInvalid(): boolean {
    const control = this.contactForm.get('message');
    return control ? control.invalid && control.touched : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const name = this.contactForm.get('name')?.value;
      const email = this.contactForm.get('email')?.value;
      const subject = this.contactForm.get('subject')?.value;
      const message = this.contactForm.get('message')?.value;

      const miCorreo = 'mij.eevadacch@gmail.com';

      const cuerpoCorreo = `🎬 MENSAJE DESDE EL PORTAFOLIO "OBRAS AUDIOVISUALES"

DATOS DEL REMITENTE

   Nombre: ${name}
   Correo: ${email}

ASUNTO

   ${subject}

MENSAJE

   ${message}


---
Enviado desde la aplicacion Obras Audiovisuales
Mijael Engelmann - Portafolio Cinematográfico`;

      const asuntoCodificado = encodeURIComponent('🎬 Mensaje de ' + name + ': ' + subject);
      const cuerpoCodificado = encodeURIComponent(cuerpoCorreo);

      window.location.href = `mailto:${miCorreo}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;

      this.showMessage('Redirigiendo a tu aplicacion de correo...');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
      this.showMessage('Por favor completa todos los campos correctamente.');
    }
  }

  private showMessage(message: string): void {
    const old = document.getElementById('mensaje-premium');
    if (old) old.remove();

    const div = document.createElement('div');
    div.id = 'mensaje-premium';
    div.textContent = message;
    div.style.cssText = `
      position: fixed; top: 70px; left: 16px; right: 16px;
      background: #000000; color: #ffffff; padding: 16px 20px;
      text-align: center; border-radius: 8px; z-index: 99999;
      font-size: 15px; font-family: 'Montserrat', sans-serif;
      font-weight: 500; letter-spacing: 0.5px;
      border: 1px solid #c9a84c;
      box-shadow: 0 8px 30px rgba(0,0,0,0.9);
      animation: fadeInDown 0.3s ease-out;
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOutUp {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(div);

    setTimeout(() => {
      div.style.animation = 'fadeOutUp 0.3s ease-in';
      setTimeout(() => div.remove(), 300);
    }, 3000);
  }
}