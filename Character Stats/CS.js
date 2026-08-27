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
console.log("Health " + currentHealth)
console.log("Exp: "+ experiencePoints);
console.log("Power Level:" + powerLevel);

//TRAINING MONTAGE
for (let day = 1; day <= 5; day++){
    experiencePoints += 20;
    console.log("Day "+ day + ": Training.... XP: " + experiencePoints)

}
console.log("After Training XP is now at: "+ experiencePoints)

//TIME TO FIGHT 

let bossHealth = 160

console.log("==Big Boss Fight==")

while (currentHealth > 0 && bossHealth > 0){
    let heroDamage = Math.floor(Math.random() * 21) + 10; //generate a random number from 10 to 30
    let bossDamage = Math.floor(Math.random() * 21) + 5; // 5 to 25

    bossHealth -= heroDamage;
    currentHealth -= bossDamage;

    console.log("Hero dealt " + heroDamage + " damage.")
    console.log("Boss dealt " + bossDamage + " damage.")
    console.log("Hero HP: ", currentHealth);
    console.log("Boss HP: ", bossHealth);


}
if (currentHealth <= 0 && bossHealth <= 0){
    console.log("DRAW TRY AGAIN");
} else if (currentHealth <= 0){
    console.log("The Big Boss WINS!");
} else {
    console.log("You WIN!");
}