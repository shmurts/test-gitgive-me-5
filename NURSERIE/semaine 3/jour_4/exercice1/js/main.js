// function produit(a,b,c){
//     return a*b*c;
// }

// let x=20;
// let y=3;
// let z=4;

// total = produit(x,y,z);

// document.write(total);

// function seconde(minute){
//     return minute*60;
// };

// total = seconde(5);

// document.write(total);


//S = BxH/2 

// function surface(base,hauteur){
//     return base*hauteur/2;
// };
// total = surface(5,3);

// document.write(total);

// let tabl=["a","b",3]

// let todos = [
//     {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//     },
//     {
//     id: 2,
//     text: "Balade au vieux Lille",
//     isCompleted: true,
//     },
//     {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//     },
//     {
//     id: 4,
//     text: "Regarder la TV",
//     isCompleted: false,
//     },
// ];

// function first(tab){
//     return tab[0];
// };

// document.write(first(tabl));
// console.log (first(todos));

// let phrase1="gdsfgdgsdfsdfgsfbsfsdfbsdfbsdfbsfb";
// let phrase2="fgdfhdfbdfgdfgdfbdgbdgbgfbbgbsbsdfbsdff";

// function long(a,b){
//     return a.length > b.length ? "p1 > p2" :b.length > a.length ?"p2 > p1" : "p1 = p2"
// }
// document.write (long(phrase1,phrase2));

// let text="igor et grishka";
// let invers=[];

//invers=text.split(` `).reverse().join(` `);

// function reverser(str){
//     return str.split(` `).reverse().join(` `);

// }
// document.write(reverser(text));



// invers=text.split(` `);
// let tab=[];
// invers.forEach(function (word){
//     tab.push (word.split('').reverse().join(``));
// });
// document.write(tab.join(` `))

let phrase1 = "bonjour nous sommes le 17 mars";

function inverse(a) {
    return a.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(inverse(phrase1));

