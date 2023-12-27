// Fonction principale pour compter le nombre de voyelles dans une phrase
function getVoyelleNumber(phrase) {
    // Définition des voyelles
    const voyelles = ['a', 'e', 'i', 'y', 'o', 'u'];

    // Conversion de la phrase en minuscules
    const phraseMinuscules = convertirEnMinuscules(phrase);

    // Appel de la fonction pour compter les voyelles
    let nombreDeVoyelles = compterVoyelles(phraseMinuscules, voyelles);

    // Renvoie du nombre de voyelles
    return nombreDeVoyelles;
}

// Fonction pour convertir une phrase en minuscules
function convertirEnMinuscules(phrase) {
    return phrase.toLowerCase();
}

// Fonction pour compter les voyelles dans une phrase
function compterVoyelles(phraseMinuscules, voyelles) {
    // Initialisation du compteur de voyelles
    let compteurVoyelles = 0;

    // Boucle pour parcourir chaque caractère de la phrase
    for (let i = 0; i < phraseMinuscules.length; i++) {
        // Vérification si le caractère courant est une voyelle
        if (estVoyelle(phraseMinuscules[i], voyelles)) {
            // Incrémentation du compteur de voyelles
            compteurVoyelles++;
        }
    }

    // Renvoie du nombre total de voyelles dans la phrase
    return compteurVoyelles;
}

// Fonction pour vérifier si un caractère est une voyelle
function estVoyelle(caractere, voyelles) {
    return voyelles.includes(caractere);
}

// Phrase à analyser
const phrase = "Je ne suis pas malade pour le moment";

// Appel de la fonction principale et affichage du résultat
console.log(getVoyelleNumber(phrase));
