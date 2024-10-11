const correctPassword = "ISPSC2024";

let userPassword;

do {
    userPassword = prompt("Please enter your password:");

    if (userPassword !== correctPassword) {
        console.log("Incorrect password. Please try again.");
    }
} while (userPassword !== correctPassword);

console.log("Access granted. Welcome!");
