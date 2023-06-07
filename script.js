'use strict';
 //selecting element
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const scoreEl0 = document.getElementById('score--0')   
const scoreEl1 = document.getElementById('score--1')
const currentEl0 = document.getElementById('current--0')
const currentEl1 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new') 
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold') 

//starting contition
scoreEl0.textContent = 0
scoreEl1.textContent = 0
let currentScore = 0
let scores = [0 , 0]
let activeplayer = 0

diceEl.classList.add('hidden')

//Rolling dice function
btnRoll.addEventListener('click', function(){
    //Gneraiting dice

const dice = Math.trunc(Math.random() * 6) + 1;

//Display dice
diceEl.classList.remove('hidden')

diceEl.src = `dice-${dice}.png`

//Check for rolled 1
if(dice !== 1){

    currentScore += dice
    document.getElementById(`current--${activeplayer}`).textContent =currentScore
}else
{ // switch to next player
    document.getElementById(`current--${activeplayer}`).textContent =0
    currentScore = 0
    activeplayer = activeplayer === 0 ? 1:0 ;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')

}
})




