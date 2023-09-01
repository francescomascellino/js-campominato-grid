const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const fieldElement = document.querySelector(".field");
const limit = 100;

console.log(generateBtn);

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
            cellElement.innerHTML = "";

        })

    }
};

function removeMineField(limit) {

    console.log("removing cells");

    for (let i = 0; i < limit; i++) {

        const cells = document.querySelector(".cell");
        cells.remove();

    }

}

generateBtn.addEventListener("click", function () {

    generateBtn.classList.toggle("active");
    console.log(generateBtn);

    if (generateBtn.classList.contains("active")) {

        generateBtn.innerHTML = "Delete the field";

        generateMineField(fieldElement, limit);

    } else {

        generateBtn.innerHTML = "Generate the field";

        removeMineField(limit);

    }

});

resetBtn.addEventListener("click", function () {

    if (generateBtn.classList.contains("active")) {
        console.log("resetting the field");

        removeMineField(limit);

        generateMineField(fieldElement, limit);
    }

});

