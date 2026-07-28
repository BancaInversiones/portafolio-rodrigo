# Portafolio Rodrigo Bartierra

Sitio web profesional de Rodrigo Patricio Bartierra Valdivia, publicista,
traductor y docente universitario.

La experiencia reúne perfil profesional, proyectos, habilidades, plataformas,
marcas y empresas, con diseño responsive y animaciones adaptadas a desktop y
mobile.

## Tecnologías

- React 19
- Next.js 16
- TypeScript
- Vinext y Vite
- CSS responsive
- React Icons

## Requisitos

- Node.js 22.13 o superior
- npm

## Instalación local

```bash
git clone URL-DE-TU-REPOSITORIO
cd portafolio-rodrigo-bartierra
npm install
npm run dev
```

Luego abre la dirección local indicada por la terminal.

## Comandos

```bash
npm run dev
npm run build
npm test
```

## Estructura principal

```text
app/
  globals.css       Estilos, responsive y animaciones
  layout.tsx        Metadatos y estructura global
  page.tsx          Contenido principal

public/
  assets/           Animoji y recursos del hero
  brands/           Logos de marcas
  companies/        Logos de experiencia laboral
```

## Personalización

- Los contenidos del portafolio están en `app/page.tsx`.
- Los estilos y breakpoints están en `app/globals.css`.
- Los recursos visuales se encuentran en `public/`.
- Los enlaces de contacto y redes sociales también se editan en
  `app/page.tsx`.

## Subir a GitHub

1. Crea un repositorio vacío en GitHub.
2. Descomprime este paquete.
3. Abre la carpeta del proyecto en Terminal.
4. Ejecuta:

```bash
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin URL-DE-TU-REPOSITORIO
git push -u origin main
```

No subas archivos `.env`, credenciales, tokens ni carpetas `node_modules`.
El archivo `.gitignore` incluido ya protege los elementos habituales.

## Aviso

Los nombres y logotipos de marcas pertenecen a sus respectivos titulares. Su
inclusión tiene únicamente fines de presentación de experiencia profesional.

© 2026 Rodrigo Patricio Bartierra Valdivia.
