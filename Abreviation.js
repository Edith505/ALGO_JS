function abreviation(nomComplet) {
    
    // Séparer le prénom et le nom
    const parties = nomComplet.split(' ');

    // Récupérer le prénom et l'initial du nom
    const prenom = parties[0];

    const initialNom = parties[1].charAt(0).toUpperCase();  
    
    // Retourner l'abréviation
    return `${prenom} ${initialNom}.`;
}

// Exemple d'utilisation
console.log( abreviation("John Doe Rakoto"));
