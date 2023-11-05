let popupBg = document.querySelector('.second-win-bg');
let popup = document.querySelector('.second-win');
let openPopupButtons = document.querySelectorAll('.open-second-win');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});