const calculatePrice = (price, quantity) => price * quantity;

const getTax = (amount, taxRate) => amount * taxRate;

let subtotal = calculatePrice(15, 4);
let tax = getTax(subtotal, 0.07);

console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + tax);


function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;
    return getTax(amount, defaultTaxRate);
}

console.log(calculateStoreTax(100));

// console.log(defaultTaxRate);


function applyDiscount(total, discountCallback) {
    return discountCallback(total);
}

function studentDiscount(total) {
    return total * 0.90;
}

function seniorDiscount(total) {
    return total * 0.80;
}

console.log(applyDiscount(100, studentDiscount));
console.log(applyDiscount(100, seniorDiscount));


function calculateFinalBill(price, quantity, discountCallback) {
    let subtotal = calculatePrice(price, quantity);
    let discountedPrice = applyDiscount(subtotal, discountCallback);
    let taxAmount = getTax(discountedPrice, 0.07);
    return discountedPrice + taxAmount;
}

console.log(calculateFinalBill(20, 3, studentDiscount));
