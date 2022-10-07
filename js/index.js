'use strict'


//Data Object Model

/*
1. Computer generates a random number
2. If user clicks the check button then we will compare the users number and the random number
3. If they are equal we will say ....... else statements accordingly

*/
////////////////////////////////variable declaration///////////////////////////
let randomNumber;
let inputUser = document.querySelector(".input-num");
let checkBtn = document.querySelector(".check-btn");
let enterBtn = document.querySelector(".enter-btn");
let statement = document.querySelector(".statement");
let numberBox = document.querySelector(".number-box");
let scoreElement = document.querySelector(".score");
let body = document.querySelector("body");
let againBtn = document.querySelector(".again-btn");
let rangeBtn = document.querySelector(".range-btn");
let rangeContainer = document.querySelector(".rangeContainer");
let overlay = document.querySelector(".overlay");
let score = 0;
let allowRange = true;
let startingRange = document.querySelector("#sr");
let endingRange = document.querySelector("#er");
let min = 1,
    max = 20;
let rangeText = document.querySelector(".range");
/////////////////////function declaration//////////////////////////////////////
function generateRandomNumber() {
    randomNumber = Math.trunc(Math.random() * (max - min + 1) + min)
}

function controlInputClick() {
    if (inputUser.value == "") return;
    allowRange = false;
    if (Number(inputUser.value) === randomNumber) {
        statement.textContent = "Congratulations....🥳"
        numberBox.textContent = randomNumber;
        score++;
        scoreElement.textContent = `🥇Score: ${score}`;
        body.style.backgroundColor = "green";


    } else if (inputUser.value < randomNumber) {

        score = score - 0.25;
        scoreElement.textContent = `🥇Score: ${score}`;

        statement.textContent = "Low....📉"
    } else if (inputUser.value > randomNumber) {

        score = score - 0.25;
        scoreElement.textContent = `🥇Score: ${score}`;
        statement.textContent = "High....📈"
    }
    inputUser.value = "";
    inputUser.focus();
}

function controlAgainClick() {
    allowRange = true;
    numberBox.textContent = "?";
    body.style.backgroundColor = "var(--primary-color)";
    statement.textContent = "Start Guessing....";

}

function controlRangeClick() {
    if (allowRange) {
        rangeContainer.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
}

function controlEnterKeyPress(event) {
    if (event.key === "Enter" && rangeContainer.classList.contains("hidden") === false) {
        if (Number(endingRange.value) - Number(startingRange.value) >= 10) {
            min = Number(startingRange.value);
            max = Number(endingRange.value);
            generateRandomNumber();
            rangeText.textContent = `(Between ${min} and ${max}) `
            rangeContainer.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
}

////////////////////////////////Event handler//////////////////////////////////
checkBtn.addEventListener("click", controlInputClick);
againBtn.addEventListener("click", controlAgainClick);
rangeBtn.addEventListener("click", controlRangeClick);
body.addEventListener("keydown", controlEnterKeyPress);
//////////////////////////code/////////////////////////////////////
generateRandomNumber();


// To generate a random number between a range
// let max = 50;
// let min = 40;
// console.log(Math.trunc(Math.random() * (max - min + 1) + min));