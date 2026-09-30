const floor = document.getElementById("dance-floor");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const dancer = document.getElementById("dancer");

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const panelTimer = setInterval(() => {
    panel1.style.backgroundColor = randomColor();
    panel2.style.backgroundColor = randomColor();
}, 1500);

floor.addEventListener("click", () => {
    floor.style.backgroundColor = randomColor();
});

dancer.addEventListener("click", (event) => {
    event.stopPropagation();
    dancer.textContent = dancer.textContent === "🕺" ? "💃" : "🕺";
});

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        dancer.textContent = "🕴️";
    } else if (event.key === "ArrowDown") {
        dancer.textContent = "💃";
    } else if (event.key === "ArrowLeft") {
        dancer.textContent = "🕺";
    } else if (event.key === "ArrowRight") {
        dancer.textContent = "🪩";
    } else if (event.key.toLowerCase() === "r") {
        floor.style.backgroundColor = "black";
        clearInterval(panelTimer);
    }
});


