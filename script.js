const startButton = document.querySelector(".start");
startButton.addEventListener("click", () => {
    newGame = Game();
    newGame.startGame();
});

function Game() {
    const board = gameBoard();
    const player_1 = createPlayer("player 1", "x");
    const player_2 = createPlayer("player 2", "o");

    let round = 1;

    const startGame = () => {
        // console.log("Game started!");
        const gameBoardDOM = document.querySelector(".gameBoard");
        gameBoardDOM.addEventListener("click", (e) => {
            let x;
            let y;
            target = e.target;
            switch (target.className) {
                case "cell1":
                    x = 0;
                    y = 0;
                    break;
                case "cell2":
                    x = 0;
                    y = 1;
                    break;
                case "cell3":
                    x = 0;
                    y = 2;
                    break;
                case "cell4":
                    x = 1;
                    y = 0;
                    break;
                case "cell5":
                    x = 1;
                    y = 1;
                    break;
                case "cell6":
                    x = 1;
                    y = 2;
                    break;
                case "cell7":
                    x = 2;
                    y = 0;
                    break;
                case "cell8":
                    x = 2;
                    y = 1;
                    break;
                case "cell9":
                    x = 2;
                    y = 2;
                    break;
            }
            playRound(target, x, y);
            // console.log(target);
            // console.log(e);
        });
    };

    const playRound = (target, x, y) => {
        if (target.textContent == "") {
            if (round % 2 == 0) {
                target.textContent = player_2.mark;
                board[x][y] = player_2.mark;
                round++;
                getGameStatus();
            } else {
                target.textContent = player_1.mark;
                board[x][y] = player_1.mark;
                round++;
                getGameStatus();
            }
        } else {
            // console.log("This cell is not empty try again!");
        }
    };

    const getWinner = () => {
        if (board[0][0] == "x") {
            return `${player_1.name} wins`;
        } else if (board[0][0] == "o") {
            return `${player_2.name} wins`;
        } else if (round == 8) {
            return "It's a tie!";
        }
    };

    const getGameStatus = () => {
        row1 = board[0];
        row2 = board[1];
        row3 = board[2];
        // Check first row
        if (row1[0] == row1[1] && row1[1] == row1[2] && row1[0] != "") {
            console.log(getWinner());
            // Check second row
        } else if (row2[0] == row2[1] && row2[1] == row2[2] && row2[0] != "") {
            console.log(getWinner());
            // Check third row
        } else if (row3[0] == row3[1] && row3[1] == row3[2] && row3[0] != "") {
            console.log(getWinner());
            // Check first column
        } else if (row1[0] == row2[0] && row2[0] == row3[0] && row1[0] != "") {
            console.log(getWinner());
            // Check second column
        } else if (row1[1] == row2[1] && row2[1] == row3[1] && row1[1] != "") {
            console.log(getWinner());
            // Check third column
        } else if (row1[2] == row2[2] && row2[2] == row3[2] && row1[2] != "") {
            console.log(getWinner());
            // Check left diagonal
        } else if (row1[0] == row2[1] && row2[1] == row3[2] && row1[0] != "") {
            console.log(getWinner());
            // Check right diagonal
        } else if (row1[2] == row2[1] && row2[1] == row3[0] && row1[2] != "") {
            console.log(getWinner());
        }
    };
    return { board, startGame };
}

function gameBoard(
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]
) {
    return board;
}

function createPlayer(name, mark, turn) {
    return { name, mark };
}
