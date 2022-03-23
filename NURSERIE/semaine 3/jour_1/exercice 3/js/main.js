// Les objets

// const personne = {
// prenom: "Julien",
// nom: "La garde",
// age: 30,
// passions: ["foot", "natation", "jeux videos"],
// adresse : {
// rue : "rue Nationale",
// ville : "Lille",
// pays : "France"
// }
// };

// afficher un objet

// console.log(personne);

// acces aux attributs de l'objet

// console.log(personne.prenom); // acces au prenom
// console.log(personne.passions[0]); // acces au 1er element des pas
// sions
// console.log(personne.adresse.rue); // acces a la rue (qui est lui meme un attribut de l'objet adresse')
// personne.prenom="Julie"; // modifie la valeur d'un attribut
// console.log(personne.prenom); // afficher la nouvelle valeur
// personne.email="julie@example.com"; // ajout d'un nouvel attribut
// console.log(personne); // affiche le nouvel attribu

let client = {
    nom: "menvuca",
    prenom: "gerard",
    age: 40,
    rayon: ["livre", "audio", "video", "merch"],
    adresse: {
        rue: "champ elysee",
        ville: "paris",
        pays: "france",
    }
};

console.log(`${client.prenom} ${client.nom} est age de ${client.age} ans.il habite: ${client.adresse.rue} a ${client.adresse.ville}`)

client.rayon.push("cadeau"); 
console.log(client.rayon);

client.rayon[4]="carte fidelite";
console.log(client.rayon);

client.adresse.rue="du chateau";
console.log (client.adresse);

