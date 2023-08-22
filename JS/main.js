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
function gridGenerate(cellsTotal, cellsContainer) {
  cellsContainer.innerHTML = "";
  for (let i = 1; i <= cellsTotal; i++) {
    cellCreation(cellsTotal, i);
  }
}
/**
 * Funzione che crea una singola cella e la formatta.
 * @param {int} cellsTotal serve per fornire la grandezza del cubo
 * @param {int} i serve per dare un index ad ogni cella
 */
function cellCreation(cellsTotal, i) {
  //   const randomNumber = Math.floor(Math.random() * 100);
  const cell = document.createElement("li");
  cell.setAttribute("data-index", i);
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
