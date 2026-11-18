# Magazzino Motori e Gomme

App web per due persone: magazzino motori e turbo più magazzino gomme.
Gira su GitHub Pages (gratis), i dati stanno su Firebase (piano gratuito "Spark", non serve la carta di credito).
Si usa da iPhone, Android e computer, e si aggiorna in tempo reale su tutti i telefoni collegati.

Accesso libero: chi ha il link entra senza password.

Tempo totale per la prima configurazione: circa 15–20 minuti, da computer.

\---

## Parte 1 · Firebase (database)

1. Vai su **console.firebase.google.com** ed entra con un account Google.
2. **Crea un progetto** → nome per esempio `magazzino-squadra` → Google Analytics puoi disattivarlo → Crea.
3. **Database**: menu a sinistra *Build → Firestore Database* → **Crea database** → località `eur3 (europe-west)` → **modalità produzione** → Crea.
4. **Regole**: sempre in Firestore, scheda **Regole**. Cancella tutto, incolla il contenuto del file `firestore.rules` → **Pubblica**.
5. **Dati di collegamento**: ⚙ (in alto a sinistra) → *Impostazioni progetto* → in fondo, *Le tue app* → icona **</>** (Web) →
nome `magazzino` → *non* spuntare Firebase Hosting → Registra app.
Compare un blocco `const firebaseConfig = { apiKey: ..., authDomain: ..., ... }`.
Copia i valori dentro il file **`config.js`** al posto di `INCOLLA\_QUI` e salva.

> \*\*Accesso libero.\*\* Non c'è password: chiunque abbia il link può vedere e modificare i dati.
> Il repository GitHub è pubblico, quindi chi lo trova può risalire anche al database.
> Per questo: non diffondere il link oltre chi lavora con te e \*\*scarica un backup ogni tanto\*\* (rotellina ⚙ → Scarica backup).
> Se un giorno vuoi mettere email e password, si può aggiungere senza perdere i dati.

## Parte 2 · GitHub Pages (l'indirizzo web dell'app)

1. Crea un account su **github.com** (se non l'hai già).
2. In alto a destra **+ → New repository** → nome per esempio `magazzino` → **Public** (GitHub Pages gratuito richiede un repository pubblico; il codice è visibile ma i dati no) → Create repository.
3. Nella pagina del repository: **uploading an existing file** → trascina **tutti i file di questa cartella** (anche `config.js` già compilato) → *Commit changes*.
4. **Settings → Pages** → *Source*: **Deploy from a branch** → Branch: `main`, cartella `/ (root)` → Save.
5. Dopo uno o due minuti in cima alla pagina compare l'indirizzo, tipo `https://tuonome.github.io/magazzino/`.

## Parte 3 · Primo avvio e dati attuali

1. Apri l'indirizzo.
2. Tocca la **rotellina ⚙ → Backup → Carica backup** e scegli il file `dati-iniziali.json`:
carica i 3 motori, i 3 turbo, i 17 set di Zasov e i limiti km (motore 5.000 / 10.000, turbo 4.000 / 5.000).
Da iPhone il file va prima messo in *File* (iCloud Drive), oppure fallo da computer.

## Parte 4 · Sull'iPhone come un'app

Safari → apri l'indirizzo → tasto **Condividi** → **Aggiungi alla schermata Home**.
Comparirà l'icona con il logo della squadra e si aprirà a tutto schermo.
Per il collega basta mandargli il link e fare lo stesso sul suo telefono.

Senza rete l'app si apre lo stesso con gli ultimi dati visti; le modifiche fatte offline partono appena torna la connessione.

\---

## Uso quotidiano

* **Backup**: ogni tanto *rotellina ⚙ → Scarica backup* e tieni il file.
* **Lingua**: il pulsante con la sigla (IT) in alto cambia lingua tra italiano, inglese, polacco e lettone, su quel telefono.
* **Aggiungere una persona**: mandale il link.
* **Aggiornare l'app**: carica su GitHub il nuovo `index.html` (Add file → Upload files) sovrascrivendo quello vecchio. I dati non si toccano.

## File

|File|Cosa fa|
|-|-|
|`index.html`|l'app|
|`config.js`|collegamento al tuo progetto Firebase (da compilare)|
|`firestore.rules`|regole del database, accesso libero (da incollare in Firebase)|
|`dati-iniziali.json`|i dati attuali, da caricare al primo accesso|
|`manifest.webmanifest`, `sw.js`, icone|servono per installarla sul telefono e aprirla offline|
|`logo-squadra.png`, `logo-f4.png`|loghi in testata|



