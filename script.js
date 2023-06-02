// Pega todos os elementos html necessários. Também cria os dois arrays qeu serão usados para mudar o background.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const simpleColors = ["green", "red", "blue", "yellow", "orange", "pink", "purple", "gray"];
const colorType = document.querySelector("#type");
const btn = document.querySelector("#btn");
const currentBackgoundColor = document.querySelector(".container .color");
const main = document.querySelector("main");

// Muda o conteúdo do texto do button com id = type, de simple para hex.
colorType.addEventListener("click", () => {
    if (colorType.textContent === "Simple") 
        colorType.textContent = "Hex";
    else 
        colorType.textContent = "Simple"
});

// Evento para mudar de fato o background, faz a verificação se o background será de cores simples ou com hex.
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

        // Verifica a luminosidade do fundo
        const backgroundColor = getComputedStyle(document.body).backgroundColor;
        const luminosity = calculateLuminosity(backgroundColor);
        
        // Define a cor do botão com base na luminosidade. (Com cores mais escuras o botão para mudar o background ficava muito pouco visível)
        if (luminosity < 15) {
            btn.style.color = "white"
            btn.style.borderColor = "white";
        } else {
            btn.style.color = "black"
            btn.style.borderColor = "black";
        }
    }
})

// Pega um número aleatório de acordo com o tamanho do array simpleColors.
function RandomNumberBySimpleColors() {
    return Math.floor(Math.random() * simpleColors.length);
}

// Pega um número aleatório de acordo com o tamanho do array Hex.
function RandomNumberByHex() {
    return Math.floor(Math.random() * hex.length);
}

// Função para calcular a luminosidade do background
function calculateLuminosity(color) {
    // Remove "rgb(" e ")" do valor da cor
    const rgb = color.slice(4, -1).split(",").map(Number);

    // Converte RGB para HSL
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    const luminosity = (max + min) / 2;

    return luminosity * 100;
}