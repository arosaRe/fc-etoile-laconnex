# Backend Strapi - FC Etoile Laconnex

## 🚀 Démarrage rapide

### Installation
```bash
npm install
```

### Configuration
1. Copier `.env.example` vers `.env`
2. Configurer les variables d'environnement selon votre setup

### Développement
```bash
npm run develop
```
Démarre Strapi en mode développement sur http://localhost:1337

### Production
```bash
npm run build
npm run start
```

## 📊 Content Types créés

### Collections
- **Actualité** (`actualite`) - Actualités manuelles et tweets
- **Équipe** (`equipe`) - Les 13 équipes du club
- **Sponsor** (`sponsor`) - Sponsors et partenaires
- **Membre Comité** (`membre-comite`) - Comité directeur
- **Page** (`page`) - Pages de contenu statique
- **Étoile** (`etoile`) - Vedettes du club

### Single Types
- **Configuration** (`configuration`) - Configuration générale du site

## 🔌 API Endpoints personnalisés

### Twitter Integration
- `GET /api/twitter/latest` - Derniers tweets
- `GET /api/news/mixed` - Actualités mixtes (manuelles + Twitter)

## 🔒 Sécurité configurée

- ✅ Helmet.js (headers sécurisés)
- ✅ Rate limiting (100 req/min par IP)
- ✅ CORS strict (frontend uniquement)
- ✅ JWT avec secrets forts
- ✅ Validation des uploads

## 🗄️ Base de données

### Développement
SQLite (par défaut) - aucune configuration requise

### Production
MySQL - configurer les variables :
```env
DATABASE_CLIENT=mysql
DATABASE_HOST=your_host
DATABASE_PORT=3306
DATABASE_NAME=fc_etoile_db
DATABASE_USERNAME=your_user
DATABASE_PASSWORD=your_password
```

## 🚀 Déploiement Infomaniak

1. Créer serveur Node.js sur Infomaniak
2. Créer base MySQL
3. Upload du code
4. Configurer variables `.env` en production
5. `npm install && npm run build && npm start`

## 📱 Variables d'environnement requises

Voir `.env.example` pour la liste complète.

### Essentielles
- `APP_KEYS` - Clés d'encryption Strapi
- `JWT_SECRET` - Secret JWT
- `ADMIN_JWT_SECRET` - Secret admin
- `DATABASE_*` - Configuration base de données

### Optionnelles
- `TWITTER_BEARER_TOKEN` - Pour l'intégration Twitter
- `FRONTEND_URL` - URL du frontend pour CORS
