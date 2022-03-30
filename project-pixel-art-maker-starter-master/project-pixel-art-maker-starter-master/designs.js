document.getElementById("submit").addEventListener("click", formSubmission);

function formSubmission(event) {
  event.preventDefault();
  const height = document.getElementById("inputHeight").value;
  const width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
}

function makeGrid(height, width) {
  const table = document.getElementById("pixelCanvas");
  let grid = "";

  // loop over each row
  for (let i = 0; i < height; i++) {
    grid += '<tr class="row-' + i + '">';
    // loop for each cell
    for (let j = 0; j < width; j++) {
      grid += '<td class="cell" id="row-' + i + "_cell-" + j + '"></td>';
    }
    grid += "</tr>";
  }
  // add grid into table element
  table.innerHTML = grid;

  // Add click event to grid cells once the table grid has been created
  addClickEventToCells();
}

function addClickEventToCells() {
  const colorPicker = document.getElementById("colorPicker");
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (event) {
      let clickedCell = event.target;
      clickedCell.style.backgroundColor = colorPicker.value;
    });
  }
}
// default grid
makeGrid(10, 10);
