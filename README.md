# Juliano Portfolio

A bilingual (English/Spanish) portfolio website built with Astro, featuring creative tools and experiments.

## 🌐 Features

- **Bilingual Support**: Full English and Spanish translations
- **Internationalization**: Astro i18n with language switcher
- **Creative Tools**: Interactive Pomodoro timer, BPM tap, Siteswap validator, and stitch counter
- **Cloudflare Deployment**: Ready for Cloudflare Workers/Pages deployment
- **Contact Integration**: Formspree form integration for contact submissions
- **Responsive Design**: Tailwind CSS for modern, mobile-friendly UI

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ToolsLayout.astro
│   │   └── ...
│   ├── pages/
│   │   ├── index.astro          # English home
│   │   ├── about.astro          # English about
│   │   ├── contact.astro        # English contact
│   │   ├── portfolio.astro      # English portfolio
│   │   ├── tools/               # English tools
│   │   └── es/                  # Spanish pages
│   │       ├── index.astro      # Spanish home
│   │       ├── about.astro      # Spanish about
│   │       ├── contact.astro    # Spanish contact
│   │       ├── portfolio.astro  # Spanish portfolio
│   │       └── tools/           # Spanish tools
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── wrangler.toml
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build and deploy to Cloudflare Workers/Pages     |
| `npm run cf-dev`          | Start Wrangler dev server for Cloudflare testing |
| `npm run cf-preview`      | Build and preview locally with Wrangler          |

## 🌍 Internationalization

The site supports two languages:
- **English** (default): `/`, `/about`, `/tools`, etc.
- **Spanish**: `/es/`, `/es/about`, `/es/tools`, etc.

Language switching is available via buttons in the header navigation.

## ☁️ Cloudflare Deployment

This project is configured for deployment to Cloudflare Workers/Pages:

1. **Install Wrangler CLI** (if not already installed):
   ```sh
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare**:
   ```sh
   wrangler auth login
   ```

3. **Deploy**:
   ```sh
   npm run deploy
   ```

4. **Local Cloudflare testing**:
   ```sh
   npm run cf-dev
   ```

   Or for a full local preview:
   ```sh
   npm run cf-preview
   ```

## 📧 Contact Form

The contact forms use Formspree for form submissions. The endpoint is configured in the contact pages.

## 👀 Want to learn more?

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Tailwind CSS](https://tailwindcss.com/)
