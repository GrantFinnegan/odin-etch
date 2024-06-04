//get container of the squares. This will hold the grid
const container = document.querySelector("#container");


//populate grid container with gridSize by gridSize set of .square divs
//grid is composed of gridSize .row divs, each containing gridSize square divs
function createGrid(gridSize) {
    //remove any and all preexisting .square divs
    container.replaceChildren();

    //add gridSize rows
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        //add gridSize squares to each row
        for (let j = 0; j < gridSize; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener("mouseenter", () => square.classList.add("darkened"));
        }
    }
}

//add event listener to the grid creation button
document.querySelector("#grid-creation-btn").addEventListener("click",
 () => createGrid(prompt("Enter grid size (Max 100)"))
);

//initialize grid on 
createGrid(16);