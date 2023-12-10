
const answer = Math.floor(Math.random() * 10 + 1);
const buttonValues = [];
let hint = document.getElementById("hint");
let attempts = 0;
const attemptText = document.getElementById("attempts");
let scare = document.querySelector("#jumpScare");
let death = document.querySelector("#death");

let playAgain = document.getElementById("playAgain");
playAgain.style.visibility = 'hidden';






 function handlebuttonclick(event) {
    const buttonValue = event.target.textContent;
    buttonValues.push(buttonValue);
    console.log("button values: ", buttonValues);
    const userValue = Number(buttonValue);
    checkGuess(userValue);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click",handlebuttonclick,);
});

function checkGuess(userValue) {
    console.log("user guess " + userValue);
    console.log("answer " + answer);

    

    attempts++;

    if (userValue == answer) {
        hint.textContent = "You Survived";
        attempts.textContent = attempts;
        disableGuessButtons();
        playAgain.style.visibility = 'visible';
    }
     else if (userValue < answer) {
        scare.play();
        hint.textContent = "WRONG, Go Higher";

    } else {
        scare.play();
        hint.textContent = "WRONG, go Lower";
        
    }

    

    attemptText.textContent = "attempts " + attempts;

    if (attempts >= 3 && userValue != answer) {
        hint.textContent = "GAME OVER";
        attempts.textContent = "YOU DIED" + death.play();
        disableGuessButtons();
        playAgain.style.visibility = 'visible';
    }
    
        
     else if (attempts == 3) {
        disableGuessButtons();
        playAgain.style.visibility = 'visible';
    }
}

function disableGuessButtons() {
    buttons.forEach(button => {
        button.removeEventListener("click", handlebuttonclick);
        button.disabled = true;
        playAgain.disabled = false;
    });
}
