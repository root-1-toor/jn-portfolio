# James Newman

Personal portfolio. Built with Next.js, deployed on Vercel.

No templates. No UI kits. No boilerplate copy.

---

Next.js 13: Requires a minimum of Node.js 16.14.

---

## Running locally

Clone it:

```bash
git clone https://github.com/root-1-toor/portfolio/
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open (http://localhost:3000).

---

## Stack

- **Next.js 14** — App Router, client components
- **Fraunces + DM Sans** — display and body fonts
- **CSS modules** — no Tailwind, no styled-components, just CSS
- **Vercel** — deploys on every push to `main`

---

## Structure

```
app/
  page.tsx              ← renders Landing
components/
  app/
    Landing.jsx         ← root component, all nav state
    landing.css         ← all styles
    data.js             ← all content — projects, stack, blog, stats


