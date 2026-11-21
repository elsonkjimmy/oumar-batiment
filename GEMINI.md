# Directives Git du Projet : Micro-Commits Ultra-Granulaires

Toute modification apportée à ce projet doit respecter la politique des **micro-commits ultra-détaillés** :

- Découper chaque travail en le plus grand nombre possible de commits unitaires (`types`, `data`, `utils`, `components`, `styles`, `assets`, `docs`, `ci`).
- Règle de non-régression : chaque commit intermédiaire doit être syntaxiquement valide et compilable (`npm run build`).
- Messages clairs selon les *Conventional Commits*.
