const signals = [
    { src: "", name: "Pare" },
    { src: "img/stop.png", name: "Ceda el paso" },
    { src: "img/pare.png", name: "Prohibido estacionar" },
    { src: "img/pare.png", name: "Paso peatonal" },
    { src: "img/pare.png", name: "Velocidad máxima" },
    { src: "img/pare.png", name: "No entrar" },
    { src: "img/pare.png", name: "Peatones" },
    { src: "img/pare.png", name: "Frenar" }

];



let gameBoard = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let score = 0;

function createGameBoard() {
    const doubleSignals = [...signals, ...signals]; // Duplicar las señales
    gameBoard = doubleSignals.sort(() => 0.5 - Math.random()).slice(0, 64); // Mezclar y limitar a 64 cartas
    const gameBoardElement = document.getElementById("game-board");
    gameBoardElement.innerHTML = "";

    gameBoard.forEach((signal, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.name = signal.name;
        card.innerHTML = `<img src="${signal.src}" alt="${signal.name}">`;
        card.addEventListener("click", () => flipCard(card));
        gameBoardElement.appendChild(card);
    });
}

function flipCard(card) {
    if (lockBoard || card === firstCard) return;

    card.classList.add("flipped");

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    score++;
    firstCard.removeEventListener("click", () => flipCard(firstCard));
    secondCard.removeEventListener("click", () => flipCard(secondCard));
    resetBoard();
    checkGameOver();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function checkGameOver() {
    if (score === signals.length) {
        showScore();
    }
}

function showScore() {
    document.getElementById("score-container").classList.remove("hidden");
    document.getElementById("score").innerText = score;
}

document.getElementById("restart-btn").addEventListener("click", () => {
    score = 0;
    createGameBoard();
    document.getElementById("score-container").classList.add("hidden");
});

createGameBoard();
