// importação da biblioteca express
const express = require('express');

// Criando um servidor 
const servidor = express();

// Criando as rotas dos servidor
servidor.get('/',(req,res)=>{
    console.log("Alguem fez uma requisição ...");
    res.send("devolvendo requisição ...");
})
// Por o servidor para ouvir 
    servidor.listen(3000)

// minha rota 
servidor.get('/filme',(req,res) =>{
    console.log("requisição ...");
    res.send("Hotel Transformostrão, jone vira um mostro e dracula vira humano é, eles viajam juntos");

})
//
servidor.get('/generos',(req,res) =>{
    console.log("requisição genêros ...");
    res.send("Genêro: fantasia, ação e aventura")
})

    servidor.get('/filmes/:posicao',(req,res)=>{
    // capturei a posição do filme desejada
        let posicao =req.params.posicao;
    // carregar array de filmes 
        const filmes = require('./database/filmes.json');
    // enviar para o cliente a posição requisitada
        res.send(filmes[posicao]);
    })

// servidor.get('/filmes/:nome',(req,res)=>{
//     let nome = req.params.nome;
//     const filmes = require('./database/filmes.json');
//     res.send(filmes[nome])
// })
   