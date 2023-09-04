/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const fieldElement = document.querySelector(".field");
const limit = 100;

/**
 * ### Generate Mine Field Cells
 * @param {domElement} domElement div in wich the cells will be generated 
 * @param {number} limit the number of the cells to generate
 */
function generateMineField(domElement, limit) {

    console.log("generating cells");

    for (let i = 0; i < limit; i++) {

        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        domElement.append(cellElement);
        const cellValue = i + 1;

        //l'addEventListener viene associato a ogni cella ogni volta che viene creata durante il ciclo e rimane in attesa.
        cellElement.addEventListener("click", function () {

            //this fa rifermento al "soggetto" dell'eventListener
            this.classList.toggle("bgGreen");
            console.log(cellValue);

        })

    }
};

/**
 * ### Remove Mine Field Cells
 * @param {number} limit the number ot times in wich the code will loop to remove the cells. it has the same value as the number of the cells in the field.
 */
function removeMineField(limit) {

    console.log("removing cells");

    /*     for (let i = 0; i < limit; i++) {
    
            // Select the first element with class "cell"
            const cells = document.querySelector(".cell");
            //remove the selected element from the dom
            cells.remove();
    
        } */

    fieldElement.innerHTML = "";

}

/* Generate Field Button */
generateBtn.addEventListener("click", function () {

    //adds or remove the "active" class from the button at each click
    generateBtn.classList.toggle("active");

    //if the button has the "active" class
    if (generateBtn.classList.contains("active")) {

        //changes the button inner text
        generateBtn.innerHTML = "Delete the Field";

        //generates the cells inside the .field
        generateMineField(fieldElement, limit);

        //If the buttos doesn't have the "active" class
    } else {

        //changes the button inner text
        generateBtn.innerHTML = "Generate the Field";

        //removes the cells from the .field
        removeMineField(limit);

    }

});

/* Reset Button */
resetBtn.addEventListener("click", function () {

    //if the button has the "active" class (then there is a grid on screen)
    if (generateBtn.classList.contains("active")) {

        console.log("resetting the field");

        //removes the grid
        removeMineField(limit);

        //generates a new grid
        generateMineField(fieldElement, limit);

    }

});

