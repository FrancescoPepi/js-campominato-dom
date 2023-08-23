// richiamo variabili
const playButton = document.getElementById("play-game");
const cellContainer = document.getElementById("cell-group");
const difficulty = document.getElementById("difficulty");

// button start
playButton.addEventListener("click", function () {
  // # selezione della difficoltà
  let cellsTotal = parseInt(difficulty.value);
  // # creazione della lista bombe
  const bombList = generateBombList(1, cellsTotal, 16);
  console.log(bombList);
  // # generatore della griglia
  gridGenerate(cellsTotal, cellContainer, bombList);
});

/**
 * Funzione che crea tutte le celle e le resetta.
 * @param {int} cellsTotal quantità di celle da creare
 * @param {tagContainer} cellsContainer DOC Contenitore per i cuby
 */
function gridGenerate(cellsTotal, cellContainer, bombList) {
  cellContainer.innerHTML = "";
  const whiteList = generateArray(1, cellsTotal, 1);
  for (let i = 1; i <= cellsTotal; i++) {
    const randomIndex = randomNumber(0, whiteList.length - 1);
    const cellValue = whiteList[randomIndex];
    cellCreation(cellsTotal, cellValue, bombList);
    whiteList.splice(randomIndex, 1);
  }
}
/**
 * Funzione che crea una singola cella e la formatta.
 * @param {int} cellsTotal serve per fornire la grandezza del cubo
 * @param {int} i serve per dare un index ad ogni cella
 */
function cellCreation(cellsTotal, cellValue, bombList) {
  const whiteList2 = [];
  const cell = document.createElement("li");
  cell.setAttribute("data-index", cellValue);
  cell.classList.add("cell");
  cell.classList.add("lg-" + cellsTotal);
  // cell.addEventListener("click", function () {
  //   if (cell.innerText == "") {
  //     const index = parseInt(this.getAttribute("data-index"));
  //     this.innerText = index;
  //     this.classList.toggle("cell-active");
  //     console.log(this.innerHTML);
  //   } else {
  //     this.innerText = "";
  //     this.classList.toggle("cell-active");
  //   }
  // });

  // CONTROLLO BOMBA O NO
  cell.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"));
    const whiteList2 = [];

    if (bombList.includes(index)) {
      // this.innerText = index;
      this.classList.add("cell-bomb");
      console.log(index + "è lui");
    } else {
      // this.innerText = "";

      this.classList.add("cell-active");
      console.log(index + "non è lui");
      whiteList2.push(index);
    }
    console.log(whiteList2);
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
function generateBombList(min, max, qty) {
  const bombList = [];
  while (bombList.length < qty) {
    const uniqueNumber = randomNumber(min, max);
    if (!bombList.includes(uniqueNumber)) {
      bombList.push(uniqueNumber);
    }
  }
  return bombList;
}
