let a = Number(prompt("entrez la valeur de a:"));
let b = Number(prompt("entrez la valeur de b:"));
let calcul = prompt ("choisissez: +,-,*,/");
let result=0


const somme  = (a,b) => a+b;
const soustraction = (a,b) => a-b;
const produit = (a,b) => a*b;
const division = (a,b) => a/b;
const modulo = (a,b) => a%b;

switch(calcul) {
    case calcul="+":
         result = somme
    break;
    case calcul="-":
         result = soustraction
    break;
    case calcul="*":
        result = produit
    break;
    case calcul="/":
        result = division
        break;
    case calcul="%":
        result = modulo
        break;
    default:
        result="erreur"
    }

document.write(result(a,b));
