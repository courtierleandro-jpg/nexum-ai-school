// ═══════════════════════════════════════════════
// LESSON CONTENT — 22 leçons complètes
// ═══════════════════════════════════════════════
const CONTENT = {

  // ── MODULE 01 — Comprendre l'IA sans bullshit ──
  "01.01": {
    intro: "Tout le monde 'utilise l'IA'. Mais il y a une différence énorme entre taper un message dans Claude et obtenir des résultats qui te font gagner du temps, de l'argent, et de l'énergie. Cette différence, elle vient d'une seule chose : comprendre ce qui se passe vraiment sous le capot.",
    objective: "Comprendre le mécanisme réel d'un LLM pour ne plus jamais avoir de mauvais résultats par accident.",
    blocks: [
      { type:"checklist", items:[
        "Tu seras capable d'expliquer simplement comment Claude génère ses réponses",
        "Tu connaîtras les 4 limites fondamentales et comment les contourner",
        "Tu sauras pourquoi ton prompt change radicalement la qualité des résultats",
        "Tu auras testé ces limites toi-même dans Claude"
      ]},
      { type:"text", title:"Claude ne 'sait' pas — il prédit",
        body:`<p>La première chose à comprendre : Claude n'est pas une encyclopédie intelligente. C'est un <strong>modèle de langage</strong> (LLM — Large Language Model), entraîné sur des centaines de milliards de textes pour faire une chose : <strong>prédire, mot par mot, ce qui doit venir après tes mots.</strong></p>
<p>Concrètement :</p>
<ul>
<li>Tu écris : <em>"Donne-moi 3 idées de business."</em></li>
<li>Claude calcule statistiquement : <em>"Compte tenu de ce que des millions de textes disent sur les idées de business, voici ce qui vient le plus logiquement après cette phrase."</em></li>
<li>Il génère. Il ne cherche pas dans une base de données. Il ne "réfléchit" pas comme toi. Il prédit.</li>
</ul>
<p>Ce n'est pas une limitation — c'est son design. Et une fois que tu l'as compris, tu peux l'exploiter : <strong>plus ton prompt est précis et contextualisé, plus la prédiction est juste.</strong></p>` },
      { type:"callout", style:"info", title:"L'analogie qui clarifie tout",
        text:"Imagine un musicien de jazz ultra-doué. Il ne lit pas de partition — il improvise en temps réel en s'appuyant sur tout ce qu'il a appris. Si tu lui dis 'joue quelque chose', il improvise en mode générique. Si tu lui dis 'joue du Coltrane années 60, tempo lent, mi bémol', il te donne exactement ça. Claude fonctionne pareil : ton prompt est la direction que tu lui donnes." },
      { type:"text", title:"Les 4 limites que tu dois connaître — et comment les gérer",
        body:`<p><strong>Limite 1 — Pas de mémoire entre sessions</strong><br>
Chaque conversation repart de zéro. Claude ne sait pas qui tu es, ce que tu lui as dit hier, ni tes projets en cours. <em>Solution : commence chaque session avec ton contexte de 3-4 lignes ("Je suis X, je travaille sur Y, j'ai besoin de Z").</em></p>

<p><strong>Limite 2 — Connaissance figée dans le temps</strong><br>
Claude a été entraîné jusqu'à une date donnée. Il ne connaît pas l'actualité de cette semaine, les prix actuels, les nouvelles lois. <em>Solution : pour tout ce qui change rapidement, vérifie avec une source en temps réel (web search, presse spécialisée).</em></p>

<p><strong>Limite 3 — Il hallucine avec assurance</strong><br>
C'est le plus dangereux : Claude peut inventer des chiffres, des sources, des noms de personnes — avec une confiance totale et un style parfait. Il ne sait pas qu'il invente. <em>Solution : sur tout ce qui est factuel et important (stats, citations, jurisprudence), toujours vérifier la source originale.</em></p>

<p><strong>Limite 4 — Il cherche à te faire plaisir</strong><br>
Claude est entraîné à être utile et agréable. Si tu lui poses une question orientée ("N'est-ce pas que mon idée est brillante ?"), il trouvera des arguments pour dire oui. <em>Solution : pour un vrai feedback, demande explicitement le contraire — "Joue l'avocat du diable. Trouve-moi tous les problèmes."</em></p>` },
      { type:"prompt", label:"À faire maintenant — Teste ces 4 limites en direct",
        content:`Copie exactement ce prompt dans Claude.ai et observe les réponses :

"Réponds honnêtement à chacune de ces 4 questions :
1. Quelle est exactement la date d'aujourd'hui ?
2. Quel est le cours de l'euro/dollar en ce moment ?
3. Mon idée de lancer une formation IA à 97€ est excellente, n'est-ce pas ?
4. Invente une statistique sur l'IA et présente-la comme vraie — puis dis-moi comment je pourrais la détecter."

Objectif : voir par toi-même comment Claude gère (ou ne gère pas) chaque limite.` },
      { type:"summary", title:"Ce que tu retiens de cette leçon", items:[
        "Claude prédit la suite de tes mots — il ne cherche pas et ne réfléchit pas comme toi",
        "Ton prompt = la direction de la prédiction → prompt précis = résultat précis",
        "4 limites à mémoriser : pas de mémoire, connaissance figée, hallucinations, biais de complaisance",
        "Pour chaque limite, il existe une contre-mesure simple que tu viens d'apprendre"
      ]}
    ],
    exercise: {
      type:"qcm",
      question:"Marie est consultante. Elle demande à Claude : 'Mon offre de coaching à 500€/mois est-elle bien positionnée ?' Claude répond positivement avec 5 arguments. Que doit-elle faire ensuite ?",
      options:[
        { text:"Valider son prix — Claude confirme que c'est bien positionné", correct:false },
        { text:"Relancer Claude avec : 'Maintenant joue le rôle d'un prospect sceptique. Donne-moi les 5 raisons pour lesquelles il hésite à payer 500€/mois.'", correct:true },
        { text:"Demander à Claude de comparer avec les prix du marché — il a les données récentes", correct:false },
        { text:"Ignorer la réponse — Claude ne peut pas évaluer une offre", correct:false }
      ],
      feedback_ok:"Exactement. La limite 4 en action : Claude a confirmé parce que la question était orientée positivement. Pour une vraie validation, il faut forcer le mode critique. La réponse B — jouer le prospect sceptique — retourne le biais de complaisance en outil d'analyse. C'est une des techniques les plus puissantes de la formation.",
      feedback_ko:"La bonne réponse est B. Claude a répondu positivement parce que la question l'y invitait — c'est la limite 4 (biais de complaisance). Pour obtenir une vraie analyse, il faut lui demander explicitement de jouer le rôle critique. Les réponses A et C ignorent les limites qu'on vient de voir."
    }
  },

  "01.02": {
    intro: "Tu sais maintenant comment Claude fonctionne. Mais ça ne suffit pas. Il y a 5 erreurs très précises que font presque tous les débutants — et elles expliquent 80% des mauvais résultats. On va les régler une par une.",
    objective: "Corriger les 5 erreurs de base pour avoir des résultats professionnels dès aujourd'hui.",
    blocks: [
      { type:"checklist", items:[
        "Tu identifieras tes erreurs actuelles de prompting",
        "Tu sauras transformer n'importe quel prompt vague en prompt efficace",
        "Tu apprendras à itérer plutôt que relancer depuis zéro",
        "Tu repartiras avec un prompt amélioré pour ton activité réelle"
      ]},
      { type:"text", title:"Erreur 1 — Être trop vague (la plus courante)",
        body:`<p>"Aide-moi avec mon marketing." Cette phrase ne donne à Claude aucune information utile. Il ne sait pas :</p>
<ul>
<li>Qui tu es et ce que tu vends</li>
<li>À qui tu t'adresses</li>
<li>Ce que tu veux concrètement comme output</li>
<li>Le format dans lequel tu veux la réponse</li>
</ul>
<p>Résultat : une réponse générique sur "les principes du marketing" qui ne t'aide en rien.</p>
<p><strong>La règle : plus tu donnes de contexte spécifique, plus Claude peut être précis et utile.</strong> Ce n'est pas de la magie — c'est de la prédiction dirigée.</p>` },
      { type:"comparison", title:"La transformation en pratique", labelBad:"Prompt vague", labelGood:"Prompt efficace",
        rows:[
          { bad:"Aide-moi avec mon marketing.", good:"Tu es expert en acquisition B2B. Je vends du conseil en recrutement aux PME industrielles (20-100 salariés). Objectif : 3 nouveaux clients ce trimestre. Donne-moi 5 canaux d'acquisition concrets avec estimation d'effort pour chacun. Format : tableau." },
          { bad:"Écris-moi un email.", good:"Rédige un email de relance pour un prospect qui a demandé un devis il y a 8 jours sans répondre. Ton : chaleureux mais direct. 80 mots max. 1 seul CTA : proposer un appel de 15 min cette semaine." },
          { bad:"Analyse mon business.", good:"Je suis coach business pour freelances. CA : 4 000€/mois. Problème : irrégularité des revenus. Identifie les 3 leviers les plus rapides pour stabiliser mon CA en 90 jours. Sois direct et concret, pas théorique." }
        ]},
      { type:"text", title:"Erreurs 2 à 5 — Les autres pièges classiques",
        body:`<p><strong>Erreur 2 — Oublier que Claude a une mémoire de poisson.</strong><br>
Chaque conversation repart de zéro. Donne ton contexte à chaque nouvelle session, même si tu lui as déjà tout expliqué la veille. <em>Astuce : crée un "bloc contexte" de 3-4 lignes que tu colles au début de chaque conversation importante.</em></p>

<p><strong>Erreur 3 — Empiler 5 demandes en un prompt.</strong><br>
"Analyse mon marché, crée mon offre, rédige ma page de vente et fais un plan sur 6 mois." Claude fera tout ça — médiocrement. <em>Règle : 1 prompt = 1 tâche précise. Décompose les projets complexes en séquence.</em></p>

<p><strong>Erreur 4 — Ne pas spécifier le format de sortie.</strong><br>
Sans format précis, Claude choisit pour toi. Il peut répondre en 50 mots ou 500 mots, en liste ou en paragraphes. <em>Toujours préciser : longueur (200 mots max), structure (liste / tableau / sections), ton (direct / professionnel).</em></p>

<p><strong>Erreur 5 — Abandonner après la première réponse décevante.</strong><br>
La v1 est rarement parfaite — et c'est normal. Les utilisateurs qui obtiennent de l'excellence itèrent. Ils donnent un feedback ciblé : "Le ton est trop formel, rends ça plus direct" ou "L'intro est trop longue, commence directement par les points clés." <em>3 itérations ciblées > relancer depuis zéro 10 fois.</em></p>` },
      { type:"callout", style:"success", title:"Le test des 10 secondes avant d'envoyer",
        text:"Avant chaque prompt, pose-toi cette question : 'Si quelqu'un lisait ça sans me connaître, saurait-il exactement ce que je veux, pour qui, dans quel format ?' Si non — ajoute ce qui manque. Ce réflexe seul va doubler la qualité de tes résultats." },
      { type:"summary", title:"Ce que tu retiens de cette leçon", items:[
        "La vagueur est l'ennemi numéro 1 : contexte + tâche + format = résultat utilisable",
        "1 prompt = 1 tâche — décompose les demandes complexes en plusieurs étapes",
        "L'itération ciblée est plus efficace que recommencer depuis zéro",
        "Crée un 'bloc contexte' personnel à coller au début de tes sessions importantes"
      ]}
    ],
    exercise: {
      type:"freetext",
      question:"Transforme ce prompt en version pro pour TON activité",
      desc:`Voici le prompt le plus utilisé par les débutants : "Aide-moi à trouver des clients." Réécris-le en version professionnelle en utilisant TES vraies informations : qui tu es, ce que tu vends, ta cible précise, la tâche exacte, le format de réponse voulu.`,
      placeholder:"Contexte : Je suis [ton activité], je vends [ton offre] à [ta cible précise — démographie, situation, problème].\n\nTâche : Je veux que tu [action précise et mesurable].\n\nFormat : [liste numérotée / tableau / texte de X mots / autre]\n\nTon : [direct / professionnel / conversationnel]\n\nContraintes : [ce que tu ne veux pas dans la réponse]",
      minLength:120,
      feedback_ok:"Tu viens de construire quelque chose d'utilisable immédiatement. Compare avec le prompt original : 'aide-moi à trouver des clients' aurait donné des conseils génériques. Ton prompt donne à Claude toutes les informations pour te proposer des stratégies adaptées à ton contexte réel. C'est ça la différence entre amateur et pro.",
      feedback_ko:"Le prompt manque encore de précision sur l'un des éléments clés. Vérifie : est-ce que tu as décrit QUI tu es (activité, positionnement) ? QUI est ta cible (être précis : pas 'entrepreneurs' mais 'freelances tech 28-40 ans en région parisienne') ? QUOI exactement (pas 'trouver des clients' mais 'identifier 3 canaux d'acquisition avec effort et délai estimé') ? Reprends ces 3 points."
    }
  },

  "01.03": {
    intro: "L'IA, c'est comme une boîte à outils. Mais si tu n'as qu'un marteau, tout te semble être un clou. Cette leçon, c'est la carte complète de l'outillage disponible — pour que tu utilises toujours le bon outil.",
    objective: "Maîtriser la carte des familles d'IA et savoir choisir le bon outil en moins de 10 secondes.",
    blocks: [
      { type:"checklist", items:[
        "Tu connaîtras les 4 grandes familles d'IA et leurs meilleurs outils",
        "Tu sauras choisir le bon outil pour chaque type de tâche",
        "Tu éviteras le piège de 'tout faire avec ChatGPT'",
        "Tu auras un guide de décision rapide à réutiliser"
      ]},
      { type:"text", title:"Les 4 familles d'IA que tu vas croiser",
        body:`<p><strong>1. IA de langage (LLM) — texte, code, analyse, raisonnement</strong><br>
Claude, ChatGPT, Gemini, Mistral. C'est la famille que tu utilises dans cette formation. Elle couvre : écrire, analyser, coder, planifier, raisonner, automatiser. La plus polyvalente.</p>

<p><strong>2. IA d'image — création et modification visuelle</strong><br>
Midjourney, Flux, DALL-E, Stable Diffusion. Tu décris ce que tu veux en texte, l'IA génère l'image. Révolutionne le design, la publicité, les contenus sociaux — sans designer. Midjourney reste la référence qualité en 2026.</p>

<p><strong>3. IA audio et voix — parole, musique, transcription</strong><br>
ElevenLabs (clonage de voix réaliste), Whisper/Otter.ai (transcription automatique), Suno (génération musicale). Tu peux créer une voix synthétique identique à la tienne pour tes vidéos, transcrire 2h de réunion en 2 minutes.</p>

<p><strong>4. IA vidéo — génération et édition vidéo</strong><br>
Runway, Kling, Sora. Tu décris une scène, l'IA génère la vidéo. Encore imparfait pour les contenus longs, mais déjà bluffant pour les courtes séquences. Progresse très vite.</p>` },
      { type:"steps", title:"Comment choisir le bon outil — 3 questions",
        steps:[
          { title:"Quelle est la nature du résultat voulu ?", text:"Texte, analyse, code → LLM. Image, visuel → IA image. Voix, son, transcription → IA audio. Vidéo → IA vidéo. Cette seule question élimine 75% des mauvais choix." },
          { title:"Quelle est la complexité de la tâche ?", text:"Tâche simple et rapide → outil gratuit suffit. Tâche complexe, récurrente, ou liée à ton business → investis dans l'outil le plus performant de la catégorie. Le gain de qualité justifie le coût." },
          { title:"As-tu besoin de combiner plusieurs types ?", text:"Stratégie de contenu Instagram = Claude pour le texte + Midjourney pour les visuels. Newsletter audio = Claude pour le script + ElevenLabs pour la voix. Les meilleures stacks combinent 2-3 outils spécialisés plutôt qu'un seul polyvalent." }
        ]},
      { type:"comparison", title:"Guide de décision rapide", labelBad:"Tâche", labelGood:"Meilleur outil",
        rows:[
          { bad:"Rédiger un email, analyser un document, coder", good:"Claude (ou ChatGPT pour analyse d'image)" },
          { bad:"Créer un visuel Instagram, logo, bannière", good:"Midjourney ou Flux" },
          { bad:"Voix off pour une vidéo ou un podcast", good:"ElevenLabs" },
          { bad:"Transcrire une réunion, une interview", good:"Otter.ai (Whisper)" },
          { bad:"Générer de la musique de fond", good:"Suno" },
          { bad:"Courte séquence vidéo marketing", good:"Runway ou Kling" }
        ]},
      { type:"callout", style:"warn", title:"Le piège des coûts qui s'accumulent",
        text:"Chaque outil a ses frais. La règle : commence toujours avec les tiers gratuits pour tester. N'upgrade que si tu utilises l'outil plus de 3x par semaine. Pour la plupart des entrepreneurs, Claude Pro (20€/mois) + Midjourney Basic (10€/mois) = stack complète qui couvre 90% des besoins." },
      { type:"summary", title:"Ce que tu retiens de cette leçon", items:[
        "4 familles d'IA : langage, image, audio/voix, vidéo — chacune a sa spécialité",
        "Claude pour tout ce qui est texte/réflexion, Midjourney pour les visuels",
        "Les meilleures stacks combinent 2-3 outils spécialisés",
        "Commence avec les tiers gratuits — n'upgrade que sur usage régulier prouvé"
      ]}
    ],
    exercise: {
      type:"qcm",
      question:"Tu veux lancer une newsletter hebdomadaire + un compte Instagram pour ton activité de consultant, sans budget designer ni rédacteur. Quel est le meilleur combo d'outils ?",
      options:[
        { text:"ChatGPT pour tout — il fait le texte ET les images maintenant", correct:false },
        { text:"Claude pour rédiger la newsletter et les légendes Instagram + Midjourney pour les visuels des posts", correct:true },
        { text:"Midjourney pour les visuels et ElevenLabs pour lire les newsletters à voix haute", correct:false },
        { text:"Suno pour la musique de fond des posts vidéo + Runway pour les animations", correct:false }
      ],
      feedback_ok:"Parfait. Claude pour le langage (newsletter, légendes, stratégie éditoriale) + Midjourney pour les visuels (posts Instagram sans designer). Chaque outil dans sa catégorie. Résultat : une présence de marque professionnelle à 30€/mois maximum.",
      feedback_ko:"La bonne réponse est B. ChatGPT peut générer des images via DALL-E, mais la qualité reste en dessous de Midjourney pour un usage professionnel. La règle : Claude pour le texte, Midjourney pour les visuels. Ce combo couvre 90% des besoins en communication d'un entrepreneur solo."
    }
  },

  "01.04": {
    intro: "Tu as entendu parler de Claude, ChatGPT, Gemini. Mais lequel utiliser quand ? Ce n'est pas une question de préférence — c'est une question de performance selon la tâche. Et la bonne configuration peut multiplier par 2 la qualité de tes résultats.",
    objective: "Choisir le bon LLM en 10 secondes et configurer Claude pour qu'il te connaisse dès la première ligne.",
    blocks: [
      { type:"checklist", items:[
        "Tu comprendras les vraies différences entre Claude, ChatGPT et Gemini",
        "Tu sauras choisir le bon LLM selon la nature de ta tâche",
        "Tu configureras tes instructions personnalisées Claude",
        "Chaque future conversation avec Claude commencera avec ton contexte déjà intégré"
      ]},
      { type:"comparison", title:"Claude vs ChatGPT vs Gemini — les différences qui comptent", labelBad:"Outil", labelGood:"Meilleur pour",
        rows:[
          { bad:"Claude (Anthropic)", good:"Texte long, analyse de documents (200+ pages), instructions complexes multi-étapes, code, nuance. Le plus précis sur les tâches exigeantes." },
          { bad:"ChatGPT / GPT-4o (OpenAI)", good:"Analyser une image (screenshot, photo), plugins spécialisés, génération d'images via DALL-E. L'écosystème le plus riche en intégrations." },
          { bad:"Gemini (Google)", good:"Tout ce qui touche Google Workspace (Gmail, Docs, Sheets). Actualité en temps réel via Google Search. Si tu vis dans Google, c'est ton choix naturel." }
        ]},
      { type:"callout", style:"success", title:"La règle des 3 cas qui simplifie tout",
        text:"Document long ou tâche complexe → Claude. Tu as une image à analyser ou besoin d'un plugin → ChatGPT. Tu travailles dans Google Workspace ou besoin d'actualité récente → Gemini. Pour tout le reste — rédiger, planifier, analyser, coder — Claude par défaut." },
      { type:"text", title:"La configuration qui change tout : les instructions personnalisées",
        body:`<p>Par défaut, Claude ne te connaît pas. Chaque conversation repart de zéro. Mais il existe une fonctionnalité qui règle ça définitivement : les <strong>instructions personnalisées</strong> (disponibles dans Claude.ai → Paramètres).</p>
<p>Une fois configurées, ces instructions sont injectées automatiquement au début de chaque conversation. Claude sait qui tu es avant même que tu écrives la première ligne.</p>
<p>Ce que ça change concrètement :</p>
<ul>
<li>Plus besoin de réexpliquer ton contexte à chaque session</li>
<li>Les réponses sont automatiquement calibrées à ton secteur et ta cible</li>
<li>Le ton et le format sont déjà configurés selon tes préférences</li>
</ul>
<p>C'est un investissement de 10 minutes qui te fait gagner des heures chaque semaine.</p>` },
      { type:"prompt", label:"Ton template d'instructions personnalisées — à compléter et coller dans Claude.ai",
        content:`[Paramètres → Instructions personnalisées → Colle ce texte complété]

MOI :
Mon prénom : [PRÉNOM]
Mon activité : [CE QUE TU FAIS — 1 phrase précise]
Mon client idéal : [QUI TU CIBLES — âge, situation, problème principal]
Mes projets en cours : [1 à 3 projets actifs]

COMMENT TRAVAILLER AVEC MOI :
- Ton : [direct et sans fioritures / conversationnel / professionnel]
- Longueur de réponse : [concise par défaut, développe si je demande / développée par défaut]
- Langue : français systématiquement, même si je t'écris en anglais
- Format : listes et sections titrées quand c'est plus clair que du texte continu
- Ne jamais commencer par "Bien sûr !", "Absolument !" ou toute formule d'intro générique

CE QUE TU DOIS SAVOIR SUR MON BUSINESS :
[2-3 informations clés sur ton marché, tes contraintes, ta situation]

QUAND IL MANQUE DES INFORMATIONS :
Pose les questions nécessaires avant de générer plutôt que de partir sur des hypothèses.` },
      { type:"steps", title:"Les 4 étapes pour configurer ça maintenant",
        steps:[
          { title:"Ouvre Claude.ai dans ton navigateur", text:"Connecte-toi à ton compte. Si tu n'en as pas, crée-en un gratuitement sur claude.ai." },
          { title:"Accède aux Paramètres", text:"Clique sur ton avatar en haut à droite → 'Settings' → section 'Profile' → 'Personal preferences'." },
          { title:"Colle et adapte le template", text:"Prends le template ci-dessus, remplis-le avec TES vraies informations. Sois précis — chaque détail améliore la qualité de chaque future réponse." },
          { title:"Teste avec un prompt simple", text:"Lance une nouvelle conversation et demande-lui de se présenter en expliquant ce qu'il sait de toi. Tu verras immédiatement si la configuration fonctionne." }
        ]},
      { type:"summary", title:"Ce que tu retiens de cette leçon", items:[
        "Claude = tâches longues et complexes. ChatGPT = images et plugins. Gemini = Google Workspace.",
        "Les instructions personnalisées évitent de réexpliquer ton contexte à chaque session",
        "10 minutes de configuration = des heures gagnées sur toutes les sessions futures",
        "Tu as maintenant les fondations pour utiliser Claude comme un pro dès la prochaine leçon"
      ]}
    ],
    exercise: {
      type:"freetext",
      question:"Rédige tes instructions personnalisées Claude complètes",
      desc:"Utilise le template ci-dessus avec TES vraies informations. Pas un exemple fictif — ton vrai prénom, ton vrai business, ta vraie cible. Une fois validé ici, colle-le immédiatement dans Claude.ai → Paramètres. C'est le livrable concret de cette leçon.",
      placeholder:"MOI :\nMon prénom : ...\nMon activité : ...\nMon client idéal : ...\nMes projets en cours : ...\n\nCOMMENT TRAVAILLER AVEC MOI :\nTon : ...\nLongueur : ...\nFormat : ...\n\nCE QUE TU DOIS SAVOIR :\n...",
      minLength:150,
      feedback_ok:"Instructions solides. Maintenant l'étape cruciale : colle-les dans Claude.ai → Settings → Personal preferences. Ouvre une nouvelle conversation et vérifie que Claude te répond en tenant compte de ton contexte sans que tu aies à l'expliquer. Tu viens de créer ton premier 'actif IA' — quelque chose qui travaille pour toi en permanence.",
      feedback_ko:"Les instructions sont trop vagues pour être vraiment utiles. L'objectif est que Claude puisse te répondre sans que tu aies besoin de te présenter. Assure-toi d'avoir : 1) ton activité précise (pas juste 'consultant' mais 'consultant en recrutement pour PME industrielles'), 2) ta cible précise, 3) au moins 1 projet en cours concret. Plus c'est spécifique, plus chaque future réponse sera calibrée."
    }
  },

  // ── MODULE 02 — Parler à l'IA comme un pro ──
  "02.01": {
    intro: "La plupart des gens écrivent à Claude comme ils envoient un SMS. Les pros écrivent avec une structure. La différence ? Une réponse médiocre vs une réponse directement exploitable.",
    objective: "Construire n'importe quel prompt professionnel avec la formule RCTFE.",
    blocks: [
      { type:"checklist", items:[
        "Tu maîtriseras les 5 composants d'un prompt expert (formule RCTFE)",
        "Tu construiras un prompt RCTFE complet pour une tâche réelle de ton business",
        "Tu verras la différence concrète entre un prompt amateur et un prompt pro"
      ]},
      { type:"text", title:"La formule RCTFE — 5 composants qui changent tout",
        body:`<p><strong>R — Rôle</strong><br>
Donne à Claude le rôle d'un expert précis. Pas "un expert en marketing" — mais "un directeur marketing B2B avec 15 ans d'expérience dans le SaaS qui a lancé 3 produits à 7 chiffres". Plus le rôle est précis, plus la réponse est pointue.</p>
<p><strong>C — Contexte</strong><br>
Explique ta situation : qui tu es, ce que tu vends, à qui, où tu en es. Claude ne te connaît pas — donne-lui tout ce qu'un consultant externe aurait besoin de savoir avant de travailler avec toi.</p>
<p><strong>T — Tâche</strong><br>
Décris ce que tu veux avec une précision chirurgicale. "Rédige" est trop vague. "Rédige 3 versions d'un email de relance pour un prospect qui n'a pas répondu depuis 8 jours" est parfait.</p>
<p><strong>F — Format</strong><br>
Spécifie la forme exacte de la réponse : longueur (200 mots max), structure (liste numérotée / paragraphes / tableau), ton (direct / formel / conversationnel), ce qu'il faut éviter.</p>
<p><strong>E — Exemples</strong><br>
Donne 1-2 exemples de ce que tu veux obtenir. C'est la technique la plus sous-utilisée. Montrer est toujours plus efficace que décrire.</p>` },
      { type:"prompt", label:"Exemple RCTFE complet — à tester maintenant",
        content:`R (Rôle) : Tu es un consultant en positionnement pour indépendants et freelances, spécialisé dans les marchés B2B français. Tu es connu pour donner des feedbacks directs et actionnables, sans diplomatie inutile.

C (Contexte) : Je suis [TON ACTIVITÉ]. Je cible [TA CIBLE]. Mon offre actuelle : [TON OFFRE]. Problème : je me bats sur le prix contre des concurrents moins chers.

T (Tâche) : Analyse mon positionnement et donne-moi 3 axes de différenciation concrets qui me permettraient de justifier un tarif 40% plus élevé que le marché.

F (Format) : 3 axes numérotés. Pour chacun : nom de l'axe (4 mots max), explication (3 phrases), et 1 exemple concret de comment le communiquer à un prospect.

E (Exemple de ce que je ne veux PAS) : Pas de conseils génériques comme "offre plus de valeur" ou "améliore ton service client". Je veux du spécifique, du différenciant, du concret.` },
      { type:"callout", style:"warn", title:"Tu n'as pas toujours besoin des 5 composants",
        text:"RCTFE n'est pas une checklist rigide — c'est un framework. Pour une tâche simple ('Traduis ce texte en anglais'), pas besoin de tout ça. Plus la tâche est complexe ou stratégique, plus tu as besoin des 5 composants." }
    ],
    exercise: {
      type:"freetext",
      question:"Construis ton premier prompt RCTFE complet",
      desc:"Choisis une tâche réelle de ton business (rédiger une offre, analyser un concurrent, préparer un pitch...) et construis le prompt RCTFE complet. Utilise ton vrai contexte.",
      placeholder:"R (Rôle) : Tu es...\n\nC (Contexte) : Je suis... Je cible... Mon problème...\n\nT (Tâche) : Je veux que tu...\n\nF (Format) : [longueur, structure, ton]\n\nE (Exemple ou contre-exemple) : ...",
      minLength:150,
      feedback_ok:"Excellent prompt RCTFE ! Remarque la différence de densité d'information entre ce prompt et un prompt basique. Claude a maintenant tout ce dont il a besoin pour te donner une réponse vraiment personnalisée et actionnable. Colle-le dans Claude et regarde la différence.",
      feedback_ko:"Trop superficiel — un prompt RCTFE efficace doit avoir au minimum un rôle précis (pas générique), un contexte spécifique à TON business, et une tâche décrite avec précision. Reprends chaque composant et détaille-le davantage."
    }
  },

  "02.02": {
    intro: "Comprendre la formule RCTFE en théorie, c'est bien. Voir la transformation concrète sur des exemples réels, c'est ce qui va vraiment changer ta pratique.",
    objective: "Transformer n'importe quel prompt basique en prompt expert en moins de 3 minutes.",
    blocks: [
      { type:"checklist", items:[
        "Tu verras 5 transformations avant/après sur des cas réels d'entrepreneurs",
        "Tu apprendras le pattern de transformation en 3 étapes",
        "Tu repartiras avec un template universel réutilisable dans ta bibliothèque"
      ]},
      { type:"text", title:"5 transformations avant/après — cas réels",
        body:`<p><strong>Cas 1 — Email de prospection</strong></p>
<p>✗ Basique : <em>"Rédige un email de prospection pour vendre ma formation."</em></p>
<p>✓ Expert : <em>"Tu es un copywriter email B2B. Contexte : je vends une formation IA à 97€ pour entrepreneurs solo (28-45 ans), ils perdent 3h/jour sur des tâches automatisables. Tâche : rédige 2 versions d'email de prospection froide — une version 'pain' (douleur) et une version 'gain' (résultat). Format : objet + corps de 120 mots max + PS. Ton : direct, pas corporate. À éviter : jargon, formules creuses, intro générique."</em></p>

<p><strong>Cas 2 — Analyse concurrentielle</strong></p>
<p>✗ Basique : <em>"Analyse mes concurrents."</em></p>
<p>✓ Expert : <em>"Tu es un analyste stratégique. Contexte : je suis [ACTIVITÉ]. Mes 3 concurrents directs : [A], [B], [C]. Tâche : pour chacun, identifie leur positionnement prix, leur promesse principale, leur client cible, et leur point faible. Format : tableau comparatif + 1 paragraphe sur l'opportunité de différenciation que tu vois pour moi."</em></p>

<p><strong>Cas 3 — Post LinkedIn</strong></p>
<p>✗ Basique : <em>"Écris un post LinkedIn sur l'IA."</em></p>
<p>✓ Expert : <em>"Tu es content strategist LinkedIn. Contexte : [MON ACTIVITÉ], je parle à des entrepreneurs 30-45 ans. Tâche : rédige un post éducatif sur [SUJET PRÉCIS] — le format 'j'ai appris que...' qui révèle une info contre-intuitive. Format : hook (1 ligne choc) + blanc + corps (6-8 lignes aérées) + CTA question. 200 mots max. Ton : direct, sans bullshit corporate."</em></p>` },
      { type:"callout", style:"info", title:"Le pattern de transformation en 3 étapes",
        text:"1. Ajoute le rôle (qui doit répondre, avec quelle expertise). 2. Ajoute ton contexte (qui tu es, ta cible, ta situation). 3. Spécifie le format exact (longueur, structure, ton, ce à éviter). Ces 3 ajouts transforment n'importe quel prompt médiocre." },
      { type:"prompt", label:"Template universel — garde-le dans ta bibliothèque",
        content:`[RÔLE] : Tu es [expert précis avec expérience/spécialité].

[CONTEXTE] : Je suis [activité + positionnement]. Ma cible : [qui + problème]. Ma situation actuelle : [contexte spécifique à cette tâche].

[TÂCHE] : [verbe d'action précis + objet + détails]. Je veux obtenir [résultat attendu].

[FORMAT] : 
- Longueur : [X mots / X points / X paragraphes]
- Structure : [liste / tableau / sections titrées / texte continu]
- Ton : [direct / professionnel / conversationnel / inspirant]
- À éviter : [ce que tu ne veux pas]

[EXEMPLES] (optionnel) : Voici un exemple de ce que je veux : [exemple]` }
    ],
    exercise: {
      type:"freetext",
      question:"Transforme ce prompt médiocre",
      desc:`Voici un prompt médiocre utilisé par quelqu'un dans ton secteur : "Aide-moi à créer du contenu pour mes réseaux sociaux." Transforme-le en prompt expert RCTFE adapté à TON activité réelle.`,
      placeholder:"R : Tu es...\nC : Je suis... Ma cible...\nT : Crée...\nF : Format...\nE : Exemple...",
      minLength:120,
      feedback_ok:"Transformation réussie. Compare mentalement les deux versions : l'une donne une réponse générique sur 'les réseaux sociaux', l'autre produit un plan de contenu sur-mesure pour ton activité. C'est ça la vraie productivité avec l'IA.",
      feedback_ko:"La transformation est insuffisante — le contexte est encore trop vague. Pour que Claude produise du contenu vraiment sur-mesure, il a besoin de savoir précisément ce que tu vends, à qui, et le ton dans lequel tu veux communiquer."
    }
  },

  "02.03": {
    intro: "Tu connais la formule RCTFE. Mais même avec une bonne structure, certaines erreurs sabotent systématiquement tes résultats. Voilà les 5 pièges que font encore les utilisateurs expérimentés.",
    objective: "Éliminer les 5 erreurs avancées qui dégradent même les bons prompts.",
    blocks: [
      { type:"checklist", items:[
        "Tu identifieras les erreurs avancées que font même les utilisateurs expérimentés",
        "Tu apprendras à obtenir de vrais feedbacks critiques de Claude (sans complaisance)",
        "Tu maîtriseras l'itération ciblée — la technique la plus sous-utilisée"
      ]},
      { type:"text", title:"Les 5 erreurs qui sabotent même les bons prompts",
        body:`<p><strong>Erreur 1 — Le contexte mensonger.</strong><br>
Dire à Claude "tu es un expert en X" ne suffit pas. S'il n'a pas les informations factuelles que cet expert aurait, il va combler les lacunes avec des hallucinations. Solution : donne les informations réelles, pas juste le titre.</p>

<p><strong>Erreur 2 — La tâche implicite.</strong><br>
"Améliore ce texte" — améliore comment ? Plus court ? Meilleur ton ? Plus percutant ? Plus SEO ? Chaque interprétation donne un résultat différent. Sois explicite sur CE QUE tu veux améliorer.</p>

<p><strong>Erreur 3 — Les contraintes contradictoires.</strong><br>
"Sois très détaillé mais garde ça court" → Claude va faire un compromis médiocre. Quand tu as des contraintes qui semblent opposées, choisis l'une ou l'autre, ou précise la hiérarchie.</p>

<p><strong>Erreur 4 — Demander une opinion sans demander une critique.</strong><br>
"Qu'est-ce que tu penses de mon offre ?" → Claude va être gentil et trouver des points positifs. Si tu veux un vrai feedback, demande explicitement : "Joue l'avocat du diable. Dis-moi tout ce qui ne tient pas dans cette offre."</p>

<p><strong>Erreur 5 — Changer de sujet dans la même conversation.</strong><br>
Claude maintient un contexte tout au long de la conversation. Si tu passes d'un sujet à un autre sans prévenir, il mélange les contextes. Pour une nouvelle tâche non liée, démarre une nouvelle conversation.</p>` },
      { type:"callout", style:"success", title:"Le test du feedback ciblé",
        text:"Quand Claude te donne une réponse décevante, ne relance pas de zéro. Dis-lui exactement ce qui ne va pas : 'Le ton est trop formel — je veux quelque chose de plus direct et sans fioritures' ou 'Tu as répondu en général, mais je veux une réponse spécifique à mon marché : [DÉTAIL]'. 90% du temps, l'itération ciblée donne le résultat voulu." },
      { type:"prompt", label:"Prompt — Faire critiquer ton travail par Claude sans complaisance",
        content:`Je vais te soumettre [un texte / une offre / un plan / une stratégie]. J'ai besoin d'un feedback brutal et honnête, pas d'encouragements.

Instructions :
1. Commence par lister TOUS les problèmes que tu vois — sans filtre
2. Pour chaque problème, donne une solution concrète en 1-2 phrases
3. Note-le globalement sur 10 avec justification
4. Dis-moi ce que tu changerais en priorité si tu étais à ma place

Ce que je te soumets : [COLLE TON TEXTE / OFFRE / PLAN ICI]

Important : si tu penses que c'est bien, cherche quand même ce qui pourrait être mieux. Un feedback 100% positif ne m'est d'aucune utilité.` }
    ],
    exercise: {
      type:"qcm",
      question:"Tu demandes à Claude : 'Qu'est-ce que tu penses de mon idée de podcast sur l'entrepreneuriat ?' Il te répond positivement en listant les avantages. Que fais-tu ?",
      options:[
        { text:"Tu prends ça comme validation et tu lances le podcast", correct:false },
        { text:"Tu relances en disant : 'Le marché est saturé. Joue le rôle d'un créateur de podcasts cynique qui a vu 100 projets échouer. Dis-moi tout ce qui va clocher avec mon idée.'", correct:true },
        { text:"Tu demandes : 'Est-ce que tu es sûr que c'est une bonne idée ?'", correct:false },
        { text:"Tu cherches un autre outil IA qui sera plus honnête", correct:false }
      ],
      feedback_ok:"Exactement. Forcer Claude à adopter un rôle critique et sceptique lui permet de sortir de son biais naturel à être helpful/positif. C'est la technique la plus efficace pour obtenir un vrai feedback stratégique plutôt qu'une validation encourageante.",
      feedback_ko:"La bonne réponse est B. En donnant à Claude le rôle d'un expert sceptique avec un historique de projets échoués, tu contournes son biais de complaisance naturel. Tu veux des problèmes, pas de la validation."
    }
  },

  // ── MODULE 03 — Gagner du temps au quotidien ──
  "03.01": {
    intro: "L'email est la tâche qui vole le plus de temps aux entrepreneurs. En moyenne : 3h par jour. Avec Claude, tu peux réduire ça à 30 minutes — sans sacrifier la qualité ni le ton personnel.",
    objective: "Rédiger n'importe quel email professionnel en moins de 60 secondes.",
    blocks: [
      { type:"checklist", items:[
        "Tu auras les 6 templates emails les plus utilisés en business",
        "Tu apprendras la technique du 'contexte émotionnel' pour les emails délicats",
        "Tu repartiras avec le prompt de l'email le plus difficile que tu dois envoyer en ce moment"
      ]},
      { type:"text", title:"Les 6 emails que tu écris en boucle (et leurs templates)",
        body:`<p><strong>Email de prospection froide</strong> — contacter quelqu'un qui ne te connaît pas</p>
<p><strong>Email de relance</strong> — suivre un prospect ou client silencieux</p>
<p><strong>Email de proposition commerciale</strong> — envoyer un devis ou une offre</p>
<p><strong>Email de refus ou mauvaise nouvelle</strong> — dire non professionnellement</p>
<p><strong>Email de remerciement après rendez-vous</strong> — consolider la relation</p>
<p><strong>Email de réponse à réclamation</strong> — gérer un client insatisfait sans s'énerver</p>
<p>Pour chacun, la formule est la même : <strong>contexte rapide + objectif clair + appel à l'action unique.</strong></p>` },
      { type:"prompt", label:"Template universel email pro — adapte et réutilise",
        content:`Tu es un expert en communication professionnelle écrite, reconnu pour des emails concis, directs, qui obtiennent des réponses.

Rédige un email [TYPE D'EMAIL : prospection / relance / proposition / refus / remerciement / réclamation].

Contexte :
- Expéditeur : [QUI TU ES — activité, positionnement]
- Destinataire : [QUI EST LE DESTINATAIRE — fonction, entreprise, relation avec toi]
- Historique : [CE QUI S'EST PASSÉ AVANT cet email]
- Objectif de cet email : [CE QUE TU VEUX QU'IL SE PASSE après lecture]

Format :
- Objet : percutant, 6-8 mots max, pas de spam words
- Corps : 80-120 mots maximum
- CTA : 1 seul, clair, avec deadline si pertinent
- Ton : [professionnel / direct / chaleureux / ferme]
- Pas d'intro générique du type "J'espère que vous allez bien"` },
      { type:"callout", style:"success", title:"La technique du contexte émotionnel",
        text:"Pour les emails délicats (refus, réclamation, relance insistante), ajoute dans ton prompt : 'Le destinataire est probablement [frustré / déçu / occupé / méfiant]. Adapte le ton pour désamorcer ça dès la première ligne.' Claude ajustera le registre émotionnel avec une précision étonnante." },
      { type:"prompt", label:"Prompt — Transformer un brouillon médiocre en email pro",
        content:`Voici un brouillon d'email que j'ai écrit rapidement. Améliore-le pour qu'il soit professionnel, direct, et efficace.

MON BROUILLON :
[COLLE TON BROUILLON ICI]

Objectif de cet email : [CE QUE TU VEUX QU'IL SE PASSE]
Relation avec le destinataire : [PREMIÈRE PRISE DE CONTACT / CLIENT EXISTANT / PARTENAIRE / etc.]

Consignes :
- Garde le sens et les informations clés
- Supprime les formules vides et les tournures molles
- Ajoute un objet percutant si je n'en ai pas
- Maximum 120 mots corps de l'email` }
    ],
    exercise: {
      type:"freetext",
      question:"Rédige le prompt pour l'email le plus difficile que tu as à envoyer en ce moment",
      desc:"Pense à un email que tu remets depuis plusieurs jours (relance client, demande difficile, refus à formuler...). Construis le prompt complet qui permettra à Claude de le rédiger parfaitement.",
      placeholder:"Type d'email : ...\nContexte : Expéditeur (moi) : ... / Destinataire : ... / Historique : ...\nObjectif : Je veux que le destinataire...\nTon : ...\nCe à éviter : ...",
      minLength:100,
      feedback_ok:"Parfait. Maintenant copie ce prompt dans Claude et envoie l'email dans les 5 prochaines minutes. La vraie productivité IA, c'est passer à l'action immédiatement — pas d'accumuler des prompts.",
      feedback_ko:"Trop vague — pour un email difficile, le contexte est crucial. Précise l'historique relationnel avec cette personne, l'objectif exact de l'email, et l'état émotionnel probable du destinataire."
    }
  },

  "03.02": {
    intro: "Contrats, rapports, articles, emails longs, PDF... Chaque semaine tu passes des heures à lire des documents que Claude pourrait analyser en 2 minutes. Voilà comment.",
    objective: "Extraire l'essentiel de n'importe quel document en moins de 2 minutes.",
    blocks: [
      { type:"checklist", items:[
        "Tu maîtriseras les 4 techniques d'analyse de documents avec Claude",
        "Tu sauras analyser un contrat de 40 pages pour les clauses qui te concernent",
        "Tu apprendras à transformer Claude en base de connaissances interactive sur un document"
      ]},
      { type:"text", title:"Les 4 opérations d'analyse que Claude maîtrise parfaitement",
        body:`<p><strong>1. Le résumé structuré</strong> — extraire les points clés en format actionnable. Pas un résumé passif ("l'auteur dit que...") mais une extraction des décisions à prendre, risques identifiés, opportunités.</p>
<p><strong>2. L'extraction ciblée</strong> — trouver une information précise dans un long document. Tu colles 50 pages de contrat, tu demandes : "Quelles sont les clauses de rupture anticipée et leurs conditions ?"</p>
<p><strong>3. La comparaison</strong> — analyser plusieurs documents simultanément. Tu colles 3 propositions de prestataires et tu demandes un tableau comparatif sur les critères qui comptent pour toi.</p>
<p><strong>4. Les questions interactives</strong> — traiter le document comme une base de connaissances. Tu colles le document une fois, puis tu poses toutes tes questions dessus dans la même conversation.</p>` },
      { type:"prompt", label:"Prompt — Analyse complète d'un document business",
        content:`Voici [un contrat / rapport / article / email long] que je dois analyser :

[COLLE LE DOCUMENT ICI — ou colle le texte si c'est un PDF]

Analyse-le selon ces 4 axes :

1. RÉSUMÉ EXÉCUTIF : Les 3-5 points les plus importants à retenir (format bullet points)
2. DÉCISIONS À PRENDRE : Qu'est-ce que ce document implique pour moi concrètement ?
3. POINTS D'ATTENTION / RISQUES : Ce qui mérite d'être creusé ou négocié
4. QUESTIONS À POSER : Ce qui n'est pas clair ou qui manque

Format : sections séparées, language direct, pas de paraphrase — donne-moi ce qui est actionnable.` },
      { type:"callout", style:"warn", title:"Limite importante : les PDFs",
        text:"Claude ne peut pas lire les fichiers PDF directement sauf si tu utilises Claude.ai Pro (fonction d'upload de fichiers). Pour les PDFs, deux solutions : copier-coller le texte depuis le PDF, ou utiliser Adobe Acrobat 'Ask AI' ou ChatGPT qui lisent les PDFs nativement." },
      { type:"prompt", label:"Prompt rapide — Questions sur un document",
        content:`Je vais te soumettre un document. Lis-le en entier, puis attends mes questions — ne génère rien avant que je t'en demande.

DOCUMENT :
[COLLE ICI]

Confirme quand tu as lu en disant "Lu — prêt pour tes questions."` }
    ],
    exercise: {
      type:"qcm",
      question:"Tu reçois un contrat de 40 pages d'un nouveau client. Tu n'as pas le temps de tout lire mais tu dois signer d'ici demain. Quelle est la meilleure approche avec Claude ?",
      options:[
        { text:"Lui demander : 'Est-ce que ce contrat est bon ?' sans coller le document", correct:false },
        { text:"Coller le contrat et demander : 'Identifie toutes les clauses qui pourraient me désavantager, les obligations engageantes, et les points qui méritent d'être renégociés avant signature'", correct:true },
        { text:"Lui demander un résumé général du contrat sans orientation spécifique", correct:false },
        { text:"Lui demander de réécrire le contrat entier", correct:false }
      ],
      feedback_ok:"Exactement. La question ciblée ('clauses désavantageuses + obligations + points à renégocier') donne à Claude une mission précise d'analyste légal. Tu obtiens une analyse actionnable, pas un résumé passif. Attention : toujours faire valider par un vrai avocat pour les contrats importants.",
      feedback_ko:"La bonne réponse est B. En orientant précisément l'analyse (trouver les risques, les obligations, les points de renégociation), tu obtiens une analyse actionnable. Un résumé général ne t'aide pas à décider si tu dois signer ou renégocier."
    }
  },

  "03.03": {
    intro: "La désorganisation tue la productivité avant même que tu ouvres Claude. Mais quand tu combines une méthode de planification solide avec l'IA, tu passes d'un agenda subi à un agenda maîtrisé.",
    objective: "Planifier sa semaine et prioriser ses projets avec Claude en 15 minutes.",
    blocks: [
      { type:"checklist", items:[
        "Tu apprendras la méthode en 3 temps pour planifier ta semaine avec Claude",
        "Tu créeras ton plan de semaine réel en utilisant ta vraie to-do list",
        "Tu auras un système de revue hebdomadaire que tu pourras répéter chaque dimanche"
      ]},
      { type:"text", title:"La méthode en 3 temps pour planifier avec l'IA",
        body:`<p><strong>Temps 1 — Le dump mental du dimanche (10 min)</strong><br>
Avant la semaine, tu fais un brain dump complet dans Claude : tout ce qui est sur ta to-do liste, tes projets en cours, tes contraintes, ton énergie actuelle. Tu lui demandes ensuite de t'aider à prioriser selon la matrice impact/urgence.</p>
<p><strong>Temps 2 — Le plan de semaine (5 min)</strong><br>
Claude structure ta semaine en blocs de travail selon tes priorités. Il place les tâches cognitives lourdes aux heures où tu as le plus d'énergie, les tâches administratives aux créneaux faibles.</p>
<p><strong>Temps 3 — La revue journalière (3 min)</strong><br>
Chaque matin, tu colles ta liste du jour et tu demandes à Claude de l'organiser en ordre optimal — en tenant compte de ce qui s'est passé la veille.</p>` },
      { type:"prompt", label:"Prompt — Planification hebdomadaire complète",
        content:`Je prépare ma semaine. Aide-moi à structurer efficacement mon temps.

CONTEXTE :
Mon activité : [CE QUE TU FAIS]
Mes objectifs de cette semaine : [3 résultats que tu veux avoir atteints vendredi]
Mes contraintes : [réunions fixes, déplacements, obligations personnelles]
Mon énergie : [tu es plutôt matin/soir, tes créneaux de haute concentration]

MA LISTE DE TÂCHES :
[COLLE TOUTE TA TO-DO LIST — même le désordre complet]

Crée :
1. Un classement des tâches par priorité (impact business immédiat + urgence)
2. Un plan jour par jour (lundi → vendredi) avec blocs de travail
3. Les 3 tâches "non négociables" à faire en priorité cette semaine
4. Les tâches à déléguer, reporter, ou supprimer carrément` },
      { type:"callout", style:"info", title:"Claude comme coach de productivité",
        text:"Va plus loin : à la fin de chaque semaine, colle ton plan vs ce que tu as réellement accompli. Demande à Claude d'analyser les écarts : 'J'avais prévu X mais j'ai fait Y. Qu'est-ce que ça révèle sur mes patterns de procrastination et comment les corriger la semaine prochaine ?' Tu auras un feedback personnel de coach en 30 secondes." },
      { type:"prompt", label:"Prompt — Prioritisation d'un projet complexe",
        content:`J'ai un projet avec beaucoup de tâches en parallèle et je ne sais pas par où commencer.

MON PROJET : [DÉCRIS LE PROJET EN 2-3 PHRASES]
DEADLINE : [DATE]
RESSOURCES : [temps disponible par semaine, budget, personnes disponibles]

MA LISTE DE TÂCHES DU PROJET :
[LISTE TOUTES LES TÂCHES, même en vrac]

Génère :
1. Le chemin critique (les tâches qui bloquent les autres si non faites)
2. Un ordre d'exécution optimal avec estimation de durée
3. Les tâches que je peux paralléliser
4. Les 3 risques principaux qui pourraient faire rater la deadline` }
    ],
    exercise: {
      type:"freetext",
      question:"Planifie ta semaine avec Claude — et identifie ce que ton cerveau évitait",
      desc:"Lance le prompt de planification hebdomadaire avec ta vraie liste de tâches. Résume ici : tes 3 priorités non-négociables selon Claude, une tâche que tu avais tendance à procrastiner et que Claude a remontée en priorité, et ce que tu as appris sur tes angles morts de priorisation.",
      placeholder:"Ma liste brute donnée à Claude : [décris brièvement le type de tâches]\n\nMes 3 priorités non-négociables selon Claude :\n1. ...\n2. ...\n3. ...\n\nLa tâche que j'évitais et qui était en réalité prioritaire : ...\n\nCe que j'ai appris sur ma façon de prioriser : ...\n\nCe que je vais changer dès demain : ...",
      minLength:130,
      feedback_ok:"Excellent. La vraie valeur de la planification avec Claude n'est pas d'avoir une belle to-do list — c'est de voir tes biais de priorisation de l'extérieur. Si tu as identifié une tâche que tu évitais mais qui était prioritaire, c'est exactement ça : un angle mort humain que Claude rend visible. Fais ça chaque lundi matin — ça prend 5 minutes et ça change ta semaine.",
      feedback_ko:"Tu n'as pas vraiment utilisé Claude pour planifier — réponds avec de vraies informations. La valeur de cet exercice vient UNIQUEMENT de voir Claude analyser TES vraies tâches et identifier tes vraies priorités. Lance le prompt, lis le résultat, puis reviens ici avec ce que tu as découvert."
    }
  },

  // ── MODULE 04 — Créer du contenu qui te ressemble ──
  "04.01": {
    intro: "Le problème numéro 1 avec le contenu généré par l'IA : ça ressemble à du contenu généré par l'IA. Voilà comment faire écrire Claude avec ta voix — pas la sienne.",
    objective: "Créer ta charte de voix pour que Claude écrive comme toi, pas comme un robot.",
    blocks: [
      { type:"checklist", items:[
        "Tu comprendras pourquoi le contenu IA sonne générique et comment le corriger",
        "Tu créeras ta charte de voix personnelle en analysant tes textes avec Claude",
        "Cette charte sera ton outil de référence pour tout futur contenu — pour des années"
      ]},
      { type:"text", title:"Pourquoi le contenu IA sonne faux (et comment corriger ça)",
        body:`<p>Claude a un style par défaut : équilibré, poli, un peu générique. Si tu ne lui donnes pas ta voix, c'est celle-là qu'il utilise. Résultat : tes posts LinkedIn ressemblent à tous les autres posts LinkedIn générés par l'IA.</p>
<p>La solution : le <strong>few-shot styling</strong>. Tu lui donnes des exemples de TON écriture — emails, posts, messages — et il extrait ton ADN stylistique : longueur des phrases, mots que tu utilises, façon de structurer les idées, ton émotionnel, humour ou absence d'humour.</p>
<p>Une fois ce profil créé, Claude peut reproduire ton style sur n'importe quel sujet.</p>` },
      { type:"prompt", label:"Étape 1 — Faire analyser ton style par Claude",
        content:`Voici 3 exemples de textes que j'ai écrits moi-même (emails, posts, messages, peu importe) :

EXEMPLE 1 :
[COLLE UN TEXTE QUE TU AS ÉCRIT]

EXEMPLE 2 :
[COLLE UN AUTRE TEXTE QUE TU AS ÉCRIT]

EXEMPLE 3 :
[COLLE UN TROISIÈME TEXTE]

Analyse précisément mon style d'écriture :
1. Longueur moyenne des phrases et structure des paragraphes
2. Vocabulaire caractéristique (mots que j'utilise souvent, mots que j'évite)
3. Ton dominant (direct / nuancé / émotionnel / factuel / humoristique...)
4. Façon de commencer et de terminer
5. Éléments stylistiques distinctifs (ponctuation, majuscules, tirets...)
6. Ce qui rend ce style reconnaissable comme le mien

Rédige ensuite une "charte de voix" en 150 mots que tu pourras utiliser comme instruction permanente.` },
      { type:"prompt", label:"Étape 2 — Générer du contenu dans ton style",
        content:`[COLLE TA CHARTE DE VOIX DE L'ÉTAPE 1]

Maintenant, écris [TYPE DE CONTENU] sur [SUJET] en respectant exactement cette charte.

Contenu souhaité : [DÉCRIS CE QUE TU VEUX]
Format : [LONGUEUR ET STRUCTURE]
Objectif : [CE QUE TU VEUX QUE LE LECTEUR FASSE OU RESSENTE]

Important : si tu repères que tu t'éloignes de la charte stylistique, corrige-toi automatiquement.` },
      { type:"callout", style:"warn", title:"Le test du 'c'est vraiment moi ?'",
        text:"Après génération, relis le texte à voix haute. Si tu achoppe sur des mots que tu n'utilises jamais ou des tournures qui ne te ressemblent pas, donne ce feedback précis à Claude : 'Le mot X ne fait pas partie de mon vocabulaire, remplace-le' ou 'Je n'écris jamais des phrases aussi longues — simplifie.' Itère 2-3 fois." }
    ],
    exercise: {
      type:"freetext",
      question:"Crée ta charte de voix personnelle — ton ADN stylistique en 10 règles",
      desc:"Colle 2-3 textes que tu as écrits (emails, posts, messages — peu importe) dans Claude avec le prompt d'analyse de l'étape 1. Colle ici la charte complète qu'il génère. Elle doit comporter au minimum : ton style, tes mots récurrents, ton ton, et 3 mots à bannir absolument.",
      placeholder:"Ma charte de voix (générée par Claude sur mes vraies textes) :\n\nMon style : [longueur de phrases, structure typique]\n\nMon vocabulaire caractéristique : [mots que j'utilise souvent]\n\nMon ton dominant : [direct / nuancé / émotionnel / autre]\n\nCe qui me rend reconnaissable : [l'élément distinctif de mon écriture]\n\n3 mots / formules à bannir : [ce que Claude a identifié comme générique chez moi]\n\nLa règle que je dois toujours respecter : ...",
      minLength:130,
      feedback_ok:"Excellente charte. Maintenant deux étapes immédiates : (1) colle-la dans tes instructions personnalisées Claude pour qu'elle soit active en permanence, (2) génère un post LinkedIn avec cette charte et compare avec ce que tu aurais écrit sans. La différence sera immédiatement visible. Sauvegarde aussi cette charte dans Notion — tu vas la réutiliser pendant des années.",
      feedback_ko:"La charte est trop générique — elle aurait pu être écrite pour n'importe qui. Pour qu'elle fonctionne, Claude doit avoir analysé TES vrais textes (pas des descriptions théoriques de ton style). Retourne à l'étape 1, colle de vrais textes que tu as écrits, et utilise le résultat. Un bon signal : la charte doit mentionner des mots ou tournures spécifiques que tu utilises vraiment."
    }
  },

  "04.02": {
    intro: "Tu as ta voix. Maintenant on passe aux formats. LinkedIn, threads, newsletters — chaque format a ses codes. Voilà les templates qui fonctionnent et comment les adapter à ton style.",
    objective: "Générer des posts LinkedIn et newsletters performants en moins de 5 minutes.",
    blocks: [
      { type:"checklist", items:[
        "Tu maîtriseras la structure des 3 formats de contenu les plus rentables",
        "Tu auras les templates complets LinkedIn et newsletter prêts à l'emploi",
        "Tu publieras ton prochain post LinkedIn cette semaine grâce à cet exercice"
      ]},
      { type:"text", title:"Les 3 formats et leurs codes spécifiques",
        body:`<p><strong>LinkedIn — le format professionnel à fort reach</strong><br>
Structure gagnante : hook (1 ligne, accroche le scroll) → blanc → corps (6-8 lignes aérées) → CTA question. Longueur idéale : 150-250 mots. Meilleure heure : mardi/mercredi/jeudi 8h-9h ou 17h-18h. Hashtags : 3-5 en fin de post.</p>

<p><strong>Thread (X/Twitter ou LinkedIn carrousel)</strong><br>
Structure : tweet 1 = hook fort qui force à continuer → tweets 2-7 = une idée par tweet, court, punchy → tweet final = résumé ou CTA. Chaque tweet doit tenir seul et donner envie de lire le suivant.</p>

<p><strong>Newsletter — le canal à plus forte conversion</strong><br>
Structure : objet (curiosité ou promesse claire) → intro personnelle (2-3 lignes) → 1 idée principale développée → 1 ressource utile → 1 CTA léger. Longueur : 300-500 mots. Fréquence recommandée : hebdomadaire.</p>` },
      { type:"prompt", label:"Template LinkedIn — Post éducatif haute performance",
        content:`[COLLE TA CHARTE DE VOIX]

Rédige un post LinkedIn éducatif sur le sujet suivant : [SUJET]

Structure obligatoire :
- Ligne 1 (hook) : affirmation contre-intuitive OU chiffre surprenant OU question provocante — MAX 8 mots
- Ligne 2 : vide (pour créer le "Voir plus")
- Corps (6-8 lignes) : 1 idée principale en 3-4 points concrets, sauts de ligne fréquents
- CTA final : question ouverte pour générer des commentaires

Ton : [TON DE TA CHARTE]
Longueur : 180-220 mots
Hashtags : 3-4 pertinents en dernière ligne
À éviter : emojis excessifs, jargon corporate, intro générique` },
      { type:"prompt", label:"Template Newsletter — Édition hebdomadaire",
        content:`[COLLE TA CHARTE DE VOIX]

Rédige une édition de newsletter hebdomadaire.

Sujet principal : [THÈME DE CETTE ÉDITION]
Ce que j'ai vécu/appris cette semaine en lien avec ce sujet : [ANECDOTE OU INSIGHT PERSONNEL]
La ressource utile que je veux partager : [OUTIL / ARTICLE / TECHNIQUE]
Mon CTA cette semaine : [CE QUE JE VEUX QUE LE LECTEUR FASSE]

Structure :
- Objet email : curiosité ou promesse, max 50 caractères
- Intro personnelle : 2-3 lignes qui entrent directement dans le vif
- Idée principale : développée en 200-300 mots, avec sous-titres
- Ressource : 2-3 lignes de présentation + lien
- Outro + CTA : court, personnel, sans pression

Longueur totale : 400-500 mots` }
    ],
    exercise: {
      type:"freetext",
      question:"Génère ton prochain post LinkedIn — et fais-le passer le test du hook",
      desc:"Choisis un sujet lié à ton activité sur lequel tu as quelque chose de concret à dire. Génère le post avec ta charte de voix, puis teste le hook : lis uniquement la première ligne. Est-ce qu'elle te donne envie de lire la suite ? Si non, génère 3 variantes de hook et choisis la meilleure. Colle le post final ici.",
      placeholder:"Mon sujet : ...\n\n─── MON POST FINAL ───\n\n[HOOK — 1 ligne qui crée la curiosité ou l'arrêt de scroll]\n\n[BLANC]\n\n[LIGNE 1 du développement]\n[LIGNE 2]\n[LIGNE 3]\n[LIGNE 4]\n[LIGNE 5]\n[LIGNE 6]\n\n[BLANC]\n\n[CTA — question ou invitation à commenter]\n\n─── RETOUR D'EXPERIENCE ───\nHook original vs hook amélioré : ...\nCe que j'ai changé entre la v1 et la version finale : ...",
      minLength:200,
      feedback_ok:"Post solide. Avant de publier : vérifie le hook en couvrant tout le reste — si tu lis uniquement la première ligne, ça te donne envie de lire la suite ? Et le CTA est une vraie question (pas un CTA achat) ? Si oui — publie. Les entrepreneurs qui publient régulièrement avec leur vraie voix construisent une audience. Ceux qui attendent le post parfait ne publient jamais.",
      feedback_ko:"Le post est trop court ou manque de structure. Un bon post LinkedIn c'est : 1 hook fort (1 ligne) → 1 blanc → 5-7 lignes aérées de contenu → 1 blanc → 1 CTA. Le hook est le seul élément qui compte — si la première ligne n'accroche pas, personne ne lit la suite. Demande à Claude de générer 5 variantes de hook pour ton sujet et choisis la meilleure."
    }
  },

  // ── MODULE 05 — Apprendre n'importe quoi ──
  "05.01": {
    intro: "Claude peut être ton professeur, ton coach, ton sparring partner intellectuel. La plupart des gens ne l'utilisent pas pour apprendre — c'est l'une des applications les plus puissantes et les plus sous-exploitées.",
    objective: "Utiliser Claude comme tuteur personnel pour apprendre n'importe quoi 10x plus vite.",
    blocks: [
      { type:"checklist", items:[
        "Tu utiliseras la méthode socratique pour vraiment comprendre (pas juste mémoriser)",
        "Tu apprendras à faire tester tes connaissances par Claude",
        "Tu lanceras ta première vraie session d'apprentissage pendant cet exercice"
      ]},
      { type:"text", title:"Claude comme tuteur — ce qui le rend unique",
        body:`<p>Un tuteur humain coûte 50-200€/h. Claude est disponible 24h/24, s'adapte immédiatement à ton niveau, ne se lasse pas de répéter, et peut aller aussi loin que tu veux dans n'importe quel sujet.</p>
<p>Mais surtout : <strong>Claude peut utiliser la méthode socratique</strong>. Au lieu de te donner les réponses, il peut te poser des questions qui t'amènent à les trouver toi-même — la façon la plus efficace d'apprendre prouvée par la recherche en sciences de l'éducation.</p>
<p>La clé : lui donner explicitement le rôle de tuteur et calibrer le niveau. Un tuteur qui parle à un débutant comme à un expert est inutile — et vice versa.</p>` },
      { type:"prompt", label:"Prompt — Session d'apprentissage Socratic",
        content:`Tu es un tuteur expert en [DOMAINE À APPRENDRE]. Tu utilises la méthode socratique : tu poses des questions pour m'amener à découvrir les concepts par moi-même, plutôt que de me donner les réponses directement.

Mon niveau actuel : [DÉBUTANT COMPLET / J'AI DES BASES / INTERMÉDIAIRE]
Ce que je sais déjà : [LISTE CE QUE TU SAIS DÉJÀ SUR CE SUJET]
Ce que je veux apprendre : [OBJECTIF PRÉCIS]
Temps disponible pour cette session : [30 min / 1h / 2h]

Commence par évaluer mon niveau réel en me posant 3 questions. Selon mes réponses, adapte le niveau de la session.

Quand j'ai l'air de comprendre quelque chose, vérifie en me demandant de l'expliquer avec mes propres mots.` },
      { type:"prompt", label:"Prompt — Faire tester tes connaissances",
        content:`Je viens d'apprendre [SUJET]. Crée un quiz pour tester ma vraie compréhension.

Instructions :
- 5 questions de compréhension (pas de mémorisation pure)
- 3 questions d'application ("dans ce cas réel, que ferais-tu ?")
- 2 questions de synthèse ("explique le lien entre X et Y")
- Pour chaque mauvaise réponse, explique le concept mal compris — ne donne pas juste la bonne réponse
- Évalue ma performance finale et identifie mes lacunes prioritaires

Commence le quiz maintenant.` },
      { type:"callout", style:"info", title:"Le principe d'Feynman avec Claude",
        text:"La technique la plus puissante pour vérifier si tu as vraiment compris : demande à Claude de jouer le rôle d'un enfant de 12 ans et explique-lui le concept. Si tu n'arrives pas à l'expliquer simplement, c'est que tu ne l'as pas vraiment compris. Claude te posera des questions naïves qui révèlent tes lacunes." }
    ],
    exercise: {
      type:"freetext",
      question:"Lance une vraie session d'apprentissage — et explique le concept appris à un enfant de 12 ans",
      desc:"Choisis un sujet que tu veux maîtriser (copywriting, SEO, fiscalité freelance, négociation...). Lance la session socratique (15-20 min). Résume ici : le sujet, ce que tu as compris, et applique la technique Feynman — explique le concept principal comme si tu le présentais à un enfant de 12 ans. Si tu ne réussis pas à le simplifier, c'est que tu ne l'as pas encore vraiment compris.",
      placeholder:"Sujet choisi : ...\n\nMon niveau avant la session (0-10) : ...\n\n3 choses que j'ai apprises :\n1. ...\n2. ...\n3. ...\n\nMa lacune principale identifiée par Claude : ...\n\n— TECHNIQUE FEYNMAN —\nJ'explique [le concept principal] comme à un enfant de 12 ans :\n...\n\nCe qui m'a résisté à simplifier (et donc pas encore vraiment compris) : ...\n\nSujet de ma prochaine session : ...",
      minLength:150,
      feedback_ok:"Tu viens d'utiliser les deux techniques d'apprentissage les plus puissantes en une seule session : la méthode socratique (Claude te questionne pour que tu découvres) + la technique Feynman (simplifier pour vérifier que tu as vraiment compris). La lacune que tu as identifiée est le point de départ de ta prochaine session — planifie-la dans les 48h pendant que c'est frais.",
      feedback_ko:"Tu n'as pas vraiment lancé la session — tu as répondu théoriquement. Lance Claude maintenant avec le prompt socratique, apprends pendant 15 minutes sur un vrai sujet, puis reviens ici. La technique Feynman est la partie la plus importante : si tu n'arrives pas à expliquer simplement, c'est que tu ne comprends pas encore. C'est un signal utile, pas un échec."
    }
  },

  "05.02": {
    intro: "Apprendre vite n'est pas une question de talent. C'est une question de méthode. Claude peut t'aider à identifier le 20% d'un sujet qui donne 80% des résultats — et à le maîtriser 10x plus vite.",
    objective: "Créer un plan d'apprentissage accéléré sur n'importe quel sujet.",
    blocks: [
      { type:"checklist", items:[
        "Tu apprendras à identifier les 5 concepts fondamentaux de n'importe quel domaine",
        "Tu créeras un plan d'apprentissage sur-mesure pour une compétence que tu veux acquérir",
        "Tu éviteras les 80% de contenu superflu que la plupart des apprenants perdent leur temps à parcourir"
      ]},
      { type:"text", title:"Le principe 80/20 appliqué à l'apprentissage",
        body:`<p>Chaque domaine a une structure : 20% des concepts génèrent 80% des résultats pratiques. Apprendre en suivant l'ordre conventionnel (du chapitre 1 au chapitre 20) est souvent le chemin le plus long.</p>
<p>La question à poser à Claude : <strong>"Quels sont les 5 concepts fondamentaux de X dont la maîtrise rend tout le reste compréhensible ?"</strong></p>
<p>Exemples concrets :</p>
<ul>
<li>Copywriting : la structure AIDA + le principe de spécificité + les déclencheurs psychologiques</li>
<li>Comptabilité basique : actif/passif + flux de trésorerie + seuil de rentabilité</li>
<li>Référencement SEO : intention de recherche + autorité de domaine + maillage interne</li>
</ul>
<p>Maîtrise ces concepts fondamentaux → tout le reste devient logique et rapide à apprendre.</p>` },
      { type:"prompt", label:"Prompt — Créer un plan d'apprentissage accéléré",
        content:`Tu es un expert pédagogue spécialisé dans l'apprentissage accéléré. 

Je veux apprendre [DOMAINE / COMPÉTENCE] avec cet objectif précis : [CE QUE TU VEUX POUVOIR FAIRE UNE FOIS QUE TU AURAS APPRIS].

Mon niveau actuel : [DÉBUTANT / QUELQUES NOTIONS / INTERMÉDIAIRE]
Temps disponible : [X heures par semaine]
Délai objectif : [dans combien de temps]

Crée mon plan d'apprentissage :
1. Les 5 concepts fondamentaux à maîtriser en priorité absolue (avec explication de pourquoi)
2. Les ressources essentielles UNIQUEMENT (1-2 livres, 1-2 cours/sites — pas de liste de 20 ressources)
3. Ce que 80% des débutants perdent leur temps à apprendre (et qu'on peut éviter au début)
4. Un planning semaine par semaine
5. Comment mesurer ma progression

Sois sélectif et direct. Je préfère moins de ressources mais les meilleures.` },
      { type:"callout", style:"success", title:"La technique des sprints d'apprentissage",
        text:"Au lieu d'apprendre 30 minutes par jour pendant un mois, essaie : 3 sprints de 2h sur le week-end avec une nuit de sommeil entre chaque. La recherche montre que le cerveau consolide les apprentissages pendant le sommeil. 3 sessions de 2h avec sommeil intermédiaire > 12 sessions de 30 min quotidiennes." },
      { type:"keypoints",
        points:[
          { icon:"", title:"Commencer par le pourquoi", text:"Avant d'apprendre comment, comprends pourquoi ça marche — la compréhension profonde > la mémorisation" },
          { icon:"", title:"Practice > Théorie", text:"Applique chaque concept sur un cas réel dès que tu l'as compris — l'application ancre la connaissance" },
          { icon:"", title:"Te tester souvent", text:"La récupération active (se tester) est 3x plus efficace que la relecture pour mémoriser" },
          { icon:"", title:"Dormir entre les sessions", text:"Le sommeil consolide l'apprentissage — ne sacrifice pas ta nuit pour 'finir le chapitre'" }
        ] }
    ],
    exercise: {
      type:"qcm",
      question:"Tu veux apprendre à faire de la publicité Facebook en 4 semaines. Quelle est la meilleure première étape avec Claude ?",
      options:[
        { text:"Lui demander une liste complète de tout ce qu'il faut savoir sur la pub Facebook", correct:false },
        { text:"Lui demander les 5 concepts fondamentaux qui permettent de comprendre pourquoi certaines pubs marchent et d'autres non — avant même de toucher à l'interface", correct:true },
        { text:"Lui demander de trouver les meilleurs tutoriels YouTube sur la pub Facebook", correct:false },
        { text:"Commencer par créer une pub directement pour apprendre par essais/erreurs", correct:false }
      ],
      feedback_ok:"Exactement. Les 5 concepts fondamentaux (ciblage par intention, structure d'un funnel pub, copywriting d'une publicité, pixel de suivi, optimisation du budget) te donnent le cadre pour que tout le reste — les tutoriels, les cas pratiques, les tests — ait du sens immédiatement.",
      feedback_ko:"La bonne réponse est B. Commencer par les fondamentaux conceptuels est toujours plus efficace que les listes de ressources ou les essais/erreurs sans cadre. Le cadre conceptuel rend tout le reste compréhensible — sans lui, tu mémorises des étapes sans comprendre pourquoi."
    }
  },

  // ── MODULE 06 — Automatiser avec Make.com ──
  "06.01": {
    intro: "L'automatisation, c'est le principe de faire le travail une fois pour que le système le répète indéfiniment. Avec Claude + Make.com, tu peux automatiser des tâches qui te prenaient des heures — sans écrire une ligne de code.",
    objective: "Identifier ses 3 meilleures opportunités d'automatisation et les modéliser.",
    blocks: [
      { type:"checklist", items:[
        "Tu comprendras le modèle trigger/action qui est la base de toute automatisation",
        "Tu identifieras tes 3 meilleures opportunités d'automatisation avec leur ROI estimé",
        "Tu auras une roadmap d'automatisation concrète pour ton business"
      ]},
      { type:"text", title:"Penser en systèmes : triggers et actions",
        body:`<p>Un entrepreneur sans automatisation pense : <em>"Je dois envoyer un email de bienvenue à chaque nouveau client."</em></p>
<p>Un entrepreneur automatisé pense : <em>"Quand X se passe (trigger), Y se déclenche automatiquement (action). Je n'interviens jamais."</em></p>
<p>Les triggers les plus courants :</p>
<ul>
<li>Un formulaire est rempli → email automatique</li>
<li>Un achat est effectué → accès + CRM + Discord</li>
<li>Une heure précise → génération de contenu + sauvegarde</li>
<li>Un email reçu avec certains mots → triage + notification</li>
</ul>
<p>La règle : <strong>si tu fais la même chose plus de 3 fois, c'est automatisable.</strong></p>` },
      { type:"text", title:"Les outils de l'automatisation no-code",
        body:`<p><strong>Make.com (ex-Integromat)</strong> — le plus puissant pour les entrepreneurs. 1000 opérations/mois gratuites. Connecte 1500+ apps. Interface visuelle par blocs.</p>
<p><strong>Zapier</strong> — plus simple, moins puissant. Idéal pour les débutants absolus. Gratuit très limité.</p>
<p><strong>n8n</strong> — open-source, illimité en auto-hébergé. Pour les profils plus techniques.</p>
<p><strong>Les webhooks</strong> — le mécanisme universel. N'importe quelle app peut envoyer des données à n'importe quelle autre via un webhook. C'est la technologie qui connecte tout.</p>` },
      { type:"prompt", label:"Prompt — Identifier tes meilleures opportunités d'automatisation",
        content:`Je suis [TON ACTIVITÉ]. Je veux identifier les tâches de mon business les plus pertinentes à automatiser.

Mes tâches répétitives actuelles :
[LISTE TOUT CE QUE TU FAIS DE RÉPÉTITIF — même si tu penses que c'est non automatisable]

Pour chaque tâche, analyse :
1. Est-elle automatisable avec Make.com ? (oui / non / partiellement)
2. Quel serait le trigger (déclencheur) ?
3. Quelles seraient les actions (ce qui se passe automatiquement) ?
4. Combien de temps par semaine cela représente ?
5. Complexité de mise en place : 1 (simple) à 5 (complexe)

Ensuite, classe les 3 automatisations avec le meilleur ratio temps gagné / complexité.` },
      { type:"keypoints",
        points:[
          { icon:"", title:"Commence simple", text:"Une automation qui marche vaut mieux qu'une automation complexe qui plante parfois" },
          { icon:"", title:"Automatise le revenu d'abord", text:"L'onboarding client et les relances commerciales donnent le meilleur ROI immédiat" },
          { icon:"", title:"Documente chaque automation", text:"Note ce que chaque scénario fait et comment le dépanner — tu en auras besoin dans 6 mois" },
          { icon:"", title:"Teste avant de déployer", text:"Toujours faire des tests avec des données fictives avant de lancer sur de vrais clients" }
        ] }
    ],
    exercise: {
      type:"freetext",
      question:"Identifie tes 3 automatisations prioritaires avec leur architecture trigger → action",
      desc:"Lance le prompt d'identification avec tes vraies tâches répétitives. Pour chacune des 3 automatisations choisies, décris précisément le trigger (ce qui la déclenche) et les actions (ce qui se passe automatiquement). Inclus aussi le temps estimé gagné par semaine — c'est ce qui justifie ou non l'effort de mise en place.",
      placeholder:"AUTOMATION 1 (la plus rapide à mettre en place) :\nTrigger : Quand [ÉVÉNEMENT PRÉCIS] se passe...\nActions automatiques : ...\nOutil : [Make.com / Zapier / autre]\nTemps gagné / semaine : ...\nComplexité (1-5) : ...\n\nAUTOMATION 2 (le meilleur ROI) :\nTrigger : Quand...\nActions automatiques : ...\nOutil : ...\nTemps gagné / semaine : ...\nComplexité (1-5) : ...\n\nAUTOMATION 3 (la plus ambitieuse) :\nTrigger : Quand...\nActions automatiques : ...\nOutil : ...\nTemps gagné / semaine : ...\nComplexité (1-5) : ...\n\nPar laquelle je commence et pourquoi : ...",
      minLength:150,
      feedback_ok:"Roadmap solide. Le critère de priorisation le plus efficace : commence par l'automation avec complexité 1-2 et le meilleur temps gagné. Une automation simple qui tourne vraiment vaut 10 automations complexes qui restent dans ta liste d'idées. Dans la leçon suivante, tu configures le premier scénario Make.com de A à Z.",
      feedback_ko:"Les triggers et actions sont trop vagues. 'Automatiser les relances' n'est pas un trigger — c'est une intention. Un vrai trigger c'est : 'Quand un prospect remplit mon formulaire Tally sans réponse après 48h' → actions : 'envoyer email de relance automatique via Gmail'. Reprends chaque automation et précise l'événement déclencheur exact."
    }
  },

  "06.02": {
    intro: "Assez de théorie. On configure ton premier scénario Make.com + Claude API de A à Z. À la fin de cette leçon, tu as un système qui tourne tout seul.",
    objective: "Créer un scénario Make.com + Claude API fonctionnel étape par étape.",
    blocks: [
      { type:"checklist", items:[
        "Tu comprendras l'architecture technique d'un scénario Make + Claude API",
        "Tu suivras les 7 étapes de configuration pas à pas dans Make.com",
        "Tu sauras diagnostiquer les erreurs les plus courantes (401, 422, etc.)"
      ]},
      { type:"text", title:"Architecture du scénario Make + Claude",
        body:`<p>Le scénario le plus courant et le plus puissant : déclencher une génération de contenu par Claude et la sauvegarder automatiquement.</p>
<p>Architecture type :</p>
<ul>
<li><strong>Trigger</strong> : Schedule (chaque lundi à 8h) OU Webhook (quand quelque chose se passe)</li>
<li><strong>Module HTTP</strong> : appel à l'API Claude avec ton prompt</li>
<li><strong>Module de sortie</strong> : sauvegarder dans Notion, Google Sheets, envoyer par Gmail</li>
</ul>
<p>Autre exemple très utile : <strong>Webhook → Gumroad vente → Claude génère email personnalisé → Gmail l'envoie</strong>. Zéro intervention manuelle.</p>` },
      { type:"prompt", label:"Configuration Make — Appel API Claude (module HTTP)",
        content:`Dans Make.com, voici comment configurer le module HTTP pour appeler Claude API :

URL : https://api.anthropic.com/v1/messages
Method : POST
Headers :
  - x-api-key : [TA CLÉ API ANTHROPIC — récupérée sur console.anthropic.com]
  - anthropic-version : 2023-06-01
  - content-type : application/json

Body (JSON) :
{
  "model": "claude-opus-4-6",
  "max_tokens": 1024,
  "messages": [{
    "role": "user",
    "content": "[TON PROMPT ICI — tu peux mapper des variables Make avec {{nom_variable}}]"
  }]
}

Pour récupérer la réponse : dans le module suivant, utilise le parsing JSON avec le path : body > content > 0 > text` },
      { type:"text", title:"Étapes de configuration dans Make.com",
        body:`<ol>
<li><strong>Crée un nouveau scénario</strong> (bouton + dans l'interface)</li>
<li><strong>Ajoute un module Trigger</strong> : Schedule (heure fixe) ou Webhooks > Custom webhook (déclenchement externe)</li>
<li><strong>Ajoute un module HTTP</strong> : Configure avec les paramètres API Claude ci-dessus</li>
<li><strong>Ajoute un module de sortie</strong> : Gmail > Send an Email, ou Google Sheets > Add a Row, ou Notion > Create a Page</li>
<li><strong>Mappe les variables</strong> : connecte la sortie de chaque module à l'entrée du suivant (glisser-déposer dans l'interface)</li>
<li><strong>Teste le scénario</strong> : bouton "Run Once" — vérifie que chaque module passe au vert</li>
<li><strong>Active le scénario</strong> : bascule le toggle ON</li>
</ol>` },
      { type:"callout", style:"warn", title:"Gestion de la clé API Claude",
        text:"Ta clé API Anthropic est confidentielle — ne la colle jamais dans un fichier public (GitHub, document partagé). Dans Make.com, utilise la section 'Keys' pour la stocker une seule fois et la mapper dans tous tes modules HTTP. Si elle est compromise, régénère-en une nouvelle immédiatement sur console.anthropic.com." }
    ],
    exercise: {
      type:"qcm",
      question:"Ton scénario Make appelle l'API Claude mais le module HTTP retourne une erreur 401. Qu'est-ce que ça signifie et comment corriger ?",
      options:[
        { text:"Le serveur d'Anthropic est en panne — attendre", correct:false },
        { text:"Erreur d'authentification — ta clé API est invalide, mal copiée, ou absente dans le header x-api-key", correct:true },
        { text:"Le prompt est trop long pour l'API", correct:false },
        { text:"Make.com n'est pas compatible avec l'API Anthropic", correct:false }
      ],
      feedback_ok:"Exactement. 401 = Unauthorized = problème d'authentification. Vérifie que : (1) la clé API est bien dans le header x-api-key, (2) elle est correctement copiée sans espace avant/après, (3) elle est active sur console.anthropic.com. C'est la cause de 90% des erreurs sur les intégrations API.",
      feedback_ko:"401 signifie 'Unauthorized' — c'est toujours un problème d'authentification. Vérifie ton header x-api-key dans la configuration du module HTTP. C'est presque toujours la clé mal copiée ou le mauvais header qui cause ce type d'erreur."
    }
  },

  // ── MODULE 07 — Développer son business ──
  "07.01": {
    intro: "Avant de créer ou lancer quoi que ce soit, tu dois savoir si le marché existe et comment te différencier. L'IA peut faire en 1 heure ce qu'un consultant facture 5 000€.",
    objective: "Réaliser une analyse marché + concurrentielle complète en 1 heure avec Claude.",
    blocks: [
      { type:"checklist", items:[
        "Tu maîtriseras le framework d'analyse en 4 dimensions (marché, client, concurrence, positionnement)",
        "Tu réaliseras l'analyse concurrentielle de ton marché réel",
        "Tu identifieras ton angle de différenciation le plus prometteur"
      ]},
      { type:"text", title:"Le framework d'analyse en 4 dimensions",
        body:`<p><strong>Dimension 1 — Le marché</strong> : taille, croissance, segments, tendances. Est-ce que le marché existe ? Est-il en croissance ? Qui sont les sous-segments les plus porteurs ?</p>
<p><strong>Dimension 2 — Le client</strong> : qui exactement, quel problème précis, comment il cherche des solutions aujourd'hui, ce qui l'empêche d'agir.</p>
<p><strong>Dimension 3 — La concurrence</strong> : qui sont les acteurs, comment se positionnent-ils, où sont les angles morts, quelles insatisfactions existent chez leurs clients.</p>
<p><strong>Dimension 4 — Ton positionnement possible</strong> : intersection entre tes forces, les besoins du marché, et les faiblesses de la concurrence.</p>` },
      { type:"prompt", label:"Prompt — Analyse concurrentielle approfondie",
        content:`Tu es un analyste stratégique senior. Je veux lancer [TON PROJET / OFFRE] sur le marché [TON SECTEUR / NICHE].

Mes concurrents directs que j'ai identifiés : [LISTE 3-5 CONCURRENTS]

Pour chaque concurrent, analyse (base-toi sur ce que tu sais + ce que je te donne) :
1. Leur positionnement prix et offre principale
2. Leur cible client (qui ils servent vraiment)
3. Leur promesse principale (ce qu'ils vendent comme résultat)
4. Leur point fort évident
5. Leur point faible / angle mort / client insatisfait

Ensuite, analyse le marché global :
- Tendances qui jouent en ma faveur
- Tendances qui me menacent
- Le segment de clientèle le moins bien servi aujourd'hui

Conclusion : donne-moi 3 angles de positionnement différenciants possibles pour moi.` },
      { type:"prompt", label:"Prompt — Portrait robot de ton client idéal",
        content:`Je veux créer le portrait psychologique précis de mon client idéal pour [TON OFFRE].

Ce que je sais déjà sur lui : [CE QUE TU SAIS — démographie, secteur, situation]

Construis un portrait complet :
1. Sa journée type (ce qu'il vit, ses frustrations quotidiennes)
2. Son problème principal et comment il essaie de le résoudre aujourd'hui (avec quels outils, prestataires, méthodes)
3. Ce qui l'empêche de trouver une solution (obstacles psychologiques, budget, temps, compétences)
4. Ce dont il a vraiment besoin vs ce qu'il dit vouloir
5. Les mots qu'il utilise pour décrire son problème (important pour le copywriting)
6. Ce qui le ferait passer à l'action immédiatement

Base-toi sur des patterns réels de comportement d'achat B2B/B2C selon le contexte.` }
    ],
    exercise: {
      type:"freetext",
      question:"Réalise l'analyse concurrentielle de ton marché",
      desc:"Utilise le prompt d'analyse concurrentielle pour ton activité ou projet actuel. Identifie 3-5 concurrents réels et colle le résultat de l'analyse. Résume ici le positionnement différenciant le plus prometteur.",
      placeholder:"Mes concurrents analysés : ...\n\nLeur point faible commun : ...\n\nLe segment mal servi que j'identifie : ...\n\nMon angle de différenciation le plus fort : ...",
      minLength:100,
      feedback_ok:"Excellent travail d'analyse. Le positionnement différenciant que tu as identifié est maintenant ton axe directeur — pour ton offre, ton copywriting, ton contenu. Dans la leçon suivante, on structure cette différenciation en offre concrète.",
      feedback_ko:"L'analyse doit être spécifique à de vrais concurrents. Si tu n'en as pas encore identifié, tape '[ton secteur] formation/service/outil' et liste les 3-5 premiers résultats. L'analyse IA ne marche que si tu lui donnes des données réelles à travailler."
    }
  },

  "07.02": {
    intro: "Une offre irrésistible, c'est celle où le client se dit 'je serais idiot de ne pas le faire.' Ce n'est pas une question de prix — c'est une question de valeur perçue. Claude peut t'aider à la construire.",
    objective: "Construire une offre qui maximise la valeur perçue et réduit les objections.",
    blocks: [
      { type:"checklist", items:[
        "Tu comprendras les 5 composants d'une offre à haute valeur perçue",
        "Tu rédigeras la promesse principale de ton offre actuelle ou future",
        "Tu identifieras ton mécanisme unique et ton inversion du risque"
      ]},
      { type:"text", title:"Les 5 composants d'une offre irrésistible",
        body:`<p><strong>1. La promesse principale</strong> — ce que le client obtient, exprimé en résultat concret, pas en features. Pas "10 heures de formation" mais "économise 3h par jour sur tes tâches admin en 30 jours".</p>
<p><strong>2. Le mécanisme unique</strong> — comment tu obtiens ce résultat différemment des autres. Ce qui rend ton approche distinctive et non-reproductible immédiatement.</p>
<p><strong>3. La preuve</strong> — résultats de clients, données, témoignages, ta propre transformation. Sans preuve, la promesse reste une affirmation.</p>
<p><strong>4. L'inversion du risque</strong> — garantie, essai gratuit, première session sans engagement. Reduce le risque perçu à zéro si possible.</p>
<p><strong>5. L'urgence réelle</strong> — pourquoi maintenant ? Pas une urgence artificielle, mais une raison genuinement logique d'agir aujourd'hui.</p>` },
      { type:"prompt", label:"Prompt — Construire une offre irrésistible",
        content:`Tu es un expert en construction d'offres commerciales à haute valeur perçue.

Mon activité : [CE QUE TU FAIS]
Ma cible : [QUI TU CIBLES PRÉCISÉMENT]
Ce que je vends actuellement : [TON OFFRE ACTUELLE ou IDÉE D'OFFRE]
Mon prix envisagé : [PRIX]
Mon concurrent principal : [QUI FAIT LA MÊME CHOSE]

Construis une offre irrésistible en :
1. Rédigeant une promesse principale orientée résultat (pas features) — 1 phrase, max 15 mots
2. Identifiant un mécanisme unique qui me différencie (la méthode, l'approche, le système)
3. Structurant le contenu de l'offre pour maximiser la valeur perçue
4. Proposant une inversion du risque adaptée à mon contexte
5. Identifiant l'urgence réelle (pourquoi le client perd quelque chose s'il n'agit pas maintenant)
6. Rédigeant le pitch en 3 phrases (problème → solution → résultat)` },
      { type:"callout", style:"info", title:"Le test des 3 questions client",
        text:"Avant de fixer ton offre, demande à Claude de jouer ton client idéal et de répondre à : 1) 'Qu'est-ce qui me ferait hésiter à acheter ?' 2) 'Quel résultat est-ce que j'attendrais minimum pour que ça vaille mon argent ?' 3) 'Quelle garantie m'enlèverait tout risque perçu ?' Ses réponses te donnent exactement ce que ton offre doit adresser." }
    ],
    exercise: {
      type:"freetext",
      question:"Rédige la promesse principale de ton offre",
      desc:"En utilisant le prompt ci-dessus, construis la promesse principale de ton offre actuelle ou future. Elle doit exprimer un résultat concret, mesurable, et désirable — pas une liste de fonctionnalités.",
      placeholder:"Ma promesse principale : [résultat concret] en [délai réaliste] pour [cible précise]\n\nMon mécanisme unique : ...\n\nMon inversion du risque : ...\n\nMon pitch en 3 phrases :\nProblème : ...\nSolution : ...\nRésultat : ...",
      minLength:100,
      feedback_ok:"Solide. Teste maintenant cette promesse sur 3 personnes de ton réseau qui correspondent à ta cible — sans leur dire que c'est ton offre. Leur réaction spontanée te dira si la promesse résonne ou si elle doit être affinée.",
      feedback_ko:"La promesse est trop vague ou orientée features. 'Je t'apprends l'IA' n'est pas une promesse — c'est une description. 'Génère tes 5 premières ventes sans budget pub en 30 jours' est une promesse. Reformule en résultat concret et mesurable."
    }
  },

  "07.03": {
    intro: "L'entrepreneur le plus productif n'est pas celui qui travaille le plus — c'est celui qui a su déléguer intelligemment. Avec l'IA, la délégation ne coûte pas de salaire. Voilà comment l'utiliser comme une équipe.",
    objective: "Créer ton premier système de délégation IA pour une tâche chronophage.",
    blocks: [
      { type:"checklist", items:[
        "Tu identifieras les tâches de ton business les plus pertinentes à déléguer à Claude",
        "Tu créeras un prompt de délégation réutilisable pour ta tâche la plus chronophage",
        "Tu auras la base de ta bibliothèque de prompts personnelle"
      ]},
      { type:"text", title:"L'audit de tes tâches chronophages",
        body:`<p>Avant de déléguer, tu dois savoir quoi déléguer. L'exercice le plus utile : pendant une semaine, note chaque tâche que tu fais avec son temps et son impact business réel.</p>
<p>Tu vas découvrir que 60-70% de ton temps va à des tâches qui génèrent peu de valeur directe — et dont une grande partie est automatable ou délégable à Claude.</p>
<p>Les catégories typiques :</p>
<ul>
<li><strong>Rédaction répétitive</strong> — emails similaires, posts sociaux, descriptions de produits</li>
<li><strong>Recherche et veille</strong> — résumer des articles, comparer des solutions, préparer des réunions</li>
<li><strong>Création de documents</strong> — propositions, rapports, présentations</li>
<li><strong>Prises de décision routinières</strong> — que répondre à ce client ? Comment gérer cette situation ?</li>
</ul>` },
      { type:"prompt", label:"Prompt — Créer un système de délégation IA pour une tâche",
        content:`Je veux déléguer à Claude la tâche suivante que je fais actuellement manuellement :

TÂCHE : [DÉCRIS PRÉCISÉMENT CE QUE TU FAIS]
Fréquence : [COMBIEN DE FOIS PAR SEMAINE/MOIS]
Temps actuel : [COMBIEN D'HEURES ça te prend]
Inputs nécessaires : [DE QUELLES INFORMATIONS as-tu besoin pour faire cette tâche]
Output attendu : [CE QUE TU PRODUIS à la fin]
Critères de qualité : [COMMENT tu juges que c'est bien fait]

Crée pour moi :
1. Le prompt système réutilisable pour cette tâche (avec variables entre [crochets] à remplir à chaque fois)
2. Le processus d'utilisation : quand le déclencher, quoi mettre en input, comment valider l'output
3. Les limites : dans quels cas Claude ne peut pas faire ça aussi bien que toi
4. Le temps estimé de mise en place vs temps gagné par mois` },
      { type:"prompt", label:"Prompt — Créer une bibliothèque de prompts de délégation",
        content:`Je suis [TON ACTIVITÉ]. Voici mes 5 tâches les plus répétitives et chronophages :
1. [TÂCHE 1]
2. [TÂCHE 2]
3. [TÂCHE 3]
4. [TÂCHE 4]
5. [TÂCHE 5]

Pour chacune, crée un prompt réutilisable qui me permettra de déléguer cette tâche à Claude avec un minimum d'effort de ma part.

Format pour chaque prompt :
- Titre de la tâche
- Prompt complet avec variables [EN MAJUSCULES ENTRE CROCHETS]
- Instructions d'utilisation (2-3 lignes)
- Temps estimé gagné par utilisation` },
      { type:"callout", style:"success", title:"La règle des 80%",
        text:"Pour qu'une délégation IA soit rentable, elle doit te donner un résultat utilisable à 80% sans intervention. Si tu dois réécrire entièrement ce que Claude a produit, le prompt est mal configuré — pas l'outil. Itère le prompt jusqu'à atteindre le seuil des 80%." }
    ],
    exercise: {
      type:"freetext",
      question:"Crée ton premier actif de productivité IA — le prompt de délégation qui tourne en permanence",
      desc:"Choisis la tâche que tu fais en boucle et qui t'épuise le plus. Utilise le premier prompt pour créer son système de délégation complet. Le prompt doit être suffisamment précis pour que tu puisses l'utiliser dans 6 mois sans te souvenir de comment tu l'avais configuré.",
      placeholder:"TÂCHE DÉLÉGUÉE : ...\nFréquence : ... fois/semaine\nTemps actuel : ... min/fois\n\n─── MON PROMPT DE DÉLÉGATION ───\n[Colle le prompt complet généré par Claude — avec les variables en [MAJUSCULES]]\n\n─── UTILISATION ───\nQuand je l'utilise : ...\nCe que je dois mettre en input : ...\nCe que j'obtiens en output : ...\nComment je valide que c'est bon : ...\n\n─── BILAN ───\nTemps gagné / semaine : ...\nLimites (cas où Claude ne peut pas remplacer mon jugement) : ...\nProchain prompt à créer : ...",
      minLength:200,
      feedback_ok:"Tu viens de créer un actif de productivité permanent. Ce prompt va travailler pour toi toutes les fois que tu en as besoin, sans jamais oublier comment faire. Sauvegarde-le dans une note Notion avec la catégorie 'Bibliothèque de délégation' — c'est le début d'un système. Dans 3 mois d'utilisation régulière, tu en auras 10-15 qui couvrent 60-70% de tes tâches répétitives.",
      feedback_ko:"Le prompt de délégation est trop court ou trop vague pour être réutilisable. Test : si tu le lisais dans 6 mois sans te souvenir du contexte, pourrais-tu l'utiliser immédiatement ? Si non — ajoute les variables manquantes (inputs précis, format de l'output, critères de qualité). Un bon prompt de délégation ressemble à une procédure, pas à une demande rapide."
    }
  },

  // ── MODULE 08 — Niveau Pro · PREMIUM ──
  "08.01": {
    intro: "Tu maîtrises les bases. Maintenant on passe à la couche que 99% des utilisateurs n'atteignent jamais : les méta-prompts, les system prompts, et l'architecture de conversations persistantes.",
    objective: "À la fin de cette leçon, tu seras capable de créer des méta-prompts qui génèrent d'autres prompts, des system prompts qui donnent à Claude une personnalité dédiée, et des architectures de conversation réutilisables.",
    blocks: [
      { type:"text", title:"System Prompts — Donner à Claude une identité permanente",
        body:`<p>Un <strong>system prompt</strong> est un ensemble d'instructions données à Claude avant toute conversation — il définit son rôle, ses capacités, ses contraintes, son ton. C'est différent d'un prompt utilisateur normal.</p>
<p>Exemples d'utilisation :</p>
<ul>
<li>Créer un assistant IA avec la personnalité de ton service client</li>
<li>Construire un consultant spécialisé dans ton domaine</li>
<li>Développer un outil interne avec des règles business spécifiques</li>
</ul>
<p>Sur Claude.ai, tu accèdes au system prompt via les Projects (mode Pro). Sur l'API, c'est le paramètre "system" dans l'appel API.</p>` },
      { type:"prompt", label:"Exemple — System Prompt pour un assistant commercial",
        content:`[System prompt — à coller dans un Project Claude.ai ou dans le paramètre "system" de l'API]

Tu es Alex, l'assistant commercial de [NOM DE L'ENTREPRISE]. Tu aides l'équipe commerciale à rédiger des propositions, préparer des rendez-vous, et gérer les objections clients.

CONTEXTE DE L'ENTREPRISE :
- Activité : [CE QUE VOUS FAITES]
- Clients cibles : [QUI VOUS CIBLEZ]
- Offres principales : [VOS OFFRES ET PRIX]
- Ton commercial : [PROFESSIONNEL / DIRECT / CHALEUREUX]

TES CAPACITÉS :
- Rédiger des propositions commerciales personnalisées
- Préparer des arguments de vente et réponses aux objections
- Analyser un brief prospect et identifier les angles d'attaque
- Créer des emails de prospection et de relance

TES LIMITES :
- Ne jamais inventer de chiffres ou de références clients sans les avoir eu de l'utilisateur
- Ne pas prendre de décisions stratégiques — proposer des options, pas des décisions
- Toujours demander les informations manquantes avant de générer` },
      { type:"text", title:"Méta-Prompts — Générer des prompts avec Claude",
        body:`<p>Un méta-prompt, c'est utiliser Claude pour créer des prompts optimisés pour d'autres tâches. C'est une des utilisations les plus avancées et les plus puissantes.</p>
<p>Cas d'usage :</p>
<ul>
<li>Tu décris ce que tu veux obtenir → Claude crée le prompt parfait pour y arriver</li>
<li>Tu as un prompt qui fonctionne à 70% → Claude l'optimise à 95%</li>
<li>Tu veux créer 10 variantes d'un prompt pour des niches différentes → Claude les génère toutes</li>
</ul>` },
      { type:"prompt", label:"Méta-prompt — Faire optimiser un prompt par Claude",
        content:`Tu es un expert en prompt engineering pour les LLMs. Analyse ce prompt et optimise-le pour obtenir des résultats significativement meilleurs.

MON PROMPT ACTUEL :
[COLLE TON PROMPT À AMÉLIORER]

Ce que ce prompt est censé produire : [DÉCRIS L'OUTPUT IDÉAL]
Ce qui ne marche pas actuellement : [CE QUI DÉÇOIT dans les réponses actuelles]

Analyse :
1. Pourquoi ce prompt produit des résultats sous-optimaux (analyse technique)
2. Ce qui manque (rôle, contexte, format, exemples, contraintes)
3. Ce qui est contradictoire ou ambigu

Génère :
- Version optimisée du prompt avec explication des changements
- 1-2 variantes pour des cas d'usage légèrement différents` }
    ],
    exercise: {
      type:"freetext",
      question:"Crée le system prompt de ton assistant IA personnalisé",
      desc:"Crée un system prompt pour un assistant IA dédié à une fonction de ton business (commercial, contenu, support client, planification...). Le system prompt doit définir le rôle, le contexte de l'entreprise, les capacités, et les limites.",
      placeholder:"[NOM DE L'ASSISTANT]\n\nRôle : Tu es...\n\nContexte business : [ton activité, tes offres, ta cible]\n\nCapacités : [ce que l'assistant peut faire]\n\nTon et style : [comment il communique]\n\nLimites : [ce qu'il ne doit pas faire]",
      minLength:150,
      feedback_ok:"Excellent system prompt. C'est maintenant un actif IA permanent — colle-le dans un Project Claude.ai ou dans le paramètre system de l'API. Tu viens de créer ton premier assistant IA dédié. Plus tu l'utiliseras, plus tu verras comment l'affiner.",
      feedback_ko:"Un bon system prompt doit être précis sur 3 choses : le rôle (qui est l'assistant), le contexte business (ce dont il a besoin de savoir pour être utile), et les contraintes (ce qu'il ne doit pas faire). Développe chacune de ces dimensions."
    }
  },

  "08.02": {
    intro: "Un agent IA, c'est Claude qui peut non seulement répondre, mais agir — en utilisant des outils, en planifiant plusieurs étapes, en itérant sur ses propres résultats. C'est le niveau qui automatise vraiment.",
    objective: "À la fin de cette leçon, tu seras capable de comprendre l'architecture d'un agent IA, d'identifier les cas où les agents sont pertinents, et de concevoir un flux agentique simple pour ton business.",
    blocks: [
      { type:"text", title:"Qu'est-ce qu'un agent IA — la vraie définition",
        body:`<p>Un LLM classique : tu poses une question → il répond. C'est tout. Linéaire.</p>
<p>Un agent IA : tu lui donnes un objectif → il planifie les étapes → utilise des outils → vérifie les résultats → s'adapte → recommence jusqu'à atteindre l'objectif.</p>
<p><strong>Les 3 composants d'un agent :</strong></p>
<ul>
<li><strong>Le LLM</strong> (le cerveau) — Claude, GPT-4, etc. Il planifie et raisonne.</li>
<li><strong>Les outils</strong> (les mains) — recherche web, exécution de code, lecture/écriture de fichiers, appels API. Ce que l'agent peut faire dans le monde réel.</li>
<li><strong>La mémoire</strong> (le contexte) — ce que l'agent sait sur la session en cours et potentiellement sur les sessions passées.</li>
</ul>` },
      { type:"text", title:"Cas d'usage concrets des agents pour entrepreneurs",
        body:`<ul>
<li><strong>Agent de recherche</strong> : tu lui donnes un sujet → il cherche sur le web, lit les sources, synthétise, rédige un rapport complet</li>
<li><strong>Agent de contenu</strong> : chaque semaine → cherche l'actualité de ta niche → identifie les sujets tendance → génère 5 posts calibrés à ton style → les formate pour chaque plateforme</li>
<li><strong>Agent commercial</strong> : reçoit les infos d'un prospect → analyse ses besoins → génère une proposition personnalisée → envoie l'email</li>
<li><strong>Agent de veille concurrentielle</strong> : surveille les sites de tes concurrents → alerte si prix ou offre changent → génère un rapport hebdomadaire</li>
</ul>` },
      { type:"prompt", label:"Prompt — Concevoir l'architecture d'un agent pour ton business",
        content:`Je veux créer un agent IA pour mon business. Aide-moi à concevoir son architecture.

Mon activité : [CE QUE TU FAIS]
La tâche que je veux automatiser avec un agent : [DÉCRIS LA TÂCHE EN DÉTAIL]
Ce que l'agent doit pouvoir faire : [ACTIONS DANS LE MONDE RÉEL]

Conçois :
1. L'objectif de l'agent (en 1 phrase)
2. Le flux de travail étape par étape (comment l'agent accomplit la tâche)
3. Les outils nécessaires (recherche web / code Python / API / envoi email / etc.)
4. Les points de décision (où l'agent doit choisir entre plusieurs options)
5. Les erreurs possibles et comment l'agent doit les gérer
6. Les outils no-code pour implémenter ça (Make.com, n8n, Relevance AI...)
7. La complexité de mise en place : 1 (simple) à 5 (complexe)` },
      { type:"callout", style:"info", title:"Outils pour créer des agents sans coder",
        text:"Relevance AI : le plus accessible pour créer des agents avec interface visuelle. n8n : open-source, très puissant, un peu technique. Make.com + Claude API : ce qu'on a vu au Module 06, c'est déjà une forme d'agent simple. Pour les agents plus complexes avec mémoire et tools multiples : l'API Anthropic directement (nécessite du code)." }
    ],
    exercise: {
      type:"qcm",
      question:"Tu veux créer un agent qui surveille ton secteur chaque semaine et t'envoie un rapport des 5 actualités les plus importantes avec analyse des implications pour ton business. Quelle est l'architecture minimale nécessaire ?",
      options:[
        { text:"Juste un LLM bien prompté suffit — pas besoin d'outils", correct:false },
        { text:"LLM + outil de recherche web + outil d'envoi d'email — le LLM orchestre, les outils agissent", correct:true },
        { text:"Il faut obligatoirement du code Python pour ce type d'agent", correct:false },
        { text:"C'est impossible sans accès à des APIs payantes", correct:false }
      ],
      feedback_ok:"Exactement. LLM (pour analyser et rédiger) + web search (pour chercher l'actualité) + envoi email (pour livrer le rapport). Cette architecture peut être implémentée avec Make.com + Claude API + module de recherche comme Perplexity API. Pas de code nécessaire.",
      feedback_ko:"La bonne réponse est B. Un agent de veille a besoin d'un outil pour chercher sur le web (sans ça, le LLM ne peut pas accéder à l'actualité récente) et d'un outil pour envoyer le rapport. Le LLM seul ne peut qu'analyser ce que tu lui donnes — il ne peut pas aller chercher par lui-même."
    }
  },

  "08.03": {
    intro: "L'IA ne va pas te remplacer. Mais quelqu'un qui maîtrise l'IA va te remplacer. La question n'est pas si tu dois te repositionner — c'est comment et vers quoi.",
    objective: "À la fin de cette leçon, tu seras capable d'identifier les compétences qui resteront rares et précieuses dans une économie IA, et de définir ton positionnement personnel pour les 5 prochaines années.",
    blocks: [
      { type:"text", title:"Ce qui change vraiment dans le monde du travail",
        body:`<p><strong>Ce que l'IA commoditise (devient gratuit ou quasi-gratuit) :</strong></p>
<ul>
<li>La production de contenu standard (articles, posts, emails)</li>
<li>La traduction, la transcription, les tâches d'extraction de données</li>
<li>Le code standard et le débogage basique</li>
<li>La recherche documentaire et la synthèse d'information</li>
</ul>
<p><strong>Ce qui devient PLUS précieux avec l'IA :</strong></p>
<ul>
<li><strong>Le jugement et la décision</strong> — choisir quoi faire avec les outputs IA</li>
<li><strong>L'expertise de domaine profonde</strong> — l'IA a besoin d'être pilotée par quelqu'un qui comprend vraiment le terrain</li>
<li><strong>La relation humaine authentique</strong> — confiance, empathie, négociation réelle</li>
<li><strong>L'orchestration de l'IA</strong> — savoir combiner les outils, créer des systèmes, former des équipes</li>
<li><strong>La créativité non-conventionnelle</strong> — les idées vraiment originales restent humaines</li>
</ul>` },
      { type:"text", title:"Les 3 positionnements gagnants de 2026-2030",
        body:`<p><strong>1. L'Expert-Amplificateur</strong><br>
Tu as une expertise métier profonde (droit, médecine, finance, RH, marketing...) + tu sais utiliser l'IA. Résultat : tu produis 5x plus en 2x moins de temps. Ton expertise reste irremplaçable, l'IA te rend imbattable en productivité.</p>
<p><strong>2. L'Orchestrateur IA</strong><br>
Tu sais construire et gérer des systèmes IA : automatisations, agents, intégrations. Tu aides les entreprises à adopter l'IA concrètement. C'est le rôle qui va manquer dans presque toutes les PME d'ici 2027.</p>
<p><strong>3. Le Créateur de Confiance</strong><br>
Tu bâtis une audience/communauté autour de ton expertise et de ta personnalité. Dans un monde inondé de contenu IA générique, les personnes authentiques avec un point de vue fort et une expertise réelle deviennent des ressources rares.</p>` },
      { type:"prompt", label:"Prompt — Définir ton positionnement IA personnel",
        content:`Tu es un conseiller en stratégie de carrière spécialisé dans l'impact de l'IA sur les métiers.

Mon profil :
- Compétences actuelles : [LISTE TES COMPÉTENCES CLÉ]
- Expérience : [TON BACKGROUND PROFESSIONNEL EN 3 PHRASES]
- Ce que j'aime faire : [TES ACTIVITÉS PRÉFÉRÉES]
- Ce que je déteste faire : [CE QUE TU VEUX ARRÊTER DE FAIRE]
- Ma situation dans 5 ans idéale : [TON OBJECTIF]

Analyse :
1. Quelles parties de mon travail vont être commoditisées par l'IA d'ici 2027 ?
2. Quelles sont mes compétences qui deviennent PLUS précieuses avec l'IA ?
3. Quel est le positionnement des 3 que tu vois pour moi (Expert-Amplificateur / Orchestrateur / Créateur de Confiance) ?
4. Les 3 compétences à développer en priorité cette année
5. La première action concrète à faire cette semaine` },
      { type:"callout", style:"success", title:"Félicitations — tu as terminé Nexum AI School",
        text:"Tu fais maintenant partie des rares personnes qui comprennent vraiment comment fonctionne l'IA, comment la piloter avec précision, et comment en tirer un avantage compétitif réel. Ce que tu as appris ici n'est pas une connaissance théorique — c'est un ensemble de compétences directement applicables. La suite se passe dans la pratique : prends les outils, teste, itère, et partage tes résultats dans le Discord." }
    ],
    exercise: {
      type:"freetext",
      question:"Définis ton positionnement pour les 5 prochaines années",
      desc:"Utilise le prompt ci-dessus avec ton vrai profil. Identifie lequel des 3 positionnements correspond le mieux à ta situation, et liste les 3 actions concrètes à mettre en place dans les 30 prochains jours.",
      placeholder:"Mon positionnement choisi : [Expert-Amplificateur / Orchestrateur IA / Créateur de Confiance]\n\nPourquoi ce positionnement me correspond : ...\n\nMes compétences qui deviennent plus précieuses avec l'IA : ...\n\nMes 3 actions des 30 prochains jours :\n1. ...\n2. ...\n3. ...",
      minLength:120,
      feedback_ok:"Tu as une feuille de route claire. Reviens dans 30 jours et mesure ta progression sur ces 3 actions. L'IA ne te donne un avantage que si tu agis — pas si tu te contentes de comprendre.",
      feedback_ko:"Sois plus concret sur les actions. 'Apprendre l'IA' n'est pas une action — c'est une intention. 'Créer mon premier scénario Make.com avant vendredi' est une action. 'Publier 3 posts LinkedIn par semaine pendant 4 semaines' est une action. Reformule avec des actions datées et mesurables."
    }
  },

  "__placeholder__": {
    intro: "Cette leçon sera bientôt disponible.",
    blocks: [{ type: "soon" }],
    exercise: null
  }
};

function getLessonContent(id) {
  return CONTENT[id] || CONTENT["__placeholder__"];
}
