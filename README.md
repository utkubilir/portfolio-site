# Utku Bilir — Portfolio

Personal portfolio of **Utku Bilir**, a Computer Engineering student in İzmir
working on UAV/autonomy software and practical student tools. Bilingual
(Turkish / English), light & dark themes, built around an editorial,
typography-led design system.

**Live site → https://utkubilir.com**

## About

A single-page portfolio plus an in-depth case study of the **ECOFUAV
TEKNOFEST** project. The design is editorial and content-first: large Fraunces
serif headlines, generous whitespace, and hairline rules instead of heavy cards.

- 🌐 **Website:** https://utkubilir.com
- 🧑‍💻 **Focus:** UAV software integration, simulation (ROS 2 / PX4 SITL / Gazebo), Java & React tools
- 🌍 **Bilingual:** Turkish & English, with a persistent light/dark theme

## Features

- Editorial design system (Fraunces + Manrope) with a single restrained accent
- Home sections: Hero, Selected Work, Experience & Education, Skills, Contact
- `/teknofest` case study with a sticky table of contents, scroll-spy, and reading progress
- Fully responsive; light/dark theme follows system preference and is remembered
- Accessibility: skip links, reduced-motion support, semantic landmarks
- SEO: per-route titles, Open Graph tags, and canonical URLs

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 3**
- **React Router 7**
- Lightweight custom i18n (TR/EN) via React context
- Type: Fraunces (display) + Manrope (body)

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project Structure

```
src/
├─ components/   # Navbar, Footer, Container, theme/language toggles…
├─ sections/     # Home sections (Hero, Projects, Skills, …)
├─ pages/        # HomePage, Teknofest case study
├─ data/         # Content (projects, experience, skills, contact…)
├─ i18n/         # en / tr dictionaries + provider
└─ index.css     # Editorial design tokens & components (.ed-*)
```

## Deployment

Static site built with Vite and served at **https://utkubilir.com**.

---

© Utku Bilir
