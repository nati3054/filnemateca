/**1) Dado o array numerosDasCasas = [5,10,20,23,34],
 escreva o comando que retorna o array somente com os pares;
 */

const numerosDasCasas = [5,10,20,23,34];
const ehPar = n => n % 2 == 0;
const casaPares = numerosDasCasas.filter(ehPar)
console.log(casaPares);