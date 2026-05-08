// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class AppComponent implements OnInit {
  activeTab: string = 'home';

  constructor(private router: Router) {
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
      });
  }

  ngOnInit(): void {
    // Aplicar margen superior con JavaScript puro
    setTimeout(() => {
      const headers = document.querySelectorAll('ion-header');
      headers.forEach((header: any) => {
        header.style.marginTop = '40px';
      });
    }, 500);
  }

  navigateTo(path: string): void {
    this.activeTab = path;
    this.router.navigate(['/' + path], { replaceUrl: true });
    
    // Volver a aplicar el margen después de navegar
    setTimeout(() => {
      const headers = document.querySelectorAll('ion-header');
      headers.forEach((header: any) => {
        header.style.marginTop = '40px';
      });
    }, 500);
  }
}