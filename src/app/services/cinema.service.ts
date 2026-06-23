// src/app/services/cinema.service.ts
// ==============================================================
// SERVICIO DE DATOS - PORTAFOLIO MIJAEL ENGELMANN
// Imágenes locales descargadas - No requieren internet
// ==============================================================
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { NewsItem } from '../models/news.model';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class CinemaService {

  getProfileData(): Profile {
    return {
      name: 'Mijael Engelmann',
      specialty: 'Director Audiovisual & Artista 3D',
      bio: `Cineasta apasionado por la interseccion entre la tecnologia y la narrativa visual. Mi trabajo explora las emociones humanas a traves de composiciones meticulosas, modelado 3D y una direccion de arte que busca la belleza en cada fotograma.`,
      quote: 'El cine no se ve, se siente. Mi mision es crear imagenes que permanezcan en la memoria.',
      avatarUrl: 'assets/images/profile/avatar.jpg',
      skills: [
        'Direccion de Cine',
        'Modelado 3D (Blender)',
        'Color Grading',
        'Motion Graphics',
        'Edicion y Postproduccion',
        'Composicion Visual',
        'Direccion de Fotografia',
        'Diseno Sonoro',
      ],
      galleryImages: [
        'assets/images/profile/gallery1.jpg',
        'assets/images/profile/gallery2.jpg',
        'assets/images/profile/gallery3.jpg',
        'assets/images/profile/gallery4.jpg',
        'assets/images/profile/gallery5.jpg',
        'assets/images/profile/gallery6.jpg',
      ],
    };
  }

  getFeaturedMovies(): Movie[] {
    return [
      {
        id: 1,
        title: 'Ecos del Silencio',
        genre: 'Drama Psicologico',
        duration: '1h 52m',
        rating: 9.1,
        posterUrl: 'assets/images/posters/poster1.jpg',
        bannerUrl: 'assets/images/banners/banner1.jpg',
        description: 'Un pianista retirado descubre que las notas musicales pueden alterar los recuerdos.',
        isFeatured: true,
        year: 2026,
      },
      {
        id: 2,
        title: 'Geometria del Vacio',
        genre: 'Ciencia Ficcion',
        duration: '1h 38m',
        rating: 8.7,
        posterUrl: 'assets/images/posters/poster2.jpg',
        bannerUrl: 'assets/images/banners/banner2.jpg',
        description: 'Un arquitecto de realidades virtuales construye mundos para escapar del dolor.',
        isFeatured: true,
        year: 2025,
      },
      {
        id: 3,
        title: 'Luz Negra',
        genre: 'Thriller Neo-Noir',
        duration: '2h 04m',
        rating: 8.9,
        posterUrl: 'assets/images/posters/poster3.jpg',
        bannerUrl: 'assets/images/banners/banner3.jpg',
        description: 'Una fotografa descubre que las sombras revelan crimenes antes de que ocurran.',
        isFeatured: true,
        year: 2024,
      },
      {
        id: 4,
        title: 'Correspondencias',
        genre: 'Romance',
        duration: '1h 45m',
        rating: 8.5,
        posterUrl: 'assets/images/posters/poster4.jpg',
        bannerUrl: 'assets/images/banners/banner4.jpg',
        description: 'Dos extranos intercambian cartas durante diez anos sin conocerse.',
        isFeatured: false,
        year: 2023,
      },
      {
        id: 5,
        title: 'El Color del Tiempo',
        genre: 'Documental Poetico',
        duration: '1h 15m',
        rating: 9.3,
        posterUrl: 'assets/images/posters/poster5.jpg',
        bannerUrl: 'assets/images/banners/banner5.jpg',
        description: 'Un viaje visual a traves de cuatro estaciones en lugares abandonados.',
        isFeatured: false,
        year: 2022,
      },
      {
        id: 6,
        title: 'Fragmentos de Medianoche',
        genre: 'Animacion 3D',
        duration: '0h 28m',
        rating: 9.0,
        posterUrl: 'assets/images/posters/poster6.jpg',
        bannerUrl: 'assets/images/banners/banner6.jpg',
        description: 'Cortometraje que explora los suenos de seis personajes durante una misma noche.',
        isFeatured: false,
        year: 2021,
      },
    ];
  }

  getCinemaNews(): NewsItem[] {
    return [
      {
        id: 101,
        title: 'Mijael Engelmann presenta "Ecos del Silencio" en Cannes 2026',
        summary: 'Seleccionada para la Quincena de Realizadores.',
        date: 'Mayo 2026',
        thumbnailUrl: 'assets/images/banners/news1.jpg',
        category: 'Festivales',
      },
      {
        id: 102,
        title: 'Detras de camaras: Color grading en "Geometria del Vacio"',
        summary: 'Un vistazo al meticuloso trabajo de postproduccion.',
        date: 'Abril 2026',
        thumbnailUrl: 'assets/images/banners/news2.jpg',
        category: 'Tutoriales',
      },
      {
        id: 103,
        title: 'Entrevista: La filosofia visual de un cineasta del siglo XXI',
        summary: 'Mijael Engelmann comparte su vision sobre el futuro del cine.',
        date: 'Marzo 2026',
        thumbnailUrl: 'assets/images/banners/news3.jpg',
        category: 'Entrevistas',
      },
      {
        id: 104,
        title: '"Fragmentos de Medianoche" disponible en MUBI',
        summary: 'La plataforma incorpora el aclamado corto a su catalogo internacional.',
        date: 'Febrero 2026',
        thumbnailUrl: 'assets/images/banners/news4.jpg',
        category: 'Estrenos',
      },
    ];
  }
}