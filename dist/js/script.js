console.log('Crypto app');
const sections = document.querySelectorAll('section');
const points = document.querySelectorAll('.navigation .point');
const menu = document.querySelector('.menu');
const nav = document.querySelector('header .container nav');
const body = document.querySelector('body');

menu.addEventListener('click', () => {
    nav.classList.toggle('active-menu');
    body.classList.toggle('no-scroll')
});

window.addEventListener('scroll', () => {
    sections.forEach((section, i) => {
        if (window.innerHeight * 0.8 + window.scrollY > section.offsetTop) {
            points.forEach((point) => point.classList.remove('active'));
            points[i].classList.add('active')
        }
    })
});

points.forEach((point, i) => {
    point.addEventListener('click', () => {
        window.scrollTo(0, sections[i].offsetTop)
    })
});