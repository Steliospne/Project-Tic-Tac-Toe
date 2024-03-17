const startButton = document.querySelector('.start')
startButton.addEventListener('click', () => {
    newGame = Game();
    newGame.startGame();
})

function Game() {
    const board = gameBoard();
    const player_1 = createPlayer("player 1", "x");
    const player_2 = createPlayer("player 2", "o");

    let round = 1;

    
    const startGame = () => {
        console.log('Game started!')
        const gameBoardDOM = document.querySelector(".gameBoard");
        gameBoardDOM.addEventListener("click", (e) => {
            target = e.target;
            // playRound(target)
            console.log(target);
        });
    };
    
    
    const playRound = (x, y) => {
        if (board[x][y] == "") {
            if (round % 2 == 0) {
                board[x][y] = player_2.mark;
                round++;
                console.log(board);
                getGameStatus();
            } else {
                board[x][y] = player_1.mark;
                round++;
                console.log(board);
                getGameStatus();
            }
        } else {
            console.log("This cell is not empty try again!");
        }
    };

    const getWinner = () => {
        if (board[0][0] == "x") {
            return `${player_1.name} wins`;
        } else if (board[0][0] == "0") {
            return `${player_2.name} wins`;
        } else if (round == 8) {
            return "It's a tie!";
        }
    };

    const getGameStatus = () => {
        row1 = board[0];
        row2 = board[1];
        row3 = board[2];
        if (row1[0] == row1[1] && row1[1] == row1[2] && row1[0] != "") {
            // Check first row
            console.log(getWinner());
        } else if (row2[0] == row2[1] && row2[1] == row2[2] && row2[0] != "") {
            // Check second row
            console.log(getWinner());
        } else if (row3[0] == row3[1] && row3[1] == row3[2] && row3[0] != "") {
            // Check third row
            console.log(getWinner());
        } else if (row1[0] == row2[0] && row2[0] == row3[0] && row1[0] != "") {
            // Check first column
            console.log(getWinner());
        } else if (row1[1] == row2[1] && row2[1] == row3[1] && row1[1] != "") {
            // Check second column
            console.log(getWinner());
        } else if (row1[2] == row2[2] && row2[2] == row3[2] && row1[2] != "") {
            // Check third column
            console.log(getWinner());
        } else if (row1[0] == row2[1] && row2[1] == row3[2] && row1[0] != "") {
            // Check left diagonal
            console.log(getWinner());
        } else if (row1[2] == row2[1] && row2[1] == row3[0] && row1[2] != "") {
            // Check right diagonal
            console.log(getWinner());
        }
    };
    return { board, playRound ,startGame};
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
