{
    let playerScore = 0;
    let computerScore = 0;

    const play = function (playerInput) {
        clearMessages();

        const move = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = move(randomNumber);

        printMessage('Mój ruch to: ' + computerMove);

        const playerMove = move(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        const results = function (argComputerMove, argPlayerMove) {

            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

            if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                document.getElementById('player-wins').innerHTML = ++playerScore;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Ja wygrywam!');
                document.getElementById('computer-wins').innerHTML = ++computerScore;
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
                printMessage('Remis!');
            } else {
                printMessage('Gracz użył niedozwolonego ruchu!');
            }
        }

        results(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        play(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        play(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        play(3);
    });
}