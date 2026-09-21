const searchBtn = document.getElementById("search-btn");
const wordInput = document.getElementById("word-input");
const resultContainer = document.getElementById("result-container");

async function searchDictionary(word) {
    resultContainer.replaceChildren();

    if (word === "") {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Please enter a word.";
        resultContainer.appendChild(errorMessage);
        return;
    }

    const response = await fetch(
        `https://freedictionaryapi.com/api/v1/entries/en/${word}`
    );

    if (!response.ok) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Service Down";
        resultContainer.appendChild(errorMessage);
        return;
    }

    const data = await response.json();

    if (data.entries.length === 0) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Word not found.";
        resultContainer.appendChild(errorMessage);
        return;
    }

    const wordTitle = document.createElement("h2");
    wordTitle.textContent = data.word;
    resultContainer.appendChild(wordTitle);

    const definitionList = document.createElement("ul");

    data.entries[0].senses.forEach(sense => {
        const listItem = document.createElement("li");
        listItem.textContent = sense.definition;
        definitionList.appendChild(listItem);
    });

    resultContainer.appendChild(definitionList);
}

searchBtn.addEventListener("click", () => {
    const word = wordInput.value.trim().toLowerCase();
    searchDictionary(word);
});
