//Variable names and asking for user input
const NAME = prompt("Whats your name?");
const HOMEWORLD = prompt("What planet do you hail from?");
const BASECLASS = prompt("What's your class? (warrior or mage)");

let currentHealth = 100;
let experiencePoints = 0;

//original power level
let powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);

//print out the data from the variables
console.log("Name: "+ NAME);
console.log("Homeworld: "+ HOMEWORLD);
console.log("Class: "+ BASECLASS);
console.log("Hp: "+ currentHealth);
console.log("Exp: "+ experiencePoints);
console.log("Power Level:" + powerLevel);

//Find the health potion
currentHealth += 20;
experiencePoints += 50;

//Power level should increase from that
powerLevel = (currentHealth * 0.5) + (experiencePoints * 10);

console.log("After Using Your Backpocket HP potion")
console.log("Health" + currentHealth)
console.log("Exp: "+ experiencePoints);
console.log("Power Level:" + powerLevel);


