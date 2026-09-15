const morningPoem = document.getElementById("poem-morning");

morningPoem.style.backgroundColor = "lightblue";

const westWall = document.getElementById("wall-west");
const westWallPoems = westWall.querySelectorAll("article");

console.log(westWallPoems);

const eastWall = document.getElementById("wall-east");

eastWall.appendChild(morningPoem);

morningPoem.style.backgroundColor = "lightgreen";

console.log("Moved poem:", morningPoem);

const addPoemButton = document.getElementById("add-poem-btn");

addPoemButton.addEventListener("click", function () {
const titleInput = document.getElementById("poem-title");
const linesInput = document.getElementById("poem-lines");
const colorInput = document.getElementById("poem-color");
const wallSelect = document.getElementById("wall-select");

```
const title = titleInput.value;
const lines = linesInput.value;
const color = colorInput.value;
const selectedWall = document.getElementById(wallSelect.value);

const newPoem = document.createElement("article");
const newTitle = document.createElement("h3");
const newText = document.createElement("p");

newTitle.textContent = title;
newText.textContent = lines;

newPoem.appendChild(newTitle);
newPoem.appendChild(newText);

newPoem.style.backgroundColor = color;

selectedWall.appendChild(newPoem);

titleInput.value = "";
linesInput.value = "";
```

});
