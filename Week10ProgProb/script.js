class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50; //Our generic named pets are getting HUNGRY
  }

  describe() {
    return `I am a ${this.type} named ${this.name}.`;
  }

  feed() {
    this.hunger -= 10;
    //Prevent hunger from dropping below 0 for logic reasons :/
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }
}

const myPet = new Pet("Buddy", "Dog");
const anotherPet = new Pet("Mittens", "Cat");


document.getElementById("pets").innerHTML = `
  <div class="pet-card">
    <h2>${myPet.name}</h2>
    <p>${myPet.describe()}</p>
  </div>

  <div class="pet-card">
    <h2 ${anotherPet.name}</h2>
    <p>${anotherPet.describe()}</p>
  </div>
`;


console.log(myPet.describe());
console.log(anotherPet.describe());


const hungerDisplay = document.getElementById("hunger-display");
const feedBtn = document.getElementById("feed-btn");


hungerDisplay.textContent = myPet.hunger;

feedBtn.addEventListener("click", () => {
  myPet.feed();                         // Decrease hunger by 10
  hungerDisplay.textContent = myPet.hunger; // Update the screen in javascript language 
   // so random people cant figure out what it does
});
