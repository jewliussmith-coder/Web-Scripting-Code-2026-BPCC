const storeInfo = {
    name: prompt("Store Name: "),
    taxRate: Number(prompt("Enter Tax Rate (%): ")),
    tableFee: Number(prompt("Enter standard table/service fee: "))
};

console.log(`Welcome to ${storeInfo.name}!`);
console.log(`The standard table fee is $${storeInfo.tableFee.toFixed(2)}.`)
