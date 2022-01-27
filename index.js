// importação da biblioteca express
const express = require('express');

// Criando um servidor 
const servidor = express();

// Criando as rotas dos servidor
servidor.get('/',(req,res)=>{
    console.log("Alguem fez uma requisição ...");
    res.send("devolvendo requisição ...");
})


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

servidor.get('/buscar/:trecho',(req,res)=>{
    
    console.log("buscando algo...")
    res.send(req.params.trecho)
})
// Criar uma rota que responda à requisição 'http://localhost:3000/busca/????'
    // servidor.get('/busca/:trecho', (req, res)=>{
    // 1: Salvar o trecho buscado na variável 'trecho';
    // 2: Importar o conteúdo de filmes.json para uma constante 'filmes'
    // 3: Filtrar do array filmes, somente os filmes que possuam o trecho no titulo
    //    (lembrem da função filmes.filter)
    // 4: Enviar para o cliente(usando res.send) o resultado da filtragem.
    // })

    servidor.get('/busca/:trecho', (req, res)=>{
        let trecho = "Venom";
        const filmes = ( require('./database/filmes.json'));
        filmes.filter('');
        res.send();
    })


   // Por o servidor para ouvir 
   servidor.listen(3000)
  
    