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


//EVENT LISTENERS
player1Btn.addEventListener("click", function (e) {
    p1s += 1;
    p1actualScore.textContent = p1s;
});

player2Btn.addEventListener("click", function (e) {
    p2s += 1;
    p2actualScore.textContent = p2s;
});


resetBtn.addEventListener("click", function (e) {
    p1actualScore.innerText = 0;
    p2actualScore.innerText = 0;
    playingTo.value = 2;

});

