# Vigile

Strumento di studio per la prova scritta del concorso di **Istruttore di Vigilanza del Comune di Poggibonsi** (Determinazione n. 126/AG del 10/11/2026).

Apri `index.html` nel browser: non serve installare niente né avere un server. Funziona anche da telefono e salva i progressi nel browser del dispositivo.

## Cosa contiene

| Sezione | A cosa serve |
|---|---|
| **Oggi** | Settimana corrente del piano di 9 settimane, attività del giorno (carte, prossimo capitolo, quiz, caso pratico), avanzamento per modulo. |
| **Moduli** | 9 moduli. Ognuno ha la **teoria** in prosa con i riferimenti normativi a margine, le **schede** (dati da memorizzare, procedura, errori frequenti, fonti, link), i **casi pratici** con schema e traccia di risposta e le **novità 2024–2026**. |
| **Ripasso** | Flashcard con ripetizione a intervalli (1, 3, 7, 16, 35 giorni). Contiene anche i dati da memorizzare (termini, importi, soglie). Tasti: spazio per girare, 1/2/3 per valutare. |
| **Quiz** | Per modulo, misto, logica, simulazione della preselezione (30 domande in 30 minuti) e archivio degli errori. Tasti 1–4 per rispondere, Invio per proseguire. |
| **Scritto** | Casi a tempo con bozza salvata, conteggio di parole e caratteri e limite configurabile. Alla consegna c'è l'autovalutazione con lo schema di correzione e la traccia di risposta. Simulazione con 3 quesiti in 90 minuti. |
| **Orale, Bando, Cerca, Novità** | Inglese su strada, informatica, domande attitudinali; sintesi del bando; ricerca in tutti i contenuti; elenco unico delle riforme da verificare. |

## Struttura dei file

```
index.html        pagina
styles.css        stile (tema chiaro e scuro)
app.js            logica (JS vanilla, nessuna dipendenza)
data/extra.js     bando, piano, quiz di logica, orale
data/m1.js … m9.js  contenuti dei moduli (schema in data/SCHEMA.md)
tools/validate.js controllo dei file modulo: node tools/validate.js
docs/             materiale di partenza (corso originale e prima versione dell'app)
```

Per aggiornare un contenuto basta modificare il file del modulo e lanciare `node tools/validate.js`.

## Avvertenze sui contenuti

La teoria è stata riscritta e aggiornata a novembre 2026 sulla base di fonti istituzionali e specializzate. Durante la stesura i testi integrali di Normattiva e della Raccolta normativa toscana non erano consultabili direttamente: molte verifiche si basano su sintesi e notizie. Le voci segnate **«da verificare»** nella sezione Novità vanno controllate sul testo vigente prima della prova.
