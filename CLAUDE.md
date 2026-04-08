# NEXUM AI SCHOOL — Brief Claude Code

## Contexte

Tu travailles avec **Leandro**, entrepreneur en Île-de-France.
- **HTT Digital** : agence web pour artisans/PME
- **Nexum** : communauté Discord d'entrepreneurs

Tu construis **Nexum AI School** — formation IA en ligne, 100% automatisée.

---

## Mission immédiate

Repo : `github.com/courtierleandro-jpg/nexum-ai-school`

```bash
cp nexum-formation-landing.html index.html
git add index.html
git commit -m "feat: add landing page"
git push origin main
```

Puis activer GitHub Pages : Settings → Pages → Branch: main → Save

**URL finale :** `https://courtierleandro-jpg.github.io/nexum-ai-school`

---

## Le Projet

Formation Claude & IA — 97€ Standard / 197€ Premium — paiement unique.
8 modules, 0 code requis, système 100% automatisé.

Stack gratuite : GitHub Pages, Gumroad (0€+10%), Brevo (300 mails/j), Make.com (1000 ops/mois), Discord.

---

## Format de formation (mis à jour 08/04/2026)

**Vidéos générées par IA** via HeyGen (avatar Leandro FR) + **tuteurs IA interactifs** par module via Discord (bot Claude par canal #module-XX).

## 8 Modules

01 - Comprendre Claude & l'IA (3h)
02 - Créer un site web (4h)
03 - Automatisations & Workflows (4h)
04 - Développer une application (5h)
05 - Développer un jeu vidéo (3h)
06 - Marketing & Contenu IA (4h)
07 - Business Models (3h)
08 - Prompt Engineering Avancé (4h)

## Stack production contenu

- **HeyGen** : avatar IA de Leandro, voix FR, génération vidéo par script
- **Discord bots** : 1 bot Claude par module = tuteur IA 24/7 (répond aux questions du module uniquement)
- **Workflow** : Script (Notion) → HeyGen vidéo → Hébergement → Discord canal module

---

## Automations Make.com

**Scénario 1** : Achat Gumroad → Email + Discord + Notion CRM + Liste Brevo
**Scénario 2** : Lundi 8h → Claude API → 7 scripts TikTok → Notion
**Scénario 3** : Liste Leads → Séquence emails J0/J1/J2/J4/J6/J7/J14

---

## Discord

```
📢 INFORMATIONS : #règles #annonces #liens-utiles
📚 FORMATION : #module-01 ... #module-08 #livrables
💬 COMMUNAUTÉ : #présentations #succès #entraide
🤖 ARIA IA : #aria-assistant (bot Claude 24/7)
👑 PREMIUM : #vip-lounge #ressources-exclusives
🎙️ LEANDRO : #office-hours (lundi 20h)
```

---

## Identité

Couleurs : #040407 · #00E5FF · #FF3CAC · #7B5EA7
Polices : Syne 800 · Space Mono · DM Sans
Logo : NEXUM//AI

---

## Finances

| Objectif | Ventes/mois | Net mensuel |
|---|---|---|
| Seuil viabilité | 8 | ~700€ |
| Salaire | 22 | ~1 900€ |
| École rentable | 210 | ~18 400€ |

---

## Notion workspace

https://www.notion.so/33b9526165a181b7ab4ed16bb904b4fd

22 pages : stratégie, scripts vidéo, TikToks, emails, configs Make/Brevo/Gumroad, CRM, KPIs, CGV.

---

## Credentials services

- **[GUMROAD_STANDARD]** : https://leandrodomingoslourenco.gumroad.com/l/ckcrul
- **[GUMROAD_PREMIUM]** : https://leandrodomingoslourenco.gumroad.com/l/lcwubf
- **[BREVO_API_KEY]** : _à renseigner_
- **[BREVO_LIST_IDS]** : Leads=?, Élèves Actifs=?, Diplômés=?
- **[MAKE_WEBHOOK_URL]** : _à renseigner_
- **[DISCORD_INVITE]** : _à renseigner_
- **[HEYGEN_AVATARS]** : _à renseigner_

## TODO

- [x] cp nexum-formation-landing.html index.html && git push
- [x] GitHub Pages → Settings → Pages → main
- [ ] Gumroad : 2 produits (97€/197€) + IBAN → **envoyer URLs à Claude**
- [ ] Brevo : 3 listes + séquence leads → **envoyer clé API à Claude**
- [ ] Make.com : Scénario 1 (achat → accès auto)
- [ ] HeyGen : compte + premier avatar FR
- [ ] Discord : créer serveur + bots tuteurs par module
- [ ] Filmer/générer Module 01 Leçon 1

*Mise à jour : 08/04/2026*
