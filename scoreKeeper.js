// UPDATING THE NAME GAME
const givenName = document.querySelector("#gGame");

const dName = document.querySelector(".displayName");

givenName.addEventListener("input", function (e) {
    dName.innerText = `${givenName.value} Score keeper`;
});



//PLAYING TO VALUE
const playingTo = document.querySelector("#playingToValue");

//DISPLAY SCORE
const p1actualScore = document.querySelector(".p1Score");
const p2actualScore = document.querySelector(".p2Score");

//PLAYER BUTTONS
const player1Btn = document.querySelector("#player1Btn");
const player2Btn = document.querySelector("#player2Btn");

//RESET BUTTON
const resetBtn = document.querySelector("#resetBtn");


let p1s = 0;
let p2s = 0;
let isGameOver = false;


//EVENT LISTENERS
player1Btn.addEventListener("click", function (e) {
    if (!isGameOver) {
        p1s += 1;
        if (p1s === parseInt(playingTo.value)) {
            isGameOver = true;
            p1actualScore.style.color = "green";
            p2actualScore.style.color = "red";
        }
        p1actualScore.textContent = p1s;
    }
});


player2Btn.addEventListener("click", function (e) {
    if (!isGameOver) {
        p2s += 1;
        if (p2s === parseInt(playingTo.value)) {
            isGameOver = true;
            p2actualScore.style.color = "green";
            p1actualScore.style.color = "red";

        }
        p2actualScore.textContent = p2s;
    }
});


// player2Btn.addEventListener("click", function (e) {
//     p2s += 1;
//     p2actualScore.textContent = p2s;
// });


resetBtn.addEventListener("click", function (e) {
    p1actualScore.textContent = 0;
    p2actualScore.innerText = 0;
    playingTo.value = 2;
    dName.innerText = "Your Game";
    givenName.value = "";
    p1s = 0;
    p2s = 0;
    isGameOver = false;
    p2actualScore.style.color = "black";
    p1actualScore.style.color = "black";
});

