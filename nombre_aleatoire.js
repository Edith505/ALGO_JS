function generateRandomNumber() {
    // Math.floor pour obtenir un nombre entier entre 0 (inclus) et 10 (inclus)
    const random = Math.floor(Math.random() * 11);
    return random;
}

// Exemple d'utilisation
console.log(generateRandomNumber());


function generateRandomNumber2() {
    // Utilisation de Math.random() pour obtenir un nombre décimal entre 0 (inclus) et 1 (exclus)
    const randomNumber = Math.random();

    // Multiplication par 11 pour obtenir un nombre entre 0 (inclus) et 10 (exclus)
    const result = Math.floor(randomNumber * 11);

    return result;
}

// Exemple d'utilisation
const randomNum = generateRandomNumber2();
console.log(randomNum);
