// decla de tableaux

//const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];

// acces a un element du tableau

//console.log(fruits[0]); // acces au 1ere element
//console.log(fruits[3]); // acces au 4eme element
//fruits.unshift("fraise"); // ajout au debut du tableau
//fruits.push("banane"); // ajout en fin de tableau
//fruits.shift(); // supprimer le 1er element
//fruits.pop(); // supprimer le dernier element
//console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange
//console.log(Array.isArray(fruits)); // true

//creer une nouvelle variante contenant un tableau JS,avec au moins 5 entrees


const plane = ["f14","f15","f16","f117","f18"];
console.log (plane);

// - puis y ajouter une nouvelle entree au debu et a la fin

plane.unshift("f4 u corsaire");
plane.push("f22 retalaiator");
console.log (plane);

// - modifier/donner une nouvelle valeur a la 3eme entree


plane[3]="f16 tomcat"
console.log (plane)

// - donne la place dans le tableau

console.log(plane.indexOf("f117")); // ici la machine lit 4 (0.1.2.3.4....) mais en realite 5(4+1)