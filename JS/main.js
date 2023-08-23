// richiamo variabili
const playButton = document.getElementById("play-game");
const cellContainer = document.getElementById("cell-group");
const difficulty = document.getElementById("difficulty");

// VARIABILI GLOBALI DI GIOCO
let cellsTotal, bombList, score, cellsNoBombs, isGameOver, msg;

// button start
playButton.addEventListener("click", function () {
  // # selezione della difficoltà
  cellsTotal = parseInt(difficulty.value);
  if (isNaN(cellsTotal)) {
    alert("seleziona una difficoltà");
  } else {
    msg = "";
    // # inizializzazione isGameover
    isGameOver = false;
    // # creazione della lista bombe
    bombList = generateBombList(1, cellsTotal, 16);
    // # inizializzazione score
    score = 0;
    // # quantità celle non bombe
    cellsNoBombs = cellsTotal - bombList.length;
    // # generatore della griglia
    gridGenerate(cellContainer);
  }
});

/**
 * Funzione che crea tutte le celle e le resetta.
 * @param {int} cellsTotal quantità di celle da creare
 * @param {tagContainer} cellsContainer DOC Contenitore per i cuby
 */
function gridGenerate(cellContainer) {
  cellContainer.innerHTML = "";
  const whiteList = generateArray(1, cellsTotal, 1);
  for (let i = 1; i <= cellsTotal; i++) {
    const randomIndex = randomNumber(0, whiteList.length - 1);
    const cellValue = whiteList[randomIndex];
    cellCreation(cellValue);
    whiteList.splice(randomIndex, 1);
  }
}
/**
 * Funzione che crea una singola cella e la formatta.
 * @param {int} cellsTotal serve per fornire la grandezza del cubo
 * @param {int} i serve per dare un index ad ogni cella
 */
function cellCreation(cellValue) {
  const cell = document.createElement("li");
  cell.setAttribute("data-index", cellValue);
  cell.classList.add("cell");
  cell.classList.add("lg-" + cellsTotal);

  // click sulla singola cella e CONTROLLO se è una BOMBA O NO
  cell.addEventListener("click", function () {
    if (
      this.classList.contains("cell-active") ||
      score >= cellsNoBombs ||
      isGameOver
    )
      return;

    // prende l'attributo "data-index" della cella
    const index = parseInt(this.getAttribute("data-index"));
    // * se è una bomba control
    if (bombList.includes(index)) {
      msg = "perso";
      isGameOver = true;
      this.classList.add("cell-bomb");
      endGame(msg);
    } else {
      // * se non è una bomba control/incremento dello score
      this.classList.add("cell-active");
      score++;
    }
    if (score >= cellsNoBombs) {
      msg = "vinto!";
      endGame(msg);
    }
  });
  //   cell.innerText = randomNumber;
  cellContainer.appendChild(cell);
}

/**
 * Funzione che crea la WhiteList
 * @param {int} from start ciclo
 * @param {int} to fine ciclo
 * @param {int} step incremento
 * @returns la WhiteList
 */
function generateArray(from, to, step) {
  const whiteList = [];
  for (let i = from; i <= to; i += step) {
    whiteList.push(i);
  }
  return whiteList;
}
/**
 * Funzione per creare un numero random
 * @param {int} min
 * @param {int} max
 * @returns numero random
 */
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// FUNZIONE CHE CREA 16 VOLTE LE MOBME
function generateBombList(min, max, grandezza) {
  const bombList = [];
  while (bombList.length < grandezza) {
    const uniqueNumber = randomNumber(min, max);
    if (!bombList.includes(uniqueNumber)) {
      bombList.push(uniqueNumber);
    }
  }
  return bombList;
}

// FUNZIONE ENDGAME
const endGame = (msg) =>
  alert(
    `hai ${msg}
score: ` + score
  );
