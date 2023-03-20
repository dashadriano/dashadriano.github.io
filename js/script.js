const mobileBtn = document.getElementById('mobile-menu-cta')
            nav = document.querySelector('nav')
            mobileExitBtn = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('expand-menu');
})

mobileExitBtn.addEventListener('click', () => {
    nav.classList.remove('expand-menu');
})