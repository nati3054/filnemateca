const filmes = require('../database/filmes.json')
const uniqid = require('uniqid');
const fs = require('fs');

const services = {
    listar: function(){
        return filmes;
    },
    getTitulos: function(){
        let titulos =[];
        for(let filme of filmes){
         //console.log(filme.titulo)
            titulos.push(filme.titulo)
        }
        
       
    return titulos
 
    },

    create: function(cartaz,titulo,censura,trailer,sinopse,generos){
        //1: Gerar um id para o novo filme
        let id = uniqid()

        // 2: Criar um obeto literal com as informações do novo filme
        let novoFilme = {
            id, cartaz, titulo, generos, censura, trailer, sinopse
        }
        console.log(novoFilme)
        // 3: Adicionar esse objeto criado ao array de filmes
        filmes.push(novoFilme);

        // 4: Salvar o conteúdo do array filmes no arquivo filmes.json
        fs.writeFileSync(__dirname+'/../database/filmes.json',
        JSON.stringify(filmes,null,4)
        
        )
        services.create(
            "Miranha.jpg",
            "Homem Aranha: Sem Volta para Casa",
            10,
            "http://youy",
            "Sinopse do filme que dizem que é bom",
            ["Ação", "Ficção", "Comédia"]
        )

    },
    
    
    

    
    
    
}
    


services.create();

module.exports = services;

