let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var button1 = document.createElement('button');
button1.innerText = 'Click to Start'
document.getElementById('game-over-lbl').appendChild(button1);
button1.addEventListener('click', (button1) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let player1 = document.querySelector('b');
let player2 = 'Next Player'
player1.innerText = player2;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
    for (let i = 0; i<=8; i++) {

        let cell = 'c' + (i+1);
        var button2 = document.createElement('button');
        document.getElementById(cell).appendChild(button2);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    event.target.innerText = nextPlayer;
    if (nextPlayer === 'X') {
        nextPlayer = 'O';
    } else {
        if (nextPlayer === 'O') {
            nextPlayer = 'X'
        }
    }

    let player2 = 'Next Player: ' + nextPlayer;
    player1.innerText = player2;
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    event.target.disabled = 'disabled';
    // Check if the game is over
    if (isGameOver() === true)
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lable = document.getElementById('game-over-lbl')
        var header = document.createElement('h1');
        
        header.innerText = 'Game Over';
        lable.appendChild(header); 
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let clickButton = true;
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled){
            clickButton = false;
        }
    }
    return clickButton;
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
