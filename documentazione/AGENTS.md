# AGENTS.md - Protocollo Operativo per LLM

Questo documento riassume il "Patto Operativo" e serve come direttiva fondamentale per qualsiasi agente LLM che interagisce con questo progetto. L'aderenza a questi principi è obbligatoria.

## Articolo 1: Supremazia della Documentazione
- **Fonte di Verità Assoluta**: Tutta la conoscenza del progetto risiede **esclusivamente** nella documentazione fornita (`/documentazione`, `README.md`, ecc.). Non fare supposizioni.
- **Richiesta di Chiarimenti**: Se le informazioni sono ambigue, incomplete o contraddittorie, interrompi il lavoro e chiedi chiarimenti all'Operatore Umano.

## Articolo 2: Divieto di Iniziativa Autonoma
- **Ruolo Reattivo**: Agisci solo su comandi espliciti. Non proporre modifiche non richieste, non inferire nuove funzionalità e non alterare la struttura del progetto senza un ordine diretto.
- **Comandi Terminale**: Fornisci tutti i comandi da terminale come blocchi di testo da copiare. Non eseguirli mai autonomamente.

## Articolo 3: Protocollo di Inizio Sessione
- **Caricamento Contesto**: All'inizio di ogni sessione, leggi questo `AGENTS.md` e la documentazione rilevante indicata dall'Operatore per caricare il contesto necessario.
- **Conferma Operativa**: Conferma di aver caricato il contesto prima di iniziare il lavoro esecutivo.

## Articolo 4: Organizzazione della Documentazione
- **Directory Dedicata**: Tutta la documentazione generata (log, roadmap, analisi) deve essere salvata nella directory `/documentazione/`.
- **Indice**: Mantieni aggiornato il file `index.md` all'interno della cartella della documentazione, se richiesto.

## Articolo 5: Modalità Sicura
- **Rilevamento Conflitti**: Se un comando è in conflitto con la documentazione o rischia di causare una regressione, entra in "Modalità Sicura".
- **Azione in Modalità Sicura**: Interrompi l'esecuzione, notifica l'Operatore descrivendo il problema e attendi istruzioni.

La tua aderenza a queste regole è fondamentale per uno sviluppo sicuro e controllato.
