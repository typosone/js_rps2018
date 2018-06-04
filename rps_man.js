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

let winCount = 0;
let loseCount = 0;

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

    let judge = 0;

    // 12個のくじを生成
    const lot = Math.floor(Math.random() * 12);
    if (lot < 4) {
        // 0,1,2,3 なら勝ち
        judge = 1;
        message.innerText = "勝ち";
        winCount += 1;
    } else if (lot < 10) {
        // 4,5,6,7,8,9 なら負け
        judge = 2;
        message.innerText = "まけ";
        loseCount += 1;
    } else {
        message.innerText = "あいこ";
    }
    const rate = Math.floor(winCount / (winCount + loseCount) * 1000) / 10;
    message.innerText += " (" + rate + "%[" + (winCount + loseCount) +"])";


    // コンピュータの手を全部非表示
    for (let hand of computerHands) {
        hand.classList.remove("on");
    }
    // 計算でコンピュータの手を決定
    const computerSelect = (playerSelect + judge) % 3;
    computerHands[computerSelect].classList.add("on");
}