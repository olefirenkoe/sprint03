let container = document.body.children[1];
let sidebar = document.createElement('DIV');
let counter = true;
let count = 0;
sidebar.setAttribute('class', 'sidebar');
container.append(sidebar);
let itemWinner = document.getElementsByClassName('item');
let winner = document.createElement('DIV');
winner.setAttribute('id', 'winner');

let sidebarAgain = document.getElementsByClassName('sidebar');
sidebarAgain.item(0).innerHTML = `<input id="btnAgain" type="button" onclick="AddGame()" value="PLAY AGAIN"></input>`;


let PlayersDiv = document.createElement('DIV');
PlayersDiv.setAttribute('id', 'playersDiv')
PlayersDiv.innerHTML = `<div id='player1'>Player 1</div><div id='player2'>Player 2</div><div id='turns'>Number of turns</div>`;
sidebarAgain.item(0).append(PlayersDiv);

let turnsNumber = document.createElement('DIV');
sidebarAgain.item(0).append(turnsNumber);

function countTurns() {
    turnsNumber.innerHTML = `<div id='turnsNumber'>${count}</div>`;
}
countTurns();

for (let i = 0; i < 9; i++) {
    let item = document.createElement('DIV');
    item.setAttribute('class', `item item${i}`);
    container.appendChild(item);
    item.innerHTML = `<input id="btn" type="button" onclick="AddGame()" data-element="${i}"></input>`;
}

function inner() {
    for (let j = 0; j < 9; j++) {
        let NewItem = document.getElementsByClassName('item');
        NewItem.item(j).innerHTML = `<input id="btn" type="button" onclick="AddGame()" data-element="${j}"></input>`;
        document.getElementsByClassName(`item${j}`).item(0).style.color = '';
        document.getElementsByClassName(`item${j}`).item(0).style.fontSize = '';
        winner.innerHTML = '';
        turnsNumber.style.color = '';
        document.getElementById('turns').style.color = '';
        document.getElementsByClassName('sidebar').item(0).style.background = '';

    }
};

playerCounter()

function AddGame() {

    let target = event.target;
    if (counter) {
        for (let k = 0; k < 9; k++)
            if (target.getAttribute('data-element') == `${k}`) {
                let div = document.getElementsByClassName(`item${k}`);
                div.item(0).innerHTML = "X";
                counter = false;
                playerCounter()
                count++
                countTurns();
                checker();
            }
        if (target.getAttribute('value') == 'PLAY AGAIN') {
            counter = true;
            inner();
            playerCounter();
            count = 0;
            countTurns();
        }
    } else {
        for (let k = 0; k < 9; k++)
            if (target.getAttribute('data-element') == `${k}`) {
                let div = document.getElementsByClassName(`item${k}`);
                div.item(0).innerHTML = "O";
                counter = true;
                playerCounter();
                count++
                countTurns();
                checker();
            }
        if (target.getAttribute('value') == 'PLAY AGAIN') {
            counter = true;
            inner();
            playerCounter();
            count = 0;
            countTurns();
        }
    }
}

function playerCounter() {
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    if (counter) {
        player1.style.background = '#cf9139';
        player2.style.background = '';
    }
    if (!counter) {
        player2.style.background = '#cf9139';
        player1.style.background = '';
    }
}


function doItIfEnd(a, b, c, f) {
    for (let i = a; i < b; i += c) {
        itemWinner.item(i).style.color = '#2f7731';
        itemWinner.item(i).style.fontSize = '100px';
    }
    winner.innerHTML = `Player ${f} won!`;
    winner.style.color = 'white';
    turnsNumber.style.color = 'white';
    document.getElementById('turns').style.color = 'white';
    document.getElementsByClassName('sidebar').item(0).appendChild(winner);
    document.getElementsByClassName('sidebar').item(0).style.background = '#2f7731';
    for (let k = 0; k < 9; k++) {
        if (itemWinner.item(k).innerHTML == `<input id="btn" type="button" onclick="AddGame()" data-element="${k}">`) {
            itemWinner.item(k).innerHTML = "";
        }
    }
}

function checker() {
    // check for Draw
    draw();
    // check for "X"
    if ((itemWinner.item(0).innerHTML == 'X') && (itemWinner.item(1).innerHTML == 'X') && (itemWinner.item(2).innerHTML == 'X')) {
        doItIfEnd(0, 3, 1, 1);
    }
    if ((itemWinner.item(3).innerHTML == 'X') && (itemWinner.item(4).innerHTML == 'X') && (itemWinner.item(5).innerHTML == 'X')) {
        doItIfEnd(3, 6, 1, 1);
    }
    if ((itemWinner.item(6).innerHTML == 'X') && (itemWinner.item(7).innerHTML == 'X') && (itemWinner.item(8).innerHTML == 'X')) {
        doItIfEnd(6, 9, 1, 1);
    }
    if ((itemWinner.item(0).innerHTML == 'X') && (itemWinner.item(3).innerHTML == 'X') && (itemWinner.item(6).innerHTML == 'X')) {
        doItIfEnd(0, 9, 3, 1);
    }
    if ((itemWinner.item(1).innerHTML == 'X') && (itemWinner.item(4).innerHTML == 'X') && (itemWinner.item(7).innerHTML == 'X')) {
        doItIfEnd(1, 8, 3, 1);
    }
    if ((itemWinner.item(2).innerHTML == 'X') && (itemWinner.item(5).innerHTML == 'X') && (itemWinner.item(8).innerHTML == 'X')) {
        doItIfEnd(2, 9, 3, 1);
    }
    if ((itemWinner.item(0).innerHTML == 'X') && (itemWinner.item(4).innerHTML == 'X') && (itemWinner.item(8).innerHTML == 'X')) {
        doItIfEnd(0, 9, 4, 1);
    }
    if ((itemWinner.item(2).innerHTML == 'X') && (itemWinner.item(4).innerHTML == 'X') && (itemWinner.item(6).innerHTML == 'X')) {
        doItIfEnd(2, 7, 2, 1);
    }
    // check for "O"
    if ((itemWinner.item(0).innerHTML == 'O') && (itemWinner.item(1).innerHTML == 'O') && (itemWinner.item(2).innerHTML == 'O')) {
        doItIfEnd(0, 3, 1, 2);
    }
    if ((itemWinner.item(3).innerHTML == 'O') && (itemWinner.item(4).innerHTML == 'O') && (itemWinner.item(5).innerHTML == 'O')) {
        doItIfEnd(3, 6, 1, 2);
    }
    if ((itemWinner.item(6).innerHTML == 'O') && (itemWinner.item(7).innerHTML == 'O') && (itemWinner.item(8).innerHTML == 'O')) {
        doItIfEnd(6, 9, 1, 2);
    }
    if ((itemWinner.item(0).innerHTML == 'O') && (itemWinner.item(3).innerHTML == 'O') && (itemWinner.item(6).innerHTML == 'O')) {
        doItIfEnd(0, 9, 3, 2);
    }
    if ((itemWinner.item(1).innerHTML == 'O') && (itemWinner.item(4).innerHTML == 'O') && (itemWinner.item(7).innerHTML == 'O')) {
        doItIfEnd(1, 8, 3, 2);
    }
    if ((itemWinner.item(2).innerHTML == 'O') && (itemWinner.item(5).innerHTML == 'O') && (itemWinner.item(8).innerHTML == 'O')) {
        doItIfEnd(2, 9, 3, 2);
    }
    if ((itemWinner.item(0).innerHTML == 'O') && (itemWinner.item(4).innerHTML == 'O') && (itemWinner.item(8).innerHTML == 'O')) {
        doItIfEnd(0, 9, 4, 2);
    }
    if ((itemWinner.item(2).innerHTML == 'O') && (itemWinner.item(4).innerHTML == 'O') && (itemWinner.item(6).innerHTML == 'O')) {
        doItIfEnd(2, 7, 2, 2);
    }
}

function draw() {
    let j = 0;
    for (let i = 0; i <= 8; i++) {
        if (itemWinner.item(i).innerHTML == 'X' || itemWinner.item(i).innerHTML == 'O') {
            j += 1;
        }
    }
    if (j == 9) {
        winner.innerHTML = `It's a draw!`;
        winner.style.color = '#303030';
        document.getElementsByClassName('sidebar').item(0).style.background = '#cf9139';
    }

}