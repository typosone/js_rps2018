document.getElementById("rock").addEventListener("click", handSelect);
document.getElementById("scissors").addEventListener("click", handSelect);
document.getElementById("paper").addEventListener("click", handSelect);

const playerHands = [
    document.getElementById("p0"),
    document.getElementById("p1"),
    document.getElementById("p2"),
];

const computerHands = [
    document.getElementById("c0"),
    document.getElementById("c1"),
    document.getElementById("c2"),
];

const message = document.getElementById("message");

function handSelect(event) {
    let playerSelect = 0;
    const buttonId = event.currentTarget.getAttribute("id");
    if (buttonId === "scissors") {
        playerSelect = 1;
    } else if (buttonId === "paper") {
        playerSelect = 2;
    }

    for (let hand of playerHands) {
        hand.classList.remove("on");
    }
    playerHands[playerSelect].classList.add("on");

    // コンピュータの手をランダムで決定
    const computerSelect = Math.floor(Math.random() * 3);

    // 勝敗判定
    const judge = (playerSelect - computerSelect + 3) % 3;

    for (let hand of computerHands) {
        hand.classList.remove("on");
    }
    computerHands[computerSelect].classList.add("on");

    if (judge === 0) {
        message.innerText = "あいこ";
        message.classList.remove("lose");
        message.classList.remove("win");
    } else if (judge === 1) {
        message.innerText = "まけ";
        message.classList.add("lose");
        message.classList.remove("win");
    } else {
        message.innerText = "かち";
        message.classList.remove("lose");
        message.classList.add("win");
    }
}