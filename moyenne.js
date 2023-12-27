const students = [
    {
        name: 'John',
        notes: [10, 15, 17, 12, 11]
    },
    {
        name: 'Paul',
        notes: [15, 16, 13, 11, 12]
    },
    {
        name: 'Jacques',
        notes: [15, 15, 18, 15, 13]
    },
    {
        name: 'Muriel',
        notes: [19, 16, 17, 15, 14]
    },
    {
        name: 'Mathieu',
        notes: [14, 13, 9, 8, 10]
    }
];

const moyenne = (notes) => {
    let sum = 0;
    for (let note of notes) {
        sum = sum + note;
    }
    return sum / notes.length;
};

// Calculer la moyenne pour chaque étudiant
for (let student of students) {
    student.moyenne = moyenne(student.notes);
}

// Trier les étudiants par moyenne de manière décroissante
students.sort((a, b) => b.moyenne - a.moyenne);

// Afficher la liste triée
console.log("Liste des étudiants par moyenne décroissante :");
for (let student of students) {
    console.log(`${student.name}: ${student.moyenne}`);
}

console.log("les top 3 des elèves sont : ");
for(let i = 0; i < 3 ; i++){
    console.log(`${students[i].name}: ${students[i].moyenne}`);
}
