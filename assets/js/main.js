const generateBtn = document.getElementById("generateBtn");
const fieldElement = document.querySelector(".field");
const limit = 100;

console.log(generateBtn);

generateBtn.innerHTML = "Casa"

function generateFieldExercise(domElement, limit) {

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

generateFieldExercise(fieldElement, limit);

generateBtn.addEventListener("click", function () {

    generateBtn.classList.toggle("active");
    console.log(generateBtn);

    if (generateBtn.classList.contains("active")) {
        console.log("active");
    } else {
        console.log("absent");
    }

});
