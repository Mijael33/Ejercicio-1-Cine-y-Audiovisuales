// src/app/app.component.ts
// ==============================================================
// COMPONENTE RAÍZ - NAVEGACIÓN POR TABS
// Hace scroll hacia arriba al cambiar de página
// ==============================================================
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class AppComponent {
  activeTab: string = 'home';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Escuchamos los cambios de navegación
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        if (url.includes('/home')) {
          this.activeTab = 'home';
        } else if (url.includes('/profile')) {
          this.activeTab = 'profile';
        } else if (url.includes('/contact')) {
          this.activeTab = 'contact';
        }

        // Hacer scroll hacia arriba al cambiar de página
        this.scrollToTop();
      });
  }

  // Navegar a una pestaña
  navigateTo(path: string): void {
    this.activeTab = path;
    this.router.navigate(['/' + path], { replaceUrl: true });
  }

  // Método para hacer scroll hacia arriba
  private scrollToTop(): void {
    // Esperar un momento a que la página se renderice
    setTimeout(() => {
      // Intentar con el ion-content de Ionic
      const ionContent = document.querySelector('ion-content');
      if (ionContent) {
        ionContent.scrollToTop(300);
      }
      // También hacer scroll en la ventana
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Y en el documento
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }
}