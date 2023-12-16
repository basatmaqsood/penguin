'use strict';
const toggle = document.getElementById('toggle-btn');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('nav-list-drawer');
  navList.classList.toggle('nav-list-hidden');

});