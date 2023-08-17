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

const gameBoardPixels = document.getElementsByClassName("gameBoardPixel")

let currentFoodPosition = 0
const createFood = () => {
    // if there's food on the board, go to that pixel and remove the "food" class
    gameBoardPixels[currentFoodPosition].classList.remove("food")
    currentFoodPosition = Math.floor(Math.random() * TOTAL_PIXEL_COUNT)
    gameBoardPixels[currentFoodPosition].classList.add("food")
}


// Controlling the snake direction
const LEFT_DIR = 37
const UP_DIR = 38
const RIGHT_DIR = 39
const DOWN_DIR = 40

let snakeCurrentDir = RIGHT_DIR

const changeDirection = newDirectionCode => {
    if (newDirectionCode == snakeCurrentDir) return;

    if (newDirectionCode == LEFT_DIR && snakeCurrentDir !== RIGHT_DIR) {
        snakeCurrentDir = newDirectionCode
    }
    else if (newDirectionCode == UP_DIR && snakeCurrentDir !== DOWN_DIR) {
        snakeCurrentDir = newDirectionCode
    }
    else if (newDirectionCode == RIGHT_DIR && snakeCurrentDir !== LEFT_DIR) {
        snakeCurrentDir = newDirectionCode
    }
    else if (newDirectionCode == DOWN_DIR && snakeCurrentDir !== UP_DIR) {
        snakeCurrentDir = newDirectionCode
    }
}

// if (
//     (newDirectionCode === LEFT_DIR && snakeCurrentDir !== RIGHT_DIR) ||
//     (newDirectionCode === UP_DIR && snakeCurrentDir !== DOWN_DIR) ||
//     (newDirectionCode === RIGHT_DIR && snakeCurrentDir !== LEFT_DIR) ||
//     (newDirectionCode === DOWN_DIR && snakeCurrentDir !== UP_DIR)
// ) {
//     snakeCurrentDir = newDirectionCode;
// }

// Snake starting position
let currentHeadPosition = TOTAL_PIXEL_COUNT / 2;

// Set initial length
let snakeLength = 200

// Move snake
const moveSnake = () => {
    switch (snakeCurrentDir) {
        case LEFT_DIR:
            --currentHeadPosition
            const isHeadAtLeft = (currentHeadPosition % LINE_PIXEL_COUNT == LINE_PIXEL_COUNT - 1) || currentHeadPosition < 0
            // const isHeadAtLeft = currentHeadPosition <= 0
            if (isHeadAtLeft) {
                console.log(`current head position: ${currentHeadPosition}`)
                currentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT
            }
            break;

        case RIGHT_DIR:
            currentHeadPosition++
            const isHeadAtRight = (currentHeadPosition % LINE_PIXEL_COUNT == 0)
            if (isHeadAtRight) {
                currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            }
            break;

        case UP_DIR:
            currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            const isHeadAtTop = currentHeadPosition < 0
            if (isHeadAtTop) {
                currentHeadPosition = currentHeadPosition + TOTAL_PIXEL_COUNT
            }
            break;

        case DOWN_DIR:
            currentFoodPosition = currentHeadPosition + LINE_PIXEL_COUNT
            const isHeadAtBottom = currentHeadPosition > TOTAL_PIXEL_COUNT - 1
            if (isHeadAtBottom) {
                currentHeadPosition = currentHeadPosition - TOTAL_PIXEL_COUNT
            }
            break;
        
        default:
            break;
    }

    let nextSnakeHeadPixel = gameBoardPixels(currentHeadPosition)

    // Uses CSS class to see if the head is crossing onto the body of the snake
    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
        alert(`You ate ${totalFoodEaten} and traveled ${totalDistanceTraveled}. Then died :(`)
        
        // Improve with end window, better restart
        window.location.reload()
    }

    // If pixel is blank, it becomes part of the snake
    nextSnakeHeadPixel.classList.add("snakeBodyPixel")

}

createGameBoardPixels()























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
