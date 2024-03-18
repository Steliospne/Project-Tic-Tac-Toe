const newGame = Game();

function Game() {
    let board = gameBoard();
    const player_1 = createPlayer("", "x");
    const player_2 = createPlayer("", "o");

    const playerTurnDisplay = document.querySelector(".playerTurn");
    const gameBoardDOM = document.querySelector(".gameBoard");
    const setupDisplay = document.querySelector(".gameStart");
    const readyButton = document.querySelector(".ready");
    const restartButton = document.querySelector(".restart");
    const newGameButton = document.querySelector(".new");
    const playerNames = document.getElementsByTagName("input");
    const winnerPopUp = document.querySelector(".gameEnd");
    const resultDisplay = document.querySelector(".result");
    const beginButton = document.querySelector(".start");

    let round = 1;

    const getNames = () => {
        player_1.name = playerNames[0].value;
        player_2.name = playerNames[1].value;
    };

    const gameSetup = () => {
        setupDisplay.showModal();
        readyButton.addEventListener("click", () => {
            startGame();
            getNames();
            playerTurnDisplay.textContent = `It's ${player_1.name} turn.`;
            setupDisplay.close();
        });
    };

    const startGame = () => {
        gameBoardDOM.addEventListener("click", clickHandler);
    };

    beginButton.addEventListener("click", () => {
        board = gameBoard();
        round = 1;
        gameSetup();
    });

    restartButton.addEventListener("click", () => {
        board = gameBoard();
        round = 1;
        winnerPopUp.close();
        playerTurnDisplay.textContent = `It's ${player_1.name} turn.`;
        startGame();
    });

    newGameButton.addEventListener("click", () => {
        board = gameBoard();
        round = 1;
        winnerPopUp.close();
        gameSetup();
    });

    const clickHandler = (e) => {
        let x;
        let y;
        target = e.target;
        switch (target.className) {
            case "cell1":
                x = 0;
                y = 0;
                playRound(target, x, y);
                break;
            case "cell2":
                x = 0;
                y = 1;
                playRound(target, x, y);
                break;
            case "cell3":
                x = 0;
                y = 2;
                playRound(target, x, y);
                break;
            case "cell4":
                x = 1;
                y = 0;
                playRound(target, x, y);
                break;
            case "cell5":
                x = 1;
                y = 1;
                playRound(target, x, y);
                break;
            case "cell6":
                x = 1;
                y = 2;
                playRound(target, x, y);
                break;
            case "cell7":
                x = 2;
                y = 0;
                playRound(target, x, y);
                break;
            case "cell8":
                x = 2;
                y = 1;
                playRound(target, x, y);
                break;
            case "cell9":
                x = 2;
                y = 2;
                playRound(target, x, y);
                break;
        }
    };

    const playRound = (target, x, y) => {
        if (target.textContent == "") {
            if (round % 2 == 0) {
                playerTurnDisplay.textContent = `It's ${player_1.name} turn.`;
                board[x][y] = player_2.mark;
                target.textContent = player_2.mark;
                round++;
                getGameStatus();
            } else {
                playerTurnDisplay.textContent = `It's ${player_2.name} turn.`;
                board[x][y] = player_1.mark;
                target.textContent = player_1.mark;
                round++;
                getGameStatus();
            }
        } else {
            alert("This cell is not empty try again!");
        }
    };

    const getWinner = () => {
        playerTurnDisplay.textContent = '';
        if (round % 2 == 0) {
            return `${player_1.name} wins`;
        } else {
            return `${player_2.name} wins`;
        }
    };

    const getGameStatus = () => {
        let row1 = board[0];
        let row2 = board[1];
        let row3 = board[2];

        // Check first row
        if (row1[0] == row1[1] && row1[1] == row1[2] && row1[0] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check second row
        } else if (row2[0] == row2[1] && row2[1] == row2[2] && row2[0] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check third row
        } else if (row3[0] == row3[1] && row3[1] == row3[2] && row3[0] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check first column
        } else if (row1[0] == row2[0] && row2[0] == row3[0] && row1[0] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check second column
        } else if (row1[1] == row2[1] && row2[1] == row3[1] && row1[1] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check third column
        } else if (row1[2] == row2[2] && row2[2] == row3[2] && row1[2] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check left diagonal
        } else if (row1[0] == row2[1] && row2[1] == row3[2] && row1[0] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
            // Check right diagonal
        } else if (row1[2] == row2[1] && row2[1] == row3[0] && row1[2] != "") {
            resultDisplay.textContent = getWinner();
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
        } else if (round == 10) {
            resultDisplay.textContent = "Its a tie!";
            winnerPopUp.showModal();
            gameBoardDOM.removeEventListener("click", clickHandler);
        }
    };
    return { board, startGame, gameSetup };
}

function gameBoard() {
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    const cells = document.getElementsByName("cell");
    for (cell of cells) {
        cell.textContent = "";
    }
    return board;
}

function createPlayer(name, mark) {
    return { name, mark };
}
