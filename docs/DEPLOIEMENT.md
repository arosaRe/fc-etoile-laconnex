# Guide de Déploiement - FC Etoile Laconnex

## 🎯 Vue d'ensemble

Ce guide détaille les étapes pour déployer le site web sur l'infrastructure Infomaniak.

## 🏗️ Architecture de déploiement

```
Infrastructure Infomaniak
├── Serveur Node.js (Backend Strapi)
│   ├── Base MySQL managée
│   └── Domaine api.fcetoilelaconnex.ch
└── Hébergement Web (Frontend statique)
    ├── Upload FTP 
    └── Domaine www.fcetoilelaconnex.ch
```

## 📋 Prérequis

### Chez Infomaniak
1. **Serveur Node.js** activé
2. **Base MySQL** créée  
3. **Hébergement Web** configuré
4. **Domaines** pointés correctement :
   - `api.fcetoilelaconnex.ch` → Serveur Node.js
   - `www.fcetoilelaconnex.ch` → Hébergement Web

### En local
1. Accès FTP au compte Infomaniak
2. Code source testé et validé
3. Variables d'environnement préparées

## 🚀 Déploiement Backend (Strapi)

### Étape 1 : Préparation
```bash
cd backend
npm run build
```

### Étape 2 : Configuration production
Créer `.env` de production sur le serveur :

```env
# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=mysql.infomaniak.com
DATABASE_PORT=3306
DATABASE_NAME=votre_db_name
DATABASE_USERNAME=votre_db_user
DATABASE_PASSWORD=votre_db_password
DATABASE_SSL=false

# Strapi
NODE_ENV=production
HOST=0.0.0.0
PORT=3000
APP_KEYS="key1_production,key2_production"
API_TOKEN_SALT=salt_production
ADMIN_JWT_SECRET=admin_jwt_production
TRANSFER_TOKEN_SALT=transfer_salt_production
JWT_SECRET=jwt_production
ENCRYPTION_KEY=encryption_production

# External APIs
TWITTER_BEARER_TOKEN=votre_twitter_token
FRONTEND_URL=https://www.fcetoilelaconnex.ch
```

### Étape 3 : Upload du code
1. **Via Git** (recommandé) :
```bash
git clone https://github.com/votre-repo/fc-etoile-laconnex.git
cd fc-etoile-laconnex/backend
```

2. **Via FTP** (alternatif) :
   - Uploader tout le dossier `backend/`
   - Exclure `node_modules/`

### Étape 4 : Installation et démarrage
```bash
npm install --production
npm run build
npm run start
```

### Étape 5 : Configuration Infomaniak
1. **Variables d'environnement** : Ajouter via panel Infomaniak
2. **Script de démarrage** : `npm run start`
3. **Port** : 3000 (ou selon config Infomaniak)

## 🌐 Déploiement Frontend (Astro)

### Étape 1 : Configuration production
Mettre à jour `frontend/astro.config.mjs` :

```javascript
export default defineConfig({
  output: 'static',
  site: 'https://www.fcetoilelaconnex.ch',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets'
  }
});
```

### Étape 2 : Build production
```bash
cd frontend
npm run build
```

### Étape 3 : Upload FTP
1. **Dossier source** : `frontend/dist/`
2. **Destination** : `/www/` ou `/public_html/` sur Infomaniak
3. **Méthode** : FTP/SFTP via FileZilla ou ligne de commande

```bash
# Exemple avec rsync (si SSH disponible)
rsync -avz --delete dist/ user@ftp.infomaniak.com:/www/
```

### Étape 4 : Configuration Apache/Nginx
Créer `.htaccess` dans le dossier web :

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle client-side routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache headers
<IfModule mod_expires.c>
  ExpiresActive on
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

## 🔧 Configuration DNS

### Chez Infomaniak (ou votre registrar)
```
Type    Nom                          Valeur
A       www.fcetoilelaconnex.ch      IP_serveur_web_infomaniak
CNAME   api.fcetoilelaconnex.ch      serveur_nodejs.infomaniak.com
A       fcetoilelaconnex.ch          IP_serveur_web_infomaniak
```

## ✅ Tests post-déploiement

### Backend
1. **API Health Check** : `GET https://api.fcetoilelaconnex.ch/api/health`
2. **Admin Panel** : `https://api.fcetoilelaconnex.ch/admin`
3. **Content Types** : Vérifier la création via admin
4. **Rate Limiting** : Tester avec plusieurs requêtes rapides

### Frontend
1. **Site Web** : `https://www.fcetoilelaconnex.ch`
2. **Performance** : Lighthouse score > 90
3. **Responsive** : Tests mobile/tablet/desktop
4. **SEO** : Vérifier meta tags

### Intégration
1. **API Calls** : Frontend → Backend
2. **CORS** : Pas d'erreurs cross-origin
3. **Widget ACGF** : Chargement correct
4. **Images** : Tous les assets chargent

## 🔐 Sécurité post-déploiement

### SSL/TLS
- [x] Certificats SSL activés (Infomaniak auto)
- [x] Force HTTPS (.htaccess)
- [x] HSTS headers (Helmet.js)

### Accès
- [x] Admin Strapi : IPs restreintes si possible
- [x] Base MySQL : Accès limité au serveur Node.js
- [x] FTP : Mots de passe forts, 2FA si disponible

## 📊 Monitoring

### Logs à surveiller
1. **Strapi** : Logs applicatifs + erreurs DB
2. **Serveur web** : Logs accès + erreurs 404/500  
3. **MySQL** : Logs de connexion + performance

### Métriques importantes
- Temps de réponse API
- Uptime serveurs
- Utilisation CPU/RAM
- Taille base de données

## 🆘 Dépannage

### Problèmes courants

**Backend ne démarre pas**
```bash
# Vérifier logs
npm run start 2>&1 | tee logs.txt

# Vérifier variables env
echo $DATABASE_HOST

# Test connexion DB
npm run strapi console
```

**Frontend : 404 sur refresh**
- Vérifier `.htaccess` pour client-side routing
- Confirmer upload complet dossier `dist/`

**API inaccessible depuis frontend**
- Vérifier CORS dans `config/server.ts`
- Confirmer URL API dans frontend

**Images manquantes**
- Upload dossier `public/` complet
- Vérifier chemins relatifs/absolus

## 📞 Support

### Contacts
- **Infomaniak Support** : Via panel client
- **Developer** : anthony@example.com
- **Admins site** : didier@fcetoilelaconnex.ch

### Ressources
- [Doc Strapi](https://docs.strapi.io)
- [Doc Astro](https://docs.astro.build)
- [Support Infomaniak](https://www.infomaniak.com/support)

---

**🎯 Checklist déploiement**
- [ ] Backend testé et buildé
- [ ] Frontend testé et buildé  
- [ ] Variables env configurées
- [ ] DNS configuré
- [ ] SSL activé
- [ ] Tests post-déploiement OK
- [ ] Monitoring activé
- [ ] Formation utilisateurs Strapi

*Temps estimé déploiement complet : 2-3 heures*