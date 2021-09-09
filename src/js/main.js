'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
        burger = document.querySelector('.burger');

  burger.addEventListener('click', () => {
    menu.classList.toggle('menu__list_active');
  })
  
});