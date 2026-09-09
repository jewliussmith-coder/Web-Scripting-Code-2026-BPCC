const storeInfo = {
    name: prompt("Store Name: "),
    taxRate: Number(prompt("Enter Tax Rate (%): ")),
    tableFee: Number(prompt("Enter standard table/service fee: "))
};

console.log(`Welcome to ${storeInfo.name}!`);
console.log(`The standard table fee is $${storeInfo.tableFee.toFixed(2)}.`)

const receiptItems = [];

let continueOrdering = "Y";

while (continueOrdering.toUpperCase() === "Y"){
    const itemName = prompt("Enter the food item's name: ")
    const itemPrice = Number(prompt("Enter the item's price: "))

    const item = {
        name: itemName,
        price: itemPrice
    };

    receiptItems.push(item);

    continueOrdering = prompt("Do you want to order another item? Enter Y to contine.")


}

console.log(`Total items: ${receiptItems.length}`)
console.log("Receipt Item: ", receiptItems);

let subtotal = 0;

for (const item of receiptItems){
    console.log(`${item.name} -- $${item.price.toFixed(2)}`)
    subtotal += item.price;
}

console.log(`Total food subtotal: $${subtotal.toFixed(2)}`);

const removedItem = receiptItems.pop();

if(removedItem){
    console.log(`Removed item: ${removedItem.name}`);

} else {
    console.log("No items available to removed.");

}

subtotal = 0;

for (const item of receiptItems) {
    subtotal += item.price;
}

const grossSubtotal = subtotal + storeInfo.tableFee;

const taxAmount = grossSubtotal * (storeInfo.taxRate / 100);

const grandTotal = grossSubtotal + taxAmount;


console.log("\nFINAL RECEIPT");
console.log(`Store: ${storeInfo.name}`);
console.log("\nItems:");

for (const item of receiptItems) {
    console.log(`${item.name} -- $${item.price.toFixed(2)}`);
}

console.log(`\nFood Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Table Fee: $${storeInfo.tableFee.toFixed(2)}`);
console.log(`Subtotal: $${grossSubtotal.toFixed(2)}`);
console.log(`Tax: $${taxAmount.toFixed(2)}`);
console.log(`Grand Total: $${grandTotal.toFixed(2)}`);
