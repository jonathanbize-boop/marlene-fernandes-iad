# Site Marlène Fernandes — Conseillère immobilière IAD

Site vitrine multipage, statique (HTML/CSS/JS pur, aucun framework). Conçu pour
générer des **mandats** dans le Vaucluse et présenter les services (estimation,
vente, conseil) avec une identité haut de gamme.

---

## 1. Structure du projet

```
/
├── index.html              → Accueil
├── a-propos.html           → À propos / approche
├── services.html           → Vue d'ensemble des services
├── service-estimation.html → Service : estimation (SEO local)
├── service-vente.html      → Service : vente (SEO local)
├── service-conseil.html    → Service : conseil / achat / investissement
├── biens.html              → Annonces + emplacement passerelle IAD
├── avis.html               → Témoignages clients
├── contact.html            → Coordonnées + formulaire d'estimation
├── mentions-legales.html
├── sitemap.xml             → liste des URLs (pour Google)
├── robots.txt
└── assets/
    ├── css/style.css       → feuille de styles unique partagée
    ├── js/main.js          → interactions (menu, formulaire) — chargé en defer
    └── img/                → photo + visuels des biens
```

## 2. Identité visuelle

- **Couleurs** : vert olivaie profond `#2C3A2E` · laiton `#A87B3D` · ivoire chaud `#F7F4EE` · encre `#1B1E19`
- **Typographies** : *Fraunces* (titres, serif éditorial) + *Inter* (corps) — Google Fonts
- **Geste signature** : cadres photo en **arche** (rappel architectural provençal), filets laiton, grain léger
- Tout est piloté par des variables CSS dans `:root` (fichier `assets/css/style.css`) :
  pour changer une couleur sur tout le site, modifiez une seule ligne.

## 3. Intégrer la passerelle IAD (annonces)

Ouvrir **`biens.html`**, chercher le repère :

```html
<!-- ▼▼▼ INTÉGRATION PASSERELLE IAD ▼▼▼ -->
<div class="iad-slot">Widget ou iframe de votre passerelle IAD à intégrer ici</div>
<!-- ▲▲▲ FIN INTÉGRATION PASSERELLE IAD ▲▲▲ -->
```

Remplacer la `<div class="iad-slot">…</div>` par le code fourni par IAD
(widget JavaScript ou `<iframe src="…votre-flux…"></iframe>`). Le reste de la mise
en page s'adapte automatiquement.

## 4. Connecter le formulaire de contact

Le formulaire (`contact.html`) affiche aujourd'hui une **confirmation de démonstration**
(aucun email n'est réellement envoyé). Pour le rendre opérationnel, deux options simples :

- **Formspree** (gratuit, sans serveur) : créer un compte sur formspree.io, puis
  remplacer `<form class="form" data-mock …>` par
  `<form class="form" action="https://formspree.io/f/VOTRE_ID" method="POST">`
  (retirer l'attribut `data-mock`).
- Ou tout autre service d'envoi d'email / l'outil de contact fourni par IAD.

---

## 5. Mise en ligne (à faire UNE fois par le commercial)

> Ces étapes nécessitent vos comptes. Vos identifiants ne sont jamais saisis à votre place.
> ⚠️ Le projet Vercel **« site »** est déjà lié à ce dossier (`.vercel/`). Un `vercel --prod`
> suffit donc à mettre à jour le site existant (`marlene-fernandes.vercel.app`).

### A. Mise à jour rapide du site déjà en ligne

```bash
npm i -g vercel      # une seule fois
cd site
vercel --prod        # déploie en production
```

### B. Première mise en ligne / nouveau projet (si besoin)

1. **GitHub** (versionnement, facultatif mais recommandé) :
   ```bash
   git init && git add . && git commit -m "Site Marlène Fernandes"
   # créer le dépôt sur github.com puis :
   git remote add origin https://github.com/VOTRE-COMPTE/marlene-fernandes.git
   git push -u origin master
   ```
2. **Vercel** : `npm i -g vercel`, puis `vercel` dans le dossier `site`, suivre
   l'authentification. Projet statique → aucune configuration nécessaire.

### C. Nom de domaine personnalisé (recommandé pour le SEO et l'image)

Acheter un domaine (ex. `marlene-fernandes-immobilier.fr`) et le rattacher dans
Vercel → Settings → Domains. **Si le domaine change, remplacer l'URL**
`https://marlene-fernandes.vercel.app` partout (balises canonical, Open Graph,
JSON-LD et `sitemap.xml` / `robots.txt`).

### D. Référencement Google (après mise en ligne)

1. Créer/valider la **fiche Google Business Profile** (essentiel en local).
2. Inscrire le site dans **Google Search Console** et y soumettre `sitemap.xml`.

---

## 6. ✅ À fournir / valider par Marlène (pour le webdesigner)

**Infos à confirmer**
- [ ] **Email professionnel** : `marlene.fernandes@iadfrance.fr` est une hypothèse —
      confirmer l'adresse réelle (utilisée dans le footer, le contact et les JSON-LD).
- [ ] **Adresse / commune affichée** : actuellement « Sérignan-du-Comtat (84830) ».
      Le code postal 84830 est à vérifier.
- [ ] **Horaires** : affichés « 7j/7, 8h–20h » dans les données SEO — ajuster si besoin.
- [ ] **Téléphone** `07 78 78 42 61` : confirmé par la fiche, OK.

**Visuels à fournir (remplacent les placeholders / améliorent le rendu)**
- [ ] **Portrait HD de Marlène** : `assets/img/marlene.png` est en basse définition
      (≈400 px). Fournir une photo nette ≥ 1200 px de large pour le hero et la page « À propos ».
- [ ] **Logo** (si existant) : aucun logo fourni → un *wordmark* « M » + nom a été créé
      typographiquement. Remplacer si un logo officiel existe.
- [ ] **Photos de biens / Provence** supplémentaires : les visuels actuels proviennent
      des annonces existantes. Des photos de maisons de standing renforceraient le côté haut de gamme.
- [ ] Convertir idéalement les images en **.webp** et les redimensionner (≤ 1600 px) pour le score Lighthouse.

**Contenu à enrichir**
- [ ] **Avis clients** (`avis.html`) : les 6 témoignages sont des **exemples réalistes
      à remplacer** par de vrais avis (Google Business). Ne pas publier de faux avis.
- [ ] Réseaux sociaux (Instagram / Facebook) : ajouter les liens dans le footer si existants.
- [ ] Passerelle IAD : voir §3.

---

*Réalisé avec une direction artistique sur-mesure — vert olivaie & laiton, arches provençales.*
