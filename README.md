# INTESTAZIONE

_Griglia Campo Minato_

## TRACCIA

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.  
Ogni cella ha un numero progressivo, da 1 a 100.  
Ci saranno quindi 10 caselle per ognuna delle 10 righe.  
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.  
In seguito l'utente clicca su una cella:
**se** il numero è presente nella lista dei numeri generati

- abbiamo calpestato una bomba ;
- la cella si colora di rosso e la partita termina.

Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.  
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).  
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

## BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## ISTRUZIONI

### **PRIMA PARTE**

- Prendere il bottone ;
- Al click, creare una griglia con 100 celle ;
  **PER OGNI** cella creata assegnare un numero progressivo che va da 1 a 100 ;
  **FUNZIONE** che **PER OGNI** click sulla cella
  - Prenda il numero della cella ;
  - Colora la cella di azzurro ;
  - spampi un messaggio nel log con il numero della cella ;

### **SECONDA PARTE**

- Creare un array _maxCell_ con all'interno i numeri da disporre nelle varie celle in modo casuale ;
- Creare un array _bombList_ con all'interno 16 numeri generati casualmente che vadano dall'1 al _n max_ (dipende il livello selezionato) ;
- Creare Score ;

Al **click** della cella estrapolare l'index assegnato e controllare se fa parte dell'array _bombList_

- +1 Score

**SE** fa parte:

- -1 Score
- Colorare la cella di rosso ;
- Stampare hai perso e lo score ;
- Fermare il gioco ;

**ALTRIMENTI SE** lo Score == (_maxCell_._legth_ - _bombList_._legth_):

- Colorare la cella di azzurro ;
- Stampare hai vinto e lo score ;
- Fermare il gioco ;

**ALTRIMENTI**

- Colorare la cella di azzurro ;
