function calculatePrice(price, quantity) {
    return price * quantity;
}

const getTax = function(amount, taxRate) {
    return amount * taxRate;
};

let subtotal = calculatePrice(15, 4);
let tax = getTax(subtotal, 0.07);

console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + tax);
