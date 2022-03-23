let cars =["bmw","volvo","saab","ford","fiat","audi"]
let long =[]
let i=0;
// while (i < cars.length){
//  document.write(`il y a ${cars[i].length} caractere dans:${cars[i]}<br>`);
//  long[i]=cars[i].length;
//  i++;
// }
// console.log (long);

for(let i=0;i<cars.length;i++){
    long.push(cars[i].length)
}

console.log (long)

