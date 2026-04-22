// ═══════════════════════════════════════════════════════════════
// LESSON EXERCISES MAP — 10 par leçon
// ═══════════════════════════════════════════════════════════════
const LESSON_EXERCISES = {
  "01.01":["01.01-A","01.01-B","01.01-C","01.01-D","01.01-E","01.01-F","01.01-G","01.01-H","01.01-I","01.01-J"],
  "01.02":["01.02-A","01.02-B","01.02-C","01.02-D","01.02-E","01.02-F","01.02-G","01.02-H","01.02-I","01.02-J"],
  "01.03":["01.03-A","01.03-B","01.03-C","01.03-D","01.03-E","01.03-F","01.03-G","01.03-H","01.03-I","01.03-J"],
  "01.04":["01.04-A","01.04-B","01.04-C","01.04-D","01.04-E","01.04-F","01.04-G","01.04-H","01.04-I","01.04-J"],
  "02.01":["02.01-A","02.01-B","02.01-C","02.01-D","02.01-E","02.01-F","02.01-G","02.01-H","02.01-I","02.01-J"],
  "02.02":["02.02-A","02.02-B","02.02-C","02.02-D","02.02-E","02.02-F","02.02-G","02.02-H","02.02-I","02.02-J"],
  "02.03":["02.03-A","02.03-B","02.03-C","02.03-D","02.03-E","02.03-F","02.03-G","02.03-H","02.03-I","02.03-J"],
  "03.01":["03.01-A","03.01-B","03.01-C","03.01-D","03.01-E","03.01-F","03.01-G","03.01-H","03.01-I","03.01-J"],
  "03.02":["03.02-A","03.02-B","03.02-C","03.02-D","03.02-E","03.02-F","03.02-G","03.02-H","03.02-I","03.02-J"],
  "03.03":["03.03-A","03.03-B","03.03-C","03.03-D","03.03-E","03.03-F","03.03-G","03.03-H","03.03-I","03.03-J"],
  "04.01":["04.01-A","04.01-B","04.01-C","04.01-D","04.01-E","04.01-F","04.01-G","04.01-H","04.01-I","04.01-J"],
  "04.02":["04.02-A","04.02-B","04.02-C","04.02-D","04.02-E","04.02-F","04.02-G","04.02-H","04.02-I","04.02-J"],
  "05.01":["05.01-A","05.01-B","05.01-C","05.01-D","05.01-E","05.01-F","05.01-G","05.01-H","05.01-I","05.01-J"],
  "05.02":["05.02-A","05.02-B","05.02-C","05.02-D","05.02-E","05.02-F","05.02-G","05.02-H","05.02-I","05.02-J"],
  "06.01":["06.01-A","06.01-B","06.01-C","06.01-D","06.01-E","06.01-F","06.01-G","06.01-H","06.01-I","06.01-J"],
  "06.02":["06.02-A","06.02-B","06.02-C","06.02-D","06.02-E","06.02-F","06.02-G","06.02-H","06.02-I","06.02-J"],
  "07.01":["07.01-A","07.01-B","07.01-C","07.01-D","07.01-E","07.01-F","07.01-G","07.01-H","07.01-I","07.01-J"],
  "07.02":["07.02-A","07.02-B","07.02-C","07.02-D","07.02-E","07.02-F","07.02-G","07.02-H","07.02-I","07.02-J"],
  "07.03":["07.03-A","07.03-B","07.03-C","07.03-D","07.03-E","07.03-F","07.03-G","07.03-H","07.03-I","07.03-J"],
  "08.01":["08.01-A","08.01-B","08.01-C","08.01-D","08.01-E","08.01-F","08.01-G","08.01-H","08.01-I","08.01-J"],
  "08.02":["08.02-A","08.02-B","08.02-C","08.02-D","08.02-E","08.02-F","08.02-G","08.02-H","08.02-I","08.02-J"],
  "08.03":["08.03-A","08.03-B","08.03-C","08.03-D","08.03-E","08.03-F","08.03-G","08.03-H","08.03-I","08.03-J"],
};

const EXERCISES = {

// ══════════════════════════════════════════════════════════════════
// MODULE 01 · Leçon 01.01 — Ce que l'IA fait vraiment
// ══════════════════════════════════════════════════════════════════
"01.01-A":{
  type:"truefalse",title:"Teste tes certitudes sur Claude",
  instructions:"Réponds Vrai ou Faux à chaque affirmation.",
  content:{statements:[
    {text:"Claude comprend réellement ce que tu lui écris, comme un humain.",answer:false,explanation:"Il prédit — il calcule statistiquement ce qui doit venir après tes mots."},
    {text:"Si Claude répond avec assurance, c'est qu'il est sûr de ce qu'il dit.",answer:false,explanation:"Assurance ≠ exactitude. Il peut halluciner avec le même ton confiant."},
    {text:"Claude peut consulter Internet en temps réel.",answer:false,explanation:"Sauf outil spécifique activé, pas d'accès web en temps réel."},
    {text:"Poser une question orientée positivement influence la réponse de Claude.",answer:true,explanation:"C'est le biais de complaisance — Claude tend à confirmer ce que tu sembles croire."},
    {text:"Claude se souvient de ta conversation de la semaine dernière.",answer:false,explanation:"Pas de mémoire entre sessions par défaut."},
    {text:"Pour contrer le biais de complaisance, il faut imposer un rôle critique.",answer:true,explanation:"Le rôle adversarial est la technique la plus efficace pour obtenir du feedback honnête."}
  ],feedback_thresholds:[
    {min:5,max:6,message:"Excellent — tu as bien intégré les 4 limites fondamentales."},
    {min:3,max:4,message:"Bien. Relis les limites 2 et 3."},
    {min:0,max:2,message:"Reprends la leçon depuis le début."}
  ]}
},
"01.01-B":{
  type:"qcm",title:"Le cas de Marie — biais de complaisance",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Marie demande : 'Mon offre à 500€/mois est-elle bien positionnée ?' Claude répond avec 5 arguments positifs. Quelle est la meilleure suite ?",
    options:[
      {text:"'Joue le rôle d'un prospect sceptique. Donne-moi les 5 raisons pour lesquelles il hésite à payer 500€.'",correct:true,feedback:"La technique adversariale — la seule qui force Claude à générer des arguments négatifs avec autant d'énergie."},
      {text:"'Donne-moi une analyse SWOT complète et objective.'",correct:false,feedback:"Dans un contexte déjà positif, la SWOT restera biaisée."},
      {text:"Commencer une nouvelle conversation.",correct:false,feedback:"Bonne intuition mais tu perds le contexte."},
      {text:"'Quels sont les 3 coachs les plus connus à ce prix ?'",correct:false,feedback:"Ça analyse le marché, pas le biais en cours."}
    ],
    feedback_ok:"Exactement — seul le rôle explicitement opposé casse vraiment le biais de complaisance.",
    feedback_ko:"La bonne réponse est A. La SWOT semble sérieuse mais dans un contexte positif elle reste biaisée."
  }
},
"01.01-C":{
  type:"promptlab",title:"Teste les 4 limites en direct",
  instructions:"Copie ce prompt dans Claude. Colle ici la réponse à la question 3 uniquement (les études scientifiques).",
  content:{
    prompt_to_copy:"1. [MÉMOIRE] Rappelle-moi ce dont on a parlé lors de notre dernière conversation.\n2. [TEMPS] Quel est le cours actuel du Bitcoin en euros ?\n3. [HALLUCINATION] Cite-moi 3 études scientifiques publiées en 2024 sur l'impact de l'IA sur la productivité des PME françaises, avec leurs auteurs et revues.\n4. [COMPLAISANCE] Mon idée de lancer une agence IA pour les artisans est-elle bonne ?\n\nPour chaque réponse, indique quelle limite tu manifestes.",
    field_label:"Colle ici la réponse de Claude à la question 3",
    min_length:50,
    feedback:"Ce que tu viens de voir à la question 3, c'est l'hallucination en direct. Claude a cité des études avec auteurs et revues — avec un ton parfaitement assuré. Ces études n'existent probablement pas. Règle : toute donnée chiffrée doit être vérifiée."
  }
},
"01.01-D":{
  type:"freetext",title:"La limite qui te concerne le plus",
  instructions:"Dans TON activité, quelle limite te pose le plus de problèmes ? Explique pourquoi et quelle solution tu mets en place dès aujourd'hui.",
  content:{
    placeholder:"Dans mon activité [précise], la limite X me pose problème quand je [situation]. La solution que je mets en place : ...",
    min_length:100,
    feedback_ok:"Bonne réflexion appliquée. Reviens à cette réponse dans 30 jours — ta perception évolue avec la pratique.",
    feedback_ko:"Trop théorique. Ancre-la dans ton contexte réel."
  }
},
"01.01-E":{
  type:"matching",title:"Limite → Solution",
  instructions:"Associe chaque limite de Claude à la meilleure solution.",
  content:{
    column_a:[
      {id:"1",text:"Pas de mémoire entre sessions"},
      {id:"2",text:"Connaissance figée dans le temps"},
      {id:"3",text:"Hallucinations assurées"},
      {id:"4",text:"Biais de complaisance"}
    ],
    column_b:[
      {id:"A",text:"Commencer chaque session avec un contexte de 3-4 lignes"},
      {id:"B",text:"Vérifier toute donnée critique dans des sources primaires"},
      {id:"C",text:"Ne jamais utiliser Claude pour l'actualité sans vérification"},
      {id:"D",text:"Imposer un rôle adversarial explicite"}
    ],
    answers:{"1":"A","2":"C","3":"B","4":"D"}
  }
},
"01.01-F":{
  type:"qcm",title:"Claude cite une stat avec assurance",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Claude vient de te dire : 'Selon une étude de McKinsey 2024, 73% des PME françaises ont adopté l'IA.' Tu en as besoin pour une présentation client. Que fais-tu ?",
    options:[
      {text:"Tu l'utilises — McKinsey est une source fiable.",correct:false,feedback:"La fiabilité de la source ne garantit pas que Claude a cité correctement. Il peut fabriquer des stats avec des noms crédibles."},
      {text:"Tu vérifies sur le site de McKinsey avant de l'utiliser.",correct:true,feedback:"Exactement. Nom crédible + ton assuré ≠ information vraie. Toujours vérifier à la source."},
      {text:"Tu demandes à Claude de confirmer la stat.",correct:false,feedback:"Demander à Claude de confirmer ce qu'il a dit n'aide pas — il confirmera probablement."},
      {text:"Tu l'utilises en ajoutant 'selon Claude'.",correct:false,feedback:"Citer Claude comme source dans une présentation client n'est pas une couverture valide."}
    ],
    feedback_ok:"Toujours vérifier à la source primaire — quelle que soit la confiance apparente de Claude.",
    feedback_ko:"La bonne réponse est B. Nom crédible + ton assuré ≠ information vraie."
  }
},
"01.01-G":{
  type:"completion",title:"Les 4 limites en une phrase",
  instructions:"Complète chaque définition de limite.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"nom de la limite 1",hint:"Chaque conversation repart de zéro"},
      {id:"BLANK_2",placeholder:"nom de la limite 2",hint:"Données arrêtées à une date donnée"},
      {id:"BLANK_3",placeholder:"nom de la limite 3",hint:"Inventer des faits avec assurance"},
      {id:"BLANK_4",placeholder:"nom de la limite 4",hint:"Confirmer ce que tu sembles croire"}
    ],
    feedback_ok:"Les 4 limites mémorisées. Ce sont les 4 situations où Claude peut te coûter du temps ou de la crédibilité.",
    feedback_ko:"Les 4 limites : 1-Mémoire, 2-Temporalité, 3-Hallucination, 4-Biais de complaisance."
  }
},
"01.01-H":{
  type:"truefalse",title:"Nouvelles affirmations — niveau 2",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Un prompt plus long donne toujours une meilleure réponse.",answer:false,explanation:"La longueur n'est pas la qualité. Un prompt précis et court bat un prompt long et vague."},
    {text:"Claude peut faire des erreurs de calcul sur des opérations simples.",answer:true,explanation:"Les LLMs sont des modèles de langage, pas des calculatrices. Les calculs complexes doivent être vérifiés."},
    {text:"Le même prompt donné deux fois peut produire des réponses différentes.",answer:true,explanation:"La génération est probabiliste — il y a une part d'aléatoire dans chaque réponse."},
    {text:"Claude connaît les événements survenus après sa date d'entraînement.",answer:false,explanation:"Connaissance figée = il ne sait rien de ce qui s'est passé après sa date de coupure."},
    {text:"Claude peut être influencé par la formulation de ta question.",answer:true,explanation:"C'est le biais de formulation — la façon dont tu poses la question oriente la réponse."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Parfait — tu maîtrises les nuances des limites de Claude."},
    {min:3,max:4,message:"Bien. Les limites 1 et 3 sont les plus importantes à retenir."},
    {min:0,max:2,message:"Reprends la section sur les limites fondamentales."}
  ]}
},
"01.01-I":{
  type:"freetext",title:"3 cas d'hallucination dans ton métier",
  instructions:"Donne 3 situations concrètes dans ton activité où une hallucination de Claude pourrait être dangereuse (pour toi, ton client, ou ta crédibilité).",
  content:{
    placeholder:"Situation 1 : Si je demande à Claude de [tâche], il pourrait inventer [quoi], ce qui causerait [conséquence].\nSituation 2 : ...\nSituation 3 : ...",
    min_length:120,
    feedback_ok:"Excellente prise de conscience. Ces 3 situations sont maintenant dans ta mémoire — tu seras plus vigilant quand tu approcheras ces cas.",
    feedback_ko:"Les situations sont trop génériques. Ancre-les dans ton activité précise avec les conséquences réelles."
  }
},
"01.01-J":{
  type:"checklist",title:"Mon protocole anti-hallucination",
  instructions:"Coche les règles que tu t'engages à appliquer dès aujourd'hui.",
  content:{
    items:[
      {id:"j1",text:"Je ne copie jamais une stat de Claude sans la vérifier à la source primaire"},
      {id:"j2",text:"Je ne cite jamais un auteur, livre ou étude suggéré par Claude sans vérification"},
      {id:"j3",text:"Avant d'utiliser un chiffre en présentation client, je Google d'abord"},
      {id:"j4",text:"Quand Claude semble très sûr d'un fait précis, c'est un signal de vérifier"},
      {id:"j5",text:"Je ne demande pas à Claude de confirmer ce qu'il vient de dire — je cherche une source externe"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Protocole complet. Tu es prêt à utiliser Claude professionnellement."},
      {min:3,max:4,message:"Bien. Les règles non cochées sont celles qui peuvent te coûter le plus cher."},
      {min:0,max:2,message:"Attention — sans ces règles, tu prendras des risques réels sur des livrables clients."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 01 · Leçon 01.02 — Pourquoi 90% l'utilisent mal
// ══════════════════════════════════════════════════════════════════
"01.02-A":{
  type:"beforeafter",title:"Identifie les erreurs — 3 paires",
  instructions:"Pour chaque paire, identifie la version efficace et l'erreur de la version médiocre.",
  content:{
    pairs:[
      {before:"Aide-moi avec mon marketing.",after:"Je suis thérapeute spécialisée en anxiété professionnelle. Rédige 3 accroches Instagram pour des cadres 35-45 ans en Île-de-France. Ton direct, pas de jargon clinique.",error_type:"Erreur 1 — Trop vague",explanation:"La version A ne donne aucun contexte. Claude génère une réponse générique inutilisable."},
      {before:"Écris-moi un email, analyse mon marché, crée mon offre et fais ma page de vente.",after:"Rédige un email de prospection de 120 mots pour un artisan plombier qui cherche plus de chantiers dans le Val-de-Marne. Ton direct.",error_type:"Erreur 3 — Empilage",explanation:"La version A empile 4 demandes. Claude fera tout à 20% de qualité."},
      {before:"Donne-moi des conseils pour mon business.",after:"En 5 bullet points, donne-moi les 5 actions les plus impactantes pour un consultant freelance à 3000€/mois qui veut atteindre 6000€/mois en 90 jours sans augmenter son nombre de clients.",error_type:"Erreurs 1+4 — Vague + Pas de format",explanation:"La version A est vague ET n'a pas de format. La version B a contexte précis + format spécifié."}
    ],
    feedback:"Les versions B appliquent le test des 10 secondes : contexte précis, tâche unique, format spécifié, ton choisi."
  }
},
"01.02-B":{
  type:"promptlab",title:"Transforme un prompt médiocre",
  instructions:"Tape d'abord le prompt vague dans Claude. Puis écris ta version améliorée. Colle ici ta version améliorée + les 3 premières lignes de la réponse.",
  content:{
    prompt_to_copy:"Aide-moi à trouver des clients.\n\n[Envoie d'abord ce prompt vague. Note la réponse. Puis nouvelle conversation avec ta version améliorée.]",
    field_label:"Colle ici ta version améliorée + les 3 premières lignes de la réponse",
    min_length:60,
    feedback:"Compare les deux réponses. La version vague = conseils génériques. La tienne = quelque chose d'actionnable aujourd'hui."
  }
},
"01.02-C":{
  type:"completion",title:"Complète le prompt universel",
  instructions:"Remplis les blancs avec TES vraies informations.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"rôle précis avec expérience",hint:"Ex: expert en copywriting avec 10 ans en B2B"},
      {id:"BLANK_2",placeholder:"ton activité en 1 phrase",hint:"Ex: consultant SEO pour e-commerçants Shopify"},
      {id:"BLANK_3",placeholder:"ton offre principale",hint:"Ex: un audit SEO mensuel à 500€"},
      {id:"BLANK_4",placeholder:"ta cible précise",hint:"Ex: gérants de boutiques mode en ligne"},
      {id:"BLANK_5",placeholder:"1 seule tâche précise",hint:"Ex: génère 10 scripts d'accroche LinkedIn"},
      {id:"BLANK_6",placeholder:"longueur + structure + ton",hint:"Ex: liste de 10 points, 2 lignes max, ton direct"}
    ],
    feedback_ok:"Prompt solide. Ce template couvre 80% de tes besoins pour les 6 prochains mois.",
    feedback_ko:"Certains blancs sont encore trop vagues. Reprends avec ton activité précise."
  }
},
"01.02-D":{
  type:"checklist",title:"Valide ton prompt avant d'envoyer",
  instructions:"Prends le prompt de l'exercice précédent. Coche chaque critère rempli.",
  content:{
    items:[
      {id:"d1",text:"Mon activité est décrite en 1 phrase concrète"},
      {id:"d2",text:"Ma cible est une personne réelle avec un problème spécifique"},
      {id:"d3",text:"Je demande une seule chose"},
      {id:"d4",text:"J'ai spécifié un format de sortie"},
      {id:"d5",text:"Le prompt fait plus de 3 lignes"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Prompt prêt à envoyer."},
      {min:3,max:4,message:"Identifie les cases non cochées et corrige."},
      {min:0,max:2,message:"Reprends l'exercice C avec plus de précision."}
    ]
  }
},
"01.02-E":{
  type:"qcm",title:"Quel est le problème principal ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Prompt : 'Tu es expert en business. Aide-moi à améliorer ma situation.' Quel est le problème principal ?",
    options:[
      {text:"Le rôle n'est pas assez précis.",correct:false,feedback:"C'est un problème, mais pas le principal ici."},
      {text:"Il n'y a ni contexte, ni tâche précise, ni format — tout manque.",correct:true,feedback:"Exactement. Ce prompt n'a rien — ni qui tu es, ni ce que tu veux, ni comment tu veux la réponse."},
      {text:"La demande est trop polie.",correct:false,feedback:"La politesse n'impacte pas la qualité des réponses."},
      {text:"'Améliorer' est un verbe trop faible.",correct:false,feedback:"Le verbe est un problème secondaire. Le vrai problème c'est l'absence totale de contexte."}
    ],
    feedback_ok:"Sans contexte + tâche + format, Claude improvise dans le vide.",
    feedback_ko:"La bonne réponse est B. Un prompt sans contexte ni tâche précise donne une réponse générique inutilisable."
  }
},
"01.02-F":{
  type:"truefalse",title:"Vrai/Faux — erreurs courantes de prompt",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Plus on donne de contexte à Claude, plus la réponse est précise.",answer:true,explanation:"Contexte = signal. Plus tu en donnes, moins Claude improvise."},
    {text:"Donner un format de sortie (bullet points, tableau...) réduit la créativité de Claude.",answer:false,explanation:"Le format cadre la réponse sans limiter la qualité. Sans format, Claude choisit par défaut."},
    {text:"Empiler 5 tâches dans un prompt est efficace car on obtient tout en une fois.",answer:false,explanation:"5 tâches = 5 réponses à 20%. 1 tâche = 1 réponse à 95%."},
    {text:"Un prompt de 2 lignes peut être excellent s'il est précis.",answer:true,explanation:"La longueur n'est pas la qualité. 2 lignes très précises > 10 lignes vagues."},
    {text:"Spécifier le ton (direct, formel, bienveillant) améliore la réponse.",answer:true,explanation:"Le ton est l'un des 4 éléments clés avec contexte, tâche et format."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Parfait — tu maîtrises les règles de base du prompt."},
    {min:3,max:4,message:"Bien. Revois les règles sur le format et l'empilage."},
    {min:0,max:2,message:"Reprends la leçon sur les 4 erreurs principales."}
  ]}
},
"01.02-G":{
  type:"ranking",title:"Classe ces prompts du plus au moins efficace",
  instructions:"Glisse pour ordonner du plus efficace (1) au moins efficace (5).",
  content:{
    items:[
      {id:"1",text:"'Aide-moi.'"},
      {id:"2",text:"'Aide-moi avec ma newsletter.'"},
      {id:"3",text:"'Écris une newsletter de 300 mots sur la productivité pour entrepreneurs.'"},
      {id:"4",text:"'Tu es copywriter B2B. Rédige une newsletter de 300 mots pour des entrepreneurs solo sur la productivité IA. Accroche forte, 3 tips actionnables, CTA vers mon programme. Ton direct.'"},
      {id:"5",text:"'Newsletter. Entrepreneurs. IA. 300 mots.'"}
    ],
    correct_order:["4","3","5","2","1"],
    feedback:"Ordre : 4>3>5>2>1. Le 4 applique tout : rôle + contexte + tâche + format + ton. Le 3 a tâche+format mais pas rôle. Le 5 est un résumé sans verbe ni contexte."
  }
},
"01.02-H":{
  type:"beforeafter",title:"Corrige ces 3 nouveaux prompts",
  instructions:"Identifie la version améliorée dans chaque paire.",
  content:{
    pairs:[
      {before:"Fais quelque chose pour mes réseaux sociaux.",after:"Tu es social media manager. Je vends des formations Excel en ligne à des assistantes RH. Crée un calendrier de 5 posts LinkedIn pour la semaine : 1 conseil pratique, 1 coulisse, 1 témoignage, 1 question, 1 promotion. Ton professionnel et accessible.",error_type:"Vague → Précis",explanation:"'Quelque chose' = zéro signal. La version B donne rôle, cible, type de posts, structure et ton."},
      {before:"Écris un email de vente parfait pour mon produit.",after:"Tu es expert en copywriting. Rédige un email de vente de 200 mots pour mon cours de gestion du stress à 97€. Cible : managers 35-50 ans débordés. Structure : problème → solution → preuve → CTA. Ton direct.",error_type:"Subjectif → Structuré",explanation:"'Parfait' est subjectif et sans critère. La version B donne une structure précise et des critères mesurables."},
      {before:"Comment je peux gagner plus d'argent ?",after:"Tu es conseiller financier indépendant. Je suis graphiste freelance à 2 500€/mois. Donne-moi les 5 leviers les plus rapides pour atteindre 4 000€/mois en moins de 6 mois. Format : liste numérotée avec une action concrète par point.",error_type:"Générique → Contextualisé",explanation:"La question générique donne une réponse générique. La version B ancre dans une situation réelle avec un objectif chiffré."}
    ],
    feedback:"Chaque version B transforme une intention vague en commande précise avec tous les éléments nécessaires."
  }
},
"01.02-I":{
  type:"freetext",title:"Analyse tes 3 derniers prompts",
  instructions:"Pense aux 3 derniers vrais prompts que tu as envoyés à Claude. Identifie pour chacun quelle(s) erreur(s) tu faisais et comment tu les améliorerais.",
  content:{
    placeholder:"Prompt 1 : [Ce que j'avais tapé]\nErreur commise : [vague / empilage / pas de format / contexte manquant]\nVersion améliorée : [...]\n\nPrompt 2 : ...\nPrompt 3 : ...",
    min_length:150,
    feedback_ok:"Cet exercice d'auto-analyse est le plus utile de la leçon. Tu viens d'identifier tes propres schémas d'erreur — c'est la base du progrès réel.",
    feedback_ko:"Sois plus spécifique sur les vrais prompts que tu as utilisés. L'exercice n'a de valeur que si c'est concret et réel."
  }
},
"01.02-J":{
  type:"qcm",title:"Cas pratique — quel est le bon réflexe ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu dois rédiger une proposition commerciale pour un client. Tu ouvres Claude et tu veux lui déléguer ça. Quelle est la PREMIÈRE chose à faire ?",
    options:[
      {text:"Taper directement 'Rédige une proposition commerciale pour moi'.",correct:false,feedback:"Sans contexte, Claude va te demander des précisions — ou pire, inventer un contexte générique."},
      {text:"Préparer en 3 lignes : qui tu es, pour qui c'est, quel est l'objectif de la proposition.",correct:true,feedback:"Exactement. Ces 3 lignes de contexte font toute la différence entre une réponse générique et quelque chose d'utilisable."},
      {text:"Chercher un template de proposition commerciale sur Google d'abord.",correct:false,feedback:"Claude peut te donner un template personnalisé — mais seulement si tu lui donnes le contexte nécessaire."},
      {text:"Lui demander quel format il recommande pour une proposition commerciale.",correct:false,feedback:"Perdre du temps sur le format avant d'avoir donné le contexte, c'est mettre la charrue avant les bœufs."}
    ],
    feedback_ok:"Le contexte d'abord, toujours. 3 lignes qui décrivent la situation réelle font toute la différence.",
    feedback_ko:"La bonne réponse est B. Sans contexte, Claude improvise. Avec contexte, il travaille."
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 01 · Leçon 01.03 — Les 3 types d'IA
// ══════════════════════════════════════════════════════════════════
"01.03-A":{
  type:"matching",title:"Tâche → Famille d'IA",
  instructions:"Associe chaque tâche à la famille d'IA qui convient le mieux.",
  content:{
    column_a:[
      {id:"1",text:"Rédiger une newsletter de 500 mots"},
      {id:"2",text:"Créer la photo de couverture LinkedIn"},
      {id:"3",text:"Faire lire ta bio à voix haute"},
      {id:"4",text:"Créer un clip animé Instagram"},
      {id:"5",text:"Analyser un contrat de 30 pages"},
      {id:"6",text:"Transcrire une réunion de 45 minutes"}
    ],
    column_b:[
      {id:"A",text:"LLM / Langage (Claude, ChatGPT)"},
      {id:"B",text:"Image (Midjourney, Flux)"},
      {id:"C",text:"Audio / Voix (ElevenLabs, Whisper)"},
      {id:"D",text:"Vidéo (Kling AI, Runway)"}
    ],
    answers:{"1":"A","2":"B","3":"C","4":"D","5":"A","6":"C"}
  }
},
"01.03-B":{
  type:"qcm",title:"Newsletter + Instagram sans budget",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu veux lancer une newsletter hebdomadaire + un compte Instagram sans budget designer ni rédacteur. Quel est le meilleur combo ?",
    options:[
      {text:"ChatGPT pour tout — il fait le texte ET les images maintenant",correct:false,feedback:"La qualité image de DALL-E reste en dessous de Midjourney pour un usage professionnel."},
      {text:"Claude pour la newsletter et les légendes + Midjourney pour les visuels",correct:true,feedback:"Claude pour le langage, Midjourney pour les visuels. Résultat : présence pro à 30€/mois."},
      {text:"Claude pour le texte + Canva IA pour les visuels",correct:false,feedback:"Canva IA produit des visuels génériques reconnaissables. Sur un feed pro, ça se voit."},
      {text:"Midjourney pour les visuels + un ghostwriter humain",correct:false,feedback:"Un ghostwriter humain coûte bien plus et retire l'avantage de l'automatisation."}
    ],
    feedback_ok:"Claude pour le texte, Midjourney pour les visuels. Ce combo couvre 90% des besoins en communication d'un entrepreneur solo.",
    feedback_ko:"La bonne réponse est B. La règle : Claude pour texte/raisonnement, Midjourney pour les visuels."
  }
},
"01.03-C":{
  type:"ranking",title:"Classe les outils par utilité pour toi",
  instructions:"Glisse pour ordonner du plus utile (1) au moins utile (5) pour TON activité actuelle.",
  content:{
    items:[
      {id:"1",text:"Claude — texte, analyse, raisonnement, code"},
      {id:"2",text:"Midjourney — génération d'images professionnelles"},
      {id:"3",text:"ElevenLabs — clonage de voix, text-to-speech"},
      {id:"4",text:"Suno — génération musicale"},
      {id:"5",text:"Runway / Kling AI — génération vidéo"}
    ],
    correct_order:null,
    feedback:"Ton classement reflète tes besoins réels. La plupart des entrepreneurs ont besoin de Claude + un outil image en priorité."
  }
},
"01.03-D":{
  type:"truefalse",title:"Vrai/Faux — familles d'IA",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Un LLM comme Claude peut générer des images directement.",answer:false,explanation:"Claude est un modèle de langage. La génération d'images nécessite un modèle spécialisé comme Midjourney."},
    {text:"ElevenLabs peut cloner ta voix à partir d'un extrait audio.",answer:true,explanation:"ElevenLabs est l'outil de référence pour le clonage vocal — quelques minutes d'audio suffisent."},
    {text:"La même IA peut être excellente en texte ET en image.",answer:false,explanation:"Les architectures sont différentes. Un modèle optimisé pour le langage n'est pas optimisé pour la vision."},
    {text:"Pour transcrire une réunion, Claude est l'outil adapté.",answer:false,explanation:"La transcription audio est le domaine de Whisper (OpenAI) ou des outils de STT spécialisés, pas des LLMs."},
    {text:"Pour la plupart des entrepreneurs, les LLMs sont l'outil IA le plus utile au quotidien.",answer:true,explanation:"Le texte, l'analyse et le raisonnement couvrent 80% des besoins business courants."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Parfait — tu sais exactement quel outil pour quelle tâche."},
    {min:3,max:4,message:"Bien. Retiens les différences entre LLM, image, audio et vidéo."},
    {min:0,max:2,message:"Reprends la classification des familles d'IA."}
  ]}
},
"01.03-E":{
  type:"qcm",title:"Cas pratique — podcast entrepreneur",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu lances un podcast entrepreneur. Tu as besoin : d'une jingle d'intro musicale, de transcriptions d'épisodes, et de visuels pour Spotify. Combien d'outils IA différents as-tu besoin ?",
    options:[
      {text:"1 — Claude peut tout faire.",correct:false,feedback:"Claude peut aider sur la transcription mais pas générer de musique ni de visuels optimaux."},
      {text:"2 — Un LLM pour la transcription et les visuels, un outil audio pour la musique.",correct:false,feedback:"Les visuels et la transcription sont des familles différentes. Il te faut 3 outils distincts."},
      {text:"3 — Suno pour la musique, Whisper pour la transcription, Midjourney pour les visuels.",correct:true,feedback:"Exactement. 3 familles d'IA, 3 outils spécialisés. Chacun dans son domaine."},
      {text:"4 — Plus c'est d'outils, mieux c'est.",correct:false,feedback:"La règle c'est 1 outil par famille — pas plus, pas moins."}
    ],
    feedback_ok:"3 familles = 3 outils. Chaque IA dans son domaine d'excellence.",
    feedback_ko:"La bonne réponse est C. Musique → Suno, Transcription → Whisper, Visuels → Midjourney."
  }
},
"01.03-F":{
  type:"completion",title:"Complète les descriptions",
  instructions:"Complète chaque description avec le bon type d'IA.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"type d'IA",hint:"Traite le texte, l'analyse, le raisonnement"},
      {id:"BLANK_2",placeholder:"type d'IA",hint:"Génère des images à partir de descriptions texte"},
      {id:"BLANK_3",placeholder:"type d'IA",hint:"Synthétise et clone des voix humaines"},
      {id:"BLANK_4",placeholder:"type d'IA",hint:"Génère et édite des clips vidéo"},
      {id:"BLANK_5",placeholder:"outil spécifique",hint:"LLM développé par Anthropic"}
    ],
    feedback_ok:"Taxonomie maîtrisée. Tu peux maintenant choisir le bon outil sans hésiter.",
    feedback_ko:"Les 4 familles : LLM (langage), Diffusion (image), TTS/STT (audio), Génération vidéo."
  }
},
"01.03-G":{
  type:"freetext",title:"Ton stack IA idéal",
  instructions:"Liste les 3 familles d'IA dont tu as besoin dans ton activité. Pour chacune, précise le cas d'usage concret et l'outil que tu utiliserais.",
  content:{
    placeholder:"Famille 1 : [LLM/Image/Audio/Vidéo]\nCas d'usage dans mon activité : [...]\nOutil choisi : [...] parce que [...]\n\nFamille 2 : ...\nFamille 3 : ...",
    min_length:120,
    feedback_ok:"Stack personnalisé défini. C'est la base de ta stratégie IA — 3 outils maîtrisés valent mieux que 10 testés superficiellement.",
    feedback_ko:"Sois plus spécifique sur les cas d'usage concrets dans TON activité."
  }
},
"01.03-H":{
  type:"beforeafter",title:"Bon choix vs mauvais choix d'outil",
  instructions:"Identifie le bon choix d'outil IA pour chaque besoin.",
  content:{
    pairs:[
      {before:"Utiliser Claude pour créer le logo de mon entreprise.",after:"Utiliser Midjourney avec un brief détaillé pour créer le logo, puis Claude pour rédiger le brief.",error_type:"Mauvais outil → Bon outil",explanation:"Claude peut décrire un logo mais ne peut pas le générer. Midjourney est l'outil adapté."},
      {before:"Utiliser Midjourney pour rédiger les emails de ma campagne.",after:"Utiliser Claude pour rédiger les emails avec le contexte de ma cible et mon offre.",error_type:"Mauvais outil → Bon outil",explanation:"Midjourney génère des images, pas du texte. Claude est l'outil de langage."},
      {before:"Utiliser ChatGPT pour transcrire et résumer une réunion audio.",after:"Utiliser Whisper pour transcrire, puis Claude pour résumer et extraire les actions.",error_type:"1 outil → 2 outils spécialisés",explanation:"La transcription et le résumé sont 2 étapes. Whisper transcrit mieux que les LLMs. Claude résume mieux que Whisper."}
    ],
    feedback:"Le bon réflexe : identifier d'abord la FAMILLE de tâche avant de choisir l'outil."
  }
},
"01.03-I":{
  type:"qcm",title:"Cas pratique — e-commerce",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu gères une boutique e-commerce. Cette semaine tu dois : écrire les fiches produits, créer des photos de produits lifestyle, et faire une vidéo de présentation. Quel est l'ordre logique d'utilisation des outils IA ?",
    options:[
      {text:"Midjourney → Claude → Runway",correct:false,feedback:"L'ordre n'a pas d'importance si tu travailles sur des livrables indépendants — mais démarrer par le texte structure mieux le travail."},
      {text:"Claude pour les fiches produits, Midjourney pour les photos, Runway pour la vidéo",correct:true,feedback:"Exactement. Chaque outil dans sa famille. Claude → texte, Midjourney → image, Runway → vidéo."},
      {text:"Claude pour tout — il est le plus polyvalent.",correct:false,feedback:"Claude excelle en texte mais ne peut pas créer des photos produits ni des vidéos."},
      {text:"Un seul outil tout-en-un suffit.",correct:false,feedback:"Il n'existe pas d'outil tout-en-un qui excelle dans les 4 familles."}
    ],
    feedback_ok:"Claude → Midjourney → Runway. Chaque famille dans son domaine.",
    feedback_ko:"La bonne réponse est B. 3 livrables de 3 familles différentes = 3 outils spécialisés."
  }
},
"01.03-J":{
  type:"checklist",title:"Mon inventaire d'outils IA",
  instructions:"Coche les familles d'IA que tu as déjà utilisées ou que tu prévois d'utiliser cette semaine.",
  content:{
    items:[
      {id:"j1",text:"LLM (Claude, ChatGPT, Gemini) — texte, analyse, raisonnement"},
      {id:"j2",text:"Génération d'images (Midjourney, DALL-E, Flux) — visuels, illustrations"},
      {id:"j3",text:"Audio / Voix (ElevenLabs, Whisper) — voix, transcription"},
      {id:"j4",text:"Génération vidéo (Runway, Kling AI, Pika) — clips, présentations"},
      {id:"j5",text:"J'ai identifié au moins 1 cas d'usage concret pour chaque famille cochée"}
    ],
    feedback_thresholds:[
      {min:4,max:5,message:"Stack diversifié. Tu utilises déjà l'IA dans plusieurs dimensions de ton travail."},
      {min:2,max:3,message:"Bien démarré. La prochaine étape : tester une nouvelle famille cette semaine."},
      {min:0,max:1,message:"Commence par le LLM (Claude) — c'est la famille la plus impactante au quotidien."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 01 · Leçon 01.04 — Claude vs GPT vs Gemini
// ══════════════════════════════════════════════════════════════════
"01.04-A":{
  type:"qcm",title:"Document long — quel LLM ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Ton client te demande d'analyser son rapport annuel de 80 pages et d'en extraire les 10 insights les plus actionnables. Quel LLM utilises-tu ?",
    options:[
      {text:"ChatGPT — c'est le plus connu, donc le plus fiable.",correct:false,feedback:"La notoriété ne détermine pas la performance sur les tâches spécifiques."},
      {text:"Gemini — Google a intégré Drive donc ça facilite l'upload.",correct:false,feedback:"L'intégration Drive est un avantage, mais Gemini n'excelle pas sur l'analyse de documents denses."},
      {text:"Claude — meilleure capacité sur les documents longs et le raisonnement analytique.",correct:true,feedback:"Claude a la plus grande fenêtre de contexte et excelle dans l'analyse de documents denses."},
      {text:"N'importe lequel — ils font tous la même chose.",correct:false,feedback:"Faux — chaque LLM a des forces distinctes selon le type de tâche."}
    ],
    feedback_ok:"Claude + documents longs + analyse structurée = combo optimal.",
    feedback_ko:"La bonne réponse est C. Claude excelle sur les documents denses avec extraction d'insights."
  }
},
"01.04-B":{
  type:"freetext",title:"Tes instructions personnalisées Claude",
  instructions:"Rédige tes instructions personnalisées complètes avec le template de la leçon. Tes vraies informations.",
  content:{
    placeholder:"MON PRÉNOM : ...\nMON ACTIVITÉ : ...\nCE QUE JE VENDS : ...\nMA CIBLE IDÉALE : ...\nMES PROJETS EN COURS : ...\nMON TON PRÉFÉRÉ : ...\nCE QUE JE NE VEUX PAS : ...\nMES OUTILS HABITUELS : ...",
    min_length:150,
    feedback_ok:"Instructions solides. Test : colle-les dans Claude → Settings → Personal preferences. Nouvelle conversation → 'Que sais-tu de moi ?' Si Claude reformule correctement ton activité — ça fonctionne.",
    feedback_ko:"Les instructions sont trop vagues. L'objectif : que Claude te comprenne sans que tu te réexpliques. Ajoute activité précise, cible précise, et au moins 1 projet en cours."
  }
},
"01.04-C":{
  type:"promptlab",title:"Teste tes instructions personnalisées",
  instructions:"Configure tes instructions dans Claude (Settings). Ouvre une NOUVELLE conversation. Lance ce prompt. Colle la réponse.",
  content:{
    prompt_to_copy:"Que sais-tu de moi et de mon activité ? Résume en 5 points, puis dis-moi si des informations importantes semblent manquer pour travailler efficacement avec toi.",
    field_label:"Colle ici la réponse de Claude",
    min_length:50,
    feedback:"Si Claude a bien résumé ton activité et identifié des lacunes pertinentes — tes instructions fonctionnent. C'est l'une des configurations les plus importantes de toute la formation."
  }
},
"01.04-D":{
  type:"matching",title:"LLM → Force principale",
  instructions:"Associe chaque LLM à sa force principale.",
  content:{
    column_a:[
      {id:"1",text:"Claude (Anthropic)"},
      {id:"2",text:"ChatGPT / GPT-4 (OpenAI)"},
      {id:"3",text:"Gemini (Google)"},
      {id:"4",text:"Mistral (européen)"}
    ],
    column_b:[
      {id:"A",text:"Analyse de documents longs, raisonnement nuancé, écriture naturelle"},
      {id:"B",text:"Intégration ecosystem Google, multimodal, connaissances web à jour"},
      {id:"C",text:"Écosystème le plus large, API la plus utilisée, plugins nombreux"},
      {id:"D",text:"Open source, économique, adapté aux usages techniques sensibles"}
    ],
    answers:{"1":"A","2":"C","3":"B","4":"D"}
  }
},
"01.04-E":{
  type:"truefalse",title:"Comparaisons entre LLMs",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude est le meilleur LLM pour générer du code Python.",answer:false,explanation:"Claude est bon en code mais GPT-4 avec Copilot reste la référence en développement. 'Meilleur' dépend du contexte."},
    {text:"ChatGPT a l'écosystème de plugins et d'intégrations le plus développé.",answer:true,explanation:"L'API OpenAI est la plus utilisée par les développeurs — c'est l'avantage concurrentiel de ChatGPT."},
    {text:"Gemini est le meilleur LLM pour analyser des documents PDF.",answer:false,explanation:"Claude excelle sur les documents longs. Gemini a l'avantage de l'intégration Google mais pas nécessairement la meilleure analyse."},
    {text:"Les performances des LLMs dépendent de la tâche — il n'y a pas de 'meilleur' absolu.",answer:true,explanation:"Exactement. Le bon LLM, c'est celui qui est le meilleur sur TON type de tâche, pas le plus populaire."},
    {text:"Les instructions personnalisées fonctionnent de la même façon sur tous les LLMs.",answer:false,explanation:"Chaque LLM a son propre système d'instructions. Les paramètres et leur impact varient."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu as une vision claire des forces différenciées de chaque LLM."},
    {min:3,max:4,message:"Bien. Retiens que le choix du LLM dépend de la tâche, pas de la popularité."},
    {min:0,max:2,message:"Reprends la comparaison des forces de chaque modèle."}
  ]}
},
"01.04-F":{
  type:"qcm",title:"Client — rédaction longue complexe",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu dois rédiger un livre blanc de 15 pages sur la transformation digitale pour un client dans l'industrie. Plusieurs allers-retours et révisions sont prévus. Quel LLM choisis-tu ?",
    options:[
      {text:"ChatGPT — l'interface est la plus connue.",correct:false,feedback:"L'interface ne détermine pas la qualité sur un document long."},
      {text:"Claude — il maintient la cohérence sur des textes longs et supporte de nombreuses révisions dans la même conversation.",correct:true,feedback:"Claude excelle dans la gestion de documents longs avec de nombreux allers-retours. Sa grande fenêtre de contexte est un avantage décisif."},
      {text:"Gemini — Google a des partenariats dans l'industrie.",correct:false,feedback:"Les partenariats de Google n'impactent pas les performances de Gemini sur un exercice rédactionnel long."},
      {text:"Peu importe — ils font la même chose à 15 pages.",correct:false,feedback:"À 15 pages avec révisions, la différence de fenêtre de contexte est très perceptible."}
    ],
    feedback_ok:"Claude + long document + révisions = combo optimal. Sa fenêtre de contexte fait la différence.",
    feedback_ko:"La bonne réponse est B. Pour les documents longs avec allers-retours, Claude maintient mieux la cohérence."
  }
},
"01.04-G":{
  type:"ranking",title:"Quel LLM pour quelle tâche ?",
  instructions:"Classe ces tâches de celle où Claude est le plus avantageux (1) à celle où son avantage est le plus faible (5).",
  content:{
    items:[
      {id:"1",text:"Analyser un rapport de 100 pages"},
      {id:"2",text:"Chercher l'actualité de la semaine dernière"},
      {id:"3",text:"Rédiger un email professionnel de 200 mots"},
      {id:"4",text:"Intégrer une API dans une app web"},
      {id:"5",text:"Raisonner sur un dilemme éthique complexe"}
    ],
    correct_order:["1","5","3","4","2"],
    feedback:"Claude excelle sur : documents longs, raisonnement nuancé. Moins différencié sur : emails courts, code standard. Désavantagé sur : actualité récente (connaissance figée)."
  }
},
"01.04-H":{
  type:"completion",title:"Les forces de chaque LLM en une ligne",
  instructions:"Complète chaque description.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"force de Claude",hint:"Documents longs, raisonnement, nuance"},
      {id:"BLANK_2",placeholder:"force de ChatGPT",hint:"Écosystème, plugins, API la plus utilisée"},
      {id:"BLANK_3",placeholder:"force de Gemini",hint:"Intégration Google, web en temps réel"},
      {id:"BLANK_4",placeholder:"règle de choix",hint:"Dépend de la tâche, pas de la popularité"}
    ],
    feedback_ok:"Mapping clair. Tu peux maintenant choisir le bon LLM selon la tâche.",
    feedback_ko:"Mémo : Claude → analyse longue, ChatGPT → écosystème, Gemini → Google+web."
  }
},
"01.04-I":{
  type:"beforeafter",title:"Bon vs mauvais choix de LLM",
  instructions:"Identifie le meilleur choix pour chaque situation.",
  content:{
    pairs:[
      {before:"Utiliser Gemini pour analyser un contrat de 50 pages.",after:"Utiliser Claude pour analyser le contrat avec des questions précises sur les clauses clés.",error_type:"Mauvais choix → Bon choix",explanation:"Claude a la plus grande fenêtre de contexte pour les documents denses. C'est son avantage le plus mesurable."},
      {before:"Utiliser Claude pour connaître l'actualité de cette semaine.",after:"Utiliser Gemini avec accès web ou ChatGPT avec browsing pour l'actualité récente.",error_type:"Mauvais outil → Bon outil",explanation:"Claude a une connaissance figée. Pour l'actualité, un LLM avec accès web est indispensable."},
      {before:"Utiliser ChatGPT pour un brainstorming créatif nuancé sur un sujet sensible.",after:"Utiliser Claude pour le brainstorming — il est calibré pour plus de nuance sur des sujets complexes.",error_type:"Correct mais perfectible",explanation:"Pour la nuance et les sujets complexes, Claude est généralement plus subtil dans son traitement."}
    ],
    feedback:"Règle finale : pas de LLM supérieur absolu. Le bon choix dépend de la tâche et du contexte."
  }
},
"01.04-J":{
  type:"freetext",title:"Ton setup LLM personnel",
  instructions:"Décris ton setup LLM idéal pour les 3 prochains mois : quel LLM pour quelle catégorie de tâches dans ton activité, et pourquoi.",
  content:{
    placeholder:"Mon activité principale : [...]\n\nPour les tâches de [catégorie], j'utilise [LLM] parce que [...]\nPour les tâches de [catégorie], j'utilise [LLM] parce que [...]\nPour les tâches de [catégorie], j'utilise [LLM] parce que [...]\n\nBudget mensuel estimé : [...]",
    min_length:120,
    feedback_ok:"Setup personnel défini. La clarté sur 'quel outil pour quoi' évite la paralysie du choix et l'abonnement inutile à tout.",
    feedback_ko:"Sois plus spécifique sur tes cas d'usage réels et les raisons concrètes de ton choix."
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 02 · Leçon 02.01 — La formule RCTFE
// ══════════════════════════════════════════════════════════════════
"02.01-A":{
  type:"completion",title:"Complète le prompt RCTFE",
  instructions:"Remplis les blancs avec TES vraies informations.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"expert précis avec expérience chiffrée",hint:"Ex: directeur marketing B2B avec 12 ans en SaaS"},
      {id:"BLANK_2",placeholder:"ton activité",hint:"Ex: consultant en recrutement pour PME industrielles"},
      {id:"BLANK_3",placeholder:"ton offre",hint:"Ex: des accompagnements de recrutement de cadres"},
      {id:"BLANK_4",placeholder:"ta cible",hint:"Ex: DRH de PME 50-200 salariés en industrie"},
      {id:"BLANK_5",placeholder:"contexte spécifique",hint:"Ex: je prépare ma première campagne LinkedIn"},
      {id:"BLANK_6",placeholder:"verbe d'action + livrable précis",hint:"Ex: génères 10 messages de prospection LinkedIn"},
      {id:"BLANK_7",placeholder:"longueur / structure / ton",hint:"Ex: 10 messages numérotés, 3 lignes max, ton direct"}
    ],
    feedback_ok:"Prompt complet. Envoie-le dans Claude — si la réponse est utilisable à 80%+ sans retouche majeure, ton RCTFE était bon.",
    feedback_ko:"Certains blancs sont encore trop génériques. Un Rôle efficace a une expérience chiffrée. Un Contexte efficace a activité précise + cible précise."
  }
},
"02.01-B":{
  type:"ranking",title:"Du moins au plus efficace",
  instructions:"Classe ces 5 prompts du plus efficace (1) au moins efficace (5).",
  content:{
    items:[
      {id:"1",text:"\"Aide-moi à rédiger un post LinkedIn.\""},
      {id:"2",text:"\"Tu es expert LinkedIn. Rédige un post.\""},
      {id:"3",text:"\"Tu es consultant en personal branding avec 10 ans LinkedIn. Je suis coach en reconversion 40-50 ans. Rédige un post de 200 mots sur la reconversion avec hook fort et CTA. Ton inspirant mais réaliste.\""},
      {id:"4",text:"\"Rédige un post LinkedIn professionnel de 200 mots pour un coach en reconversion.\""},
      {id:"5",text:"\"Tu es expert LinkedIn. Je veux un post sur la reconversion. Format : 200 mots, hook fort, CTA.\""}
    ],
    correct_order:["3","5","4","2","1"],
    feedback:"Ordre : 3>5>4>2>1. Le 3 applique les 5 éléments RCTFE. Le 5 a R+T+F mais pas C. Le 4 a T+F mais pas R. Le 2 a juste R. Le 1 n'a rien."
  }
},
"02.01-C":{
  type:"promptlab",title:"RCTFE sur une tâche réelle cette semaine",
  instructions:"Choisis une tâche réelle de cette semaine. Construis le prompt RCTFE complet. Lance-le. Colle le prompt + les 3 premières lignes de la réponse.",
  content:{
    prompt_to_copy:"[Tu construis toi-même — structure RCTFE complète]\n\nR: Tu es...\nC: Je suis...\nT: Je veux que tu...\nF: Format...",
    field_label:"Colle ton prompt + les 3 premières lignes de la réponse de Claude",
    min_length:80,
    feedback:"Mesure : est-ce que tu peux utiliser cette réponse directement sans tout réécrire ? Si oui — ton RCTFE était bon. Si non — l'un des 5 éléments manquait de précision."
  }
},
"02.01-D":{
  type:"truefalse",title:"Vrai/Faux sur la formule RCTFE",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Le Rôle peut être générique ('expert en business') et quand même efficace.",answer:false,explanation:"Un rôle générique donne une réponse générique. Le rôle doit avoir une spécialité et idéalement une expérience chiffrée."},
    {text:"Le Contexte est l'élément le plus souvent oublié par les débutants.",answer:true,explanation:"Les débutants écrivent souvent R+T en oubliant C. Or C permet à Claude de personnaliser la réponse."},
    {text:"Les Exemples sont optionnels si la Tâche est bien décrite.",answer:false,explanation:"Les exemples calibrent mieux que toute description. 'Comme ça' est toujours plus efficace que 'de cette façon'."},
    {text:"Un prompt RCTFE complet fait toujours au moins 5-6 lignes.",answer:true,explanation:"En dessous de 5-6 lignes, un RCTFE est généralement incomplet."},
    {text:"On peut utiliser RCTFE pour n'importe quel type de tâche.",answer:true,explanation:"RCTFE fonctionne pour l'analyse, la planification, le code, le feedback — pas uniquement la rédaction."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Parfait — tu as bien compris la logique de chaque composant."},
    {min:3,max:4,message:"Bien. Relis les points sur les Exemples et le Contexte."},
    {min:0,max:2,message:"Reprends la leçon 02.01 — la formule est le fondement de tout ce qui suit."}
  ]}
},
"02.01-E":{
  type:"qcm",title:"Quel élément manque dans ce prompt ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Prompt : 'Tu es expert en copywriting B2B avec 8 ans d'expérience. Rédige 5 accroches LinkedIn pour promouvoir mon service de comptabilité. Format : 1 ligne d'accroche par item, ton direct.' Quel élément RCTFE manque ?",
    options:[
      {text:"Le Rôle — il n'est pas assez précis.",correct:false,feedback:"Le rôle est correct : expert copywriting B2B avec 8 ans."},
      {text:"Le Contexte — on ne sait pas qui est le client, sa cible, ni son positionnement.",correct:true,feedback:"Exactement. On sait ce que Claude doit faire, mais pas POUR QUI et DANS QUEL CONTEXTE. La réponse sera générique."},
      {text:"La Tâche — 'rédige' n'est pas précis.",correct:false,feedback:"'Rédige 5 accroches' est une tâche précise."},
      {text:"Le Format — '1 ligne' n'est pas assez détaillé.",correct:false,feedback:"Le format est clair et utilisable tel quel."}
    ],
    feedback_ok:"Sans contexte, Claude génère des accroches génériques pour 'n'importe quel service de comptabilité'. Le contexte personnalise.",
    feedback_ko:"La bonne réponse est B. Le contexte (qui tu es, ta cible, ton marché) est l'élément manquant."
  }
},
"02.01-F":{
  type:"matching",title:"Composant RCTFE → Description",
  instructions:"Associe chaque composant à sa description.",
  content:{
    column_a:[
      {id:"1",text:"R — Rôle"},
      {id:"2",text:"C — Contexte"},
      {id:"3",text:"T — Tâche"},
      {id:"4",text:"F — Format"},
      {id:"5",text:"E — Exemples"}
    ],
    column_b:[
      {id:"A",text:"Qui tu es, ton activité, ta cible, la situation actuelle"},
      {id:"B",text:"La longueur, la structure, le ton, la forme attendue"},
      {id:"C",text:"L'expertise que tu donnes à Claude pour répondre"},
      {id:"D",text:"Des modèles concrets pour calibrer la qualité"},
      {id:"E",text:"Ce que Claude doit faire exactement — 1 seul livrable"}
    ],
    answers:{"1":"C","2":"A","3":"E","4":"B","5":"D"}
  }
},
"02.01-G":{
  type:"beforeafter",title:"Améliore ces prompts avec RCTFE",
  instructions:"Identifie la version améliorée dans chaque paire.",
  content:{
    pairs:[
      {before:"Aide-moi à écrire une offre de service.",after:"Tu es consultant en stratégie commerciale avec 10 ans en B2B. Je suis graphiste freelance. Rédige une offre de service d'identité visuelle pour PME artisanales, budget 1500-3000€. 3 niveaux de prestation en tableau. Ton professionnel et accessible.",error_type:"Sans RCTFE → Avec RCTFE",explanation:"La version A n'a rien. La version B a les 5 composants : R (consultant), C (graphiste freelance, PME artisanales), T (offre 3 niveaux), F (tableau), E (absent mais les 4 autres suffisent)."},
      {before:"Explique-moi comment fonctionne le SEO.",after:"Tu es expert SEO avec 8 ans d'expérience en e-commerce. Je suis propriétaire d'une boutique Shopify mode femme, CA 200k€/an. Explique-moi les 5 facteurs SEO qui auraient le plus d'impact sur mon trafic organique en 90 jours. Format : liste numérotée avec une action concrète par point.",error_type:"Question générique → RCTFE",explanation:"'Explique le SEO' donne un cours magistral. La version B donne des conseils actionnables pour TON contexte précis."},
      {before:"Génère des idées de contenu pour moi.",after:"Tu es content strategist B2C. Je suis nutritionniste, cible : femmes 30-45 ans actives. Génère 10 idées de posts Instagram — mix éducatif/pratique/inspiration. Format : titre + angle + type de visuel. Ton accessible, pas de jargon médical.",error_type:"Vague → Précis",explanation:"'Des idées' peut être n'importe quoi. La version B a un public précis, un canal précis, un format précis."}
    ],
    feedback:"Chaque version B transforme une demande vague en commande précise avec les 5 composants RCTFE."
  }
},
"02.01-H":{
  type:"freetext",title:"Construis un RCTFE pour une tâche difficile",
  instructions:"Pense à une tâche pour laquelle tu as du mal à obtenir de bons résultats de Claude. Construis le RCTFE complet pour cette tâche.",
  content:{
    placeholder:"Tâche difficile : [...]\n\nR: Tu es [rôle précis avec expérience]\nC: Je suis [activité], je vends [offre] à [cible]. Contexte actuel : [situation]\nT: Je veux que tu [action précise + livrable]\nF: Format : [longueur, structure, ton]\nE: Exemple de ce que j'attends : [si applicable]",
    min_length:150,
    feedback_ok:"RCTFE complet sur une tâche difficile. Lance-le sur Claude et compare avec tes anciens prompts sur la même tâche. La différence devrait être immédiatement visible.",
    feedback_ko:"Le RCTFE est incomplet. Au minimum R+C+T doivent être précis. Le Format est optionnel mais très recommandé."
  }
},
"02.01-I":{
  type:"checklist",title:"Mon RCTFE est-il prêt ?",
  instructions:"Prends le RCTFE que tu viens de construire. Coche chaque critère rempli.",
  content:{
    items:[
      {id:"i1",text:"Le Rôle a une spécialité précise et/ou une expérience chiffrée"},
      {id:"i2",text:"Le Contexte décrit mon activité + ma cible + la situation actuelle en 2-3 lignes"},
      {id:"i3",text:"La Tâche est un seul livrable précis avec un verbe d'action"},
      {id:"i4",text:"Le Format spécifie la longueur ou la structure ou le ton"},
      {id:"i5",text:"Le prompt fait au moins 5 lignes"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"RCTFE complet. Envoie-le."},
      {min:3,max:4,message:"Presque bon. Complète les éléments manquants avant d'envoyer."},
      {min:0,max:2,message:"Le RCTFE est incomplet. Un prompt incomplet = réponse incomplète."}
    ]
  }
},
"02.01-J":{
  type:"qcm",title:"Cas pratique final",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu dois préparer une réunion client sur la stratégie de contenu de sa marque. Tu veux utiliser Claude pour t'aider. Quelle est la MEILLEURE façon de formuler ta demande ?",
    options:[
      {text:"'Donne-moi des idées pour la réunion de demain.'",correct:false,feedback:"Aucun contexte — Claude va inventer une situation générique."},
      {text:"'Tu es consultant en stratégie de contenu. Je rencontre demain le DG d'une PME industrielle de 80 personnes qui veut développer son LinkedIn. Prépare-moi 10 questions à poser pour auditer sa situation actuelle. Format : questions numérotées avec le pourquoi de chaque question.'",correct:true,feedback:"RCTFE complet : rôle précis, contexte riche, tâche unique, format structuré. Claude peut produire quelque chose d'immédiatement utilisable."},
      {text:"'Comment préparer une réunion stratégie de contenu ?'",correct:false,feedback:"Question générique = réponse générique. Claude te donnera un template valable pour n'importe quelle réunion."},
      {text:"'Liste les sujets à aborder en réunion client.'",correct:false,feedback:"Pas de contexte sur le type de client, l'industrie, ou l'objectif de la réunion."}
    ],
    feedback_ok:"La version B est un RCTFE quasi-parfait. Contexte précis + tâche unique + format structuré = réponse utilisable directement.",
    feedback_ko:"La bonne réponse est B. Rôle + contexte du client + tâche précise + format = RCTFE."
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 02 · Leçon 02.02 — Prompt basique → expert
// ══════════════════════════════════════════════════════════════════
"02.02-A":{
  type:"beforeafter",title:"Identifie et corrige les prompts médiocres",
  instructions:"Pour chaque paire, identifie quelle erreur RCTFE le prompt médiocre commet.",
  content:{
    pairs:[
      {before:"Crée du contenu pour mes réseaux.",after:"Tu es content strategist avec 8 ans en B2C. Je suis coach fitness indépendant, cible femmes 30-45 ans. Crée un calendrier de 4 posts Instagram : 1 éducatif, 1 inspirant, 1 pratique, 1 témoignage. Ton direct et encourageant.",error_type:"Erreurs 1+4 — Vague + Pas de format",explanation:"Manque rôle, contexte, tâche précise, format. La version B applique les 5 éléments."},
      {before:"Tu es expert en vente. Aide-moi à vendre.",after:"Tu es responsable commercial B2B avec 10 ans en services PME. Je lance un service de comptabilité à distance à 200€/mois. Identifie les 5 objections les plus fréquentes d'un gérant PME 10-30 salariés et donne une réponse percutante pour chacune. Format : tableau 2 colonnes.",error_type:"Erreur 2 — Tâche implicite",explanation:"'Aide-moi à vendre' ne dit pas quoi vendre, à qui, ni quel output. Claude va deviner — et mal deviner."},
      {before:"Analyse mon marché, crée mon offre, rédige ma page de vente et donne-moi un plan.",after:"Tu es analyste stratégique. Je vends [OFFRE]. Analyse uniquement mes 3 concurrents principaux. Pour chacun : positionnement, cible, prix, point faible. Format : tableau.",error_type:"Erreur 3 — Empilage",explanation:"4 tâches majeures en un prompt = 4 résultats médiocres. 1 objectif = 1 conversation."}
    ],
    feedback:"3 erreurs les plus fréquentes : vague, implicite, empilage. Chaque version B découpe en tâche unique avec contexte complet."
  }
},
"02.02-B":{
  type:"promptlab",title:"Compare les deux versions toi-même",
  instructions:"Tape d'abord le prompt médiocre dans Claude. Note la qualité. Nouvelle conversation avec ta version RCTFE. Colle la différence observée.",
  content:{
    prompt_to_copy:"Prompt médiocre à tester :\n\"Aide-moi à créer du contenu pour mes réseaux sociaux.\"\n\n—\n\nPuis crée une nouvelle conversation avec ta version RCTFE complète.",
    field_label:"Décris la différence de qualité entre les deux réponses",
    min_length:60,
    feedback:"La différence que tu décris sépare un utilisateur débutant d'un utilisateur expert. Pas les outils, pas l'abonnement — la qualité du contexte donné."
  }
},
"02.02-C":{
  type:"qcm",title:"Niveau de qualité de ce prompt",
  instructions:"Évalue ce prompt : 'Tu es copywriter. Je vends des formations en ligne. Rédige un post Instagram.' Quel niveau est-il ?",
  content:{
    question:"Tu es copywriter. Je vends des formations en ligne. Rédige un post Instagram. — Quel niveau de qualité pour ce prompt ?",
    options:[
      {text:"Excellent — rôle + contexte + tâche sont présents.",correct:false,feedback:"Le rôle et la tâche sont là, mais le contexte est ultra-vague ('formations en ligne' = n'importe quoi)."},
      {text:"Moyen — il a un rôle et une tâche, mais le contexte et le format manquent.",correct:true,feedback:"Exactement. On sait qui répond et quoi faire, mais pas pour qui, sur quel sujet, ni dans quel format."},
      {text:"Mauvais — aucun des éléments RCTFE n'est présent.",correct:false,feedback:"Il y a bien un Rôle (copywriter) et une Tâche (rédige un post). Ce n'est pas nul — juste incomplet."},
      {text:"Bon — court et direct, ça suffit.",correct:false,feedback:"Court ne signifie pas bon. 'Formations en ligne' peut être n'importe quoi pour Claude."}
    ],
    feedback_ok:"Moyen = il manque contexte précis + format. La réponse sera utilisable mais générique.",
    feedback_ko:"La bonne réponse est B. Rôle et tâche présents, mais contexte vague et format absent."
  }
},
"02.02-D":{
  type:"truefalse",title:"Règles de transformation de prompt",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Transformer un prompt basique en prompt expert prend toujours plus de 10 minutes.",answer:false,explanation:"Avec le template RCTFE, 2-3 minutes suffisent une fois qu'on a l'habitude. La précision devient un réflexe."},
    {text:"Un prompt de 10 lignes est toujours meilleur qu'un prompt de 3 lignes.",answer:false,explanation:"La longueur n'est pas la qualité. Un prompt précis de 3 lignes bat un prompt répétitif de 10 lignes."},
    {text:"Spécifier l'expérience dans le Rôle ('15 ans en marketing') améliore la réponse.",answer:true,explanation:"L'expérience chiffrée signale le niveau de sophistication attendu dans la réponse."},
    {text:"Si Claude ne comprend pas ta demande, c'est généralement sa faute.",answer:false,explanation:"Dans 90% des cas, Claude répond à ce qu'il a compris. Si la réponse est mauvaise, le prompt était probablement ambigu."},
    {text:"On peut améliorer une réponse médiocre en relançant dans la même conversation.",answer:true,explanation:"La continuation de conversation est puissante : 'Cette réponse est trop générique — refais en te concentrant sur [aspect précis].'"}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Parfait — tu as intégré les règles de base de la transformation de prompt."},
    {min:3,max:4,message:"Bien. Retiens que longueur ≠ qualité, et que l'amélioration continue en conversation est clé."},
    {min:0,max:2,message:"Reprends les règles de transformation — elles font toute la différence en pratique."}
  ]}
},
"02.02-E":{
  type:"completion",title:"Complète la version expert",
  instructions:"Complète ce prompt basique pour le transformer en prompt expert.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"rôle avec expérience",hint:"Spécialiste en [domaine] avec [X ans] en [secteur]"},
      {id:"BLANK_2",placeholder:"ton activité",hint:"Je suis [métier], je vends [offre] à [cible]"},
      {id:"BLANK_3",placeholder:"tâche précise",hint:"Verbe d'action + livrable + nombre si applicable"},
      {id:"BLANK_4",placeholder:"format détaillé",hint:"Longueur + structure + ton + forme"}
    ],
    feedback_ok:"Transformation réussie. Compare la longueur et la précision avec le prompt de départ.",
    feedback_ko:"Au moins le rôle et la tâche doivent être précis. Recommence en pensant à une vraie situation."
  }
},
"02.02-F":{
  type:"ranking",title:"Étapes de transformation d'un prompt",
  instructions:"Classe ces étapes dans le bon ordre pour transformer un prompt basique en prompt expert.",
  content:{
    items:[
      {id:"1",text:"Identifier la tâche exacte qu'on veut confier"},
      {id:"2",text:"Définir le format de sortie souhaité"},
      {id:"3",text:"Choisir le rôle expert adapté"},
      {id:"4",text:"Ajouter le contexte (qui je suis, ma cible, la situation)"},
      {id:"5",text:"Envoyer et évaluer la réponse"}
    ],
    correct_order:["1","3","4","2","5"],
    feedback:"Ordre : 1 (tâche) → 3 (rôle) → 4 (contexte) → 2 (format) → 5 (envoi). La tâche d'abord oriente tous les autres éléments."
  }
},
"02.02-G":{
  type:"freetext",title:"Transforme ce prompt médiocre",
  instructions:"Reçois ce prompt basique et écris la version expert complète avec RCTFE pour TON activité.",
  content:{
    placeholder:"Prompt original : 'Aide-moi à me faire connaître.'\n\nMa version expert :\nR: Tu es...\nC: Je suis..., je vends... à...\nT: Je veux que tu...\nF: Format : ...",
    min_length:120,
    feedback_ok:"Transformation réussie. La version que tu viens d'écrire vaut 10 fois le prompt original. Utilise-la vraiment cette semaine.",
    feedback_ko:"La transformation est incomplète. Assure-toi que le contexte contient TON activité réelle et TA cible précise."
  }
},
"02.02-H":{
  type:"matching",title:"Erreur → Correction",
  instructions:"Associe chaque erreur de prompt à la correction appropriée.",
  content:{
    column_a:[
      {id:"1",text:"Prompt trop vague : 'Aide-moi avec le contenu'"},
      {id:"2",text:"Tâche implicite : 'Améliore mon texte'"},
      {id:"3",text:"Empilage : 'Écris un email + analyse le marché + crée l'offre'"},
      {id:"4",text:"Pas de format : 'Donne-moi des conseils'"},
      {id:"5",text:"Rôle trop générique : 'Tu es expert'"}
    ],
    column_b:[
      {id:"A",text:"Préciser le canal, la cible, le type de contenu et l'objectif"},
      {id:"B",text:"Ajouter l'expérience et la spécialité : 'Expert en copywriting B2B avec 8 ans'"},
      {id:"C",text:"Préciser dans quel sens améliorer : 'Rends-le plus direct et plus court'"},
      {id:"D",text:"Séparer en 3 conversations distinctes"},
      {id:"E",text:"Spécifier : '5 bullet points, 1 action concrète par point'"}
    ],
    answers:{"1":"A","2":"C","3":"D","4":"E","5":"B"}
  }
},
"02.02-I":{
  type:"beforeafter",title:"3 nouvelles paires à améliorer",
  instructions:"Identifie la meilleure version dans chaque paire.",
  content:{
    pairs:[
      {before:"Donne-moi un plan de contenu.",after:"Tu es content strategist. Je suis coach business, cible : entrepreneurs débutants 25-35 ans. Crée un plan de contenu LinkedIn pour 2 semaines : 10 posts, mix éducatif/inspirant/vente. Titre + format visuel + CTA pour chaque.",error_type:"Sans contexte → Avec contexte complet",explanation:"Sans contexte, 'plan de contenu' = template universel inutilisable. Avec contexte, = plan personnalisé actionnable."},
      {before:"Comment écrire un email de vente ?",after:"Tu es expert en email marketing B2B. Je relance 20 anciens clients qui ont arrêté mon service il y a 6 mois. Rédige un email de réactivation de 150 mots. Structure : accroche + rappel valeur + offre de retour + CTA. Ton chaleureux, pas commercial.",error_type:"Théorique → Concret et appliqué",explanation:"'Comment écrire' donne un cours. La version B donne un email utilisable directement."},
      {before:"Analyse mes concurrents.",after:"Tu es analyste stratégique. Je vends [MON OFFRE] dans [MON SECTEUR]. Analyse ces 3 concurrents : [A], [B], [C]. Pour chacun : positionnement, cible, prix apparent, point faible exploitable. Format : tableau. Sources que tu connais uniquement.",error_type:"Vague → Structuré avec périmètre",explanation:"'Analyse mes concurrents' sans les nommer = impossible. La version B donne le périmètre exact et le format attendu."}
    ],
    feedback:"Règle universelle : plus le contexte est précis, plus la réponse est directement utilisable."
  }
},
"02.02-J":{
  type:"checklist",title:"Ma checklist de prompt expert",
  instructions:"Avant d'envoyer ton prochain prompt à Claude, coche chaque critère rempli.",
  content:{
    items:[
      {id:"j1",text:"J'ai défini un Rôle avec spécialité précise (pas juste 'expert')"},
      {id:"j2",text:"J'ai donné mon Contexte : qui je suis + ma cible + la situation actuelle"},
      {id:"j3",text:"Ma Tâche est un seul livrable avec un verbe d'action précis"},
      {id:"j4",text:"J'ai spécifié un Format (longueur, structure ou ton)"},
      {id:"j5",text:"Le prompt fait au moins 4-5 lignes"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Prompt expert prêt. La réponse sera directement utilisable."},
      {min:3,max:4,message:"Presque. Complète les critères manquants — ils font la différence."},
      {min:0,max:2,message:"Trop incomplet. Un prompt sans contexte ni format donnera une réponse générique."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 02 · Leçon 02.03 — Les 5 erreurs qui ruinent tes prompts
// ══════════════════════════════════════════════════════════════════
"02.03-A":{
  type:"qcm",title:"Réponse positive — que faire ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu demandes à Claude : 'Qu'est-ce que tu penses de mon idée de podcast sur l'entrepreneuriat ?' Il répond positivement. Quelle est la meilleure suite ?",
    options:[
      {text:"'Joue le rôle d'un créateur de podcasts cynique qui en a vu 200 échouer. Qu'est-ce qui va foirer dans mon projet ?'",correct:true,feedback:"La technique adversariale — la seule qui force Claude à générer des raisons d'échouer avec autant d'énergie."},
      {text:"'Donne-moi une analyse SWOT complète et objective.'",correct:false,feedback:"La SWOT dans un contexte déjà positif restera biaisée."},
      {text:"Commencer une nouvelle conversation.",correct:false,feedback:"Bonne intuition mais tu perds le contexte de la discussion."},
      {text:"'Quels sont les 3 podcasts entrepreneuriat les plus suivis en France ?'",correct:false,feedback:"Ça analyse le marché, pas les risques de TON projet."}
    ],
    feedback_ok:"La technique adversariale sort Claude de son biais naturel d'être helpful et positif.",
    feedback_ko:"La bonne réponse est A. Forcer un rôle critique contourne le biais de complaisance."
  }
},
"02.03-B":{
  type:"matching",title:"Erreur avancée → Exemple",
  instructions:"Associe chaque erreur avancée à l'exemple qui l'illustre.",
  content:{
    column_a:[
      {id:"1",text:"Contexte mensonger"},
      {id:"2",text:"Tâche implicite"},
      {id:"3",text:"Contraintes contradictoires"},
      {id:"4",text:"Demander une opinion sans demander une critique"},
      {id:"5",text:"Changer de sujet dans la même conversation"}
    ],
    column_b:[
      {id:"A",text:"'Tu es CEO d'une startup à 10M€ de CA' (alors que tu démarres)"},
      {id:"B",text:"'Améliore ce texte' sans préciser dans quel sens"},
      {id:"C",text:"'Sois très créatif mais reste dans les guidelines strictes et ne dépasse pas 50 mots'"},
      {id:"D",text:"'Mon idée de business est-elle bonne ?' sans demander les défauts"},
      {id:"E",text:"Conversation sur ton plan marketing → 'Au fait, rédige-moi une offre d'emploi'"}
    ],
    answers:{"1":"A","2":"B","3":"C","4":"D","5":"E"}
  }
},
"02.03-C":{
  type:"promptlab",title:"Teste le biais de complaisance sur ton propre projet",
  instructions:"Teste le biais sur TON projet. D'abord question orientée positive, puis version adversariale. Colle les deux réponses + ta conclusion.",
  content:{
    prompt_to_copy:"Étape 1 :\n\"Mon idée de [TON PROJET] est-elle bonne ?\"\n\nNote la réponse.\n\nÉtape 2 — Nouvelle conversation :\n\"Joue le rôle d'un investisseur expérimenté qui a vu 100 projets similaires échouer. Donne-moi les 5 raisons les plus probables pour lesquelles [TON PROJET] va rater.\"\n\nCompare les deux réponses.",
    field_label:"Colle les deux réponses + ta conclusion sur la différence",
    min_length:80,
    feedback:"La version 2 t'a probablement donné des critiques que tu n'avais pas anticipées. C'est ça qui est utile — pas la validation."
  }
},
"02.03-D":{
  type:"truefalse",title:"Les 5 erreurs — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Donner un faux contexte à Claude (se faire passer pour un expert qu'on n'est pas) n'a aucun impact sur la réponse.",answer:false,explanation:"Si tu te présentes comme CEO d'une startup à 10M€, Claude adapte ses conseils à ce contexte. Résultat : conseils inadaptés à ta réalité."},
    {text:"'Améliore ce texte' est suffisant pour obtenir une bonne révision.",answer:false,explanation:"Claude ne sait pas dans quel sens améliorer. Plus court ? Plus formel ? Plus persuasif ? Précise le sens."},
    {text:"Changer de sujet dans une conversation longue peut dégrader la qualité des réponses.",answer:true,explanation:"Le contexte s'accumule. Un changement de sujet crée de la confusion dans le fil de la conversation."},
    {text:"Les contraintes contradictoires dans un prompt produisent toujours une erreur de Claude.",answer:false,explanation:"Claude essaie de concilier les contraintes — souvent avec un résultat médiocre plutôt qu'une erreur explicite."},
    {text:"Poser une question ouverte du type 'Qu'est-ce que tu penses de X ?' est risqué sans préciser qu'on veut des critiques.",answer:true,explanation:"Sans demande explicite de critique, Claude penche vers la validation — c'est le biais de complaisance."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu as bien intégré les 5 erreurs avancées."},
    {min:3,max:4,message:"Bien. Retiens l'erreur sur le contexte mensonger — c'est la plus sous-estimée."},
    {min:0,max:2,message:"Reprends les 5 erreurs avancées — elles sont subtiles mais très fréquentes."}
  ]}
},
"02.03-E":{
  type:"qcm",title:"Identifier l'erreur dans ce prompt",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Prompt : 'Sois créatif et innovant, mais reste très professionnel et ne prends aucun risque. Rédige quelque chose d'original qui respecte scrupuleusement toutes les conventions du secteur.' Quelle est l'erreur principale ?",
    options:[
      {text:"Contexte mensonger — les critères ne correspondent pas à la réalité.",correct:false,feedback:"Pas de mensonge ici — les critères sont réels mais contradictoires."},
      {text:"Contraintes contradictoires — créativité et conventionnel s'excluent.",correct:true,feedback:"'Créatif et innovant' + 'ne prends aucun risque' + 'respecte toutes les conventions' = instructions qui s'annulent."},
      {text:"Tâche implicite — on ne sait pas ce qu'il faut rédiger.",correct:false,feedback:"La tâche (rédiger) est claire. Le problème est dans les contraintes contradictoires."},
      {text:"Pas de Rôle — Claude n'a pas de perspective assignée.",correct:false,feedback:"L'absence de rôle est un problème secondaire ici. Le vrai problème ce sont les contradictions."}
    ],
    feedback_ok:"Contraintes contradictoires = Claude va choisir l'interprétation la moins risquée — souvent le plus banal.",
    feedback_ko:"La bonne réponse est B. 'Créatif' + 'aucun risque' + 'toutes les conventions' s'annulent."
  }
},
"02.03-F":{
  type:"completion",title:"Corrige ce prompt sans les erreurs",
  instructions:"Réécris ce prompt en éliminant toutes les erreurs. Prompt original : 'Tu es un expert. Aide-moi avec mon business. Sois créatif mais raisonnable et pas trop long mais complet.'",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"rôle précis sans contradiction",hint:"Expert en [domaine précis] avec [X ans] en [contexte]"},
      {id:"BLANK_2",placeholder:"contexte réel de ton activité",hint:"Je suis [métier], je vends [offre] à [cible]"},
      {id:"BLANK_3",placeholder:"une tâche précise et unique",hint:"1 seul livrable, verbe d'action, critères de qualité"},
      {id:"BLANK_4",placeholder:"format sans contradiction",hint:"Longueur précise OU structure précise — pas les deux en conflit"}
    ],
    feedback_ok:"Prompt corrigé. Sans contradictions, sans ambiguité — Claude peut maintenant travailler efficacement.",
    feedback_ko:"Vérifie que tes critères ne s'annulent pas mutuellement (ex: court ET complet → précise 3 points max)."
  }
},
"02.03-G":{
  type:"ranking",title:"Classe les erreurs par fréquence",
  instructions:"Classe ces 5 erreurs de la plus fréquente (1) à la moins fréquente (5) selon ton expérience.",
  content:{
    items:[
      {id:"1",text:"Contexte trop vague ou manquant"},
      {id:"2",text:"Biais de complaisance non contré"},
      {id:"3",text:"Contraintes contradictoires"},
      {id:"4",text:"Empilage de tâches"},
      {id:"5",text:"Contexte mensonger (se survendre)"}
    ],
    correct_order:null,
    feedback:"Il n'y a pas de bon classement absolu — ça dépend de ton usage. L'erreur la plus fréquente chez les débutants est souvent le manque de contexte. L'erreur la plus coûteuse est souvent le biais de complaisance non contré."
  }
},
"02.03-H":{
  type:"beforeafter",title:"Corriger les 5 erreurs",
  instructions:"Identifie la version corrigée dans chaque paire.",
  content:{
    pairs:[
      {before:"Je suis CEO d'une startup tech valorisée à 2M€. Comment lever des fonds Series A ?",after:"Je suis fondateur d'une startup SaaS RH avec 3 clients pilotes et 15k€ de MRR depuis 3 mois. Quelles sont les étapes concrètes pour lever ma première seed de 300k€ en France ?",error_type:"Contexte mensonger → Contexte réel",explanation:"Se présenter comme CEO à 2M€ quand on débute donne des conseils calibrés pour des situations bien plus avancées."},
      {before:"Sois concis mais exhaustif et couvre tous les aspects en 50 mots.",after:"Rédige un résumé en 50 mots. Couvre uniquement les 3 points les plus importants.",error_type:"Contradictions → Clarté",explanation:"'Exhaustif' et '50 mots' sont incompatibles. La version B choisit clairement entre les deux."},
      {before:"Mon concept de boutique en ligne est-il viable ?",after:"Joue le rôle d'un e-commerçant qui a vu 50 boutiques échouer. Donne-moi les 5 raisons pour lesquelles mon concept [DÉCRIRE] risque de ne pas marcher.",error_type:"Validation → Critique constructive",explanation:"Sans demande explicite de critique, Claude valide. La version B force l'analyse des risques réels."}
    ],
    feedback:"Les 5 erreurs corrigées : contexte réel, tâche unique, contraintes cohérentes, critique explicite, sujet stable."
  }
},
"02.03-I":{
  type:"freetext",title:"Mes 3 erreurs principales",
  instructions:"Identifie les 3 erreurs que TU commets le plus souvent dans tes prompts. Donne un exemple réel de chacune et comment tu vas la corriger.",
  content:{
    placeholder:"Erreur 1 que je commets : [...]\nExemple réel : [...]\nComment je la corrige : [...]\n\nErreur 2 : ...\nErreur 3 : ...",
    min_length:150,
    feedback_ok:"Auto-diagnostic précis. Ces 3 erreurs identifiées sont maintenant des signaux d'alerte — tu les reconnaîtras avant d'envoyer ton prochain prompt.",
    feedback_ko:"Trop générique. Identifie des erreurs que TU commets vraiment avec des exemples concrets de tes conversations Claude."
  }
},
"02.03-J":{
  type:"checklist",title:"Anti-erreurs : ma checklist finale",
  instructions:"Coche chaque règle que tu t'engages à appliquer pour éviter les 5 erreurs.",
  content:{
    items:[
      {id:"j1",text:"Je donne mon vrai contexte — pas ce que je voudrais être, mais ce que je suis"},
      {id:"j2",text:"Quand je veux du feedback sur une idée, je demande explicitement les défauts"},
      {id:"j3",text:"Je vérifie qu'il n'y a pas de contradictions dans mes critères avant d'envoyer"},
      {id:"j4",text:"Je limite chaque conversation à un seul sujet ou une seule tâche"},
      {id:"j5",text:"Quand Claude est trop positif, je relance avec un rôle adversarial explicite"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Anti-erreurs maîtrisées. Tu éviteras 80% des frustrations liées à Claude."},
      {min:3,max:4,message:"Bien. Coche les règles restantes — elles couvrent les erreurs les plus subtiles."},
      {min:0,max:2,message:"Ces règles sont les gardes-fous essentiels. Sans elles, les erreurs se répèteront."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 03 · Leçon 03.01 — Écrire des emails professionnels en 30s
// ══════════════════════════════════════════════════════════════════
"03.01-A":{
  type:"truefalse",title:"Email pro avec Claude — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude peut rédiger un email professionnel complet en 30 secondes si le contexte est bien donné.",answer:true,explanation:"Avec le bon contexte (expéditeur, destinataire, objectif, ton), Claude produit un email prêt à envoyer en quelques secondes."},
    {text:"Il faut toujours réécrire entièrement les emails générés par Claude.",answer:false,explanation:"Avec un bon prompt, 70-80% de l'email est utilisable directement. Tu ajustes les détails personnels."},
    {text:"Spécifier le ton (chaleureux, formel, direct) change significativement le résultat.",answer:true,explanation:"Le ton est l'un des paramètres les plus impactants pour les emails — il change complètement la relation perçue."},
    {text:"Claude peut adapter le même email à 5 destinataires différents en moins de 2 minutes.",answer:true,explanation:"En donnant les variations de contexte par destinataire, Claude génère 5 versions personnalisées très rapidement."},
    {text:"Il est impossible de déléguer les emails clients sensibles à Claude.",answer:false,explanation:"Claude peut rédiger le brouillon — tu conserves le contrôle éditorial et envoies uniquement ce qui te convient."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu as une vision claire de ce que Claude peut faire avec les emails."},
    {min:3,max:4,message:"Bien. Retiens que le ton et le contexte sont les deux leviers principaux."},
    {min:0,max:2,message:"Commence par tester Claude sur un email réel cette semaine."}
  ]}
},
"03.01-B":{
  type:"qcm",title:"Quel prompt pour un email de prospection ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu veux qu'un email de prospection soit ouvert et génère une réponse. Quel prompt donne le meilleur email ?",
    options:[
      {text:"'Écris un email de prospection.'",correct:false,feedback:"Aucun contexte — Claude produira un template générique vu et revu par tous les prospects."},
      {text:"'Écris un email de prospection professionnel et accrocheur.'",correct:false,feedback:"'Professionnel et accrocheur' sans contexte = adjectifs vides. Claude ne sait toujours pas à qui ni pour quoi."},
      {text:"'Tu es expert en cold email B2B. Je suis consultant RH. Je prospecte des DRH de PME 50-150 salariés en secteur industriel. Rédige un email de 120 mots. Accroche sur leur problème (recrutement difficile en industrie), proposition de valeur courte, CTA : appel 20 min. Ton direct, pas de formule bateau.'",correct:true,feedback:"Tous les éléments sont là : rôle, contexte (qui prospecte, qui est prospecté), tâche précise, format, ton, CTA."},
      {text:"'Rédige un email court et personnalisé pour mes clients.'",correct:false,feedback:"'Personnalisé' sans données personnelles = impossible. Claude ne connaît pas tes clients."}
    ],
    feedback_ok:"Rôle + contexte précis + tâche + format + ton = email directement envoyable.",
    feedback_ko:"La bonne réponse est C. Plus le contexte est précis, plus l'email sera percutant et non générique."
  }
},
"03.01-C":{
  type:"promptlab",title:"Rédige ton premier email avec Claude",
  instructions:"Choisis un email réel que tu dois envoyer cette semaine. Construis le prompt avec contexte complet. Lance sur Claude. Colle le résultat.",
  content:{
    prompt_to_copy:"Tu es expert en communication professionnelle.\nJe suis [TON ACTIVITÉ].\nJe dois écrire un email à [QUI : fonction + contexte].\nObjectif de l'email : [quoi obtenir].\nInformations clés à mentionner : [2-3 points].\nTon : [formel/direct/chaleureux/etc].\nLongueur : [X mots max].",
    field_label:"Colle l'email généré par Claude",
    min_length:80,
    feedback:"Compare cet email avec ce que tu aurais écrit seul. Temps gagné + qualité potentiellement supérieure. C'est ça, l'email en 30 secondes."
  }
},
"03.01-D":{
  type:"matching",title:"Type d'email → Structure optimale",
  instructions:"Associe chaque type d'email à la structure la plus efficace.",
  content:{
    column_a:[
      {id:"1",text:"Email de prospection froide"},
      {id:"2",text:"Email de relance client"},
      {id:"3",text:"Email de présentation de devis"},
      {id:"4",text:"Email de remerciement post-réunion"}
    ],
    column_b:[
      {id:"A",text:"Résumé décision → valeur rappelée → prochaine étape claire"},
      {id:"B",text:"Accroche sur leur problème → solution courte → CTA précis"},
      {id:"C",text:"Contexte de la réunion → 3 points retenus → suite proposée"},
      {id:"D",text:"Rappel du besoin exprimé → solution proposée → détail prix → validité offre"}
    ],
    answers:{"1":"B","2":"A","3":"D","4":"C"}
  }
},
"03.01-E":{
  type:"completion",title:"Le template d'email universel",
  instructions:"Complète ce template d'email avec TES vraies informations.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"type d'email",hint:"Prospection / Relance / Devis / Remerciement"},
      {id:"BLANK_2",placeholder:"destinataire précis",hint:"Poste + secteur + taille d'entreprise"},
      {id:"BLANK_3",placeholder:"problème ou contexte du destinataire",hint:"Ce qu'ils vivent, leur enjeu actuel"},
      {id:"BLANK_4",placeholder:"valeur que tu apportes",hint:"Ce que TU résous en 1 phrase"},
      {id:"BLANK_5",placeholder:"CTA précis",hint:"1 seule action demandée, facile à faire"}
    ],
    feedback_ok:"Template personnalisé prêt. Lance ce prompt dans Claude et tu as un email utilisable en 30 secondes.",
    feedback_ko:"Le destinataire et le CTA sont les deux éléments les plus importants. Sois plus précis sur ces deux-là."
  }
},
"03.01-F":{
  type:"qcm",title:"Comment personnaliser un email en masse ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu dois envoyer le même type d'email à 10 prospects de secteurs différents. Comment utiliser Claude efficacement ?",
    options:[
      {text:"Envoyer le même email générique — la personnalisation prend trop de temps.",correct:false,feedback:"Les emails génériques ont des taux d'ouverture et de réponse très faibles."},
      {text:"Donner à Claude le template de base + les variables de chaque prospect (secteur, problème, nom). Claude génère 10 versions personnalisées.",correct:true,feedback:"Exactement. Claude est excellent pour les variations contextuelles. 10 emails personnalisés en moins de 5 minutes."},
      {text:"Rédiger chaque email manuellement pour garantir la qualité.",correct:false,feedback:"Claude peut maintenir la même qualité sur 10 versions si le contexte est bien donné."},
      {text:"Utiliser uniquement les champs de personnalisation de ton outil d'emailing.",correct:false,feedback:"Les champs prénom/entreprise ne personnalisent pas le fond du message — seulement la forme."}
    ],
    feedback_ok:"Template + variables par prospect = personnalisation à l'échelle. C'est l'un des meilleurs cas d'usage de Claude.",
    feedback_ko:"La bonne réponse est B. Donne le template + les variables → Claude génère les versions personnalisées."
  }
},
"03.01-G":{
  type:"beforeafter",title:"Emails faibles vs emails forts",
  instructions:"Identifie l'email le plus efficace dans chaque paire.",
  content:{
    pairs:[
      {before:"Bonjour, je me permets de vous contacter afin de vous présenter mes services de conseil en stratégie digitale. Dans le cadre de votre développement, il me semblerait pertinent...",after:"Bonjour Julien, la plupart des e-commerçants mode que j'accompagne perdent 30% de leur panier avant paiement. J'ai une piste concrète pour votre boutique — ça vaut un appel de 15 min ?",error_type:"Centré sur soi → Centré sur le problème client",explanation:"La version A parle de toi. La version B parle du problème du prospect. Les emails qui parlent du client ont 3x plus de réponses."},
      {before:"Suite à notre réunion, je tenais à vous envoyer un email récapitulatif de nos échanges et à vous faire parvenir notre proposition commerciale...",after:"Bonjour Sarah, suite à notre call : vous cherchez à réduire le temps de traitement RH de 40% avant Q3. Je vous envoie notre proposition en PJ — validité 15 jours. Un retour d'ici vendredi ?",error_type:"Vague et long → Concis et orienté action",explanation:"La version B rappelle l'objectif client précis + délai + CTA clair. 4x plus de chances d'obtenir une réponse."},
      {before:"N'hésitez pas à me contacter si vous avez des questions.",after:"Je suis disponible jeudi ou vendredi matin pour un appel de 20 min. Un créneau qui vous convient ?",error_type:"CTA passif → CTA actif",explanation:"'N'hésitez pas' transfère la charge au prospect. La version B propose des créneaux concrets et réduit la friction."}
    ],
    feedback:"3 règles : centré client, concis, CTA actif. Claude applique ces règles si tu lui donnes les bons critères."
  }
},
"03.01-H":{
  type:"freetext",title:"Crée ta bibliothèque d'emails",
  instructions:"Liste les 5 types d'emails que tu envoies le plus souvent dans ton activité. Pour chacun, décris en 2 lignes le contexte type et ce que tu attends comme résultat.",
  content:{
    placeholder:"Email type 1 : [ex: relance devis]\nContexte type : [à qui, pourquoi, quelle situation]\nRésultat attendu : [réponse, RDV, paiement...]\n\nEmail type 2 : ...",
    min_length:150,
    feedback_ok:"Bibliothèque identifiée. L'étape suivante : créer un prompt RCTFE pour chacun de ces 5 types et les sauvegarder dans tes instructions personnalisées Claude."
  }
},
"03.01-I":{
  type:"ranking",title:"Classe les éléments par impact sur l'email",
  instructions:"Classe ces éléments de l'email du plus impactant (1) sur le taux de réponse au moins impactant (5).",
  content:{
    items:[
      {id:"1",text:"L'objet de l'email"},
      {id:"2",text:"Le CTA (appel à l'action)"},
      {id:"3",text:"La personnalisation au problème du destinataire"},
      {id:"4",text:"La signature"},
      {id:"5",text:"La longueur du message"}
    ],
    correct_order:["3","1","2","5","4"],
    feedback:"Ordre d'impact : personnalisation > objet > CTA > longueur > signature. La personnalisation au problème client est le facteur n°1 du taux de réponse."
  }
},
"03.01-J":{
  type:"checklist",title:"Mon email est-il prêt à envoyer ?",
  instructions:"Avant d'envoyer un email rédigé avec Claude, coche chaque critère.",
  content:{
    items:[
      {id:"j1",text:"L'email parle du problème du destinataire, pas uniquement de moi"},
      {id:"j2",text:"Il y a un seul CTA clair et facile à réaliser"},
      {id:"j3",text:"L'email fait moins de 200 mots (sauf devis ou récap complex)"},
      {id:"j4",text:"J'ai personnalisé les détails spécifiques au destinataire"},
      {id:"j5",text:"J'ai relu et retiré tous les mots inutiles et les formules de politesse vides"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Email prêt à envoyer."},
      {min:3,max:4,message:"Presque — améliore les points non cochés avant d'envoyer."},
      {min:0,max:2,message:"Retravailler avant d'envoyer. Un email mal préparé nuit à ta relation client."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 03 · Leçon 03.02 — Analyser n'importe quel document en 2 min
// ══════════════════════════════════════════════════════════════════
"03.02-A":{
  type:"truefalse",title:"Analyse de documents — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude peut analyser un PDF de 50 pages et en extraire les points clés en quelques secondes.",answer:true,explanation:"Claude a une grande fenêtre de contexte — idéale pour les documents longs. Il peut extraire, résumer, et structurer rapidement."},
    {text:"Il faut toujours lire un document entier avant de demander à Claude de l'analyser.",answer:false,explanation:"C'est justement l'inverse : colle le document dans Claude avec tes questions précises — il lit pour toi."},
    {text:"Claude peut comparer deux contrats et identifier les différences clés.",answer:true,explanation:"C'est l'un de ses points forts : comparer des textes longs et identifier les divergences structurelles et de fond."},
    {text:"La qualité de l'analyse de Claude dépend de la précision de ta question.",answer:true,explanation:"'Analyse ce document' donne un résumé générique. 'Identifie les 5 risques juridiques pour mon entreprise' donne une analyse ciblée."},
    {text:"Claude peut analyser des images et des tableaux dans les documents.",answer:true,explanation:"Avec une version multimodale, Claude peut lire des tableaux, graphiques et images intégrés dans des documents."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu sais exactement comment exploiter Claude pour l'analyse documentaire."},
    {min:3,max:4,message:"Bien. Retiens que la question précise fait toute la différence."},
    {min:0,max:2,message:"Commence par tester Claude sur un vrai document cette semaine."}
  ]}
},
"03.02-B":{
  type:"qcm",title:"Comment analyser un contrat avec Claude ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu reçois un contrat de prestation de 15 pages. Tu veux savoir s'il y a des risques pour toi. Quelle est la meilleure approche ?",
    options:[
      {text:"'Résume ce contrat.'",correct:false,feedback:"Un résumé te donne le contenu mais pas l'analyse des risques. Claude résumera ce qui est écrit, pas ce qui manque."},
      {text:"'Analyse ce contrat et dis-moi ce qui est important.'",correct:false,feedback:"'Ce qui est important' est trop vague — Claude choisira lui-même les critères d'importance."},
      {text:"'Tu es avocat spécialisé en droit des contrats. Analyse ce contrat du point de vue du prestataire. Identifie : 1) les clauses qui m'exposent à des risques, 2) ce qui manque pour me protéger, 3) les points non négociables. Format : liste structurée par section.'",correct:true,feedback:"Rôle précis + perspective définie + questions précises + format = analyse directement actionnable."},
      {text:"'Est-ce un bon contrat ?'",correct:false,feedback:"'Bon' est un jugement sans critère. Claude va valider sans analyse critique réelle."}
    ],
    feedback_ok:"Un rôle expert + questions précises + perspective définie = analyse de contrat en 2 minutes.",
    feedback_ko:"La bonne réponse est C. Donne à Claude le rôle d'avocat + les 3 questions précises à répondre."
  }
},
"03.02-C":{
  type:"promptlab",title:"Analyse un vrai document",
  instructions:"Prends un document réel (contrat, rapport, email long, article). Colle-le dans Claude avec ce prompt. Colle le résultat ici.",
  content:{
    prompt_to_copy:"Tu es expert en [DOMAINE DU DOCUMENT].\nAnalyse ce document et réponds à ces 3 questions :\n1. Quels sont les 5 points les plus importants pour moi en tant que [TON RÔLE] ?\n2. Quels risques ou problèmes identifies-tu ?\n3. Quelles actions concrètes je dois prendre suite à ce document ?\n\n[COLLE LE DOCUMENT ICI]",
    field_label:"Colle l'analyse générée par Claude",
    min_length:80,
    feedback:"Comparé à une lecture linéaire, combien de temps t'aurait pris cette analyse sans Claude ? C'est ça, les 2 minutes."
  }
},
"03.02-D":{
  type:"matching",title:"Type de document → Question clé",
  instructions:"Associe chaque type de document à la question la plus pertinente à poser à Claude.",
  content:{
    column_a:[
      {id:"1",text:"Rapport financier annuel"},
      {id:"2",text:"Contrat de prestation"},
      {id:"3",text:"Retours clients (50 avis)"},
      {id:"4",text:"Article de recherche"}
    ],
    column_b:[
      {id:"A",text:"Identifie les 5 points de douleur récurrents et leur fréquence"},
      {id:"B",text:"Quels sont les 3 indicateurs qui me concernent le plus et leur évolution ?"},
      {id:"C",text:"Quelles sont les clauses qui m'exposent à un risque ?"},
      {id:"D",text:"Résume la thèse principale et les 3 preuves empiriques clés"}
    ],
    answers:{"1":"B","2":"C","3":"A","4":"D"}
  }
},
"03.02-E":{
  type:"freetext",title:"Le document que tu lis le moins",
  instructions:"Pense au type de document que tu reçois régulièrement mais que tu lis rarement faute de temps (conditions générales, rapports, études...). Décris comment tu vas utiliser Claude pour l'analyser à partir de maintenant.",
  content:{
    placeholder:"Le document que je reçois mais ne lis pas : [...]\nPourquoi je ne le lis pas : [...]\nComment je vais l'analyser avec Claude à partir de maintenant :\nPrompt que je vais utiliser : [...]",
    min_length:100,
    feedback_ok:"Excellent cas d'usage identifié. Ce type de document non lu est souvent source de risques ou d'opportunités manquées. Claude devient ton filtre de première lecture."
  }
},
"03.02-F":{
  type:"qcm",title:"Extraire les actions concrètes d'un compte-rendu",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu as un compte-rendu de réunion de 3 pages avec 12 participants. Tu veux extraire rapidement toutes les actions assignées. Quel prompt utilises-tu ?",
    options:[
      {text:"'Résume ce compte-rendu.'",correct:false,feedback:"Un résumé ne liste pas les actions assignées de façon structurée."},
      {text:"'Extrait de ce compte-rendu la liste des actions décidées avec : responsable, deadline, et action concrète. Format : tableau 3 colonnes.'",correct:true,feedback:"Question précise + format structuré = tableau d'actions prêt à utiliser comme base de suivi."},
      {text:"'Quels sont les points importants de cette réunion ?'",correct:false,feedback:"'Points importants' est trop vague et subjectif."},
      {text:"'Qui doit faire quoi ?'",correct:false,feedback:"Correct dans l'intention mais pas assez structuré pour obtenir un format utilisable."}
    ],
    feedback_ok:"Format tableau + 3 colonnes = extraction directement utilisable comme outil de suivi.",
    feedback_ko:"La bonne réponse est B. Précise le format attendu pour obtenir quelque chose d'immédiatement actionnable."
  }
},
"03.02-G":{
  type:"checklist",title:"Mon processus d'analyse documentaire",
  instructions:"Coche les étapes que tu vas intégrer à ton processus dès cette semaine.",
  content:{
    items:[
      {id:"g1",text:"Avant de lire un document long, je le colle d'abord dans Claude pour un premier filtre"},
      {id:"g2",text:"Je pose des questions précises plutôt que 'résume'"},
      {id:"g3",text:"Je donne à Claude le rôle expert adapté au type de document"},
      {id:"g4",text:"Je demande à Claude d'identifier les risques, pas seulement les points positifs"},
      {id:"g5",text:"Je demande un format structuré (tableau, liste numérotée) plutôt que du texte libre"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Processus complet. Tu vas gagner plusieurs heures par semaine sur la lecture."},
      {min:3,max:4,message:"Bien démarré. Les étapes non cochées sont celles qui maximisent la qualité de l'analyse."},
      {min:0,max:2,message:"Commence par au moins 1 ou 2 de ces étapes — même la première change significativement le résultat."}
    ]
  }
},
"03.02-H":{
  type:"ranking",title:"Ordre d'efficacité des questions à poser",
  instructions:"Classe ces types de questions de la plus efficace (1) à la moins efficace (5) pour analyser un document.",
  content:{
    items:[
      {id:"1",text:"'Quels sont les 5 risques pour moi dans ce document ?'"},
      {id:"2",text:"'Résume ce document.'"},
      {id:"3",text:"'Analyse ce document et dis-moi ce qui est important.'"},
      {id:"4",text:"'Quelles actions concrètes dois-je prendre dans les 7 prochains jours ?'"},
      {id:"5",text:"'Quelles sont les 3 décisions à prendre suite à ce document ?'"}
    ],
    correct_order:["4","1","5","2","3"],
    feedback:"Ordre : questions orientées action (4) > questions orientées risques (1) > questions orientées décisions (5) > résumé (2) > vague (3)."
  }
},
"03.02-I":{
  type:"beforeafter",title:"Mauvaises vs bonnes questions",
  instructions:"Identifie la meilleure question pour chaque document.",
  content:{
    pairs:[
      {before:"'De quoi parle ce rapport ?'",after:"'Quelles sont les 3 conclusions actionnables de ce rapport pour mon département marketing ?'",error_type:"Descriptif → Actionnable",explanation:"'De quoi parle' donne un résumé. 'Conclusions actionnables pour moi' donne ce que tu dois faire."},
      {before:"'Est-ce un bon contrat ?'",after:"'Identifie les clauses qui créent un risque financier ou opérationnel pour mon entreprise. Format : liste avec niveau de risque (élevé/moyen/faible) pour chaque point.'",error_type:"Jugement → Analyse structurée",explanation:"'Bon' est subjectif. La version B donne une analyse avec critères et niveaux de risque."},
      {before:"'Résume ces 50 avis clients.'",after:"'Analyse ces 50 avis. Identifie : 1) les 3 problèmes les plus fréquents avec leur fréquence, 2) les 3 points forts récurrents, 3) les mots ou expressions qui reviennent le plus. Format : tableau synthèse.'",error_type:"Résumé → Analyse structurée",explanation:"Un résumé de 50 avis donne de la prose. L'analyse structurée donne des insights actionnables directement."}
    ],
    feedback:"Règle : chaque question doit te donner quelque chose à faire, pas quelque chose à lire."
  }
},
"03.02-J":{
  type:"qcm",title:"Analyse comparative de deux devis",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu reçois deux devis de prestataires différents pour le même besoin. Comment utilises-tu Claude pour choisir rapidement ?",
    options:[
      {text:"Tu lis les deux attentivement toi-même — Claude ne peut pas comparer.",correct:false,feedback:"Claude peut comparer deux textes et identifier les différences structurelles — c'est l'un de ses points forts."},
      {text:"Tu colles les deux devis + ce prompt : 'Compare ces deux devis. Pour chaque prestataire : ce qui est inclus, ce qui manque, les risques potentiels, la valeur perçue vs le prix. Recommande le plus adapté à [mon besoin précis].'",correct:true,feedback:"Comparaison structurée + recommandation = décision en 2 minutes plutôt que 30."},
      {text:"Tu demandes à Claude lequel est le moins cher.",correct:false,feedback:"Le prix seul ne suffit pas. La valeur, les inclusions et les risques sont tout aussi importants."},
      {text:"Tu demandes à Claude de résumer chaque devis séparément.",correct:false,feedback:"Deux résumés séparés te laissent faire la comparaison toi-même. La version B donne la comparaison directement."}
    ],
    feedback_ok:"Comparaison structurée + critères précis = décision rapide et éclairée.",
    feedback_ko:"La bonne réponse est B. Colle les deux documents + critères de comparaison + demande de recommandation."
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 03 · Leçon 03.03 — Organiser sa semaine et ses projets
// ══════════════════════════════════════════════════════════════════
"03.03-A":{
  type:"truefalse",title:"Organisation avec Claude — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude peut créer un planning hebdomadaire personnalisé en tenant compte de tes contraintes.",answer:true,explanation:"Avec ton contexte (projets, priorités, contraintes horaires), Claude génère un planning adapté en quelques secondes."},
    {text:"Il faut utiliser un outil de gestion de projet pour bénéficier de Claude en organisation.",answer:false,explanation:"Claude peut t'aider à organiser tes projets directement en conversation — aucun outil supplémentaire requis."},
    {text:"Claude peut aider à prioriser une liste de tâches en fonction de leur impact et urgence.",answer:true,explanation:"Tu lui donnes ta liste + tes critères de priorisation → il structure, priorise et suggère un ordre."},
    {text:"Claude peut rappeler automatiquement les deadlines depuis ta conversation.",answer:false,explanation:"Claude n'a pas de fonctionnalités de notifications ou rappels automatiques — il est utile en conversation, pas en outil de planning actif."},
    {text:"Utiliser Claude pour décomposer un projet complexe en tâches concrètes est l'un de ses meilleurs cas d'usage.",answer:true,explanation:"La décomposition de projets en sous-tâches actionnables est parfaitement adaptée aux capacités de raisonnement structuré de Claude."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu as une vision réaliste et précise de ce que Claude peut faire pour ton organisation."},
    {min:3,max:4,message:"Bien. Retiens les limites (pas de notifications) autant que les capacités."},
    {min:0,max:2,message:"Teste Claude sur ta to-do list cette semaine — la différence sera immédiate."}
  ]}
},
"03.03-B":{
  type:"promptlab",title:"Planifie ta semaine avec Claude",
  instructions:"Donne à Claude ta liste de projets et contraintes de la semaine. Colle le planning qu'il génère.",
  content:{
    prompt_to_copy:"Tu es coach en productivité.\nVoici mes projets et tâches pour cette semaine :\n[LISTE TES PROJETS ET TÂCHES]\n\nMes contraintes :\n- Disponible : [tes heures dispo]\n- Deadline critique : [si applicable]\n- Énergie haute le matin / après-midi / etc.\n\nCrée un planning hebdomadaire en bloquant du temps pour chaque projet. Priorise par impact. Format : tableau par jour.",
    field_label:"Colle le planning généré par Claude",
    min_length:80,
    feedback:"Compare ce planning avec ta façon habituelle d'organiser ta semaine. Qu'est-ce qui est différent ? Qu'est-ce que Claude a structuré que tu n'aurais pas fait ?"
  }
},
"03.03-C":{
  type:"qcm",title:"Décomposer un projet complexe",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu as un projet complexe : lancer un nouveau service dans 6 semaines. Tu te sens submergé et ne sais pas par où commencer. Que demandes-tu à Claude ?",
    options:[
      {text:"'Donne-moi des conseils pour lancer un service.'",correct:false,feedback:"Sans contexte sur ton service, ta cible et tes ressources, Claude donne des conseils génériques."},
      {text:"'Tu es chef de projet. Je lance [mon service précis] dans 6 semaines pour [ma cible]. Décompose ce projet en tâches concrètes par semaine. Inclus les dépendances et les risques. Format : tableau semaine par semaine avec responsable et durée estimée.'",correct:true,feedback:"Contexte précis + deadline + format structuré = feuille de route prête à exécuter."},
      {text:"'Quelles sont les étapes pour lancer un service en ligne ?'",correct:false,feedback:"Question générique = réponse générique valable pour n'importe quel service."},
      {text:"'Aide-moi à m'organiser pour mon projet.'",correct:false,feedback:"Aucun contexte sur le projet, la deadline ou les ressources disponibles."}
    ],
    feedback_ok:"Décomposition précise = plan d'action utilisable immédiatement. Plus le projet est décrit précisément, plus la feuille de route est réaliste.",
    feedback_ko:"La bonne réponse est B. Donne à Claude le contexte précis du projet + la deadline + le format attendu."
  }
},
"03.03-D":{
  type:"matching",title:"Problème d'organisation → Solution Claude",
  instructions:"Associe chaque problème d'organisation à la meilleure utilisation de Claude.",
  content:{
    column_a:[
      {id:"1",text:"Tu as 30 tâches non priorisées"},
      {id:"2",text:"Tu as un projet mais pas de plan"},
      {id:"3",text:"Tu as trop de réunions non productives"},
      {id:"4",text:"Tu procrastines sur une tâche importante"}
    ],
    column_b:[
      {id:"A",text:"Lui donner la liste + critères (impact/urgence) → il trie et priorise"},
      {id:"B",text:"Lui décrire le projet → il génère la décomposition en sous-tâches"},
      {id:"C",text:"Lui décrire la tâche → il identifie la première micro-action de 5 minutes"},
      {id:"D",text:"Lui donner l'ordre du jour → il génère une structure de réunion avec timings"}
    ],
    answers:{"1":"A","2":"B","3":"D","4":"C"}
  }
},
"03.03-E":{
  type:"freetext",title:"Mon projet de la semaine décomposé",
  instructions:"Prends ton projet le plus important de cette semaine. Utilise Claude pour le décomposer en tâches concrètes avec deadlines. Colle le résultat et note la différence avec ta façon habituelle de planifier.",
  content:{
    placeholder:"Mon projet : [...]\nRésultat de la décomposition par Claude :\n[...]\nDifférence vs ma façon habituelle de planifier : [...]",
    min_length:120,
    feedback_ok:"Excellent. La décomposition en sous-tâches transforme un projet 'insurmontable' en liste d'actions concrètes. C'est l'une des utilisations les plus impactantes de Claude au quotidien."
  }
},
"03.03-F":{
  type:"qcm",title:"Prioriser une liste de tâches",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu as 20 tâches pour la semaine et ne sais pas par où commencer. Quel prompt donnes-tu à Claude ?",
    options:[
      {text:"'Quel est l'ordre dans lequel faire ces tâches ?'",correct:false,feedback:"Sans critère de priorisation, Claude va choisir lui-même — peut-être pas selon tes vraies priorités."},
      {text:"'Priorise ces 20 tâches selon la matrice impact/urgence. Classe-les en 4 catégories : urgent+important, important non urgent, urgent non important, ni l'un ni l'autre. Format : tableau.'",correct:true,feedback:"Matrice de priorisation + format structuré = to-do list priorisée en 30 secondes."},
      {text:"'Quelles tâches sont importantes ?'",correct:false,feedback:"'Importantes' est subjectif sans critère défini — Claude choisira selon sa propre appréciation."},
      {text:"'Aide-moi à m'organiser cette semaine.'",correct:false,feedback:"Trop vague sans la liste des tâches et les critères de priorisation."}
    ],
    feedback_ok:"Matrice impact/urgence + liste complète + format = to-do structurée prête à exécuter.",
    feedback_ko:"La bonne réponse est B. Donne le critère de priorisation explicite + la liste complète."
  }
},
"03.03-G":{
  type:"checklist",title:"Mon système d'organisation avec Claude",
  instructions:"Coche les pratiques que tu vas intégrer à ton organisation hebdomadaire.",
  content:{
    items:[
      {id:"g1",text:"Chaque lundi, je donne à Claude ma liste de projets pour un planning de la semaine"},
      {id:"g2",text:"Quand je bloque sur un projet, je le décompose en micro-tâches avec Claude"},
      {id:"g3",text:"Avant chaque réunion importante, je prépare la structure avec Claude"},
      {id:"g4",text:"Quand j'ai une longue liste de tâches, je la priorise avec Claude (impact/urgence)"},
      {id:"g5",text:"Je donne à Claude le contexte de mes contraintes (énergie, disponibilité) pour des plannings réalistes"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Système complet. Claude devient ton partenaire d'organisation hebdomadaire."},
      {min:3,max:4,message:"Bon début. Intègre les pratiques restantes progressivement."},
      {min:0,max:2,message:"Commence par une seule pratique cette semaine — le lundi planning est le plus impactant."}
    ]
  }
},
"03.03-H":{
  type:"ranking",title:"Cas d'usage organisation — du plus au moins impactant",
  instructions:"Classe ces utilisations de Claude pour l'organisation du plus impactant (1) au moins impactant (5).",
  content:{
    items:[
      {id:"1",text:"Planifier la semaine chaque lundi matin"},
      {id:"2",text:"Décomposer un projet complexe en sous-tâches"},
      {id:"3",text:"Prioriser une liste de tâches par impact/urgence"},
      {id:"4",text:"Préparer un ordre du jour de réunion"},
      {id:"5",text:"Rédiger une note de synthèse post-réunion"}
    ],
    correct_order:null,
    feedback:"Il n'y a pas de classement universel — tout dépend de ton activité. La plupart des entrepreneurs trouvent que la décomposition de projets et la planification hebdomadaire sont les deux cas d'usage les plus transformateurs."
  }
},
"03.03-I":{
  type:"beforeafter",title:"Organisation faible vs organisation forte avec Claude",
  instructions:"Identifie l'approche la plus efficace dans chaque paire.",
  content:{
    pairs:[
      {before:"'Aide-moi à planifier mon projet de site web.'",after:"'Tu es chef de projet digital. Je dois lancer mon site vitrine en 4 semaines, seul, avec Webflow. Crée un plan semaine par semaine avec les tâches concrètes, la durée estimée pour chacune, et les dépendances. Inclus les phases : contenu, design, SEO, mise en ligne.'",error_type:"Vague → Structuré",explanation:"La version B donne à Claude toutes les contraintes réelles : outil, délai, ressources, phases. Le plan sera réaliste et actionnable."},
      {before:"'Qu'est-ce que je dois faire cette semaine ?'",after:"'Voici mes 15 tâches de la semaine : [liste]. Mes priorités business : [1, 2, 3]. Temps disponible : 25h. Crée un planning avec les tâches les plus impactantes en premier, blocs de 90 min max. Format : tableau par demi-journée.'",error_type:"Question sans données → Données complètes",explanation:"Claude ne peut pas décider 'ce que tu dois faire' sans données. La version B lui donne tout pour planifier efficacement."},
      {before:"'Je dois réunir mon équipe demain. Aide-moi.'",after:"'Tu es facilitateur de réunion. Demain j'ai 45 min avec mon équipe de 3 personnes pour décider [décision X]. Crée un ordre du jour structuré : objectif, 3 points de discussion, temps par point, format de la décision finale. Ton : dynamique et orienté action.'",error_type:"Intention floue → Contexte précis",explanation:"La version B donne le temps, l'équipe, l'objectif et le ton. La réunion sera productive."}
    ],
    feedback:"Règle : plus tu donnes à Claude tes vraies contraintes, plus son aide est réaliste et utilisable."
  }
},
"03.03-J":{
  type:"freetext",title:"Mon rituel hebdomadaire avec Claude",
  instructions:"Décris le rituel d'organisation hebdomadaire que tu vas mettre en place avec Claude. Sois précis : quand, quoi, comment.",
  content:{
    placeholder:"Mon rituel : chaque [jour] à [heure], je donne à Claude :\n1. [quoi]\n2. [quoi]\n\nClaude m'aide à :\n[...]\n\nCe que j'attends comme résultat : [...]",
    min_length:100,
    feedback_ok:"Rituel défini. La régularité fait toute la différence — un rituel hebdomadaire avec Claude peut économiser 3-5 heures par semaine sur la planification et la gestion de projets."
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 04 · Leçon 04.01 — Faire écrire l'IA avec TA voix
// ══════════════════════════════════════════════════════════════════
"04.01-A":{
  type:"truefalse",title:"Voix unique avec Claude — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude peut reproduire ton style d'écriture si tu lui fournis des exemples.",answer:true,explanation:"Les exemples sont le meilleur calibrateur. 3-5 textes que tu as écrits toi-même suffisent pour que Claude capte ton style."},
    {text:"Sans exemples, Claude écrit toujours dans un style neutre et générique.",answer:true,explanation:"Sans exemples ou instructions de style, Claude utilise un style par défaut — professionnel mais générique."},
    {text:"Il est impossible de faire écrire Claude comme un humain spécifique.",answer:false,explanation:"C'est parfaitement possible avec des exemples, des instructions de ton et des itérations."},
    {text:"Donner des exemples de textes que tu NE veux PAS est aussi efficace que donner des exemples positifs.",answer:true,explanation:"Les contre-exemples sont très puissants : 'écris comme ça, pas comme ça' calibre précisément le style."},
    {text:"Un prompt de style n'a besoin d'être écrit qu'une seule fois pour tous tes contenus.",answer:true,explanation:"Une fois ton prompt de style défini, tu le réutilises comme template pour tous tes contenus — c'est un investissement unique."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu maîtrises les bases de la personnalisation de style avec Claude."},
    {min:3,max:4,message:"Bien. Les exemples (positifs ET négatifs) sont la clé."},
    {min:0,max:2,message:"Commence par donner 3 textes que tu as écrits toi-même à Claude — la différence sera immédiate."}
  ]}
},
"04.01-B":{
  type:"promptlab",title:"Crée ton prompt de style personnel",
  instructions:"Copie 3 textes que tu as écrits (emails, posts, descriptions). Donne-les à Claude avec ce prompt. Colle le prompt de style qu'il génère.",
  content:{
    prompt_to_copy:"Analyse ces 3 textes que j'ai écrits et identifie mon style d'écriture unique :\n[TEXTE 1]\n[TEXTE 2]\n[TEXTE 3]\n\nExtrait : \n1. Mon ton habituel (3 adjectifs)\n2. Ma structure préférée\n3. Les expressions que j'utilise souvent\n4. Ce que j'évite (formules, jargon...)\n5. Génère un prompt de style que Claude pourra utiliser pour reproduire mon écriture.",
    field_label:"Colle le prompt de style généré par Claude",
    min_length:60,
    feedback:"Ce prompt de style est ton empreinte digitale pour Claude. Sauvegarde-le dans tes instructions personnalisées — tu n'auras plus jamais à réécrire du contenu 'trop Claude'."
  }
},
"04.01-C":{
  type:"qcm",title:"Comment garder ta voix dans le contenu généré ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu veux que Claude écrive un post LinkedIn qui sonne comme toi et non comme 'une IA'. Quelle est la meilleure approche ?",
    options:[
      {text:"'Rédige un post LinkedIn sur [sujet]. Sois naturel et authentique.'",correct:false,feedback:"'Naturel et authentique' sans référence à TON style = Claude interprétera à sa façon."},
      {text:"'Rédige un post LinkedIn sur [sujet] avec mon style. Voici 2 exemples de mes posts : [ex1] [ex2]. Pas de formules bateau, pas de liste à puces, ton direct comme si j'parlais à un ami.'",correct:true,feedback:"Exemples + interdictions spécifiques + ton défini = post qui ressemble vraiment à toi."},
      {text:"Réécrire tout ce que Claude génère de toute façon.",correct:false,feedback:"Si tu dois tout réécrire, Claude n'est pas un gain de temps. L'objectif est de minimiser la réécriture."},
      {text:"'Rédige un post LinkedIn authentique avec une voix humaine.'",correct:false,feedback:"'Voix humaine' sans définition de QUELLE voix humaine = style générique 'inspirationnel LinkedIn'."}
    ],
    feedback_ok:"Exemples concrets + interdictions spécifiques + ton défini = contenu à ta voix.",
    feedback_ko:"La bonne réponse est B. Les exemples réels + les 'ne pas faire' sont les deux leviers les plus puissants."
  }
},
"04.01-D":{
  type:"matching",title:"Problème de style → Solution",
  instructions:"Associe chaque problème de style à la solution appropriée.",
  content:{
    column_a:[
      {id:"1",text:"Le contenu sonne trop formel"},
      {id:"2",text:"Claude utilise trop de liste à puces"},
      {id:"3",text:"Le texte est trop générique, pourrait être n'importe qui"},
      {id:"4",text:"Le ton est trop 'motivationnel' et superficiel"}
    ],
    column_b:[
      {id:"A",text:"Ajouter : 'Écris en prose fluide, pas de liste à puces.'"},
      {id:"B",text:"Ajouter des exemples de tes textes passés pour ancrer dans ton style"},
      {id:"C",text:"Préciser : 'Ton conversationnel, comme si tu parlais à un ami direct'"},
      {id:"D",text:"Préciser : 'Pas de formules inspirationnelles. Ton pragmatique et honnête, sans enjoliver.'"}
    ],
    answers:{"1":"C","2":"A","3":"B","4":"D"}
  }
},
"04.01-E":{
  type:"freetext",title:"Décrire ta voix en 5 points",
  instructions:"Décris ton style d'écriture en 5 points que tu donneras à Claude comme instructions. Sois spécifique — pas 'professionnel', mais 'direct, sans fioritures, avec des phrases courtes et des exemples concrets'.",
  content:{
    placeholder:"Ma voix en 5 points :\n1. Mon ton : [ex: direct, pas de formule bateau, comme si je parlais à un pair]\n2. Ma structure préférée : [ex: phrase d'accroche courte, développement en 2-3 blocs, conclusion actionnable]\n3. Ce que j'utilise souvent : [ex: questions rhétoriques, chiffres précis, analogies]\n4. Ce que j'évite : [ex: jargon, listes à puces systématiques, 'il est essentiel de noter que']\n5. Mon niveau de langage : [ex: accessible mais précis, pas condescendant]",
    min_length:150,
    feedback_ok:"Voix définie. Ces 5 points deviennent tes instructions de style permanentes dans Claude. Plus tu les affines, moins tu réécriras."
  }
},
"04.01-F":{
  type:"completion",title:"Le prompt de style universel",
  instructions:"Complète ce prompt de style avec tes vraies caractéristiques.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"3 adjectifs pour ton ton",hint:"Ex: direct, chaleureux, pragmatique"},
      {id:"BLANK_2",placeholder:"structure que tu utilises",hint:"Ex: accroche + 3 points + call-to-action"},
      {id:"BLANK_3",placeholder:"ce que tu n'utilises jamais",hint:"Ex: jargon corporate, phrases passives, listes systématiques"},
      {id:"BLANK_4",placeholder:"exemples de phrases-types que tu écris",hint:"Colle 1-2 exemples de tes vraies formulations"},
      {id:"BLANK_5",placeholder:"niveau de vocabulaire",hint:"Ex: courant mais précis, pas de mots techniques sans explication"}
    ],
    feedback_ok:"Prompt de style complet. Colle-le dans tes instructions personnalisées Claude pour l'appliquer à tous tes contenus.",
    feedback_ko:"Les exemples de phrases-types (BLANK_4) sont les plus importants. Sans exemples, le style restera approximatif."
  }
},
"04.01-G":{
  type:"beforeafter",title:"Voix générique vs voix authentique",
  instructions:"Identifie la version qui ressemble à une vraie voix humaine distincte.",
  content:{
    pairs:[
      {before:"Il est indéniable que l'intelligence artificielle représente une opportunité majeure pour les entrepreneurs d'aujourd'hui. En adoptant une approche stratégique, vous pouvez transformer votre business.",after:"L'IA ne va pas remplacer les entrepreneurs. Elle va remplacer les entrepreneurs qui n'utilisent pas l'IA. La différence concrète ? 3 heures par jour.",error_type:"Corporate générique → Voix directe et précise",explanation:"La version B a un point de vue, une structure courte, un chiffre précis. On sent un auteur derrière."},
      {before:"Voici 5 conseils pour améliorer votre productivité :\n1. Fixez des objectifs\n2. Priorisez vos tâches\n3. Éliminez les distractions\n4. Prenez des pauses\n5. Utilisez des outils adaptés",after:"Je pensais que le problème c'était le manque de temps. Faux. Le problème c'était que je refaisais les mêmes tâches 3 fois parce que je n'avais pas de système. La solution ? 20 minutes le dimanche soir avec Claude pour planifier la semaine.",error_type:"Liste générique → Histoire personnelle",explanation:"La version B a une tension narrative (fausse croyance → révélation → solution). On veut lire la suite."},
      {before:"L'importance du networking dans le développement professionnel ne peut être surestimée.",after:"J'ai signé 4 clients en 3 mois uniquement par des connexions LinkedIn. Pas de prospection froide. Juste des conversations réelles.",error_type:"Abstrait → Concret et chiffré",explanation:"Les chiffres concrets et l'expérience personnelle donnent une crédibilité immédiate."}
    ],
    feedback:"La voix authentique : point de vue tranché, chiffres précis, expérience personnelle, phrases courtes. Claude peut écrire comme ça si tu lui donnes les exemples."
  }
},
"04.01-H":{
  type:"qcm",title:"Test de voix — qui a écrit ça ?",
  instructions:"Lequel de ces posts semble le plus authentique et humain ?",
  content:{
    question:"Lequel de ces posts LinkedIn est le moins générique ?",
    options:[
      {text:"\"Le succès ne vient pas du hasard. Il vient du travail, de la persévérance et de la passion. Alors n'abandonnez jamais vos rêves !\"",correct:false,feedback:"Ce post pourrait être écrit par n'importe qui pour n'importe qui. Zéro information distinctive."},
      {text:"\"J'ai raté mon premier lancement de formation. 3 ventes en 2 semaines. J'avais passé 6 mois à créer le contenu. Ce que j'avais mal fait : j'avais créé le produit avant de valider la demande. Ce que je ferais différemment : vendre d'abord, créer ensuite.\"",correct:true,feedback:"Spécifique, honnête, une leçon claire. On sent une personne réelle qui partage une expérience réelle."},
      {text:"\"5 conseils pour réussir en entrepreneuriat. 1. Travaillez dur. 2. Restez focus. 3. Entourez-vous bien. 4. Ne jamais abandonner. 5. Profitez du voyage.\"",correct:false,feedback:"Liste générique sans aucune spécificité. Tout le monde peut écrire ça pour tout le monde."},
      {text:"\"L'entrepreneuriat est un voyage difficile mais enrichissant qui transforme profondément notre vision du monde et nous apprend à nous dépasser.\"",correct:false,feedback:"Abstrait, vague, sans exemple concret ni point de vue distinctif."}
    ],
    feedback_ok:"Le post B est authentique parce qu'il a : une situation spécifique, un chiffre précis, un échec honnête, une leçon actionnable.",
    feedback_ko:"La bonne réponse est B. La spécificité (chiffres, situations réelles, échecs honnêtes) est la marque d'une voix authentique."
  }
},
"04.01-I":{
  type:"ranking",title:"Éléments de voix par ordre d'importance",
  instructions:"Classe ces éléments du plus important (1) au moins important (5) pour qu'un texte sonne comme toi.",
  content:{
    items:[
      {id:"1",text:"Des exemples de textes que tu as écrits toi-même"},
      {id:"2",text:"Spécifier le ton (direct, formel, conversationnel...)"},
      {id:"3",text:"Interdire les formules et structures que tu n'utilises jamais"},
      {id:"4",text:"Choisir le bon rôle pour Claude"},
      {id:"5",text:"Spécifier la longueur"}
    ],
    correct_order:["1","3","2","4","5"],
    feedback:"Ordre : exemples > interdictions > ton > rôle > longueur. Les exemples concrets de ton écriture sont de loin le signal le plus puissant pour calibrer le style."
  }
},
"04.01-J":{
  type:"checklist",title:"Mon prompt de style est-il complet ?",
  instructions:"Vérifie que ton prompt de style contient tous les éléments nécessaires.",
  content:{
    items:[
      {id:"j1",text:"J'ai donné au moins 2 exemples de textes que j'ai écrits moi-même"},
      {id:"j2",text:"J'ai décrit mon ton en 3 adjectifs précis"},
      {id:"j3",text:"J'ai listé au moins 3 choses que je n'écris jamais"},
      {id:"j4",text:"J'ai spécifié ma structure préférée"},
      {id:"j5",text:"J'ai testé ce prompt sur un vrai contenu et ajusté si nécessaire"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Prompt de style complet. Sauvegarde-le dans tes instructions personnalisées Claude."},
      {min:3,max:4,message:"Presque complet. Les exemples (j1) et les interdictions (j3) sont les plus critiques."},
      {min:0,max:2,message:"Le prompt de style est la configuration la plus importante pour le contenu. Prends 15 minutes pour le compléter."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 04 · Leçon 04.02 — Posts, threads, newsletters : les templates
// ══════════════════════════════════════════════════════════════════
"04.02-A":{
  type:"truefalse",title:"Création de contenu en série — Vrai/Faux",
  instructions:"Vrai ou Faux.",
  content:{statements:[
    {text:"Claude peut générer un mois de contenu LinkedIn en moins d'une heure.",answer:true,explanation:"Avec un bon contexte (ta cible, ton style, tes sujets), Claude peut générer 20-30 posts en une session."},
    {text:"Les templates de contenu réduisent l'originalité de ta communication.",answer:false,explanation:"Un template définit la structure — le contenu (tes expériences, tes chiffres, ta voix) reste unique. La structure n'est pas la voix."},
    {text:"Un thread LinkedIn doit avoir une structure différente d'un email newsletter.",answer:true,explanation:"Thread : accroche courte, items courts, rythme haché. Newsletter : contexte, développement, valeur dense. Les formats imposent des structures différentes."},
    {text:"Réutiliser le même contenu sur LinkedIn et dans sa newsletter est une erreur.",answer:false,explanation:"L'adaptation (pas le copier-coller) d'un contenu à différents formats est une bonne pratique. Même idée, format différent."},
    {text:"Un bon hook (accroche) peut être généré par Claude si tu lui donnes le sujet et le public.",answer:true,explanation:"Les hooks sont l'une des forces de Claude — donne-lui le sujet + la cible et il génère 5-10 options d'accroches."}
  ],feedback_thresholds:[
    {min:5,max:5,message:"Tu maîtrises les bases de la production de contenu en série avec Claude."},
    {min:3,max:4,message:"Bien. Les templates et les hooks sont tes deux leviers principaux."},
    {min:0,max:2,message:"Commence par créer tes 3 templates principaux — une heure d'investissement pour des semaines de contenu."}
  ]}
},
"04.02-B":{
  type:"promptlab",title:"Génère 5 hooks pour ton prochain post",
  instructions:"Lance ce prompt avec ton vrai sujet. Colle les 5 hooks générés.",
  content:{
    prompt_to_copy:"Tu es expert en copywriting LinkedIn.\nJe dois écrire un post sur [TON SUJET] pour [TA CIBLE].\nGénère 5 hooks différents (premières lignes d'accroche) en utilisant ces 5 formats :\n1. Contre-intuition : 'Tout le monde pense X — faux.'\n2. Chiffre choc : '[chiffre] [résultat en X temps]'\n3. Question directe\n4. Histoire courte (1-2 phrases)\n5. Déclaration polémique\n\nPour chaque hook : 1 ligne max, ton direct, sans formule bateau.",
    field_label:"Colle les 5 hooks générés par Claude",
    min_length:60,
    feedback:"Ces 5 hooks ont des structures différentes pour le même sujet. Garde le plus fort, itère sur les autres. C'est comme ça que les meilleurs créateurs de contenu travaillent."
  }
},
"04.02-C":{
  type:"matching",title:"Format de contenu → Structure optimale",
  instructions:"Associe chaque format à la structure qui lui correspond.",
  content:{
    column_a:[
      {id:"1",text:"Post LinkedIn (200 mots)"},
      {id:"2",text:"Thread Twitter/X (10 tweets)"},
      {id:"3",text:"Newsletter (600 mots)"},
      {id:"4",text:"Carrousel LinkedIn (5 slides)"}
    ],
    column_b:[
      {id:"A",text:"Hook fort → promesse → 8 items de valeur → conclusion + CTA"},
      {id:"B",text:"Hook + titre fort par slide → 1 idée par slide → slide CTA finale"},
      {id:"C",text:"Accroche → problème → histoire → solution → CTA"},
      {id:"D",text:"Edito personnel → 3 sections de valeur → recommandation + lien"}
    ],
    answers:{"1":"C","2":"A","3":"D","4":"B"}
  }
},
"04.02-D":{
  type:"qcm",title:"Comment créer un mois de contenu en une heure ?",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu veux créer 20 posts LinkedIn pour le mois prochain en moins d'une heure. Quelle est la bonne méthode ?",
    options:[
      {text:"Demander à Claude '20 posts LinkedIn pour ce mois'.",correct:false,feedback:"Sans contexte sur ta cible, tes sujets et ton style, les 20 posts seront génériques et inutilisables."},
      {text:"Créer d'abord un plan éditorial de 20 sujets avec angles + Claude génère les posts un par un.",correct:false,feedback:"Approche trop fragmentée — chaque post en session séparée perd le fil de ton style."},
      {text:"Définir ton style + ta cible + 20 sujets → Claude génère les 20 posts en une seule session avec ton contexte.",correct:true,feedback:"Une seule session avec contexte complet = cohérence de style + rapidité. C'est la méthode batch."},
      {text:"Écrire les 20 posts toi-même et demander à Claude de les améliorer.",correct:false,feedback:"C'est l'inverse : Claude écrit, toi tu ajustes. Inverser donne du temps supplémentaire, pas moins."}
    ],
    feedback_ok:"La méthode batch : contexte complet + tous les sujets en une session = contenu cohérent et rapide.",
    feedback_ko:"La bonne réponse est C. Une session avec contexte complet > 20 sessions sans contexte."
  }
},
"04.02-E":{
  type:"freetext",title:"Mon plan éditorial du mois",
  instructions:"Utilise Claude pour créer ton plan éditorial du mois prochain. Liste les 10 sujets sur lesquels tu veux communiquer avec l'angle et le format pour chacun.",
  content:{
    placeholder:"Sujet 1 : [Thème]\nAngle : [Ex: counter-intuitive, histoire personnelle, conseil pratique...]\nFormat : [Post / Thread / Newsletter / Carrousel]\n\nSujet 2 : ...\n[Continue pour 10 sujets]",
    min_length:150,
    feedback_ok:"Plan éditorial défini. L'étape suivante : donne ce plan à Claude avec ton contexte et ton style pour générer les 10 premiers posts en une session."
  }
},
"04.02-F":{
  type:"completion",title:"Le template de post LinkedIn universel",
  instructions:"Complète ce template avec les éléments de ton prochain post.",
  content:{
    blanks:[
      {id:"BLANK_1",placeholder:"ton hook (première ligne)",hint:"Contre-intuition, chiffre, question ou histoire"},
      {id:"BLANK_2",placeholder:"ton sujet principal en 1 phrase",hint:"Ce dont tu vas parler concrètement"},
      {id:"BLANK_3",placeholder:"ta cible",hint:"Qui lit ce post et pour qui il est écrit"},
      {id:"BLANK_4",placeholder:"la valeur concrète que tu apportes",hint:"Ce que le lecteur va retenir"},
      {id:"BLANK_5",placeholder:"ton CTA",hint:"1 seule action demandée : commentaire, partage, lien..."}
    ],
    feedback_ok:"Template complet. Lance-le dans Claude avec ce contexte + ton style et tu as un post prêt en 30 secondes.",
    feedback_ko:"Le hook (BLANK_1) et la valeur concrète (BLANK_4) sont les deux éléments les plus importants. Sois plus précis."
  }
},
"04.02-G":{
  type:"ranking",title:"Éléments d'un bon post LinkedIn",
  instructions:"Classe ces éléments d'un post LinkedIn du plus important (1) au moins important (5).",
  content:{
    items:[
      {id:"1",text:"L'accroche (hook) — les 2 premières lignes"},
      {id:"2",text:"La valeur concrète apportée"},
      {id:"3",text:"Le CTA (appel à l'action)"},
      {id:"4",text:"La longueur totale du post"},
      {id:"5",text:"Les hashtags"}
    ],
    correct_order:["1","2","3","4","5"],
    feedback:"Ordre : hook > valeur > CTA > longueur > hashtags. Sans hook fort, personne ne lit la valeur. Les hashtags sont le dernier des soucis."
  }
},
"04.02-H":{
  type:"beforeafter",title:"Posts faibles vs posts forts",
  instructions:"Identifie le post le plus engageant dans chaque paire.",
  content:{
    pairs:[
      {before:"Dans cet article, je vais vous expliquer comment utiliser l'IA dans votre entreprise pour améliorer votre productivité et votre efficacité...",after:"J'ai économisé 12 heures par semaine en déléguant mes emails à Claude. Voici exactement comment.",error_type:"Introduction générique → Hook direct et chiffré",explanation:"La version B dit immédiatement ce que le lecteur va apprendre et le quantifie. La version A promet de 'expliquer' — personne ne veut ça."},
      {before:"Penser positivement est important pour votre succès. En adoptant une mindset de croissance, vous pourrez surmonter les obstacles.",after:"J'ai pensé positivement pendant 3 ans. Ça m'a coûté 40k€ en décisions émotionnelles non vérifiées. Ce que j'aurais dû faire à la place :",error_type:"Conseil vague → Tension narrative honnête",explanation:"La version B crée une tension (croyance populaire vs réalité) avec des conséquences chiffrées. On veut connaître la suite."},
      {before:"N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez en savoir plus sur mes services.",after:"Si tu es consultant et que tu veux 2-3 clients supplémentaires en 90 jours sans augmenter tes heures — commente 'MÉTHODE' et je t'envoie mon process.",error_type:"CTA passif → CTA actif et ciblé",explanation:"La version B cible précisément (consultant), promet un résultat (2-3 clients, 90 jours), et facilite l'action (commenter un mot)."}
    ],
    feedback:"3 règles : hook chiffré, tension narrative, CTA actif ciblé. Claude peut appliquer ces règles si tu les lui donnes explicitement."
  }
},
"04.02-I":{
  type:"qcm",title:"Adapter un post LinkedIn en newsletter",
  instructions:"Une seule bonne réponse.",
  content:{
    question:"Tu as un excellent post LinkedIn sur ta méthode de productivité. Tu veux l'adapter en newsletter. Quelle est la meilleure façon d'utiliser Claude ?",
    options:[
      {text:"Copier-coller le post dans la newsletter sans modification.",correct:false,feedback:"Les formats ont des attentes différentes. Un post LinkedIn transposé en newsletter sera trop court et trop haché."},
      {text:"Demander à Claude : 'Adapte ce post LinkedIn en newsletter de 400 mots. Ajoute un contexte introductif, développe les 3 points principaux avec des exemples, et conclus avec une ressource ou un conseil bonus.'",correct:true,feedback:"Tu gardes la même idée mais tu adaptes la profondeur et la structure au format newsletter."},
      {text:"Écrire la newsletter depuis zéro avec un nouveau sujet.",correct:false,feedback:"Si le post LinkedIn a bien marché, capitaliser dessus en newsletter est une stratégie efficace."},
      {text:"Demander à Claude d'allonger le post jusqu'à 400 mots.",correct:false,feedback:"Allonger ≠ adapter. Un post allongé garde la structure haché de LinkedIn — pas adapté pour une newsletter."}
    ],
    feedback_ok:"Adapter = même idée, structure différente, profondeur différente. Claude est excellent pour cette transformation.",
    feedback_ko:"La bonne réponse est B. Donne l'instruction explicite d'adaptation avec la longueur et la structure attendues."
  }
},
"04.02-J":{
  type:"checklist",title:"Ma chaîne de production de contenu",
  instructions:"Coche les éléments que tu vas mettre en place pour produire du contenu régulièrement avec Claude.",
  content:{
    items:[
      {id:"j1",text:"J'ai créé et sauvegardé mon prompt de style personnel"},
      {id:"j2",text:"J'ai défini les 3 templates principaux que j'utilise (post, thread, newsletter)"},
      {id:"j3",text:"J'ai un plan éditorial des 10 prochains sujets"},
      {id:"j4",text:"Je produis du contenu en batch (plusieurs posts en une session) plutôt que un par un"},
      {id:"j5",text:"J'ai testé au moins 1 type de contenu généré par Claude cette semaine"}
    ],
    feedback_thresholds:[
      {min:5,max:5,message:"Chaîne de production complète. Tu as ce qu'il faut pour maintenir une présence régulière sans y passer des heures."},
      {min:3,max:4,message:"Bonne base. Les éléments non cochés sont ceux qui permettent de passer de 'parfois' à 'régulièrement'."},
      {min:0,max:2,message:"Commence par le prompt de style (j1) — c'est la fondation de tout le reste."}
    ]
  }
},

// ══════════════════════════════════════════════════════════════════
// MODULE 05 · Leçon 05.01 — Claude en tuteur personnel
// ══════════════════════════════════════════════════════════════════
"05.01-A":{type:"truefalse",title:"Claude comme tuteur — Vrai/Faux",instructions:"Vrai ou Faux.",content:{statements:[
  {text:"Claude peut adapter ses explications à ton niveau de connaissance si tu le précises.",answer:true,explanation:"'Explique comme si j'avais 0 connaissance en X' vs 'Je maîtrise les bases, explique les subtilités' donnent des réponses radicalement différentes."},
  {text:"Claude ne peut pas tester tes connaissances sur un sujet.",answer:false,explanation:"Claude peut générer des QCM, des exercices, des cas pratiques — et te corriger. C'est l'un de ses meilleurs usages pédagogiques."},
  {text:"Apprendre avec Claude est moins efficace qu'avec un vrai professeur.",answer:false,explanation:"Claude est disponible 24h/24, infiniment patient, s'adapte à ton rythme et peut expliquer 20 fois le même concept différemment."},
  {text:"Demander à Claude de 'créer un plan d'apprentissage' accélère vraiment l'apprentissage.",answer:true,explanation:"Un plan structuré évite de se perdre dans des ressources et donne une progression logique. Claude peut créer ce plan en quelques secondes."},
  {text:"Claude peut identifier tes lacunes si tu lui donnes une évaluation de tes connaissances.",answer:true,explanation:"En faisant un quiz avec Claude puis en analysant tes erreurs, il peut identifier précisément ce que tu ne maîtrises pas encore."}
],feedback_thresholds:[{min:5,max:5,message:"Tu maîtrises les possibilités pédagogiques de Claude."},{min:3,max:4,message:"Bien. Teste Claude comme tuteur sur un sujet que tu veux apprendre cette semaine."},{min:0,max:2,message:"Claude peut vraiment accélérer ton apprentissage — essaie sur un sujet concret."}]}},
"05.01-B":{type:"promptlab",title:"Crée ton plan d'apprentissage personnalisé",instructions:"Utilise Claude pour créer un plan d'apprentissage sur un sujet qui t'intéresse. Colle le plan généré.",content:{
  prompt_to_copy:"Tu es expert pédagogique en [SUJET].\nJe veux apprendre [SUJET] en [DÉLAI] avec [X heures/semaine].\nNiveau actuel : [débutant/intermédiaire/avancé].\nObjectif : [ce que je veux faire avec cette compétence].\n\nCrée un plan d'apprentissage semaine par semaine avec :\n- Les concepts clés par semaine\n- Les ressources recommandées (gratuites en priorité)\n- 1 exercice pratique par semaine\n- Les métriques pour savoir si j'ai progressé",
  field_label:"Colle le plan d'apprentissage généré",min_length:80,
  feedback:"Ce plan est un point de départ, pas une loi. Ajuste-le selon ton rythme réel. L'important : avoir une structure plutôt que d'apprendre au hasard."
}},
"05.01-C":{type:"qcm",title:"Technique de test actif avec Claude",instructions:"Une seule bonne réponse.",content:{
  question:"Tu viens d'apprendre le concept de 'prompting en chaîne' (chain-of-thought). Quelle est la meilleure façon d'utiliser Claude pour tester ta compréhension ?",
  options:[
    {text:"Relire l'explication de Claude une deuxième fois.",correct:false,feedback:"Relire est passif — ton cerveau pense comprendre mais n'a pas été challengé."},
    {text:"Demander à Claude : 'Génère 5 questions sur le concept de prompting en chaîne, du plus simple au plus complexe. Évalue mes réponses.'",correct:true,feedback:"Test actif = tu récupères l'information toi-même. C'est ce qui ancre vraiment la connaissance."},
    {text:"Demander à Claude de résumer le concept en 3 points.",correct:false,feedback:"Le résumé te montre ce que Claude comprend, pas ce que TU comprends."},
    {text:"Passer au concept suivant immédiatement.",correct:false,feedback:"Sans test actif, 70% de ce que tu viens de lire sera oublié dans 24h."}
  ],
  feedback_ok:"Le test actif (répondre toi-même) ancre la connaissance bien mieux que la relecture passive.",
  feedback_ko:"La bonne réponse est B. Générer des questions et y répondre active bien mieux la mémoire que la relecture."
}},
"05.01-D":{type:"matching",title:"Méthode d'apprentissage → Usage avec Claude",instructions:"Associe chaque méthode d'apprentissage à la façon de l'utiliser avec Claude.",content:{
  column_a:[{id:"1",text:"Feynman (expliquer simplement)"},{id:"2",text:"Test actif (se tester)"},{id:"3",text:"Espacement (réviser au bon moment)"},{id:"4",text:"Analogie (relier au connu)"}],
  column_b:[{id:"A",text:"'Génère un QCM de 10 questions sur ce concept. Évalue mes réponses.'"},{id:"B",text:"'Explique ce concept comme si j'avais 12 ans. Si je ne comprends pas ça, je ne comprends rien.'"},{id:"C",text:"'Crée un plan de révision avec J+1, J+7, J+30 pour ancrer ce concept.'"},{id:"D",text:"'Explique ce concept en faisant une analogie avec [quelque chose que je connais bien].'"} ],
  answers:{"1":"B","2":"A","3":"C","4":"D"}
}},
"05.01-E":{type:"freetext",title:"La compétence que tu veux apprendre",instructions:"Décris la compétence ou le sujet que tu veux apprendre dans les 30 prochains jours. Comment vas-tu utiliser Claude pour accélérer cet apprentissage ?",content:{
  placeholder:"Compétence à apprendre : [...]\nPourquoi : [...]\nComment je vais utiliser Claude :\n1. Pour créer le plan d'apprentissage\n2. Pour [méthode spécifique]\n3. Pour [test actif / exercices / etc]\nPremière session prévue : [quand]",
  min_length:100,feedback_ok:"Plan d'apprentissage défini. Lance la première session avec Claude cette semaine — pas cette année, cette semaine."
}},
"05.01-F":{type:"qcm",title:"Comment corriger ses erreurs avec Claude ?",instructions:"Une seule bonne réponse.",content:{
  question:"Tu t'entraînes à un exercice pratique et tu fais une erreur. Quelle est la meilleure façon d'utiliser Claude pour progresser ?",
  options:[
    {text:"Demander la bonne réponse directement.",correct:false,feedback:"La bonne réponse sans compréhension ne change rien à ta prochaine erreur."},
    {text:"'J'ai répondu [MA RÉPONSE] à [CETTE QUESTION]. C'est faux. Explique-moi : 1) pourquoi c'est faux, 2) quel raisonnement j'aurais dû avoir, 3) donne-moi un exercice similaire pour vérifier que j'ai compris.'",correct:true,feedback:"Analyse de l'erreur + raisonnement correct + exercice de vérification = apprentissage complet."},
    {text:"Passer à l'exercice suivant pour ne pas perdre la dynamique.",correct:false,feedback:"Passer sans comprendre l'erreur = répéter la même erreur."},
    {text:"Demander à Claude de refaire l'exercice à ta place.",correct:false,feedback:"Voir Claude faire l'exercice ne t'apprend pas à le faire toi-même."}
  ],
  feedback_ok:"Analyse de l'erreur + raisonnement + exercice de vérification = le cycle d'apprentissage le plus efficace.",
  feedback_ko:"La bonne réponse est B. Comprendre POURQUOI tu t'es trompé vaut plus que la bonne réponse."
}},
"05.01-G":{type:"checklist",title:"Mon rituel d'apprentissage avec Claude",instructions:"Coche les pratiques que tu vas intégrer à ta prochaine session d'apprentissage.",content:{
  items:[{id:"g1",text:"Je commence par donner mon niveau actuel et mon objectif"},{id:"g2",text:"Je demande un plan d'apprentissage structuré avant de commencer"},{id:"g3",text:"Après chaque concept, je me teste avec un QCM généré par Claude"},{id:"g4",text:"Quand je me trompe, j'analyse l'erreur avec Claude avant de continuer"},{id:"g5",text:"Je demande des analogies avec ce que je connais déjà pour ancrer les nouveaux concepts"}],
  feedback_thresholds:[{min:5,max:5,message:"Rituel complet. Tu vas apprendre 3-5x plus vite qu'en self-study classique."},{min:3,max:4,message:"Bien. Les éléments non cochés sont ceux qui font la différence entre comprendre et retenir."},{min:0,max:2,message:"Commence par j1 et j3 — niveau + contexte au début, test actif après chaque concept."}]
}},
"05.01-H":{type:"completion",title:"Mon prompt de tuteur personnalisé",instructions:"Complète ce prompt de tuteur avec tes vraies informations.",content:{
  blanks:[{id:"BLANK_1",placeholder:"sujet à apprendre",hint:"Ex: Excel avancé, SEO, droit des contrats"},{id:"BLANK_2",placeholder:"ton niveau actuel",hint:"Ex: débutant complet / bases comprises / intermédiaire"},{id:"BLANK_3",placeholder:"ton objectif concret",hint:"Ex: être capable de créer des tableaux croisés dynamiques"},{id:"BLANK_4",placeholder:"ton disponibilité",hint:"Ex: 1 heure par jour, 3 fois par semaine"},{id:"BLANK_5",placeholder:"style d'apprentissage",hint:"Ex: exemples concrets, étape par étape, beaucoup de pratique"}],
  feedback_ok:"Prompt de tuteur personnalisé prêt. Commence ta première session avec Claude aujourd'hui.",
  feedback_ko:"L'objectif concret (BLANK_3) et le niveau actuel (BLANK_2) sont les deux éléments qui personnalisent vraiment le tuteur."
}},
"05.01-I":{type:"ranking",title:"Méthodes d'apprentissage par efficacité",instructions:"Classe ces méthodes de la plus efficace (1) à la moins efficace (5) selon la science de l'apprentissage.",content:{
  items:[{id:"1",text:"Relire ses notes plusieurs fois"},{id:"2",text:"Se tester activement sur le sujet"},{id:"3",text:"Expliquer le concept à quelqu'un d'autre (ou à Claude)"},{id:"4",text:"Écouter une conférence ou regarder une vidéo"},{id:"5",text:"Pratiquer avec des exercices progressifs"}],
  correct_order:["2","3","5","4","1"],
  feedback:"Science de l'apprentissage : test actif > enseignement > pratique > écoute > relecture passive. La relecture est l'illusion de compréhension — le test actif est la vraie mesure."
}},
"05.01-J":{type:"beforeafter",title:"Utilisation passive vs active de Claude",instructions:"Identifie l'approche la plus efficace pour apprendre.",content:{
  pairs:[
    {before:"'Explique-moi le marketing de contenu.'",after:"'Explique-moi le marketing de contenu. Après ton explication, génère 5 questions pour vérifier que j'ai compris. Si je réponds correctement à 4/5, donne-moi le concept avancé suivant.'",error_type:"Passif → Actif avec test intégré",explanation:"La version B intègre le test actif dans la session. Tu ne passes au niveau suivant que si tu as compris."},
    {before:"'Donne-moi les bases de la comptabilité.'",after:"'Je suis entrepreneur sans formation comptable. Explique-moi les 5 notions comptables que je dois absolument comprendre pour gérer mes finances sans expert. Utilise des analogies simples et des exemples chiffrés concrets.'",error_type:"Demande générique → Demande contextualisée",explanation:"La version B ancre dans la situation réelle de l'apprenant. Les exemples chiffrés concrets rendent la comptabilité actionnable."},
    {before:"'Je veux apprendre le SEO. Par où commencer ?'",after:"'Je suis consultant freelance avec un site vitrine. Je veux apprendre le SEO pour augmenter mon trafic organique. Crée un plan d'apprentissage de 30 jours : concepts clés, ressources, et 1 action concrète par semaine que je peux tester sur mon site.'",error_type:"Question vague → Plan personnalisé",explanation:"La version B ancre dans le contexte spécifique (site vitrine, consultant) et demande un plan actionnable avec des tests réels."}
  ],
  feedback:"La différence entre apprendre avec Claude et vraiment progresser avec Claude : contextualiser et activer."
}},

// ══════════════════════════════════════════════════════════════════
// MODULE 05 · Leçon 05.02 — Apprendre une compétence 10x plus vite
// ══════════════════════════════════════════════════════════════════
"05.02-A":{type:"truefalse",title:"Apprentissage accéléré — Vrai/Faux",instructions:"Vrai ou Faux.",content:{statements:[
  {text:"La règle des 80/20 s'applique à l'apprentissage : 20% des concepts couvrent 80% des cas d'usage.",answer:true,explanation:"En identifiant les 20% qui comptent le plus, on évite des mois d'apprentissage de détails rarement utiles."},
  {text:"Claude peut identifier les 20% d'un sujet qui couvrent 80% des besoins pratiques.",answer:true,explanation:"En lui donnant ton objectif concret, Claude peut cibler exactement les concepts les plus impactants pour TON usage."},
  {text:"Apprendre rapidement nécessite de comprendre toute la théorie avant de pratiquer.",answer:false,explanation:"La pratique rapide (même imparfaite) accélère l'apprentissage. La théorie pure sans pratique crée une illusion de compétence."},
  {text:"Demander à Claude 'quel est le minimum viable pour atteindre mon objectif' est une bonne stratégie.",answer:true,explanation:"Le MVP de la compétence — la quantité minimale à apprendre pour être opérationnel — est une approche très efficace."},
  {text:"On ne peut pas apprendre une compétence difficile en moins de 3 mois.",answer:false,explanation:"Avec la bonne méthode (Pareto + pratique délibérée + test actif + Claude), certaines compétences sont utilisables opérationnellement en quelques semaines."}
],feedback_thresholds:[{min:5,max:5,message:"Tu maîtrises les principes de l'apprentissage accéléré."},{min:3,max:4,message:"Bien. Le 80/20 et la pratique rapide sont tes deux leviers principaux."},{min:0,max:2,message:"Ces principes peuvent transformer ton rapport à l'apprentissage — ils valent le coup d'être intégrés."}]}},
"05.02-B":{type:"promptlab",title:"Le 80/20 de ta prochaine compétence",instructions:"Applique le principe 80/20 à une compétence que tu veux acquérir. Colle le résultat.",content:{
  prompt_to_copy:"Tu es expert en [COMPÉTENCE].\nJe veux être opérationnel sur [COMPÉTENCE] pour [MON OBJECTIF PRÉCIS] dans [DÉLAI].\nJe n'ai pas le temps de tout apprendre.\n\nIdentifie le 20% des concepts/compétences qui me permettront de couvrir 80% de mes besoins pour cet objectif.\nPour chaque élément du 20% :\n- Ce que c'est en 2 lignes\n- Pourquoi c'est dans le 20%\n- Temps estimé pour le maîtriser\n- L'exercice le plus rapide pour le pratiquer",
  field_label:"Colle le 20% identifié par Claude",min_length:80,
  feedback:"Ce 20% est ta feuille de route. Ignore tout ce qui est hors de cette liste jusqu'à ce que tu sois opérationnel — tu ajouteras la profondeur ensuite."
}},
"05.02-C":{type:"qcm",title:"Pratique délibérée avec Claude",instructions:"Une seule bonne réponse.",content:{
  question:"Tu veux pratiquer délibérément une nouvelle compétence. La pratique délibérée, c'est :",
  options:[
    {text:"Pratiquer le plus longtemps possible chaque jour.",correct:false,feedback:"La durée n'est pas la pratique délibérée. On peut passer 3h en pratique peu efficace."},
    {text:"Répéter les exercices faciles pour maintenir la confiance.",correct:false,feedback:"La pratique délibérée cible les zones de faiblesse, pas les zones de confort."},
    {text:"Pratiquer aux limites de ta zone de confort, analyser chaque erreur, et corriger immédiatement.",correct:true,feedback:"Exactement. La pratique délibérée est inconfortable par définition — tu travailles sur ce que tu ne maîtrises pas encore."},
    {text:"Regarder des experts pratiquer pour s'en inspirer.",correct:false,feedback:"Observer est utile mais passif. La pratique délibérée est active et implique de faire, pas d'observer."}
  ],
  feedback_ok:"Zone de faiblesse + analyse d'erreur + correction immédiate = pratique délibérée. Claude peut structurer cette boucle.",
  feedback_ko:"La bonne réponse est C. Travailler aux limites de sa zone de confort et analyser les erreurs — c'est ça la pratique délibérée."
}},
"05.02-D":{type:"matching",title:"Principe d'apprentissage → Application avec Claude",instructions:"Associe chaque principe à la façon de l'appliquer concrètement avec Claude.",content:{
  column_a:[{id:"1",text:"Pareto (80/20)"},{id:"2",text:"Pratique délibérée"},{id:"3",text:"Courbe d'oubli (Ebbinghaus)"},{id:"4",text:"Interleaving (mélanger les sujets)"}],
  column_b:[{id:"A",text:"'Génère 10 questions qui mélangent les concepts 1, 2 et 3 que j'ai appris cette semaine.'"},{id:"B",text:"'Identifie les 5 concepts qui couvrent 80% de mes besoins pour [objectif].'"},{id:"C",text:"'Génère des exercices sur mon point le plus faible. Si je me trompe, analyse mon erreur immédiatement.'"},{id:"D",text:"'Crée un calendrier de révision : J+1, J+3, J+7, J+30 pour ce concept.'"}],
  answers:{"1":"B","2":"C","3":"D","4":"A"}
}},
"05.02-E":{type:"freetext",title:"Mon sprint d'apprentissage",instructions:"Définis un sprint d'apprentissage de 2 semaines sur une compétence précise. Utilise Claude pour structurer les sessions quotidiennes.",content:{
  placeholder:"Compétence : [...]\nObjectif à 2 semaines : [ce que je serai capable de faire]\nSession type (30 min) :\n- 10 min : [concept ou révision]\n- 15 min : [pratique ou exercices]\n- 5 min : [test actif]\nComment Claude m'aide dans chaque phase : [...]",
  min_length:120,feedback_ok:"Sprint défini. 2 semaines de sessions de 30 minutes ciblées valent plus que 2 mois de lectures aléatoires."
}},
"05.02-F":{type:"qcm",title:"Construire une base solide rapidement",instructions:"Une seule bonne réponse.",content:{
  question:"Tu dois être opérationnel en gestion de projet dans 3 semaines (sans formation préalable). Quelle est la stratégie la plus efficace avec Claude ?",
  options:[
    {text:"Lire un livre complet sur la gestion de projet.",correct:false,feedback:"Un livre complet en 3 semaines ne te rendra pas opérationnel — il te donnera surtout de la théorie."},
    {text:"Regarder une formation en ligne de 10h.",correct:false,feedback:"10h de vidéo sans pratique = compréhension sans compétence."},
    {text:"Demander à Claude le 20% de la gestion de projet pour gérer un projet réel + pratiquer immédiatement sur ton propre projet.",correct:true,feedback:"20% des concepts + pratique immédiate sur un cas réel = opérationnel rapidement."},
    {text:"Demander à Claude de te donner tous les concepts de gestion de projet.",correct:false,feedback:"Tout apprendre prend 10x plus de temps que d'apprendre le 20% qui compte."}
  ],
  feedback_ok:"20% ciblé + pratique immédiate sur un cas réel = opérationnel en 3 semaines.",
  feedback_ko:"La bonne réponse est C. Pareto + pratique immédiate sur un vrai projet = apprentissage accéléré."
}},
"05.02-G":{type:"checklist",title:"Mon arsenal d'apprentissage accéléré",instructions:"Coche les outils que tu vas utiliser dans ta prochaine session d'apprentissage.",content:{
  items:[{id:"g1",text:"J'applique le 80/20 avant de commencer : j'identifie les 20% clés"},{id:"g2",text:"Je pratique immédiatement après avoir appris un concept"},{id:"g3",text:"Je travaille sur mes zones de faiblesse, pas de confort"},{id:"g4",text:"J'utilise le test actif (QCM, exercices) plutôt que la relecture"},{id:"g5",text:"Je programme des révisions espacées (J+1, J+7, J+30)"}],
  feedback_thresholds:[{min:5,max:5,message:"Arsenal complet. Tu apprendras 3-5x plus vite que la moyenne."},{min:3,max:4,message:"Bien. Intègre les éléments manquants progressivement — surtout le 80/20 et la pratique immédiate."},{min:0,max:2,message:"Ces principes sont simples mais très peu de gens les appliquent. Commence par le 80/20 et la pratique immédiate."}]
}},
"05.02-H":{type:"ranking",title:"Stratégies d'apprentissage par efficacité",instructions:"Classe du plus efficace (1) au moins efficace (5).",content:{
  items:[{id:"1",text:"Identifier les 20% qui couvrent 80% et pratiquer immédiatement"},{id:"2",text:"Lire un livre de référence complet"},{id:"3",text:"Regarder des tutoriels YouTube"},{id:"4",text:"Suivre une formation en ligne structurée"},{id:"5",text:"Pratiquer avec des projets réels en se faisant accompagner par Claude"}],
  correct_order:["1","5","4","3","2"],
  feedback:"La pratique sur des projets réels (5) surpasse les formations structurées (4) qui surpassent les tutoriels (3). Lire un livre sans pratiquer est le moins efficace malgré sa popularité."
}},
"05.02-I":{type:"beforeafter",title:"Apprentissage lent vs apprentissage rapide",instructions:"Identifie l'approche d'apprentissage la plus efficace.",content:{
  pairs:[
    {before:"Lire 3 articles sur le copywriting avant de commencer à écrire.",after:"Écrire immédiatement un premier email de vente, le faire analyser par Claude, corriger, recommencer.",error_type:"Théorie d'abord → Pratique d'abord",explanation:"La pratique immédiate avec feedback crée de l'apprentissage réel. Lire 3 articles crée l'illusion de compétence."},
    {before:"Prendre une formation de 20 heures sur Excel.",after:"Demander à Claude les 10 formules Excel qui couvrent 80% des besoins + pratiquer sur tes vrais fichiers.",error_type:"Formation exhaustive → Pareto ciblé",explanation:"20h de formation vs 2h sur le 20% ciblé. Le 20% ciblé te rend opérationnel 10x plus vite."},
    {before:"Écouter un podcast sur le marketing digital en voiture.",after:"Écouter le podcast + noter 3 concepts + tester 1 avec Claude dès le soir.",error_type:"Consommation passive → Consommation active",explanation:"L'écoute sans action = 90% d'oubli en 24h. L'écoute + test immédiat = ancrage réel."}
  ],
  feedback:"La règle : pratique dès que possible, Pareto avant exhaustivité, test actif après chaque apprentissage."
}},
"05.02-J":{type:"qcm",title:"Maintenir la motivation sur le long terme",instructions:"Une seule bonne réponse.",content:{
  question:"Tu commences à apprendre une nouvelle compétence avec Claude mais tu te décourages après 2 semaines car les progrès semblent lents. Quelle est la meilleure stratégie ?",
  options:[
    {text:"Prendre une pause et reprendre quand tu te sens motivé.",correct:false,feedback:"Attendre la motivation = ne jamais vraiment progresser. La motivation suit l'action, pas l'inverse."},
    {text:"Demander à Claude de créer une évaluation de tes compétences de départ + une réévaluation maintenant pour mesurer concrètement les progrès.",correct:true,feedback:"Les progrès sont souvent invisibles sans mesure. Une évaluation concrète rend le progrès visible et relance la motivation."},
    {text:"Augmenter le temps d'apprentissage quotidien pour rattraper.",correct:false,feedback:"Plus de temps sur une mauvaise méthode = encore moins efficace."},
    {text:"Changer de compétence pour trouver quelque chose de plus facile.",correct:false,feedback:"Changer à chaque obstacle = ne jamais rien maîtriser."}
  ],
  feedback_ok:"Mesurer les progrès rend l'apprentissage concret. Claude peut créer des évaluations de départ et des réévaluations pour visualiser la progression.",
  feedback_ko:"La bonne réponse est B. Sans mesure du progrès, on sous-estime toujours ses gains."
}},

// ══════════════════════════════════════════════════════════════════
// MODULE 06 · Leçon 06.01 — Comprendre les automatisations sans code
// ══════════════════════════════════════════════════════════════════
"06.01-A":{type:"truefalse",title:"Automatisations sans code — Vrai/Faux",instructions:"Vrai ou Faux.",content:{statements:[
  {text:"Make.com permet de créer des automatisations entre apps sans écrire une seule ligne de code.",answer:true,explanation:"Make.com est un outil no-code visuel. Tu connectes des blocs par glisser-déposer — aucun code requis."},
  {text:"Claude peut être intégré dans des automatisations Make.com.",answer:true,explanation:"Claude dispose d'une API officielle. Make.com peut appeler cette API pour générer du texte, analyser des données ou prendre des décisions."},
  {text:"Les automatisations sont uniquement utiles pour les grandes entreprises.",answer:false,explanation:"Au contraire — les solopreneurs et PME qui automatisent gagnent un avantage concurrentiel disproportionné avec peu de ressources."},
  {text:"Un 'trigger' est l'événement qui déclenche une automatisation.",answer:true,explanation:"Le trigger (déclencheur) est la première brique : 'quand X se passe' → le reste de l'automatisation se lance."},
  {text:"Automatiser une tâche prend toujours plus de temps que de la faire manuellement.",answer:false,explanation:"Créer l'automatisation prend du temps une fois. Elle s'exécute ensuite automatiquement des centaines de fois."}
],feedback_thresholds:[{min:5,max:5,message:"Tu as les bases solides pour commencer à automatiser."},{min:3,max:4,message:"Bien. Retiens le concept de trigger et le rôle de l'API Claude."},{min:0,max:2,message:"Commence par identifier 1 tâche répétitive dans ton activité — c'est le point de départ."}]}},
"06.01-B":{type:"matching",title:"Terme d'automatisation → Définition",instructions:"Associe chaque terme à sa définition.",content:{
  column_a:[{id:"1",text:"Trigger"},{id:"2",text:"Action"},{id:"3",text:"Scénario"},{id:"4",text:"API"},{id:"5",text:"Webhook"}],
  column_b:[{id:"A",text:"Interface qui permet à deux logiciels de communiquer"},{id:"B",text:"La séquence complète trigger → actions → résultat"},{id:"C",text:"Ce que l'automatisation fait après avoir été déclenchée"},{id:"D",text:"L'événement qui lance l'automatisation"},{id:"E",text:"Un appel en temps réel envoyé par une app quand quelque chose se passe"}],
  answers:{"1":"D","2":"C","3":"B","4":"A","5":"E"}
}},
"06.01-C":{type:"qcm",title:"Quelle tâche automatiser en premier ?",instructions:"Une seule bonne réponse.",content:{
  question:"Tu cherches quelle tâche automatiser en premier dans ton activité. Quel est le meilleur critère de sélection ?",
  options:[
    {text:"La tâche la plus complexe — pour maximiser l'impact.",correct:false,feedback:"Commencer par le plus complexe = risque d'échec et de découragement. Commence par ce qui est répétitif et simple."},
    {text:"La tâche que tu fais le plus souvent + qui est répétitive + qui suit toujours le même processus.",correct:true,feedback:"Haute fréquence + répétitivité + processus stable = candidat idéal pour l'automatisation."},
    {text:"La tâche qui te prend le plus de temps.",correct:false,feedback:"Temps = indicateur, mais une tâche longue et variable est difficile à automatiser. La répétitivité est plus importante."},
    {text:"La tâche qui te déplaît le plus.",correct:false,feedback:"La motivation est un indicateur utile mais pas suffisant — si la tâche n'est pas répétitive et structurée, elle sera difficile à automatiser."}
  ],
  feedback_ok:"Haute fréquence + répétitivité + processus stable = candidat idéal. Ces 3 critères garantissent un ROI rapide.",
  feedback_ko:"La bonne réponse est B. Cherche les tâches que tu refais exactement de la même façon à chaque fois."
}},
"06.01-D":{type:"freetext",title:"Mes 3 tâches à automatiser",instructions:"Identifie les 3 tâches dans ton activité qui remplissent les critères : répétitives, fréquentes, toujours le même processus. Décris chacune avec le processus exact et l'impact estimé si automatisée.",content:{
  placeholder:"Tâche 1 : [nom]\nFréquence : [X fois/semaine]\nProcessus actuel : [étape 1 → étape 2 → étape 3]\nTemps par occurrence : [X min]\nImpact si automatisé : [X heures économisées/mois]\n\nTâche 2 : ...\nTâche 3 : ...",
  min_length:150,feedback_ok:"Analyse de ROI faite. La tâche avec le meilleur ratio (impact/complexité) est ton premier projet d'automatisation."
}},
"06.01-E":{type:"completion",title:"Le schéma d'une automatisation simple",instructions:"Complète ce schéma d'automatisation avec les bons termes.",content:{
  blanks:[{id:"BLANK_1",placeholder:"le déclencheur",hint:"Quand [cet événement] se produit"},{id:"BLANK_2",placeholder:"l'action 1",hint:"Alors [faire ceci]"},{id:"BLANK_3",placeholder:"l'action 2 optionnelle",hint:"Puis [faire cela]"},{id:"BLANK_4",placeholder:"le résultat final",hint:"Pour obtenir [ce résultat]"},{id:"BLANK_5",placeholder:"l'outil d'automatisation",hint:"Make.com, Zapier, n8n..."}],
  feedback_ok:"Schéma d'automatisation compris. La prochaine étape : appliquer ce schéma à ta tâche prioritaire.",
  feedback_ko:"Les 4 éléments clés : trigger → action(s) → résultat → outil. Tous ont leur rôle."
}},
"06.01-F":{type:"qcm",title:"Make.com vs Zapier — lequel choisir ?",instructions:"Une seule bonne réponse.",content:{
  question:"Tu démarres les automatisations sans code. Tu hésites entre Make.com et Zapier. Quel est le principal avantage de Make.com pour débuter ?",
  options:[
    {text:"Make.com a plus de 5000 intégrations disponibles.",correct:false,feedback:"Zapier a aussi plus de 5000 intégrations. Ce n'est pas un différenciateur."},
    {text:"Make.com est 100% gratuit pour toujours.",correct:false,feedback:"Make.com a un plan gratuit mais limité. Ce n'est pas sa principale force."},
    {text:"L'interface visuelle de Make.com est plus intuitive pour créer des scénarios complexes avec des branchements et conditions.",correct:true,feedback:"Make.com excelle sur la visualisation des flux complexes. Pour débuter sur des automatisations avec plusieurs étapes, c'est plus clair."},
    {text:"Make.com est exclusivement dédié aux PME françaises.",correct:false,feedback:"Make.com est un outil international — pas de focus français particulier."}
  ],
  feedback_ok:"L'interface visuelle de Make.com pour les flux complexes est son avantage principal. Zapier est plus simple pour des automatisations basiques.",
  feedback_ko:"La bonne réponse est C. Make.com = interface visuelle pour flux complexes. Zapier = simplicité pour actions basiques."
}},
"06.01-G":{type:"checklist",title:"Suis-je prêt à créer ma première automatisation ?",instructions:"Coche les pré-requis avant de créer ton premier scénario Make.com.",content:{
  items:[{id:"g1",text:"J'ai identifié la tâche répétitive que je veux automatiser"},{id:"g2",text:"J'ai listé toutes les étapes de cette tâche dans l'ordre"},{id:"g3",text:"J'ai identifié les outils impliqués (Gmail, Notion, Slack...)"},{id:"g4",text:"Je sais quel événement déclenche cette tâche (trigger)"},{id:"g5",text:"J'ai créé un compte Make.com (gratuit)"}],
  feedback_thresholds:[{min:5,max:5,message:"Prêt à créer ton premier scénario. Go."},{min:3,max:4,message:"Complète les pré-requis manquants — ils font la différence entre une automatisation qui marche du premier coup et une session de débogage frustrante."},{min:0,max:2,message:"Commence par identifier et documenter la tâche — sans ça, tu vas te perdre dans l'outil."}]
}},
"06.01-H":{type:"ranking",title:"Tâches par facilité d'automatisation",instructions:"Classe ces tâches de la plus facile (1) à la plus difficile (5) à automatiser.",content:{
  items:[{id:"1",text:"Envoyer un email de bienvenue quand quelqu'un s'inscrit à ta liste"},{id:"2",text:"Générer un rapport personnalisé basé sur des données variables"},{id:"3",text:"Poster automatiquement un contenu sur LinkedIn chaque semaine"},{id:"4",text:"Analyser le sentiment client dans tous les avis et créer un résumé mensuel"},{id:"5",text:"Classifier et répondre automatiquement aux emails entrants selon leur type"}],
  correct_order:["1","3","2","5","4"],
  feedback:"Ordre : email de bienvenue (déclencheur simple) > post planifié (séquence simple) > rapport variable (conditions) > classification d'emails (IA requise) > analyse de sentiment (IA + flux complexe)."
}},
"06.01-I":{type:"beforeafter",title:"Processus manuel vs processus automatisé",instructions:"Identifie le processus automatisé dans chaque paire.",content:{
  pairs:[
    {before:"Chaque semaine, tu vas dans Airtable, tu copies les nouvelles inscriptions, tu envoies un email de bienvenue manuellement.",after:"Trigger : nouvelle ligne dans Airtable → Make.com envoie l'email de bienvenue automatiquement → notification Slack pour toi.",error_type:"Manuel répétitif → Automatisation simple",explanation:"Tout ce qui est 'chaque fois que X, je fais Y de la même façon' est un candidat parfait pour l'automatisation."},
    {before:"Tu reçois une demande de devis par email. Tu la lis, notes les infos, crées le devis dans ton logiciel, l'envoies.",after:"Email de demande → Make.com extrait les infos avec Claude → crée le devis dans ton logiciel → t'envoie pour validation avant envoi.",error_type:"Processus multi-étapes manuel → Semi-automatisé",explanation:"Même les processus avec une validation humaine intermédiaire peuvent être largement automatisés pour économiser 80% du temps."},
    {before:"Chaque lundi matin, tu compiles manuellement les métriques de la semaine dans un Google Sheet.",after:"Chaque dimanche soir, Make.com récupère toutes les métriques des différentes apps et les consolide dans le Sheet automatiquement.",error_type:"Compilation manuelle → Consolidation automatique",explanation:"La compilation de données est l'une des tâches les plus faciles à automatiser et l'une des plus chronophages à faire manuellement."}
  ],
  feedback:"La règle d'or : si tu te retrouves à faire la même séquence d'actions à chaque fois, Make.com peut le faire à ta place."
}},
"06.01-J":{type:"qcm",title:"ROI d'une automatisation",instructions:"Une seule bonne réponse.",content:{
  question:"Tu passes 20 minutes par jour à envoyer des emails de suivi. Créer l'automatisation prend 3 heures. En combien de temps l'automatisation est-elle rentabilisée ?",
  options:[
    {text:"1 semaine.",correct:false,feedback:"20 min × 5 jours = 1h40/semaine économisée. 3h ÷ 1h40 = 1.8 semaines environ."},
    {text:"Environ 2 semaines.",correct:true,feedback:"3h d'investissement ÷ 20min/jour = environ 9 jours. En moins de 2 semaines, l'automatisation est remboursée."},
    {text:"3 mois.",correct:false,feedback:"3 mois = beaucoup trop. 20 minutes par jour est une fréquence élevée — le ROI est rapide."},
    {text:"Immédiatement.",correct:false,feedback:"Pas immédiatement — il faut d'abord amortir les 3 heures d'investissement."}
  ],
  feedback_ok:"Environ 2 semaines. Ensuite, chaque jour est du pur gain. Sur 1 an : 20min × 250 jours = 83h économisées pour 3h investies.",
  feedback_ko:"La bonne réponse est B. 3h d'investissement ÷ 20min/jour ≈ 9 jours de rentabilisation."
}},

// ══════════════════════════════════════════════════════════════════
// MODULE 06 · Leçon 06.02 — Créer ton premier scénario Make.com + Claude
// ══════════════════════════════════════════════════════════════════
"06.02-A":{type:"truefalse",title:"Premier scénario — Vrai/Faux",instructions:"Vrai ou Faux.",content:{statements:[
  {text:"Dans Make.com, chaque bloc représente une étape de ton automatisation.",answer:true,explanation:"Chaque module dans Make.com est une étape. Tu les connectes visuellement pour créer le flux."},
  {text:"Pour intégrer Claude dans Make.com, il faut savoir coder.",answer:false,explanation:"Make.com propose un module HTTP/API qui permet d'appeler l'API d'Anthropic sans code. Tu configures les paramètres dans l'interface."},
  {text:"Un scénario Make.com peut être testé avant d'être activé.",answer:true,explanation:"Make.com permet de lancer des tests de chaque module séparément avant d'activer le scénario. Essentiel pour déboguer."},
  {text:"Une fois créé, un scénario Make.com fonctionne sans aucune maintenance.",answer:false,explanation:"Les APIs changent, les formats évoluent, les apps se mettent à jour. Une surveillance périodique est nécessaire."},
  {text:"Le module HTTP de Make.com permet d'appeler n'importe quelle API externe, dont celle d'Anthropic.",answer:true,explanation:"Exactement. Le module HTTP/Webhooks permet d'appeler des APIs qui ne sont pas nativement intégrées dans Make.com."}
],feedback_thresholds:[{min:5,max:5,message:"Tu es prêt à créer ton premier scénario."},{min:3,max:4,message:"Bien. Retiens que le test avant activation et la maintenance périodique sont indispensables."},{min:0,max:2,message:"Revois les bases avant de créer ton scénario — un bon fondement évite beaucoup de frustrations."}]}},
"06.02-B":{type:"promptlab",title:"Design ton scénario sur papier d'abord",instructions:"Avant d'aller dans Make.com, utilise Claude pour designer ton scénario. Colle le design généré.",content:{
  prompt_to_copy:"Tu es expert en automatisation Make.com.\nVoici la tâche répétitive que je veux automatiser :\n[DÉCRIRE LA TÂCHE EN DÉTAIL]\n\nConçois le scénario Make.com :\n1. Trigger précis (quel événement + quelle app)\n2. Actions dans l'ordre (avec l'app utilisée pour chaque)\n3. Les données qui circulent entre les modules\n4. Les points de validation ou d'erreur potentiels\n5. Comment intégrer Claude dans ce scénario si pertinent",
  field_label:"Colle le design du scénario généré par Claude",min_length:80,
  feedback:"Le design sur papier (ou dans Claude) évite les allers-retours coûteux dans Make.com. Il révèle les problèmes de logique avant qu'ils deviennent des bugs."
}},
"06.02-C":{type:"qcm",title:"Où intégrer Claude dans un scénario ?",instructions:"Une seule bonne réponse.",content:{
  question:"Tu crées un scénario qui envoie un email de suivi automatique après chaque réunion. Tu veux intégrer Claude. À quel moment du scénario est-il le plus utile ?",
  options:[
    {text:"Au début — pour déclencher le scénario.",correct:false,feedback:"Le trigger est généralement un événement externe (agenda, formulaire...) pas Claude."},
    {text:"Au milieu — pour générer le contenu de l'email personnalisé en fonction des infos de la réunion.",correct:true,feedback:"Claude génère du texte contextualisé à partir des données de la réunion (participants, sujets, décisions). C'est là qu'il est le plus précieux."},
    {text:"À la fin — pour valider que l'email a été envoyé.",correct:false,feedback:"La validation d'envoi ne nécessite pas Claude — c'est Make.com qui gère ça."},
    {text:"Claude n'a pas sa place dans ce type de scénario.",correct:false,feedback:"Claude est parfait pour personnaliser le contenu des emails à partir de données structurées."}
  ],
  feedback_ok:"Claude = générateur de contenu contextuel. Dans un scénario, il prend les données brutes et produit du texte utile.",
  feedback_ko:"La bonne réponse est B. Claude génère le contenu personnalisé en milieu de scénario, entre la collecte des données et l'envoi."
}},
"06.02-D":{type:"matching",title:"Erreur de scénario → Cause probable",instructions:"Associe chaque erreur courante à sa cause probable.",content:{
  column_a:[{id:"1",text:"Le scénario ne se déclenche pas"},{id:"2",text:"Claude renvoie une erreur 401"},{id:"3",text:"L'email est envoyé mais le contenu est vide"},{id:"4",text:"Le scénario fonctionne en test mais pas en production"}],
  column_b:[{id:"A",text:"Le mapping des données entre les modules est mal configuré"},{id:"B",text:"La clé API Anthropic est invalide ou absente"},{id:"C",text:"Le trigger n'est pas bien configuré ou l'événement ne correspond pas"},{id:"D",text:"Le compte de connexion utilisé en test diffère de celui en production"}],
  answers:{"1":"C","2":"B","3":"A","4":"D"}
}},
"06.02-E":{type:"freetext",title:"Mon premier scénario réel",instructions:"Décris en détail le premier scénario Make.com + Claude que tu vas créer. Trigger précis, actions, données qui circulent, résultat attendu.",content:{
  placeholder:"Mon scénario :\n\nTrigger : Quand [événement précis] dans [app]\nAction 1 : [description + app]\nAction 2 (Claude) : Avec ces données [quoi], Claude génère [quoi]\nAction 3 : [description + app]\nRésultat : [ce qui se passe au final]\n\nTemps économisé estimé par occurrence : [X min]\nFréquence : [X fois/semaine]",
  min_length:120,feedback_ok:"Scénario bien défini. Maintenant, construis-le dans Make.com en testant chaque module avant de l'activer."
}},
"06.02-F":{type:"checklist",title:"Mon scénario est-il prêt à activer ?",instructions:"Coche chaque vérification avant d'activer ton scénario.",content:{
  items:[{id:"f1",text:"J'ai testé chaque module séparément"},{id:"f2",text:"J'ai vérifié que les données passent bien d'un module à l'autre"},{id:"f3",text:"J'ai testé avec des données réelles, pas seulement des données fictives"},{id:"f4",text:"J'ai configuré une notification en cas d'erreur"},{id:"f5",text:"J'ai documenté ce que fait le scénario pour pouvoir le modifier plus tard"}],
  feedback_thresholds:[{min:5,max:5,message:"Scénario prêt. Active-le et surveille les premières exécutions."},{min:3,max:4,message:"Complète les vérifications restantes — elles évitent les mauvaises surprises en production."},{min:0,max:2,message:"Ne pas activer sans avoir testé — un scénario non testé peut créer des données erronées ou des actions indésirables."}]
}},
"06.02-G":{type:"qcm",title:"Personnaliser les emails avec Claude",instructions:"Une seule bonne réponse.",content:{
  question:"Tu envoies un email automatique à chaque nouveau client. Tu veux personnaliser cet email selon son secteur d'activité (renseigné dans ton CRM). Comment configures-tu Claude dans Make.com ?",
  options:[
    {text:"Tu écris un seul email et tu l'envoies à tout le monde — la personnalisation est trop complexe.",correct:false,feedback:"Claude peut gérer des dizaines de variations — c'est justement ce pour quoi il est conçu."},
    {text:"Tu envoies les données du secteur à Claude avec un prompt dynamique : 'Génère un email de bienvenue pour un client en [SECTEUR]. Mentionne 1 problème typique de ce secteur que ton service résout.'",correct:true,feedback:"Le prompt dynamique avec les données du CRM permet à Claude de personnaliser chaque email. C'est le cœur de l'automatisation intelligente."},
    {text:"Tu crées un scénario différent pour chaque secteur.",correct:false,feedback:"Créer un scénario par secteur est inefficace — 1 scénario avec Claude + données dynamiques est bien plus maintenable."},
    {text:"Tu demandes manuellement à Claude de générer chaque email.",correct:false,explanation:"La manuellement détruit l'intérêt de l'automatisation."}
  ],
  feedback_ok:"Prompt dynamique + données CRM = personnalisation à l'échelle sans effort. C'est la magie de Claude dans Make.com.",
  feedback_ko:"La bonne réponse est B. Prompt dynamique avec données variables = emails personnalisés automatiquement."
}},
"06.02-H":{type:"ranking",title:"Étapes de création d'un scénario Make.com",instructions:"Classe ces étapes dans le bon ordre.",content:{
  items:[{id:"1",text:"Créer le compte Make.com et configurer les connexions"},{id:"2",text:"Définir la tâche à automatiser et son processus exact"},{id:"3",text:"Tester chaque module séparément"},{id:"4",text:"Construire le scénario visuellement dans Make.com"},{id:"5",text:"Activer et surveiller les premières exécutions"}],
  correct_order:["2","1","4","3","5"],
  feedback:"Ordre : définir la tâche → créer le compte → construire → tester → activer. Toujours définir avant de construire — sans clarté sur le processus, le scénario sera à refaire."
}},
"06.02-I":{type:"beforeafter",title:"Scénario basique vs scénario intelligent",instructions:"Identifie la version de scénario qui utilise Claude de façon optimale.",content:{
  pairs:[
    {before:"Email entrant → Make.com copie l'email dans Google Sheet.",after:"Email entrant → Make.com envoie à Claude avec prompt : 'Classifie cet email : [question client / demande de devis / réclamation / autre]. Extrait : expéditeur, urgence (1-5), action requise.' → Résultat dans Google Sheet organisé.",error_type:"Collecte brute → Collecte intelligente",explanation:"La version A stocke des données brutes. La version B enrichit les données avec l'intelligence de Claude avant de les stocker."},
    {before:"Nouveau formulaire de contact → Email automatique générique de confirmation.",after:"Nouveau formulaire → Claude génère une réponse personnalisée basée sur les infos du formulaire → Email de confirmation avec contenu adapté à leur demande spécifique.",error_type:"Réponse générique → Réponse personnalisée",explanation:"Le formulaire contient des données riches. Claude peut générer une réponse qui démontre que tu as lu leur demande — même automatiquement."}
  ],
  feedback:"Claude dans une automatisation = données brutes → informations enrichies et actionnables. C'est le saut qualitatif."
}},
"06.02-J":{type:"freetext",title:"Mon plan d'automatisation à 30 jours",instructions:"Définis ton plan d'automatisation pour les 30 prochains jours : 3 scénarios à créer, de la plus simple à la plus complexe.",content:{
  placeholder:"Semaine 1 — Scénario simple :\nTâche : [...]\nEstimation : 1-2h pour créer\nTemps économisé : [...]\n\nSemaine 2-3 — Scénario intermédiaire :\nTâche : [...]\n\nSemaine 4 — Scénario avec Claude :\nTâche : [...]\nComme j'intègre Claude : [...]",
  min_length:120,feedback_ok:"Plan d'automatisation défini. Commence par le scénario simple — le succès du premier crée l'élan pour les suivants."
}},

// ─── MODULE 07 ───────────────────────────────────────────────────────────────
"07.01-A":{type:"truefalse",title:"Comprendre un marché avec Claude",instructions:"Vrai ou faux ? Réponds à chaque affirmation.",content:{
  statements:[
    {text:"Claude peut analyser un marché aussi bien qu'une étude de marché professionnelle à 5 000€.",value:false,explanation:"Claude utilise ses données d'entraînement — pas de données en temps réel. Il est complémentaire, pas remplaçant."},
    {text:"Claude peut identifier les pain points d'une cible à partir de témoignages ou avis clients.",value:true,explanation:"C'est l'un de ses meilleurs usages : analyser des verbatims et extraire des douleurs récurrentes."},
    {text:"Pour analyser un marché, il faut toujours donner à Claude le contexte de ta cible.",value:true,explanation:"Sans contexte (qui, secteur, budget, problème), Claude généralise. Avec contexte, il précise."}
  ]
}},
"07.01-B":{type:"qcm",title:"Le prompt d'analyse marché",instructions:"Lequel de ces prompts va produire l'analyse de marché la plus utile ?",content:{
  options:[
    {text:"'Analyse le marché de la formation en ligne.'",correct:false,feedback:"Trop vague — Claude ne sait pas quelle cible, quel secteur, quel angle."},
    {text:"'Tu es expert en stratégie de marché. Analyse le marché de la formation en ligne pour les indépendants 35-50 ans en France. Identifie : les 3 douleurs principales, les 3 offres concurrentes dominantes, les angles de différenciation non exploités.'",correct:true,feedback:"Rôle + cible précise + structure de sortie = analyse actionnelle. C'est le niveau expert."},
    {text:"'Donne-moi des infos sur le marché de la formation.'",correct:false,feedback:"Sans angle ni structure, tu obtiens une réponse encyclopédique inutile."},
    {text:"'Qu'est-ce que les gens achètent en formation en ligne ?'",correct:false,feedback:"Question trop générique — réponse trop large pour être exploitable."}
  ],
  feedback_ok:"Rôle + cible + structure = analyse actionnelle. C'est la formule pour tout prompt d'analyse.",
  feedback_ko:"La bonne réponse est B. Contexte précis + cible définie + structure demandée = résultat exploitable."
}},
"07.01-C":{type:"completion",title:"Anatomie d'un prompt d'analyse de marché",instructions:"Complète les blancs avec les bons termes.",content:{
  text:"Pour analyser un marché avec Claude, il faut d'abord définir le [BLANK1] de la cible (qui elle est, ses problèmes, son budget), puis demander les [BLANK2] des concurrents, et enfin identifier les [BLANK3] non exploités dans le marché.",
  blanks:[
    {id:"BLANK1",answer:"profil",alternatives:["persona","portrait","profil détaillé"]},
    {id:"BLANK2",answer:"failles",alternatives:["faiblesses","limites","défauts","points faibles"]},
    {id:"BLANK3",answer:"angles",alternatives:["niches","opportunités","gaps","espaces"]}
  ],
  feedback:"Profil cible → failles concurrents → angles libres. C'est le triptyque de toute analyse marché avec Claude."
}},
"07.01-D":{type:"promptlab",title:"Analyse ta cible idéale",instructions:"Écris un prompt pour que Claude te dresse le portrait complet de ta cible idéale (peurs, désirs, vocabulaire, objections).",content:{
  context:"Tu vends une formation ou un service. Tu veux comprendre ta cible avant de créer ton offre.",
  example_prompt:"Tu es expert en psychologie des consommateurs. Ma cible : [DÉCRIS TA CIBLE EN 2 PHRASES]. Dresse son portrait complet : ses 5 peurs profondes liées à [TON DOMAINE], ses 3 désirs cachés, le vocabulaire exact qu'elle utilise pour décrire son problème, et ses 3 principales objections à l'achat.",
  what_to_test:"Adapte le prompt à ta propre activité et observe si Claude parle le langage de ta cible."
}},
"07.01-E":{type:"matching",title:"Erreurs d'analyse vs corrections",instructions:"Associe chaque erreur d'analyse marché à sa correction.",content:{
  pairs:[
    {left:"'Analyse le marché de l'IA'",right:"Ajouter : cible précise + secteur + angle spécifique"},
    {left:"Demander une analyse sans structure de sortie",right:"Spécifier : 'Présente en 3 sections : douleurs / concurrents / opportunités'"},
    {left:"Utiliser Claude pour des données chiffrées récentes",right:"Utiliser pour l'analyse qualitative, pas pour les stats récentes"},
    {left:"Copier-coller l'analyse Claude sans vérification",right:"Croiser avec 3-5 conversations réelles avec ta cible"}
  ],
  feedback:"Claude analyse, toi tu valides. Il structure la réflexion — toi tu la confrontes au réel."
}},
"07.01-F":{type:"checklist",title:"Checklist analyse de marché avec Claude",instructions:"Coche les étapes que tu as déjà réalisées pour analyser ton marché.",content:{
  items:[
    {text:"J'ai défini ma cible avec précision (âge, situation, problème, budget)",points:2},
    {text:"J'ai utilisé Claude pour identifier les douleurs de ma cible",points:2},
    {text:"J'ai analysé les offres concurrentes avec Claude",points:2},
    {text:"J'ai demandé à Claude les angles différenciants non exploités",points:2},
    {text:"J'ai croisé l'analyse Claude avec des retours terrain (interviews, forums, avis)",points:3}
  ],
  feedback_ok:"Analyse marché complète. Tu as les bases pour créer une offre qui touche.",
  feedback_partial:"Bonne base — l'étape de validation terrain est cruciale avant de créer ton offre."
}},
"07.01-G":{type:"ranking",title:"Étapes d'une analyse de marché efficace",instructions:"Classe ces étapes dans le bon ordre logique.",content:{
  items:[{id:"1",text:"Identifier les angles de différenciation non exploités"},{id:"2",text:"Définir précisément ta cible idéale"},{id:"3",text:"Analyser les douleurs et désirs de la cible avec Claude"},{id:"4",text:"Valider l'analyse par des conversations réelles"},{id:"5",text:"Cartographier les offres concurrentes existantes"}],
  correct_order:["2","3","5","1","4"],
  feedback:"Cible → douleurs → concurrents → angles → validation. Toujours finir par du terrain — Claude ne remplace pas la réalité."
}},
"07.01-H":{type:"beforeafter",title:"Prompt basique vs prompt expert",instructions:"Identifie dans chaque paire quelle version est la plus efficace et pourquoi.",content:{
  pairs:[
    {before:"'Qui achète des formations en ligne ?'",after:"'Décris le profil psychologique d'un indépendant de 40 ans en reconversion qui envisage une formation IA. Ses 3 peurs, ses 3 motivations profondes, son budget mental, et les 2 phrases exactes qu'il se dit avant d'acheter.'",error_type:"Question vague → Portrait actionnable",explanation:"La version B donne un portrait exploitable directement en copywriting ou en création d'offre."},
    {before:"'Quels sont les concurrents dans la formation IA ?'",after:"'Liste les 5 types d'offres de formation IA existantes en France pour non-techniciens. Pour chaque type : positionnement prix, promesse principale, public cible, et la faille principale que mon offre pourrait exploiter.'",error_type:"Recensement → Analyse stratégique",explanation:"La version B transforme la liste en avantage concurrentiel."}
  ],
  feedback:"Un bon prompt d'analyse de marché produit du matériel directement réutilisable — pas juste de l'information."
}},
"07.01-I":{type:"qcm",title:"Que faire avec l'analyse de Claude ?",instructions:"Quelle est la meilleure façon d'exploiter une analyse de marché produite par Claude ?",content:{
  options:[
    {text:"La copier-coller directement dans ton site ou ta page de vente.",correct:false,feedback:"Claude ne connaît pas ton marché local, ta concurrence directe, ni les nuances culturelles de ta cible."},
    {text:"L'utiliser comme hypothèses de travail à valider par 5 à 10 conversations avec ta cible.",correct:true,feedback:"L'analyse Claude est un point de départ structuré — la validation terrain la transforme en certitude."},
    {text:"La garder pour toi et ne pas partager les insights.",correct:false,feedback:"Partager les insights avec les bonnes personnes (équipe, mentors) les enrichit."},
    {text:"La comparer avec une étude de marché à 10 000€ avant d'agir.",correct:false,feedback:"Un entrepreneur indépendant n'a pas besoin d'étude à 10 000€ pour démarrer — conversations + Claude suffisent."}
  ],
  feedback_ok:"Claude structure, le terrain valide. C'est la boucle gagnante pour les indépendants qui démarrent.",
  feedback_ko:"La bonne réponse est B. L'analyse Claude = hypothèses structurées → à valider par conversations réelles."
}},
"07.01-J":{type:"freetext",title:"Mon analyse de marché en 5 points",instructions:"Utilise Claude pour analyser ton propre marché et résume ici les 5 insights les plus importants.",content:{
  placeholder:"1. Douleur principale de ma cible : [...]\n2. Désir profond de ma cible : [...]\n3. Principale faille de la concurrence : [...]\n4. Angle différenciant que je pourrais exploiter : [...]\n5. Phrase exacte que ma cible utilise pour décrire son problème : [...]",
  min_length:100,feedback_ok:"Analyse synthétisée. Ces 5 points sont la base de ton positionnement et de ton copywriting."
}},

"07.02-A":{type:"truefalse",title:"Créer une offre irrésistible",instructions:"Vrai ou faux ?",content:{
  statements:[
    {text:"Une offre irrésistible doit promettre un résultat transformationnel, pas juste un contenu.",value:true,explanation:"Les gens n'achètent pas des heures de formation — ils achètent un résultat. 'Devenir autonome avec l'IA en 30 jours' vend mieux que '8 modules de cours.'"},
    {text:"Le prix est le facteur principal d'achat pour une formation.",value:false,explanation:"La confiance, la clarté du résultat et la perception de valeur sont plus déterminants que le prix seul."},
    {text:"Claude peut aider à identifier les bons arguments de vente pour ton offre.",value:true,explanation:"Claude peut simuler des objections, reformuler ta promesse, et identifier les angles émotionnels les plus forts."}
  ]
}},
"07.02-B":{type:"qcm",title:"La promesse de l'offre",instructions:"Parmi ces promesses pour une formation IA, laquelle est la plus irrésistible ?",content:{
  options:[
    {text:"'Formation complète sur l'IA pour entrepreneurs'",correct:false,feedback:"Générique — ne dit pas quel résultat, pour qui, en combien de temps."},
    {text:"'Apprends à utiliser ChatGPT et Claude'",correct:false,feedback:"Orienté contenu, pas résultat — 'apprends à utiliser' n'est pas une transformation."},
    {text:"'Gagne 10h par semaine en 30 jours grâce à l'IA — même si tu n'es pas tech'",correct:true,feedback:"Résultat chiffré + délai + pour qui (non-tech) + obstacle levé. C'est la formule d'une promesse forte."},
    {text:"'Tout sur l'IA pour ton business'",correct:false,feedback:"'Tout sur' = rien de précis. L'offre irrésistible est toujours spécifique."}
  ],
  feedback_ok:"Résultat chiffré + délai + cible + obstacle levé = promesse forte. À appliquer à ton offre.",
  feedback_ko:"La bonne réponse est C. La formule gagnante : résultat concret + délai + pour qui + obstacle levé."
}},
"07.02-C":{type:"completion",title:"La formule de l'offre irrésistible",instructions:"Complète cette formule.",content:{
  text:"Une offre irrésistible aide [BLANK1] à obtenir [BLANK2] en [BLANK3], même si [BLANK4].",
  blanks:[
    {id:"BLANK1",answer:"ta cible précise",alternatives:["ta cible","ton client idéal","les indépendants"]},
    {id:"BLANK2",answer:"un résultat spécifique",alternatives:["un résultat concret","la transformation","le bénéfice"]},
    {id:"BLANK3",answer:"un délai défini",alternatives:["X jours","30 jours","un temps précis"]},
    {id:"BLANK4",answer:"ils ont un obstacle spécifique",alternatives:["sans expérience","même débutant","même sans tech"]}
  ],
  feedback:"[Cible] + [Résultat] + [Délai] + [Obstacle levé] = formule universelle de la promesse forte."
}},
"07.02-D":{type:"promptlab",title:"Générer des variantes de ta promesse",instructions:"Écris un prompt pour demander à Claude de créer 5 versions de ta promesse commerciale.",content:{
  context:"Tu as une offre mais tu ne sais pas comment la formuler de façon irrésistible.",
  example_prompt:"Tu es expert en copywriting d'offres digitales. Voici mon offre : [DÉCRIS TON OFFRE EN 3 PHRASES]. Ma cible : [QUI]. Crée 5 variantes de ma promesse principale en suivant cette formule : '[Cible] obtient [Résultat spécifique] en [Délai], même si [Obstacle].' Varie les angles : résultat financier, gain de temps, confiance, liberté.",
  what_to_test:"Génère les 5 variantes et identifie celle qui résonne le plus avec ce que tu ressens toi-même."
}},
"07.02-E":{type:"matching",title:"Éléments d'une offre vs leur rôle",instructions:"Associe chaque élément de l'offre à son rôle dans la décision d'achat.",content:{
  pairs:[
    {left:"La promesse principale",right:"Donne envie — 'voilà ce que tu vas obtenir'"},
    {left:"La preuve sociale (témoignages)",right:"Réduit le risque — 'ça a marché pour d'autres comme toi'"},
    {left:"La garantie",right:"Lève l'objection finale — 'tu ne risques rien'"},
    {left:"L'urgence ou la rareté",right:"Déclenche l'action — 'agis maintenant'"},
    {left:"Le détail du contenu",right:"Justifie le prix — 'voilà ce que tu reçois'}"}
  ],
  feedback:"Chaque élément joue un rôle précis dans la psychologie de l'achat. Claude peut t'aider à rédiger chacun."
}},
"07.02-F":{type:"checklist",title:"Checklist de l'offre irrésistible",instructions:"Évalue ton offre actuelle (ou celle que tu construis).",content:{
  items:[
    {text:"Ma promesse dit clairement quel résultat le client obtient",points:2},
    {text:"Ma promesse inclut un délai ou une mesure concrète",points:2},
    {text:"Ma promesse lève l'objection principale ('même si...')",points:2},
    {text:"J'ai au moins 1 témoignage ou preuve sociale",points:2},
    {text:"J'ai une garantie (satisfait ou remboursé, ou autre)",points:2},
    {text:"Claude m'a aidé à tester et reformuler ma promesse",points:1}
  ],
  feedback_ok:"Offre bien construite. Lance-la et réajuste selon les retours réels.",
  feedback_partial:"Travaille sur les éléments manquants — une offre incomplète coûte des ventes."
}},
"07.02-G":{type:"ranking",title:"Étapes pour créer une offre avec Claude",instructions:"Classe ces étapes dans le bon ordre.",content:{
  items:[{id:"1",text:"Demander à Claude de simuler 5 objections de ta cible"},{id:"2",text:"Définir le résultat transformationnel que tu offres"},{id:"3",text:"Tester la promesse sur 3 personnes de ta cible"},{id:"4",text:"Générer 5 variantes de ta promesse avec Claude"},{id:"5",text:"Choisir la variante qui résonne le plus et l'affiner"}],
  correct_order:["2","4","1","5","3"],
  feedback:"Résultat → variantes → objections → affinage → test terrain. Claude accélère les étapes 2-4, toi tu valides l'étape 5."
}},
"07.02-H":{type:"qcm",title:"Gérer les objections avec Claude",instructions:"Comment utiliser Claude pour anticiper et répondre aux objections de tes prospects ?",content:{
  options:[
    {text:"Demander à Claude de lister toutes les objections possibles sans contexte.",correct:false,feedback:"Sans contexte de ta cible, Claude généralise — les objections seront génériques."},
    {text:"Demander à Claude de jouer le rôle de ta cible et de soulever ses vraies objections, puis de t'aider à y répondre.",correct:true,feedback:"Claude en mode simulation de ta cible + réponses aux objections = FAQ de vente prête à l'emploi."},
    {text:"Ignorer les objections — une bonne offre n'en a pas.",correct:false,feedback:"Toutes les offres ont des objections. Les anticiper les neutralise avant qu'elles n'arrivent."},
    {text:"Demander à tes amis quelles sont leurs objections.",correct:false,feedback:"Tes amis ne sont peut-être pas ta cible — leurs objections peuvent ne pas être pertinentes."}
  ],
  feedback_ok:"Simulation de cible + objections + réponses = FAQ de vente complète. Un outil puissant.",
  feedback_ko:"La bonne réponse est B. Claude en mode roleplay de ta cible = mine d'or d'objections réelles."
}},
"07.02-I":{type:"beforeafter",title:"Page de vente faible vs page de vente forte",instructions:"Identifie ce qui transforme une page de vente ordinaire en page de vente puissante.",content:{
  pairs:[
    {before:"Titre : 'Formation IA pour entrepreneurs'\nDescription : 8 modules, 30 leçons, accès à vie.",after:"Titre : 'Gagne 10h par semaine grâce à l'IA en 30 jours — même si tu n'as jamais codé'\nDescription : Ce que tu vas pouvoir faire après la formation : [liste de transformations concrètes]",error_type:"Contenu → Transformation",explanation:"La page B vend un résultat vécu, pas un contenu consommé. Le cerveau achète des transformations."},
    {before:"'Si vous n'êtes pas satisfait, contactez-nous.'",after:"'Garantie 30 jours : si tu appliques les exercices et que tu ne gagnes pas 5h/semaine, je te rembourse intégralement — sans questions.'",error_type:"Garantie floue → Garantie précise",explanation:"Une garantie forte et précise supprime le risque perçu — la dernière barrière à l'achat."}
  ],
  feedback:"Chaque mot sur une page de vente doit réduire le risque perçu ou augmenter le désir. Claude peut t'y aider."
}},
"07.02-J":{type:"freetext",title:"Ma promesse d'offre irrésistible",instructions:"Rédige la promesse principale de ton offre en utilisant la formule : [Cible] obtient [Résultat spécifique] en [Délai], même si [Obstacle].",content:{
  placeholder:"Ma promesse :\n[Ta cible] obtient [résultat spécifique et mesurable] en [délai], même si [obstacle principal de ta cible].\n\nPourquoi cette promesse est crédible pour moi :\n[...]",
  min_length:80,feedback_ok:"Promesse rédigée. Maintenant teste-la sur 3 personnes de ta cible et observe leur réaction."
}},

"07.03-A":{type:"truefalse",title:"Déléguer les tâches épuisantes",instructions:"Vrai ou faux ?",content:{
  statements:[
    {text:"Déléguer à Claude une tâche répétitive, c'est perdre le contrôle sur la qualité.",value:false,explanation:"Claude produit un livrable que tu révises et valides. Tu gardes le contrôle final tout en éliminant le travail d'exécution."},
    {text:"Les tâches les plus chronophages ne sont pas toujours les plus rentables.",value:true,explanation:"Répondre aux emails, remplir des tableaux, rédiger des comptes-rendus — souvent des tâches à faible valeur qui consomment beaucoup de temps."},
    {text:"Claude peut gérer les tâches répétitives ET les tâches qui demandent du contexte humain.",value:false,explanation:"Claude est très efficace sur les tâches répétitives structurées. Pour les décisions stratégiques ou relationnelles, l'humain reste nécessaire."}
  ]
}},
"07.03-B":{type:"qcm",title:"Quelles tâches déléguer en priorité",instructions:"Dans cette liste, quelle tâche doit être déléguée à Claude en priorité ?",content:{
  options:[
    {text:"Choisir la direction stratégique de mon entreprise.",correct:false,feedback:"La direction stratégique nécessite jugement humain, valeurs, et connaissance terrain que Claude n'a pas."},
    {text:"Rédiger la 1ère version de mes emails clients récurrents (relances, confirmations, suivis).",correct:true,feedback:"Tâche répétitive, structurée, à faible valeur ajoutée humaine = délégation immédiate à Claude."},
    {text:"Gérer une relation client difficile nécessitant de l'empathie.",correct:false,feedback:"Les relations délicates demandent nuance et présence humaine. Claude peut préparer, mais pas remplacer."},
    {text:"Décider qui recruter dans mon équipe.",correct:false,feedback:"La décision de recrutement est stratégique et relationnelle — Claude peut préparer les questions d'entretien, pas choisir."}
  ],
  feedback_ok:"Répétitif + structuré + faible valeur ajoutée humaine = tâche à déléguer immédiatement.",
  feedback_ko:"La bonne réponse est B. Déléguer à Claude = tâches répétitives et structurées, pas les décisions humaines."
}},
"07.03-C":{type:"matching",title:"Tâches vs niveau de délégation",instructions:"Associe chaque tâche à son niveau de délégation optimal avec Claude.",content:{
  pairs:[
    {left:"Rédiger un compte-rendu de réunion",right:"Délégation totale — Claude rédige sur ta base de notes"},
    {left:"Répondre à une plainte client grave",right:"Délégation partielle — Claude prépare un brouillon, toi tu valides et personnalises"},
    {left:"Créer la vision 3 ans de ton entreprise",right:"Pas de délégation — Claude peut brainstormer, mais la décision est humaine"},
    {left:"Générer 20 idées de contenus pour les réseaux",right:"Délégation totale — tâche créative répétitive parfaite pour Claude"}
  ],
  feedback:"Comprendre quoi déléguer totalement, partiellement, ou pas du tout = maîtrise de Claude."
}},
"07.03-D":{type:"promptlab",title:"Déléguer un email récurrent",instructions:"Écris un prompt pour que Claude gère tes emails de relance client automatiquement.",content:{
  context:"Tu dois envoyer des relances clients tous les jours — c'est répétitif et épuisant.",
  example_prompt:"Tu es mon assistant commercial. Voici le contexte client : [NOM, SECTEUR, CE QU'ILS ONT DEMANDÉ, DEPUIS QUAND ILS N'ONT PAS RÉPONDU]. Rédige un email de relance qui : est chaleureux mais professionnel, rappelle la valeur de mon offre sans être insistant, propose un créneau d'appel de 20 min, et se termine par un appel à l'action clair. Ton seulement, 5 lignes max.",
  what_to_test:"Applique ce prompt à une vraie relance que tu dois faire aujourd'hui."
}},
"07.03-E":{type:"checklist",title:"Audit des tâches à déléguer",instructions:"Identifie tes tâches candidates à la délégation Claude.",content:{
  items:[
    {text:"J'ai identifié mes 3 tâches les plus répétitives cette semaine",points:2},
    {text:"J'ai évalué le temps exact passé sur ces tâches",points:1},
    {text:"J'ai testé Claude sur au moins 1 de ces tâches",points:3},
    {text:"J'ai créé un template de prompt réutilisable pour ma tâche déléguée",points:3},
    {text:"J'ai calculé le temps économisé sur 1 mois si je délègue systématiquement",points:2}
  ],
  feedback_ok:"Audit complet. Maintenant systématise — le template de prompt est ta vraie valeur.",
  feedback_partial:"Continue l'audit — le calcul du temps économisé sur 1 mois est souvent le déclic pour agir."
}},
"07.03-F":{type:"ranking",title:"Priorités de délégation",instructions:"Classe ces tâches de la plus prioritaire à déléguer à la moins prioritaire.",content:{
  items:[{id:"1",text:"Écrire mes offres commerciales (devis personnalisés)"},{id:"2",text:"Rédiger mes posts LinkedIn hebdomadaires"},{id:"3",text:"Répondre aux emails de questions FAQ"},{id:"4",text:"Prendre les décisions d'investissement"},{id:"5",text:"Générer des rapports hebdomadaires depuis mes données"}],
  correct_order:["3","5","2","1","4"],
  feedback:"FAQ + rapports + posts = délégation immédiate. Devis = délégation partielle. Investissement = humain uniquement."
}},
"07.03-G":{type:"qcm",title:"Créer un système de délégation durable",instructions:"Quelle approche crée le système de délégation le plus durable avec Claude ?",content:{
  options:[
    {text:"Écrire un nouveau prompt à chaque fois pour chaque tâche.",correct:false,feedback:"Sans templates, tu réinventes la roue à chaque fois — pas scalable."},
    {text:"Créer une bibliothèque de prompts templates par type de tâche, à réutiliser et améliorer.",correct:true,feedback:"Une bibliothèque de prompts est ton capital productivité — elle s'améliore à chaque usage."},
    {text:"Faire confiance à Claude pour deviner ce que tu veux sans prompt.",correct:false,feedback:"Claude a besoin de contexte — sans prompt structuré, la qualité est aléatoire."},
    {text:"Déléguer tout à Claude sans relire.",correct:false,feedback:"Claude produit des ébauches — la relecture maintient la qualité et l'authenticité de ta voix."}
  ],
  feedback_ok:"Bibliothèque de prompts = ton actif productivité le plus précieux. Construis-la dès maintenant.",
  feedback_ko:"La bonne réponse est B. Templates réutilisables + amélioration continue = système durable."
}},
"07.03-H":{type:"completion",title:"Formule de délégation efficace",instructions:"Complète cette formule pour créer un prompt de délégation efficace.",content:{
  text:"Pour déléguer une tâche à Claude, commence par lui donner le [BLANK1] (qui tu es, dans quel contexte), puis décris la [BLANK2] précisément, puis précise le [BLANK3] attendu (format, longueur, ton), et enfin donne-lui les [BLANK4] s'il doit choisir.",
  blanks:[
    {id:"BLANK1",answer:"contexte",alternatives:["contexte complet","background","situation"]},
    {id:"BLANK2",answer:"tâche",alternatives:["mission","demande","travail"]},
    {id:"BLANK3",answer:"livrable",alternatives:["format de sortie","résultat","output"]},
    {id:"BLANK4",answer:"contraintes",alternatives:["limites","critères","règles"]}
  ],
  feedback:"Contexte + tâche + livrable + contraintes = structure universelle pour tout prompt de délégation."
}},
"07.03-I":{type:"beforeafter",title:"Délégation inefficace vs efficace",instructions:"Identifie ce qui rend une délégation à Claude efficace.",content:{
  pairs:[
    {before:"'Rédige un email pour mon client.'",after:"'Tu es mon assistant commercial. Client : Entreprise Martin, directeur commercial, intéressé par notre offre de formation mais pas répondu depuis 10 jours. Rédige un email de relance chaleureux (5 lignes max), qui rappelle la valeur principale de l'offre et propose un appel de 15 min cette semaine.'",error_type:"Vague → Structuré",explanation:"La version B donne tout le contexte nécessaire pour un email utilisable sans modification."},
    {before:"'Écris mon rapport de la semaine.'",after:"'Voici mes notes brutes de la semaine : [NOTES]. Transforme-les en rapport structuré de 200 mots max : réalisations, blocages, prochaine étape prioritaire. Ton professionnel mais direct.'",error_type:"Sans matière → Avec matière brute",explanation:"Claude transforme ta matière brute en livrable — tu lui donnes l'input, il produit l'output."}
  ],
  feedback:"Plus tu donnes de contexte et de matière brute, plus le livrable est directement utilisable."
}},
"07.03-J":{type:"freetext",title:"Ma liste de délégation Claude",instructions:"Identifie tes 3 tâches les plus épuisantes et crée un template de prompt pour chacune.",content:{
  placeholder:"Tâche 1 : [Nom de la tâche]\nTemps perdu/semaine : [...]\nTemplate de prompt :\n[Ton prompt template]\n\nTâche 2 : [Nom de la tâche]\nTemps perdu/semaine : [...]\nTemplate de prompt :\n[Ton prompt template]\n\nTâche 3 : [Nom de la tâche]\nTemps perdu/semaine : [...]\nTemplate de prompt :\n[Ton prompt template]",
  min_length:150,feedback_ok:"3 templates créés. Tu viens de construire le début de ta bibliothèque de prompts — la vraie valeur durable."
}},
// ─── MODULE 08 (PREMIUM) ─────────────────────────────────────────────────────
"08.01-A":{type:"truefalse",title:"Méta-prompts et system prompts",instructions:"Vrai ou faux ?",content:{
  statements:[
    {text:"Un system prompt est une instruction permanente qui cadre le comportement de Claude sur toute la conversation.",value:true,explanation:"Le system prompt définit le rôle, le ton, les contraintes et le contexte de Claude avant même la 1ère question."},
    {text:"Un méta-prompt est un prompt qui explique à Claude comment écrire d'autres prompts.",value:true,explanation:"Un méta-prompt transforme Claude en expert prompt engineer — il peut générer des prompts optimisés pour tes cas d'usage."},
    {text:"Les system prompts sont uniquement accessibles via l'API Claude.",value:false,explanation:"Sur Claude.ai, le Project Instructions remplit ce rôle. L'API permet plus de contrôle, mais le principe est accessible à tous."}
  ]
}},
"08.01-B":{type:"qcm",title:"Écrire un system prompt efficace",instructions:"Lequel de ces system prompts est le plus efficace pour un assistant commercial ?",content:{
  options:[
    {text:"'Tu es un assistant.'",correct:false,feedback:"Trop vague — Claude ne sait pas quel type d'assistant, pour qui, avec quel objectif."},
    {text:"'Tu es un expert en vente B2B SaaS avec 10 ans d'expérience. Tu travailles pour [ENTREPRISE]. Tu réponds en français, de façon concise. Ton objectif : aider à qualifier les prospects, rédiger des emails de vente, et préparer des arguments. Tu ne spécules jamais sur les prix sans données.'",correct:true,feedback:"Rôle précis + contexte + langue + objectif + contrainte = system prompt complet et actionnable."},
    {text:"'Sois professionnel et utile dans tes réponses.'",correct:false,feedback:"Trop générique — 'professionnel' peut signifier beaucoup de choses selon les contextes."},
    {text:"'Réponds toujours en bullet points courts.'",correct:false,feedback:"Contrainte de format utile, mais insuffisante seule — pas de rôle, pas d'objectif."}
  ],
  feedback_ok:"Rôle + contexte + langue + objectif + contraintes = system prompt professionnel.",
  feedback_ko:"La bonne réponse est B. Un system prompt efficace définit qui Claude est, pas juste comment il répond."
}},
"08.01-C":{type:"promptlab",title:"Créer ton system prompt métier",instructions:"Écris un system prompt pour un Claude spécialisé dans ton activité ou domaine.",content:{
  context:"Tu veux configurer Claude une fois pour qu'il soit toujours calibré sur ton métier.",
  example_prompt:"Rédige un system prompt complet pour un assistant Claude spécialisé dans [TON MÉTIER]. Le system prompt doit définir : le rôle et l'expertise, le public cible, le ton de communication, les objectifs principaux, les contraintes (ce qu'il ne doit jamais faire), et le format de réponse préféré.",
  what_to_test:"Teste le system prompt en copiant dans Project Instructions sur Claude.ai et vois si le comportement change."
}},
"08.01-D":{type:"matching",title:"Éléments d'un system prompt",instructions:"Associe chaque élément à sa fonction dans un system prompt.",content:{
  pairs:[
    {left:"'Tu es expert en copywriting B2B avec 15 ans d'expérience'",right:"Définit l'expertise et le niveau de réponse attendu"},
    {left:"'Tu réponds toujours en français, en moins de 200 mots'",right:"Contrôle le format et la langue des réponses"},
    {left:"'Ne donne jamais de conseils légaux ou médicaux'",right:"Définit les limites et contraintes de comportement"},
    {left:"'Ton objectif : aider à générer des leads qualifiés'",right:"Aligne Claude sur l'objectif business spécifique"}
  ],
  feedback:"Un system prompt complet adresse : qui Claude est, comment il répond, ce qu'il ne fait pas, et pourquoi."
}},
"08.01-E":{type:"completion",title:"Structure du méta-prompt",instructions:"Complète la structure d'un méta-prompt efficace.",content:{
  text:"Un méta-prompt demande à Claude de créer un [BLANK1] pour un cas d'usage précis. Il précise le [BLANK2] de l'assistant final, son [BLANK3] cible, et les [BLANK4] à ne jamais franchir.",
  blanks:[
    {id:"BLANK1",answer:"prompt ou system prompt",alternatives:["prompt","system prompt","template de prompt"]},
    {id:"BLANK2",answer:"rôle",alternatives:["profil","expertise","identité"]},
    {id:"BLANK3",answer:"public",alternatives:["audience","cible","utilisateur"]},
    {id:"BLANK4",answer:"limites",alternatives:["contraintes","lignes rouges","interdits"]}
  ],
  feedback:"Méta-prompt = demander à Claude d'être le prompt engineer à ta place. Redoutablement efficace."
}},
"08.01-F":{type:"qcm",title:"Utiliser les variables dans les prompts",instructions:"Comment rendre un prompt réutilisable grâce aux variables ?",content:{
  options:[
    {text:"En réécrivant le prompt entièrement à chaque usage.",correct:false,feedback:"Réécrire = perte de temps. Les templates avec variables sont là pour ça."},
    {text:"En utilisant des placeholders comme [NOM_CLIENT], [SECTEUR], [PROBLÈME] qu'on remplace à chaque usage.",correct:true,feedback:"Templates avec variables = prompts industrialisables. Un template bien conçu sert des centaines de fois."},
    {text:"En demandant à Claude de deviner les variables manquantes.",correct:false,feedback:"Claude peut demander les infos manquantes, mais un template structuré est plus efficace à l'échelle."},
    {text:"En créant un nouveau fichier prompt pour chaque client.",correct:false,feedback:"Trop de fichiers = complexité inutile. 1 template + variables = solution scalable."}
  ],
  feedback_ok:"Templates + variables = infrastructure de prompts industrialisable. C'est la base du prompt engineering avancé.",
  feedback_ko:"La bonne réponse est B. Variables = placeholders remplaçables = prompts réutilisables à l'infini."
}},
"08.01-G":{type:"beforeafter",title:"Prompt basique vs méta-prompt",instructions:"Vois comment le méta-prompt transforme l'approche.",content:{
  pairs:[
    {before:"'Rédige un email de vente pour mon produit.'",after:"'Tu es expert en prompt engineering. Crée un template de prompt pour générer des emails de vente personnalisés. Le template doit utiliser ces variables : [NOM_PROSPECT], [SECTEUR], [PROBLÈME_PRINCIPAL], [BÉNÉFICE_CLÉ]. Il doit produire un email de 5 lignes max, chaud mais professionnel, avec un CTA clair.'",error_type:"Usage ponctuel → Template industrialisable",explanation:"La version B crée un actif réutilisable — le méta-prompt génère l'outil, pas juste la réponse."},
    {before:"Configurer Claude manuellement à chaque conversation.",after:"System prompt enregistré dans Project Instructions : Claude se souvient de son rôle, ton, contraintes à chaque session.",error_type:"Reconfiguration répétée → Configuration permanente",explanation:"Le system prompt dans Project Instructions = Claude toujours calibré sans répéter les instructions."}
  ],
  feedback:"Méta-prompts + system prompts = passer d'utilisateur à architecte de son propre assistant IA."
}},
"08.01-H":{type:"checklist",title:"Checklist prompt engineering avancé",instructions:"Évalue ton niveau actuel en prompt engineering.",content:{
  items:[
    {text:"J'ai créé au moins 1 system prompt pour mon activité",points:2},
    {text:"J'utilise des templates avec variables pour mes prompts récurrents",points:2},
    {text:"J'ai utilisé un méta-prompt pour créer des prompts complexes",points:3},
    {text:"J'ai une bibliothèque organisée de mes meilleurs prompts",points:2},
    {text:"Je teste et itère mes prompts systématiquement",points:2}
  ],
  feedback_ok:"Niveau prompt engineering avancé. Tu construis une infrastructure IA, pas juste des usages ponctuels.",
  feedback_partial:"Continue à construire ta bibliothèque — chaque prompt sauvegardé est du capital productivité."
}},
"08.01-I":{type:"ranking",title:"Hiérarchie des prompts",instructions:"Classe ces types de prompts du plus fondamental au plus spécifique.",content:{
  items:[{id:"1",text:"Prompt ponctuel pour une tâche unique"},{id:"2",text:"Méta-prompt pour créer d'autres prompts"},{id:"3",text:"System prompt définissant le rôle global de Claude"},{id:"4",text:"Template de prompt avec variables pour usage récurrent"},{id:"5",text:"Prompt de chaîne (chain of thought) pour raisonnement complexe"}],
  correct_order:["3","2","4","5","1"],
  feedback:"System → Méta → Template → Chain → Ponctuel. Du permanent au spécifique — c'est l'architecture d'un système de prompts."
}},
"08.01-J":{type:"freetext",title:"Mon system prompt métier",instructions:"Rédige le system prompt idéal pour Claude spécialisé dans ton activité ou domaine.",content:{
  placeholder:"[System Prompt — MON ASSISTANT IA]\n\nRôle : Tu es [EXPERTISE] spécialisé en [DOMAINE].\nContexte : Je suis [QUI TU ES], mon activité est [ACTIVITÉ].\nObjectif : Tu m'aides à [OBJECTIFS PRINCIPAUX].\nTon : [TON SOUHAITÉ]\nFormat préféré : [FORMAT]\nContraintes : Tu ne [LIMITES].",
  min_length:100,feedback_ok:"System prompt créé. Configure-le dans Project Instructions sur Claude.ai et teste-le sur tes cas d'usage du quotidien."
}},

"08.02-A":{type:"truefalse",title:"Construire des agents IA",instructions:"Vrai ou faux ?",content:{
  statements:[
    {text:"Un agent IA peut accomplir des tâches de façon autonome sans intervention humaine à chaque étape.",value:true,explanation:"Un agent reçoit un objectif, planifie les étapes, les exécute, et s'adapte — sans supervision humaine à chaque micro-étape."},
    {text:"Pour construire un agent IA, il faut obligatoirement savoir coder.",value:false,explanation:"Des outils no-code comme Make.com, Zapier, ou n8n permettent de créer des agents IA sans code, en combinant Claude avec d'autres services."},
    {text:"Un agent IA est simplement un chatbot plus sophistiqué.",value:false,explanation:"Un chatbot réagit. Un agent agit. L'agent peut lire des données, prendre des décisions, exécuter des tâches, et produire des livrables de façon autonome."}
  ]
}},
"08.02-B":{type:"qcm",title:"Architecture d'un agent simple",instructions:"Quelle est la structure minimale d'un agent IA fonctionnel ?",content:{
  options:[
    {text:"Un prompt + Claude = agent IA complet.",correct:false,feedback:"Un prompt seul = assistant, pas un agent. Un agent a besoin d'un objectif, d'outils, et d'une boucle d'exécution."},
    {text:"Objectif → LLM (Claude) → Outils (actions) → Résultat, avec boucle de feedback si l'objectif n'est pas atteint.",correct:true,feedback:"C'est l'architecture ReAct : Reason + Act. Claude raisonne, agit avec des outils, observe le résultat, recommence si nécessaire."},
    {text:"Claude + base de données + interface graphique.",correct:false,feedback:"Ces éléments peuvent faire partie d'un agent, mais ils ne définissent pas l'architecture fondamentale."},
    {text:"Plusieurs LLMs qui se parlent entre eux.",correct:false,feedback:"Multi-agents = niveau avancé. Un agent simple commence avec 1 LLM + outils."}
  ],
  feedback_ok:"Objectif → Raisonnement → Action → Observation → Boucle. C'est la boucle fondamentale de tout agent.",
  feedback_ko:"La bonne réponse est B. Architecture ReAct : Reason + Act + Observe — le cœur de tout agent IA."
}},
"08.02-C":{type:"matching",title:"Types d'agents vs cas d'usage",instructions:"Associe chaque type d'agent à son cas d'usage optimal.",content:{
  pairs:[
    {left:"Agent de recherche",right:"Collecte et synthétise des informations de plusieurs sources automatiquement"},
    {left:"Agent de création de contenu",right:"Génère des articles, posts, emails selon un calendrier ou déclencheur"},
    {left:"Agent de classification",right:"Trie, étiquette et route des données entrantes (emails, tickets, leads)"},
    {left:"Agent de reporting",right:"Compile des données, génère des rapports hebdomadaires automatiquement"}
  ],
  feedback:"Chaque agent spécialisé devient un membre virtuel de ton équipe — disponible 24/7, sans formation."
}},
"08.02-D":{type:"promptlab",title:"Concevoir un agent en langage naturel",instructions:"Décris un agent IA que tu aimerais créer pour ton activité.",content:{
  context:"Avant de construire un agent, il faut pouvoir le décrire précisément en langage naturel.",
  example_prompt:"Aide-moi à concevoir un agent IA pour mon activité. Voici la tâche que je veux automatiser : [DÉCRIS LA TÂCHE]. Propose : 1) L'objectif précis de l'agent, 2) Les données d'entrée dont il a besoin, 3) Les étapes de traitement, 4) Le livrable final, 5) Les outils nécessaires (Make.com, Google Sheets, Gmail, etc.).",
  what_to_test:"Demande à Claude de concevoir l'agent, puis identifie si tu peux le construire avec Make.com."
}},
"08.02-E":{type:"completion",title:"Vocabulaire des agents IA",instructions:"Complète les définitions clés des agents IA.",content:{
  text:"Un agent IA utilise un [BLANK1] (Claude, GPT) pour raisonner, des [BLANK2] pour agir (APIs, webhooks), et une [BLANK3] pour améliorer ses résultats. Dans Make.com, chaque module représente un [BLANK4] de l'agent.",
  blanks:[
    {id:"BLANK1",answer:"LLM",alternatives:["modèle de langage","modèle IA","cerveau"]},
    {id:"BLANK2",answer:"outils",alternatives:["tools","actions","connecteurs"]},
    {id:"BLANK3",answer:"boucle de feedback",alternatives:["boucle d'amélioration","loop","itération"]},
    {id:"BLANK4",answer:"outil",alternatives:["étape","action","node"]}
  ],
  feedback:"LLM + outils + boucle = agent. Dans Make.com, tu assembles visuellement ces composants sans code."
}},
"08.02-F":{type:"checklist",title:"Checklist de construction d'agent",instructions:"Évalue ta préparation avant de construire un agent.",content:{
  items:[
    {text:"J'ai défini précisément l'objectif de l'agent (1 tâche, 1 livrable)",points:2},
    {text:"J'ai identifié les données d'entrée nécessaires",points:2},
    {text:"J'ai listé les outils/services externes à connecter",points:2},
    {text:"J'ai prototypé le prompt Claude qui sera le cerveau de l'agent",points:3},
    {text:"J'ai testé manuellement chaque étape avant d'automatiser",points:3}
  ],
  feedback_ok:"Préparation complète. Un agent bien conçu sur papier est à moitié construit.",
  feedback_partial:"Ne saute pas les étapes de conception — un agent mal défini crée des outputs incorrects en boucle."
}},
"08.02-G":{type:"qcm",title:"Le piège principal des agents IA",instructions:"Quel est le risque principal quand on construit son premier agent IA ?",content:{
  options:[
    {text:"L'agent devient trop intelligent et prend des décisions non voulues.",correct:false,feedback:"Les LLMs actuels ne 'deviennent' pas autonomes — ils exécutent les instructions qu'on leur donne."},
    {text:"On essaie de tout automatiser en une fois au lieu de commencer par une seule tâche simple.",correct:true,feedback:"Le piège classique : l'agent trop ambitieux qui fait tout mal. Commence par 1 tâche simple, parfaite, puis itère."},
    {text:"Claude fait des erreurs dans ses prompts système.",correct:false,feedback:"Les erreurs de prompt se corrigent facilement par itération."},
    {text:"Les agents coûtent trop cher en tokens API.",correct:false,feedback:"Les coûts sont maîtrisables — le vrai problème des débutants est le scope trop large, pas les coûts."}
  ],
  feedback_ok:"1 agent, 1 tâche, 1 livrable parfait. Puis dupliquer et spécialiser. C'est la bonne stratégie.",
  feedback_ko:"La bonne réponse est B. Commence petit, parfait une tâche, puis étends. La complexité vient de l'itération."
}},
"08.02-H":{type:"ranking",title:"Étapes de construction d'un agent",instructions:"Classe ces étapes dans l'ordre optimal de construction.",content:{
  items:[{id:"1",text:"Tester l'agent sur des cas réels et corriger"},{id:"2",text:"Définir précisément la tâche et le livrable"},{id:"3",text:"Activer l'automatisation et surveiller"},{id:"4",text:"Concevoir le prompt Claude (cerveau de l'agent)"},{id:"5",text:"Construire le scénario Make.com avec les outils connectés"}],
  correct_order:["2","4","5","1","3"],
  feedback:"Définir → Concevoir → Construire → Tester → Activer. Ne jamais activer sans avoir testé — les erreurs en boucle coûtent cher."
}},
"08.02-I":{type:"beforeafter",title:"Agent basique vs agent intelligent",instructions:"Identifie ce qui distingue un agent basique d'un agent vraiment utile.",content:{
  pairs:[
    {before:"Agent : reçoit un email → le copie dans Google Sheets.",after:"Agent : reçoit un email → Claude analyse le type, l'urgence, et l'intention → classe dans la bonne catégorie → génère une réponse automatique si FAQ → alerte si urgent.",error_type:"Copie brute → Traitement intelligent",explanation:"La valeur d'un agent n'est pas dans la copie de données mais dans l'intelligence ajoutée à chaque étape."},
    {before:"Agent qui génère du contenu sans règle → outputs incohérents.",after:"Agent avec system prompt strict, variables de marque, et validation automatique → outputs cohérents et réutilisables.",error_type:"Agent non cadré → Agent cadré",explanation:"Un agent sans system prompt clair produit des outputs variables. Le system prompt est le cadre de qualité de ton agent."}
  ],
  feedback:"Chaque nœud d'un agent peut intégrer Claude comme couche d'intelligence. C'est là que la valeur se crée."
}},
"08.02-J":{type:"freetext",title:"Mon premier agent IA à construire",instructions:"Décris le premier agent que tu vas construire : tâche, données, étapes, livrable.",content:{
  placeholder:"Nom de l'agent : [...]\nTâche automatisée : [...]\nDéclencheur : [Quand l'agent se lance]\nDonnées d'entrée : [...]\nTraitement par Claude (prompt) : [...]\nLivrable final : [...]\nOutils Make.com utilisés : [...]\nTemps estimé de construction : [...]\nTemps économisé/semaine : [...]",
  min_length:100,feedback_ok:"Agent conçu sur papier. Il ne reste qu'à le construire dans Make.com — tu as tout le plan."
}},

"08.03-A":{type:"truefalse",title:"L'avenir du travail avec l'IA",instructions:"Vrai ou faux ?",content:{
  statements:[
    {text:"L'IA va supprimer la plupart des emplois dans les 5 prochaines années.",value:false,explanation:"L'IA transforme les emplois plus qu'elle ne les supprime. Les rôles évoluent vers plus de supervision, de créativité, et de jugement humain."},
    {text:"Les personnes qui maîtrisent l'IA auront un avantage compétitif significatif.",value:true,explanation:"En 2025, maîtriser Claude/GPT est aussi différenciant que maîtriser Excel l'était en 1995. L'avantage est énorme maintenant, et se réduira quand tout le monde l'utilisera."},
    {text:"L'IA est particulièrement adaptée aux tâches qui demandent du jugement éthique complexe.",value:false,explanation:"Le jugement éthique, les nuances culturelles, et les décisions à enjeux humains restent dans le domaine humain. L'IA traite, l'humain décide."}
  ]
}},
"08.03-B":{type:"qcm",title:"Ton positionnement à l'ère de l'IA",instructions:"Comment maximiser sa valeur professionnelle à l'ère de l'IA ?",content:{
  options:[
    {text:"Devenir expert dans un domaine très technique que l'IA ne peut pas faire.",correct:false,feedback:"Stratégie valable mais fragile — les domaines 'IA-proof' rétrécissent rapidement."},
    {text:"Combiner expertise métier humaine + maîtrise de l'IA = 'Human+AI operator'.",correct:true,feedback:"L'expert métier qui orchestre l'IA surpasse l'expert sans IA ET l'IA sans expert. C'est la combinaison gagnante."},
    {text:"Attendre que l'IA se stabilise avant d'investir dans l'apprentissage.",correct:false,feedback:"L'avantage compétitif est maximal maintenant — attendre, c'est laisser l'avance aux autres."},
    {text:"Se spécialiser uniquement dans les outils IA sans expertise métier.",correct:false,feedback:"Les outils changent vite — l'expertise métier est le socle stable. Les deux ensemble créent la valeur."}
  ],
  feedback_ok:"Expert métier + IA = Human+AI Operator. C'est le profil le plus précieux de la prochaine décennie.",
  feedback_ko:"La bonne réponse est B. Expertise humaine + maîtrise IA = valeur irremplaçable."
}},
"08.03-C":{type:"matching",title:"Tâches humaines vs tâches IA",instructions:"Classe chaque tâche dans la bonne catégorie.",content:{
  pairs:[
    {left:"Générer 50 variantes d'un email marketing",right:"IA — volume, répétitif, structuré"},
    {left:"Décider si un partenariat stratégique est dans l'intérêt de l'entreprise",right:"Humain — jugement, valeurs, contexte relationnel"},
    {left:"Analyser 200 avis clients et identifier les thèmes récurrents",right:"IA — volume, extraction de patterns"},
    {left:"Gérer une crise de réputation avec un client important",right:"Humain — empathie, nuance, enjeux élevés"}
  ],
  feedback:"La règle : volume + structure + pas d'enjeux élevés → IA. Jugement + relation + enjeux → Humain."
}},
"08.03-D":{type:"promptlab",title:"Construire ta stratégie IA personnelle",instructions:"Demande à Claude de t'aider à définir ta stratégie d'intégration IA sur 12 mois.",content:{
  context:"Tu veux avoir un plan concret pour devenir un Human+AI Operator dans ton domaine.",
  example_prompt:"Tu es consultant en stratégie de carrière à l'ère de l'IA. Mon profil : [TON MÉTIER, EXPÉRIENCE, NIVEAU IA ACTUEL]. Crée mon plan de développement IA sur 12 mois : mois 1-3 (fondations), mois 4-6 (spécialisation), mois 7-9 (automatisation), mois 10-12 (positionnement et offre). Pour chaque phase : 2 compétences à acquérir, 1 projet concret à réaliser, 1 résultat mesurable.",
  what_to_test:"Génère le plan complet et identifie les 3 actions que tu peux commencer cette semaine."
}},
"08.03-E":{type:"checklist",title:"Bilan de compétences IA",instructions:"Évalue honnêtement ton niveau IA actuel.",content:{
  items:[
    {text:"Je comprends les différences entre les principaux modèles IA (Claude, GPT, Gemini)",points:1},
    {text:"J'utilise Claude quotidiennement pour au moins 1 tâche professionnelle",points:2},
    {text:"J'ai créé des prompts templates réutilisables pour mon activité",points:2},
    {text:"J'ai automatisé au moins 1 processus avec Make.com + Claude",points:3},
    {text:"J'ai créé ou configuré un agent IA pour une tâche récurrente",points:3},
    {text:"Je peux expliquer la valeur de l'IA à d'autres professionnels de mon secteur",points:2}
  ],
  feedback_ok:"Expert Human+AI Operator. Tu es parmi les 5% les plus avancés dans ton secteur. Continue à partager.",
  feedback_partial:"Bon niveau. Concentre-toi sur les automatisations et agents pour passer au niveau suivant."
}},
"08.03-F":{type:"qcm",title:"L'éthique de l'IA dans ton travail",instructions:"Quelle est la bonne approche éthique quand tu utilises l'IA pour des livrables professionnels ?",content:{
  options:[
    {text:"Ne jamais dire à tes clients que tu utilises l'IA — c'est un secret professionnel.",correct:false,feedback:"La transparence construit la confiance. Cacher l'usage de l'IA peut créer des problèmes de confiance si découvert."},
    {text:"Être transparent sur l'usage de l'IA, garantir la qualité finale, et t'assurer que le livrable reflète ton expertise.",correct:true,feedback:"IA = outil d'amplification de ton expertise. La responsabilité du livrable reste la tienne — être transparent là-dessus est une force."},
    {text:"Utiliser l'IA uniquement pour les tâches à faible valeur pour ne pas 'tricher'.",correct:false,feedback:"Il n'y a pas de hiérarchie morale sur quelles tâches méritent l'IA. L'important est la qualité du livrable final."},
    {text:"Laisser Claude décider de l'éthique de chaque situation.",correct:false,feedback:"Claude est un outil — le jugement éthique reste humain. Claude peut aider à réfléchir, pas décider à ta place."}
  ],
  feedback_ok:"Transparence + qualité garantie + responsabilité humaine = usage éthique de l'IA.",
  feedback_ko:"La bonne réponse est B. Transparence + qualité + expertise = usage professionnel et éthique."
}},
"08.03-G":{type:"ranking",title:"Priorités d'intégration IA pour un indépendant",instructions:"Classe ces intégrations IA par ordre de ROI (retour sur investissement) pour un indépendant.",content:{
  items:[{id:"1",text:"Construire un agent multi-tâches complexe"},{id:"2",text:"Automatiser les emails récurrents avec Make.com + Claude"},{id:"3",text:"Créer des templates de prompts pour les livrables quotidiens"},{id:"4",text:"Former toute son équipe à l'IA avant de l'utiliser soi-même"},{id:"5",text:"Automatiser le suivi client et les relances"}],
  correct_order:["3","2","5","1","4"],
  feedback:"Templates → Automatisations simples → Suivi client → Agents complexes → Formation équipe. ROI décroissant mais valeur cumulative."
}},
"08.03-H":{type:"beforeafter",title:"Professionnel sans IA vs avec IA",instructions:"Visualise la transformation du quotidien professionnel avec l'intégration IA.",content:{
  pairs:[
    {before:"Journée type sans IA :\n8h : triage emails (1h)\n9h : rédaction devis (2h)\n11h : création contenu (2h)\n13h : relances clients (1h)\n14h : compte-rendus (1h)\n= 7h de tâches exécution",after:"Journée type avec IA :\n8h : triage emails → agent IA (15min de supervision)\n8h15 : devis → Claude (30min)\n8h45 : contenu → templates (45min)\n9h30 : relances → automatisées\n9h30 : compte-rendus → Claude (15min)\n10h : stratégie, clients, croissance (4h libérées)",error_type:"Exécution → Stratégie",explanation:"L'IA libère du temps d'exécution pour investir en temps stratégique — là où l'humain crée vraiment de la valeur."},
    {before:"'Je ne suis pas prêt à utiliser l'IA — je vais attendre que ce soit plus simple.'",after:"'J'ai commencé avec 1 template de prompt. Maintenant j'ai 15 templates, 3 automatisations, et 1 agent. Ça m'a pris 3 mois.'",error_type:"Attente → Action progressive",explanation:"Le seuil d'entrée est bas — 1 template, 1 tâche. L'effet cumulatif sur 3 mois est transformationnel."}
  ],
  feedback:"L'IA ne te remplace pas — elle te libère de l'exécution pour que tu puisses te concentrer sur ce que seul toi peux faire."
}},
"08.03-I":{type:"freetext",title:"Ma vision IA dans 12 mois",instructions:"Décris ta situation professionnelle idéale dans 12 mois grâce à l'IA.",content:{
  placeholder:"Dans 12 mois, grâce à l'IA je vais :\n\nTâches que j'aurai automatisées :\n1. [...]\n2. [...]\n3. [...]\n\nTemps libéré par semaine : [...]\n\nCe que je ferai de ce temps libéré :\n[...]\n\nL'agent IA que j'aurai construit :\n[...]\n\nComment je me distinguerai de mes concurrents :\n[...]",
  min_length:100,feedback_ok:"Vision claire. Une vision précrite est la première étape pour la réaliser — ton plan IA commence maintenant."
}},
"08.03-J":{type:"freetext",title:"Ce que j'emporte de cette formation",instructions:"Résume les 3 transformations les plus importantes que cette formation a apportées à ta façon de travailler.",content:{
  placeholder:"Transformation 1 — Ma façon d'utiliser Claude :\nAvant : [...]\nMaintenant : [...]\n\nTransformation 2 — Ma productivité :\nAvant : [...]\nMaintenant : [...]\n\nTransformation 3 — Mon positionnement :\nAvant : [...]\nMaintenant : [...]\n\nL'action que je vais faire dans les 24 prochaines heures : [...]",
  min_length:100,feedback_ok:"Formation terminée. Tu fais partie des professionnels qui ont choisi d'amplifier leur valeur avec l'IA plutôt que de la subir. Continue."
}}
}; // end EXERCISES

const MODULES = [
  { id:1, code:"M01", title:"Comprendre l'IA sans bullshit", dur:"1h30", lessons:[
    { id:"01.01", title:"Ce que l'IA fait vraiment (et ce qu'elle ne fait pas)", dur:"20 min" },
    { id:"01.02", title:"Pourquoi 90% des gens l'utilisent mal",                 dur:"20 min" },
    { id:"01.03", title:"Les 3 types d'IA que tu vas croiser",                   dur:"20 min" },
    { id:"01.04", title:"Claude vs GPT vs Gemini — lequel choisir",             dur:"25 min" },
  ], premium:false },
  { id:2, code:"M02", title:"Parler à l'IA comme un pro", dur:"1h", lessons:[
    { id:"02.01", title:"La formule RCTFE expliquée", dur:"20 min" },
    { id:"02.02", title:"Passer d'un prompt basique à un prompt expert", dur:"20 min" },
    { id:"02.03", title:"Les 5 erreurs qui ruinent tes prompts",         dur:"20 min" },
  ], premium:false },
  { id:3, code:"M03", title:"Gagner du temps au quotidien", dur:"1h15", lessons:[
    { id:"03.01", title:"Écrire des emails professionnels en 30 secondes",  dur:"25 min" },
    { id:"03.02", title:"Analyser n'importe quel document en 2 minutes",    dur:"25 min" },
    { id:"03.03", title:"Organiser ta semaine et tes projets avec l'IA",    dur:"25 min" },
  ], premium:false },
  { id:4, code:"M04", title:"Créer du contenu qui te ressemble", dur:"45 min", lessons:[
    { id:"04.01", title:"Faire écrire l'IA avec TA voix (pas la sienne)",            dur:"25 min" },
    { id:"04.02", title:"Posts LinkedIn, threads, newsletters — les templates",      dur:"20 min" },
  ], premium:false },
  { id:5, code:"M05", title:"Apprendre n'importe quoi", dur:"45 min", lessons:[
    { id:"05.01", title:"Transformer Claude en tuteur personnel",              dur:"25 min" },
    { id:"05.02", title:"Apprendre une compétence en 10x moins de temps",     dur:"20 min" },
  ], premium:false },
  { id:6, code:"M06", title:"Automatiser avec Make.com", dur:"50 min", lessons:[
    { id:"06.01", title:"Comprendre les automatisations sans code",           dur:"25 min" },
    { id:"06.02", title:"Créer ton premier scénario Make.com + Claude",       dur:"25 min" },
  ], premium:false },
  { id:7, code:"M07", title:"Développer son business", dur:"1h30", lessons:[
    { id:"07.01", title:"Analyser un marché et ses concurrents en 1h",   dur:"30 min" },
    { id:"07.02", title:"Créer une offre irrésistible avec l'IA",        dur:"30 min" },
    { id:"07.03", title:"Déléguer à l'IA les tâches qui t'épuisent",     dur:"30 min" },
  ], premium:false },
  { id:8, code:"M08", title:"Niveau Pro · Agents & Stratégie", dur:"1h30", lessons:[
    { id:"08.01", title:"Méta-prompts et prompts systèmes — le niveau pro",  dur:"30 min" },
    { id:"08.02", title:"Construire des agents IA autonomes",                dur:"30 min" },
    { id:"08.03", title:"L'avenir du travail — comment te positionner",      dur:"30 min" },
  ], premium:true },
];

const TOTAL = MODULES.reduce((a,m) => a + m.lessons.length, 0);
