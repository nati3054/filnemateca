/**Dados o array pessoas = [
				{
					nome:"Natália",
					salario: 15000
				},
				{
					nome:"Sérgio Moura",
					salario: 13000
				},
				{
					nome:"Silvia",
					salario: 10000
				},
				{
					nome:"João",
					salario: 8000
				}
			]
escreva o comando que retorna todas pessoas com salário maior que 8000. */
 const pessoas = [
    {
        nome:"Natália",
        salario: 15000
    },
    {
        nome:"Sérgio Moura",
        salario: 13000
    },
    {
        nome:"Silvia",
        salario: 10000
    },
    {
        nome:"João",
        salario: 8000
    }
    
];


const salario = (pessoas => pessoas.salario > 8000 )
const filtrandoSalario = pessoas.filter(salario)
console.log(filtrandoSalario)



/**const nomes = ["Mateus", "Rhuan", "Ryee", "Gustavo"]
const palavra = (nomes => nomes.length  > 5) { O ponto .salario e um exemplo pra quando quisermos pegar algo do 
objeto literal exemplo : pessoas.salario }.
const contagem = nomes.filter(palavra)
console.log(contagem); */
