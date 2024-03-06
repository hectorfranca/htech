serviceItem = document.getElementById('service-item')
priceItem = document.getElementById('price-item')
aboutItem = document.getElementById('about-item')
servicesSection = document.getElementsByClassName('services')[0]
pricesSection = document.getElementsByClassName('prices')[0]
aboutSection = document.getElementsByClassName('about')[0]
topButton = document.getElementsByClassName('top-link')[0]
menuMobile = document.getElementsByClassName('menu-mobile')[0]
menu = document.getElementsByClassName('menu')[0]

function preventDefault(e) {
    e.preventDefault();
}

function disableScroll() {
    window.addEventListener('touchmove', preventDefault, {passive: false});
}
function enableScroll() {
    window.removeEventListener('touchmove', preventDefault, {passive: false});
}

// Menu item
serviceItem.addEventListener('click', () => {
    window.scrollTo(0, servicesSection.offsetTop - 80)
    menu.style.display = 'none';
    enableScroll()
})
priceItem.addEventListener('click', () => {
    window.scrollTo(0, pricesSection.offsetTop - 80)
    menu.style.display = 'none';
    enableScroll()
})
aboutItem.addEventListener('click', () => {
    window.scrollTo(0, aboutSection.offsetTop - 80)
    menu.style.display = 'none';
    enableScroll()
})

topButton.addEventListener('click', () => window.scrollTo(0, 0))

// Mobile button
menuMobile.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        enableScroll()
    } else {
        menu.style.display = 'flex';
        disableScroll()
    }
})