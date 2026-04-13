# Make.com — Scénario 1 Complet : Achat Gumroad → Accès Automatique

## Vue d'ensemble du flux
```
Gumroad Sale
    ↓
Make.com Webhook
    ↓
[Router] ─── Standard (97€) ──→ Brevo liste "Élèves Actifs" → Email bienvenue Standard
           └── Premium (197€) ──→ Brevo liste "Élèves Actifs" → Email bienvenue Premium
    ↓
Notion CRM (créer entrée)
    ↓
Email : demande Discord ID (formulaire Tally)
```

---

## Instructions de création dans Make.com

### Étape 1 — Créer le scénario
1. make.com → "Create a new scenario"
2. Nom : `Nexum — Achat Gumroad → Accès Automatique`

### Étape 2 — Module 1 : Webhook
- Chercher "Webhooks" → "Custom Webhook"
- Cliquer "Add" → Nom : `gumroad-sale`
- **Copier l'URL** → la coller dans CLAUDE.md sous [MAKE_WEBHOOK_URL]
- Cliquer "OK" (le webhook attend une première requête pour détecter la structure)

### Étape 3 — Tester la structure Gumroad
Dans Gumroad → Settings → Integrations → Webhooks :
- Add webhook → coller l'URL Make → Event : `sale` → Save
- Faire un achat test (ou utiliser le bouton "Send test" de Gumroad)
- Make détecte automatiquement la structure JSON

### Étape 4 — Module 2 : Router
- Ajouter "Flow Control" → "Router"
- Route 1 : `{{1.price}} = 97` → Standard
- Route 2 : `{{1.price}} = 197` → Premium

### Étape 5 — Module 3A/3B : Brevo — Ajouter contact
Pour chaque route, ajouter "HTTP" → "Make a request" :

```
URL: https://api.brevo.com/v3/contacts
Method: POST
Headers:
  api-key: [BREVO_API_KEY]
  content-type: application/json
Body (JSON):
{
  "email": "{{1.email}}",
  "listIds": [2],
  "updateEnabled": true,
  "attributes": {
    "PRENOM": "{{1.full_name}}",
    "PRODUIT": "{{1.product_name}}",
    "MONTANT": "{{1.price}}",
    "DATE_ACHAT": "{{formatDate(now; \"DD/MM/YYYY\")}}"
  }
}
```
(listIds: 2 = Élèves Actifs — ajuster selon les IDs réels Brevo)

### Étape 6 — Module 4 : Email de bienvenue

```
URL: https://api.brevo.com/v3/smtp/email
Method: POST
Headers:
  api-key: [BREVO_API_KEY]
  content-type: application/json
Body (JSON) — Standard:
{
  "sender": {"name": "Leandro — Nexum AI School", "email": "leandro@nexum-school.com"},
  "to": [{"email": "{{1.email}}", "name": "{{1.full_name}}"}],
  "subject": "Bienvenue dans Nexum AI School — Voici tes accès",
  "htmlContent": "<h2>Bienvenue {{1.full_name}} !</h2><p>Ton accès <strong>Standard</strong> à Nexum AI School est confirmé.</p><h3>Prochaine étape :</h3><p>Rejoins notre Discord Nexum et accède au salon <strong>#01-comprendre-ia</strong> pour commencer le Module 1.</p><p><a href='[DISCORD_INVITE]' style='background:#7B5EA7;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;'>Rejoindre le Discord Nexum →</a></p><hr><p>Pour activer tes accès aux salons de formation, remplis ce formulaire en 30 secondes : <a href='[TALLY_FORM_URL]'>Mon Discord ID</a></p><p>À très vite,<br><strong>Leandro</strong></p>"
}

Body (JSON) — Premium:
{
  "sender": {"name": "Leandro — Nexum AI School", "email": "leandro@nexum-school.com"},
  "to": [{"email": "{{1.email}}", "name": "{{1.full_name}}"}],
  "subject": "Bienvenue dans Nexum AI School Premium — Voici tes accès VIP",
  "htmlContent": "<h2>Bienvenue {{1.full_name}} !</h2><p>Ton accès <strong>Premium</strong> à Nexum AI School est confirmé.</p><h3>Tes accès exclusifs :</h3><ul><li>8 modules complets</li><li>Salon #vip-ai-school (coaching mensuel)</li><li>Templates & prompts exclusifs</li><li>Accès prioritaire aux nouvelles formations</li></ul><p><a href='[DISCORD_INVITE]' style='background:#7B5EA7;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;'>Rejoindre le Discord VIP →</a></p><hr><p>Active tes accès VIP : <a href='[TALLY_FORM_URL]'>Mon Discord ID</a></p><p>À très vite,<br><strong>Leandro</strong></p>"
}
```

### Étape 7 — Module 5 : Notion CRM

```
Module: HTTP → Make a request
URL: https://api.notion.com/v1/pages
Method: POST
Headers:
  Authorization: Bearer [NOTION_API_KEY]
  Notion-Version: 2022-06-28
  Content-Type: application/json
Body:
{
  "parent": {"database_id": "[NOTION_CRM_DATABASE_ID]"},
  "properties": {
    "Email": {"email": "{{1.email}}"},
    "Nom": {"title": [{"text": {"content": "{{1.full_name}}"}}]},
    "Produit": {"select": {"name": "{{1.product_name}}"}},
    "Montant": {"number": {{1.price}}},
    "Date achat": {"date": {"start": "{{formatDate(now; \"YYYY-MM-DD\")}}"}},
    "Statut": {"select": {"name": "Actif"}}
  }
}
```

### Étape 8 — Activer le scénario
- Cliquer "Run once" pour tester
- Si OK → toggle "Scheduling" → ON (toutes les 15 min ou immédiat avec webhook)

---

## JSON Blueprint Make.com (import direct)

Copier-coller dans Make.com → Import blueprint :

```json
{
  "name": "Nexum — Achat Gumroad → Accès Automatique",
  "flow": [
    {
      "id": 1,
      "module": "gateway:CustomWebHook",
      "version": 1,
      "parameters": {"hook": 1, "maxResults": 1},
      "mapper": {},
      "metadata": {"designer": {"x": 0, "y": 0}}
    },
    {
      "id": 2,
      "module": "builtin:BasicRouter",
      "version": 1,
      "parameters": {},
      "mapper": {},
      "metadata": {"designer": {"x": 300, "y": 0}},
      "routes": [
        {
          "flow": [
            {
              "id": 3,
              "module": "http:ActionSendData",
              "version": 3,
              "parameters": {"handleErrors": false},
              "mapper": {
                "url": "https://api.brevo.com/v3/contacts",
                "serializeUrl": false,
                "method": "post",
                "headers": [
                  {"name": "api-key", "value": "{{BREVO_API_KEY}}"},
                  {"name": "content-type", "value": "application/json"}
                ],
                "bodyType": "raw",
                "contentType": "application/json",
                "data": "{\"email\":\"{{1.email}}\",\"listIds\":[2],\"updateEnabled\":true,\"attributes\":{\"PRENOM\":\"{{1.full_name}}\"}}"
              },
              "metadata": {"designer": {"x": 600, "y": -150}}
            }
          ],
          "label": "Standard 97€",
          "filter": {
            "name": "Est Standard",
            "conditions": [[{"a": "{{1.price}}", "b": "97", "o": "text:equal"}]]
          }
        },
        {
          "flow": [
            {
              "id": 4,
              "module": "http:ActionSendData",
              "version": 3,
              "parameters": {"handleErrors": false},
              "mapper": {
                "url": "https://api.brevo.com/v3/contacts",
                "serializeUrl": false,
                "method": "post",
                "headers": [
                  {"name": "api-key", "value": "{{BREVO_API_KEY}}"},
                  {"name": "content-type", "value": "application/json"}
                ],
                "bodyType": "raw",
                "contentType": "application/json",
                "data": "{\"email\":\"{{1.email}}\",\"listIds\":[2],\"updateEnabled\":true,\"attributes\":{\"PRENOM\":\"{{1.full_name}}\"}}"
              },
              "metadata": {"designer": {"x": 600, "y": 150}}
            }
          ],
          "label": "Premium 197€",
          "filter": {
            "name": "Est Premium",
            "conditions": [[{"a": "{{1.price}}", "b": "197", "o": "text:equal"}]]
          }
        }
      ]
    }
  ],
  "metadata": {
    "instant": true,
    "version": 1,
    "scenario": {"roundtrips": 1, "maxErrors": 3, "autoCommit": true}
  }
}
```

---

## Placeholders à remplacer avant activation

| Placeholder | Valeur |
|-------------|--------|
| `{{BREVO_API_KEY}}` | Clé API Brevo (xkeysib-...) |
| `[DISCORD_INVITE]` | Lien invitation Discord |
| `[TALLY_FORM_URL]` | URL formulaire Tally pour Discord ID |
| `[NOTION_API_KEY]` | Token intégration Notion |
| `[NOTION_CRM_DATABASE_ID]` | ID base de données CRM Notion |
