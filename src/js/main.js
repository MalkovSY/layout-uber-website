'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header'),
        burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
  
});

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection (a, b) {
  const filteredArray = a.filter(value => b.includes(value));
  console.log(filteredArray);
}
intersection(first, second);