// richiamo variabili
const playButton = document.getElementById("play-game");
const cellContainer = document.getElementById("cell-group");
const difficulty = document.getElementById("difficulty");

// button start
playButton.addEventListener("click", function () {
  let cellsTotal = parseInt(difficulty.value);

  gridGenerate(cellsTotal, cellContainer);
});

/**
 * Funzione che crea tutte le celle e le resetta.
 * @param {int} cellsTotal quantità di celle da creare
 * @param {tagContainer} cellsContainer DOC Contenitore per i cuby
 */
function gridGenerate(cellsTotal, cellContainer) {
  cellContainer.innerHTML = "";
  const whiteList = generateArray(1, cellsTotal, 1);
  for (let i = 1; i <= cellsTotal; i++) {
    const randomIndex = randomNumber(0, whiteList.length - 1);
    const cellValue = whiteList[randomIndex];
    cellCreation(cellsTotal, cellValue);
    whiteList.splice(randomIndex, 1);
    console.log(whiteList + " poi random " + randomIndex);
  }
}
/**
 * Funzione che crea una singola cella e la formatta.
 * @param {int} cellsTotal serve per fornire la grandezza del cubo
 * @param {int} i serve per dare un index ad ogni cella
 */
function cellCreation(cellsTotal, cellValue) {
  const cell = document.createElement("li");
  cell.setAttribute("data-index", cellValue);
  cell.classList.add("cell");
  cell.classList.add("lg-" + cellsTotal);
  cell.addEventListener("click", function () {
    if (cell.innerText == "") {
      const index = parseInt(this.getAttribute("data-index"));
      this.innerText = index;
      this.classList.toggle("cell-active");
      console.log(this.innerHTML);
    } else {
      this.innerText = "";
      this.classList.toggle("cell-active");
    }
  });
  //   cell.innerText = randomNumber;
  cellContainer.appendChild(cell);
}

function generateArray(from, to, step) {
  const whiteList = [];
  for (let i = from; i <= to; i += step) {
    whiteList.push(i);
  }
  return whiteList;
}

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
