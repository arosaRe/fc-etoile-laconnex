# Guide Utilisateur - Administration Strapi

## 👥 Destinataires
Ce guide est destiné à Didier et Flavien pour administrer le contenu du site web via Strapi.

## 🔐 Connexion à l'administration

### URL d'accès
- **Développement** : http://localhost:1337/admin
- **Production** : https://api.fcetoilelaconnex.ch/admin

### Identifiants
Les identifiants vous seront communiqués séparément pour des raisons de sécurité.

## 📊 Vue d'ensemble du panneau

### Menu principal (gauche)
- **Content Manager** : Gestion du contenu
- **Media Library** : Gestion des images/fichiers
- **Settings** : Paramètres (accès restreint)

### Types de contenu disponibles
1. **Actualités** - Gérer les news du club
2. **Équipes** - Les 13 équipes du club
3. **Sponsors** - Partenaires et sponsors
4. **Membres du Comité** - Comité directeur
5. **Pages** - Contenu statique (Histoire, etc.)
6. **Étoiles** - Vedettes du club
7. **Configuration** - Paramètres généraux

## 📝 Gestion des Actualités

### Créer une nouvelle actualité

1. **Accès** : Content Manager → Actualités → Create new entry
2. **Champs obligatoires** :
   - **Titre** : Maximum 255 caractères
   - **Date de publication** : Date/heure de publication
   - **Publié** : Cocher pour rendre visible sur le site

3. **Champs optionnels** :
   - **Contenu** : Texte riche avec mise en forme
   - **Image** : Photo d'illustration (JPG, PNG max 2MB)
   - **Auteur** : Nom de l'auteur

4. **Slug** : Généré automatiquement depuis le titre

### Bonnes pratiques
- ✅ **Titre accrocheur** : Maximum 60 caractères pour SEO
- ✅ **Image optimisée** : 1200x630px recommandé, max 2MB
- ✅ **Contenu structuré** : Utiliser titres H2, H3 dans l'éditeur
- ✅ **Date cohérente** : Respecter chronologie des événements

### Publication
- **Brouillon** : Publié = Non → Invisible sur le site
- **Publié** : Publié = Oui → Visible immédiatement

## 👥 Gestion des Équipes

### Ajouter/modifier une équipe

1. **Accès** : Content Manager → Équipes
2. **Informations de base** :
   - **Nom** : Ex: "Seniors 1ère équipe"
   - **Catégorie** : Seniors, Juniors, Féminines, Vétérans, École de foot
   - **Ordre** : Numéro pour tri d'affichage

3. **Staff technique** :
   - **Entraîneur principal** + contact
   - **Entraîneur assistant** + contact

4. **Informations pratiques** :
   - **Horaires d'entraînement** : Texte riche
   - **Lien ACGF** : URL du classement officiel
   - **Description** : Présentation de l'équipe

5. **Photos** : Galerie d'images de l'équipe

### Ordre d'affichage
Les équipes sont triées par le champ "Ordre" :
- 1 = Seniors première
- 2 = Seniors deuxième  
- 10 = Juniors A
- etc.

## 🤝 Gestion des Sponsors

### Ajouter un sponsor

1. **Champs requis** :
   - **Nom** : Nom du sponsor
   - **Logo** : Image PNG/JPG transparente recommandée
   
2. **Champs optionnels** :
   - **Lien site** : URL du site web
   - **Ordre** : Position d'affichage
   - **Actif** : Oui/Non pour affichage

### Conseils logos
- ✅ **Format** : PNG avec fond transparent
- ✅ **Taille** : 300x150px recommandé
- ✅ **Qualité** : Haute résolution pour netteté
- ❌ **Éviter** : Logos pixellisés ou déformés

## 🏛️ Gestion du Comité

### Ajouter un membre

1. **Informations personnelles** :
   - **Nom complet** : Prénom et nom
   - **Fonction** : Président, Secrétaire, etc.
   
2. **Contact** (optionnel) :
   - **Téléphone** : Format +41 XX XXX XX XX
   - **Email** : Adresse email valide
   
3. **Affichage** :
   - **Ordre** : Position dans la liste
   - **Photo** : Portrait officiel (optionnel)

### Ordre hiérarchique suggéré
1. Président
2. Vice-président  
3. Secrétaire
4. Trésorier
5. Responsable technique
6. Membres

## 📄 Gestion des Pages

### Utilisation
Pour le contenu statique comme :
- Histoire du club
- Règlements
- Infos pratiques
- Club des 100

### Créer une page

1. **Titre** : Nom de la page
2. **Slug** : URL générée automatiquement
3. **Contenu** : Éditeur riche complet
4. **Meta description** : Pour SEO (160 char max)
5. **Images** : Galerie de photos associées

## ⭐ Gestion des Étoiles

### Ajouter une personnalité

1. **Identité** :
   - **Prénom** et **Nom**
   - **Ordre** : Position d'affichage

2. **Contenu** :
   - **Description** : Biographie, parcours
   - **Photo principale** : Portrait
   - **Photos carrière** : Galerie d'images

## ⚙️ Configuration Générale

### Paramètres du site
Accessible via "Configuration" :

- **Nom du club** : FC Etoile Laconnex
- **Adresse complète** : Stade, rue, code postal
- **Contacts** : Téléphone, email principal
- **IBAN** : Pour dons et cotisations
- **Réseaux sociaux** : URLs Facebook, Instagram, Twitter
- **Liens externes** : Buvette, boutique
- **Widget ACGF** : Code iframe des matchs
- **Texte d'accueil** : Message page d'accueil

## 📱 Gestion des Médias

### Bibliothèque multimédia

1. **Upload** : Glisser-déposer ou cliquer
2. **Formats acceptés** : 
   - Images : JPG, PNG, WebP
   - Documents : PDF
   - Taille max : 10MB par fichier

3. **Organisation** :
   - Créer des dossiers par thème
   - Nommer clairement les fichiers
   - Supprimer les doublons

### Optimisation images
- ✅ **Compression** : Utiliser outils comme TinyPNG
- ✅ **Résolution** : Adapter à l'usage (web = 72dpi)
- ✅ **Nommage** : descriptif (ex: equipe-seniors-2024.jpg)

## 🔍 Recherche et Filtres

### Rechercher du contenu
- **Barre de recherche** : En haut de chaque liste
- **Filtres** : Par statut, date, catégorie
- **Tri** : Cliquer sur en-têtes de colonnes

### Filtres utiles
- **Actualités publiées** : Publié = Oui
- **Équipes par catégorie** : Seniors, Juniors, etc.
- **Sponsors actifs** : Actif = Oui

## 📊 Workflow de publication

### Processus recommandé

1. **Préparation** :
   - Rédiger contenu dans Word/Google Docs
   - Optimiser images
   - Vérifier orthographe

2. **Saisie Strapi** :
   - Créer en mode brouillon
   - Ajouter tous les champs
   - Prévisualiser

3. **Validation** :
   - Relire une dernière fois
   - Vérifier liens et images
   - Publier

4. **Vérification** :
   - Contrôler affichage sur site web
   - Tester sur mobile
   - Partager si besoin

## 🆘 Dépannage

### Problèmes courants

**Impossible de se connecter**
- Vérifier URL : https://api.fcetoilelaconnex.ch/admin
- Contrôler identifiants
- Vider cache navigateur

**Image ne s'affiche pas**
- Vérifier format (JPG, PNG)
- Contrôler taille (max 10MB)
- Renommer sans espaces/accents

**Contenu pas visible sur site**
- Vérifier "Publié" = Oui
- Attendre 5 minutes (cache)
- F5 sur navigateur

**Texte mal formaté**
- Utiliser éditeur riche Strapi
- Éviter copier-coller depuis Word
- Préférer HTML simple

### Support technique
En cas de problème persistant :
- Email : support@fcetoilelaconnex.ch
- Décrire précisément le problème
- Joindre capture d'écran si possible

## 📋 Checklist Mensuelle

### Maintenance recommandée
- [ ] Vérifier actualités anciennes à archiver
- [ ] Contrôler liens sponsors (sites morts)
- [ ] Nettoyer bibliothèque média (doublons)
- [ ] Vérifier infos comité à jour
- [ ] Tester formulaires contact

### Bonnes pratiques
- ✅ **Régularité** : Actualités 1-2 fois/semaine
- ✅ **Qualité** : Photos haute résolution
- ✅ **Cohérence** : Style rédactionnel uniforme
- ✅ **Réactivité** : Publier rapidement après événements

---

**📞 Support & Formation**
- Formation initiale : 1h en visio
- Support email inclus
- Mise à jour guide selon besoins

*"Le contenu de qualité fait la différence !"* 📝