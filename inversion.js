// Fonction pour inverser une chaîne de caractères
function inversion(str) {
    // Utilisation de split pour diviser la chaîne en un tableau de caractères,
    // reverse pour inverser l'ordre des caractères, et join pour reformer la chaîne inversée
    return str.split('').reverse().join('');
}

// Fonction pour vérifier si un mot est un palindrome
function palindrome(mots) {
    // Convertir le mot en minuscules pour une comparaison insensible à la casse
    let strMin = mots.toLowerCase();

    // Appel de la fonction inversion pour obtenir la version inversée du mot
    if (inversion(strMin) === strMin) {
        console.log(`${mots} est un palindrome`);
    } else {
        console.log(`${mots} n'est pas un palindrome`);
    }
}

// Appel de la fonction palindrome avec un exemple
palindrome('Elle');
