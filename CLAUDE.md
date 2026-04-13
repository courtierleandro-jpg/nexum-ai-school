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
| **Dernière mise à jour** | `2026-04-13` |

---

## 🎯 Objectif du projet

```
Nexum AI School est une formation en ligne sur Claude & l'IA, 100% automatisée.
8 modules, 30 leçons pratiques, accessible sans code.
Vendue 97€ (Standard) ou 197€ (Premium) via Gumroad, hébergée sur GitHub Pages.
L'objectif est d'atteindre 22 ventes/mois (~1 900€ net) grâce à une stack gratuite
(GitHub Pages, Gumroad, Brevo/Mailchimp, Make.com, Discord).
```

---

## 🏗️ Architecture

```
Acheteur (Gumroad)
    ↓ Webhook Gumroad
Make.com Scénario 1
    ↓ → Email de bienvenue (Brevo/Mailchimp)
    ↓ → Invitation Discord (rôle Élève ou Premium)
    ↓ → CRM Notion (log de l'achat)

Espace membre (dashboard.html — GitHub Pages)
    ↓ Vidéos hébergées Vimeo/Google Drive (HeyGen)
    ↓ Progression sauvegardée localStorage
    ↓ Discord communauté (#module-01 … #module-08)

Discord (serveur Nexum existant — catégorie NEXUM AI SCHOOL)
    ↓ 1 bot Claude par module (tuteur IA 24/7)
    ↓ #aria-assistant (bot général)
    ↓ #vip-lounge (Premium uniquement)
```

---

## 🗂️ Structure des fichiers clés

```
nexum-ai-school/
├── index.html                  ← Landing page principale (live GitHub Pages)
├── dashboard.html              ← Espace membre post-paiement ✅ CRÉÉ
├── make-scenario-1.json        ← Scénario Make.com (import direct)
├── make-full-scenario.md       ← Documentation scénarios Make
├── brevo-email-sequence.md     ← Séquence 7 emails J0→J14
├── discord-integration.md      ← Config bot + rôles + salons
├── discord-setup.md            ← Guide setup serveur Discord
├── heygen-30-lessons-plan.md   ← Plan 30 leçons + scripts HeyGen
└── CLAUDE.md                   ← ce fichier
```

> ⚠️ **Fichiers sensibles / à ne pas toucher** :
> - Ne jamais commiter de clés API dans ce repo (public)
> - `make-scenario-1.json` — contient la structure des webhooks

---

## 🛠️ Stack technique

| Couche | Techno | Version |
|---|---|---|
| Frontend | HTML · CSS · JS vanilla | — |
| Hosting | GitHub Pages | — |
| Paiement | Gumroad | — |
| Email | Brevo (ou Mailchimp/SendGrid) | — |
| Automation | Make.com | — |
| Communauté | Discord (serveur Nexum existant) | — |
| Vidéos | HeyGen → Vimeo / Google Drive | — |
| CRM | Notion | — |
| Formulaires | Tally | — |

---

## ⚙️ Variables d'environnement requises

```env
# Gumroad
GUMROAD_STANDARD=https://leandrodomingoslourenco.gumroad.com/l/ckcrul
GUMROAD_PREMIUM=https://leandrodomingoslourenco.gumroad.com/l/lcwubf

# Brevo / Email
BREVO_API_KEY=               # à renseigner
BREVO_LIST_LEADS=            # ID liste Leads
BREVO_LIST_ELEVES=           # ID liste Élèves Actifs
BREVO_LIST_DIPLOMES=         # ID liste Diplômés

# Make.com
MAKE_WEBHOOK_URL=            # à renseigner après import JSON

# Discord
DISCORD_INVITE=              # à renseigner
DISCORD_GUILD_ID=            # à renseigner
DISCORD_ROLE_ELEVE=          # à renseigner
DISCORD_ROLE_PREMIUM=        # à renseigner
DISCORD_BOT_TOKEN=           # à renseigner

# HeyGen
HEYGEN_AVATAR_ID=            # à renseigner (avatar Leandro)
```

---

## 🚀 Commandes essentielles

```bash
# Cloner le repo
git clone https://github.com/courtierleandro-jpg/nexum-ai-school.git

# Voir en local (ouvrir directement dans le navigateur)
open index.html
open dashboard.html

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
| Gumroad Standard | `https://leandrodomingoslourenco.gumroad.com/l/ckcrul` |
| Gumroad Premium | `https://leandrodomingoslourenco.gumroad.com/l/lcwubf` |
| Notion workspace | `https://www.notion.so/33b9526165a181b7ab4ed16bb904b4fd` |

---

## 🧩 Contexte métier important

```
- Leandro est seul à gérer le projet (pas d'équipe tech).
- La stack doit rester 100% gratuite ou quasi-gratuite au démarrage.
- Le seuil de viabilité est 8 ventes/mois (~700€ net).
- Objectif salaire : 22 ventes/mois (~1 900€ net).
- Les vidéos n'existent pas encore — HeyGen sera utilisé pour les générer.
- Le serveur Discord Nexum existe déjà : on ajoute une catégorie, pas un nouveau serveur.
- Alternative email si Brevo bloque la vérif téléphone : Mailchimp (500 contacts gratuit).
```

---

## 🐛 Bugs connus / Points de vigilance

| # | Description | Statut |
|---|---|---|
| 1 | Vidéos pas encore produites — placeholders HeyGen dans dashboard.html | 🔴 Ouvert |
| 2 | Variables d'env (Brevo, Discord, Make) pas encore renseignées | 🔴 Ouvert |
| 3 | Pas de vrai système d'auth — l'espace membre est accessible sans login | 🟡 Accepté (MVP) |

---

## ✅ Décisions techniques prises

| Date | Décision | Raison |
|---|---|---|
| 2026-04-08 | Stack 100% statique (GitHub Pages) | Zéro coût serveur, déploiement immédiat |
| 2026-04-08 | Gumroad pour le paiement | 0€ fixe + 10% commission, pas de compte Stripe |
| 2026-04-08 | Progression en localStorage | Pas de BDD nécessaire pour MVP |
| 2026-04-13 | dashboard.html = espace membre | Page dédiée post-paiement, même branding |
| 2026-04-13 | Module 08 verrouillé Standard | Différenciation valeur Premium |

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

*— CLAUDE.md · Nexum AI School · Leandro × HTT Digital · Mis à jour le 2026-04-13*
