const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleColors = ["green", "red", "blue", "yellow", "orange", "pink", "purple", "gray"];
const colorType = document.querySelector("#type");
const btn = document.querySelector("#btn");
const currentBackgoundColor = document.querySelector(".container .color");
const main = document.querySelector("main");

colorType.addEventListener("click", () => {
    if (colorType.textContent === "Simple") 
        colorType.textContent = "Hex";
    else 
        colorType.textContent = "Simple"
});

btn.addEventListener("click", () => {
    if (colorType.textContent === "Simple") {
        const random = RandomNumberBySimpleColors();
        
        document.body.style.backgroundColor = simpleColors[random];
        currentBackgoundColor.textContent = simpleColors[random];
        currentBackgoundColor.style.color = simpleColors[random];
    }

    if (colorType.textContent === "Hex") {
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomNumberByHex()];
        }

        document.body.style.backgroundColor = hexColor;
        currentBackgoundColor.textContent = hexColor;
        currentBackgoundColor.style.color = hexColor;
    }
})

function RandomNumberBySimpleColors() {
    return Math.floor(Math.random() * simpleColors.length);
}

function RandomNumberByHex() {
    return Math.floor(Math.random() * hex.length);
}