// src/app/models/news.model.ts
// ==============================================================
// INTERFAZ DE DATOS DE NOTICIA (PREMIUM)
// Define la estructura de las noticias de la industria.
// ==============================================================
export interface NewsItem {
  id: number;              // Identificador único
  title: string;           // Titular de la noticia
  summary: string;         // Resumen o entradilla
  date: string;            // Fecha de publicación
  thumbnailUrl: string;    // Imagen miniatura (formato revista)
  category: string;        // Categoría (Estreno, Festival, Crítica...)
}