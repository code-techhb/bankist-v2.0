'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button learn more scroll
btnScrollTo.addEventListener('click', (e) => {
  const s1coordinates = section1.getBoundingClientRect();
  // scrolling with behavior defined
  window.scrollTo({
    left: s1coordinates.left + window.scrollX,
    top: s1coordinates.top + window.scrollY,
    behavior: 'smooth',
  });
  // scrolling in modern way
  // section1.scrollIntoView({ behavior: 'smooth' });
});

// Event delegation
document.querySelector('.nav__link').addEventListener('click', function (e) {
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    // smooth scrolling
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Cookie msg
const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.innerHTML = `We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;
header.append(msg);
header.before(msg);
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  msg.remove();
});
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 30 + 'px';

////////////////////////////////////////////////////////////
////////////////////// Lecture notes ////////////////////

// pagination
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
//   // stop propagation > not a good idea though in general
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });
