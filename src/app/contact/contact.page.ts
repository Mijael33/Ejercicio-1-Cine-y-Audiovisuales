// src/app/contact/contact.page.ts
// ==============================================================
// LÓGICA DE CONTACTO - CON ALERTAS NATIVAS
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

  get nameControl() { return this.contactForm.get('name'); }
  get emailControl() { return this.contactForm.get('email'); }
  get subjectControl() { return this.contactForm.get('subject'); }
  get messageControl() { return this.contactForm.get('message'); }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.showMessage('✅ Mensaje enviado con éxito. ¡Gracias por contactarme!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
      this.showMessage('⚠️ Por favor completa todos los campos correctamente.');
    }
  }

  private showMessage(message: string): void {
    const old = document.getElementById('mensaje-premium');
    if (old) old.remove();

    const div = document.createElement('div');
    div.id = 'mensaje-premium';
    div.textContent = message;
    div.style.cssText = `
      position: fixed;
      top: 70px;
      left: 16px;
      right: 16px;
      background: #000000;
      color: #ffffff;
      padding: 16px 20px;
      text-align: center;
      border-radius: 8px;
      z-index: 99999;
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      letter-spacing: 0.5px;
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
    }, 2500);
  }
}