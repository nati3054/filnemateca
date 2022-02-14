/**2) Dados o array saldos = [10,100,22,25,34],
 escreva o comando que retorna o array somente com os múltiplos de 5; */
const saldos = [10,100,22,25,34];
const multiplosDeCinco = s => s % 5 == 0 ;
const casasImpares = saldos.filter(multiplosDeCinco)
console.log(casasImpares);

/** 
 const casasImpares = saldos.filter(s=> s % 5 ==0)
console.log(casasImpares);
*/
    