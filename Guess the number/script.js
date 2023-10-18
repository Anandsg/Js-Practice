'use strict';

/*
// Printing the initial message
console.log(document.querySelector('.message').textContent);

// changing/updating the text
document.querySelector('.message').textContent = '🎉 Correct Number'

document.querySelector('.number').textContent = 30;
document.querySelector('.score').textContent = 10;

// input
document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);
*/

// Secret number 
let secretNumber = Math.trunc(Math.random() * 20) + 1;


// score (every wrong guess score should decrease)
let score = 20;
let highscore = 0;

// input action

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number((document.querySelector('.guess').value));
        console.log(guess, typeof guess);

        // when there is no input 
        if (!guess) {
            document.querySelector('.message').textContent =
                '🚨 enter a Number'

            // when there is correct guess
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🎉 Correct Number'
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor =
                '#60b347'
            document.querySelector('.number').style.width =
                '30rem'
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent =
                    highscore;
            }

            // when the guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    guess > secretNumber ? '📈 Too high!' :
                        '📉 Too low!'
                score--;
                document.querySelector('.score').textContent =
                    score;
            } else {
                document.querySelector('.message').textContent =
                    '🙁 You lose the game';
                document.querySelector('.score').textContent =
                    0;
            }
        }
    });

// reverting / play again logic

document.querySelector('.again').addEventListener('click',
    function () {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        document.querySelector('body').style.backgroundColor =
            '#222';
        document.querySelector('.message').textContent =
            'Start guessing...'
        document.querySelector('.score').textContent =
            score;
        document.querySelector('.number').textContent =
            '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width =
            '15rem'
    })