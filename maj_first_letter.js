// Fonction qui met en majuscule la première lettre de chaque mot dans une phrase
function majFirstLetter(word) {
    // Convertir la phrase en minuscules et la diviser en mots
    const wordLower = word.toLowerCase().split(' ');

    // Tableau pour stocker les mots avec la première lettre en majuscule
    let array = [];

    // Parcourir chaque mot dans le tableau wordLower
    wordLower.forEach(element => {
        // Obtenir la première lettre du mot en majuscule
        let firstLetter = element.charAt(0).toUpperCase();

        // Remplacer la première lettre du mot par la version en majuscule
        let replace = element.replace(element.charAt(0), firstLetter);
        
        // Ajouter le mot modifié au tableau
        array.push(replace);
    });

    // Afficher la phrase avec la première lettre de chaque mot en majuscule
    console.log(array.join(' '));
}

// Exemple d'utilisation de la fonction avec une phrase
const exemple = 'je suis le mots pour un exemple pour cet algorithme';
majFirstLetter(exemple);

// Fonction qui met en majuscule la première lettre de chaque mot dans une phrase
function majFirstLetter2(word) {
    // Convertir la phrase en minuscules et la diviser en mots
    const wordLower = word.toLowerCase().split(' ');

    // Utiliser map pour créer un nouveau tableau de mots avec la première lettre en majuscule
    const newArray = wordLower.map(element => {
        // Obtenir la première lettre du mot en majuscule
        const firstLetter = element.charAt(0).toUpperCase();

        // Remplacer la première lettre du mot par la version en majuscule
        return element.replace(element.charAt(0), firstLetter);
    });

    // Afficher la phrase avec la première lettre de chaque mot en majuscule
    console.log(newArray.join(' '));
}

// Exemple d'utilisation de la fonction avec une phrase

majFirstLetter2(exemple);

