# Portfolio — Donald William Kodjo EVLO

Portfolio cybersécurité & développement, en ligne sur https://donaldevlo.github.io/Portfolio/

React 19 · Vite 8 · Tailwind CSS 4 · TypeScript

## Commandes

```bash
npm install       # installer les dépendances
npm run dev       # serveur de dev : http://localhost:5173/Portfolio/
npm run cv        # build + génère public/CV_Donald_William_Kodjo_EVLO.pdf (nécessite Chrome ou Edge)
npm run deploy    # régénère le CV, build et publie sur la branche gh-pages
```

## Modifier le contenu

Tout le contenu (profil, compétences, expériences, projets, formation) est dans
[`src/data/profile.ts`](src/data/profile.ts). Le site **et** le CV PDF sont générés à partir de ce fichier :
après une modification, relancer `npm run cv` (ou `npm run deploy`) pour mettre le PDF à jour.

Le CV est mis en page dans [`src/cv/Cv.tsx`](src/cv/Cv.tsx) (page `cv.html`) puis imprimé en PDF A4
par [`scripts/build-cv.mjs`](scripts/build-cv.mjs).
