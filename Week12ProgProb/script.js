function validateName(name) {
    return /^[a-zA-Z ]{2,}$/.test(name);
}

function validateUsername(username) {
    return /^\w{3,12}$/.test(username);
}

const sampleUsers = [
    {
        name: "Alex Johnson",
        username: "alex_j"
    },
    {
        name: "B",
        username: "cool_user_123"
    },
    {
        name: "Charlie Brown",
        username: "charlie!brown"
    },
    {
        name: "Dana Scully",
        username: "da"
    },
    {
        name: "Edward Nygma",
        username: "the_riddler_super_fan"
    },
    {
        name: "Fiona Gallagher",
        username: "fiona_g"
    }
];

sampleUsers.forEach(user => {
    console.log("Name:", user.name, validateName(user.name));
    console.log("Username:", user.username, validateUsername(user.username));
});