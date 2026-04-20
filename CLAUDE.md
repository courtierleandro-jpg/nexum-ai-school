# 🧠 CLAUDE.md — Mémoire vivante du projet

> **Instructions pour Claude** :  
> Ce fichier est ta mémoire persistante. Tu dois le lire **au début de chaque session** et le mettre à jour **à la fin de chaque session** en suivant le protocole défini dans la section `## 🔄 Protocole de session`. Ne jamais supprimer l'historique existant. Toujours ajouter, jamais écraser.

---

## ⚠️ COLLABORATION — À LIRE EN PRIORITÉ

> Ce projet est développé par **deux personnes en parallèle**. Avant toute modification, prends en compte les règles suivantes :

| Collaborateur | Rôle | GitHub |
|---|---|---|
| **Leandro Domingos Lourenco** | Porteur du projet, vision produit, contenu pédagogique | `@courtierleandro-jpg` |
| **Hhhsimo** | Développement technique, architecture, dashboard | `@hhhsimo` |

### 🚨 Règles de collaboration strictes

1. **Ne jamais écraser `index.html` (landing page)** sans validation explicite de Leandro — c'est sa page de vente, elle est live en production.
2. **Ne jamais modifier `make-scenario-1.json`** sans vérifier avec les deux collaborateurs — c'est le scénario d'automatisation qui sera importé dans Make.com.
3. **Ne jamais pusher sur GitHub sans demande explicite** de l'un ou l'autre collaborateur.
4. **Toujours préciser quel fichier tu modifies** avant de le faire — en cas de doute, demander confirmation.
5. **`dashboard.html` est le fichier principal en développement actif** — c'est là que les modifications sont les plus fréquentes.
6. **Les fichiers `.md` de documentation** (brevo, discord, heygen, make) appartiennent au périmètre de Leandro — ne pas les modifier sans raison.
7. **Si les deux collaborateurs donnent des instructions contradictoires**, signaler le conflit explicitement et demander arbitrage.

---

## 📋 Identité du projet

| Champ | Valeur |
|---|---|
| **Nom du projet** | `Nexum AI School` |
| **Type** | `Formation en ligne · Site statique · Automatisations` |
| **Porteur** | `Leandro Domingos Lourenco — entrepreneur Île-de-France` |
| **Co-développeur** | `Hhhsimo — développement technique dashboard` |
| **Statut** | `🟡 En cours` |
| **Démarré le** | `2026-04-08` |
| **Dernière mise à jour** | `2026-04-20 — Session 5` |

---

## 🎯 Objectif du projet

```
Nexum AI School est une formation en ligne sur Claude & l'IA, 100% automatisée.
8 modules, 30 leçons pratiques, accessible sans code.
Vendue 97€ (Standard) ou 197€ (Premium) via Gumroad, hébergée sur GitHub Pages.
L'objectif est d'atteindre 22 ventes/mois (~1 900€ net) grâce à une stack gratuite
(GitHub Pages, Gumroad, Gmail/Make.com, Discord).
```

---

## 🏗️ Architecture

```
Acheteur (Gumroad — courtierleandro)
    ↓ Webhook automatique → Make.com (scénario ON ✅)
    ↓ → Email de bienvenue Gmail avec clé unique (NEXUM-{sale_id})
    ↓ → Création membre dans Firebase Realtime Database
    ↓ → [futur] Rôle Discord automatique (nécessite Discord ID de l'élève)

Espace membre (dashboard.html — GitHub Pages)
    ↓ Login par clé unique (NEXUM-{sale_id})
    ↓ Vérification clé dans Firebase → plan Standard ou Premium
    ↓ 30 leçons texte interactives (QCM + freetext)
    ↓ Progression sauvegardée dans Firebase (per-user, multi-device)
    ↓ Module 08 verrouillé pour Standard → redirect Gumroad Premium
    ↓ Discord communauté (catégorie NEXUM AI SCHOOL)

Firebase Realtime Database
    ↓ Collection : members/{NEXUM-sale_id}
    ↓ Champs : plan, email, done[], open[], updated_at
    ↓ Accès public en lecture/écriture (test mode)

Discord (serveur Nexum existant — catégorie NEXUM AI SCHOOL)
    ↓ Bot ARIA (réponses prédéfinies, tourne en local pour l'instant)
    ↓ #aria-assistant (questions formation)
    ↓ #vip-ai-school (Premium uniquement)
```

---

## 🗂️ Structure des fichiers clés

```
nexum-ai-school/
├── index.html                  ← Landing page (live GitHub Pages) ✅
├── dashboard.html              ← Espace membre post-paiement ✅
├── make-scenario-1.json        ← Scénario Make.com (import direct)
├── CLAUDE.md                   ← ce fichier
├── bot/
│   ├── bot.js                  ← Bot ARIA Discord (réponses prédéfinies)
│   └── package.json            ← dépendances discord.js
└── docs/
    ├── discord-integration.md  ← Config Discord complète + IDs + hébergement bot
    ├── brevo-email-sequence.md ← Séquence 7 emails J0→J14
    ├── make-full-scenario.md   ← Documentation scénarios Make
    ├── heygen-30-lessons-plan.md ← Plan 30 leçons
    └── discord-setup.md        ← Guide setup serveur Discord
```

> ⚠️ **Fichiers sensibles / à ne pas toucher** :
> - Ne jamais commiter de clés API ou tokens dans ce repo (public)
> - `make-scenario-1.json` — contient la structure des webhooks
> - `DISCORD_BOT_TOKEN` — ne jamais commiter, stocker en variable d'env uniquement

---

## 🛠️ Stack technique

| Couche | Techno | Version |
|---|---|---|
| Frontend | HTML · CSS · JS vanilla | — |
| Hosting | GitHub Pages | — |
| Paiement | Gumroad (`courtierleandro`) | — |
| Email | Gmail via Make.com | — |
| Automation | Make.com | — |
| Communauté | Discord (serveur Nexum existant) | — |
| Bot Discord | discord.js (tourne en local) | 14.x |
| Base de données | Firebase Realtime Database | — |
| Auth | Clés uniques Gumroad (NEXUM-{sale_id}) | — |

---

## ⚙️ Variables d'environnement requises

```env
# Gumroad
GUMROAD_STANDARD=https://courtierleandro.gumroad.com/l/ckcrul
GUMROAD_PREMIUM=https://courtierleandro.gumroad.com/l/lcwubf

# Make.com
MAKE_WEBHOOK_URL=https://hook.eu1.make.com/zm2u20jofmqjxcvcn5mevn4sbfiuckjh

# Discord
DISCORD_INVITE=              # à renseigner
DISCORD_GUILD_ID=1389194889379446874
DISCORD_ROLE_ELEVE=1493236518201065604
DISCORD_ROLE_PREMIUM=1493237129545912340
DISCORD_BOT_TOKEN=           # NE PAS COMMITER — stocker en variable d'env uniquement

# Firebase Realtime Database
FIREBASE_DB_URL=https://ia-school-83571-default-rtdb.europe-west1.firebasedatabase.app
FIREBASE_SECRET=             # NE PAS COMMITER — JlMmeYzc... (stocker en local uniquement)
FIREBASE_PROJECT_ID=la-school-83571

# Clés admin dashboard (NE PAS COMMITER)
ADMIN_KEY_PREMIUM=NEXUM-ADMIN-2026-PREMIUM
ADMIN_KEY_STANDARD=NEXUM-ADMIN-2026-STANDARD
```

---

## 🚀 Commandes essentielles

```bash
# Cloner le repo
git clone https://github.com/courtierleandro-jpg/nexum-ai-school.git

# Voir en local (ouvrir directement dans le navigateur)
open index.html
open dashboard.html

# Lancer le bot ARIA en local
cd bot && DISCORD_BOT_TOKEN=<token> node bot.js

# Push vers GitHub Pages
git add .
git commit -m "feat: description"
git push origin main
# → déploiement automatique sur https://courtierleandro-jpg.github.io/nexum-ai-school
```

---

## 📌 Règles & conventions du projet

- [x] Stack 100% statique — pas de backend, pas de Node, pas de build
- [x] Tout le JS est vanilla (pas de framework)
- [x] Branding strict : #040407 · #00E5FF · #FF3CAC · #7B5EA7 · Syne 800 · Space Mono · DM Sans
- [x] Ne jamais commiter de clés API ou tokens dans ce repo (public)
- [x] Commits en français, préfixe conventionnel : `feat:` `fix:` `style:` `docs:`
- [x] La progression des élèves est en localStorage (pas de BDD)
- [x] Module 08 (Prompt Engineering Avancé) = Premium uniquement

---

## 🔗 Liens utiles

| Ressource | URL |
|---|---|
| Repo GitHub | `https://github.com/courtierleandro-jpg/nexum-ai-school` |
| Landing page (prod) | `https://courtierleandro-jpg.github.io/nexum-ai-school` |
| Dashboard (prod) | `https://courtierleandro-jpg.github.io/nexum-ai-school/dashboard.html` |
| Gumroad Standard | `https://courtierleandro.gumroad.com/l/ckcrul` |
| Gumroad Premium | `https://courtierleandro.gumroad.com/l/lcwubf` |
| Make.com Webhook | `https://hook.eu1.make.com/zm2u20jofmqjxcvcn5mevn4sbfiuckjh` |
| Notion workspace | `https://www.notion.so/33b9526165a181b7ab4ed16bb904b4fd` |

---

## 🔐 Système d'authentification

### Comment ça marche (tunnel complet)

```
1. Acheteur paie sur Gumroad
2. Gumroad déclenche le webhook → Make.com
3. Make.com :
   a. Crée un document dans Firebase : members/NEXUM-{sale_id}
      → champs : plan, email, done[], open[]
   b. Envoie un email Gmail avec la clé NEXUM-{sale_id} et le lien dashboard
4. Acheteur clique le lien → dashboard.html
5. Dashboard affiche la page de login
6. Acheteur entre sa clé → vérification dans Firebase
7. Si clé valide → accès accordé avec le bon plan (Standard ou Premium)
8. Progression sauvegardée dans Firebase à chaque leçon terminée
```

### Clés d'accès

| Clé | Plan | Usage |
|-----|------|-------|
| `NEXUM-{sale_id}` | Standard ou Premium | Générée automatiquement par Make.com |
| `NEXUM-ADMIN-2026-PREMIUM` | Premium | Accès admin (Hhhsimo + Leandro) |
| `NEXUM-ADMIN-2026-STANDARD` | Standard | Accès admin pour tester |

> ⚠️ Les clés admin ne sont pas stockées dans Firebase — elles sont hardcodées dans dashboard.html. Ne jamais les partager publiquement.

### Structure Firebase

```
members/
└── NEXUM-{sale_id}/
    ├── plan: "standard" | "premium"
    ├── email: "acheteur@email.com"
    ├── done: ["01.01", "01.02", ...]   ← leçons terminées
    ├── open: [1, 2, ...]               ← modules ouverts dans sidebar
    └── updated_at: timestamp
```

### Make.com — URL Firebase (HTTP module)

```
URL    : https://ia-school-83571-default-rtdb.europe-west1.firebasedatabase.app/members/NEXUM-{{1.sale_id}}.json?auth=<SECRET>
Method : PATCH
Body   : { "plan": "standard", "email": "{{1.email}}", "done": [], "open": [1] }
```

---

## 🧩 Contexte métier important

```
- Leandro gère le produit, Hhhsimo gère le technique.
- La stack doit rester 100% gratuite ou quasi-gratuite au démarrage.
- Le seuil de viabilité est 8 ventes/mois (~700€ net).
- Objectif salaire : 22 ventes/mois (~1 900€ net).
- Les cours sont en format texte interactif (pas de vidéos HeyGen pour l'instant).
- Le serveur Discord Nexum existe déjà : catégorie NEXUM AI SCHOOL ajoutée.
- Bot ARIA tourne en local pour l'instant — à héberger sur Glitch ou Fly.io quand prêt.
- Make.com gère l'email de bienvenue automatique après achat Gumroad.
```

---

## 🐛 Bugs connus / Points de vigilance

| # | Description | Statut |
|---|---|---|
| 1 | Bot ARIA tourne en local (Mac) — s'arrête si le Mac dort | 🟡 En cours |
| 2 | Attribution rôle Discord non automatisée — nécessite Discord ID de l'élève | 🔴 Ouvert |
| 3 | Brevo non configuré — email via Gmail/Make pour l'instant | 🟡 Acceptable |

---

## ✅ Décisions techniques prises

| Date | Décision | Raison |
|---|---|---|
| 2026-04-08 | Stack 100% statique (GitHub Pages) | Zéro coût serveur, déploiement immédiat |
| 2026-04-08 | Gumroad pour le paiement | 0€ fixe + 10% commission, pas de compte Stripe |
| 2026-04-08 | Progression en localStorage | Pas de BDD nécessaire pour MVP |
| 2026-04-13 | dashboard.html = espace membre | Page dédiée post-paiement, même branding |
| 2026-04-13 | Module 08 verrouillé Standard | Différenciation valeur Premium |
| 2026-04-13 | Cours en texte interactif (pas HeyGen) | Livrable immédiat, pas besoin de vidéos |
| 2026-04-13 | Bot ARIA sans clé Claude API | Réponses prédéfinies suffisantes pour MVP |
| 2026-04-13 | Email bienvenue via Gmail + Make.com | Brevo non configuré, Gmail fonctionne immédiatement |
| 2026-04-13 | Auth par clé unique Firebase | 1 clé = 1 membre, progression per-user |
| 2026-04-13 | Firebase Realtime Database (pas Firestore) | API REST simple, auth par secret token, compatible Make.com |

---

---

# 🔄 Protocole de session

## Instructions pour Claude — À lire et exécuter obligatoirement

### 📥 DÉBUT DE SESSION
1. Lire ce fichier `CLAUDE.md` en entier
2. Identifier la section `## 📅 Historique des sessions` et noter la dernière session
3. Informer l'utilisateur : *"J'ai lu le CLAUDE.md. Dernière session : [DATE]. Voici ce qui avait été fait : [résumé 2 lignes]."*

### 📤 FIN DE SESSION
Quand l'utilisateur dit `"fin de session"`, `"update CLAUDE"`, `"log session"` ou similaire :

1. **Générer automatiquement** le bloc de session (voir format ci-dessous)
2. **Présenter le brouillon** à l'utilisateur pour validation
3. **Attendre confirmation** (`"ok"`, `"valide"`, `"c'est bon"`)
4. **Écrire le bloc** dans la section `## 📅 Historique des sessions`
5. Mettre à jour le champ `Dernière mise à jour` en haut du fichier

### 📝 Format du bloc de session

```markdown
### Session [NUMERO] — [DATE]
**Durée estimée** : [x]h  
**Objectif de la session** : [1 phrase]

**✅ Réalisé :**
- [action concrète 1]
- [action concrète 2]
- ...

**🔧 Modifié / Créé :**
- `[fichier ou composant]` — [ce qui a changé]

**⚠️ Points en suspens :**
- [ce qui reste à faire ou bloquer]

**💡 Décisions prises :**
- [décision technique ou product importante]

---
```

---

## 📅 Historique des sessions

> Toutes les sessions sont archivées ici. Ne jamais supprimer. Ajouter au-dessus (la plus récente en premier).

<!-- LES SESSIONS S'AJOUTENT ICI -->

### Session 5 — 2026-04-20
**Durée estimée** : 1h  
**Objectif de la session** : Correction bug MODULES + redesign complet interface ARIA

**✅ Réalisé :**
- Correction du bug "undefined" sur toutes les leçons et la sidebar : `MODULES` dans `data-exercises.js` avait été simplifié (array de strings) lors de la refacto Session 4, alors que `app.js` et `aria-exercise-runner.js` attendent des objets complets avec `title`, `dur`, `code`, `premium`
- Restauration de la définition complète de `MODULES` depuis le git history (commit `1ed5e5a`)
- Redesign complet de l'interface ARIA exercise runner : layout centré, barre de progression full-width, topbar propre, carte exercice aérée, boutons VRAI/FAUX redesignés en vert/rose

**🔧 Modifié / Créé :**
- `js/data-exercises.js` — `MODULES` restauré avec objets complets (id, code, title, dur, lessons[], premium)
- `css/dashboard.css` — section ARIA entièrement réécrite (~130 lignes) : `.ar-rail`, `.ar-body`, `.ar-ex-badge`, TF/QCM/textarea/matching/ranking redesignés
- `js/aria-exercise-runner.js` — HTML de `_renderAR` et `_arComplete` refactorisés : ajout `ar-rail`, `ar-body` wrapper centré, `ar-topbar-center`, suppression des classes orphelines

**⚠️ Points en suspens :**
- Tester les types d'exercice moins fréquents en navigation réelle (matching, ranking, before/after)
- Vérifier la progression Firebase se sauvegarde correctement après le runner
- Module 08 (Premium) : vérifier le lock pour les comptes Standard

**💡 Décisions prises :**
- `MODULES` reste dans `data-exercises.js` (pas `app.js`) pour éviter la redéclaration `const`
- Interface ARIA : layout max-width 620px centré, rail de progression 3px en dehors de la topbar

---

### Session 4 — 2026-04-20
**Durée estimée** : 3h  
**Objectif de la session** : Refactorisation complète du dashboard + système d'exercices ARIA

**✅ Réalisé :**
- Découpage de `dashboard.html` (5229 lignes) en 5 fichiers séparés par responsabilité
- Création de `css/dashboard.css` (1096 lignes) — tous les styles extraits
- Création de `js/data-content.js` (1300 lignes) — contenu des 22 leçons + `getLessonContent()`
- Création de `js/data-exercises.js` (2558 lignes) — 220 exercices complets (22 leçons × 10), `LESSON_EXERCISES`, `EXERCISES`, `MODULES`, `TOTAL`
- Création de `js/aria-exercise-runner.js` (773 lignes) — runner complet : `openAriaRunner()`, tous les types d'exercice, ARIA mascotte, skip avec étoiles, écran de score
- Mise à jour de `js/app.js` — remplacement du bloc inline exercises par un bouton "Lancer les exercices →" qui appelle `openAriaRunner()`
- Mise à jour de `dashboard.html` — ajout du script `aria-exercise-runner.js`

**🔧 Modifié / Créé :**
- `dashboard.html` — refactorisé (95 lignes, pur squelette HTML)
- `css/dashboard.css` — créé · tous les styles dashboard + ARIA runner (classes `.ar-*`)
- `js/data-content.js` — créé · contenu des 22 leçons
- `js/data-exercises.js` — créé · 220 exercices (M01→M08), 9 types : truefalse, qcm, freetext, promptlab, completion, matching, ranking, beforeafter, checklist
- `js/aria-exercise-runner.js` — créé · runner ARIA séquentiel complet
- `js/app.js` — bouton ARIA remplace l'affichage inline des exercices

**⚠️ Points en suspens :**
- Tester le runner ARIA en navigation réelle (login + ouvrir leçon + lancer exercices)
- Vérifier la progression Firebase se sauvegarde correctement après le runner
- Module 08 (Premium) : vérifier le lock pour les comptes Standard

**💡 Décisions prises :**
- Exercices affichés dans un runner plein écran avec ARIA (mascotte) plutôt qu'inline dans la leçon
- 10 exercices par leçon, 22 leçons = 220 exercices total (validé par parsing Node.js)
- `data-exercises.js` séparé de `data-content.js` pour garder les fichiers maintenables

---

### Session 3 — 2026-04-13
**Durée estimée** : 2h  
**Objectif de la session** : Système d'auth + Firebase + tunnel de vente complet

**✅ Réalisé :**
- Système de login par clé unique sur dashboard.html (page de login complète)
- Intégration Firebase Realtime Database (progression per-user)
- Make.com → crée automatiquement le membre dans Firebase après achat Gumroad
- Clés admin Premium/Standard pour toi et Leandro
- Bouton déconnexion dans la sidebar
- Correction URL Gumroad (courtierleandro) dans landing + dashboard
- Test complet du tunnel : achat Gumroad → Firebase → login dashboard ✅

**🔧 Modifié / Créé :**
- `dashboard.html` — login screen, auth Firebase, saveToFirebase(), logout(), bouton déconnexion sidebar
- `CLAUDE.md` — Session 3, décisions techniques, variables d'env Firebase

**⚠️ Points en suspens :**
- Bot ARIA à héberger (tourne en local)
- Attribution rôle Discord non automatisée
- Vérifier que l'email de bienvenue Gmail est bien envoyé après achat

**💡 Décisions prises :**
- Firebase Realtime Database plutôt que Firestore (API REST simple, auth par secret token)
- 1 clé unique par achat = `NEXUM-{sale_id}` générée automatiquement par Make.com
- Clés admin hardcodées pour accès dev (jamais commitées en clair)

---

### Session 2 — 2026-04-13
**Durée estimée** : 2h  
**Objectif de la session** : Discord, bot ARIA, Make.com et tunnel de vente Gumroad

**✅ Réalisé :**
- Config Discord complète : catégorie NEXUM AI SCHOOL + 5 salons + 2 rôles (Élève / Premium)
- Création et lancement du bot ARIA (discord.js, réponses prédéfinies, tourne en local)
- Config Make.com : webhook Gumroad → email de bienvenue Gmail automatique
- Produits Gumroad publiés + lien contenu dashboard ajouté
- Correction URLs Gumroad (leandrodomingoslourenco → courtierleandro)
- Refonte landing page (design éditorial, marquee, before/after, témoignages)

**🔧 Modifié / Créé :**
- `bot/bot.js` — créé · bot ARIA Discord · réponses prédéfinies par mots-clés · 13 sujets couverts
- `bot/package.json` — créé · dépendances discord.js
- `docs/discord-integration.md` — mis à jour · IDs Discord · 3 options hébergement bot · config Make.com
- `index.html` — refonte design + correction URLs Gumroad
- `CLAUDE.md` — mis à jour · structure fichiers · bugs · décisions · variables d'env

**⚠️ Points en suspens :**
- Bot ARIA tourne en local → à héberger (Glitch + UptimeRobot ou Fly.io)
- Attribution rôle Discord non automatisée (besoin Discord ID élève via formulaire Tally)
- Brevo non configuré (email via Gmail pour l'instant)
- Payout Gumroad à configurer par Leandro (compte bancaire)

**💡 Décisions prises :**
- Bot sans clé API Claude → réponses prédéfinies suffisantes pour MVP
- Email bienvenue via Gmail + Make.com (Brevo non prioritaire)
- 5 salons Discord max (pas 1 par module — trop vide au démarrage)

---

### Session 1 — 2026-04-13
**Durée estimée** : 1h  
**Objectif de la session** : Mise en place de l'espace membre post-paiement

**✅ Réalisé :**
- Analyse complète du repo existant (landing, 30 leçons, scénarios Make, Discord)
- Création de `dashboard.html` — espace membre complet avec sidebar, lecteur vidéo, progression localStorage
- Mise en place du verrouillage Premium (Module 08)
- Mise à jour du CLAUDE.md au format mémoire vivante

**🔧 Modifié / Créé :**
- `dashboard.html` — créé · espace membre 8 modules · 30 leçons interactives · progression localStorage · visuels enrichis (ring progress, milestone strip, icons modules, bannière hero)
- `CLAUDE.md` — refonte complète au format mémoire vivante + section collaboration 2 personnes

**⚠️ Points en suspens :**
- Vidéos HeyGen pas encore produites (placeholders dans dashboard)
- Variables d'env non renseignées (Brevo, Discord, Make)
- Pas de lien Gumroad → redirect dashboard automatique
- Pas d'auth (accès libre au dashboard — acceptable pour MVP)

**💡 Décisions prises :**
- Espace membre = fichier HTML statique (cohérent avec stack GitHub Pages)
- Progression sauvegardée en localStorage (zéro BDD)
- Module 08 Premium-only → redirect Gumroad si Standard

---

*(Sessions précédentes : aucune)*

---

*— CLAUDE.md · Nexum AI School · Leandro × Hhhsimo · Mis à jour le 2026-04-13*
