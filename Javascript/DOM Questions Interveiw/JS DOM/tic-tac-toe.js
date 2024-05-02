let playerNumber = 1;
let playerOneMarkedCells = [];
let playerTwoMarkedCells = [];
let gameOver = false;

function cellClicked(i, j) {
  if (gameOver) return;

  let targetCell = `.col-${i}-${j}`;
  let cell = document.querySelector(targetCell);
  if (
    !cell.classList.contains(`cellMarkedForPlayer${playerNumber === 1 ? 2 : 1}`)
  )
    cell.classList.add(`cellMarkedForPlayer${playerNumber}`);

  if (playerNumber === 1) {
    checkIfPlayerWon(i, j, playerOneMarkedCells, 1);
  } else {
    checkIfPlayerWon(i, j, playerTwoMarkedCells, 2);
  }

  playerNumber = playerNumber === 1 ? 2 : 1;
}

function checkIfPlayerWon(i, j, playerMarkedCells, playerNumber) {
  addClickedCellToPlayer(i, j, playerMarkedCells);

  if (playerMarkedCells.length >= 3) {
    let rowMap = new Map();
    let colMap = new Map();
    let mainDiagonalMarks = 0;
    let subDiagonalMarks = 0;

    for (let i = 0; i < playerMarkedCells.length; i++) {
      if (rowMap.has(playerMarkedCells[i][0])) {
        rowMap.set(
          playerMarkedCells[i][0],
          rowMap.get(playerMarkedCells[i][0]) + 1
        );
      } else {
        rowMap.set(playerMarkedCells[i][0], 1);
      }

      if (colMap.has(playerMarkedCells[i][1])) {
        colMap.set(
          playerMarkedCells[i][1],
          colMap.get(playerMarkedCells[i][1]) + 1
        );
      } else {
        colMap.set(playerMarkedCells[i][1], 1);
      }
      if (playerMarkedCells[i][0] === playerMarkedCells[i][1]) {
        mainDiagonalMarks++;
      }
      if (playerMarkedCells[i][0] + playerMarkedCells[i][1] === 2) {
        subDiagonalMarks++;
      }
    }

    let isRowCaptured = false;
    for (let [Key, val] of rowMap) {
      if (val === 3) isRowCaptured = true;
    }

    let isColCaptured = false;
    for (let [Key, val] of colMap) {
      if (val === 3) isColCaptured = true;
    }
    if (
      isRowCaptured ||
      isColCaptured ||
      mainDiagonalMarks === 3 ||
      subDiagonalMarks === 3
    ) {
      document.querySelector(
        `#winning-player`
      ).textContent = `Player ${playerNumber} won !`;

      gameOver = true;
    }
  }
}

function addClickedCellToPlayer(i, j, playerMarkedCells) {
  let isCellMarkedAlready = false;
  playerMarkedCells.forEach((item) => {
    if (item[0] === i && item[1] === j) {
      isCellMarkedAlready = true;
    }
  });
  if (!isCellMarkedAlready) playerMarkedCells.push([i, j]);
}

function startOver() {
  reInitialiseAllStartingVars();
  unMarkAllCells();
  document.querySelector(`#winning-player`).textContent = ``;
}

function reInitialiseAllStartingVars() {
  playerNumber = 1;
  playerOneMarkedCells = [];
  playerTwoMarkedCells = [];
  gameOver = false;
}

function unMarkAllCells() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let targetCell = `.col-${i}-${j}`;
      let cell = document.querySelector(targetCell);
      cell.classList.remove(`cellMarkedForPlayer${1}`);
      cell.classList.remove(`cellMarkedForPlayer${2}`);
    }
  }
}
