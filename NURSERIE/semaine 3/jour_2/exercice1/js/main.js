let text1=("bla bla bla bla bla bla bla blablablab  bla hsfvkjsdjkd dfg g sdf gsd fg sdfg sdf s sd gs dfg .");
let text2=(" bfbsf bsdfvsf sfsdf sdf sdf sd f f dfhgjhgjhj sdf sdf d fg d d sdf sf dv d f  dfv v dv  v d qv dfv sdf");

//forme de base

// if (text1.length > text2.length)
// {
//   resultat = "le premier texte est plus grand"
// }
// else if(text1.length < text2.length)
// {
//   resultat ="le second texte est plus grand"
// }
// else 
// {
//     resultat= "les deux textes on la meme longeur"
// };
// console.log (resultat);

//form ternaire

let resultat = text1.length > text2.length ?"texte 1 > texte 2" :text1.length < text2.length ? "texte 2 > texte 1" :"les deux textes sont egaux";
console.log (resultat);

let vehicule=[
    {
    fabriquant:"renault",
    type:"voiture",
    modele:"twingo",
    age:15,
},
{
    fabriquant:"volvo",
    type:"camion",
    modele:"fh16",
    age:1,
},
{
    fabriquant:"ferrari",
    type:"voiture",
    modele:"f40",
    age:20
},
];

let ageresult = vehicule[0].age <= 5 ? "vehicule recent" : "vehicule encient"
let typev = vehicule[0].type == "voiture" ? "voiture" : "camion"
console.log (`le vehicule est: ${typev} c'est un ${ageresult}`);