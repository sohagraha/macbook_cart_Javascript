let totalPrice = grandTotal()

// convert any text to price 
function textToPrice(price) {
    let priceText = document.getElementById(price).innerText;
    let priceFloat = parseFloat(priceText);
    return priceFloat;
}

// Update Total And grand Total from price table 
function grandTotal() {
    let basePrice = textToPrice('basePrice');
    let extraMemoryCost = textToPrice('extraMemoryCost');
    let extraStorageCost = textToPrice('extraStorageCost');
    let deliveryCharge = textToPrice('deliveryCharge')
    let totalPrice = basePrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    document.getElementById('totalPrice').innerText = totalPrice
    document.getElementById('grandTotal').innerText = totalPrice
    return totalPrice;
}

// Using Promo Code and update the Grand Total
function promoCal(price) {
    let total = 0;
    let grandTotal = 0
    let couponTxt = document.getElementById('promoId').value;
    price = textToPrice('totalPrice')
    if (couponTxt == 'stevekaku') {
        total = price * .2;
        grandTotal = price - total;
    }
    else {
        grandTotal = price;
    }
    document.getElementById('grandTotal').innerText = grandTotal;
    document.getElementById('promoId').value = '';
}

// click on Promo and calculate the total if promo is valid 
document.getElementById('promoBtnId').addEventListener('click', function () {
    promoCal(totalPrice);
})

// update the total everytime when select different specification 
function valueupdate(id, price) {
    document.getElementById(id).innerText = price;
    grandTotal()
}

// click on 8GB memory and add $0 on Extra Memory Cost
document.getElementById('memoryOne').addEventListener('click', function () {
    valueupdate('extraMemoryCost', 0)
})
// click on 16GB memory and add $180 on Extra Memory Cost
document.getElementById('memoryTwo').addEventListener('click', function () {
    valueupdate('extraMemoryCost', 180)
})

// click on 256GB storage and add $0 on Extra storage Cost
document.getElementById('storageOne').addEventListener('click', function () {
    valueupdate('extraStorageCost', 0)
})
// click on 512GB storage and add $100 on Extra storage Cost
document.getElementById('storageTwo').addEventListener('click', function () {
    valueupdate('extraStorageCost', 100)
})
// click on 1TB storage and add $180 on Extra storage Cost
document.getElementById('storageThree').addEventListener('click', function () {
    valueupdate('extraStorageCost', 180)
})

// click on Prime Delivery timeline and add $0 on Delivery Charge
document.getElementById('deliveryOne').addEventListener('click', function () {
    valueupdate('deliveryCharge', 0)
})
// click on Delivery $20 timeline and add $20 on Delivery Charge
document.getElementById('deliveryTwo').addEventListener('click', function () {
    valueupdate('deliveryCharge', 20)
})
