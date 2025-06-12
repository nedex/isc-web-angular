# ISC Web Angular

## Setup senza devcontainer

È consigliabile utilizzare `NVM` per la versione specifica di `node` inclusa in `.nvmrc`.

Installare i moduli NPM utilizzando:

```bash
npm ci
```

Installare il CLI di Angular:

```bash
npm install -g @angular/cli
```

## Setup libreria ISC

La cartella `libs/isc-shared-angular` contiene il repository dei componenti condivisi. Se è vuota, lanciare il comando:

```bash
git submodule update --init --recursive
```

Se non si intende effettuare modifiche alla libreria, basterà eseguire il seguente comando una sola volta dopo il fetch:

```bash
ng build isc-shared-angular
```

altrimenti utilizzare il seguente comando in una shell separata:

```bash
ng build isc-shared-angular --watch
```

## Sviluppo

Per lanciare il server web di sviluppo utilizzare il seguente comando

```bash
npm start
```

Il server sarà disponibile all'indirizzo `http://localhost:4200/`.

## Build

Per creare una build, utilizzare il seguente comando:

```bash
npm run build
```

**Nota:** verrà modificato il file `version.ts`, si prega di non committarlo.

La build di produzione viene invece avviata con:

```bash
npm run build-isc
```

## Librerie utilizzate

Il progetto è configurato con [Prettier](https://prettier.io/) ed [EditorConfig](https://editorconfig.org/) per la formattazione del codice.

### Angular Material e Material Symbols

Per i componenti base e le icone.

**Nota:** per le icone includiamo il font `sharp` con weight `400` e fill `attivo`.

[Angular Material 19](https://v19.material.angular.dev/) - [Material Symbols](https://fonts.google.com/icons)

### Bootstrap 5.3

Viene utilizzato per il layout.

**Nota:** per questioni di dimensione, nell'applicazione viene incluso solo il file `bootstrap-grid.css`, per cui alcune funzioni potrebbero non essere disponibili.

[Grid](https://getbootstrap.com/docs/5.3/layout/css-grid/) - [Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/) - [Flex](https://getbootstrap.com/docs/5.3/utilities/flex/)
