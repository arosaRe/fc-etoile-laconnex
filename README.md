# FC Etoile Laconnex - Site Web Officiel

## 🎯 Vue d'ensemble

Refonte complète du site web du **FC Etoile Laconnex**, club de football suisse fondé en 1943. 
Le projet comprend un CMS moderne (Strapi) et un frontend performant (Astro + Tailwind CSS).

## 🏗️ Architecture

```
fc-etoile-laconnex/
├── backend/              # Strapi CMS v4
├── frontend/             # Astro + Tailwind CSS
├── docs/                 # Documentation
└── README.md
```

### Stack Technique
- **Backend** : Strapi v4 (headless CMS) + Node.js + MySQL
- **Frontend** : Astro + Tailwind CSS
- **Déploiement** : 
  - Backend Strapi : Hébergement Node.js Infomaniak
  - Frontend : Build statique → FTP Infomaniak
- **Base de données** : MySQL (service managé Infomaniak)

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm ou yarn
- MySQL (pour production) ou SQLite (développement)

### Installation

1. **Backend Strapi**
```bash
cd backend
npm install
cp .env.example .env
# Configurer les variables dans .env
npm run develop
```

2. **Frontend Astro**
```bash
cd frontend
npm install
npm run dev
```

### URLs de développement
- **Frontend** : http://localhost:4321
- **Strapi Admin** : http://localhost:1337/admin

## 📊 Content Types Strapi

### Collections
- **Actualité** (`actualite`) - Actualités manuelles et tweets
- **Équipe** (`equipe`) - Les 13 équipes du club
- **Sponsor** (`sponsor`) - Sponsors et partenaires
- **Membre Comité** (`membre-comite`) - Comité directeur
- **Page** (`page`) - Pages de contenu statique
- **Étoile** (`etoile`) - Vedettes du club

### Single Types
- **Configuration** (`configuration`) - Configuration générale

## 🎨 Design & Identité

### Couleurs
- **Grenat principal** : `#8B1538`
- **Grenat sombre** : `#6B0F28`  
- **Grenat clair** : `#A63D5C`

### Principe de design
- Moderne et épuré avec beaucoup d'espace blanc
- Mobile-first responsive
- Typographie Inter
- Grenat en touches d'accent
- Animations subtiles

## 🔌 Fonctionnalités

### ✅ Implémentées
- [x] Backend Strapi complet avec 7 content-types
- [x] Sécurité renforcée (JWT, CORS, rate limiting, Helmet)
- [x] Frontend Astro avec composants UI
- [x] Page d'accueil complète avec toutes les sections
- [x] Design responsive et moderne
- [x] Intégration widget ACGF
- [x] Architecture Twitter API (service préparé)

### 🚧 À implémenter
- [ ] Pages équipes (liste + détail)
- [ ] Pages actualités (liste + détail)
- [ ] Page Histoire avec timeline
- [ ] Page Étoiles du club
- [ ] Page Club des 100
- [ ] Page Gestion (comité + infos)
- [ ] Page Contact avec formulaire
- [ ] Intégration Twitter complète
- [ ] Migration contenu existant
- [ ] Optimisations SEO et performance

## 🔒 Sécurité

### Backend
- ✅ JWT avec secrets forts
- ✅ Bcrypt pour hash mots de passe
- ✅ Rate limiting (100 req/min par IP)
- ✅ CORS strict (frontend uniquement)
- ✅ Helmet.js (headers sécurisés)
- ✅ Validation et sanitization inputs
- ✅ Protection uploads

### Frontend
- ✅ Content Security Policy
- ✅ Pas de secrets exposés
- 🚧 reCAPTCHA sur formulaires (à ajouter)

## 📱 Variables d'environnement

### Backend (.env)
```env
# Database
DATABASE_CLIENT=mysql  # ou sqlite pour dev
DATABASE_HOST=localhost
DATABASE_NAME=fc_etoile_db
DATABASE_USERNAME=user
DATABASE_PASSWORD=password

# Strapi
APP_KEYS=key1,key2
JWT_SECRET=secret
ADMIN_JWT_SECRET=secret

# APIs externes
TWITTER_BEARER_TOKEN=token
FRONTEND_URL=https://www.fcetoilelaconnex.ch
```

## 🚀 Déploiement

### Développement
```bash
# Terminal 1 - Backend
cd backend && npm run develop

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

### Production

**Backend Strapi (Infomaniak Node.js)**
```bash
cd backend
npm install --production
npm run build
npm run start
```

**Frontend Astro (FTP Infomaniak)**
```bash
cd frontend
npm run build
# Upload dossier dist/ vers serveur web
```

## 📚 Documentation

- [`backend/README.md`](backend/README.md) - Documentation technique Strapi
- [`frontend/README.md`](frontend/README.md) - Documentation technique Astro
- Voir `.env.example` pour la configuration complète

## 🎯 Roadmap

### Phase 1 : Fondations ✅
- Backend Strapi configuré
- Frontend Astro initialisé
- Page d'accueil fonctionnelle

### Phase 2 : Pages Core (en cours)
- Pages équipes avec filtres
- Pages actualités
- Intégration Twitter

### Phase 3 : Contenu & SEO
- Migration contenu existant
- Optimisations performance
- SEO meta tags complets

### Phase 4 : Déploiement
- Configuration production
- Tests cross-browser
- Formation utilisateurs

## 👥 Équipe

- **Développement** : Assistant IA Claude
- **Validation** : Anthony (Lead Developer)
- **Utilisateurs finaux** : Didier & Flavien (Admins Strapi)

## 🆘 Support

Pour toute question technique :
1. Consulter les README spécifiques (`backend/` et `frontend/`)
2. Vérifier les variables d'environnement
3. Consulter les logs Strapi/Astro

---

**🎨 Design** : Moderne, épuré, mobile-first avec grenat (#8B1538) en accent  
**🔒 Sécurité** : JWT, rate limiting, CORS strict, validation inputs  
**⚡ Performance** : Build statique, lazy loading, optimisations images  

*Depuis 1943, le cœur de la Champagne est grenat* ⭐