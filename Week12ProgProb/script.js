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

function formatPhoneNumber(phone) {
    if (!validatePhone(phone)) {
        return null;
    }

    return phone.replace(
        /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/,
        "($1) $2-$3"
    );
}

function processRegistration(user) {
    const errors = [];

    if (!validateName(user.name)) {
        errors.push("Invalid name");
    }

    if (!validateUsername(user.username)) {
        errors.push("Invalid username");
    }

    if (!validatePhone(user.phone)) {
        errors.push("Invalid phone");
    }

    if (errors.length > 0) {
        return {
            success: false,
            errors: errors
        };
    }

    return {
        success: true,
        data: {
            name: user.name,
            username: user.username,
            phone: formatPhoneNumber(user.phone),
            discountApplied: validatePromoCode(user.promoCode)
        }
    };
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

sampleUsers.forEach((user, index) => {
    console.log(`Registration ${index + 1}:`);

    const result = processRegistration(user);

    console.log(result);
    console.log("------------");
});
