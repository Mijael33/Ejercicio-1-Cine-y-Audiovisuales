// src/app/models/movie.model.ts
// ==============================================================
// INTERFAZ DE DATOS DE PELÍCULA (PREMIUM)
// Define la estructura de datos para las obras cinematográficas.
// ==============================================================
export interface Movie {
  id: number;              // Identificador único
  title: string;           // Título de la película
  genre: string;           // Género(s) principal(es)
  duration: string;        // Duración en formato legible (ej: 1h 58m)
  rating: number;          // Calificación de 0 a 10
  posterUrl: string;       // Ruta del póster (500x750)
  bannerUrl: string;       // Ruta del banner (1440x600)
  description: string;     // Descripción breve y elegante
  isFeatured: boolean;     // Si es una película destacada
  year: number;            // Año de estreno
}