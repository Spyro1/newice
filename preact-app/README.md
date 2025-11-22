# NewIce Preact + Tailwind App

Multi-page marketing site for NewIce, rebuilt with Preact Router and Tailwind rectangles.

## Available scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Notes
- Routes match the original static pages (/, /about-us, /gallery, /open, /prices, /contact, /rules).
- Tailwind color tokens follow `assets/css/main.css` accent colors (#24CBD3, #037f89, etc.).
- Static assets such as the original logo live under `/assets/img`. Copy them into `preact-app/public/assets/img` (see next section) to display them while developing.

## Assets
Create the directory `preact-app/public/assets/img` and copy:
- `assets/img/logo.png`
- (optional) hero and gallery images if you want them to display instead of placeholders.

```
preact-app/
  public/
    assets/
      img/
        logo.png
```
