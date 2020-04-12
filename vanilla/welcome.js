const background = document.querySelector(".background");
const slider = document.querySelector(".slider");
const logo = document.querySelector('#logo');
const hamburer = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(background, 1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(background, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut});
