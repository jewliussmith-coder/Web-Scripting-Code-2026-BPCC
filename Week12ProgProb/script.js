function validateName(name) {
    return /^[a-zA-Z ]{2,}$/.test(name);
}

function validateUsername(username) {
    return /^\w{3,12}$/.test(username);
}

function validatePhone(phone) {
    return /^\d{3}[-.]?\d{3}[-.]?\d{4}$/.test(phone);
}

function validatePromoCode(promo) {
    return /^SUMMER$/i.test(promo || "");
}

const sampleUsers = [
    {
        name: "Alex Johnson",
        username: "alex_j",
        phone: "555-234-5678",
        promoCode: "SUMMER"
    },
    {
        name: "B",
        username: "cool_user_123",
        phone: "555.345.6789",
        promoCode: "summer"
    },
    {
        name: "Charlie Brown",
        username: "charlie!brown",
        phone: "5554567890",
        promoCode: "SUMMER2026"
    },
    {
        name: "Dana Scully",
        username: "da",
        phone: "555-567-8901",
        promoCode: "SuMmEr"
    },
    {
        name: "Edward Nygma",
        username: "the_riddler_super_fan",
        phone: "555-678-901",
        promoCode: null
    },
    {
        name: "Fiona Gallagher",
        username: "fiona_g",
        phone: "555-789-0123",
        promoCode: ""
    }
];

sampleUsers.forEach(user => {
    console.log("Name:", user.name, validateName(user.name));
    console.log("Username:", user.username, validateUsername(user.username));
    console.log("Phone:", user.phone, validatePhone(user.phone));
    console.log("Promo Code:", user.promoCode, validatePromoCode(user.promoCode));
    console.log("-------------------------");
});
