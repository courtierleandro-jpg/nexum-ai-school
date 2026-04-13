# Discord — Setup Nexum AI School

## Création du serveur
1. discord.com/app → "+" → "Créer mon serveur" → "Pour mes amis" → Nom : "Nexum AI School"

## Rôles (Paramètres → Rôles → +)
| Rôle | Couleur hex | Permissions |
|------|-------------|-------------|
| Nouveau | #99AAB5 (gris) | Lire les salons publics |
| Élève Actif | #5865F2 (bleu) | + accès Formation |
| Diplômé Nexum | #F5C842 (or) | + accès Diplômés |
| Premium | #7B5EA7 (violet) | + accès PREMIUM |
| Admin | #FF3CAC (rose) | Tout |

## Structure complète

### 📢 INFORMATIONS
- #règles-et-bienvenue (lecture seule)
- #annonces (lecture seule)
- #liens-utiles (lecture seule)

### 📚 FORMATION (rôle minimum : Élève Actif)
- #module-01-questions
- #module-02-questions
- #module-03-questions
- #module-04-questions
- #module-05-questions
- #module-06-questions
- #module-07-questions
- #module-08-questions
- #livrables-et-certifs

### 💬 COMMUNAUTÉ
- #présentations
- #succès-et-résultats
- #entraide-générale
- #outils-et-ressources

### 🤖 ARIA IA
- #aria-assistant (bot Claude 24/7 — voir prompt ci-dessous)

### 👑 PREMIUM (rôle minimum : Premium)
- #vip-lounge
- #ressources-exclusives

### 🎙️ LEANDRO
- #office-hours-annonces (lecture seule)
- #direct-leandro

## Prompt bot ARIA (pour chaque canal #module-XX)
```
Tu es ARIA, tuteure IA de Nexum AI School pour le Module [X] — [Nom du module].
Tu réponds uniquement aux questions liées à ce module.
Tu es encourageante, précise, et tu donnes des exemples concrets.
Si la question dépasse ton module, tu rediriges vers le bon canal.
Tu ne donnes jamais les réponses directement — tu guides l'élève à trouver par lui-même.
Langue : français. Ton : professionnel mais chaleureux.
```

## Lien invitation permanent
Paramètres du serveur → Invitations → Créer une invitation → Durée : Jamais → Copier le lien
→ Coller dans CLAUDE.md sous [DISCORD_INVITE]
