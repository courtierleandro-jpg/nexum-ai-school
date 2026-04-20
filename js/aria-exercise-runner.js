// ═══════════════════════════════════════════════════════════════════════
// ARIA EXERCISE RUNNER — Mode exercice séquentiel avec mascotte
// ═══════════════════════════════════════════════════════════════════════

let _ar = {
  modId: null, lesId: null,
  ids: [],
  idx: 0,
  answered: false,
  passed: 0,
  skipped: 0
};

// ── Messages ARIA ────────────────────────────────────────────────────────

const _AR_INTROS = [
  "Premier exercice. Prends ton temps.",
  "Allez, on commence. Un exercice à la fois.",
  "Prêt ? On y va.",
  "C'est parti. Concentration."
];

const _AR_TRANSITIONS = [
  ["Bien. Suite.", "Exercice suivant.", "Continue.", "Allez."],
  ["2ème. Tu avances.", "Bien joué.", "Continue."],
  ["3ème.", "Bonne dynamique.", "Continue sur ta lancée."],
  ["4ème. Mi-chemin.", "À mi-parcours.", "Continue."],
  ["5ème. La moitié.", "En route.", "Bon rythme."],
  ["6ème. Plus que 4.", "Dernière moitié.", "Tu tiens."],
  ["7ème. Encore 3.", "Presque.", "Continue."],
  ["8ème. Plus que 2.", "Presque terminé.", "Patience."],
  ["9ème. Avant-dernier.", "Encore un effort.", "Presque."],
  ["Dernier exercice. Tout donne.", "Le dixième. On finit bien.", "Dernier. Dernier effort."]
];

const _AR_CORRECT = [
  "Exactement.",
  "Juste.",
  "Parfait.",
  "Bien vu.",
  "C'est ça.",
  "Correct.",
  "Bien joué.",
  "Tu vois — cohérent avec ce qu'on a vu."
];

const _AR_WRONG = [
  "Pas tout à fait. Retiens l'explication ci-dessous.",
  "Raté — mais l'explication vaut le coup.",
  "Ce n'était pas ça. Lis ce qui suit.",
  "Erreur. L'explication te dira pourquoi."
];

const _AR_PARTIAL = [
  "Presque juste. Regarde l'explication.",
  "Pas loin. L'explication clarifie.",
  "Partial — l'explication est utile."
];

const _AR_OPEN = [
  "Réponse enregistrée. Continue.",
  "Noté. C'est le type d'exercice qui compte dans la durée.",
  "Bien. Ce genre de réflexion vaut plus que n'importe quel QCM."
];

const _AR_SKIP = [
  "Passé. Une étoile utilisée.",
  "Exercice sauté. Tu en as encore.",
  "Passé grâce à une étoile."
];

function _rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _arTransMsg(idx) {
  const arr = _AR_TRANSITIONS[Math.min(idx, _AR_TRANSITIONS.length - 1)];
  return _rnd(arr);
}

// ── Type labels ──────────────────────────────────────────────────────────

function _arTypeName(type) {
  const MAP = {
    truefalse: 'VRAI / FAUX',
    qcm: 'QCM',
    promptlab: 'PROMPT LAB',
    freetext: 'TEXTE LIBRE',
    completion: 'COMPLÉTION',
    matching: 'ASSOCIATION',
    ranking: 'CLASSEMENT',
    beforeafter: 'AVANT / APRÈS',
    checklist: 'CHECKLIST'
  };
  return MAP[type] || type.toUpperCase();
}

// ── Entry point ──────────────────────────────────────────────────────────

function openAriaRunner(modId, lesId) {
  const ids = LESSON_EXERCISES[lesId];
  if (!ids || ids.length === 0) { openLesson(modId, lesId); return; }
  _ar = { modId, lesId, ids, idx: 0, answered: false, passed: 0, skipped: 0 };
  S.cur = { modId, lesId };
  _renderAR(_rnd(_AR_INTROS));
}

// ── Main renderer ────────────────────────────────────────────────────────

function _renderAR(ariaMsg) {
  const { modId, lesId, ids, idx } = _ar;
  const mod  = MODULES.find(m => m.id === modId);
  const exId = ids[idx];
  const ex   = EXERCISES[exId];
  const total = ids.length;
  const pct   = Math.round((idx / total) * 100);
  const isLast = idx === total - 1;

  if (!ex) {
    // Exercice manquant — passer
    _ar.idx++;
    if (_ar.idx >= _ar.ids.length) { _arComplete(); return; }
    _renderAR(_arTransMsg(idx));
    return;
  }

  document.getElementById('main').innerHTML = `
    <div class="ar-wrap" id="ar-wrap">

      <div class="ar-rail"><div class="ar-rail-fill" id="ar-prog-fill" style="width:${pct}%"></div></div>

      <div class="ar-topbar">
        <button class="ar-back" onclick="openLesson(${modId},'${lesId}')">← Retour</button>
        <div class="ar-topbar-center">
          <span class="ar-mod-chip">${mod.code} · ${lesId}</span>
        </div>
        <div class="ar-step-count">${idx + 1}<span class="ar-step-sep">/</span>${total}</div>
      </div>

      <div class="ar-body">

        <div class="ar-aria-row">
          <div class="ar-avatar">🤖</div>
          <div class="ar-bubble">
            <div class="ar-bubble-name">ARIA</div>
            <div id="ar-bubble-txt">${ariaMsg}</div>
          </div>
        </div>

        <div class="ar-card ar-card-in" id="ar-card">
          <div class="ar-card-head">
            <span class="ar-ex-num">Exercice ${idx + 1}</span>
            <span class="ar-ex-badge">${_arTypeName(ex.type)}</span>
          </div>
          <div class="ar-ex-title">${ex.title}</div>
          <div class="ar-ex-instr">${ex.instructions}</div>
          <div class="ar-ex-body" id="ar-ex-body">
            ${_arExBody(ex, exId)}
          </div>
          <div class="ar-feedback" id="ar-feedback" style="display:none"></div>
          <div class="ar-btns" id="ar-btns">
            <button class="ar-btn-validate" id="ar-btn-val" onclick="arValidate()">Valider →</button>
            ${S.stars > 0 && !isExDone(exId) ? `<button class="ar-btn-skip" onclick="arSkip()">⭐ Passer (${S.stars})</button>` : ''}
          </div>
        </div>

      </div>
    </div>`;

  renderSidebar();
  window.scrollTo(0, 0);

  // Init ranking drag
  if (ex.type === 'ranking') _arInitRanking();
}

// ── Exercise body renderers ──────────────────────────────────────────────

function _arExBody(ex, exId) {
  switch (ex.type) {
    case 'truefalse':  return _arTFBody(ex.content);
    case 'qcm':        return _arQCMBody(ex.content);
    case 'freetext':   return _arFreetextBody(ex.content);
    case 'promptlab':  return _arPromptlabBody(ex.content);
    case 'completion': return _arCompletionBody(ex.content);
    case 'matching':   return _arMatchingBody(ex.content);
    case 'ranking':    return _arRankingBody(ex.content);
    case 'beforeafter':return _arBABody(ex.content);
    case 'checklist':  return _arChecklistBody(ex.content);
    default:           return '<p style="color:var(--muted)">Type non pris en charge.</p>';
  }
}

// ── True / False ─────────────────────────────────────────────────────────

function _arTFBody(c) {
  return c.statements.map((s, i) => `
    <div class="ar-tf-item" id="ar-tf-${i}">
      <div class="ar-tf-text">${s.text}</div>
      <div class="ar-tf-btns">
        <button class="ar-tf-btn ar-tf-v" onclick="arTFClick(this,${i},${s.answer},true,'${escJs(s.explanation)}')">VRAI</button>
        <button class="ar-tf-btn ar-tf-f" onclick="arTFClick(this,${i},${s.answer},false,'${escJs(s.explanation)}')">FAUX</button>
      </div>
      <div class="ar-tf-expl" id="ar-tf-expl-${i}" style="display:none">${escHtml(s.explanation)}</div>
    </div>`).join('');
}

function arTFClick(btn, idx, correct, userAnswer, expl) {
  const item = document.getElementById(`ar-tf-${idx}`);
  if (!item || item.dataset.done) return;
  item.dataset.done = '1';
  item.dataset.ok = (correct === userAnswer) ? '1' : '0';
  item.querySelectorAll('.ar-tf-btn').forEach(b => { b.disabled = true; b.classList.add('ar-tf-dis'); });
  btn.classList.add(correct === userAnswer ? 'ar-tf-ok' : 'ar-tf-ko');
  const explEl = document.getElementById(`ar-tf-expl-${idx}`);
  if (explEl) explEl.style.display = 'block';
}

// ── QCM ──────────────────────────────────────────────────────────────────

function _arQCMBody(c) {
  const letters = ['A','B','C','D','E'];
  return `<div class="ar-qcm-q">${c.question}</div>
  <div class="ar-qcm-opts" id="ar-qcm-opts">
    ${c.options.map((o, i) => `
      <div class="ar-qcm-opt" id="ar-qcm-${i}" onclick="arQCMSelect(${i})">
        <span class="ar-qcm-letter">${letters[i]}</span>
        <span class="ar-qcm-text">${o.text}</span>
      </div>`).join('')}
  </div>`;
}

function arQCMSelect(idx) {
  document.querySelectorAll('.ar-qcm-opt').forEach((el, i) => {
    el.classList.toggle('ar-qcm-sel', i === idx);
  });
}

// ── Freetext ─────────────────────────────────────────────────────────────

function _arFreetextBody(c) {
  return `<textarea class="ar-textarea" id="ar-textarea" placeholder="${escHtml(c.placeholder || '')}" rows="5"></textarea>
  <div class="ar-charcount" id="ar-charcount">0 / ${c.min_length} min.</div>`;
}

// ── Prompt Lab ───────────────────────────────────────────────────────────

function _arPromptlabBody(c) {
  return `<div class="ar-pl-box">
    <div class="ar-pl-top">Prompt à copier dans Claude</div>
    <div class="ar-pl-prompt" id="ar-pl-prompt">${escHtml(c.prompt_to_copy)}</div>
    <button class="ar-pl-copy" onclick="arPLCopy(this)">Copier le prompt</button>
  </div>
  <div class="ar-pl-field-label">${escHtml(c.field_label || 'Colle ici ta réponse')}</div>
  <textarea class="ar-textarea" id="ar-textarea" placeholder="Colle ici ta réponse..." rows="5"></textarea>
  <div class="ar-charcount" id="ar-charcount">0 / ${c.min_length} min.</div>`;
}

function arPLCopy(btn) {
  const txt = document.getElementById('ar-pl-prompt').textContent;
  navigator.clipboard.writeText(txt).then(() => {
    btn.textContent = '✓ Copié !';
    setTimeout(() => { btn.textContent = 'Copier le prompt'; }, 2000);
  });
}

// ── Completion ───────────────────────────────────────────────────────────

function _arCompletionBody(c) {
  let html = `<div class="ar-compl-grid">`;
  c.blanks.forEach((b, i) => {
    html += `<div class="ar-compl-item">
      <div class="ar-compl-lbl">${b.id.replace('BLANK_', 'Champ ')} <span class="ar-compl-hint">${escHtml(b.hint||'')}</span></div>
      <input class="ar-compl-input" id="ar-compl-${i}" type="text" placeholder="${escHtml(b.placeholder||'')}" />
    </div>`;
  });
  html += `</div>`;
  return html;
}

// ── Matching ─────────────────────────────────────────────────────────────

function _arMatchingBody(c) {
  // Shuffle column B display
  const bShuffled = [...c.column_b].sort(() => Math.random() - 0.5);
  return `<div class="ar-match-wrap">
    <div class="ar-match-instr">Clique sur un élément de gauche puis un de droite pour les associer.</div>
    <div class="ar-match-grid">
      <div class="ar-match-col">
        <div class="ar-match-col-lbl">COLONNE A</div>
        ${c.column_a.map(a => `<div class="ar-match-item ar-match-a" id="ar-ma-${a.id}" onclick="arMatchSelA('${a.id}')">${a.text}</div>`).join('')}
      </div>
      <div class="ar-match-col">
        <div class="ar-match-col-lbl">COLONNE B</div>
        ${bShuffled.map(b => `<div class="ar-match-item ar-match-b" id="ar-mb-${b.id}" onclick="arMatchSelB('${b.id}')">${b.text}</div>`).join('')}
      </div>
    </div>
    <div class="ar-match-pairs" id="ar-match-pairs"></div>
  </div>`;
}

let _arMatchSel = { a: null, b: null };
let _arMatchPairs = {};

function arMatchSelA(aId) {
  document.querySelectorAll('.ar-match-a').forEach(el => el.classList.remove('ar-match-sel'));
  const el = document.getElementById(`ar-ma-${aId}`);
  if (!el || el.dataset.matched) return;
  _arMatchSel.a = aId;
  el.classList.add('ar-match-sel');
  if (_arMatchSel.b) _arMatchConnect();
}

function arMatchSelB(bId) {
  document.querySelectorAll('.ar-match-b').forEach(el => el.classList.remove('ar-match-sel'));
  const el = document.getElementById(`ar-mb-${bId}`);
  if (!el || el.dataset.matched) return;
  _arMatchSel.b = bId;
  el.classList.add('ar-match-sel');
  if (_arMatchSel.a) _arMatchConnect();
}

function _arMatchConnect() {
  const { a, b } = _arMatchSel;
  if (!a || !b) return;
  _arMatchPairs[a] = b;
  document.getElementById(`ar-ma-${a}`).dataset.matched = '1';
  document.getElementById(`ar-ma-${a}`).classList.add('ar-match-paired');
  document.getElementById(`ar-mb-${b}`).dataset.matched = '1';
  document.getElementById(`ar-mb-${b}`).classList.add('ar-match-paired');
  document.getElementById(`ar-ma-${a}`).classList.remove('ar-match-sel');
  document.getElementById(`ar-mb-${b}`).classList.remove('ar-match-sel');
  _arMatchSel = { a: null, b: null };
  // Show paired
  const pEl = document.getElementById('ar-match-pairs');
  if (pEl) {
    const aEl = document.querySelector(`#ar-ma-${a}`);
    const bEl = document.querySelector(`#ar-mb-${b}`);
    pEl.innerHTML += `<div class="ar-match-pair-row">${aEl ? aEl.textContent : a} <span>↔</span> ${bEl ? bEl.textContent : b}</div>`;
  }
}

// ── Ranking ──────────────────────────────────────────────────────────────

function _arRankingBody(c) {
  return `<ul class="ar-rank-list" id="ar-rank-list">
    ${c.items.map((item, i) => `
      <li class="ar-rank-item" draggable="true" data-id="${item.id}" id="ar-ri-${item.id}">
        <span class="ar-rank-handle">⠿</span>
        <span class="ar-rank-n">${i + 1}</span>
        <span class="ar-rank-text">${item.text}</span>
      </li>`).join('')}
  </ul>`;
}

function _arInitRanking() {
  const list = document.getElementById('ar-rank-list');
  if (!list) return;
  let dragSrc = null;
  list.querySelectorAll('.ar-rank-item').forEach(item => {
    item.addEventListener('dragstart', e => {
      dragSrc = item;
      e.dataTransfer.effectAllowed = 'move';
      item.classList.add('ar-rank-drag');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('ar-rank-drag');
      _arUpdateRankNumbers();
    });
    item.addEventListener('dragover', e => { e.preventDefault(); });
    item.addEventListener('drop', e => {
      e.preventDefault();
      if (dragSrc && dragSrc !== item) {
        const items = [...list.querySelectorAll('.ar-rank-item')];
        const srcIdx = items.indexOf(dragSrc);
        const tgtIdx = items.indexOf(item);
        if (srcIdx < tgtIdx) item.after(dragSrc);
        else item.before(dragSrc);
        _arUpdateRankNumbers();
      }
    });
  });
}

function _arUpdateRankNumbers() {
  document.querySelectorAll('.ar-rank-item').forEach((el, i) => {
    el.querySelector('.ar-rank-n').textContent = i + 1;
  });
}

// ── Before / After ───────────────────────────────────────────────────────

function _arBABody(c) {
  return c.pairs.map((pair, i) => `
    <div class="ar-ba-pair" id="ar-ba-${i}">
      <div class="ar-ba-head">${pair.error_type}</div>
      <div class="ar-ba-versions">
        <div class="ar-ba-v" id="ar-ba-${i}-a" onclick="arBASelect(${i},'a')">
          <div class="ar-ba-v-lbl">VERSION A</div>
          <div class="ar-ba-v-txt">${escHtml(pair.before)}</div>
        </div>
        <div class="ar-ba-v" id="ar-ba-${i}-b" onclick="arBASelect(${i},'b')">
          <div class="ar-ba-v-lbl">VERSION B</div>
          <div class="ar-ba-v-txt">${escHtml(pair.after)}</div>
        </div>
      </div>
      <div class="ar-ba-expl" id="ar-ba-expl-${i}" style="display:none">${escHtml(pair.explanation)}</div>
    </div>`).join('');
}

function arBASelect(pairIdx, ver) {
  const a = document.getElementById(`ar-ba-${pairIdx}-a`);
  const b = document.getElementById(`ar-ba-${pairIdx}-b`);
  if (!a || !b || a.dataset.done) return;
  // Version B is always the "after" (better) version
  const ok = ver === 'b';
  a.dataset.done = '1';
  b.dataset.done = '1';
  a.classList.add(ver === 'a' ? (ok ? 'ar-ba-ok' : 'ar-ba-ko') : 'ar-ba-neutral');
  b.classList.add(ver === 'b' ? (ok ? 'ar-ba-ok' : 'ar-ba-ko') : 'ar-ba-neutral');
  if (!ok) {
    a.classList.add('ar-ba-wrong-pick');
    b.classList.add('ar-ba-right');
  }
  const expl = document.getElementById(`ar-ba-expl-${pairIdx}`);
  if (expl) expl.style.display = 'block';
  const pair = document.getElementById(`ar-ba-${pairIdx}`);
  if (pair) pair.dataset.ok = ok ? '1' : '0';
}

// ── Checklist ────────────────────────────────────────────────────────────

function _arChecklistBody(c) {
  return c.items.map((item, i) => `
    <div class="ar-ck-item" id="ar-ck-${i}" onclick="arCKToggle(${i})">
      <div class="ar-ck-box" id="ar-ck-box-${i}"></div>
      <div class="ar-ck-lbl">${item.text}</div>
    </div>`).join('');
}

function arCKToggle(i) {
  const el = document.getElementById(`ar-ck-${i}`);
  const box = document.getElementById(`ar-ck-box-${i}`);
  if (!el || !box) return;
  const on = el.dataset.on === '1';
  el.dataset.on = on ? '0' : '1';
  el.classList.toggle('ar-ck-on', !on);
  box.textContent = on ? '' : '✓';
}

// ── Textarea char counter ────────────────────────────────────────────────

document.addEventListener('input', e => {
  if (e.target.id === 'ar-textarea') {
    const exId = _ar.ids[_ar.idx];
    const ex = EXERCISES[exId];
    const minLen = ex && ex.content ? (ex.content.min_length || 0) : 0;
    const cnt = document.getElementById('ar-charcount');
    if (cnt) cnt.textContent = `${e.target.value.length} / ${minLen} min.`;
  }
});

// ── Validate ─────────────────────────────────────────────────────────────

function arValidate() {
  if (_ar.answered) return;
  const exId = _ar.ids[_ar.idx];
  const ex   = EXERCISES[exId];
  if (!ex) return;

  const result = _arRunValidate(ex, exId);
  _ar.answered = true;
  if (result.ok !== false) _ar.passed++;

  // ARIA reaction
  let ariaText;
  if (result.ok === true)  ariaText = _rnd(_AR_CORRECT);
  else if (result.ok === false) ariaText = _rnd(_AR_WRONG);
  else if (result.ok === 'partial') ariaText = _rnd(_AR_PARTIAL);
  else ariaText = _rnd(_AR_OPEN);

  // Update bubble
  const bubbleTxt = document.getElementById('ar-bubble-txt');
  if (bubbleTxt) bubbleTxt.textContent = ariaText;

  // Show feedback
  const fb = document.getElementById('ar-feedback');
  if (fb && result.msg) {
    fb.textContent = result.msg;
    fb.className = `ar-feedback ar-feedback-show ${result.ok === false ? 'ar-feedback-ko' : 'ar-feedback-ok'}`;
    fb.style.display = 'block';
  }

  // Update buttons
  const btns = document.getElementById('ar-btns');
  const isLast = _ar.idx === _ar.ids.length - 1;
  if (btns) {
    btns.innerHTML = `<button class="ar-btn-next" onclick="arNext()">${isLast ? 'Voir le résultat →' : 'Exercice suivant →'}</button>`;
  }

  // Mark done
  if (result.ok !== false) {
    S.exDone = S.exDone || [];
    if (!S.exDone.includes(exId)) {
      S.exDone.push(exId);
      save();
      // Check if lesson is complete
      const allDone = (_ar.ids || []).every(id => S.exDone.includes(id));
      if (allDone) {
        const modId = _ar.modId;
        const lesId = _ar.lesId;
        if (!isDone(lesId)) {
          S.done.push(lesId);
          // Unlock next lesson
          const mod = MODULES.find(m => m.id === modId);
          if (mod) {
            const lesIdx = mod.lessons.findIndex(l => l.id === lesId);
            if (lesIdx >= 0 && lesIdx < mod.lessons.length - 1) {
              // next lesson in same module — already accessible
            } else {
              // last lesson of module — unlock next module
              const modIdx = MODULES.indexOf(mod);
              if (modIdx >= 0 && modIdx < MODULES.length - 1) {
                const nextMod = MODULES[modIdx + 1];
                if (!S.open.includes(nextMod.id)) S.open.push(nextMod.id);
              }
            }
          }
          save();
          updateProgressBar();
        }
      }
    }
  }
}

function _arRunValidate(ex, exId) {
  switch (ex.type) {
    case 'truefalse':   return _arValTF(ex.content);
    case 'qcm':         return _arValQCM(ex.content);
    case 'freetext':    return _arValFreetext(ex.content);
    case 'promptlab':   return _arValFreetext(ex.content);
    case 'completion':  return _arValCompletion(ex.content);
    case 'matching':    return _arValMatching(ex.content);
    case 'ranking':     return _arValRanking(ex.content);
    case 'beforeafter': return _arValBA(ex.content);
    case 'checklist':   return _arValChecklist(ex.content);
    default: return { ok: null, msg: '' };
  }
}

function _arValTF(c) {
  const items = document.querySelectorAll('.ar-tf-item');
  let total = items.length, answered = 0, correct = 0;
  items.forEach((el, i) => {
    if (el.dataset.done) { answered++; if (el.dataset.ok === '1') correct++; }
    else {
      // Force reveal unanswered
      el.querySelectorAll('.ar-tf-btn').forEach(b => b.disabled = true);
    }
  });
  if (answered === 0) return { ok: null, msg: 'Réponds à au moins une affirmation.' };
  const t = c.feedback_thresholds ? c.feedback_thresholds.find(t => correct >= t.min && correct <= t.max) : null;
  const msg = t ? `${correct}/${total} correct. ${t.message}` : `${correct}/${total} correct.`;
  const ok = correct >= Math.ceil(total * 0.7);
  return { ok: ok ? true : 'partial', msg };
}

function _arValQCM(c) {
  const opts = document.querySelectorAll('.ar-qcm-opt');
  let selIdx = -1;
  opts.forEach((el, i) => { if (el.classList.contains('ar-qcm-sel')) selIdx = i; });
  if (selIdx === -1) return { ok: null, msg: 'Sélectionne une réponse.' };
  const sel = c.options[selIdx];
  const ok  = sel.correct;
  // Show correct/wrong on options
  opts.forEach((el, i) => {
    el.onclick = null;
    if (c.options[i].correct) el.classList.add('ar-qcm-ok');
    else if (i === selIdx && !ok) el.classList.add('ar-qcm-ko');
  });
  const msg = ok ? (c.feedback_ok || '') : (c.feedback_ko || sel.feedback || '');
  return { ok: ok ? true : false, msg };
}

function _arValFreetext(c) {
  const ta = document.getElementById('ar-textarea');
  if (!ta) return { ok: null, msg: '' };
  const val = ta.value.trim();
  const min = c.min_length || 30;
  if (val.length < min) return { ok: null, msg: `Minimum ${min} caractères. Actuellement : ${val.length}.` };
  ta.readOnly = true;
  const msg = c.feedback_ok || c.feedback || 'Réponse enregistrée.';
  return { ok: true, msg };
}

function _arValCompletion(c) {
  let filled = 0;
  c.blanks.forEach((b, i) => {
    const el = document.getElementById(`ar-compl-${i}`);
    if (el && el.value.trim().length > 5) { filled++; el.readOnly = true; }
  });
  if (filled < Math.ceil(c.blanks.length * 0.6)) {
    return { ok: null, msg: 'Remplis au moins les champs principaux.' };
  }
  const ok = filled === c.blanks.length;
  const msg = ok ? (c.feedback_ok || 'Complétion validée.') : (c.feedback_ko || `${filled}/${c.blanks.length} champs remplis.`);
  return { ok: ok ? true : 'partial', msg };
}

function _arValMatching(c) {
  const total = c.column_a.length;
  const matched = Object.keys(_arMatchPairs).length;
  if (matched < Math.ceil(total * 0.5)) return { ok: null, msg: 'Associe au moins la moitié des éléments.' };
  let correct = 0;
  Object.entries(_arMatchPairs).forEach(([a, b]) => {
    if (c.answers[a] === b) correct++;
    // Show color feedback
    const aEl = document.getElementById(`ar-ma-${a}`);
    const bEl = document.getElementById(`ar-mb-${b}`);
    const isOk = c.answers[a] === b;
    if (aEl) aEl.classList.add(isOk ? 'ar-match-ok' : 'ar-match-ko');
    if (bEl) bEl.classList.add(isOk ? 'ar-match-ok' : 'ar-match-ko');
  });
  // Show correct answers for wrong ones
  Object.entries(_arMatchPairs).forEach(([a, b]) => {
    if (c.answers[a] !== b) {
      const correctB = document.getElementById(`ar-mb-${c.answers[a]}`);
      if (correctB) correctB.classList.add('ar-match-correct-ans');
    }
  });
  const ok = correct >= Math.ceil(total * 0.7);
  return { ok: ok ? true : 'partial', msg: `${correct}/${matched} associations correctes.` };
}

function _arValRanking(c) {
  const list = document.getElementById('ar-rank-list');
  if (!list) return { ok: null, msg: '' };
  const order = [...list.querySelectorAll('.ar-rank-item')].map(el => el.dataset.id);
  // Disable dragging
  list.querySelectorAll('.ar-rank-item').forEach(el => el.setAttribute('draggable', 'false'));
  if (c.correct_order && c.correct_order.length > 0) {
    const matches = order.filter((id, i) => c.correct_order[i] === id).length;
    const ok = matches >= Math.ceil(c.correct_order.length * 0.6);
    return { ok: ok ? true : 'partial', msg: (c.feedback || `${matches}/${order.length} positions correctes.`) };
  }
  return { ok: true, msg: c.feedback || 'Classement enregistré.' };
}

function _arValBA(c) {
  const pairs = document.querySelectorAll('.ar-ba-pair');
  let total = pairs.length, correct = 0, answered = 0;
  pairs.forEach(p => {
    if (p.dataset.ok !== undefined) {
      answered++;
      if (p.dataset.ok === '1') correct++;
    }
  });
  if (answered === 0) return { ok: null, msg: 'Sélectionne la meilleure version pour chaque paire.' };
  const ok = correct >= Math.ceil(total * 0.7);
  return { ok: ok ? true : 'partial', msg: `${correct}/${answered} bonnes sélections. ${c.feedback || ''}` };
}

function _arValChecklist(c) {
  const items = document.querySelectorAll('.ar-ck-item');
  const checked = [...items].filter(el => el.dataset.on === '1').length;
  const total = items.length;
  const t = c.feedback_thresholds ? c.feedback_thresholds.find(t => checked >= t.min && checked <= t.max) : null;
  const msg = t ? `${checked}/${total} cochés. ${t.message}` : `${checked}/${total} cochés.`;
  const ok = checked >= Math.ceil(total * 0.7);
  return { ok: ok ? true : 'partial', msg };
}

// ── Skip (étoile) ────────────────────────────────────────────────────────

function arSkip() {
  if (S.stars <= 0) return;
  S.stars--;
  save();
  updateStarsDisplay();
  _ar.answered = true;
  _ar.skipped++;
  const bubbleTxt = document.getElementById('ar-bubble-txt');
  if (bubbleTxt) bubbleTxt.textContent = _rnd(_AR_SKIP);
  const btns = document.getElementById('ar-btns');
  const isLast = _ar.idx === _ar.ids.length - 1;
  if (btns) btns.innerHTML = `<button class="ar-btn-next" onclick="arNext()">${isLast ? 'Voir le résultat →' : 'Exercice suivant →'}</button>`;
}

// ── Next ─────────────────────────────────────────────────────────────────

function arNext() {
  _ar.idx++;
  _ar.answered = false;
  _arMatchSel = { a: null, b: null };
  _arMatchPairs = {};
  if (_ar.idx >= _ar.ids.length) {
    _arComplete();
    return;
  }
  // Animate out
  const card = document.getElementById('ar-card');
  if (card) {
    card.classList.add('ar-card-out');
    setTimeout(() => _renderAR(_arTransMsg(_ar.idx)), 280);
  } else {
    _renderAR(_arTransMsg(_ar.idx));
  }
}

// ── Completion ───────────────────────────────────────────────────────────

function _arComplete() {
  const { modId, lesId, ids, passed, skipped } = _ar;
  const mod  = MODULES.find(m => m.id === modId);
  const total = ids.length;
  const done  = passed + skipped;
  const pct   = Math.round(passed / total * 100);
  const allLes = MODULES.flatMap(m => m.lessons.map(l => ({ ...l, modId: m.id })));
  const idx    = allLes.findIndex(l => l.id === lesId);
  const next   = allLes[idx + 1];

  const ariaMsg = _rnd(_AR_COMPLETE).replace('{n}', total);

  document.getElementById('main').innerHTML = `
    <div class="ar-wrap">
      <div class="ar-rail"><div class="ar-rail-fill" style="width:100%"></div></div>
      <div class="ar-topbar">
        <button class="ar-back" onclick="openLesson(${modId},'${lesId}')">← Retour</button>
        <div class="ar-topbar-center">
          <span class="ar-mod-chip">${mod.code} · ${lesId}</span>
        </div>
        <div class="ar-step-count">${total}<span class="ar-step-sep">/</span>${total}</div>
      </div>

      <div class="ar-body">
        <div class="ar-aria-row">
          <div class="ar-avatar">🤖</div>
          <div class="ar-bubble"><div class="ar-bubble-name">ARIA</div><div>${ariaMsg}</div></div>
        </div>

        <div class="ar-complete-card">
          <span class="ar-complete-icon">🏆</span>
          <div class="ar-complete-title">Leçon terminée !</div>
          <div class="ar-complete-sub">${lesId} · ${mod.title}</div>
          <div class="ar-complete-stats">
            <div class="ar-cstat"><div class="ar-cstat-val" style="color:var(--success)">${passed}</div><div class="ar-cstat-lbl">Réussis</div></div>
            <div class="ar-cstat"><div class="ar-cstat-val" style="color:#fbbf24">${skipped}</div><div class="ar-cstat-lbl">Passés</div></div>
            <div class="ar-cstat"><div class="ar-cstat-val">${total}</div><div class="ar-cstat-lbl">Total</div></div>
            <div class="ar-cstat"><div class="ar-cstat-val" style="color:var(--accent)">${pct}%</div><div class="ar-cstat-lbl">Score</div></div>
          </div>
          <div class="ar-complete-btns">
            ${next ? `<button class="ar-btn-next" onclick="openLesson(${next.modId},'${next.id}')">Leçon suivante : ${next.title} →</button>` : ''}
            <button class="ar-btn-validate" onclick="openAriaRunner(${modId},'${lesId}')">Recommencer →</button>
            <button class="ar-back" onclick="renderHome()">Retour accueil</button>
          </div>
        </div>
      </div>
    </div>`;

  renderSidebar();
  updateProgressBar();
  window.scrollTo(0, 0);
}

const _AR_COMPLETE = [
  "Terminé. Tu viens de faire les {n} exercices. C'est comme ça qu'on progresse vraiment.",
  "C'est fini. {n} exercices. La plupart des gens ne font pas ça — toi oui.",
  "Leçon complète. {n} exercices. Tu es prêt pour la suite.",
  "Bien joué. {n} exercices faits."
];
