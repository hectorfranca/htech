serviceItem = document.getElementById('service-item')
priceItem = document.getElementById('price-item')
aboutItem = document.getElementById('about-item')
servicesSection = document.getElementsByClassName('services')[0]
pricesSection = document.getElementsByClassName('prices')[0]
aboutSection = document.getElementsByClassName('about')[0]
topButton = document.getElementsByClassName('top-link')[0]

serviceItem.addEventListener('click', () => window.scrollTo(0, servicesSection.offsetTop - 80))
priceItem.addEventListener('click', () => window.scrollTo(0, pricesSection.offsetTop - 80))
aboutItem.addEventListener('click', () => window.scrollTo(0, aboutSection.offsetTop - 80))
topButton.addEventListener('click', () => window.scrollTo(0, 0))