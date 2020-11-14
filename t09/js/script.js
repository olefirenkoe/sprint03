let container = document.body.children[1];
let sidebar = document.createElement('DIV');
let counter = true;
let count = 0;
sidebar.setAttribute('class', 'sidebar');
container.append(sidebar);

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

// function checker() {

// }

console.log(document.getElementsByClassName('item0').item(0).innerHTML); // use for function checker