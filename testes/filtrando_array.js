// Escreva uma função que retorna true se for maior que 20 e caso o contrario false
// function maiorQueVinte(numero) {
//     if(numero > 20 ){
//         return true
//     }else{
//         return false
//     }
// }
const maiorQueVinte = (numero) => 20 < numero 
//let filtrados = numeros.filter(n => n > 20);
console.log(maiorQueVinte(30));
// Quando a função so tem um parametro não precisa do parentese (caso especifico)



const numeros = [2,6,7,10,25,17,6,18,100,20];
// Exibir numeros do array que são maiores que 20
let filtrados = numeros.filter(maiorQueVinte);
console.log(filtrados);

