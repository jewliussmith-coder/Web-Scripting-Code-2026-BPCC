const form = document.getElementById("feedback-form");
const errorBox = document.getElementById("error-box");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorBox.innerHTML = "";

    const name = document.getElementById("reviewer-name").value.trim();
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

    console.log("Reviewer Name:", name);
    console.log("Star Rating:", rating);
    console.log("Comments:", comments);
    errorBox.style.color = "green";
    errorBox.textContent = "Feedback submitted successfully!";
});
