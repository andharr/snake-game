const LINE_PIXEL_COUNT = 40
// Math.floor(40 * (window.innerWidth / 100));
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2

let totalFoodEaten = 0
let totalDistanceTraveled = 0

const gameContainer = document.getElementById("gameContainer")
// let linePixelCount = Math.floor(40 * (window.innerWidth / 100));

const createGameBoardPixels = () => {
    for (let i = 1; i <= TOTAL_PIXEL_COUNT; i++) {
        gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`
    }
}

// const createGameBoardPixels = () => {
//     const totalPixelCount = linePixelCount ** 2;

//     gameContainer.innerHTML = ''; 
//     // `repeat(${linePixelCount}, 1fr)`;

//     for (let i = 1; i <= totalPixelCount; i++) {
//         const pixel = document.createElement("div");
//         pixel.className = "gameBoardPixel";
//         pixel.id = `pixel${i}`;
//         gameContainer.appendChild(pixel);
//     }
// }

// // Call the function to create game board pixels initially
// createGameBoardPixels();

// // update grid on window resize
// window.addEventListener("resize", () => {
//     const newLinePixelCount = Math.floor(40 * (window.innerWidth / 100));

//     // Check if pixel count changed:
//     if (newLinePixelCount !== linePixelCount) {
//         linePixelCount = newLinePixelCount;
//         createGameBoardPixels();
//     }
// });
