let nb1 = prompt(`entrez un nombre:`);
let nb2 = prompt(`entrez un deusieme nombre:`);
let operateur = prompt(`+ , - , * ou /`);
let result=0

function somme(a,b){
    return a+b;
}
function soustraction(a,b){
    return a-b;
}
function produit(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}
function calcul(nb1,nb2,operateur){
    switch(operateur){
        case "+" :
            return somme(nb1,nb2);
        case "-" :
            return soustraction(nb1,nb2);
        case "*" :
            return produit(nb1,nb2);
        case "/" :
            return division(nb1,nb2);
        default :
            return "erreur"
    }
};
console.log(calcul(nb1,nb2,operateur))