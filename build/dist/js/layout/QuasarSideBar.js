const hamburger = document.querySelector('.q-hamburger-svg');
const line3 = hamburger.querySelector('line:nth-child(3)');
const sideBar = document.querySelector('#q-panel .q-left');
const sideContainer = document.querySelector('#q-panel .q-right');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if (hamburger.classList.contains('active')) {
        line3.setAttribute('x1', '5'); // X simgesi için uzun
        sideBar.classList.add('active');
        sideContainer.style.opacity='0.1';
    } else {
        line3.setAttribute('x1', '24'); // Orijinal kısa uzunluk
        sideBar.classList.remove('active')
        sideContainer.style.opacity='1';
    }
});

hamburger.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
}));