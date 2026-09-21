fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
    .then(response => {
        if (!response.ok) {
            throw new Error("Dictionary request failed");
        }
        return response.json();
    })
    .then(data => {
        if (data.entries.length === 0) {
            console.log("Word not found");
        } else {
            console.log("Word:", data.word);
            console.log("Definition:", data.entries[0].senses[0].definition);
        }
    })
    .catch(error => {
        console.log("Error: Could not connect to the dictionary service");
    });
