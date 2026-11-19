# OUMAR BÂTIMENT — Matériaux & Solutions

Site vitrine **mobile-first** (Phase 1 Frontend) conçu pour **OUMAR BÂTIMENT** (Cameroun).

## Aperçu technique

- **Stack** : React 18, TypeScript, Vite, CSS modulaire avec variables de design (`src/styles/tokens.css`, `src/styles/global.css`).
- **Architecture évolutive** : Les données statiques (`src/data/categories.ts`, `src/data/products.ts`) et les types (`src/types/catalog.ts`) sont découplés de l'interface pour permettre une intégration ultérieure d'un backend ou d'un tableau de bord d'administration sans réécrire le frontend.
- **Conversion WhatsApp** : Tous les boutons d'action génèrent des liens `https://wa.me/23777036805` pré-remplis contextuellement (`src/utils/whatsapp.ts`).
- **Images locales** : Toutes les photographies sont stockées localement dans `public/images/` et documentées dans [IMAGE_SOURCES.md](./IMAGE_SOURCES.md).

## Lancer le projet en local

Nécessite Node.js 18+ :

```bash
npm install
npm run dev
```

Pour compiler la version de production :

```bash
npm run build
```
