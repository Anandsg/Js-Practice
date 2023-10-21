'use strict';


// selectig the ids
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');

const score0Ele = document.querySelector('#score--0');
// we can also use get element by id method to select the id
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');

const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Ele.textContent = 0;
score1Ele.textContent = 0;

diceEle.classList.add('hidden');

// 1. Rolling the dice functionality

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;



btnRoll.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice)

    // 2. display the dice image
    diceEle.classList.remove('hidden');
    diceEle.src = `dice-${dice}.png`;

    // 3. check for roll 1 if true, 
    if (dice !== 1) {
        // add dice to current score 
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        // Switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        // changing the background colour when user switch
        player0Ele.classList.toggle('player--active');
        player1Ele.classList.toggle('player--active');
    }

})