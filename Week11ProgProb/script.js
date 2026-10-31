"use strict";


class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }
}

class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }
}


function accessVault(key) {
    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Key is missing or corrupted");
    } 
    else if (key !== "SECRET_123") {
        throw new VaultLockedError("Incorrect key provided");
    } 
    else {
        return "Access Granted";
    }
}

try {
    console.log(accessVault("SECRET_123"));
    console.log(accessVault("WRONG_KEY"));
} catch (error) {
    console.log(error.name + ": " + error.message);
}

try {
    console.log(accessVault(undefined));
} catch (error) {
    console.log(error.name + ": " + error.message);
}

try {
    console.log(accessVault(NaN));
} catch (error) {
    console.log(error.name + ": " + error.message);
}
