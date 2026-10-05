# Development notes

- This repository began with only a README. The React starter uses a bind-mounted source tree in `docker-compose.base44.yml`; do not replace it with a prebuilt app image.
- Startup runs `npm ci` against the committed lockfile before the development server. Dependencies live in the `node_modules` Docker volume.
- Vite polls the bind mount and accepts the preview hostname through the platform-provided `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` variable.
- No database or external credentials are needed.
- Verify with `curl -fsS http://localhost:3000/`, `docker compose -f docker-compose.base44.yml ps`, and `docker compose -f docker-compose.base44.yml exec -T web npm run build`.
- Browser smoke test: click “Add a click” and confirm the displayed count increments. No automated test suite is configured.
