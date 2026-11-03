let quaVh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--quaVh', `${quaVh}px`);
window.addEventListener('resize', () => {
    let quaVh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--quaVh', `${quaVh}px`);
});