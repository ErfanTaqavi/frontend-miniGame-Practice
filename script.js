'use strict';

const scoreEl0 = document.getElementById('score--0')   
const scoreEl1 = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new') 
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold') 
scoreEl0.textContent = 0
scoreEl1.textContent = 0
diceEl.classList.add('hidden')

btnRoll.addEventListener('click', function(){

const dice = Math.trunc(Math.random() * 6) + 1;


diceEl.classList.remove('hidden')
diceEl.src = `dice-${dice}.png`
})


