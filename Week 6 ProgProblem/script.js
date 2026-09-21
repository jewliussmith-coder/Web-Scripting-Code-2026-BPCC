const searchBtn = document.getElementById("search-btn");
const wordInput = document.getElementById("word-input");
const resultContainer = document.getElementById("result-container");

searchBtn.addEventListener("click", () => {
    const word = wordInput.value.trim().toLowerCase();

    resultContainer.replaceChildren();

    if (word === "") {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Please enter a word.";
        resultContainer.appendChild(errorMessage);
        return;
    }

    fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Dictionary request failed");
            }
            return response.json();
        })
        .then(data => {
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
        })
        .catch(error => {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Could not connect to the dictionary service.";
            resultContainer.appendChild(errorMessage);
        });
});
