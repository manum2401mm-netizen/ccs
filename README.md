# CCS React starter

A minimal React + Vite web app with a responsive welcome page and an interactive counter.

## Run in Base44

```sh
docker compose -f docker-compose.base44.yml up -d
```

The app runs on port 3000 with live reload. Docker installs dependencies from the committed lockfile on startup. No external services or credentials are required.

## Develop locally

With Node.js 22 installed:

```sh
npm ci
npm run dev
```

Edit `src/App.jsx` for the page and `src/styles.css` for styling.

## Check a production build

```sh
docker compose -f docker-compose.base44.yml exec -T web npm run build
```

Build output is written to `dist/`. No production deployment is configured.
