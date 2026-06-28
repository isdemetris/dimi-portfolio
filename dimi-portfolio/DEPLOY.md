# Deploy your portfolio to Vercel (2 minutes)

## Option 1: Quick Deploy (No local setup needed)

1. Copy the `portfolio.jsx` code
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" → "Create Git Repository"
4. In the project root, create these files:

### `package.json`
```json
{
  "name": "dimi-portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### `public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="description" content="Strategic creative operations leader" />
  <title>Dimi - Creative Operations</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  </style>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### `src/index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
```

### `src/App.jsx`
Paste the content from `portfolio.jsx` here

5. Push to GitHub
6. Vercel auto-deploys
7. Visit your live site

---

## Option 2: Custom Domain

After deploying to Vercel:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your domain (e.g., `dimi.com`)
4. Follow DNS instructions from your domain registrar

Good domain options:
- `dimi.com` (direct, memorable)
- `dimi.creative` (niche, clear)
- `dimiworks.com` (simple)

---

## Option 3: Next.js (Slightly more robust)

If you prefer Next.js instead:

1. Use `create-next-app@latest`
2. Place the Portfolio component in `app/page.js`
3. Deploy the same way to Vercel

---

## What you get:

✓ Public portfolio live instantly  
✓ Custom domain support  
✓ No backend needed  
✓ Updates: just push to GitHub, Vercel redeploys automatically  
✓ SSL/HTTPS included  

---

## Next steps after launch:

1. Update LinkedIn headline + bio to link to your new portfolio
2. Share the link in applications when requested
3. Keep it updated as you grow
