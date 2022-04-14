const FilmesController = {
    index: (req, res) => {
        const filmes = require('../database/filmes.json');
        res.render('index.ejs',{filmes});
    },
    listarFilmes: (req, res) => {
        const filmes = require('../database/filmes.json')
        res.send(filmes);
    },
    buscaPelaPosicao: (req, res) => {
        let posicao = req.params.posicao;
        const filmes = require('../database/filmes.json');
        let filme = filmes[posicao];
        res.render('filme.ejs',{filme})
    },
    buscarPorTrecho: (req, res) => {
        let trecho = req.query.busca;
        const filmes = require('../database/filmes.json');
        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let filmesFiltrados = filmes.filter(filtradora);
        res.render('index.ejs',{filmes: filmesFiltrados});
    },
    buscarPorId: (req, res) => {
        //capturar o id do filme 
        let id = req.params.id
        // importar o conteudo dos filmes 
        const filmes = require('../database/filmes.json');
        // definir função filtradorar
        let filtradorar = filme => {
            if(filme.id == id){
            return true
        }else{
            return false 
        }
    }
    // encontrando filmes que possui esse id desejado 
    const filme = filmes.find(filtradorar)

    // retornando a view de fime para o cliente 
    res.render('filme.ejs',{filme})
    
    },

    buscarPorGenero: (req, res) => {

    },
    addFilme: (req,res) =>{
        res.send(req.body)
    }
    
 }

module.exports = FilmesController