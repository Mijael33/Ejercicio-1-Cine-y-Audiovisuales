// src/app/profile/profile.page.ts
// ==============================================================
// LÓGICA DE LA PÁGINA DE PERFIL PROFESIONAL (PREMIUM)
// Carga y gestiona los datos del creador audiovisual.
// ==============================================================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CinemaService } from '../services/cinema.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ProfilePage implements OnInit {
  // Datos del perfil profesional
  profile: Profile | undefined;

  // Inyectamos el servicio de datos
  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    // Cargamos los datos del perfil al iniciar la página
    this.loadProfile();
  }

  // Método para obtener la información del perfil desde el servicio
  loadProfile(): void {
    this.profile = this.cinemaService.getProfileData();
  }
}