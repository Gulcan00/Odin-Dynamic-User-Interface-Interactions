function showMenu(menuHandler) {
    menuHandler.addEventListener('click', () => {
        menuHandler.classList.toggle('trigger');
    })

    menuHandler.addEventListener('mouseenter', () => {
        menuHandler.classList.add('trigger');
    })
}

function initializeMenu() {
    const menuBtn = document.querySelector('button');
    showMenu(menuBtn);
}

initializeMenu();