# NCC Parish Church Website

A full-featured parish website built with **Node.js**, **Express**, **EJS**, and **Bootstrap 5**.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home – hero, mass schedule, announcements, events |
| `/about` | Parish history, mission, clergy, council |
| `/groups` | Prayer group, youth, Bible study, guilds |
| `/mass-intentions` | Mass schedule + intention request form |
| `/ministries` | Liturgy, music, outreach, CCD, RCIA |
| `/news-events` | News & Events landing page |
| `/news` | Articles and weekly bulletin |
| `/events` | Upcoming events calendar |
| `/membership` | Parish registration form |
| `/gallery` | Photo gallery with lightbox |
| `/more` | Contact, social links, resources |
| `/admin` | Admin dashboard (UI mockup) |

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. (Optional) copy and edit environment variables
cp .env.example .env

# 3. Start the development server
npm run dev    # uses nodemon for auto-reload
# — or —
npm start      # plain node
```

Open <http://localhost:3000> in your browser.

---

## Hosting Options

The site is a plain Node.js/Express application.  
Any platform that can run `npm install && npm start` will work.  
All platforms set the `PORT` environment variable automatically — `config.js` already reads it.

---

### 1. Railway *(recommended – free hobby tier)*

[Railway](https://railway.app) is the easiest zero-config option.

1. Push this repo to GitHub (already done).
2. Go to <https://railway.app> → **New Project** → **Deploy from GitHub repo**.
3. Select `ncc-church-website`.
4. Railway detects the `Procfile` and `package.json` automatically.
5. Click **Deploy** — your site gets a public URL in ~60 seconds.

> **Custom domain:** In Railway → your service → *Settings → Networking → Custom Domain*, add your domain and update your DNS records.

---

### 2. Render *(free static + web service tier)*

[Render](https://render.com) uses the included `render.yaml` for one-click setup.

1. Go to <https://dashboard.render.com> → **New** → **Web Service**.
2. Connect your GitHub account and select this repo.
3. Render reads `render.yaml` and pre-fills all settings.
4. Click **Create Web Service**.

> Free tier spins down after 15 minutes of inactivity and takes ~30 s to wake up. Paid plans ($7/mo) stay always-on.

---

### 3. Heroku *(paid, from $5/mo)*

```bash
# Install the Heroku CLI, then:
heroku create ncc-church-website
git push heroku main
heroku open
```

The included `Procfile` (`web: node server.js`) is all Heroku needs.

---

### 4. Fly.io *(generous free tier, global edge)*

[Fly.io](https://fly.io) uses the included `Dockerfile`.

```bash
# Install flyctl: https://fly.io/docs/hands-on/install-flyctl/
fly auth login
fly launch          # detects Dockerfile, prompts for app name & region
fly deploy
fly open
```

> **Custom domain:** `fly certs create yourdomain.com`

---

### 5. DigitalOcean App Platform *(from $5/mo)*

1. Go to <https://cloud.digitalocean.com/apps> → **Create App**.
2. Connect GitHub and select this repo.
3. DigitalOcean detects the `Dockerfile` automatically.
4. Choose the **Basic** plan ($5/mo) for a small church site.
5. Add your custom domain under **Settings → Domains**.

---

### 6. VPS / Self-hosted (any cloud provider)

Run the site on any Linux server (DigitalOcean Droplet, Linode, Vultr, AWS EC2, etc.).

```bash
# On the server:
git clone https://github.com/fogenyi/ncc-church-website.git
cd ncc-church-website
npm install --omit=dev

# Install PM2 to keep the process alive
npm install -g pm2
pm2 start server.js --name ncc-website
pm2 save
pm2 startup        # auto-start on server reboot
```

Then set up **Nginx** as a reverse proxy:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Use **Certbot** (Let's Encrypt) for free HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the server listens on (set automatically by hosting platforms) |
| `NODE_ENV` | – | Set to `production` on live servers |

Copy `.env.example` to `.env` for local overrides (`.env` is git-ignored).

---

## Quick Comparison

| Platform | Free tier | Custom domain | Ease | Best for |
|---|---|---|---|---|
| **Railway** | ✅ $5 credit/mo | ✅ | ⭐⭐⭐⭐⭐ | Getting started fast |
| **Render** | ✅ (sleeps) | ✅ | ⭐⭐⭐⭐ | Low-traffic sites |
| **Fly.io** | ✅ generous | ✅ | ⭐⭐⭐ | Global performance |
| **Heroku** | ❌ paid | ✅ | ⭐⭐⭐⭐ | Established projects |
| **DigitalOcean** | ❌ $5/mo | ✅ | ⭐⭐⭐ | More control |
| **VPS (self-host)** | ❌ ~$4/mo | ✅ | ⭐⭐ | Full control |

> **Recommendation for a small parish:** Start with **Railway** (free, instant deploy).  
> When ready for a permanent home, move to a **VPS + custom domain** for the most control at lowest long-term cost.
