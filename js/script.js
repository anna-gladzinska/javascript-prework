function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        /*if (argMoveId == 1) {
            return 'nożyce';
        } */
        else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
        /*else if (argMoveId == 4) {
                   return 'kamień';
               }*/
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*if (randomNumber == 1) {
        computerMove = 'kamień';
    } else if (randomNumber == 2) {
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + playerMove);

    /*if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier' || computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
    } else if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce') {
        printMessage('Remis!');
    } else {
        printMessage('Gracz użył niedozwolonego ruchu!');
    }*/

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else {
            printMessage('Gracz użył niedozwolonego ruchu!');
        }
    }

    displayResult(computerMove, playerMove);
}

let playerScore = 0;
let computerScore = 0;

function result() {

    if (document.querySelector('#messages div:nth-of-type(4)').innerHTML == 'Ty wygrywasz!') {
        document.getElementById('player-wins').innerHTML = ++playerScore;
    } else if (document.querySelector('#messages div:nth-of-type(4)').innerHTML == 'Ja wygrywam!') {
        document.getElementById('computer-wins').innerHTML = ++computerScore;
    }
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
    result();
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
    result();
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
    result();
});

/*for (let i = 0; i < 100; i++) {
    playGame(4);
    result();
}*/