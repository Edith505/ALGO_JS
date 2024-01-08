/**
 * // Définition de la fonction longestWord qui prend une phrase en entrée et affiche la longueur du mot le plus long
    function longestWord(word) {
    // Séparation de la phrase en mots individuels en utilisant l'espace comme délimiteur
    let wordSplit = word.split(' ');

    // Initialisation d'un tableau vide pour stocker les longueurs de chaque mot
    let array = [];

    // Boucle à travers chaque mot dans le tableau wordSplit
    for (let i = 0; i < wordSplit.length; i++) {
        // Ajout de la longueur du mot actuel au tableau
        array.push(wordSplit[i].length);
    }

    // Affichage de la longueur du mot le plus long en utilisant Math.max et l'opérateur de décomposition
    console.log(Math.max(...array));
}

// Phrase à analyser
let mot = 'ceci est un algorithme javascript qui renvoie la longueur du mot le plus long dans une phrase';

// Appel de la fonction longestWord avec la phrase en tant qu'argument
longestWord(mot);

    
}
*/


function longestWord(word) {
    // Séparation de la phrase en mots individuels en utilisant l'espace comme délimiteur
    let wordSplit = word.split(' ');

    // Initialisation d'un tableau vide pour stocker les longueurs de chaque mot
    let array = [];

    // Utilisation de forEach pour itérer à travers chaque mot dans le tableau wordSplit
    wordSplit.forEach((mot) => {
        // Ajout de la longueur du mot actuel au tableau
        array.push(mot.length);
    });

    // Utilisation de la boucle for...of pour itérer à travers chaque longueur de mot dans le tableau
    for (const length of array) {
        console.log(length);
    }

    // Affichage de la longueur du mot le plus long en utilisant Math.max et l'opérateur de décomposition
    console.log(Math.max(...array));
}

// Phrase à analyser
let mot = 'ceci est un algorithme javascript qui renvoie la longueur du mot le plus long dans une phrase';

// Appel de la fonction longestWord avec la phrase en tant qu'argument
longestWord(mot);
