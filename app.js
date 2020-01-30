let innings = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"
let batterOut
let activePlayer = 0
let batsmanOut = []
let score = []
let ballsFaced = []
let remainingBatsmen = ["3", "4", "5", "6", "7", "8", "9", "10", "11"]
let currentBatsmen = ["1", "2"]

activePlayerZeroScore = 0
activePlayerOneScore = 0
activePlayerZeroBallsFaced = 0
activePlayerOneBallsFaced = 0
currentBall = 0

function overOver() {
    if ((currentBall % 6) === 0) {
        // console.log("change ends")
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }
}
function lastManStanding() {
    if (batsmanOut.length == 10) {

    }
}



for (i = 1; i < innings.length; i++) {
    currentBall++
    // console.log(currentBall);

    overOver()

    if (activePlayer == 0) {
        if (innings[i] == ".") {
            // console.log(".ball-P1")
            activePlayerZeroBallsFaced++
        } else if (innings[i] == "1" || innings[i] == "3" || innings[i] == "5") {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

            activePlayerZeroScore += parseInt(innings[i])
            activePlayerZeroBallsFaced++
            // console.log(`Player1 hits a :${innings[i]}. Their total score :${activePlayerZeroScore}`)
        } else if (innings[i] == "2" || innings[i] == "4" || innings[i] == "6") {
            activePlayerZeroScore += parseInt(innings[i])
            activePlayerZeroBallsFaced++
            // console.log(`Player1 hits a :${innings[i]}. Their total score :${activePlayerZeroScore}`)
        } else {
            // console.log(`\nHOWZAT! This batsmans 1 runs was ${activePlayerZeroScore}\n`)
            activePlayerZeroBallsFaced++
            ballsFaced.push(activePlayerZeroBallsFaced)
            batterOut = currentBatsmen.shift()
            currentBatsmen.splice(0, 0, remainingBatsmen[0])
            remainingBatsmen.shift()
            batsmanOut.push(batterOut)
            score.push(activePlayerZeroScore)
            activePlayerZeroBallsFaced = 0
            activePlayerZeroScore = 0

        }

    }
    else if (activePlayer == 1) {
        if (innings[i] == ".") {
            activePlayerOneBallsFaced++

            // console.log(".ball-P2")
        } else if (innings[i] == "1" || innings[i] == "3" || innings[i] == "5") {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            activePlayerOneScore += parseInt(innings[i])
            activePlayerOneBallsFaced++

            // console.log(`Player2 hits a :${innings[i]}. Their total Score: ${activePlayerOneScore}`)
        } else if (innings[i] == "2" || innings[i] == "4" || innings[i] == "6") {
            activePlayerOneScore += parseInt(innings[i])
            activePlayerOneBallsFaced++

            // console.log(`Player2 hits a :${innings[i]}. Their total Score: ${activePlayerOneScore}`)
        } else {
            // console.log(`\n HOWZAT! This batsmans 2runs was ${activePlayerOneScore}\n`)
            activePlayerOneBallsFaced++
            batterOut = currentBatsmen.pop()
            ballsFaced.push(activePlayerOneBallsFaced)
            currentBatsmen.splice(1, 0, remainingBatsmen[0])
            remainingBatsmen.shift()
            batsmanOut.push(batterOut)
            score.push(activePlayerOneScore)
            activePlayerOneScore = 0
            activePlayerOneBallsFaced = 0

        }
    }
}


// console.log(batsmanOut,score);


let Scorecard = [
    `Batsman${batsmanOut[0]} scored ${score[0]} runs, and faced ${ballsFaced[0]} balls`,
    `Batsman${batsmanOut[1]} scored ${score[1]} runs, and faced ${ballsFaced[1]} balls`,
    `Batsman${batsmanOut[2]} scored ${score[2]} runs, and faced ${ballsFaced[2]} balls`,
    `Batsman${batsmanOut[3]} scored ${score[3]} runs, and faced ${ballsFaced[3]} balls`,
    `Batsman${batsmanOut[4]} scored ${score[4]} runs, and faced ${ballsFaced[4]} balls`,
    `Batsman${batsmanOut[5]} scored ${score[5]} runs, and faced ${ballsFaced[5]} balls`,
    `Batsman${batsmanOut[6]} scored ${score[6]} runs, and faced ${ballsFaced[6]} balls`,
    `Batsman${batsmanOut[7]} scored ${score[7]} runs, and faced ${ballsFaced[7]} balls`,
    `Batsman${batsmanOut[8]} scored ${score[8]} runs, and faced ${ballsFaced[8]} balls`,
    `Batsman${batsmanOut[9]} scored ${score[9]} runs, and faced ${ballsFaced[9]} balls`,
    `Batsman 11 scored ${activePlayerOneScore} runs(Not out) and faced ${activePlayerOneBallsFaced} balls`
]

Scorecard.sort()
console.log(Scorecard);
