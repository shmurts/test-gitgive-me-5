//let cars =["bmw","volvo","saab","ford","fiat","audi"]


//for (let i = 0;i < cars.length; i++) {
//  document.write(cars[i]+ "<br>");// cars[i] recupere l'objet dans la liste
//}

let todos = [
    {
    id: 1,
    text: "Faire les courses",
    isCompleted: true,
    },
    {
    id: 2,
    text: "Balade au vieux Lille",
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
// for (let i=0;i < todos.length;i++){
//     if (todos[i].isCompleted==true){
//         document.write(`la tache:${todos[i].text} est complete <br>`);
//     }else document.write(`la tache:${todos[i].text} est non compete <br>`);
// }

// for (let i=0;i< todos.length;i++){
//     let message = todos[i].isCompleted == true ? `la tache: ${todos[i].text} est complete `: `la tache ${todos[i].text} est incomplete`
// document.write(message +"<br>");
// }

// let result="";

// for (let i=0;i< todos.length;i++){
//     message = todos[i].isCompleted? `complete`:`incomplete`;
//     result +=`la tache ${todos[i].text} est ${message} le texte fait ${todos[i].longueur = todos[i].text.length}caracteres <br>`
// }
// document.write(result);

// todos.forEach(function (todo){
//   document.write(`la tache est ${todo.isCompleted? `complete`:`incomplete`}<br>`)
// });

let listeTodo=todos.map(function (todo) {
    return todo.text;
    });

let listepar2=listeTodos.map(function (nb) {
    return nb*2;
    });
    
console.log(listeTodo);
console.log(listepar2);

