// src/app/services/cinema.service.ts
// ==============================================================
// SERVICIO DE DATOS - PORTFOLIO MIJAEL ENGELMANN
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
      bio: `Cineasta apasionado por la intersección entre la tecnología y la narrativa visual. Mi trabajo explora las emociones humanas a través de composiciones meticulosas, modelado 3D y una dirección de arte que busca la belleza en cada fotograma.`,
      quote: 'El cine no se ve, se siente. Mi misión es crear imágenes que permanezcan en la memoria.',
      avatarUrl: 'https://picsum.photos/400/400?random=100',
      skills: ['Dirección de Cine', 'Modelado 3D (Blender)', 'Color Grading', 'Motion Graphics', 'Edición', 'Composición Visual', 'Fotografía', 'Diseño Sonoro'],
      galleryImages: [
        'https://picsum.photos/600/600?random=101',
        'https://picsum.photos/600/600?random=102',
        'https://picsum.photos/600/600?random=103',
        'https://picsum.photos/600/600?random=104',
        'https://picsum.photos/600/600?random=105',
        'https://picsum.photos/600/600?random=106',
      ],
    };
  }

  getFeaturedMovies(): Movie[] {
    return [
      { id: 1, title: 'Ecos del Silencio', genre: 'Drama Psicológico', duration: '1h 52m', rating: 9.1, posterUrl: 'https://picsum.photos/500/750?random=201', bannerUrl: 'https://picsum.photos/1600/600?random=301', description: 'Un pianista retirado descubre que las notas musicales pueden alterar los recuerdos.', isFeatured: true, year: 2026 },
      { id: 2, title: 'Geometría del Vacío', genre: 'Ciencia Ficción', duration: '1h 38m', rating: 8.7, posterUrl: 'https://picsum.photos/500/750?random=202', bannerUrl: 'https://picsum.photos/1600/600?random=302', description: 'Un arquitecto de realidades virtuales construye mundos para escapar del dolor.', isFeatured: true, year: 2025 },
      { id: 3, title: 'Luz Negra', genre: 'Thriller Neo-Noir', duration: '2h 04m', rating: 8.9, posterUrl: 'https://picsum.photos/500/750?random=203', bannerUrl: 'https://picsum.photos/1600/600?random=303', description: 'Una fotógrafa descubre que las sombras revelan crímenes antes de que ocurran.', isFeatured: true, year: 2024 },
      { id: 4, title: 'Correspondencias', genre: 'Romance', duration: '1h 45m', rating: 8.5, posterUrl: 'https://picsum.photos/500/750?random=204', bannerUrl: 'https://picsum.photos/1600/600?random=304', description: 'Dos extraños intercambian cartas durante diez años sin conocerse.', isFeatured: false, year: 2023 },
      { id: 5, title: 'El Color del Tiempo', genre: 'Documental Poético', duration: '1h 15m', rating: 9.3, posterUrl: 'https://picsum.photos/500/750?random=205', bannerUrl: 'https://picsum.photos/1600/600?random=305', description: 'Un viaje visual a través de cuatro estaciones en lugares abandonados.', isFeatured: false, year: 2022 },
      { id: 6, title: 'Fragmentos de Medianoche', genre: 'Animación 3D', duration: '0h 28m', rating: 9.0, posterUrl: 'https://picsum.photos/500/750?random=206', bannerUrl: 'https://picsum.photos/1600/600?random=306', description: 'Cortometraje que explora los sueños de seis personajes durante una misma noche.', isFeatured: false, year: 2021 },
    ];
  }

  getCinemaNews(): NewsItem[] {
    return [
      { id: 101, title: 'Mijael Engelmann presenta "Ecos del Silencio" en Cannes 2026', summary: 'Seleccionada para la Quincena de Realizadores.', date: 'Mayo 2026', thumbnailUrl: 'https://picsum.photos/200/200?random=401', category: 'Festivales' },
      { id: 102, title: 'Detrás de cámaras: Color grading en "Geometría del Vacío"', summary: 'Un vistazo al meticuloso trabajo de postproducción.', date: 'Abril 2026', thumbnailUrl: 'https://picsum.photos/200/200?random=402', category: 'Tutoriales' },
      { id: 103, title: 'Entrevista: La filosofía visual de un cineasta del siglo XXI', summary: 'Mijael Engelmann comparte su visión sobre el futuro del cine.', date: 'Marzo 2026', thumbnailUrl: 'https://picsum.photos/200/200?random=403', category: 'Entrevistas' },
      { id: 104, title: '"Fragmentos de Medianoche" disponible en MUBI', summary: 'La plataforma incorpora el aclamado corto a su catálogo internacional.', date: 'Febrero 2026', thumbnailUrl: 'https://picsum.photos/200/200?random=404', category: 'Estrenos' },
    ];
  }
}