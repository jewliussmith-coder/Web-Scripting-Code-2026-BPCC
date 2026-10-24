class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `I am a ${this.type} named ${this.name}.`;
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
