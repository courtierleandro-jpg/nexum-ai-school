# Discord — Intégration Nexum AI School

## Contexte
Catégorie **NEXUM AI SCHOOL** ajoutée dans le serveur Nexum existant de Leandro.
Bot **ARIA** opérationnel — répond dans `#aria-assistant`.

---

## ✅ Configuration actuelle (faite)

### IDs du serveur
```
DISCORD_GUILD_ID    = 1389194889379446874
DISCORD_ROLE_ELEVE  = 1493236518201065604   (Élève AI School — bleu #5865F2)
DISCORD_ROLE_PREMIUM= 1493237129545912340   (Premium AI School — violet #7B5EA7)
```

### Salons créés
```
NEXUM AI SCHOOL
├── 📌 bienvenue-ai-school   (lecture seule)
├── 📣 annonces              (admin only)
├── 💬 entraide-ai-school    (Élève + Premium)
├── 🤖 aria-assistant        (bot ARIA)
└── 👑 vip-ai-school         (Premium uniquement)
```

### Permissions
- `bienvenue-ai-school` : tout le monde lit, personne n'écrit (sauf admin)
- `annonces` : pareil
- `entraide-ai-school` : Élève AI School + Premium AI School lisent/écrivent
- `aria-assistant` : Élève AI School + Premium AI School lisent/écrivent
- `vip-ai-school` : Premium AI School uniquement

---

## 🤖 Bot ARIA

### Infos bot
- **Nom** : ARIA
- **Tag** : Aria#8665
- **App Discord** : discord.com/developers/applications → ARIA
- **Token** : stocké uniquement en local / variable d'environnement (NE PAS COMMITER)

### Intents activés (obligatoire)
Dans Discord Developer Portal → Bot → Privileged Gateway Intents :
- ✅ Presence Intent
- ✅ Server Members Intent
- ✅ Message Content Intent

### Fichiers du bot
```
bot/
├── bot.js          ← code principal
├── package.json    ← dépendances (discord.js ^14)
└── .gitignore      ← exclut node_modules + .env
```

### Lancer le bot en local (dev/test)
```bash
cd /Users/hhhsimo/Desktop/nexum-ai-school/bot
DISCORD_BOT_TOKEN=<token> node bot.js
```

### Variable d'environnement requise
```env
DISCORD_BOT_TOKEN=   # Token du bot (onglet Bot sur Discord Developer Portal)
```

---

## 🚀 Héberger le bot (quand prêt)

### Option A — Glitch (gratuit, recommandé)
1. Aller sur **glitch.com** → Sign in with GitHub
2. **New Project** → **"glitch-hello-node"**
3. Remplacer `server.js` par le contenu de `bot/bot.js`
4. Remplacer `package.json` par le contenu de `bot/package.json`
5. Dans `.env` (sidebar Glitch) ajouter :
   ```
   DISCORD_BOT_TOKEN=<token>
   ```
6. Glitch démarre automatiquement

**Keep-alive (empêche Glitch de dormir) :**
- Le bot inclut déjà un serveur HTTP sur le port 3000
- Créer un compte sur **uptimerobot.com** (gratuit)
- Add Monitor → Type HTTP → URL : `https://ton-projet.glitch.me` → Interval : 5 min

### Option B — Fly.io (gratuit permanent, plus robuste)
```bash
# Installer Fly CLI
brew install flyctl

# Se connecter
fly auth login

# Depuis le dossier bot/
cd bot
fly launch        # crée le projet
fly secrets set DISCORD_BOT_TOKEN=<token>
fly deploy
```

### Option C — discloud.app (gratuit si pas saturé)
1. discloud.app → Add App
2. Upload un `.zip` de `bot.js` + `package.json`
3. Main file : `bot.js` · Type : `bot`
4. Variables d'env → `DISCORD_BOT_TOKEN`
5. Deploy

> ⚠️ En avril 2026 le free tier discloud était saturé — réessayer plus tard.

---

## ⚙️ Make.com — Attribution automatique des rôles

Quand quelqu'un achète sur Gumroad, Make.com doit attribuer le bon rôle Discord.

**Problème** : Gumroad ne collecte pas le Discord ID automatiquement.
**Solution** : dans l'email de bienvenue, demander à l'élève son Discord ID via un formulaire Tally → Make récupère et attribue le rôle.

### Module Make : HTTP → Add Role to Member

**Achat Standard (97€) :**
```
URL    : https://discord.com/api/v10/guilds/1389194889379446874/members/{{discord_user_id}}/roles/1493236518201065604
Method : PUT
Headers:
  Authorization : Bot <DISCORD_BOT_TOKEN>
  Content-Type  : application/json
```

**Achat Premium (197€) :**
```
URL    : https://discord.com/api/v10/guilds/1389194889379446874/members/{{discord_user_id}}/roles/1493237129545912340
Method : PUT
Headers:
  Authorization : Bot <DISCORD_BOT_TOKEN>
  Content-Type  : application/json
```

---

## 📌 Message de bienvenue épinglé dans #bienvenue-ai-school

```
Bienvenue dans Nexum AI School ! 🎓

Voici comment accéder à ta formation :

1️⃣ Ton espace membre → https://courtierleandro-jpg.github.io/nexum-ai-school/dashboard.html
2️⃣ Commence par le Module 01 dans ton dashboard
3️⃣ Des questions ? → #aria-assistant (bot disponible 24/7)
4️⃣ Si tu es Premium : accès à #vip-ai-school 👑

Programme complet :
📦 Module 01 — Comprendre Claude & l'IA
📦 Module 02 — Créer un site web avec l'IA
📦 Module 03 — Automatisations & Workflows
📦 Module 04 — Développer une application
📦 Module 05 — Développer un jeu vidéo
📦 Module 06 — Marketing & Contenu IA
📦 Module 07 — Business Models IA
📦 Module 08 — Prompt Engineering Avancé (Premium)

Bonne formation !
— Leandro
```
