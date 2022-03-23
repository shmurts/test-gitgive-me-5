const todos = [
    {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
    },
    {
    id: 2,
    text: "Balade au vieux Lille"
    ,
    isCompleted: true,
    },
    {
    id: 3,
    text: "Préparer le diner",
    isCompleted: false,
    },
    {
    id: 4,
    text: "Regarder la TV",
    isCompleted: false,
    },
    ];

    // afficher un tableau d'objets

    console.log(todos);

    // afficher l'attribut text du 1er objet du tableau
    
    console.log(todos[0].text);

    // declarer une nouvelle variable "age" avec la valeur que vous voulez,
    // puis a l'aide d'un block "if" afficher dans la console si la personne est majeur ou mineur

    let age=15;
    if (age>=18){
        console.log("la personne est majeur")
    }
    else {
        console.log( "la personne n'est pas majeur")
    };


let perf=82; // ctrl d+d+d+d.... selection multiple
let prime=0;

 if (perf>=90){
    prime=200
}
else if (perf>=80){
    prime=150
}
else if (perf>=70){
    prime=100
}
else {
    prime=0
} 
console.log (`votre performance est de ${perf},votre prime sera de ${prime}€`)

// let message = x > 10 ? "commande permise" : "commande non permise";

let agemaj = age >=18 ? "majeur" : "mineur" ;
console.log (agemaj);