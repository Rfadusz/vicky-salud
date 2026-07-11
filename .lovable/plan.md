## Plan — Actualización Vicky Salud Landing

### 1. Assets (imágenes subidas → Lovable Assets CDN)
- Logo: `user-uploads://Logo_VICKY_SALUD.jpg` → `src/assets/vicky-logo.jpg.asset.json`
- Dr. Joan Manduley: `user-uploads://JOAN_MANDULEY.PNG` → `src/assets/joan-manduley.png.asset.json`
- Liliam López: `user-uploads://LILIAM_LOPEZ.jpeg` → `src/assets/liliam-lopez.jpeg.asset.json`
- Hero médico: generar 1 imagen editorial minimalista teal (consulta/atención médica) → `src/assets/hero-medico.jpg`

### 2. Header (`src/components/site/Header.tsx`)
- Reemplazar el círculo con "v" por `<img>` del logo real (redondo, ~40px).
- Mantener nav y CTA "Agendar Cita" (scroll a `#reservar`).

### 3. Hero (`src/routes/index.tsx`)
- Sustituir la imagen Unsplash actual por la nueva imagen médica generada.
- Mantener headline, CTAs y layout responsivo.

### 4. Servicios — reemplazar las 6 tarjetas por:
1. Control de Salud Mental — icono `Brain`
2. Psiquiatría — icono `Stethoscope`
3. Medicina General — icono `HeartPulse`
4. Medicina Nutricional (Control de peso) — icono `Apple`
5. Psicología — icono `MessagesSquare`
6. Dental — icono `Smile`

Iconos de `lucide-react`, estilo minimalista actual (línea, sin relleno).

### 5. Sección Reservo (`#reservar`)
- Sección amplia, fondo suave (`--primary-soft` o gradiente), título "Agenda tu hora en línea", subtítulo breve.
- Contenedor `max-w-4xl` con el `<iframe>` de Reservo (width 100%, height 600, border-radius 10px, shadow suave, responsive: `w-full`, wrapper con padding).
- Debajo: pequeño "Powered by Reservo" centrado, link a agendamiento.reservo.cl.
- Se corrigen las URLs (el usuario pegó con corchetes markdown; se usan URLs limpias).

### 6. Equipo Médico
Layout: grid 2 columnas en desktop, 1 en móvil, tarjetas centradas.
- **Dr. Joan Manduley** — foto real — "Médico General con enfoque en Salud Mental"
- **Liliam López** — foto real — "Directora del Centro"

### 7. Nueva sección Testimonios "Lo que dicen nuestros pacientes"
- 3 tarjetas estáticas (maqueta) con: comilla decorativa, texto de reseña placeholder, nombre, iniciales en avatar circular.
- Grid responsivo (1/2/3 columnas), bordes suaves, sombra sutil consistente con el resto.

### 8. Footer (`src/components/site/Footer.tsx`)
- Dirección: "Central Gonzalo Pérez Llona 300, Loc C, 9250589 Maipú, Región Metropolitana"
- Email: `vickymedicoydental@gmail.com`
- Redes: solo Instagram (`https://www.instagram.com/vicky_medico_dental/`) y WhatsApp (`https://wa.me/56937671413`). Eliminar cualquier referencia a Facebook.
- Logo actualizado.

### 9. Botón flotante WhatsApp
- Nuevo componente `src/components/site/WhatsAppFloat.tsx`.
- `fixed bottom-6 right-6 z-50`, botón circular verde WhatsApp (`#25D366`), icono SVG oficial de WhatsApp (path inline, no depender de lucide para fidelidad de marca), `aria-label`, `target="_blank" rel="noopener"`.
- Se monta en `src/routes/__root.tsx` (o en `index.tsx`) para que aparezca en toda la landing.

### Notas técnicas
- Sin cambios en `src/styles.css` (tokens teal ya existen).
- Todas las imágenes vía `lovable-assets` pointer JSON (no se copian binarios al repo).
- Iframe envuelto en `div` con `aspect-ratio` o height fija + overflow-hidden para responsividad; nota: si el iframe de Reservo no está listo aún, mostrará su propia UI, pero la maqueta queda funcional.
- Anchors existentes (`#servicios`, `#profesionales`, `#reservar`, `#contacto`) se mantienen; se añade `#testimonios`.

### Archivos afectados
- crear: `src/assets/*.asset.json` (3), `src/assets/hero-medico.jpg`, `src/components/site/WhatsAppFloat.tsx`
- editar: `src/components/site/Header.tsx`, `src/components/site/Footer.tsx`, `src/routes/index.tsx`, `src/routes/__root.tsx`
