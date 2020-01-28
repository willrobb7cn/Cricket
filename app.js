let innings = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W"
let activePlayer = 0


activePlayerZeroScore = 0
activePlayerOneScore = 0
currentBall = 0

function overOver() {
    if ((currentBall % 6) === 0) {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    }
}

for (i = 0; i < innings.length; i++) {
    currentBall++
    overOver()
    
    if (activePlayer == 0) {
        if (innings[i] == ".") {
            // console.log(".ball-P1")
        } else if (innings[i] == "1" || innings[i] == "3" || innings[i] == "5") {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

            activePlayerZeroScore += parseInt(innings[i])
            console.log(`Player1 score :${activePlayerZeroScore}`)
        } else if (innings[i] == "2") {
            activePlayerZeroScore += parseInt(innings[i])
            console.log(`Player1 score :${activePlayerZeroScore}`)
        }
        else if (innings[i] == "4" || innings[i] == "6") {
            activePlayerZeroScore += parseInt(innings[i])
            console.log(`Player1 score :${activePlayerZeroScore}`);

        } else {
            console.log(`HOWZAT! This batsmans 1 runs was ${activePlayerZeroScore}`)
            activePlayerZeroScore = 0

        }

    }
    else if (activePlayer == 1) {
        if (innings[i] == ".") {
            // console.log(".ball-P2")
        } else if (innings[i] == "1" || innings[i] == "3" || innings[i] == "5") {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            activePlayerOneScore += parseInt(innings[i])
            console.log(`Player2 Score: ${activePlayerOneScore}`)
        } else if (innings[i] == "2") {
            activePlayerZeroScore += parseInt(innings[i])
            console.log(`Player2 Score: ${activePlayerOneScore}`)
        }
        else if (innings[i] == "4" || innings[i] == "6") {
            activePlayerOneScore += parseInt(innings[i])
            console.log(`Player2 Score: ${activePlayerOneScore}`);

        } else {
            console.log(`HOWZAT! This batsmans 2runs was ${activePlayerOneScore}`)
            activePlayerOneScore = 0
        }
    }
}