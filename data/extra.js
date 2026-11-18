// Dati comuni: bando, piano di studio, quiz di logica, prova orale.
window.IV_EXTRA = {
  bando: {
    ente: "Comune di Poggibonsi (SI) – Determinazione n. 126/AG del 10/11/2026",
    posto: "1 Istruttore di Vigilanza, tempo pieno e indeterminato, Area Istruttori, CCNL Funzioni Locali 16/11/2022. Corpo di Polizia Locale (organico 32 unità). Riserva volontari servizio civile universale e frazione FF.AA.",
    domanda: "Solo online su inPA (inpa.gov.it) con SPID/CIE, entro 15 giorni dalla pubblicazione sul portale, ore 23:59. Tassa 10 € via PagoPA. Titoli di preferenza e riserva da dichiarare in domanda a pena di decadenza.",
    requisiti: [
      "Cittadinanza italiana, godimento dei diritti civili e politici, almeno 18 anni",
      "Diploma di maturità e patente B",
      "Idoneità psico-fisica al servizio e al porto d'armi",
      "Posizione regolare di leva (uomini); non obiettore, o rinuncia allo status",
      "Nessuna condanna ostativa; requisiti per la qualità di agente di P.S. (art. 5 c. 2 L. 65/1986)",
      "Disponibilità a guidare i veicoli del Corpo"
    ],
    prove: [
      ["Preselezione (eventuale)", "Quiz attitudinali, logico-matematici, critico-verbali e sulle materie dello scritto. Accedono i primi 80 e i pari merito."],
      ["Prova fisica (idoneità)", "1000 m in ≤ 4'30\" (U) / ≤ 5'30\" (D); 15 piegamenti continuativi (U) / 10 (D); salto in alto 100 cm (U) / 80 cm (D), fino a 3 tentativi. Serve il certificato di idoneità sportiva agonistica."],
      ["Prova scritta teorico-pratica", "Uno o più quesiti a risposta aperta di lunghezza massima predeterminata, in modalità digitale. Soglia 21/30."],
      ["Prova orale", "Colloquio interdisciplinare e accertamento di inglese e informatica (solo idoneità). Soglia 21/30."]
    ],
    graduatoria: "Somma dei voti di scritto e orale.",
    calendario: "Data, luogo e orario pubblicati su inPA almeno 15 giorni prima della prima prova. Nessuna comunicazione personale.",
    economico: [
      ["Tabellare annuo", "24.235,44 €"],
      ["Indennità di comparto", "384,72 €"],
      ["Indennità di vigilanza (qualifica P.S.)", "1.310,88 €"],
      ["Tredicesima", "2.019,62 €"],
      ["Welfare", "500 €/anno"],
      ["Netto stimato", "circa 1.570–1.630 €/mese su 13 mensilità (indicativo)"]
    ],
    contatti: "U.O. Gestione Risorse Umane 0577-986233 / 231 / 251 · assistenza portale inpa@funzionepubblica.it",
    materie: [
      ["ottima", "Circolazione stradale, mobilità sostenibile, infortunistica; procedimento sanzionatorio e depenalizzazione; edilizia, urbanistica e ambiente; commercio, somministrazione, pubblici esercizi, ricettività e turismo"],
      ["buona", "Codice penale e leggi complementari, procedura penale (PG); normativa anche locale sulla Polizia Locale"],
      ["sufficiente", "Pubblica sicurezza e sicurezza urbana; igiene, salute, TSO e ASO; sicurezza nei luoghi di lavoro"],
      ["nozioni", "Diritto costituzionale, civile, amministrativo e processo amministrativo; armi, stupefacenti, prostituzione, immigrazione; protezione civile; procedimento amministrativo, accesso, privacy; DPR 445/2000 e CAD; anticorruzione e trasparenza; enti locali e pubblico impiego; codice degli appalti"]
    ]
  },

  piano: [
    { w: 1, mods: ["m1"], txt: "Metodo di studio. Modulo 1: classificazione strade, velocità, precedenza, documenti, polizia stradale." },
    { w: 2, mods: ["m1", "m2"], txt: "Modulo 1: sosta, rimozione, alcol e droghe, incidenti. Avvio Modulo 2 (L. 689/1981, artt. 1–14). Primo esercizio scritto." },
    { w: 3, mods: ["m2"], txt: "Modulo 2 completo: pagamento ridotto, scritti difensivi, ordinanza-ingiunzione, procedimento CdS. Due esercizi scritti." },
    { w: 4, mods: ["m3"], txt: "Modulo 3: titoli edilizi, vigilanza (art. 27), sanzioni (artt. 31–44), rifiuti, rumore." },
    { w: 5, mods: ["m4"], txt: "Modulo 4: commercio, somministrazione, strutture ricettive, TULPS. Ripasso flashcard dei Moduli 1–3." },
    { w: 6, mods: ["m5"], txt: "Modulo 5: penale, PG, flagranza, atti tipici. Esercizi scritti a tempo." },
    { w: 7, mods: ["m6", "m7"], txt: "Moduli 6 e 7: polizia locale, sicurezza urbana, PS, TSO; enti locali, pubblico impiego, anticorruzione." },
    { w: 8, mods: ["m8", "m9"], txt: "Moduli 8 e 9: L. 241/1990, DPR 445/2000, privacy, CAD, appalti; Costituzione, protezione civile, sicurezza sul lavoro." },
    { w: 9, mods: [], txt: "Ripasso generale, 3 simulazioni cronometrate, quiz misti, inglese e informatica per l'orale." }
  ],

  metodo: [
    "Leggi la teoria del capitolo e segnalo come letto.",
    "Riassumi ogni istituto in 5–10 righe con parole tue.",
    "Ripassa le flashcard in scadenza ogni giorno.",
    "Fai il quiz del modulo; rifai le domande sbagliate.",
    "Scrivi un caso pratico a tempo e confrontalo con lo schema.",
    "Ripassa dopo 3 giorni e dopo 2 settimane."
  ],

  strutturaRisposta: ["Inquadramento normativo", "Definizioni", "Procedura passo per passo", "Competenze: chi fa cosa", "Conseguenze: sanzioni, reati, ricorsi", "Breve conclusione"],

  logica: [
    { q: "Completa la serie: 2, 6, 12, 20, 30, …", o: ["36", "40", "42", "48"], c: 2, e: "Le differenze crescono di 2 (4, 6, 8, 10, 12): 30 + 12 = 42." },
    { q: "Tutti gli agenti sono dipendenti. Alcuni dipendenti sono part-time. Quindi:", o: ["Tutti gli agenti sono part-time", "Alcuni agenti sono sicuramente part-time", "Non si può concludere che alcuni agenti siano part-time", "Nessun agente è part-time"], c: 2, e: "Le premesse non dicono nulla sul rapporto tra agenti e part-time." },
    { q: "Un'auto percorre 90 km in 1 ora e 30 minuti. Velocità media?", o: ["45 km/h", "60 km/h", "75 km/h", "90 km/h"], c: 1, e: "90 km / 1,5 h = 60 km/h." },
    { q: "Qual è il contrario di «lecito»?", o: ["Legittimo", "Illecito", "Licenziato", "Lieto"], c: 1, e: "Il contrario di lecito è illecito." },
    { q: "Un prezzo aumenta del 20% e poi diminuisce del 20%. Rispetto all'iniziale è:", o: ["Uguale", "Più alto del 4%", "Più basso del 4%", "Più basso del 20%"], c: 2, e: "100 × 1,2 × 0,8 = 96." },
    { q: "«Tutti i verbali sono firmati.» Quale frase lo nega?", o: ["Nessun verbale è firmato", "Almeno un verbale non è firmato", "Tutti i verbali non sono firmati", "Alcuni verbali sono firmati"], c: 1, e: "La negazione di «tutti sono» è «almeno uno non è»." },
    { q: "In un turno ci sono 12 agenti. I 2/3 sono in strada, metà del resto in ufficio. Quanti in ufficio?", o: ["2", "3", "4", "6"], c: 0, e: "In strada 8, ne restano 4; la metà è 2." },
    { q: "Completa: 3, 9, 27, 81, …", o: ["162", "243", "324", "108"], c: 1, e: "Ogni termine si moltiplica per 3." },
    { q: "Completa: 1, 1, 2, 3, 5, 8, …", o: ["11", "12", "13", "14"], c: 2, e: "Ogni termine è la somma dei due precedenti (Fibonacci): 5 + 8 = 13." },
    { q: "Una pattuglia percorre 12 km in 15 minuti. Quanti km percorre in un'ora alla stessa velocità?", o: ["36", "42", "48", "60"], c: 2, e: "15 minuti sono 1/4 d'ora: 12 × 4 = 48 km." },
    { q: "Se «nessun vigile è distratto» è vero, quale frase è certamente falsa?", o: ["Qualche vigile non è distratto", "Qualche vigile è distratto", "Nessun distratto è vigile", "Tutti i vigili non sono distratti"], c: 1, e: "«Qualche vigile è distratto» contraddice direttamente la premessa." },
    { q: "Un verbale costa 42 €; pagando entro 5 giorni c'è lo sconto del 30%. Quanto si paga?", o: ["12,60 €", "29,40 €", "30,00 €", "32,00 €"], c: 1, e: "42 × 0,7 = 29,40 €." },
    { q: "Quale parola non appartiene al gruppo? Verbale, rapporto, relazione, manganello", o: ["Verbale", "Rapporto", "Relazione", "Manganello"], c: 3, e: "Gli altri sono atti scritti; il manganello è un oggetto." },
    { q: "Sinonimo di «reiterare»:", o: ["Ritirare", "Ripetere", "Rinviare", "Ridurre"], c: 1, e: "Reiterare significa ripetere." },
    { q: "Se oggi è giovedì, che giorno sarà fra 100 giorni?", o: ["Venerdì", "Sabato", "Domenica", "Lunedì"], c: 1, e: "100 = 14 × 7 + 2: due giorni dopo giovedì è sabato." },
    { q: "Completa l'analogia: patente sta a conducente come licenza sta a…", o: ["Strada", "Esercente", "Comune", "Multa"], c: 1, e: "La licenza abilita l'esercente come la patente abilita il conducente." },
    { q: "In un comune 3 agenti su 8 sono donne. Su 32 agenti, quante donne a parità di proporzione?", o: ["9", "12", "15", "16"], c: 1, e: "32 / 8 = 4; 4 × 3 = 12." },
    { q: "Se piove, la strada è bagnata. La strada è bagnata. Quindi:", o: ["Piove sicuramente", "Non piove", "Non si può concludere che piova", "La strada è asciutta"], c: 2, e: "È l'errore di affermazione del conseguente: la strada può essere bagnata per altri motivi." },
    { q: "Completa: A, C, F, J, …", o: ["N", "O", "M", "P"], c: 1, e: "Gli intervalli crescono di 1 (+2, +3, +4, +5): J + 5 = O." },
    { q: "Un turno inizia alle 22:45 e dura 7 ore e 30 minuti. A che ora finisce?", o: ["05:45", "06:15", "06:30", "05:15"], c: 1, e: "22:45 + 7:30 = 06:15 del giorno dopo." },
    { q: "Quale frase è scritta correttamente?", o: ["Gli ho detto a lei di aspettare", "Le ho detto di aspettare", "Gli ho detto a loro di aspettare", "Le ho detto a lei di aspettare"], c: 1, e: "«Le» è il pronome corretto per «a lei», senza ripeterlo." },
    { q: "Il 15% di 240 è:", o: ["24", "32", "36", "40"], c: 2, e: "240 × 0,15 = 36." }
  ],

  orale: {
    intro: "Colloquio sulle materie dello scritto e sulle competenze attitudinali: gestione dello stress e dei conflitti, lavoro in squadra, comunicazione, problem solving, consapevolezza del ruolo. Inglese e informatica sono solo idoneità, ma il mancato superamento esclude dal concorso.",
    attitudinali: [
      ["Perché vuoi fare l'agente di polizia locale?", "Collega una motivazione concreta (servizio alla comunità, lavoro su strada, contatto con i cittadini) a un'esperienza personale. Evita risposte generiche sul posto fisso."],
      ["Come gestisci un cittadino aggressivo durante un controllo?", "Calma, distanza di sicurezza, tono fermo e cortese, spiegazione dell'atto, coinvolgimento del collega, richiesta di supporto se serve; documentare tutto nel verbale."],
      ["Un collega commette una scorrettezza: che fai?", "Prima il confronto diretto se lieve; se è un illecito, il dovere di segnalazione al superiore (codice di comportamento, art. 361 c.p. per i reati)."],
      ["Ricevi un ordine che ritieni illegittimo.", "Lo fai presente al superiore per iscritto motivando; se l'ordine è rinnovato per iscritto si esegue, salvo che costituisca reato (art. 51 c.p., DPR 3/1957 art. 17)."],
      ["Un tuo amico ti chiede di «sistemare» una multa.", "Rifiuto netto: conflitto d'interessi e possibile reato. Annullamento solo in autotutela dall'ufficio competente o con ricorso."]
    ],
    informatica: [
      "Email e PEC: differenze, valore legale della ricevuta di consegna",
      "Firma digitale e firma elettronica: cosa garantiscono",
      "SPID, CIE e domicilio digitale",
      "Documenti condivisi e cloud della PA",
      "Foglio di calcolo: somme, filtri, ordinamenti, formule base",
      "Sicurezza: password robuste, autenticazione a due fattori, phishing",
      "Banche dati della PL: Motorizzazione, ANIA (assicurazioni), SDI tramite FF.OO., anagrafe, PRA"
    ],
    inglese: [
      ["Good morning, police. Can I see your driving licence, please?", "Buongiorno, polizia. Posso vedere la sua patente, per favore?"],
      ["Please show me your vehicle registration and insurance.", "Mi mostri la carta di circolazione e l'assicurazione."],
      ["You are not allowed to park here.", "Qui non è consentita la sosta."],
      ["You were driving over the speed limit.", "Stava guidando oltre il limite di velocità."],
      ["Is anybody injured? An ambulance is on its way.", "C'è qualcuno ferito? L'ambulanza sta arrivando."],
      ["Please stay calm and wait here.", "Per favore stia calmo e aspetti qui."],
      ["I have to issue you a fine.", "Devo farle una multa."],
      ["You can pay within five days with a discount.", "Può pagare entro cinque giorni con uno sconto."],
      ["Do you have an ID card or a passport?", "Ha una carta d'identità o un passaporto?"],
      ["Can you tell me what happened?", "Può dirmi cosa è successo?"],
      ["The road is closed. Please follow the detour.", "La strada è chiusa. Segua la deviazione."],
      ["Where are you staying in Poggibonsi?", "Dove alloggia a Poggibonsi?"],
      ["Please turn off the engine and step out of the car.", "Spenga il motore e scenda dall'auto, per favore."],
      ["You have to blow into this device.", "Deve soffiare in questo apparecchio."],
      ["This is a limited traffic zone. You need a permit.", "Questa è una zona a traffico limitato. Serve un permesso."],
      ["You can appeal within sixty days.", "Può fare ricorso entro sessanta giorni."]
    ],
    presentazione: "My name is … I live in … I studied … and I work as … I want to work in the local police because I like working with people and I want to help my community. I am a team player and I can stay calm in stressful situations."
  }
};
