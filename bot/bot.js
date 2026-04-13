const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

// Serveur HTTP keep-alive pour Glitch
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ARIA is alive 🤖');
}).listen(3000, () => console.log('Keep-alive server running on port 3000'));

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const BOT_CHANNEL = 'aria-assistant';

// Réponses basées sur des mots-clés
const REPONSES = [
  {
    mots: ['bonjour', 'salut', 'hello', 'coucou', 'bonsoir'],
    reponse: `Bonjour ! 👋 Je suis ARIA, ton assistante IA pour **Nexum AI School**.
Je suis là pour t'aider avec tes questions sur la formation.
Pose-moi n'importe quelle question sur les modules ! 🎓`,
  },
  {
    mots: ['module 1', 'module 01', 'comprendre', 'claude', "c'est quoi l'ia", "c'est quoi ia", 'intelligence artificielle'],
    reponse: `**Module 01 — Comprendre Claude & l'IA** 🧠

Dans ce module tu apprends :
- Ce qu'est vraiment l'IA et comment elle fonctionne
- Comment utiliser Claude efficacement
- Les bases du prompting
- Construire ton premier projet avec Claude

💡 **Astuce** : La clé c'est d'être précis dans tes prompts. Plus tu donnes de contexte, meilleure est la réponse.`,
  },
  {
    mots: ['module 2', 'module 02', 'site web', 'site', 'web', 'html', 'css'],
    reponse: `**Module 02 — Créer un site web avec l'IA** 🌐

Tu vas apprendre à :
- Générer du HTML/CSS avec Claude
- Créer une landing page complète
- Héberger gratuitement sur GitHub Pages
- Itérer et améliorer ton site avec des prompts

💡 **Astuce** : Décris toujours le rendu visuel que tu veux — couleurs, style, ambiance — dans ton prompt.`,
  },
  {
    mots: ['module 3', 'module 03', 'automatisation', 'make', 'workflow', 'zapier'],
    reponse: `**Module 03 — Automatisations & Workflows** ⚙️

Dans ce module tu crées :
- Des scénarios Make.com sans coder
- Des automatisations Gumroad → Email → Discord
- Des workflows qui tournent 24h/24
- Ton premier business automatisé

💡 **Astuce** : Commence par automatiser une seule tâche répétitive que tu fais chaque semaine.`,
  },
  {
    mots: ['module 4', 'module 04', 'app', 'application', 'développer', 'developer'],
    reponse: `**Module 04 — Développer une application** 📱

Tu vas construire :
- Une app complète avec Claude comme co-développeur
- Interface, logique, base de données
- Déploiement sans serveur
- Itérations rapides avec l'IA

💡 **Astuce** : Décompose ton app en petites fonctionnalités et code-les une par une avec Claude.`,
  },
  {
    mots: ['module 5', 'module 05', 'jeu', 'game', 'jeu vidéo', 'jeux'],
    reponse: `**Module 05 — Développer un jeu vidéo** 🎮

Tu apprends à :
- Créer un jeu complet avec JavaScript/Canvas
- Générer les mécaniques de jeu avec Claude
- Ajouter des assets et effets visuels
- Publier ton jeu en ligne gratuitement

💡 **Astuce** : Commence par un jeu simple (Snake, Pong) avant de passer aux projets complexes.`,
  },
  {
    mots: ['module 6', 'module 06', 'marketing', 'contenu', 'réseaux', 'social', 'instagram', 'tiktok'],
    reponse: `**Module 06 — Marketing & Contenu IA** 📣

Dans ce module tu maîtrises :
- Génération de contenu à la chaîne avec Claude
- Stratégie réseaux sociaux automatisée
- Copywriting et textes de vente
- Calendrier éditorial IA

💡 **Astuce** : Crée un "profil de ton audience idéale" et donne-le à Claude à chaque prompt marketing.`,
  },
  {
    mots: ['module 7', 'module 07', 'business', 'modèle', 'revenu', 'monetiser', 'argent'],
    reponse: `**Module 07 — Business Models IA** 💼

Tu explores :
- Les modèles rentables avec l'IA en 2026
- Freelance IA, SaaS, formation, agence
- Comment valider une idée rapidement
- Lancer ton premier produit IA

💡 **Astuce** : Le meilleur business model est celui que tu peux lancer en moins de 7 jours.`,
  },
  {
    mots: ['module 8', 'module 08', 'prompt', 'engineering', 'avancé', 'premium'],
    reponse: `**Module 08 — Prompt Engineering Avancé** 🔥

Ce module est **réservé aux membres Premium** 👑

Il couvre les techniques avancées :
- Chain of thought, few-shot learning
- Prompts systèmes complexes
- Agents IA autonomes
- Optimisation et évaluation

👉 Pour y accéder : https://leandrodomingoslourenco.gumroad.com/l/lcwubf`,
  },
  {
    mots: ['prix', 'tarif', 'combien', 'coût', 'acheter', 'payer', 'standard', 'premium'],
    reponse: `**Tarifs Nexum AI School** 💰

**Standard — 97€**
✅ 7 modules complets (30 leçons)
✅ Accès Discord communauté
✅ Bot ARIA 24/7
✅ Mises à jour à vie

**Premium — 197€**
✅ Tout le Standard +
✅ Module 08 Prompt Engineering Avancé
✅ Accès #vip-ai-school
✅ Templates exclusifs

👉 Standard : https://leandrodomingoslourenco.gumroad.com/l/ckcrul
👉 Premium : https://leandrodomingoslourenco.gumroad.com/l/lcwubf`,
  },
  {
    mots: ['aide', 'help', 'bloqué', 'problème', 'comprends pas', 'comprend pas', 'pas compris'],
    reponse: `Je suis là pour t'aider ! 🙋

Dis-moi :
1. Sur quel **module** tu travailles ?
2. Quelle est ta **question précise** ?
3. Ce que tu as déjà essayé ?

Plus tu es précis, mieux je peux t'aider. N'hésite pas ! 💪`,
  },
  {
    mots: ['merci', 'super', 'parfait', 'génial', 'nickel', 'top', 'cool'],
    reponse: `Avec plaisir ! 😊 C'est ça la puissance de l'IA — apprendre plus vite, faire plus avec moins.
Continue comme ça, tu vas cartonner ! 🚀`,
  },
  {
    mots: ['discord', 'serveur', 'salon', 'communauté'],
    reponse: `Tu es déjà sur le serveur Discord Nexum ! 🎉

Les salons de la formation :
- **#bienvenue-ai-school** — infos et accès au dashboard
- **#annonces** — nouveautés de la formation
- **#entraide-ai-school** — pose tes questions à la communauté
- **#aria-assistant** — tu es ici, je réponds 24/7 👋
- **#vip-ai-school** — réservé aux membres Premium 👑`,
  },
  {
    mots: ['dashboard', 'espace membre', 'accès', 'connexion', 'login'],
    reponse: `**Accéder à ton espace membre** 🎓

Ton dashboard de formation est disponible ici :
👉 https://courtierleandro-jpg.github.io/nexum-ai-school/dashboard.html

Pas besoin de mot de passe — accès direct.
Ta progression est sauvegardée automatiquement dans ton navigateur.`,
  },
];

const REPONSE_DEFAUT = `Je ne suis pas sûre de comprendre ta question 🤔

Tu peux me demander des infos sur :
- Les **modules** de la formation (Module 01 à 08)
- Les **tarifs** et accès
- Le **dashboard** et espace membre
- L'organisation du **Discord**

Reformule ta question et je fais de mon mieux ! 💪`;

function trouverReponse(message) {
  const msg = message.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  for (const item of REPONSES) {
    for (const mot of item.mots) {
      const motNorm = mot.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (msg.includes(motNorm)) {
        return item.reponse;
      }
    }
  }
  return REPONSE_DEFAUT;
}

client.on('ready', () => {
  console.log(`✅ ARIA connectée : ${client.user.tag}`);
  client.user.setActivity('Nexum AI School 🎓', { type: 0 });
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.channel.name !== BOT_CHANNEL) return;

  await message.channel.sendTyping();

  // Petite pause pour simuler la réflexion
  await new Promise(r => setTimeout(r, 1000));

  const reponse = trouverReponse(message.content);
  await message.reply(reponse);
});

client.login(process.env.DISCORD_BOT_TOKEN);
