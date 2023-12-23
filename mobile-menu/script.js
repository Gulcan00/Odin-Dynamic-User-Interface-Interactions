function setActiveTab() {
    const tabs = document.querySelectorAll('div.nav-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        })
    })
}

setActiveTab();