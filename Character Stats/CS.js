//Variable names and asking for user input
const NAME = prompt("Whats your name?");
const HOMEWORLD = prompt("What planet do you hail from?");
const BASECLASS = prompt("What's your class? (warrior or mage)");

let currentHealth = 100;
let experiencePoints = 0;


//print out the data from the variables
console.log("Name: "+ NAME);
console.log("Homeworld: "+ HOMEWORLD);
console.log("Class: "+ BASECLASS);
console.log("Hp: "+ currentHealth);
console.log("Exp: "+ experiencePoints);
