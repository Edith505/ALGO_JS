/* 
- Math.trunc() tronque (supprime la partie décimale) d'un nombre, renvoyant la partie entière.

- Math.round() effectue un arrondi classique, arrondissant un nombre à l'entier le plus proche. Si la fraction est exactement à mi-chemin, il arrondit vers le nombre pair le plus proche.

*/

let conversion = (deg) => {

    if (typeof deg !== 'number') {
        console.log("Données en entrée non-correctes");
    }
    const fahrenheit = Math.trunc(deg * (9 / 5) + 32) ;
    return fahrenheit;
}

console.log(conversion(18));
