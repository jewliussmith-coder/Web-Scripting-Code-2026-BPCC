// Select one specific poem using its ID
const morningPoem = document.getElementById("poem-morning");

// Change the background color of the poem
morningPoem.style.backgroundColor = "lightblue";

// Select all articles on the West Wall
const westWall = document.getElementById("wall-west");
const westWallPoems = westWall.querySelectorAll("article");

// Log the selected poems to the console
console.log(westWallPoems);