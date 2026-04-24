// ═══════════════════════════════════════════════
// AUTH + FIREBASE
// ═══════════════════════════════════════════════
const ADMIN_KEYS = {
  'NEXUM-ADMIN-2026-PREMIUM': 'premium',
  'NEXUM-ADMIN-2026-STANDARD': 'standard',
};

let currentUserKey = null;

function showApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'flex';
  document.getElementById('main-layout').style.display = 'flex';
}

function showLogin() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('main-layout').style.display = 'none';
}

function setLoginError(msg) {
  document.getElementById('login-error').textContent = msg;
}

function setLoginLoading(loading) {
  const btn = document.getElementById('login-btn');
  const txt = document.getElementById('login-btn-text');
  btn.disabled = loading;
  txt.textContent = loading ? 'Vérification...' : 'Accéder à la formation →';
}

async function submitLogin() {
  const key = document.getElementById('login-key').value.trim();
  if (!key) { setLoginError('Entre ta clé d\'accès.'); return; }

  setLoginError('');
  setLoginLoading(true);

  // 1. Clé admin (locale, pas de BDD)
  if (ADMIN_KEYS[key.toUpperCase()]) {
    currentUserKey = key.toUpperCase();
    localStorage.setItem('nx_key', key.toUpperCase());
    await grantAccess(key.toUpperCase(), ADMIN_KEYS[key.toUpperCase()], { done: [], open: [1] });
    return;
  }

  // 2. Vérification dans Realtime Database
  try {
    const snap = await db.ref('members/' + key).get();
    if (snap.exists()) {
      const data = snap.val();
      currentUserKey = key;
      localStorage.setItem('nx_key', key);
      await grantAccess(key, data.plan, { done: data.done || [], open: data.open || [1] });
    } else {
      setLoginError('Clé invalide. Vérifie ton email ou contacte le support.');
      setLoginLoading(false);
    }
  } catch(e) {
    setLoginError('Erreur réseau. Réessaie dans quelques secondes.');
    setLoginLoading(false);
  }
}

async function grantAccess(key, plan, progress) {
  const currentMonth = new Date().toISOString().slice(0, 7); // "YYYY-MM"
  S.plan      = plan;
  S.done      = progress.done;
  S.open      = progress.open;
  S.exDone    = progress.exDone || JSON.parse(localStorage.getItem('nx_exdone')||'[]');
  // Reset étoiles si nouveau mois calendaire
  const savedMonth = progress.starMonth || null;
  S.stars     = (savedMonth === currentMonth && progress.stars !== undefined && progress.stars !== null) ? progress.stars : 5;
  S.starMonth = currentMonth;
  S.adminMode = !!ADMIN_KEYS[key];
  localStorage.setItem('nx_plan', plan);
  await loadExerciseOverrides();
  updatePlanBadge();
  updateStarsDisplay();
  showApp();
  renderHome();
  renderSidebar();
  updateProgressBar();
  renderDashProfileCard();
  loadDashProfile();
}

async function saveToFirebase() {
  if (!currentUserKey) return;
  // Toujours sauvegarder dans localStorage
  localStorage.setItem('nx_exdone',    JSON.stringify(S.exDone));
  localStorage.setItem('nx_done',      JSON.stringify(S.done));
  localStorage.setItem('nx_open',      JSON.stringify(S.open));
  localStorage.setItem('nx_stars',     String(S.stars));
  localStorage.setItem('nx_starMonth', S.starMonth || '');
  // Sauvegarder dans Firebase pour tous les comptes (admin inclus)
  try {
    await db.ref('members/' + currentUserKey).update({
      done:       S.done,
      open:       S.open,
      exDone:     S.exDone,
      stars:      S.stars,
      starMonth:  S.starMonth,
      updated_at: Date.now()
    });
  } catch(e) {
    console.warn('Firebase save error:', e);
  }
}

function logout() {
  ['nx_key','nx_plan','nx_done','nx_open','nx_exdone','nx_stars','nx_starMonth','nx_profile'].forEach(k => localStorage.removeItem(k));
  location.reload();
}

// ═══════════════════════════════════════════════
// PROFIL DASHBOARD
// ═══════════════════════════════════════════════
let _dashProfile = {};

function _profAlias(key) {
  let h = 0;
  for (let i = 0; i < key.length; i++) { h = ((h << 5) - h) + key.charCodeAt(i); h |= 0; }
  return 'Membre #' + (Math.abs(h) % 9999 + 1);
}
function _profEmoji(alias) {
  const e = ['🦊','🐺','🦁','🐯','🦅','🦋','🐉','🌙','⚡','🔮','🎯','🚀','🎨','🔥','🌊'];
  let h = 0;
  for (let i = 0; i < alias.length; i++) { h = ((h << 5) - h) + alias.charCodeAt(i); h |= 0; }
  return e[Math.abs(h) % e.length];
}
function _profGrad(alias) {
  const g = ['linear-gradient(135deg,#00E5FF,#7B5EA7)','linear-gradient(135deg,#FF3CAC,#7B5EA7)','linear-gradient(135deg,#00E5A0,#00E5FF)','linear-gradient(135deg,#F5C842,#FF3CAC)','linear-gradient(135deg,#7B5EA7,#FF3CAC)','linear-gradient(135deg,#00E5FF,#00E5A0)'];
  let h = 0;
  for (let i = 0; i < alias.length; i++) { h = ((h << 5) - h) + alias.charCodeAt(i); h |= 0; }
  return g[Math.abs(h) % g.length];
}

async function loadDashProfile() {
  if (!currentUserKey) return;
  const safeKey = currentUserKey.replace(/\./g, '_');
  // Charger depuis localStorage en premier (instantané)
  const cached = localStorage.getItem('nx_profile');
  if (cached) { try { _dashProfile = JSON.parse(cached); } catch(e) {} }
  renderDashProfileCard();
  // Puis synchroniser avec Firebase
  try {
    const snap = await db.ref('profiles/' + safeKey).get();
    if (snap.exists()) {
      _dashProfile = snap.val();
      localStorage.setItem('nx_profile', JSON.stringify(_dashProfile));
    } else {
      const alias = _profAlias(currentUserKey);
      if (!_dashProfile.alias) _dashProfile = { displayName: alias, bio: '', alias, joinedAt: Date.now() };
      try {
        await db.ref('profiles/' + safeKey).set(_dashProfile);
        localStorage.setItem('nx_profile', JSON.stringify(_dashProfile));
      } catch(e) {}
    }
  } catch(e) {
    if (!_dashProfile.alias) _dashProfile = { displayName: _profAlias(currentUserKey), bio: '', alias: _profAlias(currentUserKey) };
  }
  renderDashProfileCard();
}

function renderDashProfileCard() {
  const card = document.getElementById('sb-profile-card');
  if (!card || !currentUserKey) return;
  const alias = (_dashProfile && _dashProfile.alias) || _profAlias(currentUserKey);
  const dName = (_dashProfile && _dashProfile.displayName) || alias;
  const av = document.getElementById('sb-prof-av');
  const nm = document.getElementById('sb-prof-name');
  if (av) { av.textContent = _profEmoji(alias); av.style.background = _profGrad(alias); }
  if (nm) nm.textContent = dName.length > 18 ? dName.slice(0, 18) + '…' : dName;
  card.style.cssText = 'display:flex;margin:8px 14px 0';
}

function openDashProfile() {
  const alias = _dashProfile.alias || _profAlias(currentUserKey || '');
  const dName = _dashProfile.displayName || alias;
  const bio   = _dashProfile.bio || '';
  const av    = document.getElementById('dpm-av');
  if (av) { av.textContent = _profEmoji(alias); av.style.background = _profGrad(alias); }
  const el = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  el('dpm-name',  dName);
  el('dpm-alias', alias);
  el('dpm-bio',   bio || 'Aucune bio pour l\'instant…');
  const inp = document.getElementById('dpm-input-name');
  const ta  = document.getElementById('dpm-input-bio');
  if (inp) inp.value = dName;
  if (ta)  ta.value  = bio;
  document.getElementById('dash-profile-modal').style.display = 'flex';
}

function closeDashProfile() {
  document.getElementById('dash-profile-modal').style.display = 'none';
}

async function saveDashProfile() {
  const dn  = (document.getElementById('dpm-input-name').value || '').trim();
  const bio = (document.getElementById('dpm-input-bio').value  || '').trim();
  if (!dn) return;
  const safeKey = currentUserKey.replace(/\./g, '_');
  const alias = _dashProfile.alias || _profAlias(currentUserKey);
  _dashProfile.displayName = dn;
  _dashProfile.bio = bio;
  _dashProfile.alias = alias;
  localStorage.setItem('nx_profile', JSON.stringify(_dashProfile));
  try { await db.ref('profiles/' + safeKey).update({ displayName: dn, bio, alias }); } catch(e) {}
  renderDashProfileCard();
  document.getElementById('dpm-name').textContent = dn;
  document.getElementById('dpm-bio').textContent  = bio || 'Aucune bio pour l\'instant…';
  closeDashProfile();
}


// Vérifier si déjà connecté
(async () => {
  const savedKey = localStorage.getItem('nx_key');
  if (!savedKey) { showLogin(); return; }

  if (ADMIN_KEYS[savedKey]) {
    currentUserKey = savedKey;
    try {
      const snap = await db.ref('members/' + savedKey).get();
      if (snap.exists()) {
        const data = snap.val();
        await grantAccess(savedKey, ADMIN_KEYS[savedKey], { done: data.done || [], open: data.open || [1], exDone: data.exDone || [], stars: data.stars, starMonth: data.starMonth });
        return;
      }
    } catch(e) {}
    // Fallback localStorage si Firebase inaccessible
    const savedDone      = JSON.parse(localStorage.getItem('nx_done')   || '[]');
    const savedOpen      = JSON.parse(localStorage.getItem('nx_open')   || '[1]');
    const savedExDone    = JSON.parse(localStorage.getItem('nx_exdone') || '[]');
    const savedStars     = localStorage.getItem('nx_stars') !== null ? Number(localStorage.getItem('nx_stars')) : 5;
    const savedStarMonth = localStorage.getItem('nx_starMonth') || null;
    await grantAccess(savedKey, ADMIN_KEYS[savedKey], { done: savedDone, open: savedOpen, exDone: savedExDone, stars: savedStars, starMonth: savedStarMonth });
    return;
  }

  try {
    const snap = await db.ref('members/' + savedKey).get();
    if (snap.exists()) {
      currentUserKey = savedKey;
      const data = snap.val();
      await grantAccess(savedKey, data.plan, { done: data.done || [], open: data.open || [1], stars: data.stars, starMonth: data.starMonth, exDone: data.exDone || [] });
    } else {
      localStorage.removeItem('nx_key');
      showLogin();
    }
  } catch(e) {
    showLogin();
  }
})();

// Enter pour valider
document.getElementById('login-key').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitLogin();
});

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
const S = {
  plan:              localStorage.getItem('nx_plan') || 'standard',
  done:              [],
  open:              [1],
  exDone:            JSON.parse(localStorage.getItem('nx_exdone')||'[]'),
  cur:               null,
  qcmSel:            null,
  adminMode:         false,
  freeAccess:        false,
  discordUrl:        '#',
  gumroadPremium:    'https://courtierleandro.gumroad.com/l/lcwubf',
  exerciseOverrides: {},
  stars:             5, // étoiles mensuelles pour passer les exercices difficiles
  starMonth:         null, // mois courant (YYYY-MM) pour reset mensuel
};
function save() {
  localStorage.setItem('nx_plan', S.plan);
  saveToFirebase();
}
function isDone(id) { return S.done.includes(id); }
function totalDone() { return S.done.length; }

function showToastApp(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);z-index:9999;padding:11px 22px;border-radius:24px;font-family:Space Mono,monospace;font-size:11px;letter-spacing:.04em;white-space:nowrap;background:#0a0a1e;border:1px solid rgba(0,229,255,.25);color:#00E5FF;box-shadow:0 8px 32px rgba(0,229,255,.12);transition:opacity .3s;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

// Vérifie si une leçon est accessible (la précédente dans le module doit être terminée)
function isLessonAccessible(lesId, modId) {
  if (S.adminMode || S.freeAccess) return true;
  const mod = MODULES.find(m => m.id === modId);
  const idx = mod.lessons.findIndex(l => l.id === lesId);
  if (idx === 0) return true;
  return isDone(mod.lessons[idx - 1].id);
}

// Marque la leçon courante comme terminée et affiche le bloc suivant
function autoMarkDone() {
  const { lesId, modId } = S.cur;
  if (!isDone(lesId)) {
    S.done.push(lesId);
    save();
    updateProgressBar();
    renderSidebar();
  }
  // Détecter si c'est la dernière leçon accessible
  const allLes = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, modId: m.id })));
  const idx = allLes.findIndex(l => l.id === lesId);
  const next = allLes[idx + 1];
  // Dernière leçon = pas de suivante OU la suivante est premium et l'user est standard
  const isLastAccessible = !next || (MODULES.find(m => m.id === next.modId)?.premium && S.plan === 'standard');

  if (isLastAccessible) {
    // Montrer ex-next ou next-card une seconde, puis basculer sur l'écran de fin
    const exNext = document.getElementById('ex-next');
    if (exNext) exNext.style.display = 'block';
    setTimeout(() => renderFormationComplete(), 1400);
    return;
  }

  // Sur la page leçon : affiche la next-card
  const nextCard = document.getElementById('next-card');
  if (nextCard) nextCard.style.display = 'flex';
  // Sur la page exercice : affiche ex-next
  const exNext = document.getElementById('ex-next');
  if (exNext) exNext.style.display = 'block';
}

// ═══════════════════════════════════════════════════════════
// INLINE MULTI-EXERCISE SYSTEM (M01 / M02)
// ═══════════════════════════════════════════════════════════

function isExDone(exId) { return S.exDone.includes(exId); }

function markExDone(exId, lesId, modId) {
  if (!S.exDone.includes(exId)) { S.exDone.push(exId); save(); }
  // Marquer la carte comme terminée dans le DOM
  const safeId = exId.replace(/\./g,'').replace(/-/g,'');
  const card = document.getElementById('exc-' + safeId);
  if (card) {
    const body = card.querySelector('.inline-ex-body');
    if (body) body.style.display = 'none';
    let banner = card.querySelector('.inline-ex-done-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'inline-ex-done-banner';
      banner.innerHTML = '✓ Exercice validé';
      card.appendChild(banner);
    }
    banner.style.display = 'flex';
  }
  // Vérifier si tous les exercices de la leçon sont terminés
  const exIds = LESSON_EXERCISES[lesId] || [];
  if (exIds.length > 0 && exIds.every(id => S.exDone.includes(id))) {
    if (!isDone(lesId)) {
      S.done.push(lesId);
      save();
      updateProgressBar();
      renderSidebar();
    }
    // Afficher la next-card
    const nextCard = document.getElementById('next-card');
    if (nextCard) nextCard.style.display = 'flex';
    // Afficher le badge de félicitations
    const allDoneBanner = document.getElementById('all-ex-done-' + lesId.replace(/\./g,''));
    if (allDoneBanner) allDoneBanner.style.display = 'block';
  }
}

function typeBadge(type) {
  const COLORS = {
    truefalse:'#3B82F6', qcm:'#8B5CF6', multiselect:'#6366F1',
    freetext:'#10B981', promptlab:'#F59E0B', ranking:'#EAB308',
    matching:'#EC4899', completion:'#06B6D4', beforeafter:'#EF4444', checklist:'#6B7280'
  };
  const LABELS = {
    truefalse:'Vrai/Faux', qcm:'QCM', multiselect:'Multi-select',
    freetext:'Rédaction', promptlab:'Prompt Lab', ranking:'Classement',
    matching:'Association', completion:'Complétion', beforeafter:'Avant/Après', checklist:'Checklist'
  };
  const c = COLORS[type]||'#6B7280';
  return `<span class="exb-${type}" style="padding:2px 9px;border-radius:4px;font-size:10px;font-family:'Space Mono',monospace;font-weight:700;letter-spacing:.06em;background:${c}22;color:${c}">${LABELS[type]||type}</span>`;
}

function renderInlineExercises(lesId, modId) {
  const exIds = LESSON_EXERCISES[lesId] || [];
  if (!exIds.length) return '';
  const letters = ['A','B','C','D'];
  let html = '<div class="inline-exercises-section" style="margin-top:32px">';
  html += `<div style="font-family:\'Space Mono\',monospace;font-size:10px;letter-spacing:.12em;color:var(--muted);margin-bottom:16px;padding-top:12px;border-top:1px solid var(--border)">EXERCICES — ${exIds.length} EXERCICE${exIds.length>1?'S':''}</div>`;

  exIds.forEach((exId, idx) => {
    const ex = EXERCISES[exId];
    if (!ex) return;
    const safeId = exId.replace(/\./g,'').replace(/-/g,'');
    const done = isExDone(exId);
    html += `<div class="inline-ex-card" id="exc-${safeId}">
      <div class="inline-ex-top">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-family:\'Space Mono\',monospace;font-size:10px;color:var(--muted);font-weight:700">EX ${letters[idx]}</span>
          ${typeBadge(ex.type)}
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:11px;color:var(--muted)">${ex.estimated_time_minutes||5} min</span>
          ${done ? '<span style="color:var(--success);font-size:12px;font-family:\'Space Mono\',monospace">✓ FAIT</span>' : ''}
        </div>
      </div>
      <div class="inline-ex-body" ${done ? 'style="display:none"' : ''}>
        ${ex.title ? `<div style="font-weight:600;font-size:14px;margin-bottom:8px">${ex.title}</div>` : ''}
        ${ex.instructions && ex.type !== 'freetext' && ex.type !== 'promptlab' ? `<p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.55;font-style:italic">${ex.instructions}</p>` : ''}
        ${renderInlineExBody(ex, exId, lesId, modId)}
      </div>
      ${done ? '<div class="inline-ex-done-banner" style="display:flex">✓ Exercice validé</div>' : ''}
    </div>`;
  });

  const lesIdSafe = lesId.replace(/\./g,'');
  const allDone = exIds.every(id => isExDone(id));
  html += `<div id="all-ex-done-${lesIdSafe}" style="display:${allDone?'block':'none'};background:rgba(0,229,160,.08);border:1px solid rgba(0,229,160,.25);border-radius:10px;padding:16px 20px;margin-bottom:16px;text-align:center;color:var(--success);font-family:\'Space Mono\',monospace;font-size:12px;letter-spacing:.06em">✓ TOUS LES EXERCICES VALIDÉS — LEÇON TERMINÉE</div>`;
  html += '</div>';
  return html;
}

function renderInlineExBody(ex, exId, lesId, modId) {
  const safeId = exId.replace(/\./g,'').replace(/-/g,'');
  const c = ex.content || ex;

  if (ex.type === 'truefalse') {
    let h = `<div id="tf-${safeId}">`;
    (c.statements||[]).forEach((st, i) => {
      h += `<div class="tf-item" id="tfi-${safeId}-${i}">
        <div class="tf-text">${st.text}</div>
        <div class="tf-btns">
          <button class="tf-btn tf-v" onclick="tfAnswer(this,'${safeId}',${i},${st.answer},true,'${escJs(st.explanation||'')}')">Vrai</button>
          <button class="tf-btn tf-f" onclick="tfAnswer(this,'${safeId}',${i},${st.answer},false,'${escJs(st.explanation||'')}')">Faux</button>
        </div>
      </div>`;
    });
    h += `<div id="tf-score-${safeId}" class="tf-score" style="display:none"></div>`;
    h += `<button class="ex-val-btn" id="tfval-${safeId}" onclick="tfValidate('${safeId}','${exId}','${lesId}','${modId}',${JSON.stringify(c.feedback_thresholds||[]).replace(/'/g,"&#39;").replace(/"/g,'&quot;')},${(c.statements||[]).length})" style="display:none">Voir mon score</button>`;
    h += '</div>';
    return h;
  }

  if (ex.type === 'qcm') {
    const opts = (c.options||[]).map((o,i) => {
      const letters2 = ['A','B','C','D'];
      const optFb = o.correct
        ? (o.feedback || c.feedback_ok || '')
        : (o.feedback || c.feedback_ko || '');
      return `<div class="qcm-option" id="qo-${safeId}-${i}" onclick="inlineQcm(this,'${safeId}',${o.correct},'${escJs(optFb)}','${escJs(c.feedback_ko||'')}','${exId}','${lesId}','${modId}')">
        <span class="qcm-letter">${letters2[i]}</span>
        <span class="qcm-text">${o.text}</span>
      </div>`;
    }).join('');
    return `<p style="font-size:14px;color:#C8C8D8;margin-bottom:14px;line-height:1.6"><strong>${c.question||''}</strong></p>
      <div class="qcm-options">${opts}</div>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>`;
  }

  if (ex.type === 'multiselect') {
    const opts = (c.options||[]).map((o,i) =>
      `<div class="qcm-option" id="ms-${safeId}-${i}" onclick="this.classList.toggle('ms-sel');this.style.borderColor=this.classList.contains('ms-sel')?'var(--accent)':''" style="cursor:pointer">
        <span class="qcm-letter" style="font-size:12px">☐</span>
        <span class="qcm-text">${o.text}</span>
      </div>`
    ).join('');
    const answersJson = JSON.stringify(c.options||[]).replace(/"/g,'&quot;');
    return `<p style="font-size:14px;color:#C8C8D8;margin-bottom:14px;line-height:1.6"><strong>${c.question||''}</strong></p>
      <p style="font-size:11px;color:var(--muted);margin-bottom:10px;font-family:'Space Mono',monospace">Sélectionne toutes les bonnes réponses</p>
      <div class="qcm-options" id="ms-opts-${safeId}">${opts}</div>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineMultiselect('${safeId}','${exId}','${lesId}','${modId}','${escJs(c.feedback_ok||'')}','${escJs(c.feedback_ko||'')}',${c.options?c.options.map(o=>o.correct):[]})">Valider</button>`;
  }

  if (ex.type === 'freetext') {
    const ftDesc = ex.instructions || c.description || c.desc || '';
    const ftMin = c.min_length || c.minLength || 80;
    return `${ftDesc ? `<p style="font-size:14px;color:#C8C8D8;margin-bottom:10px;line-height:1.65">${ftDesc}</p>` : ''}
      <textarea class="pl-ta" id="ft-${safeId}" placeholder="${escHtml(c.placeholder||'Tape ta réponse ici...')}" rows="5" oninput="document.getElementById('ftcc-${safeId}').textContent=this.value.length+' / ${ftMin} car.'"></textarea>
      <div style="font-size:11px;color:var(--muted);margin:4px 0 10px;text-align:right;font-family:'Space Mono',monospace" id="ftcc-${safeId}">0 / ${ftMin} car.</div>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineFreetext('${safeId}',${ftMin},'${escJs(c.feedback_ok||'')}','${escJs(c.feedback_ko||'')}','${exId}','${lesId}','${modId}')">Valider →</button>`;
  }

  if (ex.type === 'promptlab') {
    const promptId = 'pl-prompt-' + safeId;
    const plInstruction = ex.instructions || c.instruction || 'Lance Claude, colle le prompt, reviens ici avec ta réponse.';
    const plMinLen = c.min_length || c.minLength || 50;
    return `${plInstruction ? `<p style="font-size:13px;color:#C8C8D8;margin-bottom:12px;line-height:1.65">${plInstruction}</p>` : ''}
    <div class="pl-box">
      <div class="pl-header"><span>Prompt Lab</span><button class="pl-copy" onclick="copyInlinePrompt('${promptId}',this)">Copier le prompt</button></div>
      <div class="pl-prompt" id="${promptId}">${escHtml(c.prompt_to_copy||'')}</div>
    </div>
    <div style="margin:12px 0 8px">
      <label class="pl-label" style="display:block;margin-bottom:6px">${escHtml(c.field_label||'Colle ici la réponse de Claude')}</label>
      <textarea class="pl-ta" id="pl-${safeId}" placeholder="Colle la réponse de Claude ici..." rows="5" oninput="document.getElementById('plcc-${safeId}').textContent=this.value.length+' / ${plMinLen} car.'"></textarea>
      <div style="font-size:11px;color:var(--muted);margin:4px 0 10px;text-align:right;font-family:'Space Mono',monospace" id="plcc-${safeId}">0 / ${plMinLen} car.</div>
    </div>
    <div class="ex-fb-inline" id="exfb-${safeId}"></div>
    <button class="ex-val-btn" onclick="inlinePromptLab('${safeId}',${plMinLen},'${escJs(c.feedback||'')}','${exId}','${lesId}','${modId}')">Valider ma réponse →</button>`;
  }

  if (ex.type === 'ranking') {
    const items = (c.items||[]).map(it => `<li class="rank-item" data-id="${it.id}" draggable="true" ondragstart="rankDragStart(event,this)" ondragover="rankDragOver(event)" ondrop="rankDrop(event,this,'rl-${safeId}')">
      <span class="rank-handle">⠿</span>
      <span class="rank-n" id="rn-${safeId}-${it.id}"></span>
      <span class="rank-text">${it.text}</span>
    </li>`).join('');
    // Déférer l'init des numéros après rendu
    setTimeout(() => rankUpdateNumbers('rl-' + safeId), 50);
    const correctOrderVal = c.correct_order != null ? JSON.stringify(c.correct_order) : 'null';
    return `<p style="font-size:12px;color:var(--muted);margin-bottom:12px;font-family:'Space Mono',monospace">Glisse les éléments pour les mettre dans le bon ordre</p>
      <ul class="rank-list" id="rl-${safeId}" style="padding:0">${items}</ul>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineRanking('${safeId}','${escJs(correctOrderVal)}','${escJs(c.feedback||'')}','${exId}','${lesId}','${modId}')">Vérifier l'ordre</button>`;
  }

  if (ex.type === 'matching') {
    const colA = c.column_a||[];
    const colB = [...(c.column_b||[])].sort(()=>Math.random()-.5);
    const colAH = colA.map(a =>
      `<div class="match-item" id="ma-${safeId}-${a.id}" onclick="matchSelectA('${safeId}','${a.id}')">${a.text}</div>`
    ).join('');
    const colBH = colB.map(b =>
      `<div class="match-item" id="mb-${safeId}-${b.id}" onclick="matchSelectB('${safeId}','${b.id}')">${b.text}</div>`
    ).join('');
    return `<p style="font-size:12px;color:var(--muted);margin-bottom:12px;font-family:'Space Mono',monospace">Clique sur un élément à gauche, puis son correspondant à droite</p>
      <div class="match-grid">
        <div><div class="match-col-lbl">Colonne A</div>${colAH}</div>
        <div><div class="match-col-lbl">Colonne B</div>${colBH}</div>
      </div>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineMatching('${safeId}','${escJs(JSON.stringify(c.answers||{}))}','${exId}','${lesId}','${modId}')">Vérifier les associations</button>`;
  }

  if (ex.type === 'completion') {
    let tpl = (c.template||'').replace(/\n/g,'<br>');
    (c.blanks||[]).forEach(b => {
      const w = Math.max(140, (b.placeholder||b.hint||'').length * 7);
      tpl = tpl.replace(b.id,
        `<span class="c-blank"><input id="cb-${safeId}-${b.id}" placeholder="${escHtml(b.placeholder||b.hint||'...')}" style="width:${w}px" title="${escHtml(b.hint||'')}"></span>`
      );
    });
    const fbOk = c.feedback_ok || '✓ Tous les blancs sont remplis — prompt complet !';
    const fbKo = c.feedback_ko || '';
    return `<div class="completion-box">${tpl}</div>
      <p style="font-size:11px;color:var(--muted);margin:10px 0 6px;font-family:'Space Mono',monospace">Remplis tous les blancs avec tes vraies informations</p>
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineCompletionFull('${safeId}',${(c.blanks||[]).length},'${escJs(fbOk)}','${escJs(fbKo)}','${exId}','${lesId}','${modId}')">Valider</button>`;
  }

  if (ex.type === 'beforeafter') {
    const pairs = (c.pairs||[]).map((p,i) =>
      `<div class="ba-pair">
        <div class="ba-pair-hdr">CAS ${i+1} — ${p.error_type||''}</div>
        <div class="ba-versions">
          <div class="ba-v" id="bav-${safeId}-${i}-0" onclick="baSelect('${safeId}',${i},0)">
            <div class="ba-v-lbl">VERSION A</div>
            <div class="ba-v-txt">${escHtml(p.before||'')}</div>
          </div>
          <div class="ba-v" id="bav-${safeId}-${i}-1" onclick="baSelect('${safeId}',${i},1)">
            <div class="ba-v-lbl">VERSION B</div>
            <div class="ba-v-txt">${escHtml(p.after||'')}</div>
          </div>
        </div>
        <div class="ex-fb-inline" id="bafb-${safeId}-${i}" style="display:none;margin:0 12px 12px"></div>
      </div>`
    ).join('');
    return `<p style="font-size:13px;color:#C8C8D8;margin-bottom:14px">Identifie la version améliorée (après) pour chaque cas :</p>
      ${pairs}
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineBeforeAfter('${safeId}',${(c.pairs||[]).length},'${exId}','${lesId}','${modId}')">Vérifier mes réponses</button>`;
  }

  if (ex.type === 'checklist') {
    const items = (c.items||[]).map(it =>
      `<div class="ck-item" id="cki-${safeId}-${it.id}" onclick="this.classList.toggle('ck-on');document.getElementById('ckbox-${safeId}-${it.id}').textContent=this.classList.contains('ck-on')?'✓':'○'">
        <span class="ck-box" id="ckbox-${safeId}-${it.id}">○</span>
        <span class="ck-lbl">${it.text}</span>
      </div>`
    ).join('');
    const thresholds = JSON.stringify(c.feedback_thresholds||[]).replace(/"/g,'&quot;');
    return `<p style="font-size:13px;color:#C8C8D8;margin-bottom:12px">${c.instruction||'Coche les éléments présents dans ta réponse :'}</p>
      ${items}
      <div class="ex-fb-inline" id="exfb-${safeId}"></div>
      <button class="ex-val-btn" onclick="inlineChecklist('${safeId}','${escJs(JSON.stringify(c.items||[]))}','${escJs(JSON.stringify(c.feedback_thresholds||[]))}','${exId}','${lesId}','${modId}')">Voir mon résultat</button>`;
  }

  return `<p style="color:var(--muted);font-size:13px">[Type ${ex.type} — rendu non disponible]</p>`;
}

// Helpers pour inline exercises
function escJs(s) { return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,'\\n').replace(/\r/g,''); }

function showInlineFb(id, ok, msg) {
  const el = document.getElementById('exfb-' + id);
  if (!el) return;
  el.className = 'ex-fb-inline show ' + (ok ? 'ok' : 'ko');
  el.innerHTML = `<strong>${ok ? '✓ ' : '✗ '}</strong>${msg}`;
}

// ── TrueFalse ──
window._tfAnswers = {};
function tfAnswer(btn, safeId, idx, correctAnswer, userAnswer, expl) {
  const key = safeId + '-' + idx;
  if (window._tfAnswers[key] !== undefined) return; // déjà répondu
  window._tfAnswers[key] = (userAnswer === correctAnswer);
  const item = document.getElementById('tfi-' + safeId + '-' + idx);
  item.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);
  const isOk = userAnswer === correctAnswer;
  btn.classList.add(isOk ? 'sel-ok' : 'sel-ko');
  if (expl) {
    const d = document.createElement('div');
    d.className = 'tf-expl';
    d.textContent = expl;
    item.appendChild(d);
  }
  // Compter combien ont répondu
  const total = document.querySelectorAll(`[id^="tfi-${safeId}-"]`).length;
  const answered = Object.keys(window._tfAnswers).filter(k => k.startsWith(safeId+'-')).length;
  if (answered >= total) {
    document.getElementById('tfval-' + safeId).style.display = 'inline-block';
  }
}

function tfValidate(safeId, exId, lesId, modId, thresholdsJson, total) {
  let thresholds;
  try { thresholds = JSON.parse(thresholdsJson); } catch(e) { thresholds = []; }
  const correct = Object.values(window._tfAnswers).filter(Boolean).length;
  let msg = `${correct}/${total} bonnes réponses.`;
  if (thresholds && thresholds.length) {
    const t = thresholds.find(t => correct >= t.min && correct <= t.max);
    if (t) msg += ' ' + t.message;
  }
  const ok = correct >= Math.ceil(total * 0.6);
  showInlineFb(safeId, ok, msg);
  document.getElementById('tfval-' + safeId).style.display = 'none';
  if (ok) markExDone(exId, lesId, modId);
}

// ── QCM Inline ──
function inlineQcm(el, safeId, correct, fbOption, fbKo, exId, lesId, modId) {
  const container = el.closest('.qcm-options');
  if (container && container.dataset.locked) return;
  if (container) container.dataset.locked = '1';
  container.querySelectorAll('.qcm-option').forEach(o => o.style.pointerEvents = 'none');
  if (correct) {
    el.classList.add('correct');
    showInlineFb(safeId, true, fbOption);
    markExDone(exId, lesId, modId);
  } else {
    el.classList.add('wrong');
    if (container) { delete container.dataset.locked; }
    container.querySelectorAll('.qcm-option').forEach(o => { if (o !== el) o.style.pointerEvents = ''; });
    // fbOption holds the per-option feedback if available, else falls back to global fbKo
    showInlineFb(safeId, false, fbOption || fbKo);
  }
}

// ── Multiselect ──
function inlineMultiselect(safeId, exId, lesId, modId, fbOk, fbKo, ...correctFlags) {
  const container = document.getElementById('ms-opts-' + safeId);
  const selected = [...container.querySelectorAll('.ms-sel')].map(el => {
    return parseInt(el.id.split('-').pop());
  });
  // correctFlags might come as array or spread — handle both
  const flags = Array.isArray(correctFlags[0]) ? correctFlags[0] : correctFlags;
  const correct = flags.every((f, i) => {
    const isSel = selected.includes(i);
    return (f && isSel) || (!f && !isSel);
  });
  showInlineFb(safeId, correct, correct ? fbOk : fbKo);
  if (correct) markExDone(exId, lesId, modId);
}

// ── Freetext Inline ──
function inlineFreetext(safeId, minLen, fbOk, fbKo, exId, lesId, modId) {
  const val = document.getElementById('ft-' + safeId).value.trim();
  const ok = val.length >= minLen;
  showInlineFb(safeId, ok, ok ? fbOk : `${fbKo} (minimum ${minLen} caractères)`);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Prompt Lab Inline ──
function copyInlinePrompt(promptId, btn) {
  const txt = document.getElementById(promptId).innerText;
  navigator.clipboard.writeText(txt).then(() => {
    btn.textContent = 'Copié !'; btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copier'; btn.classList.remove('copied'); }, 2000);
  });
}
function inlinePromptLab(safeId, minLen, feedback, exId, lesId, modId) {
  const val = document.getElementById('pl-' + safeId).value.trim();
  const ok = val.length >= minLen;
  showInlineFb(safeId, ok, ok ? feedback : `Colle une réponse plus complète (minimum ${minLen} caractères).`);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Ranking ──
function rankUpdateNumbers(listId) {
  const list = document.getElementById(listId);
  if (!list) return;
  [...list.querySelectorAll('.rank-item')].forEach((el, i) => {
    const numEl = el.querySelector('.rank-n');
    if (numEl) numEl.textContent = i + 1;
  });
}
window._rankDragSrc = null;
function rankDragStart(e, el) { window._rankDragSrc = el; e.dataTransfer.effectAllowed = 'move'; }
function rankDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; return false; }
function rankDrop(e, target, listId) {
  e.stopPropagation();
  if (window._rankDragSrc && window._rankDragSrc !== target) {
    const list = document.getElementById(listId);
    const items = [...list.querySelectorAll('.rank-item')];
    const srcIdx = items.indexOf(window._rankDragSrc);
    const tgtIdx = items.indexOf(target);
    if (tgtIdx > srcIdx) list.insertBefore(window._rankDragSrc, target.nextSibling);
    else list.insertBefore(window._rankDragSrc, target);
    rankUpdateNumbers(listId);
  }
  return false;
}
function inlineRanking(safeId, correctOrderJson, feedback, exId, lesId, modId) {
  let correctOrder;
  try { correctOrder = JSON.parse(correctOrderJson); } catch(e) { correctOrder = null; }
  const list = document.getElementById('rl-' + safeId);
  const current = [...list.querySelectorAll('.rank-item')].map(el => el.dataset.id);
  // Si pas de bon ordre défini (classement subjectif) → toujours valider
  const ok = !correctOrder || !Array.isArray(correctOrder) || correctOrder.length === 0
    ? true
    : JSON.stringify(current) === JSON.stringify(correctOrder);
  const msg = ok
    ? (feedback || '✓ Classement enregistré !')
    : (feedback || 'Pas tout à fait — réessaie.');
  showInlineFb(safeId, ok, msg);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Matching ──
window._matchSel = {};
window._matchDone = {};
function matchSelectA(safeId, aId) {
  if (window._matchDone[safeId+'-'+aId]) return;
  // Désélectionner les autres A
  document.querySelectorAll(`[id^="ma-${safeId}-"]`).forEach(el => el.classList.remove('m-sel'));
  window._matchSel[safeId] = aId;
  const el = document.getElementById(`ma-${safeId}-${aId}`);
  if (el) el.classList.add('m-sel');
}
function matchSelectB(safeId, bId) {
  const aId = window._matchSel[safeId];
  if (!aId) return;
  window._matchSel[safeId] = null;
  document.querySelectorAll(`[id^="ma-${safeId}-"]`).forEach(el => el.classList.remove('m-sel'));
  // Mark as done pair
  window._matchDone[safeId+'-'+aId] = bId;
  const aEl = document.getElementById(`ma-${safeId}-${aId}`);
  const bEl = document.getElementById(`mb-${safeId}-${bId}`);
  if (aEl) { aEl.classList.add('m-dis'); aEl.dataset.pairedWith = bId; }
  if (bEl) { bEl.classList.add('m-dis'); bEl.dataset.pairedWith = aId; }
}
function inlineMatching(safeId, answersJson, exId, lesId, modId) {
  let answers;
  try { answers = JSON.parse(answersJson); } catch(e) { answers = {}; }
  let correct = 0, total = Object.keys(answers).length;
  Object.entries(answers).forEach(([aId, expectedBId]) => {
    const actual = window._matchDone[safeId+'-'+aId];
    const aEl = document.getElementById(`ma-${safeId}-${aId}`);
    const bEl = document.getElementById(`mb-${safeId}-${expectedBId}`);
    if (actual === expectedBId) {
      correct++;
      if (aEl) aEl.classList.add('m-ok');
      if (bEl) bEl.classList.add('m-ok');
    } else {
      if (aEl) aEl.classList.add('m-ko');
      if (actual) { const bActual = document.getElementById(`mb-${safeId}-${actual}`); if (bActual) bActual.classList.add('m-ko'); }
    }
  });
  const ok = correct === total;
  showInlineFb(safeId, ok, ok ? `✓ Toutes les associations sont correctes !` : `${correct}/${total} correctes — réessaie.`);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Completion ──
function inlineCompletion(safeId, numBlanks, exId, lesId, modId) {
  inlineCompletionFull(safeId, numBlanks, '✓ Tous les blancs sont remplis — prompt complet !', '', exId, lesId, modId);
}
function inlineCompletionFull(safeId, numBlanks, fbOk, fbKo, exId, lesId, modId) {
  const inputs = document.querySelectorAll(`[id^="cb-${safeId}-"]`);
  let filled = 0;
  inputs.forEach(inp => { if (inp.value.trim().length >= 2) filled++; });
  const ok = filled >= numBlanks;
  const msg = ok
    ? (fbOk || '✓ Tous les blancs sont remplis — prompt complet !')
    : (fbKo || `Remplis encore ${numBlanks - filled} champ(s) pour valider.`);
  showInlineFb(safeId, ok, msg);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Before/After ──
window._baSel = {};
function baSelect(safeId, pairIdx, ver) {
  // ver 0 = avant (mauvais), ver 1 = après (bon)
  const key = `${safeId}-${pairIdx}`;
  if (window._baSel[key] !== undefined) return;
  window._baSel[key] = ver;
  const aEl = document.getElementById(`bav-${safeId}-${pairIdx}-0`);
  const bEl = document.getElementById(`bav-${safeId}-${pairIdx}-1`);
  const fbEl = document.getElementById(`bafb-${safeId}-${pairIdx}`);
  const isOk = ver === 1; // version B (après) est toujours la bonne
  if (aEl) aEl.style.pointerEvents = 'none';
  if (bEl) bEl.style.pointerEvents = 'none';
  document.getElementById(`bav-${safeId}-${pairIdx}-${ver}`).classList.add(isOk ? 'ba-ok' : 'ba-ko');
  if (fbEl) {
    fbEl.className = 'ex-fb-inline show ' + (isOk ? 'ok' : 'ko');
    fbEl.style.display = 'block';
    fbEl.innerHTML = isOk ? '✓ Correct — la version B est améliorée.' : '✗ Pas tout à fait — la version B est la version améliorée.';
  }
}
function inlineBeforeAfter(safeId, numPairs, exId, lesId, modId) {
  let correct = 0;
  for (let i = 0; i < numPairs; i++) {
    const sel = window._baSel[`${safeId}-${i}`];
    if (sel === 1) correct++;
  }
  const ok = correct === numPairs;
  showInlineFb(safeId, ok, ok ? `✓ Toutes les versions améliorées identifiées !` : `${correct}/${numPairs} correct${correct>1?'s':''}.`);
  if (ok) markExDone(exId, lesId, modId);
}

// ── Checklist ──
function inlineChecklist(safeId, itemsJson, thresholdsJson, exId, lesId, modId) {
  let items, thresholds;
  try { items = JSON.parse(itemsJson); } catch(e) { items = []; }
  try { thresholds = JSON.parse(thresholdsJson); } catch(e) { thresholds = []; }
  const checked = items.filter(it => {
    const el = document.getElementById(`cki-${safeId}-${it.id}`);
    return el && el.classList.contains('ck-on');
  }).length;
  const total = items.length;
  let msg = `${checked}/${total} éléments cochés.`;
  const t = thresholds.find(t => checked >= t.min && checked <= t.max);
  if (t) msg += ' ' + t.message;
  const ok = checked >= Math.ceil(total * 0.8);
  showInlineFb(safeId, ok, msg);
  if (ok) markExDone(exId, lesId, modId);
}

// ═══════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════
function renderSidebar() {
  const c = document.getElementById('sb-modules');
  c.innerHTML = '';
  MODULES.forEach(mod => {
    const doneCnt = mod.lessons.filter(l => isDone(l.id)).length;
    const pct = Math.round(doneCnt / mod.lessons.length * 100);
    const isOpen = S.open.includes(mod.id);
    const isCurMod = S.cur && S.cur.modId === mod.id;
    const div = document.createElement('div');
    div.className = `mod-item${isOpen?' open':''}${isCurMod?' active':''}`;

    const lessonsHTML = mod.lessons.map((l, lesIdx) => {
      const done = isDone(l.id);
      const active = S.cur && S.cur.lesId === l.id;
      const premLocked = mod.premium && S.plan === 'standard';
      const seqLocked = !premLocked && !isLessonAccessible(l.id, mod.id);
      const clickHandler = premLocked
        ? `window.open('${S.gumroadPremium}','_blank')`
        : `openLesson(${mod.id},'${l.id}')`;
      return `<div class="les-item${active?' active':''}${seqLocked?' les-seq-locked':''}" onclick="${clickHandler}" title="${seqLocked?'Termine la leçon précédente pour débloquer':''}">
        ${premLocked
          ? `<span class="les-lock">·</span>`
          : seqLocked
            ? `<span class="les-lock" style="opacity:.5">🔒</span>`
            : `<div class="les-check${done?' done':''}">${done?'✓':''}</div>`}
        <span class="les-name"${seqLocked?' style="opacity:.45"':''}>${l.title}</span>
        <span class="les-dur">${l.dur}</span>
      </div>`;
    }).join('');

    div.innerHTML = `
      <div class="mod-header" onclick="toggleMod(${mod.id})">
        <span class="mod-code">${mod.code}</span>
        <div class="mod-info">
          <div class="mod-name">${mod.title}</div>
          <div class="mod-sub">${mod.lessons.length} leçons · ${mod.dur}</div>
        </div>
        <span class="mod-pct${pct===100?' done':''}">${pct}%</span>
      </div>
      <div class="mod-lessons">${lessonsHTML}</div>`;

    c.appendChild(div);
  });
}

function toggleMod(id) {
  S.open = S.open.includes(id) ? S.open.filter(x => x !== id) : [...S.open, id];
  save(); renderSidebar();
}

// ═══════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════
const MOD_ICONS = ['01','02','03','04','05','06','07','08'];
const MOD_COLORS = ['#00E5FF','#7B5EA7','#1A8FFF','#00E5FF','#7B5EA7','#1A8FFF','#00E5FF','#1A8FFF'];

function renderHome() {

  S.cur = null;
  const done = totalDone();
  const pct = Math.round(done / TOTAL * 100);
  const circumference = 2 * Math.PI * 44;
  const offset = circumference - (pct / 100) * circumference;

  // Milestone strip
  const milestones = [
    { label:'Fondations IA', lessons:4 },
    { label:'Prompting Pro', lessons:7 },
    { label:'Productivité', lessons:13 },
    { label:'Contenu & Learn', lessons:17 },
    { label:'Business', lessons:22 },
    { label:'Expert IA', lessons:22 },
  ];
  const milestoneHTML = milestones.map(m => {
    const cls = done >= m.lessons ? 'done' : done >= m.lessons - 4 ? 'current' : '';
    return `<div class="milestone-step ${cls}">
      <div class="ms-num">${m.lessons} leçons</div>
      <div class="ms-label">${done >= m.lessons ? '✓ ' : ''}${m.label}</div>
    </div>`;
  }).join('');

  // Module cards
  const cards = MODULES.map((mod, i) => {
    const dc = mod.lessons.filter(l => isDone(l.id)).length;
    const mp = Math.round(dc / mod.lessons.length * 100);
    const locked = mod.premium && S.plan === 'standard';
    const color = MOD_COLORS[i];
    const onclick = locked
      ? `window.open('${S.gumroadPremium}','_blank')`
      : `openLesson(${mod.id},'${mod.lessons[0].id}')`;
    const statusIcon = mp === 100 ? '✓' : mp > 0 ? '▶' : '';
    return `<div class="mod-card" onclick="${onclick}" style="--mod-color:${color}">
      <div class="mc-accent" style="background:${color}"></div>
      <div class="mc-icon">${MOD_ICONS[i]}</div>
      <div class="mc-code" style="color:${color}">${mod.code}${locked?' · PREMIUM':''} ${statusIcon}</div>
      <div class="mc-title">${mod.title}</div>
      <div class="mc-meta">${mod.lessons.length} leçons · ${mod.dur}</div>
      <div class="mc-bar"><div class="mc-bar-fill" style="width:${mp}%;background:${color}"></div></div>
      <div class="mc-pct">${dc}/${mod.lessons.length} leçons terminées</div>
    </div>`;
  }).join('');

  // Streak / motivation
  const streakMsg = done === 0
    ? 'Commence par le Module 01 — 20 minutes suffisent.'
    : done < 4 ? `${done} leçon${done>1?'s':''} terminée${done>1?'s':''} — Tu es lancé !`
    : done < 13 ? `${done} leçons — Tu maîtrises les bases. Continue.`
    : done < 20 ? `${done} leçons terminées — Tu es dans le top des élèves actifs.`
    : `${done}/22 leçons — Niveau expert atteint.`;

  document.getElementById('main').innerHTML = `
    <div style="position:relative;z-index:1;">
    <div class="home-banner">
      <div class="home-banner-grid"></div>
      <div class="home-banner-content" style="display:flex;align-items:center;justify-content:space-between;gap:24px;">
        <div>
          <div class="home-banner-eyebrow">Espace membre · Nexum AI School</div>
          <h1 class="home-banner-title">Maîtrise Claude &<br><span>Bâtis ton Empire.</span></h1>
          <p class="home-banner-sub">8 modules · ${TOTAL} leçons · Accès à vie.<br>Chaque leçon = une compétence directement applicable dans ton business.</p>
        </div>
        <lottie-player src="bg-loop.json" background="transparent" speed="1" style="width:300px;height:300px;flex-shrink:0;margin-top:-20px" autoplay loop></lottie-player>
      </div>
    </div>

    <div class="progress-ring-wrap">
      <svg width="100" height="100" class="ring-svg" viewBox="0 0 100 100">
        <circle class="ring-bg" cx="50" cy="50" r="44"/>
        <circle class="ring-fill" cx="50" cy="50" r="44"
          stroke="url(#ringGrad)"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"/>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00E5FF"/>
            <stop offset="100%" stop-color="#1A8FFF"/>
          </linearGradient>
        </defs>
        <text x="50" y="48" class="ring-label" font-size="16" fill="#fff" font-weight="800">${pct}%</text>
        <text x="50" y="63" class="ring-label" font-size="9" fill="#6B6B80">COMPLET</text>
      </svg>
      <div class="ring-info">
        <div class="ring-info-title" style="display:flex;align-items:center;gap:8px;"><lottie-player src="brain.json" background="transparent" speed="1" style="width:32px;height:32px;flex-shrink:0" autoplay loop></lottie-player>${done} leçon${done > 1 ? 's' : ''} terminée${done > 1 ? 's' : ''} sur ${TOTAL}</div>
        <div class="ring-info-sub">${streakMsg}</div>
        <div class="ring-badges">
          <span class="ring-badge ring-badge-cyan">${TOTAL - done} restantes</span>
          <span class="ring-badge ring-badge-pink">${S.plan === 'premium' ? 'Premium' : 'Standard'}</span>
          ${done >= 4 ? '<span class="ring-badge ring-badge-green">✓ M01 débloqué</span>' : ''}
        </div>
      </div>
      <lottie-player src="alphaeon.json" background="transparent" speed="1" style="width:160px;height:160px;flex-shrink:0;margin-left:auto;" autoplay loop></lottie-player>
    </div>

    <div class="milestone-strip">${milestoneHTML}</div>

    <div class="stats-row">
      <div class="stat-card"><div class="stat-val">${done}</div><div class="stat-lbl">Leçons terminées</div></div>
      <div class="stat-card"><div class="stat-val">${TOTAL - done}</div><div class="stat-lbl">Leçons restantes</div></div>
      <div class="stat-card"><div class="stat-val">${Math.max(0, MODULES.filter(m => m.lessons.every(l => isDone(l))).length)}</div><div class="stat-lbl">Modules complets</div></div>
      <div class="stat-card"><div class="stat-val">${pct}%</div><div class="stat-lbl">Progression globale</div></div>
    </div>

    <div class="section-title">Mes Modules</div>
    <div class="mods-grid">${cards}</div>
    </div>`;

  updateProgressBar();
  renderSidebar();
}

// ═══════════════════════════════════════════════
// BIBLIOTHÈQUE DE PROMPTS (Premium)
// ═══════════════════════════════════════════════
const PROMPT_LIBRARY = [
  // ── PROMPTING & STRATÉGIE ──
  { cat:"Prompting & Stratégie", name:"Construire un prompt RCTFE complet", tag:"M02",
    content:`[RÔLE] : Tu es [expert précis avec expérience/spécialité].

[CONTEXTE] : Je suis [activité + positionnement]. Ma cible : [qui + problème]. Ma situation actuelle : [contexte spécifique à cette tâche].

[TÂCHE] : [verbe d'action précis + objet + détails]. Je veux obtenir [résultat attendu].

[FORMAT] :
- Longueur : [X mots / X points / X paragraphes]
- Structure : [liste / tableau / sections titrées / texte continu]
- Ton : [direct / professionnel / conversationnel / inspirant]
- À éviter : [ce que tu ne veux pas]

[EXEMPLE] : Voici un exemple du type de réponse que j'attends : [EXEMPLE ou CONTRE-EXEMPLE]` },

  { cat:"Prompting & Stratégie", name:"Optimiser un prompt existant (méta-prompt)", tag:"M08",
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
- 1-2 variantes pour des cas d'usage légèrement différents` },

  { cat:"Prompting & Stratégie", name:"Brainstorm structuré — 10 idées actionnables", tag:"M01",
    content:`Tu es un consultant stratégique expert en [DOMAINE].

Génère 10 idées actionnables pour [OBJECTIF].

Contexte : [QUI TU ES + TA SITUATION + TES RESSOURCES]
Contraintes : [BUDGET / TEMPS / ÉQUIPE / TECHNIQUE]

Pour chaque idée :
1. Nom de l'idée (5 mots max)
2. Description en 2 phrases
3. Ressources nécessaires
4. Temps pour voir un résultat
5. Niveau de difficulté (1-5)

Trie par rapport effort/impact. Les 3 premières doivent être faisables cette semaine.` },

  // ── EMAILS & COMMUNICATION ──
  { cat:"Emails & Communication", name:"Email professionnel universel", tag:"M03",
    content:`Tu es un expert en communication professionnelle écrite, reconnu pour des emails concis, directs, qui obtiennent des réponses.

Rédige un email [TYPE : prospection / relance / proposition / refus / remerciement / réclamation].

Contexte :
- Expéditeur : [QUI TU ES — activité, positionnement]
- Destinataire : [QUI IL EST — fonction, entreprise, relation avec toi]
- Historique : [CE QUI S'EST PASSÉ AVANT cet email]
- Objectif : [CE QUE TU VEUX QU'IL SE PASSE après lecture]

Format :
- Objet : percutant, 6-8 mots max, pas de spam words
- Corps : 80-120 mots maximum
- CTA : 1 seul, clair, avec deadline si pertinent
- Ton : [professionnel / direct / chaleureux / ferme]
- Pas d'intro générique du type "J'espère que vous allez bien"` },

  { cat:"Emails & Communication", name:"Améliorer un brouillon d'email", tag:"M03",
    content:`Voici un brouillon d'email que j'ai écrit rapidement. Améliore-le pour qu'il soit professionnel, direct, et efficace.

MON BROUILLON :
[COLLE TON BROUILLON ICI]

Objectif de cet email : [CE QUE TU VEUX QU'IL SE PASSE]
Relation avec le destinataire : [PREMIÈRE PRISE DE CONTACT / CLIENT EXISTANT / PARTENAIRE]

Consignes :
- Garde le sens et les informations clés
- Supprime les formules vides et les tournures molles
- Ajoute un objet percutant si je n'en ai pas
- Maximum 120 mots corps de l'email` },

  { cat:"Emails & Communication", name:"Analyser un document / contrat", tag:"M03",
    content:`Voici [un contrat / rapport / article / email long] que je dois analyser :

[COLLE LE DOCUMENT ICI]

Analyse-le selon ces 4 axes :

1. RÉSUMÉ EXÉCUTIF : Les 3-5 points les plus importants (format bullet points)
2. DÉCISIONS À PRENDRE : Qu'est-ce que ce document implique pour moi concrètement ?
3. POINTS D'ATTENTION / RISQUES : Ce qui mérite d'être creusé ou négocié
4. QUESTIONS À POSER : Ce qui n'est pas clair ou qui manque

Format : sections séparées, langage direct, pas de paraphrase — donne-moi ce qui est actionnable.` },

  // ── CONTENU & MARKETING ──
  { cat:"Contenu & Marketing", name:"Extraire ton ADN stylistique", tag:"M04",
    content:`Voici 3 exemples de textes que j'ai écrits moi-même :

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

Génère ensuite une "charte de voix" en 10 règles que tu utiliseras pour écrire comme moi.` },

  { cat:"Contenu & Marketing", name:"Générer 10 posts LinkedIn dans mon style", tag:"M04",
    content:`CHARTE DE VOIX :
[COLLE TA CHARTE DE VOIX ICI — ou décris ton style en 5-6 points]

Génère 10 idées de posts LinkedIn sur le thème [TON THÈME / EXPERTISE].

Pour chacun :
- Hook (1ère ligne accrocheuse — ce qui donne envie de lire la suite)
- Corps du post (structure aérée, 150-200 mots)
- CTA final (question ou invitation à commenter)

Ton : [décris ton ton — direct, inspirant, éducatif, storytelling...]
Format : LinkedIn (pas de hashtags en masse — max 3 à la fin si pertinents)
À éviter : les clichés, le motivational fluff, les phrases génériques sur "l'IA va changer le monde"` },

  { cat:"Contenu & Marketing", name:"Script vidéo courte (TikTok / Reels)", tag:"M04",
    content:`Tu es un expert en scripts de vidéos courtes virales pour [TikTok / Instagram Reels / YouTube Shorts].

Sujet de la vidéo : [TON SUJET EN 1 PHRASE]
Mon audience cible : [QUI REGARDE MES VIDÉOS]
Durée cible : [30 / 45 / 60 secondes]
Mon style habituel : [DÉCRIS TON STYLE — éducatif, humour, storytelling, démonstration...]

Génère un script complet avec :
- Accroche (0-3 secondes) : la phrase qui empêche de scroller
- Corps : points clés chronométrés
- Fin/CTA : ce que doit faire le spectateur
- Indications visuelles : ce qu'on voit à l'écran
- Textes à afficher : overlays / captions` },

  // ── BUSINESS & OFFRE ──
  { cat:"Business & Offre", name:"Analyse concurrentielle approfondie", tag:"M07",
    content:`Tu es un analyste stratégique senior. Je veux lancer [TON PROJET / OFFRE] sur le marché [TON SECTEUR / NICHE].

Mes concurrents directs : [LISTE 3-5 CONCURRENTS]

Pour chaque concurrent :
1. Leur positionnement prix et offre principale
2. Leur cible client réelle
3. Leur promesse principale (résultat vendu)
4. Leur point fort évident
5. Leur point faible / angle mort / client insatisfait

Analyse globale du marché :
- Tendances qui jouent en ma faveur
- Tendances qui me menacent
- Le segment de clientèle le moins bien servi aujourd'hui

Conclusion : 3 angles de positionnement différenciants possibles pour moi.` },

  { cat:"Business & Offre", name:"Construire une offre irrésistible", tag:"M07",
    content:`Tu es un expert en construction d'offres commerciales à haute valeur perçue.

Mon activité : [CE QUE TU FAIS]
Ma cible : [QUI TU CIBLES PRÉCISÉMENT]
Ce que je vends actuellement : [TON OFFRE ACTUELLE]
Mon prix envisagé : [PRIX]

Aide-moi à construire les 5 composants :
1. LA PROMESSE PRINCIPALE — résultat concret en 1 phrase (pas de features, du résultat)
2. LE MÉCANISME UNIQUE — comment j'obtiens ce résultat différemment des autres
3. LES PREUVES — quels éléments de preuve je peux utiliser (résultats, témoignages, données)
4. L'INVERSION DU RISQUE — quelle garantie je peux offrir sans me mettre en danger
5. L'URGENCE RÉELLE — pourquoi agir maintenant (raison genuinement logique)

Finalement, rédige la promesse principale en 2 versions : une courte (10 mots) et une longue (2 phrases).` },

  { cat:"Business & Offre", name:"Portrait robot du client idéal", tag:"M07",
    content:`Je veux créer le portrait psychologique précis de mon client idéal pour [TON OFFRE].

Ce que je sais déjà : [CE QUE TU SAIS — démographie, secteur, situation]

Construis un portrait complet :
1. Sa journée type (frustrations quotidiennes concrètes)
2. Son problème principal et comment il cherche des solutions aujourd'hui
3. Ce qui l'empêche d'agir (obstacles psychologiques, budget, temps, compétences)
4. Ce dont il a vraiment besoin vs ce qu'il dit vouloir
5. Les mots exacts qu'il utilise pour décrire son problème
6. Ce qui le ferait passer à l'action immédiatement

Termine avec : les 5 phrases de copywriting qui parleront le plus à ce client.` },

  { cat:"Business & Offre", name:"Page de vente — structure complète", tag:"M07",
    content:`Tu es un copywriter expert en pages de vente à haute conversion pour [TYPE DE PRODUIT].

MON OFFRE :
- Produit/service : [CE QUE TU VENDS]
- Prix : [PRIX]
- Cible : [QUI TU CIBLES]
- Résultat promis : [CE QUE LE CLIENT OBTIENT]
- Mécanisme unique : [COMMENT TU OBTIENS CE RÉSULTAT]

Génère la structure complète d'une page de vente avec :
1. Headline principal (bénéfice + audience + différenciation)
2. Sous-titre (développe et crédibilise)
3. Section douleur (3-4 bullets — ce que la cible vit en ce moment)
4. Promesse de transformation (avant → après)
5. Ce qui est inclus (bullets de valeur, pas de features)
6. Garantie et inversion du risque
7. FAQ — 5 objections courantes avec réponses
8. CTA final (bouton + urgence)` },

  // ── PRODUCTIVITÉ & ORGANISATION ──
  { cat:"Productivité & Organisation", name:"Planification hebdomadaire optimale", tag:"M03",
    content:`Je dois planifier ma semaine. Aide-moi à prioriser.

CONTEXTE :
- Mon activité principale : [CE QUE TU FAIS]
- Mes objectifs du mois : [3 OBJECTIFS]
- Temps disponible : [HEURES PAR JOUR ou CRÉNEAUX DISPONIBLES]

MA LISTE DE TÂCHES DE LA SEMAINE :
[LISTE TOUTES TES TÂCHES — même en vrac, même incomplètes]

Génère :
1. Les 3 priorités non-négociables (celles qui font avancer les objectifs du mois)
2. Les tâches à faire en batch (celles du même type à regrouper)
3. Les tâches à déléguer ou éliminer
4. Un agenda journalier suggéré (lundi → vendredi)
5. Le risque principal qui pourrait faire rater la semaine` },

  { cat:"Productivité & Organisation", name:"Résoudre un problème complexe — step by step", tag:"M01",
    content:`Je fais face à un problème complexe et j'ai besoin d'une analyse structurée.

MON PROBLÈME :
[DÉCRIS LE PROBLÈME EN DÉTAIL — contexte, symptômes, ce que tu as déjà essayé]

Ce que je veux obtenir : [RÉSULTAT IDÉAL]
Mes contraintes : [BUDGET / TEMPS / RESSOURCES / CONTRAINTES TECHNIQUES]

Analyse en 5 étapes :
1. Reformulation du vrai problème (pas les symptômes, la cause racine)
2. Les 3 approches possibles pour le résoudre (avec avantages/inconvénients)
3. L'approche recommandée et pourquoi
4. Les 5 premières actions concrètes (dans l'ordre)
5. Les signaux qui indiqueront que tu es sur la bonne voie` },

  // ── SYSTEM PROMPTS & AGENTS ──
  { cat:"System Prompts & Agents", name:"Créer son assistant IA personnalisé", tag:"M08",
    content:`[NOM DE L'ASSISTANT]

Tu es [NOM], l'assistant IA de [NOM DE L'ENTREPRISE / ACTIVITÉ]. Tu aides [QUI] à [FAIRE QUOI].

CONTEXTE DE L'ACTIVITÉ :
- Ce que je fais : [ACTIVITÉ EN 2 PHRASES]
- Mes clients cibles : [QUI SONT-ILS]
- Mes offres : [PRODUITS / SERVICES + PRIX]
- Mon positionnement : [CE QUI ME DIFFÉRENCIE]

TES CAPACITÉS :
- [TÂCHE 1 que l'assistant peut faire]
- [TÂCHE 2]
- [TÂCHE 3]
- [TÂCHE 4]

TON ET STYLE :
- Ton : [professionnel / direct / chaleureux / expert]
- Longueur des réponses : [concis / détaillé selon la question]
- Ce que tu dois toujours faire : [COMPORTEMENT ATTENDU]

TES LIMITES :
- Ne jamais inventer de chiffres sans les avoir reçus de l'utilisateur
- Ne pas prendre de décisions à la place de l'utilisateur — proposer des options
- Toujours demander les infos manquantes avant de générer` },

  { cat:"System Prompts & Agents", name:"Concevoir l'architecture d'un agent IA", tag:"M08",
    content:`Je veux créer un agent IA pour mon business. Aide-moi à concevoir son architecture.

Mon activité : [CE QUE TU FAIS]
La tâche à automatiser : [DÉCRIS LA TÂCHE EN DÉTAIL — fréquence, inputs, outputs attendus]

Conçois :
1. L'objectif de l'agent (1 phrase)
2. Le flux de travail étape par étape
3. Les outils nécessaires (recherche web / code / API / envoi email / lecture fichiers)
4. Les points de décision (où l'agent doit choisir entre plusieurs options)
5. Les erreurs possibles et comment les gérer
6. Les outils no-code pour implémenter ça (Make.com, n8n, Relevance AI, Zapier)
7. La complexité de mise en place : 1 (simple) à 5 (expert)
8. La première version MVP à construire en moins d'une journée` },

  { cat:"System Prompts & Agents", name:"Positionnement carrière dans l'économie IA", tag:"M08",
    content:`Tu es un conseiller en stratégie de carrière spécialisé dans l'impact de l'IA sur les métiers.

Mon profil :
- Compétences actuelles : [LISTE TES COMPÉTENCES CLÉ]
- Expérience : [TON BACKGROUND EN 3 PHRASES]
- Ce que j'aime faire : [TES ACTIVITÉS PRÉFÉRÉES]
- Ce que je déteste faire : [CE QUE TU VEUX ARRÊTER]
- Ma situation dans 5 ans idéale : [TON OBJECTIF]

Analyse :
1. Quelles parties de mon travail vont être commoditisées par l'IA d'ici 2027 ?
2. Quelles sont mes compétences qui deviennent PLUS précieuses avec l'IA ?
3. Quel positionnement me corresponds le mieux (Expert-Amplificateur / Orchestrateur IA / Créateur de Confiance) ?
4. Les 3 compétences à développer en priorité cette année
5. La première action concrète à faire cette semaine` },

  // ── APPRENTISSAGE & RECHERCHE ──
  { cat:"Apprentissage & Recherche", name:"Apprendre un sujet complexe en 30 min", tag:"M05",
    content:`Tu es mon tuteur personnel expert en [DOMAINE À APPRENDRE].

Je suis débutant / intermédiaire / avancé sur ce sujet. [CHOISIS]
Ce que je sais déjà : [CE QUE TU MAÎTRISES DÉJÀ]
Pourquoi j'apprends ça : [TON OBJECTIF CONCRET]
Temps disponible : 30 minutes

Crée un plan d'apprentissage structuré :
1. Les 3 concepts fondamentaux à maîtriser en premier
2. Une explication simple de chaque concept (analogie avec quelque chose que je connais)
3. L'erreur commune que font les débutants sur ce sujet
4. Les 2-3 ressources les plus efficaces pour aller plus loin
5. Un mini-exercice pratique pour tester ma compréhension maintenant

Commence par expliquer le concept le plus important — utilise des exemples concrets de mon domaine ([MON ACTIVITÉ]).` },

  { cat:"Apprentissage & Recherche", name:"Analyse critique d'une idée ou décision", tag:"M05",
    content:`Je vais te présenter une idée ou décision importante. Joue l'avocat du diable.

MON IDÉE / DÉCISION :
[DÉCRIS TON IDÉE EN DÉTAIL — contexte, objectif, ce que tu veux faire]

Analyse en 4 angles :
1. FORCES : ce qui est solide et prometteur dans cette idée
2. FAIBLESSES : ce qui manque, ce qui est risqué ou naïf
3. CE QUE J'AI PEUT-ÊTRE MAL ÉVALUÉ : les angles morts, les hypothèses implicites que je n'ai pas remises en question
4. CE QUE FERAIT UN CONCURRENT INTELLIGENT EN VOYANT CETTE IDÉE

Ne sois pas complaisant. L'objectif est d'identifier les vraies failles avant de les subir dans la réalité.

Termine avec : les 3 questions que je dois absolument répondre avant d'aller plus loin.` },

  { cat:"Apprentissage & Recherche", name:"Synthèse de veille concurrentielle", tag:"M05",
    content:`Tu es mon analyste de veille. Voici des informations sur mon secteur que j'ai collectées cette semaine :

MES SOURCES / INFORMATIONS :
[COLLE ICI : articles, LinkedIn posts, nouvelles, changements de concurrents, etc.]

MON ACTIVITÉ : [CE QUE TU FAIS]
MES CONCURRENTS PRINCIPAUX : [LISTE]

Génère une synthèse structurée :
1. LES 3 SIGNAUX LES PLUS IMPORTANTS cette semaine (ce qui change vraiment)
2. CE QUI MENACE MON BUSINESS dans ces signaux
3. CE QUI EST UNE OPPORTUNITÉ à saisir
4. CE QUE FONT MES CONCURRENTS que je devrais surveiller de près
5. MES 2 ACTIONS PRIORITAIRES suite à cette veille` },

  // ── FREELANCE & CLIENT ──
  { cat:"Freelance & Client", name:"Proposition commerciale percutante", tag:"M07",
    content:`Tu es un expert en rédaction de propositions commerciales qui convertissent.

MON CONTEXTE :
- Mon activité : [CE QUE TU FAIS]
- Le prospect : [QUI IL EST — secteur, taille, situation]
- Son problème : [CE QUE J'AI COMPRIS DE SON PROBLÈME]
- Ce que je propose : [TA SOLUTION]
- Mon prix : [BUDGET / TARIF]

Rédige une proposition commerciale complète :
1. RÉSUMÉ EXÉCUTIF (3 phrases) — le problème, ma solution, le résultat attendu
2. ANALYSE DE SA SITUATION — montre que je comprends vraiment son problème
3. MA SOLUTION — ce que je propose concrètement, étape par étape
4. LIVRABLES — ce qu'il reçoit exactement
5. INVESTISSEMENT — prix présenté en valeur (pas en coût)
6. PROCHAINES ÉTAPES — ce qui se passe si on dit oui

Ton : professionnel mais direct. Pas de jargon consultant. Pas de phrases vides.` },

  { cat:"Freelance & Client", name:"Gérer un client difficile / réclamation", tag:"M03",
    content:`Un client est mécontent et je dois gérer la situation. Aide-moi à répondre.

LA SITUATION :
[DÉCRIS CE QUI S'EST PASSÉ — contexte, ce que le client dit, ce qui a causé le problème]

CE QUE JE PENSE RÉELLEMENT :
[TON POINT DE VUE HONNÊTE — est-ce ta faute, la leur, partiellement les deux ?]

CE QUE JE VEUX OBTENIR EN FIN DE COMPTE :
[RÉSOUDRE ET GARDER LE CLIENT / PROPOSER UN REMBOURSEMENT PARTIEL / AUTRE]

Génère :
1. Une réponse email pour désamorcer la situation (ton : calme, professionnel, solution-oriented)
2. La concession minimale raisonnable à proposer (si tu as une part de responsabilité)
3. La phrase exacte à dire / écrire si le client continue à être agressif
4. Comment éviter que ça se reproduise (contrat, process, communication)` },

  { cat:"Freelance & Client", name:"Augmenter ses tarifs — argumentaire", tag:"M07",
    content:`Je veux augmenter mes tarifs. Aide-moi à préparer cet argumentaire.

MON CONTEXTE :
- Ce que je fais : [TON ACTIVITÉ]
- Mes tarifs actuels : [PRIX ACTUEL]
- Mes nouveaux tarifs envisagés : [NOUVEAU PRIX]
- Depuis combien de temps je travaille à ce tarif : [DURÉE]
- Mes clients concernés : [TYPE DE CLIENTS — anciens / nouveaux / les deux]

Génère :
1. L'argumentaire de valeur pour justifier la hausse (pas "mes coûts ont augmenté" — mais la valeur que j'apporte)
2. L'email d'annonce pour mes clients existants (ton : confiant, non-défensif)
3. Les 3 objections probables et comment y répondre
4. La stratégie : augmenter pour tout le monde en même temps ou par vague ?
5. Comment positionner le nouveau tarif dans mes nouvelles conversations commerciales` },

  { cat:"Freelance & Client", name:"Créer une séquence email de nurturing (7 jours)", tag:"M04",
    content:`Tu es un expert en email marketing et en nurturing de prospects.

MON ACTIVITÉ : [CE QUE TU FAIS]
MA CIBLE : [QUI TU VISES — situation, problème, objectif]
MON OFFRE PRINCIPALE : [CE QUE TU VENDS + PRIX]
CANAL D'ENTRÉE : [Comment ils arrivent dans la séquence — lead magnet, inscription, etc.]

Crée une séquence de 7 emails sur 7 jours :
- J0 : Email de bienvenue + promesse de la séquence
- J1 : Contenu de valeur (éduque, ne vend pas)
- J2 : Histoire / case study (résultat d'un client ou ta propre transformation)
- J3 : Contenu de valeur (résout un problème concret)
- J4 : Contenu de valeur + première mention douce de l'offre
- J6 : Email de vente directe
- J7 : Email de dernière chance (urgence réelle)

Pour chaque email : objet + corps (150-200 mots) + CTA.` }
];

window._plibContents = {};

function renderPromptLibrary() {
  document.getElementById('main').scrollTop = 0;
  window.scrollTo(0, 0);
  window._plibContents = {};

  const cats = [...new Set(PROMPT_LIBRARY.map(p => p.cat))];

  let html = `
    <div class="breadcrumb">
      <a onclick="renderHome()">Accueil</a> ›
      <span>Bibliothèque de Prompts</span>
    </div>
    <div class="plib-header">
      <div class="plib-badge">Premium · Accès exclusif</div>
      <h1 class="plib-title">Bibliothèque de <span>Prompts</span></h1>
      <p class="plib-sub">${PROMPT_LIBRARY.length} prompts prêts à l'emploi, organisés par catégorie. Clique sur "Copier" et colle directement dans Claude.</p>
    </div>`;

  cats.forEach(cat => {
    const prompts = PROMPT_LIBRARY.filter(p => p.cat === cat);
    html += `
    <div class="plib-section">
      <div class="plib-section-title">
        ${cat}
        <span class="plib-count">${prompts.length} prompts</span>
      </div>
      <div class="plib-grid">
        ${prompts.map((p, i) => {
          const uid = `plib-${cat.replace(/\s/g,'-')}-${i}`;
          window._plibContents[uid] = p.content;
          const preview = p.content.slice(0, 160).replace(/\n/g,' ').trim() + '…';
          return `<div class="plib-card" id="${uid}">
            <div class="plib-card-header">
              <div class="plib-card-name">${p.name}</div>
              <span class="plib-card-tag">${p.tag}</span>
            </div>
            <div class="plib-card-preview">${preview}</div>
            <div class="plib-card-footer">
              <button class="plib-copy-btn" onclick="plibCopy(this, '${uid}')">Copier le prompt</button>
              <button class="plib-expand-btn" onclick="plibExpand('${uid}')">Voir complet ↓</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
  });

  html += `<div style="height:48px"></div>`;
  document.getElementById('main').innerHTML = html;
}

function plibCopy(btn, uid) {
  const content = window._plibContents[uid];
  navigator.clipboard.writeText(content).then(() => {
    btn.textContent = '✓ Copié !';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copier le prompt'; btn.classList.remove('copied'); }, 2000);
  }).catch(() => {
    btn.textContent = 'Ctrl+C pour copier';
    setTimeout(() => { btn.textContent = 'Copier le prompt'; }, 2000);
  });
}

function plibExpand(uid) {
  const content = window._plibContents[uid];
  const card = document.getElementById(uid);
  const preview = card.querySelector('.plib-card-preview');
  const btn = card.querySelector('.plib-expand-btn');
  const isExpanded = card.classList.contains('plib-expanded');
  if (isExpanded) {
    card.classList.remove('plib-expanded');
    preview.textContent = content.slice(0, 160).replace(/\n/g,' ').trim() + '…';
    btn.textContent = 'Voir complet ↓';
  } else {
    card.classList.add('plib-expanded');
    preview.textContent = content;
    btn.textContent = 'Réduire ↑';
  }
}

// ═══════════════════════════════════════════════
// LESSON
// ═══════════════════════════════════════════════
function openLesson(modId, lesId) {

  const mod = MODULES.find(m => m.id === modId);
  if (!mod) return;
  const les = mod.lessons.find(l => l.id === lesId);
  if (!les) return;

  // Vérifier le verrou séquentiel (admins exempt)
  if (!isLessonAccessible(lesId, modId)) {
    const mod2 = MODULES.find(m => m.id === modId);
    const idx = mod2.lessons.findIndex(l => l.id === lesId);
    const prev = mod2.lessons[idx - 1];
    showToastApp(`🔒 Termine d'abord "${prev?.title || 'la leçon précédente'}" avec 50% de bonnes réponses.`);
    return;
  }

  S.cur = { modId, lesId };
  S.qcmSel = null;
  if (!S.open.includes(modId)) { S.open.push(modId); save(); }

  const locked = mod.premium && S.plan === 'standard';
  const content = getLessonContent(lesId);

  // Next lesson
  const allLes = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, modId: m.id })));
  const idx = allLes.findIndex(l => l.id === lesId);
  const next = allLes[idx + 1];

  // Progression dans le module
  const modLesIdx = mod.lessons.findIndex(l => l.id === lesId);
  const modPct = Math.round((modLesIdx + 1) / mod.lessons.length * 100);
  const modColor = MOD_COLORS[mod.id - 1];
  const modIcon = MOD_ICONS[mod.id - 1];

  let html = `
    <div class="les-progress-bar"><div class="les-progress-fill" style="width:${modPct}%;background:linear-gradient(90deg,${modColor},var(--pink))"></div></div>
    <div class="breadcrumb">
      <a onclick="renderHome()">Accueil</a> ›
      <a onclick="openLesson(${modId},'${mod.lessons[0].id}')">${mod.code} — ${mod.title}</a> ›
      <span>${lesId}</span>
    </div>`;

  if (locked) {
    html += `<div class="lock-screen">
      <div class="lock-icon">◆</div>
      <div class="lock-title">Module Premium</div>
      <div class="lock-sub" style="text-align:left;max-width:480px;margin:0 auto">
        <p style="margin-bottom:14px;color:var(--muted);text-align:center">Ce module est réservé aux membres Premium.</p>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px">
          <div style="display:flex;align-items:flex-start;gap:10px"><span style="color:var(--pink);font-size:16px;margin-top:2px">✦</span><span><strong>${mod.title}</strong> — 3 leçons sur les techniques avancées : system prompts, agents IA, et positionnement carrière</span></div>
          <div style="display:flex;align-items:flex-start;gap:10px"><span style="color:var(--pink);font-size:16px;margin-top:2px">✦</span><span><strong>Accès Discord #vip-ai-school</strong> — salon exclusif Premium pour poser tes questions avancées</span></div>
          <div style="display:flex;align-items:flex-start;gap:10px"><span style="color:var(--pink);font-size:16px;margin-top:2px">✦</span><span><strong>Bibliothèque de 25 prompts métier</strong> — prompts prêts à l'emploi (emails, offres, contenu, agents IA...) disponibles dans ton espace Premium</span></div>
        </div>
      </div>
      <a href="${S.gumroadPremium}" target="_blank"><button class="btn btn-pink" style="margin-top:4px;padding:14px 32px;font-size:15px">Passer Premium — 197€ →</button></a>
      <p style="margin-top:12px;font-size:12px;color:var(--muted)">Accès à vie · Paiement sécurisé via Gumroad</p>
    </div>`;
  } else {
    // Header
    html += `<div class="les-header">
      <div class="les-tags">
        <span class="tag tag-mod" style="color:${modColor};border-color:${modColor}30;background:${modColor}15">${modIcon} ${mod.code}</span>
        <span class="tag tag-dur">${les.dur}</span>
        <span class="tag" style="background:rgba(255,255,255,.04);color:var(--muted);border:1px solid var(--border)">${modLesIdx+1} / ${mod.lessons.length}</span>
        ${!isDone(lesId) ? '' : '<span class="tag" style="background:rgba(0,229,160,.1);color:var(--success);border:1px solid rgba(0,229,160,.25)">✓ Terminée</span>'}
      </div>
      <h1 class="les-title-big">${les.title}</h1>
      <p class="les-intro">${content.intro}</p>
    </div>
    ${content.objective ? `<div class="objective-box"><div class="obj-inner"><div class="obj-label">Objectif</div><div class="obj-text">${content.objective}</div></div></div>` : ''}
    <div class="divider"></div>`;

    // Content blocks
    content.blocks.forEach((b, i) => {
      html += renderBlock(b, i);
    });

    // ── Exercices ARIA Runner ──
    const hasInlineEx = (LESSON_EXERCISES[lesId] || []).length > 0;

    if (hasInlineEx) {
      const exCount = (LESSON_EXERCISES[lesId] || []).length;
      html += `<div style="margin-top:32px;padding:24px;background:linear-gradient(135deg,rgba(0,229,255,.05),rgba(26,143,255,.05));border:1px solid rgba(0,229,255,.2);border-radius:12px;text-align:center">
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:18px;margin-bottom:8px">Exercices pratiques avec ARIA</div>
        <div style="font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.5">${exCount} exercices interactifs pour consolider les acquis de cette leçon.<br>ARIA te guidera pas à pas.</div>
        <button onclick="openAriaRunner(${modId},'${lesId}')" style="padding:13px 32px;background:linear-gradient(135deg,var(--accent),rgba(0,229,255,.7));color:#000;border:none;border-radius:8px;cursor:pointer;font-family:'Space Mono',monospace;font-size:13px;font-weight:700;letter-spacing:.07em;transition:all .15s" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
          Lancer les exercices →
        </button>
      </div>`;

      // Bouton retour
      html += `<div class="btn-row" style="margin:24px 0">
        <button class="btn btn-secondary" onclick="renderHome()">← Retour accueil</button>
      </div>`;

      if (next) {
        html += `<div class="next-card" id="next-card" onclick="openLesson(${next.modId},'${next.id}')" style="display:${isDone(lesId)?'flex':'none'}">
          <div>
            <div class="next-label">Leçon suivante débloquée ✓</div>
            <div class="next-title">${next.title}</div>
          </div>
          <div class="next-arrow">→</div>
        </div>`;
      } else if (isDone(lesId)) {
        html += `<div style="text-align:center;padding:28px 0;color:var(--success);font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.08em">✓ MODULE TERMINÉ</div>`;
      }

    } else {
      // Système exercice unique (page séparée) — utilisé pour M03 à M08
      if (isDone(lesId)) {
        html += `<button class="btn-exercise-done" onclick="startExerciseTransition(${modId},'${lesId}')">✓ Exercice validé — Revoir l'exercice</button>`;
      } else if (getExerciseData(lesId)) {
        html += `<button class="btn-start-exercise" onclick="startExerciseTransition(${modId},'${lesId}')">
          Je suis prêt — Passer à l'exercice →
        </button>`;
      } else {
        html += `<button class="btn-start-exercise" onclick="autoMarkDone()">J'ai lu cette leçon — Passer à la suite →</button>`;
      }

      // Bouton retour
      html += `<div class="btn-row" style="margin:24px 0">
        <button class="btn btn-secondary" onclick="renderHome()">← Retour accueil</button>
      </div>`;

      if (next) {
        html += `<div class="next-card" id="next-card" onclick="openLesson(${next.modId},'${next.id}')" style="display:${isDone(lesId)?'flex':'none'}">
          <div>
            <div class="next-label">Leçon suivante débloquée ✓</div>
            <div class="next-title">${next.title}</div>
          </div>
          <div class="next-arrow">→</div>
        </div>`;
      } else if (isDone(lesId)) {
        html += `<div style="text-align:center;padding:28px 0;color:var(--success);font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.08em">✓ MODULE TERMINÉ</div>`;
      }
    }
  }

  document.getElementById('main').innerHTML = html;
  renderSidebar();
  updateProgressBar();
  window.scrollTo(0, 0);
}

// ═══════════════════════════════════════════════
// EXERCISE PAGE — page séparée avec animation
// ═══════════════════════════════════════════════
function renderExercisePage(modId, lesId) {
  const mod = MODULES.find(m => m.id === modId);
  const les = mod.lessons.find(l => l.id === lesId);
  const content = getLessonContent(lesId);
  const ex = getExerciseData(lesId); // applique les overrides admin si présents
  const modLesIdx = mod.lessons.findIndex(l => l.id === lesId);
  const modColor = MOD_COLORS[mod.id - 1];
  const modIcon = MOD_ICONS[mod.id - 1];

  S.cur = { modId, lesId };
  S.qcmSel = null;

  const allLes = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, modId: m.id })));
  const idx = allLes.findIndex(l => l.id === lesId);
  const next = allLes[idx + 1];

  const alreadyDone = isDone(lesId);

  let exerciseHTML = '';
  if (ex) {
    exerciseHTML = renderExerciseChallenge(ex, lesId, next, modId, alreadyDone);
  } else {
    exerciseHTML = `<div class="ex-challenge-box" style="padding:40px;text-align:center">
      <p style="font-size:14px;color:var(--muted);margin-bottom:20px">Tu as bien lu et compris cette leçon ?</p>
      <button class="btn btn-primary" onclick="autoMarkDone()">Oui, je valide cette leçon →</button>
    </div>`;
  }

  // Message ARIA contextuel selon l'état
  const ariaMessages = alreadyDone ? [
    "Tu l'as déjà réussi. Retour sur les bases ?",
    "Exercice déjà dans la boîte. Tu veux revoir ?",
    "Maîtrisé ! Passe à la suite quand tu veux."
  ] : [
    "Lis bien la question avant de répondre.",
    "Fais confiance à ce que tu as appris.",
    "Prends ton temps — c'est la compréhension qui compte.",
    "Pas de panique, c'est pour toi que tu fais ça.",
    "Un bon exercice vaut 10 relectures de cours."
  ];
  const ariaMsg = ariaMessages[Math.floor(Math.random() * ariaMessages.length)];

  const html = `
  <div class="ex-page ex-page-enter">
    <div style="margin-bottom:24px">
      <a onclick="openLesson(${modId},'${lesId}')" style="font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);cursor:pointer;letter-spacing:.06em;display:inline-flex;align-items:center;gap:6px;transition:color .15s" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='var(--muted)'">← Retour à la leçon</a>
    </div>
    <span class="ex-page-badge">${modIcon} ${mod.code} · Leçon ${modLesIdx + 1} / ${mod.lessons.length}</span>
    <h1 class="ex-page-title">${alreadyDone ? 'Exercice déjà<br><span style="color:var(--success)">validé ✓</span>' : 'Prouve que tu as<br><span style="color:var(--cyan)">tout compris.</span>'}</h1>

    <!-- MASCOTTE ARIA — placeholder, sera remplacée par la vraie mascotte -->
    <div class="mascot-row">
      <div class="mascot-avatar" title="ARIA — Ton assistante IA">AI</div>
      <div class="mascot-bubble">
        <div class="mascot-name">ARIA · Assistante IA</div>
        ${ariaMsg}
      </div>
    </div>

    ${exerciseHTML}
  </div>`;

  document.getElementById('main').innerHTML = html;
  renderSidebar();
  updateProgressBar();
  window.scrollTo(0, 0);
}

function renderExerciseChallenge(ex, lesId, next, modId, alreadyDone) {
  const typeLabel = ex.type === 'qcm' ? 'Quiz rapide' : 'Exercice pratique';

  let inner = '';

  if (alreadyDone) {
    // Vue "déjà fait" avec bouton next
    inner = `<div style="text-align:center;padding:20px 0">
      <p style="font-family:'Syne',sans-serif;font-weight:800;font-size:18px;color:var(--success);margin-bottom:6px">Exercice validé !</p>
      <p style="font-size:13px;color:var(--muted)">Tu as déjà réussi cet exercice avec succès.</p>
    </div>`;
    if (next) {
      inner += `<div style="margin-top:20px">
        <div class="next-card" onclick="openLesson(${next.modId},'${next.id}')">
          <div><div class="next-label">Leçon suivante</div><div class="next-title">${next.title}</div></div>
          <div class="next-arrow">→</div>
        </div>
      </div>`;
    }
  } else if (ex.type === 'qcm') {
    const opts = ex.options.map((o, i) => {
      const letters = ['A','B','C','D'];
      return `<div class="qcm-option" style="border-radius:8px" onclick="selectQcm(this,${o.correct},${JSON.stringify(ex.feedback_ok).replace(/"/g,'&quot;')},${JSON.stringify(ex.feedback_ko).replace(/"/g,'&quot;')})">
        <span class="qcm-letter">${letters[i]}</span>
        <span class="qcm-text">${o.text}</span>
      </div>`;
    }).join('');
    inner = `<p style="font-size:15px;color:#E0E0F0;margin-bottom:20px;line-height:1.65"><strong style="color:#fff">${ex.question}</strong></p>
      <div class="qcm-options">${opts}</div>
      <div class="ex-feedback" id="ex-fb"></div>
      <div id="ex-next" style="display:none">
        ${next ? `<div class="next-card" onclick="openLesson(${next.modId},'${next.id}')" style="margin-top:8px;border-radius:8px">
          <div><div class="next-label">Leçon suivante débloquée ✓</div><div class="next-title">${next.title}</div></div>
          <div class="next-arrow">→</div>
        </div>` : `<div style="text-align:center;padding:20px;color:var(--success);font-family:'Space Mono',monospace;font-size:12px">✓ MODULE TERMINÉ — FÉLICITATIONS !</div>`}
      </div>`;
  } else if (ex.type === 'freetext') {
    const wordHint = ex.minLength ? `<span id="char-count" style="font-family:'Space Mono',monospace;font-size:10px;color:var(--muted)">0 / ${ex.minLength} caractères min</span>` : '';
    inner = `<p style="font-size:14px;color:#C8C8D8;margin-bottom:10px;line-height:1.65">${ex.desc}</p>
      <div style="display:flex;justify-content:flex-end;margin-bottom:6px">${wordHint}</div>
      <textarea class="ex-textarea" id="ex-input" placeholder="${ex.placeholder}" rows="6"
        oninput="document.getElementById('char-count').textContent=this.value.trim().length+' / ${ex.minLength} caractères min';document.getElementById('char-count').style.color=this.value.trim().length>=${ex.minLength}?'var(--success)':'var(--muted)'">
      </textarea>
      <div class="ex-feedback" id="ex-fb"></div>
      <div class="btn-row">
        <button class="btn btn-primary" style="border-radius:6px" onclick="checkFreetext(${ex.minLength},${JSON.stringify(ex.feedback_ok).replace(/"/g,'&quot;')},${JSON.stringify(ex.feedback_ko).replace(/"/g,'&quot;')})">Valider ma réponse →</button>
      </div>
      <div id="ex-next" style="display:none">
        ${next ? `<div class="next-card" onclick="openLesson(${next.modId},'${next.id}')" style="margin-top:16px;border-radius:8px">
          <div><div class="next-label">Leçon suivante débloquée ✓</div><div class="next-title">${next.title}</div></div>
          <div class="next-arrow">→</div>
        </div>` : `<div style="text-align:center;padding:20px;color:var(--success);font-family:'Space Mono',monospace;font-size:12px">✓ MODULE TERMINÉ — FÉLICITATIONS !</div>`}
      </div>`;
  }

  // Bouton étoile uniquement si exercice non encore validé
  const starBtn = alreadyDone ? '' : renderStarSkipButton(lesId);

  return `<div class="ex-challenge-box">
    <div class="ex-challenge-top">
      <span class="ex-challenge-label">${typeLabel}</span>
      <span class="ex-challenge-type">${ex.type === 'qcm' ? '4 options · 1 bonne réponse' : 'Réponse libre'}</span>
    </div>
    <div class="ex-challenge-body">${inner}</div>
  </div>
  ${starBtn}`;
}

function renderBlock(b, i) {
  if (b.type === 'text') {
    return `<div class="content-block">
      <h2 class="block-title">${b.title}</h2>
      <div class="block-text">${b.body}</div>
    </div>`;
  }
  if (b.type === 'callout') {
    const cls = b.style === 'warn' ? 'warn' : b.style === 'success' ? 'success' : '';
    return `<div class="callout ${cls}">
      <div class="callout-title">${b.title}</div>
      <div class="callout-text">${b.text}</div>
    </div>`;
  }
  if (b.type === 'prompt') {
    const pid = `prompt_${i}`;
    return `<div class="prompt-box">
      <div class="prompt-header">
        <span class="prompt-label">${b.label}</span>
        <button class="copy-btn" onclick="copyPrompt('${pid}',this)">Copier</button>
      </div>
      <div class="prompt-content" id="${pid}">${escHtml(b.content)}</div>
    </div>`;
  }
  if (b.type === 'keypoints') {
    const pts = b.points.map(p => `<div class="key-point">
      <div class="kp-icon">${p.icon}</div>
      <div class="kp-title">${p.title}</div>
      <div class="kp-text">${p.text}</div>
    </div>`).join('');
    return `<div class="key-points">${pts}</div>`;
  }
  if (b.type === 'steps') {
    const steps = b.steps.map((s, i) => `
      <div class="step-item">
        <div class="step-number">${i + 1}</div>
        <div class="step-content">
          <div class="step-title">${s.title}</div>
          <div class="step-text">${s.text}</div>
        </div>
      </div>`).join('');
    return `<div class="content-block">
      <h2 class="block-title">${b.title}</h2>
      <div class="steps-list">${steps}</div>
    </div>`;
  }
  if (b.type === 'summary') {
    const items = b.items.map(item => `
      <div class="summary-item">
        <span class="summary-check">✓</span>
        <span class="summary-text">${item}</span>
      </div>`).join('');
    return `<div class="summary-box">
      <div class="summary-title">${b.title || 'Ce que tu retiens de cette leçon'}</div>
      ${items}
    </div>`;
  }
  if (b.type === 'comparison') {
    const rows = b.rows.map(r => `<tr><td class="comp-bad">${r.bad}</td><td class="comp-good">${r.good}</td></tr>`).join('');
    return `<div class="content-block">
      <h2 class="block-title">${b.title}</h2>
      <table class="comp-table">
        <thead><tr><th class="comp-head-bad">✕ ${b.labelBad || 'Sans la méthode'}</th><th class="comp-head-good">✓ ${b.labelGood || 'Avec la méthode'}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }
  if (b.type === 'checklist') {
    const items = b.items.map(item => `
      <div class="checklist-item">
        <span class="checklist-dot"></span>
        <span>${item}</span>
      </div>`).join('');
    return `<div class="lesson-checklist">
      <div class="lesson-checklist-title">À la fin de cette leçon</div>
      ${items}
    </div>`;
  }
  if (b.type === 'soon') {
    return `<div class="soon-screen">
      <div class="soon-icon">·</div>
      <div class="soon-title">Contenu en cours de préparation</div>
      <div class="soon-sub">Cette leçon sera disponible très bientôt. Rejoins le Discord pour être notifié.</div>
    </div>`;
  }
  return '';
}

function renderExercise(ex, lesId) {
  const done = isDone(lesId);

  // Leçon déjà validée — afficher état "terminé"
  if (done) {
    return `<div class="exercise-box validated">
      <div class="ex-header">
        <span class="ex-badge validated">✓ Exercice validé</span>
        <span class="ex-title" style="color:var(--success);font-size:14px">Tu as déjà réussi cet exercice. Bonne continuation !</span>
      </div>
    </div>`;
  }

  let inner = '';

  if (ex.type === 'qcm') {
    const opts = ex.options.map((o, i) => {
      const letters = ['A','B','C','D'];
      return `<div class="qcm-option" onclick="selectQcm(this,${o.correct},${JSON.stringify(ex.feedback_ok).replace(/"/g,'&quot;')},${JSON.stringify(ex.feedback_ko).replace(/"/g,'&quot;')})">
        <span class="qcm-letter">${letters[i]}</span>
        <span class="qcm-text">${o.text}</span>
      </div>`;
    }).join('');
    inner = `<p style="font-size:14px;color:#C8C8D8;margin-bottom:16px;line-height:1.6"><strong style="color:#fff">${ex.question}</strong></p>
      <div class="qcm-options">${opts}</div>
      <div class="ex-feedback" id="ex-fb"></div>`;
  }

  if (ex.type === 'freetext') {
    inner = `<p style="font-size:14px;color:#C8C8D8;margin-bottom:6px;line-height:1.65">${ex.desc}</p>
      <textarea class="ex-textarea" id="ex-input" placeholder="${ex.placeholder}" rows="5"></textarea>
      <div class="ex-feedback" id="ex-fb"></div>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="checkFreetext(${ex.minLength},${JSON.stringify(ex.feedback_ok).replace(/"/g,'&quot;')},${JSON.stringify(ex.feedback_ko).replace(/"/g,'&quot;')})">Valider →</button>
      </div>`;
  }

  return `<div class="exercise-box">
    <div class="ex-header">
      <span class="ex-badge">Exercice obligatoire</span>
      <span class="ex-title">${ex.type === 'qcm' ? 'Quiz de compréhension' : ex.question}</span>
    </div>
    <p style="font-size:12px;color:var(--muted);margin:6px 0 16px;font-family:'Space Mono',monospace;letter-spacing:.04em">⚠ Valide cet exercice pour passer à la leçon suivante</p>
    ${inner}
  </div>`;
}

// ═══════════════════════════════════════════════
// INTERACTIONS
// ═══════════════════════════════════════════════
function selectQcm(el, correct, fbOk, fbKo) {
  if (S.qcmSel) return; // déjà réussi
  if (correct) {
    S.qcmSel = true;
    document.querySelectorAll('.qcm-option').forEach(o => o.style.pointerEvents = 'none');
    el.classList.add('correct');
    showFeedback(true, fbOk);
    autoMarkDone();
  } else {
    // Mauvaise réponse — grise cette option mais laisse les autres cliquables
    el.classList.add('wrong');
    el.style.pointerEvents = 'none';
    showFeedback(false, fbKo);
  }
}

function checkFreetext(minLen, fbOk, fbKo) {
  const val = document.getElementById('ex-input').value.trim();
  const ok = val.length >= minLen;
  showFeedback(ok, ok ? fbOk : fbKo);
  if (ok) autoMarkDone();
}

function showFeedback(ok, msg) {
  const fb = document.getElementById('ex-fb');
  fb.className = `ex-feedback show ${ok ? 'ok' : 'ko'}`;
  fb.innerHTML = `<strong>${ok ? '✓ Bonne réponse !' : '✗ Pas tout à fait'}</strong>${msg}`;
}

function toggleDone(lesId, modId) {
  if (isDone(lesId)) {
    S.done = S.done.filter(id => id !== lesId);
  } else {
    S.done.push(lesId);
  }
  save();
  updateProgressBar();
  openLesson(modId, lesId);
}

function copyPrompt(id, btn) {
  const txt = document.getElementById(id).innerText;
  navigator.clipboard.writeText(txt).then(() => {
    btn.textContent = 'Copié !';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copier'; btn.classList.remove('copied'); }, 2000);
  });
}

function updateProgressBar() {
  const done = totalDone();
  const pct = Math.round(done / TOTAL * 100);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent = `${done} / ${TOTAL}`;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function updatePlanBadge() {
  const b = document.getElementById('plan-badge');
  b.className = S.plan === 'premium' ? 'badge badge-prm' : 'badge badge-std';
  b.textContent = S.plan === 'premium' ? 'PREMIUM' : 'STANDARD';
  // Bibliothèque de prompts — membres Premium uniquement
  const promBtn = document.getElementById('sb-prompts-btn');
  if (promBtn) promBtn.style.display = S.plan === 'premium' ? 'block' : 'none';
  // Bouton admin — mode admin uniquement
  const adminBtn = document.getElementById('admin-btn');
  if (adminBtn) adminBtn.style.display = S.adminMode ? 'inline-block' : 'none';
}

// ═══════════════════════════════════════════════
// SYSTÈME D'ÉTOILES — Skip difficile
// ═══════════════════════════════════════════════

function updateStarsDisplay() {
  const wrap = document.getElementById('stars-wrap');
  const iconsEl = document.getElementById('stars-icons');
  const countEl = document.getElementById('stars-count');
  if (!wrap) return;

  // Cacher les étoiles pour les admins (ils ont bypass total)
  if (S.adminMode) { wrap.style.display = 'none'; return; }

  wrap.style.display = 'flex';
  const n = S.stars;
  const filled = '⭐'.repeat(Math.max(0, n));
  const empty  = '<span class="stars-empty">★</span>'.repeat(Math.max(0, 5 - n));
  if (iconsEl) iconsEl.innerHTML = filled + empty;
  if (countEl) countEl.textContent = n;
  // Griser le bloc si plus d'étoiles
  wrap.style.opacity = n > 0 ? '1' : '.45';
}

function renderStarSkipButton(lesId) {
  if (S.adminMode) return ''; // admin n'a pas besoin
  const n = S.stars;
  const starsStr = '⭐'.repeat(n) + '★'.repeat(5 - n);
  return `<div class="star-skip-box" id="star-skip-zone">
    <div class="star-skip-info">
      <div class="star-skip-title">⭐ Passer cet exercice (${n} étoile${n !== 1 ? 's' : ''} restante${n !== 1 ? 's' : ''})</div>
      <div class="star-skip-sub">Tu bloques sur cet exercice ? Utilise une étoile pour valider la leçon et continuer.<br>Tu as 5 étoiles par mois — elles se rechargent le 1er de chaque mois.</div>
    </div>
    <button class="star-skip-btn" id="star-skip-btn" onclick="useStarSkip('${lesId}')"
      ${n === 0 ? 'disabled' : ''}>
      ${n === 0 ? 'Plus d\'étoiles' : 'Utiliser une étoile →'}
    </button>
  </div>
  <div class="star-skip-used" id="star-used-msg">⭐ Étoile utilisée — leçon validée !</div>`;
}

async function useStarSkip(lesId) {
  if (S.stars <= 0) return;
  const btn = document.getElementById('star-skip-btn');
  if (btn) { btn.disabled = true; btn.textContent = '…'; }

  S.stars = Math.max(0, S.stars - 1);
  updateStarsDisplay();
  await save(); // sauvegarde stars + progress dans Firebase

  // Marquer la leçon comme terminée
  if (!isDone(lesId)) {
    S.done.push(lesId);
    await save();
  }

  // Feedback visuel
  const usedMsg = document.getElementById('star-used-msg');
  const skipZone = document.getElementById('star-skip-zone');
  if (usedMsg) usedMsg.style.display = 'block';
  if (skipZone) skipZone.style.display = 'none';

  // Afficher le bloc "leçon suivante" après 800ms
  setTimeout(() => {
    const exNext = document.getElementById('ex-next');
    if (exNext) exNext.style.display = 'block';
    // Si formation terminée
    const { modId } = S.cur || {};
    const allLes = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, modId: m.id })));
    const idx = allLes.findIndex(l => l.id === lesId);
    const next = allLes[idx + 1];
    if (!next) {
      setTimeout(() => renderFormationComplete(), 1200);
    }
  }, 800);

  updateProgressBar();
  renderSidebar();
}

function renderFormationComplete() {
  window.scrollTo(0, 0);
  const totalLessons = MODULES.flatMap(m => m.lessons).length;
  const doneLessons  = S.done.length;
  const starsUsed    = 5 - S.stars;
  const plan         = S.plan === 'premium' ? 'Premium 👑' : 'Standard';

  document.getElementById('main').innerHTML = `
  <div class="formation-complete">
    <div class="fc-icon"></div>
    <div class="fc-eyebrow">Formation terminée</div>
    <h1 class="fc-title">Tu as <span>tout maîtrisé.</span></h1>
    <p class="fc-sub">
      Félicitations — tu fais maintenant partie des rares personnes qui savent vraiment utiliser l'IA pour leur business.<br>
      Ce n'est pas une connaissance théorique, c'est un ensemble de compétences que tu peux appliquer aujourd'hui.
    </p>

    <div class="fc-stats">
      <div class="fc-stat">
        <div class="fc-stat-val">${doneLessons}</div>
        <div class="fc-stat-lbl">leçons terminées</div>
      </div>
      <div class="fc-stat">
        <div class="fc-stat-val">${MODULES.length}</div>
        <div class="fc-stat-lbl">modules complétés</div>
      </div>
      <div class="fc-stat">
        <div class="fc-stat-val">${starsUsed}</div>
        <div class="fc-stat-lbl">étoile${starsUsed !== 1 ? 's' : ''} utilisée${starsUsed !== 1 ? 's' : ''}</div>
      </div>
      <div class="fc-stat">
        <div class="fc-stat-val" style="color:var(--pink);font-size:16px">${plan}</div>
        <div class="fc-stat-lbl">ton plan</div>
      </div>
    </div>

    <div style="background:linear-gradient(135deg,rgba(0,229,255,.06),rgba(123,94,167,.06));border:1px solid rgba(0,229,255,.2);border-radius:6px;padding:20px 24px;margin-bottom:28px;text-align:left">
      <div style="font-family:'Space Mono',monospace;font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:var(--cyan);margin-bottom:10px">La suite — 3 actions cette semaine</div>
      <div style="font-size:14px;color:#C8C8D8;line-height:1.8">
        1. Choisis <strong style="color:#fff">1 prompt de la bibliothèque</strong> et utilise-le demain sur une vraie tâche business<br>
        2. Partage ton résultat dans le Discord — <strong style="color:#fff">#module-07</strong> ou <strong style="color:#fff">#vip-ai-school</strong><br>
        3. Reviens dans 7 jours et <strong style="color:#fff">mesure le temps gagné</strong> — c'est le seul vrai indicateur
      </div>
    </div>

    <div class="fc-actions">
      <button class="fc-btn-primary" onclick="renderHome()">← Retour au dashboard</button>
      ${S.plan === 'standard' ? `<a href="${S.gumroadPremium}" target="_blank"><button class="fc-btn-secondary">Passer Premium →</button></a>` : ''}
    </div>

    <div class="fc-cert-note">
      Nexum AI School · ${new Date().getFullYear()} · Accès à vie — reviens quand tu veux
    </div>
  </div>`;

  renderSidebar();
  updateProgressBar();
}

// ═══════════════════════════════════════════════
// ADMIN — Overrides & Dashboard
// ═══════════════════════════════════════════════

async function loadExerciseOverrides() {
  try {
    const snap = await db.ref('admin_exercise_overrides').once('value');
    S.exerciseOverrides = snap.val() || {};
  } catch(e) {
    S.exerciseOverrides = {};
    console.warn('Could not load exercise overrides:', e);
  }
}

function getExerciseData(lesId) {
  const base = CONTENT[lesId]?.exercise;
  if (!base) return null;
  const ov = S.exerciseOverrides[lesId];
  if (!ov) return base;
  // Merge override into base (deep for QCM options)
  const merged = { ...base, ...ov };
  if (ov.options && Array.isArray(ov.options)) merged.options = ov.options;
  return merged;
}

async function saveExerciseOverride(lesId, data) {
  S.exerciseOverrides[lesId] = data;
  await db.ref('admin_exercise_overrides/' + lesId).set(data);
}

async function resetExerciseOverride(lesId) {
  delete S.exerciseOverrides[lesId];
  await db.ref('admin_exercise_overrides/' + lesId).remove();
}

function renderAdminDashboard() {
  document.getElementById('admin-btn').classList.add('active');
  window.scrollTo(0, 0);

  const totalEx = MODULES.flatMap(m => m.lessons).filter(l => CONTENT[l.id]?.exercise).length;
  const modifiedCount = Object.keys(S.exerciseOverrides).length;
  const qcmCount = MODULES.flatMap(m => m.lessons).filter(l => CONTENT[l.id]?.exercise?.type === 'qcm').length;
  const ftCount = totalEx - qcmCount;

  let html = `
  <div class="admin-wrap">
    <div class="admin-header">
      <div class="admin-title">Dashboard <span>Admin</span></div>
      <div class="admin-sub">Éditeur d'exercices · Modifications sauvegardées dans Firebase et actives pour tous les membres</div>
    </div>

    <div class="admin-stats">
      <div class="admin-stat">
        <div class="admin-stat-val">${totalEx}</div>
        <div class="admin-stat-lbl">Exercices total</div>
      </div>
      <div class="admin-stat">
        <div class="admin-stat-val">${modifiedCount}</div>
        <div class="admin-stat-lbl">Modifiés (overrides)</div>
      </div>
      <div class="admin-stat">
        <div class="admin-stat-val">${qcmCount}</div>
        <div class="admin-stat-lbl">QCM</div>
      </div>
      <div class="admin-stat">
        <div class="admin-stat-val">${ftCount}</div>
        <div class="admin-stat-lbl">Freetext</div>
      </div>
    </div>`;

  MODULES.forEach(mod => {
    html += `<div class="admin-mod-section">
      <div class="admin-mod-title">
        <span style="color:${MOD_COLORS[mod.id-1]}">${mod.code}</span>
        ${mod.title}
        <span style="font-family:'Space Mono',monospace;font-size:9px;color:var(--muted);font-weight:400">${mod.lessons.length} leçons</span>
      </div>
      <div class="admin-ex-grid">`;

    mod.lessons.forEach(les => {
      const ex = CONTENT[les.id]?.exercise;
      if (!ex) return;
      const isModified = !!S.exerciseOverrides[les.id];
      const exData = getExerciseData(les.id);
      const questionPreview = (exData.question || '').slice(0, 75) + (exData.question?.length > 75 ? '…' : '');
      const typeLabel = ex.type === 'qcm' ? 'QCM' : 'FREETEXT';
      const typeClass = ex.type === 'qcm' ? 'aex-type-qcm' : 'aex-type-ft';

      html += `<div class="admin-ex-card${isModified?' modified':''}" onclick="renderExerciseEditor('${les.id}')">
        <div class="aex-top">
          <span class="aex-id">${les.id}</span>
          <span class="aex-type ${typeClass}">${typeLabel}</span>
        </div>
        <div class="aex-question">${questionPreview}</div>
        <div class="aex-meta">
          <span class="aex-ml">min ${exData.minLength || 0} chars</span>
          <span class="aex-badge ${isModified?'aex-badge-mod':'aex-badge-orig'}">${isModified?'✎ MODIFIÉ':'ORIGINAL'}</span>
        </div>
      </div>`;
    });

    html += `</div></div>`;
  });

  html += `</div>`;
  document.getElementById('main').innerHTML = html;
}

function renderExerciseEditor(lesId) {
  window.scrollTo(0, 0);
  const mod = MODULES.find(m => m.lessons.some(l => l.id === lesId));
  const les = mod?.lessons.find(l => l.id === lesId);
  const baseEx = CONTENT[lesId]?.exercise;
  if (!baseEx) return;
  const ex = getExerciseData(lesId);
  const isModified = !!S.exerciseOverrides[lesId];

  const isQcm = baseEx.type === 'qcm';

  let optionsHtml = '';
  if (isQcm) {
    const opts = ex.options || [];
    optionsHtml = `
    <div class="editor-field">
      <div class="editor-label">Options QCM <span>— cochez la bonne réponse</span></div>
      <div class="editor-qcm-options" id="qcm-options-list">
        ${opts.map((opt, i) => `
        <div class="editor-option${opt.correct?' correct':''}" id="opt-${i}">
          <div class="editor-option-text">
            <textarea class="editor-opt-textarea" id="opt-text-${i}" oninput="adminUpdateOptStyle(${i})">${escHtml(opt.text)}</textarea>
            <div class="editor-opt-correct">
              <input type="checkbox" id="opt-correct-${i}" ${opt.correct?'checked':''} onchange="adminUpdateOptStyle(${i})">
              <label for="opt-correct-${i}">Bonne réponse</label>
            </div>
          </div>
          <button class="editor-opt-del" onclick="adminDelOption(${i})" title="Supprimer">✕</button>
        </div>`).join('')}
      </div>
      <button onclick="adminAddOption()" style="margin-top:8px;font-family:'Space Mono',monospace;font-size:11px;color:var(--cyan);background:none;border:1px dashed rgba(0,229,255,.3);padding:8px 16px;cursor:pointer;width:100%;border-radius:2px;transition:all .15s;" onmouseover="this.style.borderColor='var(--cyan)'" onmouseout="this.style.borderColor='rgba(0,229,255,.3)'">+ Ajouter une option</button>
    </div>`;
  }

  const ftFields = !isQcm ? `
    <div class="editor-field">
      <div class="editor-label">Placeholder <span>— texte dans la zone de saisie</span></div>
      <textarea class="editor-textarea code" id="ed-placeholder">${escHtml(ex.placeholder || '')}</textarea>
    </div>` : '';

  document.getElementById('main').innerHTML = `
  <div class="editor-wrap">
    <div class="editor-header">
      <div class="breadcrumb" style="margin-bottom:14px">
        <a onclick="renderAdminDashboard()">Admin</a> ›
        <span>${lesId} — ${les?.title || ''}</span>
      </div>
      <div class="editor-title">
        Exercice <span style="color:var(--cyan)">${lesId}</span>
        <span style="font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);font-weight:400;margin-left:10px">${isQcm?'QCM':'FREETEXT'}</span>
        ${isModified?`<span style="font-family:'Space Mono',monospace;font-size:10px;color:var(--warn);background:rgba(245,200,66,.1);border:1px solid rgba(245,200,66,.3);padding:3px 10px;border-radius:2px;margin-left:8px">✎ OVERRIDE ACTIF</span>`:''}
      </div>
      <div class="editor-sub">${mod?.title || ''} · Modifications sauvegardées dans Firebase → actives pour tous les membres</div>
    </div>

    <div class="editor-form">
      <div class="editor-field">
        <div class="editor-label">Question <span>— titre affiché à l'élève</span></div>
        <textarea class="editor-textarea" id="ed-question">${escHtml(ex.question || '')}</textarea>
      </div>

      <div class="editor-field">
        <div class="editor-label">Description / consigne <span>— texte d'instruction sous la question</span></div>
        <textarea class="editor-textarea tall" id="ed-desc">${escHtml(ex.desc || '')}</textarea>
      </div>

      ${!isQcm ? `<div class="editor-field">
        <div class="editor-label">MinLength <span>— nombre minimum de caractères requis</span></div>
        <input type="number" class="editor-input editor-number" id="ed-minlength" value="${ex.minLength || 100}" min="20" max="1000">
      </div>` : ''}

      ${optionsHtml}
      ${ftFields}

      <div class="editor-field">
        <div class="editor-label">Feedback ✓ <span>— message si bonne réponse</span></div>
        <textarea class="editor-textarea tall" id="ed-feedback-ok">${escHtml(ex.feedback_ok || '')}</textarea>
      </div>

      <div class="editor-field">
        <div class="editor-label">Feedback ✗ <span>— message si mauvaise réponse ou réponse insuffisante</span></div>
        <textarea class="editor-textarea tall" id="ed-feedback-ko">${escHtml(ex.feedback_ko || '')}</textarea>
      </div>

      <div class="editor-actions">
        <button class="btn-save" id="btn-save-ex" onclick="adminSaveExercise('${lesId}', '${baseEx.type}')">💾 Sauvegarder</button>
        ${isModified ? `<button class="btn-reset" onclick="adminResetExercise('${lesId}')">↺ Réinitialiser (revenir à l'original)</button>` : ''}
        <span class="editor-save-msg" id="save-msg">✓ Sauvegardé</span>
      </div>
    </div>
  </div>`;
}

function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function adminUpdateOptStyle(i) {
  const cb = document.getElementById('opt-correct-' + i);
  const div = document.getElementById('opt-' + i);
  if (cb && div) div.className = 'editor-option' + (cb.checked ? ' correct' : '');
}

function adminAddOption() {
  const list = document.getElementById('qcm-options-list');
  const i = list.querySelectorAll('.editor-option').length;
  const div = document.createElement('div');
  div.className = 'editor-option';
  div.id = 'opt-' + i;
  div.innerHTML = `
    <div class="editor-option-text">
      <textarea class="editor-opt-textarea" id="opt-text-${i}" oninput="adminUpdateOptStyle(${i})"></textarea>
      <div class="editor-opt-correct">
        <input type="checkbox" id="opt-correct-${i}" onchange="adminUpdateOptStyle(${i})">
        <label for="opt-correct-${i}">Bonne réponse</label>
      </div>
    </div>
    <button class="editor-opt-del" onclick="this.parentElement.remove()" title="Supprimer">✕</button>`;
  list.appendChild(div);
}

function adminDelOption(i) {
  const el = document.getElementById('opt-' + i);
  if (el) el.remove();
}

async function adminSaveExercise(lesId, type) {
  const btn = document.getElementById('btn-save-ex');
  const msg = document.getElementById('save-msg');
  btn.disabled = true;
  btn.textContent = 'Sauvegarde...';

  const data = {
    type,
    question:    document.getElementById('ed-question')?.value.trim() || '',
    desc:        document.getElementById('ed-desc')?.value.trim() || '',
    feedback_ok: document.getElementById('ed-feedback-ok')?.value.trim() || '',
    feedback_ko: document.getElementById('ed-feedback-ko')?.value.trim() || '',
  };

  if (type === 'freetext') {
    data.minLength  = parseInt(document.getElementById('ed-minlength')?.value) || 100;
    data.placeholder = document.getElementById('ed-placeholder')?.value || '';
  }

  if (type === 'qcm') {
    const optDivs = document.querySelectorAll('#qcm-options-list .editor-option');
    data.options = Array.from(optDivs).map((div, i) => {
      const idx = div.id.replace('opt-','');
      const textEl = document.getElementById('opt-text-' + idx);
      const cbEl   = document.getElementById('opt-correct-' + idx);
      return { text: textEl?.value.trim() || '', correct: cbEl?.checked || false };
    }).filter(o => o.text);
  }

  try {
    await saveExerciseOverride(lesId, data);
    btn.textContent = '✓ Sauvegardé';
    btn.style.background = 'var(--success)';
    msg.style.display = 'inline';
    setTimeout(() => {
      btn.textContent = 'Sauvegarder';
      btn.style.background = '';
      btn.disabled = false;
      msg.style.display = 'none';
    }, 2000);
  } catch(e) {
    btn.textContent = '✗ Erreur Firebase';
    btn.disabled = false;
    console.error(e);
  }
}

async function adminResetExercise(lesId) {
  if (!confirm('Réinitialiser cet exercice ? L\'override sera supprimé et le contenu original restauré pour tous les membres.')) return;
  await resetExerciseOverride(lesId);
  renderExerciseEditor(lesId); // recharge sans l'override
}

// ═══════════════════════════════════════════════
// TRANSITION IA — Animation avant la page exercice
// ═══════════════════════════════════════════════

// Messages aléatoires d'ARIA pendant le chargement
const ARIA_LOADING_MSGS = [
  "Prépare-toi — c'est là que ça devient concret.",
  "Réfléchis bien, pas de triche sur celle-là.",
  "Je suis sûre que tu as tout retenu.",
  "Un exercice bien fait vaut 10 leçons relues.",
  "Montre-moi ce que tu sais faire.",
  "Concentration maximale. C'est maintenant.",
  "La pratique ancre ce que la théorie enseigne."
];

// Génère les noeuds IA animés au premier appel
function buildTransitionNodes() {
  const container = document.getElementById('ex-tr-nodes');
  if (container.children.length > 0) return;
  const nodeColors = ['#00E5FF','#1A8FFF','#7B5EA7','#00E5A0'];
  for (let i = 0; i < 18; i++) {
    const node = document.createElement('div');
    node.className = 'ex-tr-node';
    const size = Math.random() * 5 + 3;
    node.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      background:${nodeColors[Math.floor(Math.random()*nodeColors.length)]};
      animation-delay:${Math.random() * 2}s;
      animation-duration:${1.8 + Math.random() * 1.4}s;
    `;
    container.appendChild(node);
  }
  for (let i = 0; i < 5; i++) {
    const line = document.createElement('div');
    line.className = 'ex-tr-line';
    line.style.cssText = `
      width:${80 + Math.random() * 160}px;
      left:${Math.random() * 80}%;
      top:${20 + Math.random() * 60}%;
      animation-delay:${Math.random() * 1.5}s;
      animation-duration:${1.6 + Math.random()}s;
    `;
    container.appendChild(line);
  }
}

function startExerciseTransition(modId, lesId) {
  buildTransitionNodes();
  // Message ARIA aléatoire
  const msg = ARIA_LOADING_MSGS[Math.floor(Math.random() * ARIA_LOADING_MSGS.length)];
  document.getElementById('ex-tr-sub').textContent = msg;

  const overlay = document.getElementById('ex-transition');
  overlay.classList.add('active');

  // Après 1 600 ms → render la page exercice
  setTimeout(() => {
    renderExercisePage(modId, lesId);
    // Fade out overlay
    setTimeout(() => overlay.classList.remove('active'), 180);
  }, 1600);
}

// ── INIT
updatePlanBadge();
renderHome();
renderSidebar();
updateProgressBar();
