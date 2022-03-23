// let texte ="mon age"; control+: pour les commentaires
 let nombres = 49 ;
// let bouleen = true ;

// console.log(texte)
// console.log(nombres)
// console.log(bouleen)

let prenom="francois"

console.log("je \"m'appel\" "+ prenom) //trois solution ajout de guillemet 
console.log('je m\'appel '+ prenom)    // si '(4)   text '(4)
console.log(`je m'appel ${prenom} `)   // derniere version ,utile dans certain cas    `(altgr 7)     `(altgr 7)

console.log("je m'appel " + prenom +",j'ai " + nombres +" ans") // "text" + variable + "texte"
console.log(`je m'appel ${prenom},j'ai ${nombres} ans`)

console.log(`mon prenom est ${prenom},il est compose de ${prenom.length} caracteres`);

// console.log(prenom.length);//la fonction length permet de defiinr le nombre de caratere dans un texte

console.log("il y a ".length); //il y a 7 caractere 4 letres et 3 espace(compris comme caractere)

//metre en majuscule
console.log( `mon nom en majuscule : ${prenom.toUpperCase()}`);
//metre en minuscule
console.log( `mon nom en minuscule : ${prenom.toLowerCase()}`);

//extraire une sous chaine de caracteres,les index de 0 a 4 ==> 4 caracteres
console.log(`sous chaine de caratere: ${prenom.substring(0,4)}`);

//prends les 4 caractere et les transforme en MAJ
console.log(`Sous chaine : ${prenom.substring(0,4).toUpperCase()}`);

//je decoupe la chaine de carcteres
const nomcomplet="jean de la truelle"
console.log(nomcomplet.split(``));//lettre par lettre

console.log(nomcomplet.split(` `));// decoupe a chaque espaces