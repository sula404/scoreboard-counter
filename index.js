let scoreInc = document.getElementById("score-box")
let scoreInc2 = document.getElementById("score-box2")
let score = 0
let score2 = 0

function inc1() {
    score += 1;
    scoreInc.textContent = score;
}

function inc2() {
    score += 2;
    scoreInc.textContent = score;
}

function inc3() {
    score += 3;
    scoreInc.textContent = score;
}

function inc4() {
    score2 += 1;
    scoreInc2.textContent = score2;
}

function inc5() {
    score2 += 2;
    scoreInc2.textContent = score2;
}

function inc6() {
    score2 += 3;
    scoreInc2.textContent = score2;
}

function rst() {
    score = 0;
    scoreInc.textContent = score;
    score2 = 0;
    scoreInc2.textContent = score2;
}