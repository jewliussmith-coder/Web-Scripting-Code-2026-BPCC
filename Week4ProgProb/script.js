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
