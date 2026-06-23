// src/app/home/home.page.ts
// ==============================================================
// LÓGICA DE INICIO - BANNER DINÁMICO CON DESLIZAMIENTO TÁCTIL
// Cambia automáticamente cada 5 segundos y también al deslizar
// ==============================================================
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class HomePage implements OnInit, OnDestroy {
  // Banner dinámico
  featuredMoviesForBanner: Movie[] = [];
  currentBannerIndex: number = 0;
  currentBannerMovie: Movie | undefined;

  // Catálogo
  featuredMovies: Movie[] = [];
  allMovies: Movie[] = [];
  cinemaNews: NewsItem[] = [];
  allNews: NewsItem[] = [];

  // Búsqueda
  searchVisible: boolean = false;
  searchTerm: string = '';

  // Timer del banner
  private bannerTimer: any;

  // Variables para el deslizamiento táctil
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.loadCinemaData();
    this.startBannerRotation();
  }

  ngOnDestroy(): void {
    if (this.bannerTimer) {
      clearInterval(this.bannerTimer);
    }
  }

  loadCinemaData(): void {
    this.allMovies = this.cinemaService.getFeaturedMovies();
    this.featuredMovies = [...this.allMovies];
    this.featuredMoviesForBanner = [...this.allMovies];
    this.currentBannerMovie = this.featuredMoviesForBanner[0];
    this.allNews = this.cinemaService.getCinemaNews();
    this.cinemaNews = [...this.allNews];
  }

  // =========================================
  // BANNER DINÁMICO
  // =========================================

  startBannerRotation(): void {
    this.bannerTimer = setInterval(() => {
      this.nextBanner();
    }, 5000);
  }

  resetBannerTimer(): void {
    if (this.bannerTimer) {
      clearInterval(this.bannerTimer);
    }
    this.startBannerRotation();
  }

  nextBanner(): void {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.featuredMoviesForBanner.length;
    this.currentBannerMovie = this.featuredMoviesForBanner[this.currentBannerIndex];
  }

  previousBanner(): void {
    this.currentBannerIndex = (this.currentBannerIndex - 1 + this.featuredMoviesForBanner.length) % this.featuredMoviesForBanner.length;
    this.currentBannerMovie = this.featuredMoviesForBanner[this.currentBannerIndex];
  }

  goToBanner(index: number): void {
    this.currentBannerIndex = index;
    this.currentBannerMovie = this.featuredMoviesForBanner[index];
    this.resetBannerTimer();
  }

  // =========================================
  // DESLIZAMIENTO TÁCTIL DEL BANNER
  // =========================================

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const diff = this.touchStartX - this.touchEndX;
    const minSwipeDistance = 50; // Distancia mínima para considerar deslizamiento

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Deslizó hacia la izquierda → siguiente banner
        this.nextBanner();
      } else {
        // Deslizó hacia la derecha → banner anterior
        this.previousBanner();
      }
      // Reiniciamos el timer después de un deslizamiento manual
      this.resetBannerTimer();
    }
  }

  // =========================================
  // BÚSQUEDA
  // =========================================

  toggleSearch(): void {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.searchTerm = '';
      this.featuredMovies = [...this.allMovies];
      this.cinemaNews = [...this.allNews];
    }
  }

  onSearchInput(event: any): void {
    this.searchTerm = event.target.value.toLowerCase().trim();

    if (this.searchTerm === '') {
      this.featuredMovies = [...this.allMovies];
      this.cinemaNews = [...this.allNews];
    } else {
      this.featuredMovies = this.allMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(this.searchTerm) ||
          movie.genre.toLowerCase().includes(this.searchTerm) ||
          movie.description.toLowerCase().includes(this.searchTerm) ||
          movie.year.toString().includes(this.searchTerm)
      );

      this.cinemaNews = this.allNews.filter(
        (news) =>
          news.title.toLowerCase().includes(this.searchTerm) ||
          news.summary.toLowerCase().includes(this.searchTerm) ||
          news.category.toLowerCase().includes(this.searchTerm)
      );
    }
  }

  // =========================================
  // BOTONES
  // =========================================

  exploreFeaturedMovie(): void {
    if (this.currentBannerMovie) {
      this.showMessage('🎬 Explorando: ' + this.currentBannerMovie.title);
    }
  }

  viewAllMovies(): void {
    this.showMessage('Colección completa de obras audiovisuales.');
  }

  viewAllNews(): void {
    this.showMessage('Todas las noticias de la industria.');
  }

  openMovieDetail(movie: Movie): void {
    this.showMessage('🎬 ' + movie.title + ' | ' + movie.genre + ' | ⭐ ' + movie.rating);
  }

  openNewsDetail(news: NewsItem): void {
    this.showMessage('📰 ' + news.title + ' | ' + news.category);
  }

  onNotificationsClick(): void {
    this.showMessage('Sin notificaciones nuevas.');
  }

  // =========================================
  // MENSAJE EMERGENTE
  // =========================================
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
    }, 2500);
  }
}