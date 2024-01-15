const readline = require ('readline');

const interfaceLecture = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour saisir une information avec une question
function saisirInformation(question) {
  return new Promise((resolve) => {
    interfaceLecture.question(question, (reponse) => {
      resolve(reponse);
    });
  });
}

async function main() {
  const nom = await saisirInformation('Entrez votre nom : ');
  const prenom = await saisirInformation('Entrez votre prénom : ');
  const age = await saisirInformation('Entrez votre âge : ');

  console.log(`\nMerci ! Vous vous appelez ${prenom} ${nom} et vous avez ${age} ans.`);

  interfaceLecture.close();
}

// Appel de la fonction principale
main();
