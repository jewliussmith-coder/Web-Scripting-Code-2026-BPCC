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


function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } 
    catch (e) {
        if (e instanceof InvalidKeyError) {
            console.log("Security Alert: System corruption detected.");
        } 
        else if (e instanceof VaultLockedError) {
            console.log("User Error: Please try again.");
        } 
        else {
            throw e;
        }
    } 
    finally {
        console.log("Vault attempt completed.");
    }
}

// Automated test function
function runTest(testName, testFunction) {
    if (testFunction()) {
        console.log("PASS: " + testName);
    } else {
        console.log("FAIL: " + testName);
    }
}


runTest("Correct key grants access", function() {
    return accessVault("SECRET_123") === "Access Granted";
});


runTest("Undefined key throws InvalidKeyError", function() {
    try {
        accessVault(undefined);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
});


runTest("NaN key throws InvalidKeyError", function() {
    try {
        accessVault(NaN);
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
});


runTest("Wrong key throws VaultLockedError", function() {
    try {
        accessVault("WRONG_KEY");
        return false;
    } catch (e) {
        return e instanceof VaultLockedError;
    }
});


attemptEntry("SECRET_123");
attemptEntry("WRONG_KEY");
attemptEntry(undefined);
