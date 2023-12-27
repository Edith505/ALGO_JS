//La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
function getVoyelleNumber(phrase){

    //Declaré dans un tableau tout les voyelles(qui a toujours besoin de '' car c'est un string)
    const voyelle = ['a', 'e', 'i' , 'y', 'o', 'u']
    
    // Transformer tout en miniscule*
    const phraseMin = phrase.toLowerCase()

    //Initialiser le nombre de voyelle
    let nbrVoyelle = 0

    //boucle pour parcourire chaque élément de la phrase
    for(let i=0;i < phraseMin.length ;i++){

        // verifier si le caractère d'indice [i] est voyelle
        if(voyelle.includes(phraseMin[i])){

            //Incrémenter le compteur de voyelle
            nbrVoyelle ++;
        }
    }
    return nbrVoyelle;
}

const phrase = "Je ne suis pas malade pour le moment"
console.log(getVoyelleNumber(phrase))
