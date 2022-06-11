let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board")

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, checkWin } from "./snake.js"

import { update as updateFood, draw as drawFood} from "./food.js"

import { outsideGrid } from "./grid.js"

function main(currentTime) {
    if (gameOver) {
        if (confirm("you lost. press ok to restart")) {
            window.location = "/"
        }
        return
    }

    if (checkWin()) {
        alert("wtf you won");
        alert("HOW");
        alert("but congrats man");
        alert("you wasted so much time");
        alert("and i wasted so much time making this");
        alert("yaaay");
        alert("you can go do something else now");
        alert("than playing this stupid game i stole from a youtube video (https://www.youtube.com/watch?v=QTcIXok9wNY by WDS if ur interested)");
        alert("okay thats all i had to say");
        alert("see ya");
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondSinceLastRender < 1 / SNAKE_SPEED) return


    console.log("Render")
    lastRenderTime = currentTime

    update()
    draw() 
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ""
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}