primaryMinusButton = document.getElementById('primary-minus-button')
primaryPlusButton = document.getElementById('primary-plus-button')
primaryQuantity = document.getElementById('primary-quantity')
primaryTenancy = document.getElementById('primary-tenancy')
primarySale = document.getElementById('primary-sale')
secondaryMinusButton = document.getElementById('secondary-minus-button')
secondaryPlusButton = document.getElementById('secondary-plus-button')
secondaryQuantity = document.getElementById('secondary-quantity')
secondaryTenancy = document.getElementById('secondary-tenancy')
secondarySale = document.getElementById('secondary-sale')

primaryTenancyPrice = 200
primarySalePrice = 2700
secondaryTenancyPrice = 300
secondarySalePrice = 3300

// Primary
primaryMinusButton.addEventListener('click', () => {
    if (parseInt(primaryQuantity.innerText) > 1) {
        primaryQuantity.innerText = parseInt(primaryQuantity.innerText) - 1
        newTenancyValue = parseFloat(primaryTenancy.innerText.replace('R$', '').replace('.', '').replace(' / mês'), '') - primaryTenancyPrice
        newSaleValue = parseFloat(primarySale.innerText.replace('R$', '').replace('.', '')) - primarySalePrice
        primaryTenancy.innerText = newTenancyValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' / mês'
        primarySale.innerText = newSaleValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
})

primaryPlusButton.addEventListener('click', () => {
    if (parseInt(primaryQuantity.innerText) < 10) {
        primaryQuantity.innerText = parseInt(primaryQuantity.innerText) + 1
        newTenancyValue = parseFloat(primaryTenancy.innerText.replace('R$', '').replace('.', '').replace(' / mês'), '') + primaryTenancyPrice
        newSaleValue = parseFloat(primarySale.innerText.replace('R$', '').replace('.', '')) + primarySalePrice
        primaryTenancy.innerText = newTenancyValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' / mês'
        primarySale.innerText = newSaleValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
})

// Secondary
secondaryMinusButton.addEventListener('click', () => {
    if (parseInt(secondaryQuantity.innerText) > 1) {
        secondaryQuantity.innerText = parseInt(secondaryQuantity.innerText) - 1
        newTenancyValue = parseFloat(secondaryTenancy.innerText.replace('R$', '').replace('.', '').replace(' / mês'), '') - secondaryTenancyPrice
        newSaleValue = parseFloat(secondarySale.innerText.replace('R$', '').replace('.', '')) - secondarySalePrice
        secondaryTenancy.innerText = newTenancyValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' / mês'
        secondarySale.innerText = newSaleValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
})

secondaryPlusButton.addEventListener('click', () => {
    if (parseInt(secondaryQuantity.innerText) < 10) {
        secondaryQuantity.innerText = parseInt(secondaryQuantity.innerText) + 1
        newTenancyValue = parseFloat(secondaryTenancy.innerText.replace('R$', '').replace('.', '').replace(' / mês'), '') + secondaryTenancyPrice
        newSaleValue = parseFloat(secondarySale.innerText.replace('R$', '').replace('.', '')) + secondarySalePrice
        secondaryTenancy.innerText = newTenancyValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + ' / mês'
        secondarySale.innerText = newSaleValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }
})