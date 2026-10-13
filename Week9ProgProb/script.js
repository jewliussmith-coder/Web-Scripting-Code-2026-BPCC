const form = document.getElementById("feedback-form");
const errorBox = document.getElementById("error-box");
const welcomeBox = document.getElementById("welcome-box");
const successBox = document.getElementById("success-box");
const nameInput = document.getElementById("reviewer-name");

const savedName = localStorage.getItem("reviewerName");

if (savedName) {
    welcomeBox.textContent = `Welcome back, ${savedName}! Ready to submit another wonderful review?`;
    nameInput.value = savedName;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorBox.innerHTML = "";
    successBox.textContent = "";
    welcomeBox.textContent = "";

    const name = nameInput.value.trim();
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    let errors = [];

    if (name === "") {
        errors.push("Please provide your name.");
    }

    if (rating !== "5") {
        errors.push("Our company standard requires a 5-star rating.");
    }

    if (!comments.toLowerCase().includes("wonderful")) {
        errors.push("Comments must include the word 'wonderful'.");
    }

    if (errors.length > 0) {
        errorBox.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
        errorBox.style.color = "red";
        return;
    }

    localStorage.setItem("reviewerName", name);

    successBox.textContent = `Thank you, ${name}! Your glowing review has been recorded.`;
    successBox.style.color = "green";

    console.log("Reviewer Name:", name);
    console.log("Star Rating:", rating);
    console.log("Comments:", comments);
});

