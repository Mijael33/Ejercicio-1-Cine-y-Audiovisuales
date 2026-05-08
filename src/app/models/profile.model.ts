// src/app/models/profile.model.ts
// ==============================================================
// INTERFAZ DE DATOS DEL PERFIL PROFESIONAL
// Define la estructura para la información del creador audiovisual.
// ==============================================================
export interface Profile {
  name: string;             // Nombre completo
  specialty: string;        // Especialidad principal
  bio: string;              // Biografía completa y apasionada
  quote: string;            // Cita personal inspiradora
  avatarUrl: string;        // Ruta de la foto de perfil
  skills: string[];         // Lista de habilidades técnicas y artísticas
  galleryImages: string[];  // Rutas de imágenes para el portfolio
}