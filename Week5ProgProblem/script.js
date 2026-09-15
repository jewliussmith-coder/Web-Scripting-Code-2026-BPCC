const morningPoem = document.getElementById("poem-morning");

morningPoem.style.backgroundColor = "lightblue";

const westWall = document.getElementById("wall-west");
const westWallPoems = westWall.querySelectorAll("article");

console.log(westWallPoems);

const eastWall = document.getElementById("wall-east");

eastWall.appendChild(morningPoem);

morningPoem.style.backgroundColor = "lightgreen";

console.log("Moved poem:", morningPoem);
