# Schema dei file modulo (data/mN.js)

Ogni modulo è un file JS che registra un oggetto:

```js
(window.IV_MODULES = window.IV_MODULES || []).push({
  id: "m1",            // m1..m9
  n: 1,
  title: "Codice della strada e infortunistica",
  short: "Codice della strada",      // etichetta breve (max ~22 caratteri)
  livello: "ottima",                 // ottima | buona | sufficiente | nozioni
  settimane: "1–2",
  intro: "2-3 frasi: perché conta per lo scritto e su cosa concentrarsi.",
  aggiornato: "2026-11-18",

  // Fonti normative: articoli chiave
  fonti: [
    { ref: "Art. 142 CdS", txt: "Limiti di velocità…", url: "https://www.normattiva.it/...", nuovo: false }
    // nuovo: true se modificato nel 2024–2026
  ],

  // TEORIA in prosa, stile manuale per concorsi, parole proprie.
  // Ogni capitolo: titolo + paragrafi (HTML semplice ammesso: <b>, <i>, <ul><li>, <a href>).
  // Inserire riferimenti tra parentesi: (art. 157 CdS).
  teoria: [
    { h: "Fermata e sosta", p: ["paragrafo…", "paragrafo…"] }
  ],

  procedura: ["Passo 1…", "Passo 2…"],   // procedura operativa per l'agente

  // Dati da memorizzare: termini, importi, soglie
  dati: [ ["Notifica verbale (residenti)", "90 giorni", "art. 201 CdS"] ],

  // Casi pratici d'esame con traccia di risposta
  casi: [
    { titolo: "Sosta su marciapiede",
      traccia: "Testo del quesito come in un concorso…",
      schema: ["Punto atteso 1 (con norma)", "Punto atteso 2"],   // 5-8 punti, usati come checklist di autovalutazione
      modello: "Traccia di risposta in prosa (200-350 parole), struttura: inquadramento → definizioni → procedura → competenze → conseguenze → conclusione." }
  ],

  errori: ["Errore frequente…"],

  // Novità 2024–2026 e punti verificati
  novita: [
    { titolo: "L. 177/2024 – monopattini", testo: "Cosa cambia…", stato: "verificato", fonte: "G.U. …" }
    // stato: "verificato" | "da verificare"
  ],

  flash: [ ["Domanda?", "Risposta (con norma)."] ],

  quiz: [
    { q: "Domanda?", o: ["A", "B", "C", "D"], c: 1, e: "Spiegazione con norma." }   // c = indice risposta corretta (0-3)
  ],

  sitografia: [ { t: "Normattiva – D.Lgs. 285/1992", url: "https://www.normattiva.it/..." } ]
});
```

Regole:
- Italiano, frasi chiare, sentence case. Niente testi copiati da manuali commerciali: riassumere con parole proprie.
- Ogni affermazione normativa con riferimento (articolo + fonte).
- Stringhe JS con doppi apici; escapare i doppi apici interni o usare « ».
- Il file deve essere JS valido: verificare con `node -e "global.window={};require('./data/mN.js');console.log(window.IV_MODULES[0].id)"`.
