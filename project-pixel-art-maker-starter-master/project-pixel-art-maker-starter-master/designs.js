// Select color input
let color = document.getElementById("colorPicker");
// color.value = hex
// Select size input
// let height = document.getElementById("inputHeight").value;
// let width = document.getElementById("inputWidth"),value;
let pixelCanvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
let ev = document.getElementById("submit");
ev.addEventListener("click", function () {
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
  makeGrid(height,width);
});
function makeGrid(height,width) {
  // Your code goes here!
  for (let i = 1; i <= height; i++) {
    let gridRow = document.createElement("tr");
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= width; j++) {
      let gridCell = document.createElement("td");
      gridRow.appendChild(gridCell);
    }
  }}
