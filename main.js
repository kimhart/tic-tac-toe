console.log("This is linked!");

var gameBoard = document.querySelector('table');
var resetButton = document.getElementById('reset-btn');

var gameCounter = 0;

var chooseSquare = function(){
    var square = event.target;
        if (gameCounter === 0) {
            square.textcontent = 'X';
            square.classList.add('x');
            gameCounter++;
    } else if (gameCounter % 2 === 0) {
            square.textContent = 'X';
            square.classList.add('x');
            gameCounter++;
    } else if (gameCounter % 2 !== 0) {
            square.textContent = 'O';
            square.classList.add('o');
            gameCounter++;
    }
};

var resetBoard = function(){
    location.reload(true);

};

gameBoard.addEventListener('click', chooseSquare);
resetButton.addEventListener('click', resetBoard);

