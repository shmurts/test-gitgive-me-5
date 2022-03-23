//prompt(`bonjour`)     //fait apparaitre une boite de dialogue avec le message bonjour

// let age = prompt(`indiquez votre age`)
// console.log(age)

// let result ='';

// switch (true) {
//     case age < 18:
//         console.log("mineur");
//         break;
//     case age >= 18:
//         console.log("majeur");
//         break;
//     case age >= 60:
//         console.log("retraite");
//         break;
//     default:
//         console.log("erreur");
//     }

// switch (true) {
//     case age>=0 && age < 18:
//        result="mineur";
//        break;
//     case age >= 18 && age <60:
//        result="majeur";
//        break;
//     case age >= 60:
//        result="retraite";
//        break;
//     default:
//         result="erreur";
//     };
// console.log(result);

let grade=prompt(`votre grade(junior,confirme,senior):`);
let paye=0;

switch (grade){
    case "junior":
        paye=1800;
        break;
    case "confirme":
        paye=2500;
        break;
    case "senior":
        paye=3200;
        break;
    default:
        paye=0;
};
console.log(`votre grade est:${grade},votre salaire sera de:${paye}€`);


// version 1

let roue = parseInt(prompt(`nombre de roues`)); //parseInt transforme les caractere en nombres
let result = ``;

switch(roue){
    case 2:
        result="moto";
        break;
    case 4:
        result="auto";
        break;
    case 6:
        result="camion";
    default:
        result="autre";
};
console.log(result);

//version 2

switch(true){
    case roue ==2:// == (verifie qu'on ai 2 ou le caratere "2")
        result="moto";
        break;
    case roue ==4:
        result="vouture";
        break;
    case roue ==6:
        result="camion";
        break;
    default :
        result="autres";
};
console.log(result);

//version 3

let roue = parseInt(prompt(`nombre de roues`)); 
let result = ``;

switch(true){
    case roue ===2:// === verifie que c'est bien un nombre(strictement egale)
        result="moto";
        break;
    case roue ===4:
        result="vouture";
        break;
    case roue ===6:
        result="camion";
        break;
    default :
        result="autres";
};
console.log(result);
