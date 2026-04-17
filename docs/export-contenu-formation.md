# NEXUM AI SCHOOL — Export complet du contenu formation
> Copie ce fichier entier dans Claude pour améliorer le contenu, puis reviens l'intégrer dans dashboard.html

---

## STRUCTURE GÉNÉRALE

8 modules · 22 leçons · 22 exercices
- M01 à M07 : Standard + Premium
- M08 : Premium uniquement

---

## MODULE 01 — Comprendre l'IA sans bullshit (1h30)

### Leçon 01.01 — Ce que l'IA fait vraiment (et ce qu'elle ne fait pas)
**Objectif** : Comprendre le mécanisme réel d'un LLM pour ne plus jamais avoir de mauvais résultats par accident.

**Contenu** :
- Claude ne "sait" pas — il prédit (analogie musicien jazz)
- Les 4 limites fondamentales :
  1. Pas de mémoire entre sessions
  2. Connaissance figée dans le temps
  3. Il hallucine avec assurance
  4. Il cherche à te faire plaisir (biais de complaisance)
- Prompt de test des 4 limites en direct

**EXERCICE 01.01 — QCM**
Question : Marie est consultante. Elle demande à Claude : "Mon offre de coaching à 500€/mois est-elle bien positionnée ?" Claude répond positivement avec 5 arguments. Que doit-elle faire ensuite ?
- A. Valider son prix — Claude confirme que c'est bien positionné ❌
- B. Relancer Claude avec : "Maintenant joue le rôle d'un prospect sceptique. Donne-moi les 5 raisons pour lesquelles il hésite à payer 500€/mois." ✅
- C. Demander à Claude de comparer avec les prix du marché — il a les données récentes ❌
- D. Ignorer la réponse — Claude ne peut pas évaluer une offre ❌

Feedback OK : "Exactement. La limite 4 en action : Claude a confirmé parce que la question était orientée positivement. Pour une vraie validation, il faut forcer le mode critique. La réponse B — jouer le prospect sceptique — retourne le biais de complaisance en outil d'analyse. C'est une des techniques les plus puissantes de la formation."
Feedback KO : "La bonne réponse est B. Claude a répondu positivement parce que la question l'y invitait — c'est la limite 4 (biais de complaisance). Pour obtenir une vraie analyse, il faut lui demander explicitement de jouer le rôle critique. Les réponses A et C ignorent les limites qu'on vient de voir."

---

### Leçon 01.02 — Pourquoi 90% des gens l'utilisent mal
**Objectif** : Corriger les 5 erreurs de base pour avoir des résultats professionnels dès aujourd'hui.

**Contenu** :
- Erreur 1 : Être trop vague (tableau avant/après : vague vs efficace)
- Erreur 2 : Oublier que Claude a une mémoire de poisson
- Erreur 3 : Empiler 5 demandes en un prompt
- Erreur 4 : Ne pas spécifier le format de sortie
- Erreur 5 : Abandonner après la première réponse décevante
- Le test des 10 secondes avant d'envoyer

**EXERCICE 01.02 — Freetext (minLength: 120)**
Question : Transforme ce prompt en version pro pour TON activité
Description : Voici le prompt le plus utilisé par les débutants : "Aide-moi à trouver des clients." Réécris-le en version professionnelle en utilisant TES vraies informations.
Placeholder : Contexte : Je suis [ton activité], je vends [ton offre] à [ta cible précise]...

Feedback OK : "Tu viens de construire quelque chose d'utilisable immédiatement. Compare avec le prompt original..."
Feedback KO : "Le prompt manque encore de précision sur l'un des éléments clés. Vérifie : est-ce que tu as décrit QUI tu es... QUI est ta cible... QUOI exactement..."

---

### Leçon 01.03 — Les 3 types d'IA que tu vas croiser
**Objectif** : Maîtriser la carte des familles d'IA et savoir choisir le bon outil en moins de 10 secondes.

**Contenu** :
- 4 familles : Langage (LLM), Image, Audio/voix, Vidéo
- Guide de décision rapide (tableau tâche → meilleur outil)
- Combo recommandé : Claude (texte) + Midjourney (visuels) = 90% des besoins
- Le piège des coûts qui s'accumulent

**EXERCICE 01.03 — QCM**
Question : Tu veux lancer une newsletter hebdomadaire + un compte Instagram pour ton activité de consultant, sans budget designer ni rédacteur. Quel est le meilleur combo d'outils ?
- A. ChatGPT pour tout — il fait le texte ET les images maintenant ❌
- B. Claude pour rédiger la newsletter et les légendes Instagram + Midjourney pour les visuels des posts ✅
- C. Midjourney pour les visuels et ElevenLabs pour lire les newsletters à voix haute ❌
- D. Suno pour la musique de fond des posts vidéo + Runway pour les animations ❌

Feedback OK : "Parfait. Claude pour le langage (newsletter, légendes, stratégie éditoriale) + Midjourney pour les visuels..."
Feedback KO : "La bonne réponse est B. ChatGPT peut générer des images via DALL-E, mais la qualité reste en dessous de Midjourney..."

---

### Leçon 01.04 — Claude vs GPT vs Gemini — lequel choisir
**Objectif** : Choisir le bon LLM en 10 secondes et configurer Claude pour qu'il te connaisse dès la première ligne.

**Contenu** :
- Tableau comparatif Claude / ChatGPT / Gemini
- La règle des 3 cas : document long → Claude, image/plugin → ChatGPT, Google Workspace → Gemini
- Instructions personnalisées Claude : template complet à remplir
- 4 étapes de configuration

**EXERCICE 01.04 — Freetext (minLength: 150)**
Question : Rédige tes instructions personnalisées Claude complètes
Description : Utilise le template avec TES vraies informations. Pas un exemple fictif — ton vrai prénom, ton vrai business, ta vraie cible. Une fois validé ici, colle-le immédiatement dans Claude.ai → Paramètres.
Placeholder : MON PRÉNOM / MON ACTIVITÉ / MON CLIENT IDÉAL / MES PROJETS EN COURS / COMMENT TRAVAILLER AVEC MOI...

Feedback OK : "Instructions solides. Maintenant l'étape cruciale : colle-les dans Claude.ai → Settings → Personal preferences..."
Feedback KO : "Les instructions sont trop vagues pour être vraiment utiles. L'objectif est que Claude puisse te répondre sans que tu aies besoin de te présenter..."

---

## MODULE 02 — Parler à l'IA comme un pro (1h)

### Leçon 02.01 — La formule RCTFE expliquée
**Objectif** : Construire n'importe quel prompt professionnel avec la formule RCTFE.

**Contenu** :
- R = Rôle (expert précis avec expérience)
- C = Contexte (qui tu es, ce que tu vends, à qui)
- T = Tâche (précision chirurgicale)
- F = Format (longueur, structure, ton)
- E = Exemples (montrer > décrire)
- Exemple RCTFE complet à tester

**EXERCICE 02.01 — Freetext (minLength: 150)**
Question : Construis ton premier prompt RCTFE complet
Description : Choisis une tâche réelle de ton business et construis le prompt RCTFE complet avec ton vrai contexte.
Placeholder : R (Rôle) : Tu es... / C (Contexte) : Je suis... / T (Tâche) : Je veux que tu... / F (Format)... / E (Exemple)...

Feedback OK : "Excellent prompt RCTFE ! Remarque la différence de densité d'information entre ce prompt et un prompt basique..."
Feedback KO : "Trop superficiel — un prompt RCTFE efficace doit avoir au minimum un rôle précis (pas générique), un contexte spécifique à TON business, et une tâche décrite avec précision..."

---

### Leçon 02.02 — Passer d'un prompt basique à un prompt expert
**Objectif** : Transformer n'importe quel prompt basique en prompt expert en moins de 3 minutes.

**Contenu** :
- 5 transformations avant/après sur des cas réels (email prospection, analyse concurrentielle, post LinkedIn...)
- Le pattern de transformation en 3 étapes
- Template universel réutilisable

**EXERCICE 02.02 — Freetext (minLength: 120)**
Question : Transforme ce prompt médiocre
Description : "Aide-moi à créer du contenu pour mes réseaux sociaux." → Transforme en prompt expert RCTFE adapté à TON activité réelle.

Feedback OK : "Transformation réussie. Compare mentalement les deux versions : l'une donne une réponse générique sur 'les réseaux sociaux', l'autre produit un plan de contenu sur-mesure..."
Feedback KO : "La transformation est insuffisante — le contexte est encore trop vague. Pour que Claude produise du contenu vraiment sur-mesure, il a besoin de savoir précisément ce que tu vends, à qui, et le ton..."

---

### Leçon 02.03 — Les 5 erreurs qui ruinent tes prompts
**Objectif** : Éliminer les 5 erreurs avancées qui dégradent même les bons prompts.

**Contenu** :
- Erreur 1 : Le contexte mensonger (titre d'expert sans données réelles)
- Erreur 2 : La tâche implicite ("améliore ce texte" → améliore comment ?)
- Erreur 3 : Les contraintes contradictoires
- Erreur 4 : Demander une opinion sans demander une critique
- Erreur 5 : Changer de sujet dans la même conversation
- Prompt pour feedback brutal sans complaisance

**EXERCICE 02.03 — QCM**
Question : Tu demandes à Claude : "Qu'est-ce que tu penses de mon idée de podcast sur l'entrepreneuriat ?" Il te répond positivement en listant les avantages. Que fais-tu ?
- A. Tu prends ça comme validation et tu lances le podcast ❌
- B. Tu relances en disant : "Le marché est saturé. Joue le rôle d'un créateur de podcasts cynique qui a vu 100 projets échouer. Dis-moi tout ce qui va clocher avec mon idée." ✅
- C. Tu demandes : "Est-ce que tu es sûr que c'est une bonne idée ?" ❌
- D. Tu cherches un autre outil IA qui sera plus honnête ❌

Feedback OK : "Exactement. Forcer Claude à adopter un rôle critique et sceptique lui permet de sortir de son biais naturel..."
Feedback KO : "La bonne réponse est B. En donnant à Claude le rôle d'un expert sceptique avec un historique de projets échoués, tu contournes son biais de complaisance naturel..."

---

## MODULE 03 — Gagner du temps au quotidien (1h15)

### Leçon 03.01 — Écrire des emails professionnels en 30 secondes
**Objectif** : Rédiger n'importe quel email professionnel en moins de 60 secondes.

**Contenu** :
- Les 6 emails que tu écris en boucle (prospection, relance, proposition, refus, remerciement, réclamation)
- Template universel email pro
- La technique du contexte émotionnel pour les emails délicats
- Prompt pour transformer un brouillon en email pro

**EXERCICE 03.01 — Freetext (minLength: 100)**
Question : Rédige le prompt pour l'email le plus difficile que tu as à envoyer en ce moment
Description : Pense à un email que tu remets depuis plusieurs jours. Construis le prompt complet.
Placeholder : Type d'email : ... / Contexte : Expéditeur / Destinataire / Historique... / Objectif / Ton / Ce à éviter...

Feedback OK : "Parfait. Maintenant copie ce prompt dans Claude et envoie l'email dans les 5 prochaines minutes. La vraie productivité IA, c'est passer à l'action immédiatement..."
Feedback KO : "Trop vague — pour un email difficile, le contexte est crucial. Précise l'historique relationnel avec cette personne, l'objectif exact de l'email, et l'état émotionnel probable du destinataire."

---

### Leçon 03.02 — Analyser n'importe quel document en 2 minutes
**Objectif** : Extraire l'essentiel de n'importe quel document en moins de 2 minutes.

**Contenu** :
- 4 opérations : résumé structuré, extraction ciblée, comparaison, questions interactives
- Prompt d'analyse complète (4 axes)
- Limite PDFs et solutions alternatives
- Prompt "lu, prêt pour tes questions"

**EXERCICE 03.02 — QCM**
Question : Tu reçois un contrat de 40 pages d'un nouveau client. Tu n'as pas le temps de tout lire mais tu dois signer d'ici demain. Quelle est la meilleure approche avec Claude ?
- A. Lui demander : "Est-ce que ce contrat est bon ?" sans coller le document ❌
- B. Coller le contrat et demander : "Identifie toutes les clauses qui pourraient me désavantager, les obligations engageantes, et les points qui méritent d'être renégociés avant signature" ✅
- C. Lui demander un résumé général du contrat sans orientation spécifique ❌
- D. Lui demander de réécrire le contrat entier ❌

Feedback OK : "Exactement. La question ciblée donne à Claude une mission précise d'analyste légal. Tu obtiens une analyse actionnable, pas un résumé passif. Attention : toujours faire valider par un vrai avocat pour les contrats importants."
Feedback KO : "La bonne réponse est B. En orientant précisément l'analyse (trouver les risques, les obligations, les points de renégociation), tu obtiens une analyse actionnable."

---

### Leçon 03.03 — Organiser ta semaine et tes projets avec l'IA
**Objectif** : Planifier sa semaine et prioriser ses projets avec Claude en 15 minutes.

**Contenu** :
- Méthode en 3 temps : dump mental dimanche → plan de semaine → revue journalière
- Prompt planification hebdomadaire complète
- Claude comme coach de productivité (analyse écarts)
- Prompt prioritisation projet complexe

**EXERCICE 03.03 — Freetext (minLength: 130)**
Question : Planifie ta semaine avec Claude — et identifie ce que ton cerveau évitait
Description : Lance le prompt de planification hebdomadaire avec ta vraie liste de tâches. Résume ici : tes 3 priorités non-négociables selon Claude, une tâche que tu avais tendance à procrastiner...
Placeholder : Ma liste brute / Mes 3 priorités / La tâche que j'évitais / Ce que j'ai appris / Ce que je change dès demain...

Feedback OK : "Excellent. La vraie valeur de la planification avec Claude n'est pas d'avoir une belle to-do list — c'est de voir tes biais de priorisation de l'extérieur..."
Feedback KO : "Tu n'as pas vraiment utilisé Claude pour planifier — réponds avec de vraies informations. La valeur de cet exercice vient UNIQUEMENT de voir Claude analyser TES vraies tâches..."

---

## MODULE 04 — Créer du contenu qui te ressemble (45 min)

### Leçon 04.01 — Faire écrire l'IA avec TA voix (pas la sienne)
**Objectif** : Créer ta charte de voix pour que Claude écrive comme toi, pas comme un robot.

**Contenu** :
- Pourquoi le contenu IA sonne faux (style par défaut de Claude)
- Le few-shot styling : analyser tes textes pour extraire ton ADN stylistique
- Étape 1 : Faire analyser ton style (3 exemples de textes → charte)
- Étape 2 : Générer du contenu dans ton style
- Le test du "c'est vraiment moi ?"

**EXERCICE 04.01 — Freetext (minLength: 130)**
Question : Crée ta charte de voix personnelle — ton ADN stylistique en 10 règles
Description : Colle 2-3 textes que tu as écrits dans Claude avec le prompt d'analyse. Colle ici la charte complète.
Placeholder : Mon style / Mon vocabulaire / Mon ton dominant / Ce qui me rend reconnaissable / 3 mots à bannir / La règle à toujours respecter...

Feedback OK : "Excellente charte. Maintenant deux étapes immédiates : (1) colle-la dans tes instructions personnalisées Claude, (2) génère un post LinkedIn avec cette charte et compare..."
Feedback KO : "La charte est trop générique — elle aurait pu être écrite pour n'importe qui. Pour qu'elle fonctionne, Claude doit avoir analysé TES vrais textes (pas des descriptions théoriques)..."

---

### Leçon 04.02 — Posts LinkedIn, threads, newsletters — les templates
**Objectif** : Générer des posts LinkedIn et newsletters performants en moins de 5 minutes.

**Contenu** :
- 3 formats et leurs codes : LinkedIn (hook + blanc + corps + CTA), Thread, Newsletter
- Template LinkedIn — post éducatif haute performance
- Template Newsletter — édition hebdomadaire
- Structure hook obligatoire (1 ligne choc)

**EXERCICE 04.02 — Freetext (minLength: 200)**
Question : Génère ton prochain post LinkedIn — et fais-le passer le test du hook
Description : Choisis un sujet lié à ton activité, génère le post avec ta charte de voix, puis teste le hook. Colle le post final ici.
Placeholder : Mon sujet / POST FINAL (hook + blanc + corps + CTA) / RETOUR D'EXPÉRIENCE (hook original vs amélioré)...

Feedback OK : "Post solide. Avant de publier : vérifie le hook en couvrant tout le reste — si tu lis uniquement la première ligne, ça te donne envie de lire la suite ?..."
Feedback KO : "Le post est trop court ou manque de structure. Un bon post LinkedIn : 1 hook fort → 1 blanc → 5-7 lignes aérées → 1 blanc → 1 CTA. Le hook est le seul élément qui compte..."

---

## MODULE 05 — Apprendre n'importe quoi (45 min)

### Leçon 05.01 — Transformer Claude en tuteur personnel
**Objectif** : Utiliser Claude comme tuteur personnel pour apprendre n'importe quoi 10x plus vite.

**Contenu** :
- Claude comme tuteur unique : disponible 24/24, méthode socratique
- Prompt : session d'apprentissage socratique
- Prompt : faire tester ses connaissances (5 questions compréhension + 3 application + 2 synthèse)
- Le principe Feynman avec Claude

**EXERCICE 05.01 — Freetext (minLength: 150)**
Question : Lance une vraie session d'apprentissage — et explique le concept appris à un enfant de 12 ans
Description : Choisis un sujet à maîtriser, lance la session socratique (15-20 min), résume et applique la technique Feynman.
Placeholder : Sujet / Niveau avant (0-10) / 3 choses apprises / Lacune principale / FEYNMAN : j'explique à un enfant de 12 ans / Ce qui m'a résisté à simplifier...

Feedback OK : "Tu viens d'utiliser les deux techniques d'apprentissage les plus puissantes en une seule session : méthode socratique + technique Feynman..."
Feedback KO : "Tu n'as pas vraiment lancé la session — tu as répondu théoriquement. Lance Claude maintenant avec le prompt socratique, apprends pendant 15 minutes sur un vrai sujet, puis reviens..."

---

### Leçon 05.02 — Apprendre une compétence en 10x moins de temps
**Objectif** : Créer un plan d'apprentissage accéléré sur n'importe quel sujet.

**Contenu** :
- Le principe 80/20 appliqué à l'apprentissage
- Identifier les 5 concepts fondamentaux de n'importe quel domaine
- Prompt : plan d'apprentissage accéléré
- La technique des sprints d'apprentissage
- 4 keypoints : pourquoi > comment, practice > théorie, se tester souvent, dormir entre sessions

**EXERCICE 05.02 — QCM**
Question : Tu veux apprendre à faire de la publicité Facebook en 4 semaines. Quelle est la meilleure première étape avec Claude ?
- A. Lui demander une liste complète de tout ce qu'il faut savoir sur la pub Facebook ❌
- B. Lui demander les 5 concepts fondamentaux qui permettent de comprendre pourquoi certaines pubs marchent et d'autres non — avant même de toucher à l'interface ✅
- C. Lui demander de trouver les meilleurs tutoriels YouTube sur la pub Facebook ❌
- D. Commencer par créer une pub directement pour apprendre par essais/erreurs ❌

Feedback OK : "Exactement. Les 5 concepts fondamentaux (ciblage par intention, structure d'un funnel pub, copywriting d'une publicité, pixel de suivi, optimisation du budget) te donnent le cadre pour que tout le reste ait du sens immédiatement."
Feedback KO : "La bonne réponse est B. Commencer par les fondamentaux conceptuels est toujours plus efficace que les listes de ressources ou les essais/erreurs sans cadre."

---

## MODULE 06 — Automatiser avec Make.com (50 min)

### Leçon 06.01 — Comprendre les automatisations sans code
**Objectif** : Identifier ses 3 meilleures opportunités d'automatisation et les modéliser.

**Contenu** :
- Penser en systèmes : triggers et actions
- La règle : si tu fais la même chose plus de 3 fois, c'est automatisable
- Les outils : Make.com, Zapier, n8n, webhooks
- Prompt : identifier tes meilleures opportunités d'automatisation

**EXERCICE 06.01 — Freetext (minLength: 150)**
Question : Identifie tes 3 automatisations prioritaires avec leur architecture trigger → action
Description : Lance le prompt d'identification avec tes vraies tâches répétitives. Pour chacune, décris le trigger et les actions.
Placeholder : AUTOMATION 1 (plus rapide) : Trigger / Actions / Outil / Temps gagné / Complexité... × 3 + Par laquelle je commence...

Feedback OK : "Roadmap solide. Le critère de priorisation le plus efficace : commence par l'automation avec complexité 1-2 et le meilleur temps gagné..."
Feedback KO : "Les triggers et actions sont trop vagues. 'Automatiser les relances' n'est pas un trigger — c'est une intention. Un vrai trigger : 'Quand un prospect remplit mon formulaire Tally sans réponse après 48h'..."

---

### Leçon 06.02 — Créer ton premier scénario Make.com + Claude
**Objectif** : Créer un scénario Make.com + Claude API fonctionnel étape par étape.

**Contenu** :
- Architecture du scénario Make + Claude API
- Configuration module HTTP pour appeler Claude API (URL, headers, body JSON)
- 7 étapes de configuration dans Make.com
- Gestion de la clé API Claude (sécurité)

**EXERCICE 06.02 — QCM**
Question : Ton scénario Make appelle l'API Claude mais le module HTTP retourne une erreur 401. Qu'est-ce que ça signifie et comment corriger ?
- A. Le serveur d'Anthropic est en panne — attendre ❌
- B. Erreur d'authentification — ta clé API est invalide, mal copiée, ou absente dans le header x-api-key ✅
- C. Le prompt est trop long pour l'API ❌
- D. Make.com n'est pas compatible avec l'API Anthropic ❌

Feedback OK : "Exactement. 401 = Unauthorized = problème d'authentification. Vérifie que : (1) la clé API est bien dans le header x-api-key, (2) elle est correctement copiée sans espace avant/après, (3) elle est active sur console.anthropic.com..."
Feedback KO : "401 signifie 'Unauthorized' — c'est toujours un problème d'authentification. Vérifie ton header x-api-key dans la configuration du module HTTP."

---

## MODULE 07 — Développer son business (1h30)

### Leçon 07.01 — Analyser un marché et ses concurrents en 1h
**Objectif** : Réaliser une analyse marché + concurrentielle complète en 1 heure avec Claude.

**Contenu** :
- Framework 4 dimensions : marché, client, concurrence, positionnement
- Prompt : analyse concurrentielle approfondie (5 points par concurrent)
- Prompt : portrait robot du client idéal (6 dimensions)

**EXERCICE 07.01 — Freetext (minLength: 100)**
Question : Réalise l'analyse concurrentielle de ton marché
Description : Utilise le prompt pour ton activité ou projet actuel. Identifie 3-5 concurrents réels et résume le positionnement différenciant le plus prometteur.
Placeholder : Mes concurrents analysés / Leur point faible commun / Le segment mal servi / Mon angle de différenciation le plus fort...

Feedback OK : "Excellent travail d'analyse. Le positionnement différenciant que tu as identifié est maintenant ton axe directeur — pour ton offre, ton copywriting, ton contenu..."
Feedback KO : "L'analyse doit être spécifique à de vrais concurrents. Si tu n'en as pas encore identifié, tape '[ton secteur] formation/service/outil' et liste les 3-5 premiers résultats."

---

### Leçon 07.02 — Créer une offre irrésistible avec l'IA
**Objectif** : Construire une offre qui maximise la valeur perçue et réduit les objections.

**Contenu** :
- 5 composants d'une offre irrésistible : promesse principale, mécanisme unique, preuve, inversion du risque, urgence réelle
- Prompt : construire une offre irrésistible (6 points)
- Test des 3 questions client (Claude joue le client)

**EXERCICE 07.02 — Freetext (minLength: 100)**
Question : Rédige la promesse principale de ton offre
Description : Construis la promesse principale — résultat concret, mesurable, et désirable. Pas une liste de features.
Placeholder : Ma promesse principale / Mon mécanisme unique / Mon inversion du risque / Mon pitch en 3 phrases (problème / solution / résultat)...

Feedback OK : "Solide. Teste maintenant cette promesse sur 3 personnes de ton réseau qui correspondent à ta cible — sans leur dire que c'est ton offre..."
Feedback KO : "La promesse est trop vague ou orientée features. 'Je t'apprends l'IA' n'est pas une promesse — c'est une description. 'Génère tes 5 premières ventes sans budget pub en 30 jours' est une promesse."

---

### Leçon 07.03 — Déléguer à l'IA les tâches qui t'épuisent
**Objectif** : Créer ton premier système de délégation IA pour une tâche chronophage.

**Contenu** :
- L'audit de tes tâches chronophages (60-70% de ton temps = faible valeur directe)
- Catégories : rédaction répétitive, recherche/veille, création de documents, décisions routinières
- Prompt : créer un système de délégation IA pour une tâche (4 livrables)
- Prompt : créer une bibliothèque de prompts de délégation (5 tâches)
- La règle des 80% : résultat utilisable à 80% sans intervention

**EXERCICE 07.03 — Freetext (minLength: 200)**
Question : Crée ton premier actif de productivité IA — le prompt de délégation qui tourne en permanence
Description : Choisis la tâche la plus épuisante et crée son système de délégation complet.
Placeholder : TÂCHE DÉLÉGUÉE / Fréquence / Temps actuel / MON PROMPT DE DÉLÉGATION [avec variables en MAJUSCULES] / UTILISATION (quand, inputs, outputs, validation) / BILAN (temps gagné, limites, prochain prompt)...

Feedback OK : "Tu viens de créer un actif de productivité permanent. Ce prompt va travailler pour toi toutes les fois que tu en as besoin... Dans 3 mois d'utilisation régulière, tu en auras 10-15 qui couvrent 60-70% de tes tâches répétitives."
Feedback KO : "Le prompt de délégation est trop court ou trop vague pour être réutilisable. Test : si tu le lisais dans 6 mois sans te souvenir du contexte, pourrais-tu l'utiliser immédiatement ? Si non — ajoute les variables manquantes..."

---

## MODULE 08 — Niveau Pro · Agents & Stratégie (1h30) — PREMIUM

### Leçon 08.01 — Méta-prompts et prompts systèmes — le niveau pro
**Objectif** : Créer des méta-prompts qui génèrent d'autres prompts, des system prompts avec une personnalité dédiée, et des architectures de conversation réutilisables.

**Contenu** :
- System prompts : donner à Claude une identité permanente
- Exemple : system prompt assistant commercial complet
- Méta-prompts : générer des prompts avec Claude
- Prompt : faire optimiser un prompt par Claude

**EXERCICE 08.01 — Freetext (minLength: 150)**
Question : Crée le system prompt de ton assistant IA personnalisé
Description : Crée un system prompt pour un assistant IA dédié à une fonction de ton business (commercial, contenu, support, planification...).
Placeholder : [NOM DE L'ASSISTANT] / Rôle : Tu es... / Contexte business / Capacités / Ton et style / Limites...

Feedback OK : "Excellent system prompt. C'est maintenant un actif IA permanent — colle-le dans un Project Claude.ai ou dans le paramètre system de l'API. Tu viens de créer ton premier assistant IA dédié."
Feedback KO : "Un bon system prompt doit être précis sur 3 choses : le rôle (qui est l'assistant), le contexte business (ce dont il a besoin de savoir), et les contraintes (ce qu'il ne doit pas faire)."

---

### Leçon 08.02 — Construire des agents IA autonomes
**Objectif** : Comprendre l'architecture d'un agent IA, identifier les cas où les agents sont pertinents, concevoir un flux agentique simple.

**Contenu** :
- Agent IA vs LLM classique : objectif → planification → outils → vérification → itération
- 3 composants : LLM (cerveau), Outils (mains), Mémoire (contexte)
- 4 cas d'usage : agent de recherche, de contenu, commercial, de veille
- Prompt : concevoir l'architecture d'un agent
- Outils no-code : Relevance AI, n8n, Make.com + Claude API

**EXERCICE 08.02 — QCM**
Question : Tu veux créer un agent qui surveille ton secteur chaque semaine et t'envoie un rapport des 5 actualités les plus importantes avec analyse des implications pour ton business. Quelle est l'architecture minimale nécessaire ?
- A. Juste un LLM bien prompté suffit — pas besoin d'outils ❌
- B. LLM + outil de recherche web + outil d'envoi d'email — le LLM orchestre, les outils agissent ✅
- C. Il faut obligatoirement du code Python pour ce type d'agent ❌
- D. C'est impossible sans accès à des APIs payantes ❌

Feedback OK : "Exactement. LLM (pour analyser et rédiger) + web search (pour chercher l'actualité) + envoi email (pour livrer le rapport). Cette architecture peut être implémentée avec Make.com + Claude API + module de recherche..."
Feedback KO : "La bonne réponse est B. Un agent de veille a besoin d'un outil pour chercher sur le web et d'un outil pour envoyer le rapport. Le LLM seul ne peut qu'analyser ce que tu lui donnes..."

---

### Leçon 08.03 — L'avenir du travail — comment te positionner
**Objectif** : Identifier les compétences qui resteront rares et précieuses dans une économie IA, définir son positionnement pour les 5 prochaines années.

**Contenu** :
- Ce que l'IA commoditise : production de contenu standard, traduction, code basique, recherche documentaire
- Ce qui devient PLUS précieux : jugement/décision, expertise profonde, relation humaine, orchestration IA, créativité non-conventionnelle
- 3 positionnements gagnants : Expert-Amplificateur, Orchestrateur IA, Créateur de Confiance
- Prompt : définir son positionnement IA personnel

**EXERCICE 08.03 — Freetext (minLength: 120)**
Question : Définis ton positionnement pour les 5 prochaines années
Description : Utilise le prompt avec ton vrai profil. Identifie lequel des 3 positionnements te correspond et liste les 3 actions concrètes dans les 30 prochains jours.
Placeholder : Mon positionnement choisi [Expert-Amplificateur / Orchestrateur IA / Créateur de Confiance] / Pourquoi ce positionnement me correspond / Mes compétences qui deviennent plus précieuses / Mes 3 actions des 30 prochains jours...

Feedback OK : "Tu as une feuille de route claire. Reviens dans 30 jours et mesure ta progression sur ces 3 actions. L'IA ne te donne un avantage que si tu agis — pas si tu te contentes de comprendre."
Feedback KO : "Sois plus concret sur les actions. 'Apprendre l'IA' n'est pas une action — c'est une intention. 'Créer mon premier scénario Make.com avant vendredi' est une action. Reformule avec des actions datées et mesurables."

---

## PROMPT À DONNER À CLAUDE POUR AMÉLIORER CE CONTENU

```
Tu es un expert en pédagogie en ligne et en création de formations premium.

Je t'envoie le contenu complet de ma formation "Nexum AI School" — une formation sur Claude & l'IA pour entrepreneurs, vendue 97€ (Standard) ou 197€ (Premium).

Ma demande : améliore ce contenu sur ces 4 axes :
1. EXERCICES : Les rendre plus engageants, plus concrets, plus utiles. Les QCM doivent piéger les gens intelligemment (pas de mauvaises réponses "trop évidentes"). Les freetext doivent avoir des placeholders qui guident vraiment sans être trop rigides.
2. FEEDBACK : Les messages de feedback doivent être plus percutants, plus personnalisés selon la qualité de la réponse, et donner envie de continuer.
3. CONTENU : Si tu vois des leçons trop théoriques, trop courtes, ou qui manquent d'exemples entrepreneurs concrets — propose des améliorations.
4. COHÉRENCE : Les modules doivent progresser logiquement du débutant au pro, avec une montée en difficulté visible.

Format de ta réponse :
- Module par module
- Pour chaque amélioration : "AVANT → APRÈS" pour que je puisse l'intégrer directement
- Indique la priorité : 🔴 urgent / 🟡 important / 🟢 mineur

Voici le contenu complet :
[COLLE LE CONTENU CI-DESSUS]
```
