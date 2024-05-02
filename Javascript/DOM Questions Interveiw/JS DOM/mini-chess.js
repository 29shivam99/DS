let diagonalCells = [];

createChessBoard();

function createChessBoard() {
  let board = document.getElementById("chess-board");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement("div");
      if ((row + col) % 2 !== 0) {
        cell.classList.add("black");
      }
      cell.addEventListener("click", cellClicked);
      cell.classList.add("cell");
      cell.classList.add(`cell-${row}-${col}`);
      cell.myParam = [row, col];
      board.appendChild(cell);
      console.log(cell);
    }
  }
}

function cellClicked(event) {
  if (diagonalCells.length > 0) {
    markAllDiagonalCells(diagonalCells);
    diagonalCells = [];
  }
  let [startX, startY] = event.target.myParam;
  diagonalCells.push([startX, startY]);
  let i = startX - 1,
    j = startY - 1;

  while (i >= 0 && j >= 0) {
    diagonalCells.push([i, j]);
    i--;
    j--;
  }

  (i = startX + 1), (j = startY + 1);

  while (i < 8 && j < 8) {
    diagonalCells.push([i, j]);
    i++;
    j++;
  }
  (i = startX - 1), (j = startY + 1);
  while (i >= 0 && j < 8) {
    diagonalCells.push([i, j]);
    i--;
    j++;
  }

  (i = startX + 1), (j = startY - 1);

  while (i < 8 && j >= 0) {
    diagonalCells.push([i, j]);
    i++;
    j--;
  }
  markAllDiagonalCells(diagonalCells, "red");
}

function markAllDiagonalCells(diagonalCells, mark) {
  let cell;
  for (let i = 0; i < diagonalCells.length; i++) {
    cell = document.getElementsByClassName(
      `cell-${diagonalCells[i][0]}-${diagonalCells[i][1]}`
    )[0];
    if (mark === "red") cell.classList.add("red");
    else cell.classList.remove("red");
  }
}
