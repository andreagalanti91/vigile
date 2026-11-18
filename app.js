/* Vigile – strumento di studio per il concorso di Istruttore di Vigilanza (Poggibonsi).
   Vanilla JS, nessuna dipendenza. Stato in localStorage (chiave "iv2"). */
(function () {
  "use strict";

  /* ---------------- Dati ---------------- */
  const EX = window.IV_EXTRA || {};
  const ORDER = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"];
  const PLACEHOLDER = {
    m1: ["Codice della strada e infortunistica", "ottima"], m2: ["Procedimento sanzionatorio e depenalizzazione", "ottima"],
    m3: ["Edilizia, urbanistica e ambiente", "ottima"], m4: ["Commercio, pubblici esercizi, ricettività e turismo", "ottima"],
    m5: ["Diritto penale, procedura penale e PG", "buona"], m6: ["Polizia locale, pubblica sicurezza e sicurezza urbana", "buona"],
    m7: ["Enti locali, pubblico impiego, anticorruzione", "nozioni"], m8: ["Procedimento amministrativo, privacy, digitale, appalti", "nozioni"],
    m9: ["Costituzione, diritto civile e amministrativo, protezione civile, sicurezza sul lavoro", "nozioni"]
  };
  const loaded = {};
  (window.IV_MODULES || []).forEach(m => { loaded[m.id] = m; });
  const MODS = ORDER.map((id, i) => loaded[id] ? norm(loaded[id]) : { id, n: i + 1, title: PLACEHOLDER[id][0], livello: PLACEHOLDER[id][1], missing: true });
  const AV = MODS.filter(m => !m.missing);
  const byId = id => MODS.find(m => m.id === id);
  function norm(m) {
    ["fonti", "teoria", "procedura", "dati", "casi", "errori", "novita", "flash", "quiz", "sitografia"].forEach(k => { if (!Array.isArray(m[k])) m[k] = []; });
    m.short = m.short || m.title;
    m.teoria.forEach(c => { c.h = String(c.h || "").replace(/^\s*\d+[.)]\s*/, ""); });
    return m;
  }
  const LV = { ottima: "Ottima conoscenza", buona: "Buona conoscenza", sufficiente: "Conoscenza sufficiente", nozioni: "Nozioni" };

  /* ---------------- Stato ---------------- */
  const KEY = "iv2";
  const DEF = { start: null, read: {}, srs: {}, quiz: {}, wrong: {}, drafts: {}, evals: {}, log: {}, fresh: {}, theme: "auto", maxChars: 4000, newPerDay: 15 };
  let DB;
  try { DB = Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { DB = Object.assign({}, DEF); }
  let saveT;
  function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} }, 150); }
  function saveNow() { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} }
  function act(n) { const d = today(); DB.log[d] = (DB.log[d] || 0) + (n || 1); save(); }

  /* ---------------- Utilità ---------------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const fold = s => strip(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  function today(off) { const d = new Date(); d.setDate(d.getDate() + (off || 0)); return iso(d); }
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const fmt = s => { s = Math.max(0, s | 0); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };
  function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("on"), 2200); }
  function applyTheme() { if (DB.theme === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", DB.theme); }
  applyTheme();

  const IC = {
    oggi: '<path d="M4 5h16v15H4z"/><path d="M4 9h16M9 3v4M15 3v4"/>',
    moduli: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>',
    ripasso: '<rect x="3" y="6" width="14" height="13" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v11"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.6V14M12 17.5v.01"/>',
    scritto: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    orale: '<path d="M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    bando: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
    cerca: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    altro: '<circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>'
  };
  const svg = k => '<svg viewBox="0 0 24 24" aria-hidden="true">' + IC[k] + "</svg>";

  /* ---------------- Carte (ripasso a intervalli) ---------------- */
  const INT = [0, 1, 3, 7, 16, 35];
  let CARDS = null;
  function cards() {
    if (CARDS) return CARDS;
    CARDS = [];
    AV.forEach(m => {
      m.flash.forEach((f, i) => CARDS.push({ id: m.id + ":f:" + i, m: m.id, q: f[0], a: f[1] }));
      m.dati.forEach((d, i) => CARDS.push({ id: m.id + ":d:" + i, m: m.id, q: d[0], a: "<b>" + d[1] + "</b>" + (d[2] ? '<br><span class="muted">' + d[2] + "</span>" : ""), dato: true }));
    });
    return CARDS;
  }
  const cardById = id => cards().find(c => c.id === id);
  function dueCards(mod) { const t = today(); return cards().filter(c => (mod === "all" || c.m === mod) && DB.srs[c.id] && DB.srs[c.id].due <= t); }
  function newCards(mod) { return cards().filter(c => (mod === "all" || c.m === mod) && !DB.srs[c.id]); }
  function newLeft() { return Math.max(0, DB.newPerDay - (DB.fresh[today()] || 0)); }
  function known(mod) { return cards().filter(c => c.m === mod && DB.srs[c.id] && DB.srs[c.id].b >= 3).length; }

  /* ---------------- Progresso ---------------- */
  function modProgress(m) {
    if (m.missing) return { t: 0, q: 0, c: 0 };
    const rd = m.teoria.filter((_, i) => DB.read[m.id + ":" + i]).length;
    const qb = DB.quiz[m.id] || 0;
    const tot = m.flash.length + m.dati.length;
    return { t: pct(rd, m.teoria.length), q: qb, c: pct(known(m.id), tot), rd };
  }
  function streak() { let n = 0; for (let i = 0; i < 400; i++) { const d = today(-i); if (DB.log[d]) n++; else if (i > 0) break; } return n; }
  function currentWeek() {
    if (!DB.start) return 0;
    const diff = Math.floor((new Date(today()) - new Date(DB.start)) / 864e5);
    return diff < 0 ? 0 : Math.floor(diff / 7) + 1;
  }

  /* ---------------- Navigazione ---------------- */
  const NAV = [["oggi", "Oggi"], ["moduli", "Moduli"], ["ripasso", "Ripasso"], ["quiz", "Quiz"], ["scritto", "Scritto"], ["orale", "Orale"], ["bando", "Bando"], ["cerca", "Cerca"]];
  const TAB = [["oggi", "Oggi"], ["moduli", "Moduli"], ["ripasso", "Ripasso"], ["quiz", "Quiz"], ["scritto", "Scritto"], ["altro", "Altro"]];
  function section(r) { const s = r[0]; if (s === "m") return "moduli"; return s; }
  function navs(r) {
    const cur = section(r), due = dueCards("all").length;
    const badge = k => k === "ripasso" && due ? '<span class="badge" aria-label="' + due + ' carte da ripassare">' + due + "</span>" : "";
    $("#rail").innerHTML = '<div class="brand"><b>Vigile</b><span>Istruttore di Vigilanza · Poggibonsi</span></div>' +
      NAV.map(([k, l]) => '<a href="#/' + k + '"' + (cur === k ? ' aria-current="page"' : "") + ">" + svg(k) + "<span>" + l + "</span>" + badge(k) + "</a>").join("") +
      '<a href="#/altro"' + (cur === "altro" ? ' aria-current="page"' : "") + ">" + svg("altro") + "<span>Impostazioni</span></a>" +
      '<div class="foot">Dati salvati solo su questo dispositivo.</div>';
    const alt = ["orale", "bando", "cerca", "altro", "novita"];
    $("#tabbar").innerHTML = TAB.map(([k, l]) => '<a href="#/' + k + '"' + ((cur === k || (k === "altro" && alt.includes(cur))) ? ' aria-current="page"' : "") + ">" + svg(k) + "<span>" + l + "</span></a>").join("");
  }

  let cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    const r = (location.hash.replace(/^#\/?/, "") || "oggi").split("/").map(decodeURIComponent);
    navs(r);
    const V = { oggi: vOggi, moduli: vModuli, m: vModulo, ripasso: vRipasso, quiz: vQuiz, scritto: vScritto, orale: vOrale, bando: vBando, cerca: vCerca, altro: vAltro, novita: vNovita }[r[0]] || vOggi;
    const main = $("#main");
    main.innerHTML = V(r) || "";
    if (main._after) { const f = main._after; main._after = null; f(); }
    const anchor = r[0] === "m" && r[3];
    if (anchor) { const el = document.getElementById("ch-" + anchor); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
  }
  const after = f => { $("#main")._after = f; };
  window.addEventListener("hashchange", route);

  /* ---------------- Oggi ---------------- */
  function vOggi() {
    const w = currentWeek(), plan = EX.piano || [];
    const wk = plan.find(p => p.w === Math.min(Math.max(w, 1), 9));
    const due = dueCards("all").length, nl = Math.min(newLeft(), newCards("all").length);
    let weekMods = (wk && wk.mods.length ? wk.mods : ORDER).map(byId).filter(m => !m.missing);
    if (!weekMods.length) weekMods = AV;
    let nextCh = null;
    weekMods.some(m => m.teoria.some((c, i) => { if (!DB.read[m.id + ":" + i]) { nextCh = { m, i, c }; return true; } return false; }));
    const qMod = weekMods.slice().sort((a, b) => (DB.quiz[a.id] || 0) - (DB.quiz[b.id] || 0))[0];
    let nextCase = null;
    weekMods.some(m => m.casi.some((c, i) => { const k = m.id + ":c:" + i; if (!DB.evals[k]) { nextCase = { m, i, c, k }; return true; } return false; }));

    const tasks = [];
    tasks.push(['<span class="n">' + (due + nl) + "</span>", "<b>Carte da ripassare</b><br><span class='muted small'>" + due + " in scadenza, " + nl + " nuove</span>", '<a class="btn sm" href="#/ripasso">Ripassa</a>']);
    if (nextCh) tasks.push(['<span class="n">' + nextCh.m.n + "</span>", "<b>Leggi: " + esc(nextCh.c.h) + "</b><br><span class='muted small'>" + esc(nextCh.m.short) + " · capitolo " + (nextCh.i + 1) + " di " + nextCh.m.teoria.length + "</span>", '<a class="btn sm ghost" href="#/m/' + nextCh.m.id + "/teoria/" + nextCh.i + '">Apri</a>']);
    if (qMod) tasks.push(['<span class="n">' + qMod.n + "</span>", "<b>Quiz: " + esc(qMod.short) + "</b><br><span class='muted small'>Miglior risultato " + (DB.quiz[qMod.id] || 0) + "%</span>", '<a class="btn sm ghost" href="#/quiz/m/' + qMod.id + '">Inizia</a>']);
    if (nextCase) tasks.push(['<span class="n">' + nextCase.m.n + "</span>", "<b>Scritto: " + esc(nextCase.c.titolo) + "</b><br><span class='muted small'>Caso pratico a tempo con schema di correzione</span>", '<a class="btn sm ghost" href="#/scritto/' + nextCase.k + '">Scrivi</a>']);

    const totCh = AV.reduce((s, m) => s + m.teoria.length, 0), rdCh = Object.keys(DB.read).length;
    const st = streak();
    const startForm = '<label class="small muted" for="start">Inizio del piano</label><div class="row" style="margin-top:4px"><input type="date" id="start" value="' + (DB.start || today()) + '"><button class="btn sm quiet" id="setStart">' + (DB.start ? "Aggiorna" : "Imposta") + "</button></div>";

    after(() => {
      $("#setStart").onclick = () => { DB.start = $("#start").value || today(); save(); toast("Data di inizio salvata"); route(); };
    });

    return '<header class="page-head"><p class="muted small">' + new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" }) + (st ? " · " + st + (st === 1 ? " giorno" : " giorni") + " di studio di fila" : "") + "</p>" +
      "<h1>" + (w ? (w > 9 ? "Ripasso finale" : "Settimana " + w + " di 9") : "Piano di studio in 9 settimane") + "</h1>" +
      "<p>" + (wk && w ? esc(wk.txt) : "Imposta la data di inizio per avere ogni giorno le attività della settimana. Il piano segue le priorità del bando: più spazio alle materie a «ottima conoscenza».") + "</p></header>" +
      '<div class="today"><section class="panel" aria-labelledby="t-oggi"><h2 id="t-oggi">Da fare oggi</h2><ul class="tasks">' +
      tasks.map(t => '<li><span aria-hidden="true">' + t[0] + '</span><span class="grow">' + t[1] + "</span>" + t[2] + "</li>").join("") + "</ul></section>" +
      '<section class="panel stack" aria-labelledby="t-piano"><h2 id="t-piano">Il piano</h2>' + startForm +
      '<ol class="plan">' + plan.map(p => '<li class="' + (p.w === w ? "now" : p.w < w ? "done" : "") + '"><b>' + p.w + "</b><span>" + esc(p.txt) + "</span></li>").join("") + "</ol></section></div>" +
      '<section style="margin-top:28px"><div class="row" style="justify-content:space-between;margin-bottom:12px"><h2>Avanzamento</h2><span class="muted small">' + rdCh + " di " + totCh + " capitoli letti</span></div>" + modGrid() + "</section>";
  }

  function modGrid() {
    return '<div class="modmap">' + MODS.map(m => {
      const p = modProgress(m);
      const lv = "var(--lv-" + m.livello + ")";
      if (m.missing) return '<div class="mod missing" style="--lv:' + lv + '"><span class="num">' + m.n + "</span><h3>" + esc(m.title) + '</h3><span class="muted small">Contenuti in preparazione</span></div>';
      return '<a class="mod" style="--lv:' + lv + '" href="#/m/' + m.id + '/teoria"><span class="num">' + m.n + "</span><h3>" + esc(m.title) + '</h3><span class="lv"><i></i>' + LV[m.livello] + (m.settimane ? " · settimana " + esc(m.settimane) : "") + "</span>" +
        '<div class="stats"><div>Teoria ' + p.t + '%<div class="meter"><i style="width:' + p.t + '%"></i></div></div><div>Quiz ' + p.q + '%<div class="meter"><i style="width:' + p.q + '%"></i></div></div><div>Carte ' + p.c + '%<div class="meter"><i style="width:' + p.c + '%"></i></div></div></div></a>';
    }).join("") + "</div>";
  }

  /* ---------------- Moduli ---------------- */
  function vModuli() {
    return '<header class="page-head"><h1>Moduli</h1><p>Nove moduli ordinati come il piano. Il colore del bordo indica il livello richiesto dal bando: più scuro, più profondità.</p><p><a href="#/novita/da-verificare">Vedi tutte le novità 2024–2026 e i punti da verificare</a></p></header>' + modGrid();
  }

  // Riferimenti normativi tra parentesi -> <cite> + margine
  const REF = /\(([^()]{0,160}?(?:\bartt?\.|\bL\.\s?R?\.?|\bD\.\s?Lgs|\bD\.L\.|\bD\.?P\.?R\.|\bc\.\s?p\.|\bc\.p\.p|\bc\.c\.|\bCdS\b|\bTUEL\b|\bCost\.|\bTULPS\b|\bR\.D\.|\bGDPR\b|\bReg\.|\bCass\.|\bCorte\b|\bD\.M\.|\bL\.\s?\d)[^()]{0,160}?)\)/g;
  function annotate(html) {
    const refs = [];
    const out = String(html).replace(REF, (all, inner) => { const t = strip(inner); if (refs.indexOf(t) < 0) refs.push(t); return "<cite>(" + inner + ")</cite>"; });
    return { html: out, refs };
  }
  function para(html, label) {
    const a = annotate(html);
    const body = /^\s*<(ul|ol|p|table)/i.test(a.html) ? a.html : "<p>" + a.html + "</p>";
    return '<div class="para"><div class="txt">' + body + '</div><div class="margin" aria-hidden="true"><span>' + label + "</span>" + a.refs.slice(0, 4).map(r => "<span>" + esc(r) + "</span>").join("") + "</div></div>";
  }

  function vModulo(r) {
    const m = byId(r[1]);
    if (!m || m.missing) return '<p>Modulo non disponibile. <a href="#/moduli">Torna ai moduli</a></p>';
    const tab = r[2] || "teoria";
    const tabs = [["teoria", "Teoria"], ["schede", "Schede e dati"], ["casi", "Casi pratici (" + m.casi.length + ")"], ["novita", "Novità 2024–26 (" + m.novita.length + ")"]];
    const p = modProgress(m);
    const head = '<header class="mhead"><a class="crumb" href="#/moduli">Moduli</a> <span class="muted small">/ Modulo ' + m.n + "</span><h1>" + esc(m.title) + '</h1><div class="row"><span class="lv" style="--lv:var(--lv-' + m.livello + ')"><i></i>' + LV[m.livello] + "</span>" +
      (m.settimane ? '<span class="muted small">Settimana ' + esc(m.settimane) + "</span>" : "") + '<span class="muted small">Teoria letta ' + p.t + "%</span></div>" +
      (m.intro ? '<p style="max-width:68ch;margin-top:10px">' + m.intro + "</p>" : "") +
      '<div class="row"><a class="btn sm" href="#/quiz/m/' + m.id + '">Quiz del modulo</a><a class="btn sm ghost" href="#/ripasso/' + m.id + '">Ripassa le carte</a></div></header>';
    const nav = '<nav class="mtabs" aria-label="Sezioni del modulo">' + tabs.map(([k, l]) => '<a href="#/m/' + m.id + "/" + k + '"' + (k === tab ? ' aria-current="true"' : "") + ">" + l + "</a>").join("") + "</nav>";
    let body = "";
    if (tab === "teoria") body = teoria(m);
    else if (tab === "schede") body = schede(m);
    else if (tab === "casi") body = casiList(m);
    else body = novita(m);
    return head + nav + body;
  }

  function teoria(m) {
    if (!m.teoria.length) return '<p class="muted">Teoria non ancora disponibile.</p>';
    after(() => {
      $$("[data-read]").forEach(b => b.onclick = () => {
        const k = b.dataset.read, on = !DB.read[k];
        if (on) { DB.read[k] = 1; act(); } else delete DB.read[k];
        save();
        b.setAttribute("aria-pressed", on); b.lastChild.textContent = on ? "Letto" : "Segna come letto";
        const t = $('.toc a[href$="/' + k.split(":")[1] + '"]'); if (t) t.classList.toggle("read", on);
      });
    });
    const toc = '<aside class="toc" aria-label="Indice"><ol>' + m.teoria.map((c, i) => '<li><a class="' + (DB.read[m.id + ":" + i] ? "read" : "") + '" href="#/m/' + m.id + "/teoria/" + i + '"><span>' + (i + 1) + "</span><span>" + esc(c.h) + "</span></a></li>").join("") + "</ol></aside>";
    const chs = m.teoria.map((c, i) => {
      const k = m.id + ":" + i, on = !!DB.read[k];
      const ps = (Array.isArray(c.p) ? c.p : [c.p]).map((x, j) => para(x, (i + 1) + "." + (j + 1))).join("");
      return '<section class="chapter" id="ch-' + i + '"><header><span class="cn">' + (i + 1) + "</span><h2>" + esc(c.h) + "</h2></header>" + ps +
        '<footer><button class="check" data-read="' + k + '" aria-pressed="' + on + '">' + svg("check") + "<span>" + (on ? "Letto" : "Segna come letto") + "</span></button></footer></section>";
    }).join("");
    return '<div class="reader"><div>' + chs + "</div>" + toc + "</div>";
  }

  function schede(m) {
    const fonti = m.fonti.length ? '<section class="stack"><h2>Fonti normative</h2><div class="tbl-wrap"><table><thead><tr><th>Riferimento</th><th>Contenuto</th></tr></thead><tbody>' +
      m.fonti.map(f => '<tr><td class="ref"><b>' + (f.url ? '<a href="' + esc(f.url) + '" target="_blank" rel="noopener">' + f.ref + "</a>" : f.ref) + "</b>" + (f.nuovo ? '<span class="new-tag">nuovo</span>' : "") + "</td><td>" + f.txt + "</td></tr>").join("") + "</tbody></table></div></section>" : "";
    const dati = m.dati.length ? '<section class="stack"><div class="row" style="justify-content:space-between"><h2>Dati da memorizzare</h2><a class="btn sm ghost" href="#/ripasso/' + m.id + '">Allenati con le carte</a></div><div class="tbl-wrap"><table><thead><tr><th>Voce</th><th>Valore</th><th>Norma</th></tr></thead><tbody>' +
      m.dati.map(d => "<tr><td>" + d[0] + '</td><td class="val">' + d[1] + '</td><td class="muted small">' + (d[2] || "") + "</td></tr>").join("") + "</tbody></table></div></section>" : "";
    const proc = m.procedura.length ? '<section class="stack"><h2>Procedura operativa</h2><ol class="steps">' + m.procedura.map(s => "<li><span>" + s + "</span></li>").join("") + "</ol></section>" : "";
    const err = m.errori.length ? '<section class="stack"><h2>Errori frequenti</h2><ul class="errs">' + m.errori.map(s => "<li>" + s + "</li>").join("") + "</ul></section>" : "";
    const sito = m.sitografia.length ? '<section class="stack"><h2>Per approfondire online</h2><ul>' + m.sitografia.map(s => '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.t) + "</a></li>").join("") + "</ul></section>" : "";
    return '<div class="stack" style="--gap:28px">' + dati + '<div class="cols">' + proc + err + "</div>" + fonti + sito + "</div>";
  }

  function casiList(m) {
    if (!m.casi.length) return '<p class="muted">Nessun caso pratico.</p>';
    return '<div class="stack">' + m.casi.map((c, i) => {
      const k = m.id + ":c:" + i, ev = DB.evals[k];
      return '<article class="panel stack"><div class="row" style="justify-content:space-between"><h2>' + esc(c.titolo) + "</h2>" + (ev ? '<span class="muted small">Ultima autovalutazione ' + ev.score + "/30</span>" : "") + '</div><p class="traccia">' + c.traccia + "</p>" +
        '<div class="row"><a class="btn sm" href="#/scritto/' + k + '">Scrivi a tempo</a></div>' +
        "<details><summary>Schema di correzione</summary><ul>" + (c.schema || []).map(s => "<li>" + s + "</li>").join("") + "</ul></details>" +
        (c.modello ? '<details><summary>Traccia di risposta</summary><div class="model">' + c.modello + "</div></details>" : "") + "</article>";
    }).join("") + "</div>";
  }

  function novita(m) {
    if (!m.novita.length) return '<p class="muted">Nessuna novità segnalata.</p>';
    return '<div class="stack" style="max-width:76ch"><p class="muted">Riforme e modifiche recenti. Quelle «da verificare» vanno controllate sul testo vigente prima della prova.</p>' +
      m.novita.map(n => '<div class="callout' + (n.stato === "verificato" ? " ok" : "") + '"><h3>' + esc(n.titolo) + '</h3><div class="state">' + (n.stato === "verificato" ? "Verificato" : "Da verificare") + (n.fonte ? " · " + n.fonte : "") + '</div><p style="margin:.5em 0 0">' + n.testo + "</p></div>").join("") + "</div>";
  }

  /* ---------------- Ripasso ---------------- */
  let D = null; // sessione carte
  function vRipasso(r) {
    const mod = r[1] && byId(r[1]) ? r[1] : (D && D.mod) || "all";
    if (!D || D.mod !== mod || D.i >= D.queue.length) {
      if (!D || D.mod !== mod) {
        const due = shuffle(dueCards(mod).map(c => c.id));
        const nw = newCards(mod).slice(0, newLeft()).map(c => c.id);
        D = { mod, queue: due.concat(nw), i: 0, back: false, done: 0, nw: nw.length };
      }
    }
    const sel = '<label class="sr" for="dmod">Modulo</label><select id="dmod"><option value="all">Tutti i moduli</option>' + AV.map(m => '<option value="' + m.id + '"' + (m.id === mod ? " selected" : "") + ">" + m.n + ". " + esc(m.short) + "</option>").join("") + "</select>";
    const counts = [0, 0, 0, 0, 0, 0];
    cards().forEach(c => { if (mod === "all" || c.m === mod) counts[DB.srs[c.id] ? DB.srs[c.id].b : 0]++; });
    const mx = Math.max.apply(null, counts) || 1;
    const boxes = '<div class="boxes" role="img" aria-label="Carte per livello di memoria">' + counts.map((n, i) => '<div><span>' + n + '</span><i style="height:' + Math.max(2, n / mx * 60) + 'px"></i><span>' + (i ? "L" + i : "nuove") + "</span></div>").join("") + "</div>";

    after(() => {
      $("#dmod").onchange = e => { D = null; location.hash = "#/ripasso/" + (e.target.value === "all" ? "" : e.target.value); };
      const fl = $(".flash");
      if (fl) {
        const flip = () => { D.back = !D.back; fl.classList.toggle("back", D.back); $(".grade").hidden = !D.back; };
        fl.onclick = flip; fl.onkeydown = e => { if (e.key === "Enter") flip(); };
        $$(".grade [data-g]").forEach(b => b.onclick = () => grade(+b.dataset.g));
        const kh = e => {
          if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
          if (e.key === " ") { e.preventDefault(); flip(); }
          else if (D.back && "123".includes(e.key)) grade(+e.key - 1);
        };
        document.addEventListener("keydown", kh); cleanup = () => document.removeEventListener("keydown", kh);
      }
      const rs = $("#restart"); if (rs) rs.onclick = () => { D = null; route(); };
    });

    const top = '<header class="page-head"><h1>Ripasso a intervalli</h1><p>Le carte che sai tornano sempre più di rado (1, 3, 7, 16, 35 giorni); quelle sbagliate tornano subito. Ogni giorno entrano al massimo ' + DB.newPerDay + ' carte nuove.</p></header><div class="row" style="margin-bottom:16px;justify-content:space-between">' + sel + "</div>";
    if (!cards().length) return top + '<p class="muted">Nessuna carta disponibile.</p>';
    if (D.i >= D.queue.length) {
      return top + '<div class="deck panel stack" style="text-align:center"><h2>' + (D.done ? "Sessione completata" : "Niente da ripassare adesso") + "</h2><p class='muted'>" +
        (D.done ? D.done + " carte ripassate. " : "") + "Torna domani per le prossime in scadenza.</p>" + boxes + '<div class="row" style="justify-content:center"><button class="btn quiet" id="restart">Ricarica la sessione</button><a class="btn ghost" href="#/quiz">Vai ai quiz</a></div></div>';
    }
    const c = cardById(D.queue[D.i]); const s = DB.srs[c.id];
    const m = byId(c.m);
    const lvl = s ? "Livello " + s.b : "Nuova";
    const nx = b => b === 0 ? "oggi" : INT[b] === 1 ? "domani" : "tra " + INT[b] + " giorni";
    const nb = s ? Math.min(5, s.b + 1) : 1;
    return top + '<div class="deck"><div class="qtop"><span>Carta ' + (D.i + 1) + " di " + D.queue.length + "</span><span>" + lvl + '</span></div><div class="meter" style="margin-bottom:14px"><i style="width:' + pct(D.i, D.queue.length) + '%"></i></div>' +
      '<div class="card3d"><div class="flash' + (D.back ? " back" : "") + '" tabindex="0" role="button" aria-label="Gira la carta">' +
      '<div class="face"><span class="src">' + m.n + ". " + esc(m.short) + (c.dato ? " · dato da ricordare" : "") + '</span><div class="q">' + c.q + '</div><span class="hint">Tocca o premi spazio per vedere la risposta</span></div>' +
      '<div class="face b"><span class="src">' + c.q + '</span><div class="a">' + c.a + "</div></div></div></div>" +
      '<div class="grade"' + (D.back ? "" : " hidden") + '><button class="btn ko" data-g="0">Non la sapevo<small>torna oggi · 1</small></button><button class="btn quiet" data-g="1">Incerta<small>domani · 2</small></button><button class="btn ok" data-g="2">La sapevo<small>' + nx(nb) + " · 3</small></button></div>" + "</div>" +
      '<div class="deck" style="margin-top:28px">' + boxes + "</div>";
  }
  function grade(g) {
    const id = D.queue[D.i], s = DB.srs[id];
    if (!s) DB.fresh[today()] = (DB.fresh[today()] || 0) + 1;
    let b = s ? s.b : 0, due;
    if (g === 0) { b = 1; due = today(); D.queue.push(id); }
    else if (g === 1) { b = Math.max(1, b); due = today(1); }
    else { b = Math.min(5, b + 1); due = today(INT[b]); }
    DB.srs[id] = { b, due };
    D.i++; D.done++; D.back = false; act(); save(); route();
  }

  /* ---------------- Quiz ---------------- */
  let Q = null;
  function allQ() {
    const r = [];
    AV.forEach(m => m.quiz.forEach((q, i) => r.push(Object.assign({ id: m.id + ":q:" + i, m: m.id }, q))));
    return r;
  }
  const logicQ = () => (EX.logica || []).map((q, i) => Object.assign({ id: "lg:q:" + i, m: "lg" }, q));
  function prep(list) { return list.map(q => { const ord = shuffle(q.o.map((_, i) => i)); return Object.assign({}, q, { o: ord.map(i => q.o[i]), c: ord.indexOf(q.c) }); }); }
  function startQuiz(kind, mod) {
    let items, title, timed = 0, feedback = true;
    if (kind === "m") { const m = byId(mod); items = shuffle(allQ().filter(q => q.m === mod)); title = "Quiz · " + m.short; }
    else if (kind === "misto") { items = shuffle(allQ()).slice(0, 20); title = "Quiz misto · 20 domande"; }
    else if (kind === "errori") { const ids = DB.wrong; items = shuffle(allQ().concat(logicQ()).filter(q => ids[q.id])); title = "Ripasso degli errori"; }
    else if (kind === "logica") { items = shuffle(logicQ()); title = "Logica e ragionamento"; }
    else if (kind === "sim") {
      const mat = allQ(), w = { ottima: 3, buona: 2, sufficiente: 1, nozioni: 1 };
      const pool = shuffle(mat).sort((a, b) => (w[byId(b.m).livello] || 1) * Math.random() - (w[byId(a.m).livello] || 1) * Math.random());
      items = shuffle(shuffle(logicQ()).slice(0, 10).concat(pool.slice(0, 20)));
      title = "Simulazione preselezione"; timed = 30 * 60; feedback = false;
    }
    if (!items || !items.length) { toast("Nessuna domanda disponibile"); return; }
    Q = { kind, mod, title, items: prep(items), i: 0, ans: [], timed, left: timed, feedback, end: false };
  }
  function vQuiz(r) {
    if (r[1] && r[1] !== "go") { startQuiz(r[1], r[2]); history.replaceState(null, "", "#/quiz/go"); }
    if (!Q || r[1] !== "go" && !r[1]) return quizHome();
    if (Q.end) return quizEnd();
    const q = Q.items[Q.i], a = Q.ans[Q.i], answered = a !== undefined, show = answered && Q.feedback;
    let tick;
    after(() => {
      $$(".opt").forEach(b => b.onclick = () => answer(+b.dataset.j));
      const nx = $("#next"); if (nx) nx.onclick = next;
      const ex = $("#quit"); if (ex) ex.onclick = () => { Q.end = true; route(); };
      const kh = e => {
        if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
        const k = e.key.toLowerCase(); const j = "1234".indexOf(k) >= 0 ? +k - 1 : "abcd".indexOf(k);
        if (j >= 0 && Q.ans[Q.i] === undefined && j < Q.items[Q.i].o.length) answer(j);
        else if (e.key === "Enter" && Q.ans[Q.i] !== undefined) next();
      };
      document.addEventListener("keydown", kh);
      if (Q.timed) tick = setInterval(() => { Q.left--; const t = $("#qt"); if (t) { t.textContent = fmt(Q.left); t.classList.toggle("low", Q.left < 300); } if (Q.left <= 0) { clearInterval(tick); Q.end = true; route(); } }, 1000);
      cleanup = () => { document.removeEventListener("keydown", kh); clearInterval(tick); };
      const f = $(".opt:not(:disabled)"); if (f && !answered) f.focus({ preventScroll: true });
    });
    const src = q.m === "lg" ? "Logica" : byId(q.m).n + ". " + byId(q.m).short;
    return '<div class="qwrap"><div class="qtop"><span>' + esc(Q.title) + "</span>" + (Q.timed ? '<span class="timer" style="font-size:1.4rem" id="qt">' + fmt(Q.left) + "</span>" : "<span>" + (Q.i + 1) + " / " + Q.items.length + "</span>") + "</div>" +
      '<div class="meter"><i style="width:' + pct(Q.i, Q.items.length) + '%"></i></div>' +
      '<p class="muted small" style="margin-top:16px">' + esc(src) + (Q.timed ? " · domanda " + (Q.i + 1) + " di " + Q.items.length : "") + '</p><h1 class="qtext">' + q.q + "</h1>" +
      '<div class="opts" role="group" aria-label="Risposte">' + q.o.map((o, j) => {
        let cl = "";
        if (show) { if (j === q.c) cl = " right"; else if (j === a) cl = " wrong"; }
        else if (answered && j === a) cl = " right";
        return '<button class="opt' + cl + '" data-j="' + j + '"' + (answered ? " disabled" : "") + '><span class="k">' + "ABCD"[j] + "</span><span>" + o + "</span></button>";
      }).join("") + "</div>" +
      (show ? '<div class="callout expl' + (a === q.c ? " ok" : "") + '"><h3>' + (a === q.c ? "Corretto" : "Sbagliato: la risposta è " + "ABCD"[q.c]) + '</h3><p style="margin:0">' + (q.e || "") + "</p></div>" : "") +
      '<div class="row" style="margin-top:18px;justify-content:space-between"><button class="btn quiet sm" id="quit">Termina</button>' + (answered ? '<button class="btn" id="next">' + (Q.i + 1 < Q.items.length ? "Avanti" : "Vedi il risultato") + "</button>" : '<span class="muted small">Tasti 1–4 per rispondere, Invio per proseguire</span>') + "</div></div>";
  }
  function answer(j) {
    if (Q.ans[Q.i] !== undefined) return;
    const q = Q.items[Q.i]; Q.ans[Q.i] = j;
    if (j === q.c) { if (Q.kind === "errori") delete DB.wrong[q.id]; } else DB.wrong[q.id] = 1;
    act(); save();
    if (!Q.feedback) next(); else route();
  }
  function next() { if (Q.i + 1 < Q.items.length) Q.i++; else Q.end = true; route(); }
  function quizEnd() {
    const n = Q.items.length, ok = Q.items.filter((q, i) => Q.ans[i] === q.c).length, done = Q.ans.filter(x => x !== undefined).length, p = pct(ok, n);
    if (Q.kind === "m" && !Q.saved) { DB.quiz[Q.mod] = Math.max(DB.quiz[Q.mod] || 0, p); Q.saved = 1; save(); }
    const wrong = Q.items.map((q, i) => ({ q, a: Q.ans[i] })).filter(x => x.a !== x.q.c);
    after(() => { $("#again").onclick = () => { startQuiz(Q.kind, Q.mod); route(); }; });
    return '<div class="qwrap stack"><p class="muted">' + esc(Q.title) + '</p><div class="row" style="align-items:baseline;gap:16px"><span class="score">' + ok + "/" + n + '</span><span class="muted">' + p + "% · " + done + " risposte date</span></div>" +
      (Q.kind === "sim" ? '<p class="muted small">Nelle preselezioni il punteggio di solito tiene conto anche delle risposte errate e omesse: controlla il bando o l\'avviso sulla prova.</p>' : "") +
      '<div class="row"><button class="btn" id="again">Rifai</button><a class="btn ghost" href="#/quiz">Altri quiz</a>' + (Object.keys(DB.wrong).length ? '<a class="btn quiet" href="#/quiz/errori">Ripassa gli errori (' + Object.keys(DB.wrong).length + ")</a>" : "") + "</div>" +
      (wrong.length ? "<h2 style='margin-top:20px'>Da rivedere</h2><ol class='review'>" + wrong.map(x => "<li><b>" + x.q.q + "</b><br>Risposta corretta: " + x.q.o[x.q.c] + (x.a !== undefined ? "<br><span class='muted'>Tua risposta: " + x.q.o[x.a] + "</span>" : "<br><span class='muted'>Non risposta</span>") + (x.q.e ? "<br><span class='small muted'>" + x.q.e + "</span>" : "") + "</li>").join("") + "</ol>" : "<p>Nessun errore.</p>") + "</div>";
  }
  function quizHome() {
    const nw = Object.keys(DB.wrong).length, tot = allQ().length;
    return '<header class="page-head"><h1>Quiz</h1><p>' + tot + " domande sulle materie e " + (EX.logica || []).length + " di logica. Gli errori finiscono in un archivio da ripassare finché non li correggi.</p></header>" +
      '<div class="modes">' +
      '<a class="mode" href="#/quiz/misto"><b>Misto</b><span class="muted small">20 domande a caso da tutti i moduli, con spiegazione dopo ogni risposta.</span></a>' +
      '<a class="mode" href="#/quiz/sim"><b>Simulazione preselezione</b><span class="muted small">30 domande in 30 minuti: 20 sulle materie, pesate secondo il bando, e 10 di logica. Risultato alla fine.</span></a>' +
      '<a class="mode" href="#/quiz/errori"' + (nw ? "" : ' aria-disabled="true" style="opacity:.55;pointer-events:none"') + "><b>Ripassa gli errori (" + nw + ')</b><span class="muted small">Solo le domande che hai sbagliato. Rispondendo giusto escono dall\'archivio.</span></a>' +
      '<a class="mode" href="#/quiz/logica"><b>Logica e ragionamento</b><span class="muted small">Serie, sillogismi, percentuali, lessico.</span></a></div>' +
      '<h2 style="margin:28px 0 12px">Per modulo</h2><div class="modes">' + AV.map(m => '<a class="mode" href="#/quiz/m/' + m.id + '"><b>' + m.n + ". " + esc(m.short) + '</b><span class="muted small">' + m.quiz.length + " domande · miglior risultato " + (DB.quiz[m.id] || 0) + "%</span></a>").join("") + "</div>";
  }

  /* ---------------- Scritto ---------------- */
  const W = {}; // timer per chiave
  function allCases() { const r = []; AV.forEach(m => m.casi.forEach((c, i) => r.push({ k: m.id + ":c:" + i, m, c }))); return r; }
  function vScritto(r) {
    if (!r[1]) return scrittoHome();
    if (r[1] === "sim") {
      if (!W.sim || r[2] === "new") {
        const pref = shuffle(allCases()); const seen = {}, pick = [];
        pref.sort((a, b) => (a.m.livello === "ottima" ? 0 : 1) - (b.m.livello === "ottima" ? 0 : 1) + (Math.random() - .5));
        pref.forEach(x => { if (pick.length < 3 && !seen[x.m.id]) { seen[x.m.id] = 1; pick.push(x.k); } });
        W.sim = { keys: pick, left: 90 * 60, run: false, done: false };
        if (r[2] === "new") history.replaceState(null, "", "#/scritto/sim");
      }
      return examView(W.sim, "Simulazione: 3 quesiti in 90 minuti");
    }
    const k = r.slice(1).join(":") === r[1] ? r[1] : r.slice(1).join(":");
    const x = allCases().find(c => c.k === k);
    if (!x) return '<p>Caso non trovato. <a href="#/scritto">Torna allo scritto</a></p>';
    W[k] = W[k] || { keys: [k], left: 30 * 60, run: false, done: false };
    return examView(W[k], x.c.titolo);
  }
  function examView(S, title) {
    const items = S.keys.map(k => allCases().find(c => c.k === k)).filter(Boolean);
    let tick;
    after(() => {
      const tb = $("#tgo"), tt = $("#tt");
      const draw = () => { tt.textContent = fmt(S.left); tt.classList.toggle("low", S.left < 300); tb.textContent = S.run ? "Pausa" : (S.left < (S.keys.length > 1 ? 5400 : 1800) ? "Riprendi" : "Avvia"); };
      const go = () => { clearInterval(tick); if (S.run) tick = setInterval(() => { S.left--; draw(); if (S.left <= 0) { S.run = false; clearInterval(tick); toast("Tempo scaduto"); draw(); } }, 1000); };
      tb.onclick = () => { S.run = !S.run; go(); draw(); };
      $("#tmin").onchange = e => { const v = Math.max(5, Math.min(240, +e.target.value || 30)); S.left = v * 60; draw(); };
      draw(); go();
      $$("textarea[data-k]").forEach(t => {
        const k = t.dataset.k; t.value = DB.drafts[k] || "";
        const upd = () => { const n = t.value.length, w = t.value.trim() ? t.value.trim().split(/\s+/).length : 0, c = $("#wc-" + CSS.escape(k)); c.firstChild.textContent = w + " parole · " + n + " caratteri"; c.classList.toggle("over", n > DB.maxChars); };
        t.oninput = () => { DB.drafts[k] = t.value; save(); upd(); }; upd();
      });
      const cons = $("#consegna"); if (cons) cons.onclick = () => { S.done = true; S.run = false; act(3); saveNow(); route(); };
      $$(".checklist").forEach(cl => {
        const k = cl.dataset.k, tot = $$("input", cl).length;
        const upd = () => { const c = $$("input:checked", cl).length, v = Math.round(c / tot * 30); $("#sc-" + CSS.escape(k)).innerHTML = "Punti trattati " + c + " di " + tot + " · stima <b>" + v + "/30</b> " + (v >= 21 ? "(sopra la soglia di 21)" : "(sotto la soglia di 21)"); DB.evals[k] = { score: v, date: today(), chk: $$("input", cl).map(i => i.checked ? 1 : 0) }; save(); };
        const prev = DB.evals[k]; if (prev && prev.chk) $$("input", cl).forEach((i, j) => i.checked = !!prev.chk[j]);
        $$("input", cl).forEach(i => i.onchange = upd); if (prev) upd();
      });
      const rs = $("#reset"); if (rs) rs.onclick = () => { if (!confirm("Cancellare le bozze di questi quesiti e ripartire?")) return; S.keys.forEach(k => delete DB.drafts[k]); S.done = false; S.run = false; S.left = S.keys.length > 1 ? 5400 : 1800; save(); route(); };
      cleanup = () => clearInterval(tick);
    });
    const blocks = items.map((x, n) => {
      const sch = x.c.schema || [];
      return '<section class="stack" style="margin-bottom:28px">' + (items.length > 1 ? "<h2>Quesito " + (n + 1) + " · " + esc(x.m.short) + "</h2>" : '<p class="muted small">' + x.m.n + ". " + esc(x.m.short) + "</p>") +
        '<p class="traccia">' + x.c.traccia + "</p>" +
        '<label class="sr" for="ta-' + n + '">Risposta</label><textarea id="ta-' + n + '" data-k="' + x.k + '" rows="' + (S.done ? 8 : 16) + '" placeholder="Inquadramento normativo, definizioni, procedura, competenze, conseguenze, conclusione…"></textarea>' +
        '<div class="wc" id="wc-' + x.k + '"><span></span><span>limite impostato ' + DB.maxChars + " caratteri</span></div>" +
        (S.done ? '<div class="panel stack"><h3>Autovalutazione: spunta i punti che hai trattato</h3><ul class="checklist" data-k="' + x.k + '">' + sch.map(s => "<li><label><input type='checkbox'><span>" + s + "</span></label></li>").join("") + '</ul><p id="sc-' + x.k + '" class="small"></p>' +
          (x.c.modello ? '<details open><summary>Traccia di risposta</summary><div class="model">' + x.c.modello + "</div></details>" : "") + "</div>" : "") + "</section>";
    }).join("");
    return '<header class="page-head"><a class="crumb muted small" href="#/scritto">Scritto</a><h1>' + esc(title) + "</h1></header>" +
      '<div class="exam"><div>' + blocks + '<div class="row">' + (S.done ? '<button class="btn quiet" id="reset">Riscrivi da capo</button><a class="btn ghost" href="#/scritto">Altri casi</a>' : '<button class="btn" id="consegna">Consegna e correggi</button>') + "</div></div>" +
      '<aside class="side panel stack"><div class="timer" id="tt" aria-live="off">' + fmt(S.left) + '</div><div class="row"><button class="btn sm" id="tgo">Avvia</button><label class="small muted">Minuti <input id="tmin" type="number" min="5" max="240" value="' + Math.round(S.left / 60) + '" style="width:80px"></label></div>' +
      '<div><b class="small">Struttura della risposta</b><ol class="small" style="padding-left:1.2em;margin:.4em 0 0">' + (EX.strutturaRisposta || []).map(s => "<li>" + s + "</li>").join("") + "</ol></div>" +
      '<p class="small muted" style="margin:0">La bozza si salva da sola su questo dispositivo.</p></aside></div>';
  }
  function scrittoHome() {
    const cs = allCases();
    return '<header class="page-head"><h1>Prova scritta</h1><p>Lo scritto è a risposta aperta, in digitale e con lunghezza massima: allenati a scrivere risposte complete e compatte. Dopo la consegna confronti il testo con lo schema e la traccia di risposta.</p></header>' +
      '<div class="panel row" style="justify-content:space-between;margin-bottom:24px"><div><h2>Simulazione d\'esame</h2><p class="muted small" style="margin:4px 0 0">3 quesiti da moduli diversi, privilegiando le materie a «ottima conoscenza». 90 minuti.</p></div><a class="btn" href="#/scritto/sim/new">Inizia la simulazione</a></div>' +
      AV.filter(m => m.casi.length).map(m => '<section style="margin-bottom:22px"><h2 style="margin-bottom:6px">' + m.n + ". " + esc(m.short) + '</h2><ul class="cases">' + m.casi.map((c, i) => {
        const k = m.id + ":c:" + i, ev = DB.evals[k];
        return '<li><span>' + esc(c.titolo) + "</span><span class='row'>" + (ev ? '<span class="done">' + ev.score + "/30</span>" : DB.drafts[k] ? '<span class="muted small">bozza</span>' : "") + '<a class="btn sm ghost" href="#/scritto/' + k + '">Scrivi</a></span></li>';
      }).join("") + "</ul></section>").join("") + (cs.length ? "" : '<p class="muted">Nessun caso disponibile.</p>');
  }

  /* ---------------- Orale ---------------- */
  function vOrale() {
    const O = EX.orale || {};
    after(() => { const b = $("#hideIt"); if (b) b.onclick = () => { const on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", on); $$(".it").forEach(td => td.style.visibility = on ? "hidden" : ""); b.textContent = on ? "Mostra l'italiano" : "Nascondi l'italiano"; }; });
    return '<header class="page-head"><h1>Prova orale</h1><p>' + esc(O.intro || "") + "</p></header>" +
      '<div class="cols"><section class="stack"><h2>Domande attitudinali</h2>' + (O.attitudinali || []).map(a => "<details class='panel'><summary>" + esc(a[0]) + "</summary><p style='margin:0'>" + esc(a[1]) + "</p></details>").join("") + "</section>" +
      '<section class="stack"><h2>Informatica</h2><ul class="checklist">' + (O.informatica || []).map(s => "<li><label><input type='checkbox'><span>" + esc(s) + "</span></label></li>").join("") + "</ul></section></div>" +
      '<section class="stack" style="margin-top:28px"><div class="row" style="justify-content:space-between"><h2>Inglese su strada</h2><button class="btn sm quiet" id="hideIt" aria-pressed="false">Nascondi l\'italiano</button></div><div class="tbl-wrap"><table><tbody>' + (O.inglese || []).map(e => "<tr><td><b>" + esc(e[0]) + '</b></td><td class="it">' + esc(e[1]) + "</td></tr>").join("") + "</tbody></table></div>" +
      '<h3>Presentazione</h3><p class="traccia" lang="en">' + esc(O.presentazione || "") + "</p></section>";
  }

  /* ---------------- Bando ---------------- */
  function vBando() {
    const B = EX.bando || {};
    return '<header class="page-head"><h1>Il bando</h1><p>' + esc(B.ente || "") + "</p></header>" +
      '<div class="cols"><section class="stack"><h2>Il posto</h2><p>' + esc(B.posto) + "</p><h2>Domanda</h2><p>" + esc(B.domanda) + "</p><h2>Requisiti</h2><ul>" + (B.requisiti || []).map(s => "<li>" + esc(s) + "</li>").join("") + "</ul></section>" +
      '<section class="stack"><h2>Le prove</h2><ol class="steps">' + (B.prove || []).map(p => "<li><span><b>" + esc(p[0]) + "</b><br>" + esc(p[1]) + "</span></li>").join("") + "</ol><p><b>Graduatoria:</b> " + esc(B.graduatoria) + "</p><p><b>Calendario:</b> " + esc(B.calendario) + "</p></section></div>" +
      '<section class="stack" style="margin-top:24px"><h2>Materie e livello richiesto</h2><div class="tbl-wrap"><table><tbody>' + (B.materie || []).map(m => '<tr><td><span class="lv" style="white-space:nowrap;--lv:var(--lv-' + m[0] + ')"><i></i>' + LV[m[0]] + "</span></td><td>" + esc(m[1]) + "</td></tr>").join("") + "</tbody></table></div></section>" +
      '<div class="cols" style="margin-top:24px"><section class="stack"><h2>Trattamento economico annuo</h2><table><tbody>' + (B.economico || []).map(e => "<tr><td>" + esc(e[0]) + '</td><td class="val">' + esc(e[1]) + "</td></tr>").join("") + "</tbody></table></section>" +
      '<section class="stack"><h2>Contatti</h2><p>' + esc(B.contatti) + "</p><h2>Metodo per ogni modulo</h2><ol>" + (EX.metodo || []).map(s => "<li>" + esc(s) + "</li>").join("") + "</ol></section></div>";
  }

  /* ---------------- Novità di tutti i moduli ---------------- */
  function vNovita(r) {
    const only = r[1] === "da-verificare";
    const all = []; AV.forEach(m => m.novita.forEach(n => all.push({ m, n })));
    const list = only ? all.filter(x => x.n.stato !== "verificato") : all;
    const nv = all.filter(x => x.n.stato !== "verificato").length;
    return '<header class="page-head"><h1>Novità 2024–2026</h1><p>Riforme recenti raccolte da tutti i moduli. Prima della prova controlla quelle «da verificare» sul testo vigente (Normattiva, Gazzetta Ufficiale, Raccolta normativa della Regione Toscana).</p></header>' +
      '<div class="seg" role="group" aria-label="Filtro" style="margin-bottom:18px"><a class="btn sm ' + (only ? "quiet" : "") + '" href="#/novita">Tutte (' + all.length + ')</a><a class="btn sm ' + (only ? "" : "quiet") + '" href="#/novita/da-verificare">Da verificare (' + nv + ")</a></div>" +
      '<div class="stack" style="max-width:80ch">' + list.map(x => '<div class="callout' + (x.n.stato === "verificato" ? " ok" : "") + '"><h3>' + esc(x.n.titolo) + '</h3><div class="state"><a href="#/m/' + x.m.id + '/novita">' + x.m.n + ". " + esc(x.m.short) + "</a> · " + (x.n.stato === "verificato" ? "Verificato" : "Da verificare") + (x.n.fonte ? " · " + x.n.fonte : "") + '</div><p style="margin:.5em 0 0">' + x.n.testo + "</p></div>").join("") + "</div>";
  }

  /* ---------------- Cerca ---------------- */
  let IDX = null;
  function index() {
    if (IDX) return IDX;
    IDX = [];
    AV.forEach(m => {
      m.teoria.forEach((c, i) => (Array.isArray(c.p) ? c.p : [c.p]).forEach(p => IDX.push({ w: m.n + ". " + m.short + " · " + c.h, t: strip(p), h: "#/m/" + m.id + "/teoria/" + i })));
      m.fonti.forEach(f => IDX.push({ w: m.n + ". " + m.short + " · fonti", t: strip(f.ref + " – " + f.txt), h: "#/m/" + m.id + "/schede" }));
      m.dati.forEach(d => IDX.push({ w: m.n + ". " + m.short + " · dati", t: strip(d.join(" – ")), h: "#/m/" + m.id + "/schede" }));
      m.flash.forEach(f => IDX.push({ w: m.n + ". " + m.short + " · carta", t: strip(f[0] + " " + f[1]), h: "#/ripasso/" + m.id }));
      m.casi.forEach((c, i) => IDX.push({ w: m.n + ". " + m.short + " · caso pratico", t: strip(c.titolo + ". " + c.traccia), h: "#/scritto/" + m.id + ":c:" + i }));
    });
    IDX.forEach(x => x.f = fold(x.t));
    return IDX;
  }
  let lastQ = "";
  function vCerca() {
    after(() => {
      const inp = $("#q"), out = $("#hits");
      const run = () => {
        lastQ = inp.value; const terms = fold(inp.value).split(" ").filter(t => t.length > 1);
        if (!terms.length) { out.innerHTML = ""; return; }
        const res = index().filter(x => terms.every(t => x.f.includes(t))).slice(0, 60);
        out.innerHTML = res.length ? res.map(x => {
          const pos = Math.max(0, x.f.indexOf(terms[0]) - 70);
          let snip = (pos ? "…" : "") + x.t.slice(pos, pos + 240) + (x.t.length > pos + 240 ? "…" : "");
          snip = esc(snip); terms.forEach(t => { const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"); snip = snip.replace(re, "<mark>$1</mark>"); });
          return '<li><a href="' + x.h + '"><span class="where">' + esc(x.w) + "</span><br>" + snip + "</a></li>";
        }).join("") : '<li class="muted">Nessun risultato. Prova con un numero di articolo («art. 158») o una parola più breve.</li>';
      };
      inp.oninput = run; inp.value = lastQ; run(); inp.focus();
    });
    return '<header class="page-head"><h1>Cerca</h1><p>Teoria, fonti, dati, carte e casi pratici di tutti i moduli.</p></header><div class="searchbox"><label class="sr" for="q">Cerca</label><input id="q" type="search" placeholder="Es. art. 158, ordinanza-ingiunzione, CIN" autocomplete="off"></div><ul class="hits" id="hits"></ul>';
  }

  /* ---------------- Altro / impostazioni ---------------- */
  function vAltro() {
    after(() => {
      $("#theme").onchange = e => { DB.theme = e.target.value; applyTheme(); save(); };
      $("#maxc").onchange = e => { DB.maxChars = Math.max(500, +e.target.value || 4000); save(); toast("Limite salvato"); };
      $("#npd").onchange = e => { DB.newPerDay = Math.max(0, Math.min(100, +e.target.value || 15)); save(); D = null; toast("Salvato"); };
      $("#exp").onclick = () => { const b = new Blob([JSON.stringify(DB, null, 1)], { type: "application/json" }); const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "vigile-progressi-" + today() + ".json"; a.click(); URL.revokeObjectURL(a.href); };
      $("#imp").onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { DB = Object.assign({}, DEF, JSON.parse(t)); saveNow(); applyTheme(); D = null; toast("Progressi importati"); route(); } catch (x) { toast("File non valido: serve un JSON esportato da Vigile"); } }); };
      $("#wipe").onclick = () => { if (confirm("Cancellare tutti i progressi, le bozze e le carte da questo dispositivo?")) { DB = Object.assign({}, DEF); saveNow(); D = null; Q = null; route(); toast("Progressi cancellati"); } };
    });
    return '<header class="page-head"><h1>Altro</h1></header><div class="modes" style="margin-bottom:28px"><a class="mode" href="#/orale"><b>Prova orale</b><span class="muted small">Attitudinali, informatica, inglese.</span></a><a class="mode" href="#/bando"><b>Il bando</b><span class="muted small">Requisiti, prove, materie, scadenze.</span></a><a class="mode" href="#/cerca"><b>Cerca</b><span class="muted small">In tutti i contenuti.</span></a><a class="mode" href="#/novita/da-verificare"><b>Novità e punti da verificare</b><span class="muted small">Le riforme 2024–2026 di tutti i moduli in un elenco.</span></a></div>' +
      '<section class="panel stack" style="max-width:640px"><h2>Impostazioni</h2>' +
      '<label class="row" style="justify-content:space-between">Tema <select id="theme"><option value="auto">Come il sistema</option><option value="light"' + (DB.theme === "light" ? " selected" : "") + '>Chiaro</option><option value="dark"' + (DB.theme === "dark" ? " selected" : "") + ">Scuro</option></select></label>" +
      '<label class="row" style="justify-content:space-between">Lunghezza massima della risposta scritta (caratteri) <input id="maxc" type="number" min="500" step="100" value="' + DB.maxChars + '" style="width:110px"></label>' +
      '<label class="row" style="justify-content:space-between">Carte nuove al giorno <input id="npd" type="number" min="0" max="100" value="' + DB.newPerDay + '" style="width:90px"></label>' +
      '<h3>Backup</h3><p class="small muted">I progressi restano nel browser di questo dispositivo. Esporta un file per spostarli su un altro.</p><div class="row"><button class="btn sm ghost" id="exp">Esporta i progressi</button><label class="btn sm quiet">Importa<input id="imp" type="file" accept="application/json" class="sr"></label><button class="btn sm quiet" id="wipe" style="color:var(--rosso)">Cancella tutto</button></div></section>';
  }

  route();
})();
