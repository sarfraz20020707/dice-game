'use strict';

//select element.

const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// get element by id is faster then query selector.
// . only for class
// # is for id 
// selecting element by id getElementById
let score, currentscore, activeplayer, playing;

const init = function () {

    score = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
}
//rolling dice functionallity

btnRoll.addEventListener('click', function () {
    if (playing) {
        // generating an random dice roll.
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentscore += dice;
            //current0El.textContent = currentscore;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        }
        else {
            // document.getElementById(`current--${activeplayer}`).textContent = currentscore;
            // currentscore = 0;
            // activeplayer = activeplayer === 0 ? 1 : 0;
            // player0E1.classList.toggle('player--active');
            // player1E1.classList.toggle('player--active');
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        score[activeplayer] += currentscore;
        // console.log(score[activeplayer]);
        //  score[1] = score[1]+currentscore
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
        if (score[activeplayer] >= 20) {
            playing = false
            diceEl.classList.add('hidden');

            //  diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }
        else {
            switchPlayer();

        }
    }
})

// btnNew.addEventListener('click', init);

// btnHold.addEventListener('click', function () {
//     if (playing) {
//         // 1. Add current score to active player's score
//         scores[activePlayer] += currentScore;
//         // scores[1] = scores[1] + currentScore

//         document.getElementById(`score--${activePlayer}`).textContent =
//             scores[activePlayer];

//         // 2. Check if player's score is >= 100
//         if (scores[activePlayer] >= 100) {
//             // Finish the game
//             playing = false;
//             diceEl.classList.add('hidden');

//             document
//                 .querySelector(`.player--${activePlayer}`)
//                 .classList.add('player--winner');
//             document
//                 .querySelector(`.player--${activePlayer}`)
//                 .classList.remove('player--active');
//         } else {
//             // Switch to the next player
//             switchPlayer();
//         }
//     }
// });