// let hello = process.argv[2]
// let name = process.argv[3]
// let surName = process.argv[4]


// ? = se questo è vero ---fai questo--- : = altrimenti
//se la variabile hello che contiene proccess.argv[2] è vera fai questo proccess.argv[2] altimenti stringa
let hello = process.argv[2] ? process.argv[2] : "Io"
let name = process.argv[3] ? process.argv[3] : "Sono"
let surName = process.argv[4] ? process.argv[4] : "Batman"

console.log(hello, name, surName)




//ESPERIMENTI

// const x = parseInt(process.argv[2]);
// const y = parseInt(process.argv[3]);

// const somma = 10+ 10;
// const moltiplicazione = x * y;
// const sottrazione = x - y;
// const divisione = x / y;

// console.log({somma, moltiplicazione, sottrazione, divisione})