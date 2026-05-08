# setup_project.py
# ==============================================================
# SCRIPT DE AUTOMATIZACIÓN: CINE Y AUDIOVISUALES (PREMIUM)
# Objetivo: Crear la estructura de carpetas y archivos base
# para una arquitectura limpia y profesional.
# ==============================================================
import os

def configurar_estructura():
    """
    Orquesta la creación de la estructura principal del proyecto.
    Define qué carpetas y archivos son necesarios para comenzar
    con una base sólida y organizada.
    """
    ruta_base = os.getcwd()

    # Definimos las carpetas que necesitamos dentro de 'src/app'
    carpetas_app = [
        'components',     # Componentes reutilizables (tarjetas, etc.)
        'models',         # Interfaces TypeScript para tipar nuestros datos
        'services',       # Lógica de obtención de datos
    ]

    # Definimos las carpetas para los recursos gráficos en 'src/assets'
    carpetas_assets = [
        'images/banners',    # Imágenes de banners grandes (1440x600)
        'images/posters',    # Pósters de películas (500x750)
        'images/profile',    # Foto de perfil y elementos del portfolio
        'icons',             # Iconos personalizados SVG
    ]

    # Definimos los archivos .ts, .html, .scss que necesitaremos.
    # Las carpetas de páginas como 'home', 'profile', 'contact',
    # ya existen, pero aquí especificamos archivos esenciales nuevos.
    archivos_a_crear = [
        # Páginas (vamos a regenerarlas con nuestro diseño premium)
        'src/app/home/home.page.html',
        'src/app/home/home.page.scss',
        'src/app/home/home.page.ts',
        'src/app/profile/profile.page.html',
        'src/app/profile/profile.page.scss',
        'src/app/profile/profile.page.ts',
        'src/app/contact/contact.page.html',
        'src/app/contact/contact.page.scss',
        'src/app/contact/contact.page.ts',
        # Componente reutilizable para tarjetas de películas
        'src/app/components/movie-card/movie-card.component.ts',
        'src/app/components/movie-card/movie-card.component.html',
        'src/app/components/movie-card/movie-card.component.scss',
        # Servicio para gestionar los datos de la app
        'src/app/services/cinema.service.ts',
        # Modelos de datos
        'src/app/models/movie.model.ts',
        'src/app/models/news.model.ts',
        'src/app/models/profile.model.ts',
    ]

    print("\n🎬 Configurando la arquitectura cinematográfica premium...\n")

    # 1. Crear las carpetas
    for carpeta in carpetas_app:
        destino = os.path.join(ruta_base, 'src', 'app', carpeta)
        if not os.path.exists(destino):
            os.makedirs(destino)
            print(f"  ✅ Carpeta creada: src/app/{carpeta}")
        else:
            print(f"  ℹ️  Carpeta ya existe: src/app/{carpeta}")

    for carpeta in carpetas_assets:
        destino = os.path.join(ruta_base, 'src', 'assets', carpeta)
        if not os.path.exists(destino):
            os.makedirs(destino)
            print(f"  ✅ Carpeta de assets creada: src/assets/{carpeta}")
        else:
            print(f"  ℹ️  Carpeta de assets ya existe: src/assets/{carpeta}")

    print("\n  --- Creando archivos base ---")

    # 2. Crear los archivos vacíos con comentarios de marcador de posición
    for ruta_archivo in archivos_a_crear:
        destino = os.path.join(ruta_base, ruta_archivo)
        # Asegurarnos de que la carpeta del archivo exista (puede que no)
        os.makedirs(os.path.dirname(destino), exist_ok=True)

        if not os.path.exists(destino):
            with open(destino, 'w', encoding='utf-8') as f:
                ext = os.path.splitext(ruta_archivo)[1]
                contenido_marcador = ""
                if ext == '.ts':
                    contenido_marcador = "// Archivo TypeScript - Listo para el desarrollo premium\n"
                elif ext == '.html':
                    contenido_marcador = "<!-- Plantilla HTML - Lista para el desarrollo premium -->\n"
                elif ext == '.scss':
                    contenido_marcador = "/* Estilos SCSS - Listos para el desarrollo premium */\n"
                f.write(contenido_marcador)
            print(f"  ✅ Archivo creado: {ruta_archivo}")
        else:
            print(f"  ℹ️  Archivo ya existe: {ruta_archivo}")

    print("\n🏁 Estructura del proyecto preparada. ¡Listos para la acción!")
    print("   Revisa las nuevas carpetas en 'src/app' y 'src/assets'.\n")

if __name__ == "__main__":
    configurar_estructura()
