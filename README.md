# AI Marketing Agency Builder – Landing Page

Static landing page exported from GoHighLevel and rebuilt to run on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No build step, no dependencies.

## Structure

```
index.html            # Landing page
terms.html            # Terms page (fill in your text)
disclaimer.html       # Disclaimer page (fill in your text)
assets/css/styles.css # All styles
assets/js/main.js     # Opt-in popup + tools marquee
assets/img/favicon.svg
.nojekyll             # Tells GitHub Pages to serve files as-is
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (public, or private on a paid plan).
2. Upload everything in this folder to the repo root (include `.nojekyll`).
   ```bash
   git init && git add . && git commit -m "Landing page"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `/ (root)` → Save.
4. Live in ~1 min at `https://<you>.github.io/<repo>/`.

### Custom domain
1. Settings → Pages → Custom domain → enter `yourdomain.com`.
2. At your DNS provider: `CNAME` record `www` → `<you>.github.io`, and A records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Tick **Enforce HTTPS** once the cert is issued.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Third-party embeds – check after going live

| Embed | What to check |
|---|---|
| **Vidalytics video** | If the video doesn't load, add your new domain to the allowed domains in Vidalytics. |
| **HubSpot form** (portal 146925251, EU region) | Submit a test lead and confirm it lands in HubSpot. If blocked, allow the domain in HubSpot form settings. |
| **Images** | Still served from the GHL CDN (`assets.cdn.filesafe.space`). They stop working if the GHL account is closed – download them into `assets/img/` and update the `src` paths to fully cut the dependency. |

## Changes from the GHL export
- Removed the GHL/Nuxt wrapper, builder CSS and the nested `<html>` document.
- Split CSS and JS into separate files.
- Removed the Cloudflare analytics beacon (token is bound to the old domain).
- Loaded the *Playfair Display* font the curriculum cards use (it was never loaded).
- Replaced GHL's non-functional `style-hover` attributes with a real `.course-card:hover` rule.
- Added meta description, Open Graph tags and favicon.
- Footer links now point to real Terms/Disclaimer pages and a contact email.
