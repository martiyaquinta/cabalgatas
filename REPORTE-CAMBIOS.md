# Reporte de cambios — GR Turismo Aventura
## Período: Septiembre 2025 – Agosto 2026 (154 commits)

---

## 1. SITIO WEB COMPLETO

- Desarrollo del sitio web desde cero con Next.js + TypeScript + Tailwind CSS
- Diseño responsive (mobile + desktop) con animaciones
- Sistema multiidioma completo: Español, Inglés y Portugués
- Componentes accesibles con Radix UI (acordeones, diálogos, tooltips, etc.)
- Formularios con validación (react-hook-form + Zod)
- Subida de imágenes optimizada para producción (Vercel)
- Metadatos SEO con noindex/nofollow en PDFs públicos
- Título y descripción del sitio: "Gr Turismo Aventura"

---

## 2. SECCIÓN TRANSFER

- Página dedicada de traslados aeropuerto con navegación completa

---

## 3. LAS 6 CABALGATAS — CONTENIDO COMPLETO

### Creación y diseño de PDFs individuales para cada cabalgata:
| Cabalgata | Idiomas |
|-----------|---------|
| Cruce de los Andes | ES / EN / PT |
| Ruta del Cóndor (ex Expertos) | ES / EN / PT |
| Avión de los Uruguayos | ES / EN / PT |
| Los Molles | ES / EN / PT |
| 3 Valles | ES / EN / PT |
| Semana Santa | ES / EN / PT |

### Contenido incluido en cada PDF:
- Itinerario detallado día por día con descripciones
- Sección "Servicios incluidos" (comidas, guías, equipo, comunicación satelital)
- Sección "Equipo y vestimenta" (qué llevar)
- Sección "Menú completo" (desayuno, almuerzo, cena con opciones vegetarianas/sin TACC)
- Sección "Información del tour" (dificultad, duración, altitud, etc.)
- Sección "Cómo llegar a las instalaciones" (transporte, vehículo propio, colectivo, avión, transfer)
- Sección "Formas de pago" (tarjeta, transferencia, efectivo, cuotas, política de seña)
- Imágenes y galería de fotos
- Disclaimer de tiempos de cabalgata

### Diseño visual:
- Layout de servicios + equipamiento en 2 columnas
- Paleta de colores corporativa (coral, #342c2c)
- Formato estandarizado con interlineado consistente en todas las cabalgatas
- Colores adaptados por sección (texto claro sobre fondos oscuros)

---

## 4. GESTIÓN DE PRECIOS Y PAGOS

- Sistema de precios actualizado temporada 2026
- Múltiples formas de pago: tarjeta de crédito (3, 6 y 12 cuotas), transferencia bancaria, efectivo
- Descuentos por transferencia/efectivo
- Política de seña del 10% (no reembolsable, transferible)
- Eliminación de Mercado Pago como opción
- Eliminación de descuento estudiantes
- Precios mostrados como "CONSULTAR" donde aplica
- Precio Cruce de los Andes: $680.000
- Precio 3 Valles: USD 800
- Precio preventa en tarjeta de Ruta del Cóndor

---

## 5. GESTIÓN DE FECHAS Y DISPONIBILIDAD

- Fechas de temporada actualizadas en todas las cabalgatas (2025-2026)
- Sistema de "Próximamente" para fechas no publicadas
- Toggle disponible/no disponible (ej: Semana Santa)
- Badge de dificultad por cabalgata (Principiante, Intermedio, Avanzado, Experto)

---

## 6. SECCIÓN "CÓMO LLEGAR" — REFORMULACIÓN COMPLETA

- Texto unificado en los 6 PDFs, 3 idiomas
- Nueva información agregada:
  - Vehículo propio queda seguro en el predio del Club Andino Pehuenche
  - Opción de viajar en colectivo o avión, con sugerencia de llegar un día antes
  - Transfer de la empresa hacia Los Molles (cupos limitados)
  - Transfer desde San Rafael (cupos limitados)
  - En Cruce de los Andes y Ruta del Cóndor: sección "¿Cómo vuelvo?" con combi de regreso

### Actualización Transfer — Avión de los Uruguayos (ES / EN / PT)
- Texto de transfer privado desde Mendoza/San Rafael hasta Los Molles
- Opción de colectivos hasta Parada Río Salado + transfer coordinado por $30.000
- Aviso: domingos no hay servicios directos de colectivos

---

## 7. RENOMBRADO DE CABALGATA

- "Cabalgata Expertos" → "Ruta del Cóndor" en los 3 idiomas
- Archivos modificados: locales, PDFs públicos, templates, página debug

---

## RESUMEN ESTADÍSTICO

| Métrica | Valor |
|---------|-------|
| Commits totales en producción | 154 |
| PRs pendientes de merge | 2 |
| Archivos HTML de cabalgatas | 18 (6 cabalgatas × 3 idiomas) |
| Idiomas | Español, English, Português |
| Período de trabajo | Sep 2025 – Ago 2026 (~11 meses) |
