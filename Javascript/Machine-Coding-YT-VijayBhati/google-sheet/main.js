let rows = 4,
  columns = 4;

let docContainer = document.querySelector(".doc-container");

let recentSelectedCell;

const cellEvents = [
  { event: "focusin", handler: handleCellFocusin },
  { event: "focusout", handler: handleCellFocusout },
  { event: "dblclick", handler: handleCellDoubleclick },
];

// on disabled input the click event does not register hence I used readonly.
function getColumns(row) {
  let columnString = ``;
  for (let j = 0; j < columns; j++) {
    columnString += `<input
        class="cell-input"
        data-index="${columns * row + (j + 1)}"
        readonly
        tabindex="100"
      />`;
  }

  return columnString;
}

function getSheet() {
  let htmlString = ``;
  for (let i = 0; i < rows; i++) {
    htmlString += `
      <div class="row" 
      tabindex="100">
      ${getColumns(i)}
      </div>
    `;
  }

  return htmlString;
}

function handleCellFocusin(event) {
  let cell = event.target;
  if (cell.dataset.index) {
    recentSelectedCell = cell;
    cell.classList.add("focussed-cell");
  }
}

function handleCellFocusout() {
  let cell = event.target;
  if (cell.dataset.index) {
    cell.classList.remove("focussed-cell", "editable-cell");
    cell.setAttribute("readonly", "true");
  }
}

function handleCellDoubleclick() {
  let cell = event.target;
  if (cell.dataset.index) {
    cell.removeAttribute("readonly");
    cell.classList.add("editable-cell");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const HTMLString = getSheet();
  console.log(HTMLString);
  docContainer.innerHTML = HTMLString;

  cellEvents.forEach(({ event, handler }) => {
    docContainer.addEventListener(event, handler);
  });

  document
    .querySelector(".btn-color-selector")
    .addEventListener("click", function () {
      // equivalent to inline css
      recentSelectedCell.style.backgroundColor = "purple";
    });

  // so that if user clicks outside of our any cells then recentSelectedCell must be null
  document.querySelector("body").addEventListener("click", function (event) {
    if (!event.target.closest(".doc-container")) {
      recentSelectedCell = null;
    }
  });
});
