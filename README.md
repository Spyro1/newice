# NewIce

A NewIce jégpálya modern, reszponzív webes felülete. A fő alkalmazás egy Single Page Application (SPA) a `newice/` mappában, Create React App (TypeScript) és Tailwind CSS alapokon, GitHub Pages-re automatizáltan telepítve.

## Fő technológiák
- React (Create React App, TypeScript)
- Tailwind CSS (utility-first stílus)
- GitHub Actions (CI/CD)
- `gh-pages` csomag (statikus deploy)

## Követelmények
- Node.js (ajánlott: LTS aktuális verzió)
- NPM (a Node telepítésével érkezik)

Ellenőrzés:
```bash
node -v
npm -v
```

## Projekt felépítése (részletek)
- `newice/` – fő SPA forráskód (React + TS)
- `newice/src/index.css` – Tailwind direktívák és egyedi stílusok
- `newice/tailwind.config.js` – Tailwind konfiguráció
- `assets/` – statikus képek, ikonok (külső HTML sablonokhoz)
- `.github/workflows/deploy.yml` – automatikus build és GitHub Pages publikálás

## Fejlesztői környezet beállítása
```bash
cd newice
npm install
```

## Fejlesztői szerver indítása
```bash
npm start
```
Alapértelmezett URL: `http://localhost:3000/newice` (a `homepage`/`PUBLIC_URL` alapján).

## Production build készítése
```bash
npm run build
```
A build a `newice/build/` mappába kerül, optimalizált CSS/JS állományokkal.

## Deploy GitHub Pages-re
Két lehetőség:
```bash
npm run deploy         # lokális build + publikálás
```
vagy automatikusan a GitHub Actions workflow futásával, amikor a `main` branchre push történik.

Fontos: a `package.json` `homepage` mezőnek illeszkednie kell a publikált URL-hez (`https://<felhasznalo>.github.io/<repo>`). Hibás érték esetén relatív útvonalak (CSS/JS) 404-et eredményezhetnek.

## CI/CD folyamata
A `.github/workflows/deploy.yml` lépései:
1. Forrás letöltése (checkout)
2. Node környezet beállítása
3. Függőségek telepítése (`npm install` a `newice` mappában)
4. Production build készítése
5. `gh-pages` publikálás a `gh-pages` branchre

## Hibaelhárítás
- Lockfile hiba CI-ben (`npm ci` mismatch): futtasd `npm install`-t, majd commitold a frissített `package-lock.json`-t.
- Hiányzó stílusok: ellenőrizd, hogy az `index.css` importálva van és a Tailwind direktívák szerepelnek benne.
- Rossz útvonalak a deploy után: validáld a `homepage` mezőt és a repository nevet (kis-/nagybetű számít a URL-ben).
- Üres deploy: győződj meg róla, hogy a `gh-pages` branch frissült és nincs cache probléma (privát ablakban nyisd meg).

## Fejlesztési irányelvek
- Kerüld a fölösleges külső CSS fájlokat – preferált a Tailwind utility használat.
- Új komponensek: TypeScript típusokkal, könnyen olvasható prop interfészekkel.
- Assetek: használj relatív vagy `PUBLIC_URL` alapú elérési utakat.

## Licenc
Ez a projekt a repóban található `LICENSE` fájl feltételei szerint használható.