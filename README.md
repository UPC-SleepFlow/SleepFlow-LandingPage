# 🌙 SleepFlow — Landing Page

> **SleepFlow** — *Duerme mejor con lo simple. Solo tu celular.*
> Landing page del proyecto académico de la asignatura **CC52 · Ingeniería de Software · UPC · Grupo 02**.

---

## 📖 Información del proyecto

**SleepFlow** es una aplicación móvil de *sleep tech* peruana centrada en la **simplicidad radical**: sonidos relajantes con temporizador, alarmas guiadas por el ciclo de sueño y un resumen semanal que cualquiera entiende. **Sin wearables, en español y gratis para empezar.**

Este repositorio contiene la **Landing Page** del producto: una página estática (HTML5 + CSS3 + JavaScript vanilla) que presenta el problema, la solución, los segmentos objetivo, precios y descarga de la app.

| Dato | Detalle |
|---|---|
| 🎓 Curso | CC52 — Ingeniería de Software |
| 🏫 Universidad | Universidad Peruana de Ciencias Aplicadas (UPC) |
| 👥 Grupo | 02 |
| 🧩 Tipo de solución | Landing page (sitio estático) |

---

## ✍️ Autores

| Integrante | Rol |
|---|---|
| Leon | Miembro del equipo |
| Azama | Miembro del equipo |
| Huayta | Miembro del equipo |
| Moharam | Miembro del equipo |
| Valdivia | Miembro del equipo |

*Equipo 02 — CC52 UPC*

---

## 🎯 Segmentos objetivo

SleepFlow nació de entrevistas de descubrimiento (TB1) con peruanos que duermen mal. La solución apunta a **dos segmentos principales**:

### 1. Buscadoras de descanso — *Camila, 24*
Estudiante universitaria con trabajo de medio tiempo. Se acuesta a las 11 p. m., pero su mente sigue acelerada y pierde horas dando vueltas en la cama.
- **Necesidad:** calmar la mente antes de dormir y entender qué le funciona.
- **Valor SleepFlow:** sonidos que calman + resumen semanal simple.

### 2. Horarios irregulares — *Jorge, 31*
Enfermero con turnos rotativos. Su cuerpo nunca sabe si es de día o de noche; duerme cuando puede, con luz pegando en la ventana.
- **Necesidad:** dormir a cualquier hora y despertar bien.
- **Valor SleepFlow:** alarma de ciclo guiado programable a cualquier hora + sonidos que bloquean el ruido del día.

---

## ⭐ Características principales

- 🌧️ **Sonidos que calman** — lluvia, ruido blanco y olas, con temporizador de apagado automático (15/30/45/60 min).
- ⏰ **Alarmas de ciclo guiado** — despertar natural, programable a cualquier hora (pensado también para quien duerme de día).
- 📊 **Métricas que sí se entienden** — resumen semanal simple de horas dormidas y calidad percibida, sin jerga técnica.
- 📱 **Solo tu celular** — no requiere wearables ni accesorios.
- 🇪🇸 **En español y contextualizada para LatAm**.
- 🔋 **Bajo consumo de batería** — modo dormir que atenúa pantalla y apaga el audio solo.
- 🆓 **Modelo freemium** — plan Gratis permanente y plan Premium (S/ 7.90/mes referencial), sin anuncios en ningún plan.

---

## 🗂️ Estructura del proyecto

```
SleepFlow-LandingPage/
├── public/                     # Carpeta principal del proyecto
│   ├── index.html              # Landing page (punto de entrada)
│   ├── favicon.ico             # Ícono del sitio (luna creciente)
│   └── assets/
│       ├── styles/
│       │   └── styles.css      # Hoja de estilos (tema noche)
│       ├── scripts/
│       │   └── main.js         # Lógica JS (revelado al hacer scroll)
│       └── images/             # Imágenes (.jpg, .png, etc.)
├── README.md
└── .gitignore
```

---

## 🔀 Control de versiones — GitFlow

El proyecto aplica el modelo de ramas **GitFlow**:

| Rama | Propósito |
|---|---|
| `main` | Código en producción. Solo recibe merges desde `develop` (vía releases). |
| `develop` | Rama de integración del trabajo diario. Base de las features. |
| `feature/<nombre>` | Nuevas funcionalidades. **Se crean siempre a partir de `develop`** y se integran de vuelta a `develop`. |

**Convenciones de ramas feature:** `feature/landing-page`, `feature/estructura-proyecto`, etc. — nombres cortos en minúsculas y separados por guiones.

```bash
# Flujo de trabajo habitual
git checkout develop
git checkout -b feature/mi-feature   # nueva feature desde develop
# ... commits ...
git checkout develop
git merge --no-ff feature/mi-feature # integrar a develop
git branch -d feature/mi-feature
```

---

## 🚀 Cómo visualizar

Basta con abrir `public/index.html` en el navegador, o servir el proyecto localmente:

```bash
# Opción 1: abrir directo
open public/index.html        # macOS
xdg-open public/index.html    # Linux

# Opción 2: servidor local
npx serve public
# o
python3 -m http.server -d public 8080
```

---

## 🛠️ Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![GitFlow](https://img.shields.io/badge/GitFlow-000000?logo=git&logoColor=white)

- **HTML5** semántico (secciones, tablas comparativas, FAQ con `<details>`)
- **CSS3** moderno: custom properties, `rgb()/rgba()`, `color-mix()`, clamp(), grid y backdrop-filter
- **JavaScript vanilla**: `IntersectionObserver` para revelado al hacer scroll (respeta `prefers-reduced-motion`)

---

## ⚠️ Aviso

SleepFlow es un **proyecto académico de bienestar**. No es un dispositivo médico ni sustituye un diagnóstico o tratamiento clínico.

---

© 2025 SleepFlow · CC52 Ingeniería de Software · UPC · Grupo 02
