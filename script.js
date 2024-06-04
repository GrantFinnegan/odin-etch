const gridSize = 16;

//get container of the squares
const container = document.querySelector("#container");


//FOR gridSize:
//  add row div
//  FOR gridSize: add square divs to row div

for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < gridSize; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        square.addEventListener("mouseenter", () => square.classList.add("darkened"));
    }
}
