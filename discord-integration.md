# Discord — Intégration Nexum AI School dans le serveur Nexum existant

## Contexte
Ne PAS créer un nouveau serveur. Ajouter une catégorie "NEXUM AI SCHOOL" dans le serveur Nexum existant de Leandro.

---

## ÉTAPE 1 — Créer les rôles

Dans le serveur Nexum → Paramètres du serveur → Rôles → "+" :

| Rôle | Couleur | Usage |
|------|---------|-------|
| Élève AI School | #5865F2 (bleu) | Acheteurs Standard (97€) |
| Premium AI School | #7B5EA7 (violet) | Acheteurs Premium (197€) |

Permissions des rôles :
- **Élève AI School** : accès aux salons Formation + Communauté de la catégorie AI School
- **Premium AI School** : tout Élève + accès salon #vip-ai-school

---

## ÉTAPE 2 — Créer la catégorie et les salons

Clic droit dans la liste des salons → "Créer une catégorie" → Nom : `NEXUM AI SCHOOL`

### Salons à créer dans la catégorie (dans l'ordre) :

```
NEXUM AI SCHOOL
├── 📌 bienvenue-ai-school       (lecture seule, message épinglé)
├── 📣 annonces-ai-school        (lecture seule, admin only)
├── 🤖 aria-assistant            (bot Claude 24/7)
├── 01-comprendre-ia             (rôle : Élève AI School)
├── 02-creer-site-web            (rôle : Élève AI School)
├── 03-automatisations           (rôle : Élève AI School)
├── 04-developper-app            (rôle : Élève AI School)
├── 05-jeu-video                 (rôle : Élève AI School)
├── 06-marketing-ia              (rôle : Élève AI School)
├── 07-business-models           (rôle : Élève AI School)
├── 08-prompt-engineering        (rôle : Élève AI School)
└── 👑 vip-ai-school             (rôle : Premium AI School uniquement)
```

Total : 12 salons dans 1 catégorie.

### Permissions par salon :
- `bienvenue-ai-school` : tout le monde peut lire, personne ne peut écrire (sauf admin)
- `annonces-ai-school` : tout le monde peut lire, admin seulement
- `aria-assistant` : tout le monde peut lire/écrire (bot répond)
- `01-` à `08-` : Élève AI School + Premium AI School peuvent lire/écrire
- `vip-ai-school` : Premium AI School uniquement

---

## ÉTAPE 3 — Créer le bot Discord

### 3.1 Créer l'application
1. Aller sur https://discord.com/developers/applications
2. Cliquer "New Application" → Nom : `ARIA — Nexum AI School`
3. Onglet "Bot" → "Add Bot" → confirmer
4. Copier le **TOKEN** (garder secret — ne jamais commit)
5. Sous "Privileged Gateway Intents", activer :
   - SERVER MEMBERS INTENT
   - MESSAGE CONTENT INTENT

### 3.2 Inviter le bot sur le serveur
1. Onglet "OAuth2" → "URL Generator"
2. Scopes : `bot`, `applications.commands`
3. Bot Permissions : `Send Messages`, `Manage Roles`, `Read Message History`, `View Channels`
4. Copier l'URL générée → ouvrir dans le navigateur → sélectionner le serveur Nexum
5. Autoriser

### 3.3 Variables d'environnement nécessaires
```
DISCORD_BOT_TOKEN=    # Token du bot (onglet Bot)
DISCORD_GUILD_ID=     # ID du serveur Nexum (clic droit serveur → Copier l'ID)
DISCORD_ROLE_ELEVE=   # ID du rôle "Élève AI School"
DISCORD_ROLE_PREMIUM= # ID du rôle "Premium AI School"
```

---

## ÉTAPE 4 — Code Make.com pour attribution des rôles

### Module Make : HTTP → Add Role to Member

**Pour achat Standard (97€) :**
```
URL: https://discord.com/api/v10/guilds/{{DISCORD_GUILD_ID}}/members/{{discord_user_id}}/roles/{{DISCORD_ROLE_ELEVE}}
Method: PUT
Headers:
  Authorization: Bot {{DISCORD_BOT_TOKEN}}
  Content-Type: application/json
```

**Pour achat Premium (197€) :**
```
URL: https://discord.com/api/v10/guilds/{{DISCORD_GUILD_ID}}/members/{{discord_user_id}}/roles/{{DISCORD_ROLE_PREMIUM}}
Method: PUT
Headers:
  Authorization: Bot {{DISCORD_BOT_TOKEN}}
  Content-Type: application/json
```

**Note importante :** Gumroad ne collecte pas le Discord ID de l'acheteur automatiquement.
Solution : dans l'email de bienvenue, demander à l'élève d'entrer son Discord ID dans un formulaire Tally/Typeform → Make récupère et attribue le rôle.

---

## ÉTAPE 5 — Message de bienvenue épinglé dans #bienvenue-ai-school

```
Bienvenue dans Nexum AI School !

Voici comment accéder à ta formation :

1️⃣ Lis les règles générales du serveur Nexum
2️⃣ Rends-toi dans ton module : #01-comprendre-ia pour commencer
3️⃣ Pour toute question IA : #aria-assistant (bot disponible 24/7)
4️⃣ Si tu es Premium : accès à #vip-ai-school (coaching mensuel, templates)

Programme complet :
📦 Module 01 — Comprendre Claude & l'IA
📦 Module 02 — Créer un site web avec l'IA
📦 Module 03 — Automatisations & Workflows
📦 Module 04 — Développer une application
📦 Module 05 — Développer un jeu vidéo
📦 Module 06 — Marketing & Contenu IA
📦 Module 07 — Business Models IA
📦 Module 08 — Prompt Engineering Avancé

Bonne formation !
— Leandro
```

---

## IDs à renseigner dans CLAUDE.md

Quand le serveur est configuré, récupérer et noter :
- `DISCORD_GUILD_ID` = ID du serveur Nexum (clic droit → Copier l'ID)
- `DISCORD_ROLE_ELEVE` = ID du rôle Élève AI School
- `DISCORD_ROLE_PREMIUM` = ID du rôle Premium AI School
- `DISCORD_BOT_TOKEN` = Token du bot ARIA
- `DISCORD_INVITE` = Lien d'invitation permanent vers #bienvenue-ai-school
