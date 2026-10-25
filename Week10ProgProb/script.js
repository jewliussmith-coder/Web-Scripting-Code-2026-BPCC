class Pet {
  constructor(name, type = "Animal") {
    this.name = name;
    this.type = type;
    this.hunger = 50;
  }

  describe() {
    return `I am a ${this.type} named ${this.name}.`;
  }

  feed() {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }
}


const petsContainer = document.getElementById("pets-container");
const petNameInput = document.getElementById("pet-name-input");
const addPetBtn = document.getElementById("add-pet-btn");


function createPetCard(pet) {
  
  const card = document.createElement("div");
  card.classList.add("pet-card");

 
  const nameHeading = document.createElement("h2");
  nameHeading.textContent = pet.name;

  const descP = document.createElement("p");
  descP.textContent = pet.describe();

  const hungerP = document.createElement("p");
  hungerP.innerHTML = `Hunger Level: <span class="hunger-display">${pet.hunger}</span>`;

  
  const feedBtn = document.createElement("button");
  feedBtn.textContent = "Feed Pet";

  
  feedBtn.addEventListener("click", () => {
    pet.feed();
    const hungerSpan = hungerP.querySelector(".hunger-display");
    hungerSpan.textContent = pet.hunger;
  });

  
  card.appendChild(nameHeading);
  card.appendChild(descP);
  card.appendChild(hungerP);
  card.appendChild(feedBtn);

  
  petsContainer.appendChild(card);
}


addPetBtn.addEventListener("click", () => {
  const name = petNameInput.value.trim();
  
  if (name !== "") {
    const newPet = new Pet(name);       
    createPetCard(newPet);             
    petNameInput.value = "";           
  }
});
