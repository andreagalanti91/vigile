// Controllo dei file modulo: node tools/validate.js
global.window = {};
const path = require("path");
require(path.join(__dirname, "../data/extra.js"));
const ids = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9"];
let fail = 0;
for (const f of ids) {
  try { require(path.join(__dirname, "../data/" + f + ".js")); }
  catch (e) { console.log(f, "MANCANTE o NON VALIDO:", e.message.slice(0, 100)); fail++; }
}
for (const m of window.IV_MODULES || []) {
  const badQ = m.quiz.filter(q => !(Number.isInteger(q.c) && q.c >= 0 && q.c < q.o.length && q.o.length === 4)).length;
  const badC = m.casi.filter(c => !c.schema || !c.schema.length || !c.modello).length;
  const words = m.teoria.map(c => [].concat(c.p).join(" ")).join(" ").split(/\s+/).length;
  const pos = [0, 1, 2, 3].map(i => m.quiz.filter(q => q.c === i).length).join("/");
  console.log(`${m.id} ${m.livello.padEnd(11)} teoria ${m.teoria.length} cap (${words} parole) · quiz ${m.quiz.length} [${pos}] · carte ${m.flash.length}+${m.dati.length} · casi ${m.casi.length} · novità ${m.novita.length}` + (badQ || badC ? `  ERRORI quiz:${badQ} casi:${badC}` : ""));
  if (badQ || badC) fail++;
}
(window.IV_EXTRA.logica || []).forEach((q, i) => { if (!(q.c >= 0 && q.c < q.o.length)) { console.log("logica", i, "risposta non valida"); fail++; } });
process.exitCode = fail ? 1 : 0;
