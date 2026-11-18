# Corso di preparazione – Istruttore di Vigilanza, Comune di Poggibonsi

> Documento di lavoro da passare a Claude Code. Contiene: brief del progetto, sintesi del bando, contenuti attuali del corso (9 moduli), quiz, esercizi e materiali per l'orale, più l'elenco dei miglioramenti richiesti.
> Ultimo aggiornamento: 18/11/2026.

---

## 1. Brief per Claude Code

**Obiettivo:** costruire e mantenere uno strumento di studio (pagina web interattiva, oggi un singolo `index.html` senza dipendenze) per preparare la **prova scritta a risposta aperta** del concorso. Lo strumento esistente ha queste sezioni: Panoramica (piano di 9 settimane con data di inizio, avanzamento), Moduli (norme, concetti chiave, procedura, errori da evitare, esercizi), Flashcard, Quiz (per modulo, misto, logica), Prova scritta (timer, bozze salvate, schema di correzione con autovalutazione, simulazione 3 quesiti/90 minuti), Orale (inglese e informatica). Lo stato è salvato in `localStorage` con chiavi prefissate `iv_`.

**Cosa chiede l'utente adesso:**
1. **Riscrivere la teoria in modo migliore e più approfondito**, attingendo a fonti online affidabili (testi vigenti su Normattiva, Gazzetta Ufficiale, siti istituzionali, Raccolta normativa della Regione Toscana, circolari ministeriali, portali specializzati di polizia locale). Ogni modulo deve avere una sezione **Teoria** in prosa, stile manuale per concorsi, oltre alle schede sintetiche già presenti.
2. **Verificare tutte le norme** contro il testo vigente a fine 2026, in particolare le voci marcate ⚠ (riforme 2024–2025).
3. Aggiornare quiz, flashcard ed esercizi in coerenza con la nuova teoria; aggiungere casi pratici d'esame con traccia di risposta.
4. Mantenere l'app semplice: HTML/CSS/JS vanilla, mobile-friendly, testi in italiano.

**Vincoli:**
- Non copiare testi protetti dei manuali (Edises, Simone, Alpha Test, Maggioli): riassumere con parole proprie.
- Indicare la fonte delle affermazioni normative e segnalare le norme modificate di recente.
- Rispettare le priorità del bando (sezione 3): più profondità sulle materie a "ottima conoscenza".

**Struttura consigliata per la teoria di ogni modulo:** Fonti normative (articoli) → Teoria (prosa) → Procedura operativa per l'agente → Dati da memorizzare (tabella termini/importi/soglie) → Casi pratici con traccia di risposta → Errori frequenti → Novità 2024–2026 da verificare.

---

## 2. Sintesi del bando

- **Ente:** Comune di Poggibonsi (SI). Determinazione n. 126/AG del 10/11/2026.
- **Posto:** 1 Istruttore di Vigilanza, tempo pieno e indeterminato, Area Istruttori, CCNL Funzioni Locali 16/11/2022. Inserimento nel Corpo di Polizia Locale (organico di 32 unità). Riserva per volontari del servizio civile universale e frazione di riserva FF.AA.
- **Trattamento economico annuo lordo:** tabellare 24.235,44 €; indennità di comparto 384,72 €; indennità di vigilanza con qualifica P.S. 1.310,88 €; 13ª 2.019,62 €. Welfare 500 €/anno; contributo datoriale fondo Perseo/Sirio circa 1.363 €/anno. Netto stimato circa 1.570–1.630 €/mese su 13 mensilità (stima indicativa).
- **Requisiti principali:** cittadinanza, diritti civili e politici, 18 anni, diploma di maturità, patente B, idoneità psico-fisica e al porto d'armi, posizione regolare di leva (uomini), nessuna condanna ostativa, requisiti per la qualità di agente di P.S. (art. 5 c. 2 L. 65/1986), non obiettore (o rinuncia allo status), disponibilità a guidare i veicoli del Corpo.
- **Domanda:** solo online su **inPA** (www.inpa.gov.it) con SPID/CIE, entro **15 giorni dalla pubblicazione sul portale**, ore 23:59. Tassa 10 € via PagoPA. Titoli di preferenza/riserva da dichiarare in domanda a pena di decadenza dal beneficio.
- **Prove:**
  - Preselezione eventuale: quiz attitudinali, logico-matematici, critico-verbali e sulle materie dello scritto; ammessi i primi 80 (e pari merito).
  - Prova di resistenza fisica (solo idoneità): 1000 m in ≤ 4'30" (U) / ≤ 5'30" (D); piegamenti continuativi 15 (U) / 10 (D); salto in alto 100 cm (U) / 80 cm (D), fino a 3 tentativi. Serve certificato di idoneità sportiva agonistica.
  - **Prova scritta teorico-pratica:** uno o più quesiti a risposta aperta di lunghezza massima predeterminata, in modalità digitale; soglia 21/30.
  - Prova orale: colloquio interdisciplinare + accertamento inglese e informatica (solo idoneità); soglia 21/30.
  - Graduatoria = somma scritto + orale.
- **Calendario:** data, luogo e orario pubblicati su inPA almeno 15 giorni prima della prima prova; nessuna comunicazione scritta.
- **Contatti:** U.O. Gestione Risorse Umane 0577-986233/231/251; assistenza portale inpa@funzionepubblica.it.

---

## 3. Materie della prova scritta e livello richiesto (dal bando)

| Livello | Materie |
|---|---|
| Ottima | Circolazione stradale, mobilità sostenibile, infortunistica stradale; procedimento sanzionatorio amministrativo e depenalizzazione; edilizia, urbanistica e ambiente (nazionale e regionale, vigilanza e sanzioni); commercio, somministrazione, pubblici esercizi, attività ricettive e turismo (nazionale e regionale, vigilanza e sanzioni) |
| Buona | Codice penale e leggi complementari, codice di procedura penale (polizia giudiziaria); normativa anche locale sulla Polizia Locale e ordinamento |
| Sufficiente | Pubblica sicurezza e sicurezza urbana; igiene, tutela della salute, TSO e ASO; sicurezza nei luoghi di lavoro |
| Nozioni | Diritto costituzionale, civile, amministrativo e processo amministrativo; armi, stupefacenti, prostituzione, immigrazione; protezione civile; procedimento amministrativo, accesso, privacy; DPR 445/2000 e CAD; anticorruzione e trasparenza; enti locali e pubblico impiego; Codice degli appalti |

---

## 4. Piano di studio (9 settimane)

| Settimana | Contenuti |
|---|---|
| 1 | Metodo di studio + Modulo 1: classificazione strade, velocità, precedenza, documenti, polizia stradale. |
| 2 | Modulo 1: sosta, rimozione, alcol e droghe, incidenti. Avvio Modulo 2 (L. 689/1981, artt. 1–14). Primo esercizio scritto. |
| 3 | Modulo 2 completo: pagamento ridotto, scritti difensivi, ordinanza-ingiunzione, procedimento CdS. Due esercizi scritti. |
| 4 | Modulo 3: titoli edilizi, vigilanza (art. 27), sanzioni (artt. 31–44), rifiuti, rumore. |
| 5 | Modulo 4: commercio, somministrazione, strutture ricettive, TULPS. Ripasso flashcard Moduli 1–3. |
| 6 | Modulo 5: penale, PG, flagranza, atti tipici. Esercizi scritti a tempo. |
| 7 | Moduli 6 e 7: polizia locale, sicurezza urbana, PS, TSO; enti locali, pubblico impiego, anticorruzione. |
| 8 | Moduli 8 e 9: L. 241/1990, D.P.R. 445/2000, privacy, CAD, appalti; Costituzione, protezione civile, sicurezza sul lavoro. |
| 9 | Ripasso generale, 3 simulazioni cronometrate, quiz misti, inglese e informatica per l'orale. |

**Metodo per ogni modulo:** leggere scheda e articoli vigenti → riassumere ogni istituto in 5–10 righe → flashcard quotidiane → quiz del modulo → esercizio scritto a tempo con confronto con lo schema → ripasso dopo 3 giorni e dopo 2 settimane.

**Struttura di una risposta scritta:** inquadramento normativo → definizioni → procedura passo per passo → competenze (chi fa cosa) → conseguenze (sanzioni, reati, ricorsi) → breve conclusione.

> ⚠ Le voci marcate ⚠ riguardano riforme recenti: verificare il testo vigente su normattiva.it e sulla Raccolta normativa della Regione Toscana.

---

## 5. Moduli

### Modulo 1 – Codice della strada e infortunistica

*Livello richiesto: ottima conoscenza · Priorità: alta · Settimana 1–2*

È la materia più frequente nel lavoro quotidiano e quasi certamente oggetto di quesito. Devi saper collegare la regola di comportamento, la sanzione e la procedura di accertamento.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| D.Lgs. 285/1992 | Nuovo Codice della strada (CdS): la fonte principale. |
| D.P.R. 495/1992 | Regolamento di esecuzione e attuazione: segnaletica, dettagli tecnici. |
| L. 177/2024 | Riforma del CdS (in vigore da dicembre 2024): monopattini, uso del telefono, alcol e droghe, recidiva. ⚠ Verifica i testi aggiornati. |
| Art. 2 CdS | Classificazione delle strade: A autostrade, B extraurbane principali, C extraurbane secondarie, D urbane di scorrimento, E urbane di quartiere, E-bis ciclabili, F locali, F-bis itinerari ciclopedonali. |
| Art. 7 CdS | Regolamentazione della circolazione nei centri abitati: ZTL, aree pedonali, sosta a pagamento. |
| Artt. 11–12 CdS | Servizi di polizia stradale e soggetti che li svolgono: tra questi i corpi di polizia municipale nel territorio di competenza. |
| Art. 142 CdS | Limiti di velocità. |
| Art. 145 CdS | Precedenza. |
| Artt. 157–159 CdS | Fermata e sosta, divieti di fermata e sosta, rimozione e blocco dei veicoli. |
| Art. 173 CdS | Uso di telefoni e dispositivi durante la guida. |
| Art. 180 CdS | Documenti da portare con sé (patente, carta di circolazione). |
| Artt. 186, 186-bis, 187 CdS | Guida in stato di ebbrezza, conducenti a tasso zero, guida dopo assunzione di stupefacenti. |
| Art. 189 CdS | Comportamento in caso di incidente (obbligo di fermarsi e di prestare assistenza). |
| Art. 193 CdS | Obbligo di assicurazione RC. |
| Art. 126-bis CdS | Patente a punti (20 punti iniziali). |
| Artt. 589-bis, 590-bis c.p. | Omicidio stradale e lesioni personali stradali gravi o gravissime (L. 41/2016). |

#### Concetti chiave

- **Limiti di velocità (art. 142).** 130 km/h autostrade, 110 extraurbane principali, 90 extraurbane secondarie e locali, 50 nei centri abitati (fino a 70 su strade urbane con caratteristiche idonee e apposita segnaletica). Per i neopatentati, nei primi 3 anni: 100 in autostrada e 90 sulle extraurbane principali.
- **Fermata e sosta (art. 157).** La fermata è una sospensione temporanea della marcia per esigenze di brevissima durata (salita o discesa di persone, piccole operazioni), con il conducente presente e pronto a ripartire. La sosta è la sospensione prolungata, anche con allontanamento del conducente. I divieti sono elencati nell'art. 158 (es. marciapiedi, attraversamenti pedonali, posti riservati ai veicoli delle persone con disabilità).
- **Rimozione e blocco (art. 159).** Possibili quando la sosta costituisce grave intralcio o pericolo, o nelle zone segnalate. Il verbale si redige comunque.
- **Alcol (artt. 186 e 186-bis).** Limite generale 0,5 g/l. Tra 0,5 e 0,8 è illecito amministrativo; oltre 0,8 e oltre 1,5 è reato (fasce con pene crescenti). Il rifiuto di sottoporsi all'accertamento è reato ed è punito come la fascia più grave. Tasso zero per neopatentati (primi 3 anni), conducenti sotto i 21 anni e conducenti professionali.
- **Droghe (art. 187).** Riformulato dalla L. 177/2024. ⚠ Verifica il testo vigente e gli orientamenti giurisprudenziali successivi alla riforma.
- **Incidente stradale (art. 189).** Obbligo di fermarsi, di prestare assistenza ai feriti e di fornire le proprie generalità. La fuga in caso di incidente con feriti è reato; anche l'omissione di soccorso è reato.
- **Polizia stradale (art. 11).** Comprende prevenzione e accertamento delle violazioni, rilevazione degli incidenti, servizi di scorta, tutela e controllo dell'uso della strada. La polizia locale la svolge nel territorio del Comune.
- **Mobilità sostenibile.** Biciclette (art. 182), piste ciclabili, zone 30, monopattini elettrici. La L. 177/2024 ha introdotto per i monopattini casco obbligatorio, contrassegno identificativo e assicurazione. ⚠ Alcuni obblighi dipendono da decreti attuativi: verifica se sono in vigore.
- **Infortunistica stradale.** Rilievo dell'incidente: messa in sicurezza, soccorsi, posizione dei veicoli, tracce, rilievi planimetrici e fotografici, testimoni, accertamenti su alcol e droghe, rapporto finale. In caso di lesioni gravi o morte si apre anche il versante penale (589-bis, 590-bis c.p.).

#### Procedura operativa

1. Accertamento: osserva e descrivi il fatto (luogo, ora, veicolo, targa, segnaletica presente, condizioni della strada).
2. Identificazione del conducente e verifica dei documenti (patente, carta di circolazione, assicurazione, revisione).
3. Contestazione immediata quando possibile (art. 200 CdS); altrimenti notificazione entro 90 giorni al trasgressore e al proprietario (art. 201 CdS).
4. Provvedimenti accessori se previsti: decurtazione punti, ritiro o sospensione della patente, fermo o sequestro del veicolo, rimozione.
5. In caso di incidente: sicurezza dell'area, soccorsi (118), rilievi, sommarie informazioni dai testimoni, accertamenti alcol/droghe, comunicazione all'autorità giudiziaria se c'è un reato.

#### Errori da evitare

- Confondere fermata e sosta: sono due definizioni diverse dell'art. 157.
- Dimenticare l'obbligato in solido: il proprietario del veicolo risponde insieme al conducente (art. 196 CdS).
- Indicare il limite di velocità senza considerare la segnaletica e la categoria di strada.
- Trattare la guida oltre 0,8 g/l come semplice sanzione amministrativa: è reato.
- Citare norme della riforma 2024 senza verificare se sono già operative.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Differenza tra fermata e sosta? | Fermata: sospensione brevissima con conducente presente. Sosta: sospensione prolungata anche con allontanamento del conducente (art. 157). |
| Tasso alcolemico oltre cui la guida in ebbrezza è reato? | Oltre 0,8 g/l (art. 186). Tra 0,5 e 0,8 è illecito amministrativo. |
| Chi deve guidare a tasso zero? | Neopatentati nei primi 3 anni, conducenti sotto i 21 anni, conducenti professionali (art. 186-bis). |
| Limite in centro abitato? | 50 km/h, elevabile fino a 70 su strade idonee con segnaletica (art. 142). |
| Punti iniziali della patente? | 20 punti (art. 126-bis). |
| Cosa prevede l'art. 189 CdS? | Obblighi in caso di incidente: fermarsi, prestare assistenza ai feriti, fornire generalità. |
| Quali reati per incidenti con morti o feriti gravi? | Omicidio stradale (589-bis c.p.) e lesioni personali stradali gravi o gravissime (590-bis c.p.). |

#### Quiz

1. Qual è il limite generale di velocità nei centri abitati?
   - 30 km/h
   - **50 km/h** ✓
   - 70 km/h
   - 90 km/h
   - *Spiegazione:* Art. 142: 50 km/h, elevabile fino a 70 su strade con caratteristiche idonee e segnaletica.
2. La guida con tasso alcolemico di 1,0 g/l è:
   - Illecito amministrativo
   - **Reato** ✓
   - Lecita se non ci sono incidenti
   - Punita solo con la decurtazione dei punti
   - *Spiegazione:* Oltre 0,8 g/l la guida in stato di ebbrezza è reato (art. 186).
3. Il rifiuto di sottoporsi all'alcoltest è:
   - Lecito
   - Illecito amministrativo lieve
   - **Reato punito come la fascia più grave** ✓
   - Punito solo con il fermo del veicolo
   - *Spiegazione:* Il rifiuto è reato ed è punito con le pene della fascia più grave (art. 186).
4. Un veicolo che sospende la marcia per far scendere un passeggero, con il conducente a bordo, è in:
   - Sosta
   - **Fermata** ✓
   - Arresto
   - Parcheggio
   - *Spiegazione:* È fermata: sospensione brevissima con conducente presente (art. 157).
5. Per i neopatentati, nei primi 3 anni, il limite in autostrada è:
   - 90 km/h
   - **100 km/h** ✓
   - 110 km/h
   - 130 km/h
   - *Spiegazione:* 100 km/h in autostrada e 90 sulle extraurbane principali (art. 117 e 142).
6. Chi risponde in solido con il trasgressore per una violazione del CdS commessa con un veicolo?
   - Nessuno
   - **Il proprietario del veicolo** ✓
   - L'assicurazione
   - Il Comune
   - *Spiegazione:* Art. 196 CdS: il proprietario (o usufruttuario, ecc.) è obbligato in solido.

#### Esercizi scritti

**Esercizio 1 – Sosta su marciapiede**

Durante il servizio trovi un'auto in sosta su un marciapiede del centro abitato, senza conducente. Il veicolo ostacola il passaggio di una persona in carrozzina. Descrivi la qualificazione della violazione, gli accertamenti che svolgi, gli atti che redigi e i provvedimenti possibili.

*Schema di correzione:*

- [ ] Qualificazione: sosta vietata sul marciapiede (artt. 157–158 CdS) e definizione di sosta.
- [ ] Accertamento: luogo, ora, targa, posizione del veicolo, segnaletica, documentazione fotografica.
- [ ] Impossibilità di contestazione immediata (trasgressore assente): avviso sul veicolo e notificazione entro 90 giorni (art. 201).
- [ ] Obbligato in solido: proprietario del veicolo (art. 196).
- [ ] Rimozione per grave intralcio alla circolazione pedonale (art. 159), con verbale delle operazioni.
- [ ] Pagamento in misura ridotta e possibilità di ricorso (prefetto 60 giorni, giudice di pace 30 giorni).

**Esercizio 2 – Incidente con feriti**

Vieni inviato sul luogo di un incidente tra un'auto e uno scooter, con il conducente dello scooter ferito in modo serio. Descrivi in ordine le attività che svolgi e gli atti che compi.

*Schema di correzione:*

- [ ] Sicurezza: segnalazione dell'area, gestione del traffico, richiesta del 118.
- [ ] Identificazione dei conducenti e dei testimoni; verifica dei documenti e dell'assicurazione (art. 180, 193).
- [ ] Rilievi: posizione dei veicoli, tracce, danni, planimetria, fotografie.
- [ ] Accertamenti alcol e droghe sui conducenti (artt. 186, 187), anche tramite struttura sanitaria.
- [ ] Sommarie informazioni dalle persone presenti (art. 351 c.p.p.).
- [ ] Valutazione penale: lesioni stradali gravi o gravissime (art. 590-bis c.p.) e comunicazione della notizia di reato al PM (art. 347 c.p.p.); eventuali violazioni amministrative contestate a parte.
- [ ] Rapporto di incidente e trasmissione degli atti.

---

### Modulo 2 – Procedimento sanzionatorio amministrativo e depenalizzazione

*Livello richiesto: ottima conoscenza · Priorità: alta · Settimana 2–3*

È la struttura di ogni verbale. Va conosciuta articolo per articolo, perché si applica a CdS, regolamenti comunali, commercio, ambiente.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| L. 689/1981, art. 1 | Principio di legalità e irretroattività. |
| Art. 2 | Capacità di intendere e volere: non risponde chi non ha compiuto 18 anni (risponde chi è tenuto alla sorveglianza). |
| Art. 3 | Elemento soggettivo: è sufficiente la coscienza e volontà della condotta, dolosa o colposa. |
| Art. 6 | Solidarietà: proprietario della cosa, persona giuridica o datore di lavoro rispondono in solido. |
| Art. 8 | Concorso formale: più violazioni con una sola azione → sanzione per la violazione più grave aumentata fino al triplo. |
| Art. 8-bis | Reiterazione delle violazioni. |
| Art. 9 | Principio di specialità: se lo stesso fatto è punito da più norme, si applica la disposizione speciale. |
| Art. 10 | Limiti della sanzione pecuniaria: da 10 a 15.000 euro, salvo diverse previsioni. |
| Art. 13 | Atti di accertamento: assunzione di informazioni, ispezioni di cose e luoghi diversi dalla privata dimora, rilievi, sequestro cautelare. |
| Art. 14 | Contestazione immediata o notificazione entro 90 giorni (360 per chi risiede all'estero). Senza notificazione nei termini l'obbligo di pagamento si estingue. |
| Art. 16 | Pagamento in misura ridotta entro 60 giorni: un terzo del massimo o, se più favorevole, il doppio del minimo. |
| Artt. 17–18 | Rapporto all'autorità competente; scritti difensivi entro 30 giorni; ordinanza-ingiunzione o archiviazione. |
| Art. 22 + D.Lgs. 150/2011, art. 6 | Opposizione all'ordinanza-ingiunzione entro 30 giorni dalla notifica (60 per chi risiede all'estero). |
| Art. 28 | Prescrizione in 5 anni. |
| Art. 7-bis TUEL | Violazioni di regolamenti e ordinanze comunali: sanzione da 25 a 500 euro. |
| D.Lgs. 7/2016 e 8/2016 | Ultime depenalizzazioni: alcuni reati diventano illeciti amministrativi o illeciti civili con sanzione pecuniaria civile. |
| Artt. 200–204-bis CdS | Procedimento speciale per il CdS: contestazione, notificazione (90 giorni), pagamento ridotto, ricorso al Prefetto (60 giorni) o al Giudice di pace (30 giorni). |

#### Concetti chiave

- **Depenalizzazione.** Trasformazione di un reato in illecito amministrativo: la competenza passa dal giudice penale all'autorità amministrativa e la sanzione diventa pecuniaria.
- **Contestazione immediata vs notificazione.** Si contesta subito quando il trasgressore è presente. Se non è possibile, gli estremi della violazione si notificano entro 90 giorni dall'accertamento. Nel verbale vanno indicati i motivi della mancata contestazione immediata.
- **Pagamento in misura ridotta.** Nella L. 689: entro 60 giorni, un terzo del massimo o il doppio del minimo se più favorevole. Nel CdS (art. 202): il minimo edittale, con riduzione del 30% se si paga entro 5 giorni (esclusi i casi con confisca o sospensione della patente). Per i regolamenti comunali la Giunta può stabilire un importo diverso entro i limiti di legge (art. 16, c. 2).
- **Scritti difensivi e audizione.** Entro 30 giorni dalla contestazione o notificazione l'interessato può presentare memorie e chiedere di essere sentito. L'autorità decide con ordinanza-ingiunzione motivata o con archiviazione.
- **Concorso formale e materiale.** Formale: una sola azione viola più norme (si applica la sanzione più grave aumentata fino al triplo). Materiale: più azioni, più violazioni, si sommano le sanzioni.
- **Sequestro amministrativo.** Cautelare delle cose che possono essere oggetto di confisca (art. 13 L. 689). Nel CdS: sequestro (art. 213) e fermo amministrativo (art. 214).
- **Due vie di ricorso nel CdS.** Ricorso al Prefetto entro 60 giorni (gratuito, il Prefetto può anche raddoppiare la sanzione se lo respinge) oppure ricorso al Giudice di pace entro 30 giorni. Non si possono proporre entrambi.

#### Procedura operativa

1. Accertamento con gli atti dell'art. 13 (informazioni, ispezioni, rilievi, eventuale sequestro cautelare).
2. Redazione del verbale: dati del trasgressore e dell'obbligato in solido, fatto, luogo e ora, norma violata, sanzione, modalità di pagamento ridotto e di difesa.
3. Contestazione immediata o notificazione entro 90 giorni (art. 14).
4. Se non c'è pagamento entro 60 giorni: rapporto all'autorità competente (art. 17).
5. Valutazione di scritti difensivi e audizione (art. 18).
6. Ordinanza-ingiunzione o archiviazione; eventuale opposizione davanti all'autorità giudiziaria entro 30 giorni.

#### Errori da evitare

- Usare il termine di 60 giorni del ricorso al Prefetto per l'opposizione all'ordinanza-ingiunzione (che è di 30).
- Dimenticare la notificazione al proprietario o obbligato in solido.
- Scrivere che il pagamento ridotto della L. 689 è il minimo edittale: quello vale per il CdS.
- Omettere nel verbale la motivazione della mancata contestazione immediata.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Termine di notificazione per i residenti in Italia? | 90 giorni dall'accertamento (art. 14 L. 689; art. 201 CdS). |
| Pagamento in misura ridotta nella L. 689? | Entro 60 giorni: un terzo del massimo o il doppio del minimo se più favorevole (art. 16). |
| Termine per gli scritti difensivi? | 30 giorni (art. 18 L. 689). |
| Termine per il ricorso al Prefetto (CdS)? | 60 giorni (art. 203). |
| Termine per il ricorso al Giudice di pace (CdS)? | 30 giorni (art. 204-bis). |
| Sanzione per violazione di regolamenti comunali? | Da 25 a 500 euro (art. 7-bis TUEL). |
| Prescrizione delle sanzioni amministrative? | 5 anni (art. 28 L. 689). |
| Cos'è il concorso formale? | Una sola azione che viola più norme: sanzione più grave aumentata fino al triplo (art. 8). |

#### Quiz

1. Entro quanto va notificata una violazione non contestata immediatamente (residente in Italia)?
   - 30 giorni
   - 60 giorni
   - **90 giorni** ✓
   - 150 giorni
   - *Spiegazione:* Art. 14 L. 689/1981 e art. 201 CdS: 90 giorni.
2. Gli scritti difensivi (L. 689) si presentano entro:
   - 15 giorni
   - **30 giorni** ✓
   - 60 giorni
   - 90 giorni
   - *Spiegazione:* Art. 18: 30 giorni dalla contestazione o notificazione.
3. Il pagamento in misura ridotta secondo la L. 689 è pari a:
   - Il minimo edittale
   - **Un terzo del massimo o il doppio del minimo se più favorevole** ✓
   - La metà del massimo
   - Il massimo ridotto del 30%
   - *Spiegazione:* Art. 16 L. 689/1981.
4. La sanzione per la violazione di un regolamento comunale va:
   - Da 10 a 100 euro
   - **Da 25 a 500 euro** ✓
   - Da 50 a 1.000 euro
   - Da 100 a 5.000 euro
   - *Spiegazione:* Art. 7-bis TUEL.
5. Il ricorso al Prefetto contro un verbale del CdS si presenta entro:
   - 30 giorni
   - 45 giorni
   - **60 giorni** ✓
   - 90 giorni
   - *Spiegazione:* Art. 203 CdS: 60 giorni.
6. Lo stesso fatto è punito da una norma penale e da una amministrativa. Cosa si applica?
   - Entrambe
   - Sempre quella penale
   - **La disposizione speciale** ✓
   - Sempre quella amministrativa
   - *Spiegazione:* Principio di specialità, art. 9 L. 689/1981.

#### Esercizi scritti

**Esercizio 1 – Dal verbale al ricorso**

Descrivi le fasi del procedimento sanzionatorio per una violazione del Codice della strada: dall'accertamento al pagamento o al ricorso. Evidenzia le differenze tra contestazione immediata e notificazione.

*Schema di correzione:*

- [ ] Accertamento e contenuto del verbale (art. 200 CdS, art. 13 L. 689).
- [ ] Contestazione immediata: consegna del verbale al trasgressore presente.
- [ ] Notificazione entro 90 giorni al trasgressore e al proprietario, con motivazione della mancata contestazione (art. 201).
- [ ] Pagamento in misura ridotta: minimo edittale entro 60 giorni, riduzione del 30% entro 5 giorni (art. 202).
- [ ] Ricorso al Prefetto entro 60 giorni (art. 203) e ordinanza del Prefetto (art. 204).
- [ ] In alternativa ricorso al Giudice di pace entro 30 giorni (art. 204-bis).
- [ ] Effetti del mancato pagamento: il verbale diventa titolo esecutivo.

**Esercizio 2 – Violazione di un regolamento comunale**

Un esercente espone merce fuori dal negozio violando il regolamento comunale. Descrivi il procedimento sanzionatorio fino all'eventuale ordinanza-ingiunzione e all'opposizione.

*Schema di correzione:*

- [ ] Base: art. 7-bis TUEL (25–500 euro) e L. 689/1981.
- [ ] Accertamento e contestazione immediata all'esercente; obbligato in solido se diverso (art. 6).
- [ ] Pagamento in misura ridotta entro 60 giorni (art. 16), con eventuale importo stabilito dalla Giunta.
- [ ] Rapporto all'autorità competente in caso di mancato pagamento (art. 17).
- [ ] Scritti difensivi e audizione entro 30 giorni (art. 18).
- [ ] Ordinanza-ingiunzione motivata o archiviazione.
- [ ] Opposizione entro 30 giorni (art. 22 L. 689, art. 6 D.Lgs. 150/2011); prescrizione in 5 anni.

---

### Modulo 3 – Edilizia, urbanistica e ambiente

*Livello richiesto: ottima conoscenza · Priorità: alta · Settimana 4*

Il bando chiede un'ottima conoscenza con particolare riferimento all'attività di vigilanza e sanzionatoria. Concentrati su titoli edilizi, vigilanza (art. 27), sanzioni (artt. 31–44) e rifiuti.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| D.P.R. 380/2001, art. 3 | Definizioni degli interventi: manutenzione ordinaria e straordinaria, restauro e risanamento conservativo, ristrutturazione edilizia, nuova costruzione, ristrutturazione urbanistica. |
| Artt. 6 e 6-bis | Attività edilizia libera e CILA (comunicazione di inizio lavori asseverata). |
| Art. 10 | Interventi soggetti a permesso di costruire. |
| Artt. 22–23 | SCIA e SCIA alternativa al permesso di costruire. |
| Art. 24 | Agibilità (segnalazione certificata). |
| Art. 27 | Vigilanza sull'attività urbanistico-edilizia: il dirigente ordina la sospensione dei lavori; la polizia giudiziaria comunica le opere prive di titolo o di cartello. |
| Art. 31 | Interventi senza permesso o in totale difformità: ingiunzione a demolire; se non si ottempera entro 90 giorni, acquisizione gratuita al patrimonio comunale. |
| Artt. 33–34-bis | Ristrutturazione senza titolo, parziale difformità, tolleranze costruttive. |
| Artt. 36–36-bis | Accertamento di conformità (sanatoria). Il D.L. 69/2024 (Salva-casa) ha introdotto l'art. 36-bis per le difformità parziali. ⚠ Verifica il testo vigente. |
| Art. 37 | Interventi eseguiti senza SCIA o in difformità: sanzione pecuniaria. |
| Art. 44 | Sanzioni penali: lett. a) inosservanza delle norme; lett. b) esecuzione senza permesso o in totale difformità, o prosecuzione nonostante la sospensione; lett. c) lottizzazione abusiva e interventi in zone vincolate. |
| L.R. Toscana 65/2014 | Norme per il governo del territorio: in Toscana disciplina anche vigilanza e sanzioni edilizie. ⚠ Verifica gli articoli del titolo su vigilanza e sanzioni. |
| D.Lgs. 42/2004 | Codice dei beni culturali e del paesaggio: autorizzazione paesaggistica (art. 146) e sanzioni (artt. 167, 181). |
| D.Lgs. 152/2006, artt. 183–184 | Definizioni di rifiuto e classificazione (urbani, speciali, pericolosi). |
| Artt. 192, 255, 256, 256-bis | Divieto di abbandono, sanzioni per abbandono, gestione non autorizzata (reato), combustione illecita. ⚠ Le sanzioni per l'abbandono sono state inasprite nel 2025: verifica il testo vigente. |
| L. 447/1995 e art. 659 c.p. | Inquinamento acustico (legge quadro) e disturbo delle occupazioni o del riposo delle persone. |

#### Concetti chiave

- **Scala dei titoli edilizi.** Edilizia libera (nessun titolo, art. 6) → CILA (art. 6-bis) → SCIA (art. 22) → permesso di costruire (art. 10). Più l'intervento incide sul territorio, più il titolo è pesante.
- **Vigilanza (art. 27).** Spetta al dirigente o al responsabile del servizio, che può ordinare l'immediata sospensione dei lavori. Gli ufficiali e agenti di polizia giudiziaria, se nel cantiere non è esibito il titolo o non c'è il cartello, ne danno immediata comunicazione all'autorità giudiziaria, all'organo regionale competente e al dirigente.
- **Doppio binario.** Lo stesso abuso può avere conseguenze amministrative (sospensione, demolizione, sanzioni pecuniarie) e penali (art. 44). Sono procedimenti distinti e paralleli.
- **Demolizione e acquisizione (art. 31).** Ingiunzione a demolire; se l'interessato non provvede entro 90 giorni, il bene e l'area sono acquisiti gratuitamente al patrimonio del Comune. È prevista anche una sanzione pecuniaria per l'inottemperanza.
- **Rifiuti.** Rifiuto è ciò di cui il detentore si disfa o ha intenzione o obbligo di disfarsi. Distinguere urbani e speciali, pericolosi e non pericolosi. L'abbandono è vietato (art. 192) e sanzionato (art. 255); la gestione senza autorizzazione è reato (art. 256).
- **Rumore.** Superamento dei limiti di emissione: illecito amministrativo (L. 447/1995). Disturbo del riposo o delle occupazioni di un numero indeterminato di persone: reato (art. 659 c.p.).
- **Ordinanze sindacali.** In caso di emergenze sanitarie o di igiene pubblica a carattere locale il Sindaco adotta ordinanze contingibili e urgenti (art. 50, c. 5 TUEL).

#### Procedura operativa

1. Origine: segnalazione, esposto o controllo d'ufficio.
2. Verifica preliminare presso l'ufficio edilizia: esistenza del titolo e degli elaborati.
3. Sopralluogo: verifica del cartello di cantiere, del titolo esibito, della corrispondenza tra opere e progetto; fotografie e misure.
4. Verbale di sopralluogo; se le opere sono prive di titolo, comunicazione a autorità giudiziaria, Regione e dirigente (art. 27, c. 4).
5. Eventuale sequestro penale preventivo o probatorio se ricorre il reato e serve a interrompere l'attività.
6. Il dirigente adotta i provvedimenti: sospensione, ingiunzione a demolire, sanzioni pecuniarie.

#### Errori da evitare

- Confondere SCIA e CILA o attribuire alla polizia locale il potere di emettere l'ordinanza di demolizione (spetta al dirigente, art. 107 TUEL).
- Trattare solo il profilo amministrativo dimenticando quello penale (art. 44).
- Confondere l'illecito amministrativo acustico con il reato dell'art. 659 c.p.
- Citare l'importo delle sanzioni sui rifiuti senza verificare le modifiche del 2025.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Cosa fa la PG in un cantiere senza cartello o senza titolo esibito? | Comunica subito ad autorità giudiziaria, organo regionale competente e dirigente (art. 27, c. 4 DPR 380). |
| Chi ordina la sospensione dei lavori abusivi? | Il dirigente o responsabile del servizio comunale (art. 27 DPR 380, art. 107 TUEL). |
| Termine per eseguire l'ingiunzione di demolizione? | 90 giorni; poi acquisizione gratuita al patrimonio comunale (art. 31). |
| Quale norma prevede le sanzioni penali edilizie? | Art. 44 DPR 380/2001. |
| Gli interventi di manutenzione ordinaria richiedono un titolo? | No, sono attività edilizia libera (art. 6). |
| Dove è previsto il divieto di abbandono dei rifiuti? | Art. 192 D.Lgs. 152/2006 (sanzioni all'art. 255). |
| Disturbo del riposo delle persone: quale norma? | Art. 659 c.p. (reato). |

#### Quiz

1. Un ampliamento eseguito senza permesso di costruire comporta:
   - Solo una sanzione pecuniaria
   - **Ingiunzione a demolire e reato (art. 44 lett. b)** ✓
   - Solo la comunicazione al proprietario
   - Nessuna conseguenza se ultimato
   - *Spiegazione:* Art. 31 (demolizione) e art. 44 lett. b DPR 380/2001.
2. Se l'ingiunzione di demolizione non viene eseguita entro 90 giorni:
   - Si archivia
   - **Il bene è acquisito gratuitamente al patrimonio comunale** ✓
   - Si raddoppia la sanzione
   - Decide il Prefetto
   - *Spiegazione:* Art. 31, c. 3 DPR 380/2001.
3. La manutenzione ordinaria rientra:
   - **Nell'attività edilizia libera** ✓
   - Nella CILA
   - Nella SCIA
   - Nel permesso di costruire
   - *Spiegazione:* Art. 6 DPR 380/2001.
4. Chi ha la competenza a irrogare le sanzioni amministrative per l'abusivismo edilizio nel Comune?
   - Il Sindaco
   - Il Consiglio comunale
   - **Il dirigente** ✓
   - Il comandante della polizia locale
   - *Spiegazione:* Art. 107 TUEL e art. 27 DPR 380/2001.
5. La gestione di rifiuti senza autorizzazione è:
   - Illecito amministrativo
   - **Reato (art. 256 D.Lgs. 152/2006)** ✓
   - Lecita sotto i 100 kg
   - Competenza esclusiva dell'ASL
   - *Spiegazione:* Art. 256 D.Lgs. 152/2006.

#### Esercizi scritti

**Esercizio 1 – Cantiere senza titolo**

Durante un controllo trovi lavori di ampliamento di un'abitazione senza cartello di cantiere. Il proprietario non esibisce alcun titolo edilizio. Descrivi qualificazione giuridica, attività e atti, competenze e conseguenze.

*Schema di correzione:*

- [ ] Qualificazione: nuova costruzione / ampliamento soggetto a permesso di costruire (artt. 3 e 10 DPR 380).
- [ ] Verifica presso l'ufficio edilizia dell'esistenza di un titolo.
- [ ] Sopralluogo e verbale con fotografie e misure; identificazione di proprietario, committente, direttore lavori, impresa.
- [ ] Comunicazione immediata ad autorità giudiziaria, Regione e dirigente (art. 27, c. 4).
- [ ] Profilo penale: art. 44 lett. b; eventuale sequestro preventivo del cantiere.
- [ ] Profilo amministrativo: sospensione dei lavori e ingiunzione a demolire del dirigente (artt. 27 e 31); acquisizione in caso di inottemperanza.
- [ ] Possibile richiesta di accertamento di conformità (art. 36) se l'opera è conforme.

**Esercizio 2 – Abbandono di rifiuti**

Una segnalazione indica sacchi di rifiuti e materiali edili abbandonati ai bordi di una strada comunale. Descrivi come procedi.

*Schema di correzione:*

- [ ] Sopralluogo e documentazione fotografica.
- [ ] Qualificazione dei rifiuti: urbani o speciali (inerti da costruzione), pericolosi o no (artt. 183–184).
- [ ] Ricerca del responsabile: elementi nei sacchi, testimoni, videosorveglianza nel rispetto della privacy.
- [ ] Abbandono: divieto (art. 192) e sanzioni (art. 255); se si tratta di attività di impresa o rifiuti speciali, valutare il reato (art. 256).
- [ ] Verbale e trasmissione; comunicazione alla Procura in caso di reato.
- [ ] Ordinanza di rimozione e ripristino a carico del responsabile e del proprietario se c'è colpa (art. 192, c. 3).

---

### Modulo 4 – Commercio, pubblici esercizi, attività ricettive e turismo

*Livello richiesto: ottima conoscenza · Priorità: alta · Settimana 5*

Gran parte della normativa è regionale. Lo scritto può chiedere un controllo su un bar, un mercato o una struttura ricettiva: devi sapere quale titolo serve e cosa verificare.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| D.Lgs. 114/1998 | Riforma del commercio: esercizi di vicinato, medie e grandi strutture di vendita, commercio su aree pubbliche. |
| L.R. Toscana 62/2018 | Codice del commercio della Toscana: sede fissa, aree pubbliche, somministrazione, forme speciali di vendita. ⚠ Verifica il testo vigente. |
| D.Lgs. 59/2010, art. 71 | Requisiti morali e professionali per commercio alimentare e somministrazione. |
| D.Lgs. 222/2016 | Regimi amministrativi (autorizzazione, SCIA, comunicazione) per le attività. |
| D.P.R. 160/2010 | Sportello unico per le attività produttive (SUAP). |
| L. 287/1991 | Disciplina storica dei pubblici esercizi, in parte superata dalla normativa regionale. |
| TULPS, artt. 68–69 e 80 | Spettacoli e trattenimenti pubblici; agibilità dei locali di pubblico spettacolo (commissione di vigilanza). |
| TULPS, art. 100 | Sospensione della licenza da parte del Questore per motivi di ordine e sicurezza pubblica. |
| TULPS, art. 109 | Obbligo per i gestori di strutture ricettive di comunicare le generalità degli alloggiati all'autorità di PS entro 24 ore (Alloggiati Web). |
| L.R. Toscana 86/2016 | Testo unico del sistema turistico regionale: strutture ricettive e locazioni turistiche. ⚠ Verifica il testo vigente. |
| D.L. 145/2023, art. 13-ter | Codice identificativo nazionale (CIN) per locazioni turistiche e strutture ricettive. |
| Art. 689 e 691 c.p. | Somministrazione di bevande alcoliche a minori di 18 anni e a persone in manifesta ubriachezza. |
| L. 125/2001, art. 14-ter | Divieto di vendita di alcolici ai minori (sanzione amministrativa). |
| Reg. CE 852/2004 | Igiene degli alimenti (HACCP), competenza dell'ASL. |
| L. 160/2019, c. 816 ss. | Canone unico patrimoniale per l'occupazione di suolo pubblico. |
| Art. 50, c. 7 e 7-bis TUEL | Il Sindaco coordina gli orari degli esercizi e può limitare orari di vendita e somministrazione di alcolici. |

#### Concetti chiave

- **Tipologie di commercio.** Sede fissa: esercizi di vicinato, medie e grandi strutture (soglie di superficie stabilite dalla legge e dalla Regione). Aree pubbliche: su posteggio (tipo A) o in forma itinerante (tipo B).
- **Titoli abilitativi.** Le attività si avviano con SCIA, autorizzazione o comunicazione al SUAP, secondo il D.Lgs. 222/2016 e la legge regionale. La polizia locale verifica che il titolo esista e che l'attività lo rispetti.
- **Somministrazione.** Vendita per il consumo sul posto con attrezzature. Richiede requisiti morali e professionali (art. 71 D.Lgs. 59/2010) e il rispetto delle norme su orari, igiene, sicurezza, rumore.
- **Alcol e minori.** Somministrare alcolici a minori di 18 anni è reato (art. 689 c.p.); la vendita è sanzionata anche in via amministrativa (L. 125/2001). Somministrare a chi è in manifesta ubriachezza è reato (art. 691 c.p.).
- **Strutture ricettive.** Obbligo di comunicare gli alloggiati alla Questura entro 24 ore (art. 109 TULPS) e di esporre il CIN. La disciplina regionale distingue alberghiere, extra-alberghiere, all'aria aperta, locazioni turistiche.
- **Pubblici spettacoli.** Licenza o SCIA per trattenimenti e spettacoli (artt. 68–69 TULPS) e verifica di agibilità del locale (art. 80).
- **Occupazione di suolo pubblico.** Serve concessione o autorizzazione; l'occupazione abusiva è sanzionata dal regolamento del canone unico e, sulle strade, dall'art. 20 CdS.

#### Procedura operativa

1. Verifica preventiva al SUAP: titolo, intestatario, superficie autorizzata, orari, eventuale concessione di suolo pubblico.
2. Controllo nel locale: identificazione del titolare o preposto, esposizione dei prezzi, orari, superficie occupata, rispetto delle prescrizioni.
3. Accertamento delle violazioni amministrative con verbale e contestazione (L. 689/1981).
4. Segnalazione agli uffici competenti (SUAP per i provvedimenti sul titolo, ASL per l'igiene, Questura per i profili di PS).
5. Se emergono reati (alcol a minori, ubriachezza), comunicazione della notizia di reato al PM.

#### Errori da evitare

- Applicare solo la legge statale dimenticando la legge regionale toscana.
- Attribuire alla polizia locale la sospensione della licenza: per motivi di ordine pubblico spetta al Questore (art. 100 TULPS); per i titoli comunali al dirigente o al SUAP.
- Trattare la somministrazione di alcolici a minori come semplice illecito amministrativo.
- Dimenticare che igiene e HACCP sono competenza dell'ASL.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Entro quando vanno comunicati gli alloggiati all'autorità di PS? | Entro 24 ore (art. 109 TULPS). |
| Quale norma stabilisce i requisiti per la somministrazione? | Art. 71 D.Lgs. 59/2010. |
| Somministrare alcolici a un minore di 18 anni è… | Reato (art. 689 c.p.). |
| Chi può sospendere una licenza per motivi di ordine pubblico? | Il Questore (art. 100 TULPS). |
| Quale regolamento disciplina il SUAP? | D.P.R. 160/2010. |
| Commercio itinerante su aree pubbliche: quale tipo? | Tipo B (tipo A è su posteggio). |
| Cos'è il CIN? | Codice identificativo nazionale delle strutture ricettive e locazioni turistiche. |

#### Quiz

1. Il gestore di un B&B deve comunicare le generalità degli ospiti all'autorità di PS entro:
   - 12 ore
   - **24 ore** ✓
   - 48 ore
   - 5 giorni
   - *Spiegazione:* Art. 109 TULPS.
2. La sospensione di una licenza per gravi motivi di ordine pubblico è disposta da:
   - Sindaco
   - Polizia locale
   - **Questore** ✓
   - Prefetto
   - *Spiegazione:* Art. 100 TULPS.
3. La somministrazione di alcolici a un sedicenne è:
   - Lecita con il consenso dei genitori
   - Illecito amministrativo lieve
   - **Reato** ✓
   - Competenza esclusiva dell'ASL
   - *Spiegazione:* Art. 689 c.p.
4. I requisiti professionali per la somministrazione sono previsti da:
   - **Art. 71 D.Lgs. 59/2010** ✓
   - Art. 86 TULPS
   - Art. 7-bis TUEL
   - D.P.R. 380/2001
   - *Spiegazione:* Art. 71 D.Lgs. 59/2010.
5. Il controllo dell'igiene degli alimenti (HACCP) spetta principalmente a:
   - Polizia locale
   - **ASL** ✓
   - Questura
   - Camera di commercio
   - *Spiegazione:* Reg. CE 852/2004: competenza sanitaria.

#### Esercizi scritti

**Esercizio 1 – Bar fuori orario**

Alle 2 di notte un bar resta aperto oltre l'orario consentito, con tavolini su un'area del marciapiede più ampia di quella concessa. Ci sono clienti molto giovani che consumano alcolici e i vicini lamentano rumore. Descrivi come procedi.

*Schema di correzione:*

- [ ] Verifica al SUAP: titolo, orari, concessione di suolo pubblico.
- [ ] Identificazione del titolare o preposto e dei clienti, con particolare attenzione all'età.
- [ ] Violazione dell'orario: verbale secondo regolamento o ordinanza (art. 50 TUEL, legge regionale).
- [ ] Occupazione abusiva di suolo pubblico: verbale (canone unico e art. 20 CdS).
- [ ] Alcol a minori: reato (art. 689 c.p.), notizia di reato; profilo amministrativo (L. 125/2001).
- [ ] Rumore: misurazioni (ARPAT) o reato di disturbo (art. 659 c.p.) se il disturbo riguarda più persone.
- [ ] Segnalazioni: SUAP per i provvedimenti sul titolo, Questura per eventuale art. 100 TULPS.

**Esercizio 2 – Controllo a un mercato**

Durante il mercato settimanale noti un venditore senza posteggio assegnato che vende merce in un'area non autorizzata. Descrivi qualificazione, controlli e atti.

*Schema di correzione:*

- [ ] Distinzione tra commercio su posteggio (tipo A) e itinerante (tipo B).
- [ ] Verifica del titolo, dei requisiti e della regolarità della posizione.
- [ ] Commercio senza titolo o fuori dalle aree consentite: sanzione amministrativa e confisca della merce secondo la legge regionale.
- [ ] Eventuale sequestro cautelare (art. 13 L. 689/1981).
- [ ] Verifiche su merce contraffatta: profili penali (artt. 474 e 648 c.p.).
- [ ] Verbale e trasmissione al SUAP.

---

### Modulo 5 – Diritto penale, procedura penale e polizia giudiziaria

*Livello richiesto: buona conoscenza · Priorità: alta · Settimana 6*

Il bando chiede una buona conoscenza con riferimento all'attività di polizia giudiziaria. Concentrati sulle funzioni della PG, sulla flagranza, sugli atti tipici e sui reati più frequenti in servizio.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| Artt. 39–43 c.p. | Delitti e contravvenzioni; nesso causale; dolo, colpa, preterintenzione. |
| Artt. 50–54 c.p. | Cause di giustificazione: consenso, esercizio di un diritto o adempimento di un dovere, legittima difesa, uso legittimo delle armi, stato di necessità. |
| Artt. 56 e 110 c.p. | Tentativo e concorso di persone nel reato. |
| Artt. 357–358 c.p. | Pubblico ufficiale e incaricato di pubblico servizio. |
| Artt. 314–328 c.p. | Delitti dei pubblici ufficiali: peculato, concussione, corruzione, rifiuto e omissione di atti d'ufficio. L'abuso d'ufficio (art. 323) è stato abrogato dalla L. 114/2024. |
| Artt. 336, 337, 341-bis c.p. | Violenza o minaccia a pubblico ufficiale, resistenza, oltraggio. |
| Artt. 361, 495, 496, 651 c.p. | Omessa denuncia del PU, falsa attestazione sulla propria identità, false dichiarazioni, rifiuto di fornire le proprie generalità. |
| Artt. 581, 582, 610, 612, 612-bis c.p. | Percosse, lesioni, violenza privata, minaccia, atti persecutori. |
| Artt. 624, 624-bis, 625, 628, 640, 635, 648 c.p. | Furto, furto in abitazione e con strappo, aggravanti, rapina, truffa, danneggiamento, ricettazione. |
| Art. 55 c.p.p. | Funzioni della PG: prendere notizia dei reati, impedirne le conseguenze, ricercarne gli autori, assicurare le fonti di prova. |
| Art. 57 c.p.p. e art. 5 L. 65/1986 | Ufficiali e agenti di PG: la polizia locale ha la qualità nei limiti del servizio e del territorio. |
| Art. 347 c.p.p. | Comunicazione della notizia di reato al PM senza ritardo. |
| Artt. 348–357 c.p.p. | Assicurazione delle fonti di prova, identificazione, sommarie informazioni, perquisizioni, accertamenti urgenti, sequestro, documentazione. |
| Artt. 380–391 c.p.p. | Arresto obbligatorio e facoltativo in flagranza, stato di flagranza, fermo, doveri della PG, convalida. |
| D.Lgs. 150/2022 (riforma Cartabia) | Estende la procedibilità a querela per alcuni reati (tra cui ipotesi di furto e lesioni). ⚠ Verifica la procedibilità del reato prima di citarla. |

#### Concetti chiave

- **Delitti e contravvenzioni.** Si distinguono per la pena: i delitti sono puniti con ergastolo, reclusione e multa; le contravvenzioni con arresto e ammenda. Nei delitti serve di regola il dolo; nelle contravvenzioni basta la colpa.
- **La polizia locale come PG.** Ufficiali di PG: comandante e addetti al coordinamento e controllo. Agenti di PG: operatori. La qualità vale solo in servizio e nel territorio di competenza (art. 57 c.p.p., art. 5 L. 65/1986).
- **Flagranza (art. 382 c.p.p.).** È in flagranza chi viene colto mentre commette il reato oppure, subito dopo, è inseguito dalla PG, dalla persona offesa o da altri, o è sorpreso con cose o tracce da cui appare che ha commesso il reato immediatamente prima (quasi flagranza).
- **Arresto obbligatorio e facoltativo.** Obbligatorio per i reati gravi indicati dall'art. 380 (es. rapina, furto in abitazione e con strappo). Facoltativo nei casi dell'art. 381, valutando gravità del fatto e pericolosità. L'arrestato va messo a disposizione del PM entro 24 ore; la convalida si chiede entro 48 ore.
- **Fermo (art. 384).** Disposto dal PM, o d'iniziativa della PG in casi urgenti, per gravi indizi di un reato grave e pericolo di fuga.
- **Atti tipici della PG.** Identificazione (art. 349, con accompagnamento fino a 12 ore, prorogabili a 24), sommarie informazioni dall'indagato (art. 350) e dai testimoni (art. 351), perquisizioni in flagranza (art. 352), accertamenti urgenti (art. 354), sequestro con verbale trasmesso al PM entro 48 ore (art. 355).
- **Furto e rapina.** Il furto è l'impossessamento della cosa altrui sottraendola a chi la detiene. La rapina richiede violenza o minaccia (art. 628): propria se usata per sottrarre, impropria se usata subito dopo per assicurarsi il possesso o l'impunità.
- **Reati contro i pubblici ufficiali.** Violenza o minaccia per costringere il PU a compiere un atto (336), resistenza mentre compie un atto d'ufficio (337), oltraggio in luogo pubblico e in presenza di più persone (341-bis).

#### Procedura operativa

1. Prendi notizia del reato e intervieni per impedirne le conseguenze.
2. Identifica gli autori e le persone informate sui fatti.
3. Assicura le fonti di prova: rilievi, sequestro del corpo del reato, documentazione dei luoghi.
4. Valuta la flagranza e l'eventuale arresto (obbligatorio o facoltativo).
5. Redigi gli atti: verbali di identificazione, sommarie informazioni, perquisizione, sequestro, arresto.
6. Comunica la notizia di reato al PM senza ritardo (art. 347); in caso di arresto metti la persona a disposizione del PM entro 24 ore.

#### Errori da evitare

- Citare l'abuso d'ufficio come reato vigente: è abrogato dal 2024.
- Confondere furto con strappo (art. 624-bis) e rapina (art. 628).
- Dimenticare che la qualità di PG della polizia locale vale solo in servizio e nel territorio.
- Mescolare atti amministrativi e atti di PG nello stesso verbale.
- Indicare la procedibilità d'ufficio senza verificare le modifiche della riforma Cartabia.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Quali sono le funzioni della PG (art. 55 c.p.p.)? | Prendere notizia dei reati, impedirne le conseguenze, ricercarne gli autori, compiere gli atti per assicurare le fonti di prova e raccogliere quanto serve all'applicazione della legge penale. |
| Cos'è la quasi flagranza? | Quando, subito dopo il reato, la persona è inseguita o sorpresa con cose o tracce che la collegano al reato (art. 382 c.p.p.). |
| Entro quanto l'arrestato va messo a disposizione del PM? | Entro 24 ore (art. 386 c.p.p.). |
| Qual è la differenza tra furto e rapina? | La rapina richiede violenza alla persona o minaccia (art. 628 c.p.). |
| L'abuso d'ufficio è ancora reato? | No, l'art. 323 c.p. è stato abrogato dalla L. 114/2024. |
| Chi è agente di PG nella polizia locale? | Gli operatori, nei limiti del servizio e del territorio (art. 57 c.p.p., art. 5 L. 65/1986). |
| Quale articolo disciplina le sommarie informazioni dai testimoni? | Art. 351 c.p.p. |
| Entro quanto si trasmette al PM il verbale di sequestro della PG? | Entro 48 ore (art. 355 c.p.p.); il PM convalida entro le 48 ore successive. |

#### Quiz

1. Chi, subito dopo il reato, è sorpreso con la refurtiva, è in stato di:
   - Fermo
   - **Quasi flagranza** ✓
   - Custodia cautelare
   - Latitanza
   - *Spiegazione:* Art. 382 c.p.p.
2. Lo strattonamento di una persona per tenersi la borsa appena sottratta configura:
   - Furto semplice
   - Danneggiamento
   - **Rapina impropria** ✓
   - Truffa
   - *Spiegazione:* Art. 628, c. 2 c.p.
3. L'arrestato va messo a disposizione del PM entro:
   - 12 ore
   - **24 ore** ✓
   - 48 ore
   - 72 ore
   - *Spiegazione:* Art. 386 c.p.p.
4. L'abuso d'ufficio (art. 323 c.p.) oggi:
   - È un delitto punito con la reclusione
   - È una contravvenzione
   - **È stato abrogato** ✓
   - È un illecito amministrativo
   - *Spiegazione:* Abrogato dalla L. 114/2024.
5. La polizia locale ha la qualità di PG:
   - Sempre e ovunque
   - **Solo in servizio e nel territorio di competenza** ✓
   - Mai
   - Solo su delega del Prefetto
   - *Spiegazione:* Art. 57 c.p.p. e art. 5 L. 65/1986.
6. Le sommarie informazioni dalle persone informate sui fatti sono disciplinate da:
   - Art. 347 c.p.p.
   - **Art. 351 c.p.p.** ✓
   - Art. 380 c.p.p.
   - Art. 55 c.p.p.
   - *Spiegazione:* Art. 351 c.p.p.

#### Esercizi scritti

**Esercizio 1 – Furto in flagranza**

Durante il servizio vedi un uomo forzare la portiera di un'auto in sosta e prendere uno zaino. Lo blocchi dopo un breve inseguimento; lui ti spintona per fuggire. Descrivi qualificazione dei fatti, atti di polizia giudiziaria e comunicazioni.

*Schema di correzione:*

- [ ] Qualità di PG della polizia locale in servizio (art. 57 c.p.p., art. 5 L. 65/1986) e funzioni (art. 55).
- [ ] Qualificazione: furto aggravato (artt. 624, 625: violenza sulle cose); valutare la rapina impropria se la violenza serve a mantenere il possesso o fuggire, e la resistenza a PU (art. 337).
- [ ] Flagranza e inseguimento (art. 382); arresto obbligatorio o facoltativo (artt. 380–381) secondo la qualificazione.
- [ ] Perquisizione personale in flagranza (art. 352) e sequestro della refurtiva e degli strumenti (art. 354), restituzione alla persona offesa.
- [ ] Identificazione (art. 349) e sommarie informazioni dai testimoni (art. 351).
- [ ] Comunicazione della notizia di reato (art. 347) e messa a disposizione del PM entro 24 ore (art. 386).
- [ ] Verifica della procedibilità dopo la riforma Cartabia.

**Esercizio 2 – Resistenza durante un controllo**

Durante un controllo stradale il conducente si rifiuta di dare le generalità, insulta gli agenti davanti ad altre persone e tenta di andarsene spingendo un collega. Qualifica i fatti e descrivi gli atti.

*Schema di correzione:*

- [ ] Rifiuto delle generalità (art. 651 c.p.) e identificazione coattiva con accompagnamento (art. 349 c.p.p.).
- [ ] Oltraggio a pubblico ufficiale in luogo pubblico e in presenza di più persone (art. 341-bis c.p.).
- [ ] Resistenza a pubblico ufficiale (art. 337 c.p.): violenza per opporsi all'atto d'ufficio.
- [ ] Valutazione dell'arresto in flagranza.
- [ ] Violazioni CdS contestate a parte (documenti, art. 180).
- [ ] Notizia di reato, sommarie informazioni dai testimoni, annotazione di servizio.

---

### Modulo 6 – Polizia locale, pubblica sicurezza e sicurezza urbana

*Livello richiesto: buona / sufficiente conoscenza · Priorità: media · Settimana 7*

Comprende l'ordinamento della polizia locale (buona conoscenza), la pubblica sicurezza e la sicurezza urbana (sufficiente) e le nozioni su armi, stupefacenti, prostituzione, immigrazione, igiene e trattamenti sanitari obbligatori.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| L. 65/1986 | Legge quadro sull'ordinamento della polizia municipale: art. 1 servizio comunale, art. 2 funzioni del Sindaco, art. 3 compiti, art. 5 funzioni di PG, polizia stradale e ausiliarie di PS, art. 9 dipendenza dal Sindaco. |
| L.R. Toscana 12/2006 | Norme in materia di polizia comunale e provinciale. ⚠ Verifica il testo vigente e il regolamento attuativo. |
| Art. 117, c. 2 lett. h Cost. | Ordine pubblico e sicurezza sono competenza esclusiva dello Stato, esclusa la polizia amministrativa locale. |
| D.L. 14/2017 (L. 48/2017) | Sicurezza delle città: art. 4 sicurezza urbana; art. 9 ordine di allontanamento (48 ore); art. 10 divieto di accesso del Questore (DASPO urbano). |
| Artt. 50 e 54 TUEL | Ordinanze del Sindaco: emergenze sanitarie e orari (art. 50); come ufficiale del Governo, per incolumità pubblica e sicurezza urbana, comunicate al Prefetto (art. 54). |
| R.D. 773/1931 (TULPS) | Testo unico delle leggi di pubblica sicurezza: art. 18 riunioni pubbliche (preavviso al Questore 3 giorni prima), artt. 38 e 42 denuncia e porto di armi. |
| L. 110/1975, art. 4 | Porto di armi od oggetti atti ad offendere senza giustificato motivo. |
| D.P.R. 309/1990 | Stupefacenti: art. 73 produzione, traffico e detenzione illecita (c. 5 lieve entità); art. 75 uso personale, sanzioni amministrative del Prefetto. |
| L. 75/1958 | Abolizione della regolamentazione della prostituzione: puniti reclutamento, favoreggiamento e sfruttamento; l'esercizio in sé non è reato. |
| D.Lgs. 286/1998 (TU immigrazione) | Art. 6 obbligo di esibire i documenti a richiesta; art. 7 comunicazione entro 48 ore di chi ospita o cede un immobile a uno straniero; art. 10-bis ingresso e soggiorno illegale; art. 12 favoreggiamento; art. 13 espulsione. |
| L. 833/1978, artt. 33–35 | Accertamenti e trattamenti sanitari obbligatori (ASO e TSO). |
| D.L. 48/2025 (L. 80/2025) | Decreto sicurezza 2025: nuove norme penali e tutele per le forze di polizia. ⚠ Verifica le parti di interesse per la polizia locale. |

#### Concetti chiave

- **Funzioni della polizia locale.** Funzioni di polizia amministrativa locale, di polizia stradale, di polizia giudiziaria e ausiliarie di pubblica sicurezza. Il Sindaco impartisce le direttive e vigila; il comandante risponde al Sindaco. Collabora con le forze di polizia dello Stato su disposizione del Sindaco, quando c'è una richiesta motivata.
- **Agente di pubblica sicurezza.** La qualità è conferita dal Prefetto, su richiesta del Sindaco, a chi ha i requisiti dell'art. 5 L. 65/1986: godimento dei diritti civili e politici, nessuna condanna a pena detentiva per delitto non colposo né misure di prevenzione, nessuna espulsione dalle Forze Armate o destituzione dai pubblici uffici. Sono gli stessi requisiti indicati nel bando.
- **Sicurezza urbana.** Bene pubblico che riguarda la vivibilità e il decoro delle città (D.L. 14/2017). Ordine di allontanamento: disposto dall'organo accertatore, dura 48 ore. In caso di reiterazione il Questore può disporre il divieto di accesso (DASPO urbano).
- **Ordinanze sindacali.** Art. 50: il Sindaco come capo dell'amministrazione (emergenze sanitarie e di igiene pubblica locali, orari). Art. 54: il Sindaco come ufficiale del Governo, per prevenire ed eliminare gravi pericoli per l'incolumità pubblica e la sicurezza urbana, con comunicazione preventiva al Prefetto.
- **Stupefacenti.** La detenzione per uso personale è illecito amministrativo (art. 75, segnalazione al Prefetto). Produzione, cessione e detenzione non per uso personale sono reato (art. 73).
- **Immigrazione.** Lo straniero deve esibire passaporto e permesso di soggiorno a richiesta (art. 6). Chi ospita o dà in uso un immobile a uno straniero lo comunica all'autorità di PS entro 48 ore (art. 7).
- **TSO.** Disposto con ordinanza del Sindaco, come autorità sanitaria, su proposta motivata di un medico. Se comporta degenza ospedaliera serve la convalida di un medico della struttura pubblica. Il provvedimento va notificato entro 48 ore al giudice tutelare, che convalida entro le successive 48 ore. La polizia locale assiste il personale sanitario nell'esecuzione.

#### Procedura operativa

1. Individua la competenza: polizia locale, forze di polizia statali, autorità sanitaria.
2. Verifica il presupposto normativo dell'intervento (ordinanza, legge, richiesta motivata).
3. Per l'ordine di allontanamento: accerta la violazione nelle aree indicate, redigi il verbale, trasmetti al Questore.
4. Per il TSO: verifica l'ordinanza del Sindaco e le proposte mediche, assisti il personale sanitario, documenta l'intervento.
5. Per armi, stupefacenti e immigrazione: identifica, sequestra se necessario, segnala o comunica la notizia di reato.

#### Errori da evitare

- Confondere ordinanze ex art. 50 e ex art. 54 TUEL.
- Attribuire al Sindaco il DASPO urbano: lo dispone il Questore.
- Dire che la qualità di agente di PS è conferita dal Sindaco: la conferisce il Prefetto.
- Considerare reato la detenzione per uso personale di stupefacenti.
- Descrivere il TSO senza le garanzie: proposta e convalida mediche, ordinanza, giudice tutelare.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Chi conferisce la qualità di agente di PS alla polizia locale? | Il Prefetto, su richiesta del Sindaco (art. 5 L. 65/1986). |
| Quanto dura l'ordine di allontanamento? | 48 ore (art. 9 D.L. 14/2017). |
| Chi dispone il DASPO urbano? | Il Questore (art. 10 D.L. 14/2017). |
| Ordinanze per incolumità pubblica e sicurezza urbana: quale articolo? | Art. 54 TUEL (Sindaco come ufficiale del Governo). |
| Detenzione di droga per uso personale? | Illecito amministrativo, sanzioni del Prefetto (art. 75 DPR 309/1990). |
| Entro quanto si comunica l'ospitalità di uno straniero? | 48 ore (art. 7 D.Lgs. 286/1998). |
| Preavviso per una riunione in luogo pubblico? | Al Questore almeno 3 giorni prima (art. 18 TULPS). |
| Chi convalida il TSO? | Il giudice tutelare, entro 48 ore dalla notifica (art. 35 L. 833/1978). |

#### Quiz

1. La qualità di agente di pubblica sicurezza è conferita da:
   - Sindaco
   - Comandante
   - **Prefetto** ✓
   - Questore
   - *Spiegazione:* Art. 5 L. 65/1986.
2. Il DASPO urbano è disposto da:
   - Sindaco
   - **Questore** ✓
   - Prefetto
   - Polizia locale
   - *Spiegazione:* Art. 10 D.L. 14/2017.
3. La detenzione di stupefacenti per uso personale è:
   - Reato
   - **Illecito amministrativo** ✓
   - Lecita
   - Contravvenzione
   - *Spiegazione:* Art. 75 D.P.R. 309/1990.
4. Le ordinanze del Sindaco come ufficiale del Governo per la sicurezza urbana sono previste da:
   - Art. 50 TUEL
   - **Art. 54 TUEL** ✓
   - Art. 107 TUEL
   - Art. 7-bis TUEL
   - *Spiegazione:* Art. 54 TUEL.
5. Chi ospita uno straniero deve comunicarlo all'autorità di PS entro:
   - 24 ore
   - **48 ore** ✓
   - 72 ore
   - 8 giorni
   - *Spiegazione:* Art. 7 D.Lgs. 286/1998.
6. Il TSO è disposto con:
   - Decreto del Prefetto
   - **Ordinanza del Sindaco** ✓
   - Ordine del medico
   - Decreto del giudice tutelare
   - *Spiegazione:* Art. 33 L. 833/1978; convalida del giudice tutelare.

#### Esercizi scritti

**Esercizio 1 – Poteri della polizia locale**

Illustra funzioni, qualifiche e limiti della polizia locale, anche nel rapporto con le forze di polizia dello Stato e con il Sindaco.

*Schema di correzione:*

- [ ] Base costituzionale: art. 117, c. 2 lett. h (polizia amministrativa locale).
- [ ] L. 65/1986: servizio comunale, funzioni del Sindaco, compiti (art. 3).
- [ ] Qualifiche (art. 5): PG, polizia stradale, ausiliarie di PS; conferimento dal Prefetto e requisiti.
- [ ] Limiti: territorio e servizio; collaborazione con le forze di polizia dello Stato su disposizione del Sindaco.
- [ ] Sicurezza urbana: D.L. 14/2017, patti per la sicurezza, ordine di allontanamento.
- [ ] Ordinanze del Sindaco (artt. 50 e 54 TUEL).
- [ ] Legge regionale toscana sulla polizia locale.

**Esercizio 2 – Esecuzione di un TSO**

Ricevi l'ordinanza del Sindaco per l'esecuzione di un TSO. Descrivi presupposti, garanzie e il ruolo della polizia locale.

*Schema di correzione:*

- [ ] Base: art. 32 Cost. (trattamenti obbligatori solo per legge, nel rispetto della persona) e artt. 33–35 L. 833/1978.
- [ ] Presupposti: proposta motivata di un medico e convalida di un medico della struttura pubblica per la degenza.
- [ ] Ordinanza del Sindaco come autorità sanitaria.
- [ ] Notifica al giudice tutelare entro 48 ore e convalida entro 48 ore.
- [ ] Ruolo della polizia locale: supporto al personale sanitario, uso della forza solo se necessario e proporzionato, documentazione.
- [ ] Tutela della dignità e dei dati della persona.

---

### Modulo 7 – Enti locali, pubblico impiego, anticorruzione e trasparenza

*Livello richiesto: nozioni · Priorità: media · Settimana 7*

Servono per capire chi fa cosa nel Comune e quali regole valgono per te come dipendente. Spesso utili per completare risposte su altre materie (es. chi firma un'ordinanza).

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| Art. 114 Cost. | La Repubblica è costituita da Comuni, Province, Città metropolitane, Regioni e Stato. |
| TUEL D.Lgs. 267/2000, artt. 3, 6, 7 | Autonomia, statuto e regolamenti comunali. |
| Art. 36 | Organi di governo: Consiglio, Giunta, Sindaco. |
| Art. 42 | Consiglio comunale: indirizzo e controllo; atti fondamentali (statuto, regolamenti, bilancio, piani urbanistici). |
| Art. 48 | Giunta: competenza residuale per gli atti che non spettano al Consiglio o al Sindaco. |
| Art. 50 | Sindaco: responsabile dell'amministrazione, nomina la Giunta, ordinanze contingibili e urgenti in materia sanitaria e di igiene pubblica, coordinamento degli orari. |
| Art. 54 | Sindaco come ufficiale del Governo. |
| Art. 97 | Segretario comunale. |
| Art. 107 | Dirigenti: gestione amministrativa, finanziaria e tecnica; autorizzazioni, concessioni, sanzioni, provvedimenti di vigilanza edilizia. |
| Art. 109 | Nei Comuni senza dirigenti le funzioni sono attribuite ai responsabili dei servizi. |
| Art. 124 e 134 | Pubblicazione delle delibere all'albo pretorio per 15 giorni; esecutività (decimo giorno dalla pubblicazione o immediata eseguibilità). |
| D.Lgs. 165/2001 | Pubblico impiego: art. 4 separazione indirizzo politico/gestione; art. 35 reclutamento; art. 53 incompatibilità e incarichi; art. 54 codice di comportamento; artt. 55 ss. responsabilità disciplinare. |
| CCNL Funzioni locali 16/11/2022 | Quattro aree: Operatori, Operatori esperti, Istruttori, Funzionari ed Elevata qualificazione. L'Istruttore di vigilanza è nell'area Istruttori. |
| D.P.R. 62/2013 (mod. D.P.R. 81/2023) | Codice di comportamento: regali di modico valore (non oltre 150 euro), conflitto di interessi, uso dei social media. |
| L. 190/2012 | Anticorruzione: ANAC, Piano nazionale anticorruzione, RPCT, rotazione del personale. La pianificazione anticorruzione del Comune è ora nel PIAO (D.L. 80/2021). |
| D.Lgs. 33/2013 e 39/2013 | Trasparenza (Amministrazione trasparente, accesso civico) e inconferibilità e incompatibilità degli incarichi. |
| D.Lgs. 24/2023 | Whistleblowing: tutela di chi segnala illeciti. |

#### Concetti chiave

- **Separazione politica-gestione.** Gli organi politici (Consiglio, Giunta, Sindaco) definiscono indirizzi e controllano. I dirigenti adottano gli atti di gestione, comprese autorizzazioni, concessioni e sanzioni (art. 107 TUEL, art. 4 D.Lgs. 165/2001).
- **Competenze degli organi.** Consiglio: atti fondamentali tassativi (art. 42). Giunta: competenza residuale (art. 48). Sindaco: rappresentanza, ordinanze, nomine (art. 50); ufficiale del Governo (art. 54).
- **Responsabilità del dipendente.** Penale, civile, amministrativo-contabile (Corte dei conti), disciplinare. Per i dirigenti anche dirigenziale.
- **Codice di comportamento.** Doveri di diligenza, lealtà, imparzialità, riservatezza; obbligo di astensione in caso di conflitto di interessi; divieto di accettare regali oltre il modico valore; comportamento corretto anche sui social.
- **Anticorruzione.** Sistema di prevenzione: ANAC definisce il PNA; ogni ente nomina un RPCT e inserisce le misure nel PIAO. Strumenti: rotazione, astensione, pantouflage, whistleblowing, trasparenza.
- **Trasparenza.** Pubblicazione obbligatoria di dati e atti nella sezione Amministrazione trasparente. Accesso civico semplice (dati che dovevano essere pubblicati) e generalizzato (tutti i dati, con i limiti dell'art. 5-bis).

#### Procedura operativa

1. Davanti a un caso, chiediti sempre: atto politico o di gestione? Chi è competente?
2. Verifica se l'atto richiede pubblicazione all'albo e quando diventa esecutivo.
3. Se emerge un conflitto di interessi, astensione e segnalazione al responsabile.
4. Se un dipendente nota un illecito, segnalazione al RPCT con le tutele del whistleblowing.

#### Errori da evitare

- Attribuire al Sindaco atti di gestione (autorizzazioni, sanzioni).
- Confondere art. 50 e art. 54 TUEL.
- Citare il vecchio Piano triennale di prevenzione della corruzione senza ricordare che ora confluisce nel PIAO.
- Confondere responsabilità disciplinare e responsabilità penale.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Chi approva il bilancio comunale? | Il Consiglio comunale (art. 42 TUEL). |
| Quale organo ha competenza residuale? | La Giunta (art. 48 TUEL). |
| Chi adotta autorizzazioni e sanzioni amministrative nel Comune? | I dirigenti o responsabili dei servizi (artt. 107 e 109 TUEL). |
| Per quanto si pubblicano le delibere all'albo pretorio? | 15 giorni (art. 124 TUEL). |
| Limite del regalo di modico valore? | 150 euro (art. 4 D.P.R. 62/2013). |
| In quale area del CCNL rientra l'Istruttore di vigilanza? | Area degli Istruttori (CCNL Funzioni locali 16/11/2022). |
| Dove confluisce oggi la pianificazione anticorruzione del Comune? | Nel PIAO (D.L. 80/2021). |

#### Quiz

1. Chi approva i regolamenti comunali?
   - Sindaco
   - Giunta
   - **Consiglio comunale** ✓
   - Segretario
   - *Spiegazione:* Art. 42 TUEL.
2. La Giunta comunale ha competenza:
   - Esclusiva su bilancio e regolamenti
   - **Residuale** ✓
   - Solo consultiva
   - Solo in materia di personale
   - *Spiegazione:* Art. 48 TUEL.
3. Gli atti di gestione, come autorizzazioni e sanzioni, spettano a:
   - Consiglio
   - Sindaco
   - **Dirigenti** ✓
   - Prefetto
   - *Spiegazione:* Art. 107 TUEL.
4. Le delibere si pubblicano all'albo pretorio per:
   - 8 giorni
   - 10 giorni
   - **15 giorni** ✓
   - 30 giorni
   - *Spiegazione:* Art. 124 TUEL.
5. Il valore massimo dei regali di modico valore secondo il codice di comportamento è:
   - 50 euro
   - 100 euro
   - **150 euro** ✓
   - 250 euro
   - *Spiegazione:* Art. 4 D.P.R. 62/2013.

#### Esercizi scritti

**Esercizio 1 – Chi fa cosa nel Comune**

Illustra organi e competenze del Comune e il principio di separazione tra indirizzo politico e gestione, con un esempio legato alla polizia locale.

*Schema di correzione:*

- [ ] Art. 114 Cost. e autonomia (art. 3 TUEL).
- [ ] Consiglio (art. 42), Giunta (art. 48), Sindaco (art. 50).
- [ ] Separazione politica-gestione (art. 4 D.Lgs. 165/2001, art. 107 TUEL).
- [ ] Ruolo del Segretario (art. 97) e dei responsabili dei servizi (art. 109).
- [ ] Esempio: il Sindaco impartisce direttive alla polizia locale (L. 65/1986); il dirigente adotta i provvedimenti sanzionatori.
- [ ] Ordinanze: art. 50 vs art. 54.

**Esercizio 2 – Conflitto di interessi**

Durante un controllo commerciale ti accorgi che il titolare del locale è un tuo parente stretto. Come ti comporti? Inquadra la risposta nella normativa su anticorruzione e codice di comportamento.

*Schema di correzione:*

- [ ] Obbligo di astensione (art. 6-bis L. 241/1990, artt. 6–7 D.P.R. 62/2013).
- [ ] Comunicazione al responsabile e sostituzione nel controllo.
- [ ] Principi di imparzialità e buon andamento (art. 97 Cost.).
- [ ] Sistema anticorruzione: L. 190/2012, RPCT, PIAO.
- [ ] Conseguenze della violazione: responsabilità disciplinare ed eventuale penale.

---

### Modulo 8 – Procedimento amministrativo, documentazione, privacy, digitale, appalti

*Livello richiesto: nozioni · Priorità: media · Settimana 8*

Nozioni trasversali. La L. 241/1990 e il D.P.R. 445/2000 tornano spesso: ricordali per articolo.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| L. 241/1990, art. 1 | Principi: economicità, efficacia, imparzialità, pubblicità, trasparenza; divieto di aggravamento. |
| Art. 2 | Obbligo di concludere il procedimento con provvedimento espresso; termine generale di 30 giorni. |
| Art. 3 | Obbligo di motivazione: presupposti di fatto e ragioni giuridiche. |
| Artt. 4–6-bis | Responsabile del procedimento; conflitto di interessi. |
| Artt. 7–10-bis | Comunicazione di avvio, partecipazione, preavviso di rigetto. |
| Artt. 19–20 | SCIA e silenzio assenso. |
| Artt. 21-quinquies, 21-octies, 21-nonies | Revoca; annullabilità (violazione di legge, eccesso di potere, incompetenza); annullamento d'ufficio entro 12 mesi per i provvedimenti autorizzativi o che attribuiscono vantaggi economici. |
| Artt. 22–25 | Accesso ai documenti: interesse diretto, concreto e attuale; esclusioni (art. 24); 30 giorni per rispondere, il silenzio vale rigetto. |
| D.Lgs. 33/2013, art. 5 | Accesso civico semplice e generalizzato. |
| D.P.R. 445/2000 | Documentazione amministrativa: art. 46 dichiarazioni sostitutive di certificazione, art. 47 di atto di notorietà, art. 71 controlli, art. 75 decadenza dai benefici, art. 76 sanzioni penali. |
| Reg. UE 2016/679 (GDPR) | Art. 5 principi; art. 6 basi giuridiche; art. 9 dati particolari; artt. 13–14 informativa; artt. 15–22 diritti; art. 33 violazione dei dati (notifica entro 72 ore); art. 37 RPD obbligatorio per le PA. |
| D.Lgs. 196/2003 (mod. D.Lgs. 101/2018) | Codice privacy nazionale. |
| D.Lgs. 51/2018 | Trattamento dei dati per finalità di prevenzione e accertamento dei reati: riguarda direttamente l'attività di polizia. |
| D.Lgs. 82/2005 (CAD) | Art. 3-bis domicilio digitale; art. 20 documento informatico; art. 24 firma digitale; art. 48 PEC; art. 64 SPID e CIE. |
| D.Lgs. 36/2023 | Codice dei contratti pubblici: principi del risultato, della fiducia e dell'accesso al mercato (artt. 1–3); RUP, responsabile unico del progetto (art. 15); affidamenti sotto soglia (art. 50). Correttivo D.Lgs. 209/2024. ⚠ Verifica le soglie aggiornate. |

#### Concetti chiave

- **Procedimento amministrativo.** Fasi: iniziativa, istruttoria, decisione, integrazione dell'efficacia. Il responsabile del procedimento cura l'istruttoria; il provvedimento va motivato e adottato entro il termine.
- **Partecipazione.** Comunicazione di avvio agli interessati, possibilità di presentare memorie, preavviso di rigetto nei procedimenti a istanza di parte.
- **Vizi dell'atto.** Annullabilità per violazione di legge, eccesso di potere, incompetenza (art. 21-octies). Nullità per mancanza di elementi essenziali, difetto assoluto di attribuzione, violazione del giudicato (art. 21-septies).
- **Accesso.** Documentale (L. 241): serve un interesse qualificato. Civico semplice: dati che dovevano essere pubblicati. Civico generalizzato: chiunque, senza motivazione, con limiti a tutela di interessi pubblici e privati.
- **Autocertificazione.** Il cittadino può dichiarare stati e fatti personali (art. 46) e fatti di cui ha diretta conoscenza (art. 47). La PA controlla (art. 71); chi dichiara il falso decade dai benefici ed è punito penalmente (artt. 75–76). È esattamente il regime della domanda di concorso.
- **Privacy per la polizia.** Il GDPR si applica all'attività amministrativa; il D.Lgs. 51/2018 a quella di prevenzione e accertamento dei reati. Videosorveglianza: finalità, informativa con cartelli, tempi di conservazione limitati.
- **Digitale.** Il documento informatico sottoscritto con firma digitale soddisfa la forma scritta. La PEC equivale alla raccomandata con ricevuta di ritorno. Accesso ai servizi con SPID e CIE.

#### Procedura operativa

1. Avvio del procedimento d'ufficio o su istanza; comunicazione di avvio.
2. Istruttoria a cura del responsabile; acquisizione di pareri e documenti.
3. Preavviso di rigetto se l'istanza non può essere accolta.
4. Provvedimento motivato entro il termine; comunicazione all'interessato.
5. Per l'accesso agli atti: verifica dell'interesse, notifica ai controinteressati, risposta entro 30 giorni.

#### Errori da evitare

- Confondere accesso documentale e accesso civico generalizzato.
- Indicare 18 mesi per l'annullamento d'ufficio (dal 2021 sono 12).
- Dimenticare il D.Lgs. 51/2018 quando si parla di privacy nell'attività di polizia.
- Usare la vecchia terminologia del RUP: nel D.Lgs. 36/2023 è il responsabile unico del progetto.

#### Flashcard

| Domanda | Risposta |
|---|---|
| Termine generale di conclusione del procedimento? | 30 giorni (art. 2 L. 241/1990). |
| Cosa deve contenere la motivazione? | Presupposti di fatto e ragioni giuridiche (art. 3). |
| Termine per rispondere a una richiesta di accesso documentale? | 30 giorni; il silenzio vale rigetto (art. 25). |
| Termine per l'annullamento d'ufficio? | 12 mesi per i provvedimenti autorizzativi o che attribuiscono vantaggi economici (art. 21-nonies). |
| Notifica di una violazione di dati al Garante? | Entro 72 ore (art. 33 GDPR). |
| Quale norma regola la privacy nelle indagini di polizia? | D.Lgs. 51/2018. |
| Dichiarazione sostitutiva di certificazione? | Art. 46 D.P.R. 445/2000. |
| Cosa significa RUP nel nuovo codice appalti? | Responsabile unico del progetto (art. 15 D.Lgs. 36/2023). |

#### Quiz

1. Il termine generale per concludere un procedimento è di:
   - 15 giorni
   - **30 giorni** ✓
   - 60 giorni
   - 90 giorni
   - *Spiegazione:* Art. 2 L. 241/1990.
2. Il silenzio della PA su una richiesta di accesso documentale vale:
   - Accoglimento
   - **Rigetto** ✓
   - Sospensione
   - Nulla
   - *Spiegazione:* Art. 25 L. 241/1990.
3. L'annullamento d'ufficio di un'autorizzazione è possibile entro:
   - 6 mesi
   - **12 mesi** ✓
   - 18 mesi
   - 5 anni
   - *Spiegazione:* Art. 21-nonies L. 241/1990.
4. La notifica di una violazione di dati personali al Garante va fatta entro:
   - 24 ore
   - 48 ore
   - **72 ore** ✓
   - 7 giorni
   - *Spiegazione:* Art. 33 GDPR.
5. Chi dichiara il falso in un'autocertificazione:
   - Non rischia nulla
   - **Decade dai benefici ed è punibile penalmente** ✓
   - Paga solo una sanzione amministrativa
   - Deve rifare la domanda
   - *Spiegazione:* Artt. 75–76 D.P.R. 445/2000.
6. La PEC ha valore equivalente a:
   - Una email ordinaria
   - **Una raccomandata con ricevuta di ritorno** ✓
   - Una lettera semplice
   - Una notifica a mano
   - *Spiegazione:* Art. 48 CAD.

#### Esercizi scritti

**Esercizio 1 – Accesso agli atti di un incidente**

Il coinvolto in un incidente rilevato dalla polizia locale chiede copia del rapporto e dei rilievi. Indica quale tipo di accesso esercita, come si svolge il procedimento e quali limiti ci sono.

*Schema di correzione:*

- [ ] Accesso documentale (artt. 22 ss. L. 241/1990): interesse diretto, concreto e attuale.
- [ ] Distinzione con l'accesso civico generalizzato (art. 5 D.Lgs. 33/2013).
- [ ] Controinteressati: comunicazione e possibilità di opposizione.
- [ ] Limiti: art. 24 L. 241/1990; atti coperti dal segreto istruttorio se c'è un procedimento penale.
- [ ] Tutela dei dati personali (GDPR, D.Lgs. 51/2018).
- [ ] Termine di 30 giorni, motivazione del diniego, tutela (TAR, difensore civico).

**Esercizio 2 – Procedimento e motivazione**

Spiega le fasi del procedimento amministrativo e perché la motivazione è essenziale, con un esempio legato a un provvedimento della polizia locale.

*Schema di correzione:*

- [ ] Principi (art. 1) e obbligo di concludere (art. 2).
- [ ] Responsabile del procedimento (artt. 4–6).
- [ ] Partecipazione: avvio, memorie, preavviso di rigetto (artt. 7–10-bis).
- [ ] Motivazione (art. 3): presupposti di fatto e ragioni giuridiche.
- [ ] Vizi dell'atto e tutela (artt. 21-octies, 21-nonies).
- [ ] Esempio: provvedimento di rimozione di un'occupazione abusiva di suolo pubblico.

---

### Modulo 9 – Costituzione, diritto civile e amministrativo, protezione civile, sicurezza sul lavoro

*Livello richiesto: nozioni / sufficiente · Priorità: bassa · Settimana 8*

Basi generali che rendono più solide le risposte sulle altre materie. Concentrati sui diritti di libertà (artt. 13–17 Cost.) che entrano in gioco in ogni controllo.

#### Norme di riferimento

| Riferimento | Contenuto |
|---|---|
| Artt. 2–3 Cost. | Diritti inviolabili, uguaglianza formale e sostanziale. |
| Art. 13 Cost. | Libertà personale: restrizioni solo con atto motivato dell'autorità giudiziaria; in casi eccezionali di necessità e urgenza l'autorità di PS adotta provvedimenti provvisori, comunicati entro 48 ore all'AG che li convalida entro le successive 48 ore. |
| Artt. 14–17 Cost. | Domicilio, corrispondenza, circolazione e soggiorno, riunione (preavviso solo per i luoghi pubblici). |
| Artt. 24–28 Cost. | Diritto di difesa, legalità penale, responsabilità penale personale, responsabilità dei funzionari pubblici. |
| Artt. 32, 41, 54, 97, 98 Cost. | Salute e trattamenti obbligatori; iniziativa economica; dovere di fedeltà e funzioni pubbliche con disciplina e onore; buon andamento e imparzialità; impiegati al servizio della Nazione. |
| Artt. 113, 117, 118 Cost. | Tutela giurisdizionale contro gli atti della PA; riparto delle competenze; sussidiarietà. |
| Codice civile | Art. 1 capacità giuridica; art. 2 maggiore età e capacità d'agire; art. 43 domicilio e residenza; art. 832 proprietà; art. 1140 possesso; art. 2043 fatto illecito; art. 2054 circolazione dei veicoli. |
| D.Lgs. 104/2010 (c.p.a.) | Ricorso al TAR entro 60 giorni; appello al Consiglio di Stato. Ricorso straordinario al Presidente della Repubblica entro 120 giorni. |
| D.Lgs. 1/2018 | Codice della protezione civile: art. 2 attività, art. 3 autorità, art. 6 Sindaco autorità territoriale, art. 7 tipologia degli eventi, art. 12 funzioni dei Comuni (piano comunale), art. 18 pianificazione, art. 24 stato di emergenza. |
| D.Lgs. 81/2008 | Sicurezza sul lavoro: art. 2 definizioni (nella PA il datore di lavoro è il dirigente con poteri di gestione), art. 17 obblighi non delegabili (valutazione dei rischi e DVR, nomina RSPP), artt. 18–20 obblighi di datore, preposto e lavoratori, artt. 36–37 informazione e formazione, art. 41 sorveglianza sanitaria, artt. 74 ss. DPI. |

#### Concetti chiave

- **Libertà personale e controlli.** Ogni restrizione (accompagnamento, perquisizione, arresto) deve avere una base legale e rispettare le garanzie dell'art. 13. Nei controlli di polizia la legge ordinaria disciplina i casi (codice di procedura penale).
- **Riserva di legge.** Alcune materie possono essere regolate solo dalla legge (es. limitazioni della libertà, prestazioni personali, trattamenti sanitari obbligatori). Le ordinanze non possono derogarvi in modo permanente.
- **Atto amministrativo.** Caratteri: imperatività, esecutorietà, inoppugnabilità dopo il decorso dei termini. Tutela: ricorsi amministrativi (gerarchico, straordinario) e giurisdizionali (TAR).
- **Responsabilità civile.** Chi causa un danno ingiusto con dolo o colpa deve risarcirlo (art. 2043). Nella circolazione dei veicoli il conducente è responsabile salvo prova di aver fatto tutto il possibile; il proprietario risponde in solido (art. 2054).
- **Protezione civile.** Il Sindaco è autorità territoriale di protezione civile (art. 6 D.Lgs. 1/2018). Il Comune predispone il piano di protezione civile e attiva il Centro operativo comunale. Eventi di tipo a (locali), b (provinciali/regionali), c (nazionali).
- **Sicurezza sul lavoro.** Il datore di lavoro valuta i rischi e redige il DVR; nomina RSPP e medico competente; forma i lavoratori. I lavoratori devono usare i DPI e segnalare i pericoli. Per la polizia locale: rischi stradali, aggressioni, uso di armi.

#### Procedura operativa

1. In ogni risposta che limita un diritto, cita la norma costituzionale e la legge che lo consente.
2. Per un'emergenza: Sindaco come autorità di protezione civile, attivazione del piano comunale, ordinanze contingibili e urgenti.
3. Per un infortunio di un collega in servizio: soccorso, comunicazione, registrazione, valutazione dei rischi.

#### Errori da evitare

- Citare la libertà di circolazione senza indicare i limiti per motivi di sanità e sicurezza (art. 16).
- Dire che per una riunione in luogo aperto al pubblico serve il preavviso: serve solo per i luoghi pubblici (art. 17).
- Confondere i termini del TAR (60 giorni) con quelli del ricorso straordinario (120 giorni).

#### Flashcard

| Domanda | Risposta |
|---|---|
| Entro quanto i provvedimenti provvisori di PS sulla libertà personale vanno comunicati all'AG? | Entro 48 ore; convalida entro le successive 48 ore (art. 13 Cost.). |
| Per quale riunione serve il preavviso? | Solo per quelle in luogo pubblico (art. 17 Cost.). |
| Termine per il ricorso al TAR? | 60 giorni (c.p.a.). |
| Chi è autorità territoriale di protezione civile? | Il Sindaco (art. 6 D.Lgs. 1/2018). |
| Obblighi non delegabili del datore di lavoro? | Valutazione dei rischi con DVR e nomina dell'RSPP (art. 17 D.Lgs. 81/2008). |
| Quale articolo del codice civile riguarda la responsabilità per la circolazione dei veicoli? | Art. 2054 c.c. |

#### Quiz

1. I provvedimenti provvisori dell'autorità di PS che limitano la libertà personale vanno comunicati all'AG entro:
   - 24 ore
   - **48 ore** ✓
   - 72 ore
   - 5 giorni
   - *Spiegazione:* Art. 13 Cost.
2. Il preavviso alle autorità è obbligatorio per le riunioni:
   - In luogo privato
   - In luogo aperto al pubblico
   - **In luogo pubblico** ✓
   - Sempre
   - *Spiegazione:* Art. 17 Cost.
3. Il ricorso al TAR va proposto entro:
   - 30 giorni
   - **60 giorni** ✓
   - 90 giorni
   - 120 giorni
   - *Spiegazione:* Codice del processo amministrativo.
4. Il Sindaco, in materia di protezione civile, è:
   - Organo consultivo
   - **Autorità territoriale di protezione civile** ✓
   - Subordinato al Questore
   - Senza competenze
   - *Spiegazione:* Art. 6 D.Lgs. 1/2018.
5. La redazione del DVR è un obbligo:
   - Delegabile all'RSPP
   - **Non delegabile del datore di lavoro** ✓
   - Del medico competente
   - Dei lavoratori
   - *Spiegazione:* Art. 17 D.Lgs. 81/2008.

#### Esercizi scritti

**Esercizio 1 – Ordinanza in emergenza**

Dopo un'alluvione il Sindaco vuole vietare l'accesso a una zona del Comune. Spiega fondamento, limiti costituzionali e ruolo della polizia locale.

*Schema di correzione:*

- [ ] Art. 16 Cost.: limiti alla circolazione per motivi di sanità o sicurezza stabiliti in via generale dalla legge.
- [ ] Fondamento: D.Lgs. 1/2018 (art. 6, art. 12) e ordinanze contingibili e urgenti (artt. 50 e 54 TUEL).
- [ ] Presupposti: urgenza, pericolo concreto, temporaneità, proporzionalità, motivazione.
- [ ] Attivazione del piano comunale e del Centro operativo comunale.
- [ ] Ruolo della polizia locale: presidio dei varchi, informazione alla popolazione, controllo del rispetto dell'ordinanza, sanzioni.
- [ ] Tutela giurisdizionale (art. 113 Cost., TAR).

**Esercizio 2 – Libertà personale nei controlli**

Spiega quali garanzie costituzionali tutelano la persona sottoposta a un controllo di polizia e in quali casi l'agente può limitarne la libertà.

*Schema di correzione:*

- [ ] Art. 13 Cost.: inviolabilità, riserva di legge e di giurisdizione, provvedimenti provvisori della PS (48+48 ore).
- [ ] Art. 14 Cost.: domicilio e perquisizioni.
- [ ] Casi previsti dal c.p.p.: identificazione e accompagnamento (art. 349), perquisizione in flagranza (art. 352), arresto (artt. 380–381).
- [ ] Rifiuto di fornire le generalità (art. 651 c.p.).
- [ ] Principi di proporzionalità e rispetto della dignità; responsabilità dei funzionari (art. 28 Cost.).

---

## 6. Quiz di logica (preselezione)

1. Completa la serie: 2, 6, 12, 20, 30, …
   - 36
   - 40
   - **42** ✓
   - 48
   - *Spiegazione:* Le differenze sono 4, 6, 8, 10, 12: 30 + 12 = 42.
2. Tutti gli agenti sono dipendenti. Alcuni dipendenti sono part-time. Quindi:
   - Tutti gli agenti sono part-time
   - Alcuni agenti sono sicuramente part-time
   - **Non si può concludere che alcuni agenti siano part-time** ✓
   - Nessun agente è part-time
   - *Spiegazione:* Dalle premesse non segue nulla sul rapporto tra agenti e part-time.
3. Un'auto percorre 90 km in 1 ora e 30 minuti. Velocità media?
   - 45 km/h
   - **60 km/h** ✓
   - 75 km/h
   - 90 km/h
   - *Spiegazione:* 90 km / 1,5 h = 60 km/h.
4. Qual è il contrario di «lecito»?
   - Legittimo
   - **Illecito** ✓
   - Licenziato
   - Lieto
   - *Spiegazione:* Il contrario è illecito.
5. Se il prezzo di un bene aumenta del 20% e poi diminuisce del 20%, rispetto al prezzo iniziale è:
   - Uguale
   - Più alto del 4%
   - **Più basso del 4%** ✓
   - Più basso del 20%
   - *Spiegazione:* 100 × 1,2 × 0,8 = 96.
6. «Tutti i verbali sono firmati.» Quale frase lo nega?
   - Nessun verbale è firmato
   - **Almeno un verbale non è firmato** ✓
   - Tutti i verbali non sono firmati
   - Alcuni verbali sono firmati
   - *Spiegazione:* La negazione di «tutti sono» è «almeno uno non è».
7. In un turno ci sono 12 agenti. I 2/3 sono in strada, la metà del resto in ufficio. Quanti sono in ufficio?
   - **2** ✓
   - 3
   - 4
   - 6
   - *Spiegazione:* In strada 8, restano 4; la metà sono 2.
8. Completa: 3, 9, 27, 81, …
   - 162
   - **243** ✓
   - 324
   - 108
   - *Spiegazione:* Si moltiplica per 3.

---

## 7. Prova orale

- Colloquio sulle materie dello scritto e sulle competenze attitudinali (gestione stress e conflitti, lavoro in squadra, comunicazione, problem solving, consapevolezza del ruolo).
- Inglese e informatica: solo idoneità, ma il mancato superamento esclude dal concorso.
- Informatica attesa: email e PEC, firma digitale, SPID e CIE, documenti condivisi, foglio di calcolo di base, sicurezza informatica (password, phishing), banche dati della polizia locale.

### Frasi utili in inglese

| Inglese | Italiano |
|---|---|
| Good morning, police. Can I see your driving licence, please? | Buongiorno, polizia. Posso vedere la sua patente, per favore? |
| Please show me your vehicle registration and insurance. | Mi mostri la carta di circolazione e l'assicurazione. |
| You are not allowed to park here. | Qui non è consentita la sosta. |
| You were driving over the speed limit. | Stava guidando oltre il limite di velocità. |
| Is anybody injured? An ambulance is on its way. | C'è qualcuno ferito? L'ambulanza sta arrivando. |
| Please stay calm and wait here. | Per favore stia calmo e aspetti qui. |
| I have to issue you a fine. | Devo farle una multa. |
| You can pay within five days with a discount. | Può pagare entro cinque giorni con uno sconto. |
| Do you have an ID card or a passport? | Ha una carta d'identità o un passaporto? |
| Can you tell me what happened? | Può dirmi cosa è successo? |
| The road is closed. Please follow the detour. | La strada è chiusa. Segua la deviazione. |
| Where are you staying in Poggibonsi? | Dove alloggia a Poggibonsi? |

**Modello di presentazione:** *My name is … I live in … I studied … and I work as … I want to work in the local police because I like working with people and I want to help my community. I am a team player and I can stay calm in stressful situations.*

---

## 8. Correzioni già fatte rispetto alla prima bozza

- Ricorso al Prefetto (CdS): 60 giorni (non 30); opposizione all'ordinanza-ingiunzione: 30 giorni.
- Abuso d'ufficio (art. 323 c.p.) abrogato dalla L. 114/2024.
- Distinzione corretta tra ordinanze ex art. 50 e art. 54 TUEL; ordinanza di demolizione di competenza del dirigente.
- Aggiunte leggi toscane (L.R. 65/2014, 62/2018, 86/2016, 12/2006), L. 177/2024, Salva-casa, D.L. 14/2017, D.Lgs. 51/2018, riforma Cartabia, D.Lgs. 36/2023.

## 9. Punti da verificare con priorità (⚠)

1. L. 177/2024 (riforma CdS): stato dei decreti attuativi per i monopattini; testo vigente e giurisprudenza sull'art. 187.
2. D.L. 116/2025: modifiche alle sanzioni per abbandono di rifiuti (art. 255 D.Lgs. 152/2006), natura penale o amministrativa.
3. D.L. 69/2024 Salva-casa: artt. 34-bis e 36-bis DPR 380/2001.
4. L.R. Toscana 65/2014: articoli del titolo su vigilanza e sanzioni edilizie.
5. L.R. Toscana 62/2018 e 86/2016: testo vigente, sanzioni.
6. L.R. Toscana 12/2006: testo vigente e regolamento attuativo.
7. Riforma Cartabia: procedibilità a querela (furto, lesioni, art. 590-bis c.p.).
8. D.L. 48/2025 (L. 80/2025): norme di interesse per la polizia locale.
9. D.Lgs. 36/2023 e correttivo D.Lgs. 209/2024: soglie aggiornate degli affidamenti diretti.
10. Eventuale nuovo CCNL Funzioni Locali 2022–2024 e riforma nazionale della polizia locale.
11. Addizionale comunale IRPEF di Poggibonsi (per il calcolo del netto).
