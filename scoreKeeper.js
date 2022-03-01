// UPDATING THE NAME GAME
const givenName = document.querySelector("#gGame");

const dName = document.querySelector(".displayName");

givenName.addEventListener("input", function (e) {
    dName.innerText = `${givenName.value} Score keeper`;
});

const p1 = {
    score: 0,
    button: document.querySelector("#player1Btn"),
    display: document.querySelector(".p1Score"),
    win: "PLAYER 1 WINS"
}
const p2 = {
    score: 0,
    button: document.querySelector("#player2Btn"),
    display: document.querySelector(".p2Score"),
    win: "PLAYER 2 WINS"
}


//PLAYING TO VALUE
const playingTo = document.querySelector("#playingToValue");

//RESET BUTTON
const resetBtn = document.querySelector("#resetBtn");

//WINNER PARAGRAPH
const winner = document.querySelector("#winner");

let isGameOver = false;

function updateScores(player, oponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === parseInt(playingTo.value)) {
            isGameOver = true;
            player.display.classList.add("firstPlace")
            oponent.display.classList.add("secondPlace");
            player.button.disable = true;
            oponent.button.disable = true;
            winner.textContent = player.win;
        }
        player.display.textContent = player.score;
    }
}

//EVENT LISTENERS
p1.button.addEventListener("click", function (e) {
    updateScores(p1, p2);
});


p2.button.addEventListener("click", function (e) {
    updateScores(p2, p1);
});


// player2Btn.addEventListener("click", function (e) {
//     p2s += 1;
//     p2actualScore.textContent = p2s;
// });


resetBtn.addEventListener("click", reset);


playingTo.addEventListener("click", reset)


function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("firstPlace", "secondPlace");
    }
    //playingTo.value = 2;
    dName.innerText = "Your Game";
    givenName.value = "";
    winner.textContent = "";
}
