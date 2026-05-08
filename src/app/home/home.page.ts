// src/app/home/home.page.ts
// ==============================================================
// LÓGICA DE INICIO - CON ALERTAS NATIVAS QUE SÍ FUNCIONAN
// ==============================================================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CinemaService } from '../services/cinema.service';
import { Movie } from '../models/movie.model';
import { NewsItem } from '../models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class HomePage implements OnInit {
  featuredMovie: Movie | undefined;
  featuredMovies: Movie[] = [];
  cinemaNews: NewsItem[] = [];

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.loadCinemaData();
  }

  loadCinemaData(): void {
    const movies = this.cinemaService.getFeaturedMovies();
    this.featuredMovie = movies.find((m) => m.isFeatured) ?? movies[0];
    this.featuredMovies = movies;
    this.cinemaNews = this.cinemaService.getCinemaNews();
  }

  // =========================================
  // MÉTODO QUE SÍ FUNCIONA EN EL TELÉFONO
  // =========================================
  private showMessage(message: string): void {
    // Eliminar mensaje anterior si existe
    const old = document.getElementById('mensaje-premium');
    if (old) old.remove();

    // Crear el mensaje
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

    // Agregar la animación
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

    // Eliminar después de 2.5 segundos
    setTimeout(() => {
      div.style.animation = 'fadeOutUp 0.3s ease-in';
      setTimeout(() => div.remove(), 300);
    }, 2500);
  }

  // =========================================
  // BOTONES
  // =========================================
  async testAlert(): Promise<void> {
    const alert = document.createElement('div');
    alert.style.cssText = 'position:fixed;top:80px;left:20px;right:20px;background:#000000;color:#ffffff;padding:20px;text-align:center;border-radius:10px;z-index:99999;font-size:18px;border:2px solid #c9a84c;';
    alert.textContent = '✅ PRUEBA DIRECTA - SI VES ESTO, EL PROBLEMA ES EL TOAST DE IONIC';
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
  }

  exploreFeaturedMovie(): void {
    if (this.featuredMovie) {
      this.showMessage('🎬 Explorando: ' + this.featuredMovie.title);
    }
  }

  viewAllMovies(): void {
    this.showMessage('🎥 Colección completa de obras audiovisuales.');
  }

  viewAllNews(): void {
    this.showMessage('📰 Todas las noticias de la industria.');
  }

  openMovieDetail(movie: Movie): void {
    this.showMessage('🎬 ' + movie.title + ' • ' + movie.genre + ' • ⭐ ' + movie.rating);
  }

  openNewsDetail(news: NewsItem): void {
    this.showMessage('📰 ' + news.title + ' • ' + news.category);
  }

  onSearchClick(): void {
    this.showMessage('🔍 Búsqueda próximamente.');
  }

  onNotificationsClick(): void {
    this.showMessage('🔔 Sin notificaciones nuevas.');
  }
}